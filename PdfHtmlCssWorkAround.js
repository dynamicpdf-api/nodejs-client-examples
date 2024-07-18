import fs from 'fs';
import {
    Pdf,
    PageSize,
    Orientation,
    HtmlResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class PdfHtmlCssWorkAround {

    static async Run() {


        var pdf = new Pdf();
        pdf.basePath = "http://api.dynamicpdf.com/";
        pdf.apiKey = Constants.ApiKey;
     
        var tempHtml = fs.readFileSync(Constants.BasePath + "users-guide/example.html", 'utf8');
        var tempCss = fs.readFileSync(Constants.BasePath + "users-guide/example.css", 'utf-8');

        var sb = tempHtml.substring(0, tempHtml.indexOf("<link"));

        sb = sb + "<style>" + tempCss + "</style>";

        tempHtml = tempHtml.substring(tempHtml.indexOf("<link"));
        sb = sb + tempHtml.substring(tempHtml.indexOf("/>") + 2);

        var resource = new HtmlResource(sb);
        pdf.addHtml(resource);
        var res = await pdf.process();

        if(res.isSuccessful) {
            var outStream = fs.createWriteStream(Constants.OutputPath + "html-output-css-workaround.pdf");
            outStream.write(res.content);
            outStream.close();
        }
    }
}
//await PdfHtmlCssWorkAround.Run();