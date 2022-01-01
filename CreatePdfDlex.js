import fs from 'fs';
import {
    Pdf,
    LayoutDataResource,
    PdfResponse,
    PdfResource

} from "@dynamicpdf/api"

export class CreatePdfDlex {
    static async Run() {

        var pdf = new Pdf();
        pdf.ApiKey = "DP.xxx-api-key-xxx";

        var layoutDataResource = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/create-pdf-dlex/SimpleReportWithCoverPage.json");
        pdf.AddDlex("samples/creating-pdf-pdf-endpoint/SimpleReportWithCoverPage.dlex", layoutDataResource);
        
        var pdfResource = new PdfResource("C:/temp/dynamicpdf-api-samples/create-pdf-dlex/DocumentA.pdf");
        pdf.AddPdf(pdfResource);

        var res = await pdf.Process();

        if (res.IsSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/create-pdf-dlex/create-pdf-dlex-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
        } else {
            console.log(res.ErrorJson);
        }
    }
}
await CreatePdfDlex.Run();