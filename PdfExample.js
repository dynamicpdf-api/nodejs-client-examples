import fs from 'fs';
import {
    Pdf,
    PageNumberingElement,
    elementPlacement,
    RgbColor,
    Font
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class PdfExample {
    
    static async Run() {
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;
        var pageInput = pdf.addPage(1008, 612);
        var pageNumberingElement = new PageNumberingElement("1", elementPlacement.topRight);
        pageNumberingElement.color = RgbColor.red;
        pageNumberingElement.font = Font.courier;
        pageNumberingElement.fontSize = 24;
        pageInput.elements.push(pageNumberingElement);
        var res = await pdf.process();
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "nodejs-pdf-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
//await PdfExample.Run();