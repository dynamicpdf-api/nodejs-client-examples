import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

export class PdfTextExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.TrJj2UBRFfrxiLYYD9xQryHXnFoSRKVPTBYH0LRpVWWnTZPOmgRO6yX6";
        var resource = new PdfResource(basePath + "fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.ApiKey = apiKey;
        var res = await pdfText.Process();
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }
}
await PdfTextExample.Run();