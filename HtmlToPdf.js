import fs from 'fs';
import {
    Pdf,
    PageSize,
    Orientation,
    HtmlResource
} from "@dynamicpdf/api"

export class HtmlToPdf {
    static async Run() {
        var basePath = "C:/temp/html-to-pdf";
        var apiKey = "DP.Hl2Bf2W4/gYolisjLNdGDdTtabv72VusVPQuTpBZnB+yRosSl90fUdYl";
        var savePath = "c:/temp/html-to-pdf/html-output-node.pdf";

        var pdf = new Pdf();
        pdf.basePath = "http://api.dynamicpdf.com/";
        pdf.apiKey = apiKey;

        pdf.addHtml("<html>An example HTML fragment.</html>");

        pdf.addHtml("<html><p>HTML with basePath.</p><img src='./images/logo.png'></img></html>",
        "https://www.dynamicpdf.com", PageSize.LETTER, Orientation.PORTRAIT,1);

        var resourcePath = basePath + "/products.html";
        pdf.addHtml(new HtmlResource(resourcePath), null, PageSize.LETTER, Orientation.PORTRAIT, 1);

        var res = await pdf.process();

        if(res.isSuccessful) {
            var outStream = fs.createWriteStream(savePath);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await HtmlToPdf.Run();