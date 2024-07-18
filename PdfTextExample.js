import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class PdfTextExample {
    static async Run() {

        var resource = new PdfResource(Constants.BasePath + "get-pdf-info-pdf-info-endpoint/fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.apiKey = Constants.ApiKey;
        var res = await pdfText.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}
//await PdfTextExample.Run();