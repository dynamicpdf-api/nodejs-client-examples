import fs from 'fs';
import {
    Pdf,
    FormField,
    PdfResource
} from "@dynamicpdf/api"

export class OutlineTutorialExample {

    static async Run() {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Existing Pdf Example";

        var resource = new PdfResource("./Resources/instructions-examples/AllPageElements.pdf");
        var input = pdf.AddPdf(resource);
        input.Id = "AllPageElements";
        var resource1 = new PdfResource("./Resources/instructions-examples/outline-existing.pdf");
        var input1 = pdf.AddPdf(resource1);
        input1.Id = "outlineDoc1";
        var rootOutline = pdf.Outlines.Add("Imported Outline");
        rootOutline.Expanded = true;
        rootOutline.Children.AddPdfOutlines(input);
        rootOutline.Children.AddPdfOutlines(input1);

        var res = await pdf.Process();

        if (res.IsSuccessful) {
            var outFile = "./output/outline-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: ", outFile);
        }
    }
}