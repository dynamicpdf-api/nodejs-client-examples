import {
    PdfResource,
    PdfXmp
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class PdfXmpExample {
    static async Run() {
        var resource = new PdfResource(Constants.BasePath + "get-pdf-info-pdf-info-endpoint/fw4.pdf");
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.apiKey = Constants.ApiKey;

        var res = await pdfXmp.process();

        if (res.isSuccessful) {
            console.log(res.content);
        }
    }
}
//await PdfXmpExample.Run();