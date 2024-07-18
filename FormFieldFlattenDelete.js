import fs from 'fs';
import {
    Pdf,
    FormField,
    PdfInput,
    PdfResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class FormFieldFlattenDelete {
    static async Run() {
 
        var pdfEndpoint = new Pdf();
        pdfEndpoint.apiKey =  Constants.ApiKey

        var resource = new PdfResource(Constants.BasePath + "form-field-flatten/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
        var input = new PdfInput(resource);

        pdfEndpoint.inputs.push(input);
        var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
        field.remove = true;
        pdfEndpoint.formFields.push(field);
        var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
        pdfEndpoint.formFields.push(field1);
        var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
        field2.remove = true;
        pdfEndpoint.formFields.push(field2);
        var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
        pdfEndpoint.formFields.push(field3);
        var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
        pdfEndpoint.formFields.push(field4);
        var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
        pdfEndpoint.formFields.push(field5);
        var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
        pdfEndpoint.formFields.push(field6);
        var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
        field7.remove = true;
        pdfEndpoint.formFields.push(field7);
        var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
        pdfEndpoint.formFields.push(field8);
        var res = await pdfEndpoint.process();

        var res = await pdfEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "form-flatten-delete-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
        else {
            console.log(res.errorJson);
        }
    }
}
//await FormFieldFlattenDelete.Run();