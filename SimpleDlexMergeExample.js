import fs from 'fs';
import {
    Pdf,
    LayoutDataResource,
    PdfResponse,
    PdfResource

} from "@dynamicpdf/api"

export class SimpleDlexMergeExample {
    static async Run() {

        var pdf = new Pdf();
     
        var layoutDataResource = new LayoutDataResource("./Resources/client-libraries-examples/SimpleReportData.json");
        pdf.AddDlex("samples/shared/dlex/SimpleReportWithCoverPage.dlex", layoutDataResource);
        
        var pdfResource = new PdfResource("./Resources/client-libraries-examples/DocumentA100.pdf");
        pdf.AddPdf(pdfResource);

        var res = await pdf.Process();

        if (res.IsSuccessful) {
            var outFile = "./output/SimpleReport-Output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: ", outFile);
        }
    }
}