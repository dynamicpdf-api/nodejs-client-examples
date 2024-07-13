import fs from 'fs';
import {
    Pdf,
    PageSize,
    Orientation,
    HtmlResource
} from "@dynamicpdf/api"


import {Constants} from './constants.js';

export class HtmlToPdf {
    static async Run() {

        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;

        pdf.addHtml("<html>An example HTML fragment.</html>");

        pdf.addHtml("<html><p>HTML with basePath.</p><img src='./images/logo.png'></img></html>",
        "https://www.dynamicpdf.com", PageSize.LETTER, Orientation.PORTRAIT,1);

        var resourcePath = basePath + "/products.html";
        pdf.addHtml(new HtmlResource(resourcePath), null, PageSize.LETTER, Orientation.PORTRAIT, 1);

        var res = await pdf.process();

        if(res.isSuccessful) {
            var outStream = fs.createWriteStream(Constants.OutputPath + "html-output-node.pdf");
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await HtmlToPdf.Run();