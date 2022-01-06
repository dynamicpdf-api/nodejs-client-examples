import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-text/tutorial-pdf-text

export class ExtractText {
    static async Run() {
        var resource = new PdfResource("C:/temp/dynamicpdf-api-samples/extract-text/fw4.pdf");
        var pdfText = new PdfText(resource);
        pdfText.ApiKey = "DP.xxx-api-key-xxx";
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