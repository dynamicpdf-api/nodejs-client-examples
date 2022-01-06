import { 
    PdfResource,
    PdfText 
} from "@dynamicpdf/api"

export class PdfTextExample {
    static async Run() {
        var resource = new PdfResource("Resources/client-libraries-examples/fw4.pdf");
        var pdfText = new PdfText(resource);
        var res = await pdfText.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}