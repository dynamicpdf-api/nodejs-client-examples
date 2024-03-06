import fs from 'fs';
import {
    Pdf,
    PdfResource
} from "@dynamicpdf/api"


export class MergePdfs {

    static async Run() {
              
        var pdf = new Pdf();
        var pdfInput = pdf.addPdf(new PdfResource("C:/temp/dynamicpdf-api-samples/DocumentA.pdf"));
        pdfInput.startPage = 1;
        pdfInput.pageCount = 1;


        var pdfResource = new PdfResource();
        pdf.addPdf(new PdfResource("C:/temp/dynamicpdf-api-samples/DocumentB.pdf"));


        pdf.addPdf("samples/merge-pdfs-pdf-endpoint/DocumentC.pdf");
        

        pdf.apiKey =  "DP.xxx-api-key-xxx";
        
        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/merge-pdfs-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await MergePdfs.Run();