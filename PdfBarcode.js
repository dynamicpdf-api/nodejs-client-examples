import fs from 'fs';
import {
    Pdf,
    elementPlacement,
    RgbColor,
    Code11BarcodeElement
} from "@dynamicpdf/api"

export class PdfBarcode {
    
    static async Run() {
        var outputPath = "C:/temp/dynamicpdf-api-samples/output/";
        var apiKey = "DP--api-key--";
        var pdf = new Pdf();
        pdf.basePath = "https://api.dynamicpdf.com/";
        pdf.apiKey = apiKey;

        var pageInput = pdf.addPage(1008, 612);
        
        var code11BarcodeElement = new Code11BarcodeElement("12345678", elementPlacement.topCenter, 200, 50, 50);
		code11BarcodeElement.color = RgbColor.red;
		pageInput.elements.push(code11BarcodeElement);
        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = outputPath + "barcode-createpdf-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await PdfBarcode.Run();