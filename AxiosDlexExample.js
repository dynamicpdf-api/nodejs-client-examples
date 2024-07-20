// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import axios from 'axios';
import FormData from "form-data";
import { ClientApiUtility } from './ClientApiUtility.js';
import {Constants} from './constants.js';

export class AxiosDlexExample {

  static async Run() {

    
      // simulate reading from a buffer in memory, note, if using a JSON
      // file you could just use fs.createReadStream in the data.append method
      // data.append('LayoutData', fs.createReadStream("c:/temp/example/SimpleReportWithCoverPage.json"));

      const obj = fs.readFileSync(Constants.BasePath + "creating-pdf-pdf-endpoint/SimpleReportWithCoverPage.json", "utf-8");
      const buffer = Buffer.from(obj, "utf8");

      // create formdata and append the HTTP Post Fields
      
      const data = new FormData();
      data.append('LayoutData', buffer, 'instructions.json');
      
      // if using DLEX in Cloud Storage use DlexPath
      
      //data.append('DlexPath', 'samples/dlex-layout/SimpleReportWithCoverPage.dlex');

      // if using DLEX locally, use Resource. Do not forget to include any embedded images
      // as the DLEX file contains a relative path to the image

      data.append('Resource', fs.createReadStream(Constants.BasePath + "creating-pdf-pdf-endpoint/SimpleReportWithCoverPage.dlex"));
      data.append('Resource', fs.createReadStream(Constants.BasePath + "creating-pdf-pdf-endpoint/Northwind Logo.gif")); 

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        responseType: 'stream',
        url: 'https://api.dynamicpdf.com/v1.0/dlex-layout',
        headers: { 
          'Authorization': 'Bearer ' + Constants.ApiKey,
          'Content-Type':'multipart/form-data', 
          ...data.getHeaders()
        },
        data : data
      };
        
      axios.request(config)
      .then((response) => {
          response.data.pipe(fs.createWriteStream(Constants.OutputPath + "axios-output.pdf"))
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
await AxiosDlexExample.Run();