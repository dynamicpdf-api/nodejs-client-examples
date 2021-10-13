import fs from 'fs';
import {
    Pdf,
    PageNumberingElement,
    ElementPlacement,
    RgbColor,
    Font
} from "@dynamicpdf/api"

export class PdfExample {
    static async Run() {
        var pdf = new Pdf();
        var pageInput = pdf.AddPage(1008, 612);
        var pageNumberingElement = new PageNumberingElement("1", ElementPlacement.TopRight);
        pageNumberingElement.Color = RgbColor.Red;
        pageNumberingElement.Font = Font.Courier;
        pageNumberingElement.FontSize = 24;
        pageInput.Elements.push(pageNumberingElement);
        var res = await pdf.Process();
        if (res.IsSuccessful) {
            var outFile = "./output/pageExample.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: ", outFile);
        }
    }
}