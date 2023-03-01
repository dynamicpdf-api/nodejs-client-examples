import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

export class PdfTextExample {
    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.xxx-api-key-xxx";
        var resource = new PdfResource(basePath + "fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.apiKey = apiKey;
        var res = await pdfText.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}
await PdfTextExample.Run();