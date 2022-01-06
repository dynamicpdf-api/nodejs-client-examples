import fs from 'fs';
import {
    Pdf,
    PdfResource,
    PdfInput,
    PageNumberingElement,
    ElementPlacement,
    RgbColor,
    Font,
    Aes256Security,
    ImageResponse,
    ImageResource,
    FormField,
    Template,
    TextElement,
    AztecBarcodeElement
} from "@dynamicpdf/api"

export class InstructionsExample {

    static async Run() {

    var apiKey = "DP.xxx---api-key--xxx";
	var basePath = "c:/temp/dynamicpdf-api-usersguide-examples/";

    await this.BarcodeExample(apiKey, basePath);
    await this.TemplateExample(apiKey, basePath);
    await this.TopLevelMetaData(apiKey, basePath);
    //await this.FontsExample(apiKey, basePath);
    await this.SecurityExample(apiKey, basePath);
    await this.MergeExample(apiKey, basePath);
    await this.FormFieldsExample(apiKey, basePath);
    await this.AddOutlinesExistingPdf(apiKey, basePath);
    await this.AddOutlinesForNewPdf(apiKey, basePath);

    }

    static async ProcessAndSave(pdf, apiKey, basePath, outFileName) {
        pdf.ApiKey = apiKey;
        var res = await pdf.Process();
        
        if (res.IsSuccessful) {
            var outStream = fs.createWriteStream(basePath + outFileName);
            outStream.write(res.Content);
            outStream.close();
        }
    }

    static async TopLevelMetaData(apiKey, basePath) {
        var pdf = new Pdf();
        pdf.AddPage(1008, 612);
        pdf.Author = "John Doe";
        pdf.Keywords = "dynamicpdf api example pdf java instructions";
        pdf.Creator = "John Creator";
        pdf.Subject = "topLevel document metadata";
        pdf.Title = "Sample PDF";
        await this.ProcessAndSave(pdf, apiKey, basePath, "json-top-level-metadata-output.pdf");
    }

    static async FontsExample(apiKey, basePath) {
        var pdf = new Pdf();
        var pageInput = pdf.AddPage(1008, 612);
        var pageNumberingElement = new PageNumberingElement("A", ElementPlacement.TOPRIGHT);
        pageNumberingElement.Color = RgbColor.Red;
        pageNumberingElement.Font = Font.Helvetica;
        pageNumberingElement.FontSize = 42;
    
        var cloudResourceName = "old_samples/shared/font/Calibri.otf";
        var pageNumberingElementTwo = new PageNumberingElement("B", ElementPlacement.TOPLEFT);
        pageNumberingElementTwo.Color = RgbColor.DarkOrange;
        pageNumberingElementTwo.Font = new Font(cloudResourceName);
        pageNumberingElementTwo.FontSize = 32;
        
        var filePathFont = basePath + "cnr.otf";
        var pageNumberingElementThree = new PageNumberingElement("C", ElementPlacement.TOPCENTER);
        pageNumberingElementThree.Color = RgbColor.Green;
        pageNumberingElementThree.Font = Font.FromFile(filePathFont);
        pageNumberingElementThree.FontSize = 42;

        pageInput.Elements.push(pageNumberingElement);
        pageInput.Elements.push(pageNumberingElementTwo);
        pageInput.Elements.push(pageNumberingElementThree);
        await this.ProcessAndSave(pdf, apiKey, basePath, "json-font-output.pdf");
    }

    static async SecurityExample(apiKey, basePath) {

        var fileResource = basePath + "DocumentB.pdf";
        var userName = "myuser";
        var passWord = "mypassword";
        var pdf = new Pdf();
        var pdfResource = new PdfResource(fileResource);
        pdf.AddPdf(pdfResource);
        var sec = new Aes256Security(userName, passWord);
        sec.AllowCopy = false;
        sec.AllowPrint = false;
        pdf.Security = sec;
        await this.ProcessAndSave(pdf, apiKey, basePath, "json-SecurityExample-output.pdf");
    }

    static async MergeExample(apiKey, basePath) {

        var pdf = new Pdf();
        pdf.AddPdf(new PdfResource(basePath + "DocumentA.pdf"));
        var imageResource = new ImageResource(basePath + "dynamicpdfLogo.png");
        pdf.AddImage(imageResource);
        pdf.AddPdf(new PdfResource(basePath + "DocumentB.pdf"));
        await this.ProcessAndSave(pdf, apiKey, basePath, "json-merge-example-output.pdf");
    }

    static async FormFieldsExample(apiKey, basePath) {

        var pdf = new Pdf();
        pdf.AddPdf(new PdfResource(basePath + "simple-form-fill.pdf"));


        var formField = new FormField("nameField", "DynamicPdf");
        var formField2 = new FormField("descriptionField", "RealTime Pdf's. Real FAST!");

        pdf.FormFields.push(formField);
        pdf.FormFields.push(formField2);

        await this.ProcessAndSave(pdf, apiKey, basePath, "json-FormFieldsExample-output.pdf");
    }

    static async AddOutlinesExistingPdf(apiKey, basePath) {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Existing Pdf Example";

        var resource = new PdfResource(basePath + "AllPageElements.pdf");
        var input = pdf.AddPdf(resource);
        input.Id = "AllPageElements";
     
        var resource1 = new PdfResource(basePath + "OutlineExisting.pdf");
        var input1 = pdf.AddPdf(resource1);
        input1.Id = "outlineDoc1";
     
        var rootOutline = pdf.Outlines.Add("Imported Outline");
        rootOutline.Expanded = true;

        rootOutline.Children.AddPdfOutlines(input);
        rootOutline.Children.AddPdfOutlines(input1);

        await this.ProcessAndSave(pdf, apiKey, basePath, "json-AddOutlinesExisting-output.pdf");
    }

    static async AddOutlinesForNewPdf(apiKey, basePath) {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Sample Pdf";

        var pageInput = pdf.AddPage();
        var element = new TextElement("Hello World 1", ElementPlacement.TopCenter);
        pageInput.Elements.push(element);

        var pageInput1 = pdf.AddPage();
        var element1 = new TextElement("Hello World 2", ElementPlacement.TopCenter);
        pageInput1.Elements.push(element1);

        var pageInput2 = pdf.AddPage();
        var element2 = new TextElement("Hello World 3", ElementPlacement.TopCenter);
        pageInput2.Elements.push(element2);

        var rootOutline = pdf.Outlines.Add("Root Outline");

        rootOutline.Children.Add("Page 1", pageInput);
        rootOutline.Children.Add("Page 2", pageInput1);
        rootOutline.Children.Add("Page 3", pageInput2);

        await this.ProcessAndSave(pdf, apiKey, basePath, "json-AddOutlinesForNewPdf-output.pdf");
    }

    static async TemplateExample(apiKey, basePath) {
        var pdf = new Pdf();
        pdf.Author = "John User";
        pdf.Title = "Template Example One";
        var resource = new PdfResource(basePath + "DocumentA.pdf");
        var input = new PdfInput(resource);
        pdf.Inputs.push(input);

        var template = new Template("Temp1");
        var element = new TextElement("Hello World", ElementPlacement.TopCenter);
        template.Elements.push(element);
        input.Template = template;

        await this.ProcessAndSave(pdf, apiKey, basePath, "json-TemplateExample-output.pdf");
    }

    static async BarcodeExample(apiKey, basePath) {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Barcode Example";

        var resource = new PdfResource(basePath + "DocumentA.pdf");
        var input = new PdfInput(resource);
        pdf.Inputs.push(input);

        var template = new Template("Temp1");

        var element = new AztecBarcodeElement("Hello World", ElementPlacement.TopCenter, 0, 500);
        template.Elements.push(element);
        input.Template = template;

        await this.ProcessAndSave(pdf, apiKey, basePath, "json-Barcode-Example-output.pdf");
    }

}
await InstructionsExample.Run();