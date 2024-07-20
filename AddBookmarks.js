// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================
import fs from 'fs';
import {
    Pdf,
    PdfResource,
    RgbColor,
    UrlAction
} from "@dynamicpdf/api"
import { Console } from 'console';
import { ClientApiUtility } from './ClientApiUtility.js';
import {Constants} from './constants.js';

export class AddBookmarks {

    static async Run() {
        
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey

        var resourceA = new PdfResource(Constants.BasePath + "add-bookmarks/DocumentA.pdf");
        var resourceB = new PdfResource(Constants.BasePath + "add-bookmarks/DocumentB.pdf");
        var resourceC = new PdfResource(Constants.BasePath + "add-bookmarks/DocumentC.pdf");

        var inputA = pdf.addPdf(resourceA);
        inputA.Id = "DocumentA";

        var inputB = pdf.addPdf(resourceB);
        inputB.Id = "DocumentB";

        var inputC = pdf.addPdf(resourceC);
        inputC.Id = "DocumentC";

        var rootOutline = pdf.outlines.add("Three Bookmarks");
        rootOutline.expanded = true;

        var childOutlineA = rootOutline.children.add("DocumentA", inputA);
        var childOutlineB = rootOutline.children.add("DocumentB", inputB, 2);
        var childOutlineC = rootOutline.children.add("DocumentC", inputC);

        childOutlineA.color = RgbColor.red;
        childOutlineB.color = RgbColor.orange;
        childOutlineC.color = RgbColor.green;

        var outlineD = rootOutline.children.add("DynamicPDF API");
        outlineD.color = RgbColor.blue;
        outlineD.action = new UrlAction("https://dpdf.io/");

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "add-bookmarks-javascript-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
AddBookmarks.Run();
