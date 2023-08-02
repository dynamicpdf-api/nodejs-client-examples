import fs from 'fs';
import {
    Pdf,
    LayoutDataResource,
    PdfResponse,
    PdfResource

} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-dlex-pdf-endpoint

export class CreatePdfDlex {
    static async Run() {

        var pdf = new Pdf();
        pdf.apiKey = "DP.xxx-api-key-xxx";

        var layoutDataResource = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/create-pdf-dlex/SimpleReportWithCoverPage.json");
        pdf.addDlex("samples/creating-pdf-pdf-endpoint/SimpleReportWithCoverPage.dlex", layoutDataResource);

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/create-pdf-dlex/create-pdf-dlex-output_nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await CreatePdfDlex.Run();
