import fs from 'fs';
import {
    Pdf,
    PdfResource,
    RgbColor,
    UrlAction
} from "@dynamicpdf/api"
import { Console } from 'console';

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-bookmarks

export class AddBookmarks {

    static async Run() {

        var pdf = new Pdf();
        pdf.apiKey = "DP<API-KEY>";

        var resourceA = new PdfResource("c:/temp/dynamicpdf-api-samples/add-bookmarks/DocumentA.pdf");
        var resourceB = new PdfResource("c:/temp/dynamicpdf-api-samples/add-bookmarks/DocumentB.pdf");
        var resourceC = new PdfResource("c:/temp/dynamicpdf-api-samples/add-bookmarks/DocumentC.pdf");

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

        var outlineD = rootOutline.children.add("DynamicPDF Cloud API");
        outlineD.color = RgbColor.blue;
        outlineD.action = new UrlAction("https://cloud.dynamicpdf.com/");

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = "c:/temp/dynamicpdf-api-samples/add-bookmarks/add-bookmarks-javascript-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await AddBookmarks.Run();
