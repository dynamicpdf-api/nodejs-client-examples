import fs from 'fs';
import {
    Pdf,
    TextElement,
    elementPlacement,
    PdfResource
} from "@dynamicpdf/api"

export class BookmarksSolution {

    
    static async Run() {

        var basePath = "C:/temp/dynamicpdf-api-samples/outlines/";
        var apiKey = "DP--api-key--";
        var pdf = new Pdf();
        pdf.basePath = "https://api.dynamicpdf.com/";
        pdf.apiKey = apiKey;

        var pageInput1 = pdf.addPage();
        var element1 = new TextElement("Hello World 2", elementPlacement.topCenter);
	    pageInput1.elements.push(element1);

	    var pageInput2 = pdf.addPage();
	    var element2 = new TextElement("Hello World 3", elementPlacement.topCenter);
	    pageInput2.elements.push(element2);

	    var inputA = pdf.addPdf(new PdfResource(basePath + "PdfOutlineInput.pdf"));
	    
        var res = await pdf.process();
       
        if (res.isSuccessful) {
            var outFile = basePath + "outlines-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await BookmarksSolution.Run();