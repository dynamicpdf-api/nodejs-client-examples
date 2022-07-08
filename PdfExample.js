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
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.xxx--api-key--xxx";
        var pdf = new Pdf();
        pdf.apiKey = apiKey;
        var pageInput = pdf.addPage(1008, 612);
        var pageNumberingElement = new PageNumberingElement("1", ElementPlacement.TopRight);
        pageNumberingElement.color = RgbColor.red;
        pageNumberingElement.font = Font.courier;
        pageNumberingElement.fontSize = 24;
        pageInput.elements.push(pageNumberingElement);
        var res = await pdf.process();
        if (res.isSuccessful) {
            var outFile = "nodejs-pdf-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await PdfExample.Run();