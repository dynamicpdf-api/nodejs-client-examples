import fs from 'fs';
import { Console } from 'console';
import {
    Pdf,
    HtmlResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class PdfHtmlExample {
    static async Run() {
       
        var pdf = new Pdf();
        pdf.apiKey =  Constants.ApiKey;
        pdf.addHtml("<html>An example HTML fragment.</html>")
        pdf.addHtml("<html><img src='./images/logo.png'></img></html>", "https://www.dynamicpdf.com");

        var resource = new HtmlResource(Constants.BasePath + "converting-html-pdf-endpoint/products.html");
        pdf.addHtml(resource);

        var res = await pdf.process();
    
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "html-output-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
                console.log(res.errorJson);
        }
    }
}
        
//await PdfHtmlExample.Run();