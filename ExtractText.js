import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

export class ExtractText {
    static async Run() {
        var resource = new PdfResource("C:/temp/dynamicpdf-api-samples/extract-text/fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.apiKey = "DP--api-key--";
        pdfText.startPage = 1;
        pdfText.pageCount = 2;
        var res = await pdfText.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        } else {
            console.log(res.errorJson);
        }
    }
}
await ExtractText.Run();