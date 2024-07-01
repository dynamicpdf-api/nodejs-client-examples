import {
    PdfResource,
    PdfInfo
} from "@dynamicpdf/api"

export class GetPdfInfo {
    static async Run() {
        var basePath = "./resources/get-pdf-info-pdf-info-endpoint/";
        var outputPath = "./output/";        
        var resource = new PdfResource(basePath + "fw4.pdf");
        var pdfInfo = new PdfInfo(resource);
        pdfInfo.apiKey = "DP--api-key--";

        var res = await pdfInfo.process();
        
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}
GetPdfInfo.Run();