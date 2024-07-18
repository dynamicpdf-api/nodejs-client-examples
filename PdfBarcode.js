import fs from 'fs';
import {
    Pdf,
    elementPlacement,
    RgbColor,
    Code11BarcodeElement
} from "@dynamicpdf/api"
        
import {Constants} from './constants.js';

export class PdfBarcode {
    
    static async Run() {

        
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;
        var pageInput = pdf.addPage(1008, 612);
        
        var code11BarcodeElement = new Code11BarcodeElement("12345678", elementPlacement.topCenter, 200, 50, 50);
		code11BarcodeElement.color = RgbColor.red;
		pageInput.elements.push(code11BarcodeElement);
        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "barcode-create-pdf-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
//await PdfBarcode.Run();