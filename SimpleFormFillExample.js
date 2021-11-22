import fs from 'fs';
import {
    Pdf,
    FormField,
    PdfResource
} from "@dynamicpdf/api"

export class SimpleFormFillExample {
    static async Run() {

        var pdf = new Pdf();
        pdf.AddPdf("samples/shared/pdf/simple-form-fill.pdf");

        var formField = new FormField("nameField", "DynamicPDF");
        var formField2 = new FormField("descriptionField", "DynamicPDF CloudAPI. RealTime PDFs, Real FAST!");
        pdf.FormFields.push(formField);
        pdf.FormFields.push(formField2);

        var res = await pdf.Process();
        
        if (res.IsSuccessful) {
            var outFile = "./output/simple-form-fill-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: ", outFile);
        }
    }
}