import {
    PdfResource,
    PdfXmp
} from "@dynamicpdf/api"

export class PdfXmpExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.TrJj2UBRFfrxiLYYD9xQryHXnFoSRKVPTBYH0LRpVWWnTZPOmgRO6yX6";
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