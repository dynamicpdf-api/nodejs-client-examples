import fs from 'fs';
import {
    Pdf,
    PdfResource
} from "@dynamicpdf/api"


export class SplitPdf {

    static async Run() {
        
        var apikey = "DP--api-key--";

        var pdf = new Pdf();
        pdf.apiKey =  apikey;
        
        var pdf2 = new Pdf();
        pdf2.apiKey = apikey;

        SplitPdf.Split(pdf, 1, 3, "./resources/split-pdf/split-one.pdf")
        SplitPdf.Split(pdf, 6, 2, "./resources/split-pdf/split-two.pdf");
 
    }

    static async Split(pdf, startPage, pageCount, outFile) {

        var pdfInput = pdf.addPdf(new PdfResource("./resources/split-pdf/pdfnumberedinput.pdf"));
        pdfInput.startPage = startPage;
        pdfInput.pageCount = pageCount;

        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await SplitPdf.Run();