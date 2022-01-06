import fs from 'fs';
import {
    Pdf,
    PdfResource
} from "@dynamicpdf/api"


// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-merging-pdfs

export class MergePdfs {

    static async Run() {
              
        var pdf = new Pdf();
        var pdfInput = pdf.AddPdf(new PdfResource("C:/temp/dynamicpdf-api-samples/DocumentA.pdf"));
        pdfInput.StartPage = 1;
        pdfInput.PageCount = 1;

        pdf.AddPdf(new PdfResource("C:/temp/dynamicpdf-api-samples/DocumentB.pdf"));


        pdf.AddPdf("samples/merge-pdfs-pdf-endpoint/DocumentC.pdf");
        

        pdf.ApiKey =  "DP.xxx--api-key---xxx";
        
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