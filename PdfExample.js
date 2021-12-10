import fs from 'fs';
import {
    Pdf,
    PageNumberingElement,
    elementPlacement,
    RgbColor,
    Font
} from "@dynamicpdf/api"

export class PdfExample {
    static async Run() {
        var pdf = new Pdf();
        var pageInput = pdf.addPage(1008, 612);
        var pageNumberingElement = new PageNumberingElement("1", elementPlacement.topRight);
        pageNumberingElement.color = RgbColor.red;
        pageNumberingElement.font = Font.courier;
        pageNumberingElement.fontSize = 24;
        pageInput.elements.push(pageNumberingElement);
        var res = await pdf.process();
        if (res.isSuccessful) {
            var outFile = "./output/pageExample.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
            console.log("Pdf was generated and saved at: ", outFile);
        }
    }
}