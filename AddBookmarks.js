import fs from 'fs';
import {
    Pdf,
    PdfResource,
    RgbColor,
    Outline,
    UrlAction
} from "@dynamicpdf/api"
import { Console } from 'console';

export class AddBookmarks {

    static async Run() {

        var pdf = new Pdf();
        pdf.ApiKey = "DP.OxhJEc44gxTwzGkzRVJJ7Z+ijY9AbiF5E3CO87mwfEnvTrFoyWsRPv8R";

        var resourceA = new PdfResource("c:/temp/dynamicpdf-api-samples/add-bookmarks/DocumentA.pdf");
        var resourceB = new PdfResource("c:/temp/dynamicpdf-api-samples/add-bookmarks/DocumentB.pdf");
        var resourceC = new PdfResource("c:/temp/dynamicpdf-api-samples/add-bookmarks/DocumentC.pdf");

        var inputA = pdf.AddPdf(resourceA);
        inputA.Id = "DocumentA";

        var inputB = pdf.AddPdf(resourceB);
        inputB.Id = "DocumentB";

        var inputC = pdf.AddPdf(resourceC);
        inputC.Id = "DocumentC";

        var rootOutline = pdf.Outlines.Add("Three Bookmarks");
        rootOutline.Expanded = true;

        var childOutlineA = rootOutline.Children.Add("DocumentA", inputA);
        var childOutlineB = rootOutline.Children.Add("DocumentB", inputB, 2);
        var childOutlineC = rootOutline.Children.Add("DocumentC", inputC);

        childOutlineA.Color = RgbColor.Red;
        childOutlineB.Color = RgbColor.Orange;
        childOutlineC.Color = RgbColor.Green;

        var outlineD = rootOutline.Children.Add("DynamicPDF Cloud API");
        outlineD.Color = RgbColor.Blue;
        outlineD.Action = new UrlAction("https://cloud.dynamicpdf.com/");

        var res = await pdf.Process();

        if (res.IsSuccessful) {
            var outFile = "c:/temp/dynamicpdf-api-samples/add-bookmarks/add-bookmarks-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
        } else {
            console.log(res.ErrorJson);
        }
    }
}
await AddBookmarks.Run();