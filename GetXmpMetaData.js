import fs from 'fs';
import {
    PdfXmp,
    PdfResource,
    Endpoint
} from "@dynamicpdf/api"


export class GetXmpMetaData {

    static async Run() {
        var resource = new PdfResource("C:/temp/dynamicpdf-api-samples/get-xmp-metadata-pdf-xmp-endpoint/fw4.pdf")
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.apiKey = "DP--api-key--";

        var res = await pdfXmp.process();

        if (res.isSuccessful) {
            console.log(res.content);
        } else {
            console.log(res.errorJson);
        }
    }
}
await GetXmpMetaData.Run();