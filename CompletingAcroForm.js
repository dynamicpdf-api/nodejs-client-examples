import fs from 'fs';
import {
    Pdf,
    FormField,
    PdfResource
} from "@dynamicpdf/api"

export class CompletingAcroForm {
    static async Run() {

        var pdf = new Pdf();
        pdf.ApiKey =  "DP.wsWB4gNqfaDmBSswJu4A+iFzKwZ20Uk7GferHVTNbdf3RaKRzjkHk5jb";
        pdf.AddPdf("samples/fill-acro-form-pdf-endpoint/fw9AcroForm_18.pdf");

        var formField = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
        var formField2 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
        var formField3 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
        var formField4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
        var formField5 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
        var formField6 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
        var formField7 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
        var formField8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
        var formField9 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
        pdf.FormFields.push(formField);
        pdf.FormFields.push(formField2);
        pdf.FormFields.push(formField3);
        pdf.FormFields.push(formField4);
        pdf.FormFields.push(formField5);
        pdf.FormFields.push(formField6);
        pdf.FormFields.push(formField7);
        pdf.FormFields.push(formField8);
        pdf.FormFields.push(formField9);

        var res = await pdf.Process();
        
        if (res.IsSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/fill-acro-form/fill-acro-form-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: ", outFile);
        }
        else {
            console.log(res.ErrorJson);
        }
    }
}
await CompletingAcroForm.Run();