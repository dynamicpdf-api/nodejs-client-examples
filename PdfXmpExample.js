import {
    PdfResource,
    PdfXmp
} from "@dynamicpdf/api"

export class PdfXmpExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.xxx--api-key--xxx";
        var resource = new PdfResource(basePath + "fw4.pdf")
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.ApiKey = apiKey;

        var res = await pdfXmp.Process();

        if (res.IsSuccessful) {
            console.log(res.Content);
        }
    }
}
await PdfXmpExample.Run();