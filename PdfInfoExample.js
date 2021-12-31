import {
    PdfResource,
    PdfInfo
} from "@dynamicpdf/api"

export class PdfInfoExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.TrJj2UBRFfrxiLYYD9xQryHXnFoSRKVPTBYH0LRpVWWnTZPOmgRO6yX6";
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