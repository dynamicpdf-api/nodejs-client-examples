import {
    PdfResource,
    PdfInfo
} from "@dynamicpdf/api"

export class PdfInfoExample {
    static async Run() {
        var resource = new PdfResource("./Resources/client-libraries-examples/fw4.pdf");
        var pdfInfo = new PdfInfo(resource);
        var res = await pdfInfo.Process();
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }
}