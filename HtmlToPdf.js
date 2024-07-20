// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    Pdf,
    PageSize,
    Orientation,
    HtmlResource
} from "@dynamicpdf/api"


import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class HtmlToPdf {
    static async Run() {

        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;

        pdf.addHtml("<html>An example HTML fragment.</html>");

        pdf.addHtml("<html><p>HTML with basePath.</p><img src='./images/logo.png'></img></html>",
        "https://www.dynamicpdf.com");

        var resourcePath = Constants.BasePath + "/users-guide/products.html";
        pdf.addHtml(new HtmlResource(resourcePath));

        var res = await pdf.process();

        if(res.isSuccessful) {
            var outStream = fs.createWriteStream(Constants.OutputPath + "html-output-node.pdf");
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await HtmlToPdf.Run();