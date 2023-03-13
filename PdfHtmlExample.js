import fs from 'fs';
import {
    Pdf,
    HtmlResource
} from "@dynamicpdf/api"
import { Console } from 'console';

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-bookmarks

export class PdfHtmlExample {
    static async Run() {
        var basePath = "c:/temp/dynamicpdf-api-samples/html-pdf/";
        var pdf = new Pdf();
        pdf.apiKey =  "DP.xxx-api-key-xxx";
        pdf.addHtml("<html><p>This is a test.</p></html>")
        var resource = new HtmlResource(basePath + "HtmlWithAllTags.html");
        pdf.addHtml(resource);

        pdf.addHtml("<html><img src='./images/logo.png'></img></html>", "https://www.dynamicpdf.com");
        
        var res = await pdf.process();
    
        if (res.isSuccessful) {
            var outFile = basePath + "html-output-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
                console.log(res.errorJson);
        }
    }
}
        
await PdfHtmlExample.Run();