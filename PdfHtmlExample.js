import fs from 'fs';
import { Console } from 'console';
import {
    Pdf,
    HtmlResource
} from "@dynamicpdf/api"



export class PdfHtmlExample {
    static async Run() {
        var localPath = "./resources/converting-html-pdf-endpoint/";
        var apiKey = "DP--api-key--";
        var outputPath = "./output/";
       
        var pdf = new Pdf();
        pdf.apiKey =  apiKey;
        pdf.addHtml("<html>An example HTML fragment.</html>")
        pdf.addHtml("<html><img src='./images/logo.png'></img></html>", "https://www.dynamicpdf.com");

        var resource = new HtmlResource(localPath + "products.html");
        pdf.addHtml(resource);

        var res = await pdf.process();
    
        if (res.isSuccessful) {
            var outFile = outputPath + "html-output-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
                console.log(res.errorJson);
        }
    }
}
        
await PdfHtmlExample.Run();