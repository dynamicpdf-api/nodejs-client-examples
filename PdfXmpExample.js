import {
    PdfResource,
    PdfXmp
} from "@dynamicpdf/api"

export class PdfXmpExample {
    static async Run() {
        var resource = new PdfResource("./Resources/client-libraries-examples/fw4.pdf")
        var pdfXmp = new PdfXmp(resource);

        var res = await pdfXmp.Process();

        if (res.IsSuccessful) {
            console.log(res.Content);
        }
    }
}