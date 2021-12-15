import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

export class ExtractText {
    static async Run() {
        var resource = new PdfResource("C:/temp/dynamicpdf-api-samples/extract-text/fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.ApiKey = "DP.NKSoPxiwOgZoypSVYaXyEARo2cO9Kk5BRgY2ZRC0jF/KQq4pDzhfK8yO";
        pdfText.StartPage = 1;
        pdfText.PageCount = 2;
        var res = await pdfText.Process();
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        } else {
            console.log(res.ErrorJson);
        }
    }
}
await ExtractText.Run();