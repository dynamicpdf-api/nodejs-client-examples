import fs from 'fs';
import {
    PdfXmp,
    PdfResource,
    Endpoint
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-xmp/tutorial-pdf-xmp

export class GetXmpMetaData {

    static async Run() {
        var resource = new PdfResource("C:/temp/dynamicpdf-api-samples/get-xmp-metadata/fw4.pdf")
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.apiKey = "DP.xxx-api-key-xxx";

        var res = await pdfXmp.process();

        if (res.isSuccessful) {
            console.log(res.content);
        } else {
            console.log(res.errorJson);
        }
    }
}
await GetXmpMetaData.Run();