import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class ExtractText {
    static async Run() {
        var resource = new PdfResource(Constants.BasePath + "get-pdf-info-pdf-info-endpoint/fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.apiKey = Constants.ApiKey;
        pdfText.startPage = 1;
        pdfText.pageCount = 2;
        var res = await pdfText.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        } else {
            console.log(res.errorJson);
        }
    }
}
await ExtractText.Run();