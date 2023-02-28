import fs from 'fs';
import {
    Pdf,
    PdfResource
} from "@dynamicpdf/api"


// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-merging-pdfs

export class MergePdfs {

    static async Run() {
              
        var pdf = new Pdf();
        var pdfInput = pdf.addPdf(new PdfResource("C:/temp/dynamicpdf-api-samples/DocumentA.pdf"));
        pdfInput.startPage = 1;
        pdfInput.pageCount = 1;

        pdf.addPdf(new PdfResource("C:/temp/dynamicpdf-api-samples/DocumentB.pdf"));


        pdf.addPdf("samples/merge-pdfs-pdf-endpoint/DocumentC.pdf");
        

        pdf.apiKey =  "DP<API-KEY>";
        
        var res = await pdf.Process();
        
        if (res.IsSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/merge-pdfs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
        } else {
            console.log(res.ErrorJson);
        }
    }
}
await MergePdfs.Run();
