import fs from 'fs';
import axios from 'axios';
import FormData from "form-data";

export class AxiosDlexExample {

  static async Run() {

      const basePath = "c:/temp/example/";

      // simulate reading from a buffer in memory, note, if using a JSON
      // file you could just use fs.createReadStream in the data.append method
      // data.append('LayoutData', fs.createReadStream("c:/temp/example/SimpleReportWithCoverPage.json"));

      const obj = fs.readFileSync(basePath + "SimpleReportWithCoverPage.json", "utf-8");
      const buffer = Buffer.from(obj, "utf8");

      // create formdata and append the HTTP Post Fields
      
      const data = new FormData();
      data.append('LayoutData', buffer, 'instructions.json');
      
      // if using DLEX in Cloud Storage use DlexPath
      
      //data.append('DlexPath', 'samples/dlex-layout/SimpleReportWithCoverPage.dlex');

      // if using DLEX locally, use Resource. Do not forget to include any embedded images
      // as the DLEX file contains a relative path to the image

      data.append('Resource', fs.createReadStream(basePath + "SimpleReportWithCoverPage.dlex"));
      data.append('Resource', fs.createReadStream(basePath + "NorthwindLogo.gif")); 

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        responseType: 'stream',
        url: 'https://api.dynamicpdf.com/v1.0/dlex-layout',
        headers: { 
          'Authorization': 'Bearer DP--api-key--',
          'Content-Type':'multipart/form-data', 
          ...data.getHeaders()
        },
        data : data
      };
        
      axios.request(config)
      .then((response) => {
          response.data.pipe(fs.createWriteStream("C:/temp/example/output.pdf"))
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
await AxiosDlexExample.Run();