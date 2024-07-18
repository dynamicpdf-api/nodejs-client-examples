import {
    PdfResource,
    PdfInfo
} from "@dynamicpdf/api"


import {Constants} from './constants.js';

export class PdfInfoExample {
    static async Run() {
        var resource = new PdfResource(Constants.BasePath + "get-pdf-info-pdf-info-endpoint/fw4.pdf");
        var pdfInfo = new PdfInfo(resource);
        pdfInfo.apiKey = Constants.ApiKey;
        var res = await pdfInfo.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}
//await PdfInfoExample.Run();