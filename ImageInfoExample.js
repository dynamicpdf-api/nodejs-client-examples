import {
    ImageResource,
    ImageInfo,
    Pdf
} from "@dynamicpdf/api"

export class ImageInfoExample {
    static async ImageInfoExampleOne() {

        var pdf = new Pdf();
        var pdfResource = new PdfResource(basePath + "fw9AcroForm_18.pdf");
        pdf.addPdf(pdfResource);

        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }
}