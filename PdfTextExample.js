import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

export class PdfTextExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.xxx--api-key--xxx";
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