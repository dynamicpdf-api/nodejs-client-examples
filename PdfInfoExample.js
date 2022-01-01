import {
    PdfResource,
    PdfInfo
} from "@dynamicpdf/api"

export class PdfInfoExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.xxx--api-key--xxx";
        var resource = new PdfResource(basePath + "DocumentA.pdf");
        var pdfInfo = new PdfInfo(resource);
        pdfInfo.ApiKey = apiKey;
        var res = await pdfInfo.Process();
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }
}
PdfInfoExample.Run();