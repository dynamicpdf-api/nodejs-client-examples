import fs from 'fs';
import {
    PdfXmp,
    PdfResource,
    Endpoint
} from "@dynamicpdf/api"

export class GetXmpMetaData {

    static async Run() {
        var resource = new PdfResource("C:/temp/dynamicpdf-api-samples/get-xmp-metadata/fw4.pdf")
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.ApiKey = "DP.7vATWolKJ4xdaefbf/pTgSW7uGWofsZAKctZ1J/hzV9yTrzDvmDI1lwT";

        var res = await pdfXmp.Process();

        if (res.IsSuccessful) {
            console.log(res.Content);
        } else {
            console.log(res.ErrorJson);
        }
    }
}
await GetXmpMetaData.Run();