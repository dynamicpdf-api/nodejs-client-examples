import fs from 'fs';
import {
    Pdf,
    PageSize,
    Orientation,
    HtmlResource
} from "@dynamicpdf/api"

export class PdfHtmlCssWorkAround {

    static async Run() {

        var basePath = "c:/temp/users-guide-resources/";
        var savePath = "c:/temp/dynamicpdf-api-usersguide-examples/nodejs-output/html-output-css-workaround.pdf";

        var pdf = new Pdf();
        pdf.basePath = "http://api.dynamicpdf.com/";
        pdf.apiKey = "DP---API-KEY---";
     
        var tempHtml = fs.readFileSync(basePath + "example.html", 'utf8');
        var tempCss = fs.readFileSync(basePath + "example.css", 'utf-8');

        var sb = tempHtml.substring(0, tempHtml.indexOf("<link"));

        sb = sb + "<style>" + tempCss + "</style>";

        tempHtml = tempHtml.substring(tempHtml.indexOf("<link"));
        sb = sb + tempHtml.substring(tempHtml.indexOf("/>") + 2);

        var resource = new HtmlResource(sb);
        pdf.addHtml(resource, null, PageSize.LETTER, Orientation.PORTRAIT,1);
        var res = await pdf.process();

        if(res.isSuccessful) {
            var outStream = fs.createWriteStream(savePath);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await PdfHtmlCssWorkAround.Run();