import fs from 'fs';
import { TestParams } from '../init.js';
import {
    Pdf,
    PageNumberingElement,
    ElementPlacement,
    RgbColor,
    PdfResource,
    PdfInput,
    Template,
    TextElement,
    ImageResource,
    LayoutDataResource,
    DlexResource,
    Font,
    FormField,
    Aes256Security,
    AztecBarcodeElement
} from "@dynamicpdf/api"

export class InstructionsExample {

    static async Run() {
        await this.TemplateExample();
        await this.MergeOptions();
        await this.MergingExample();
        await this.AddOutlinesExistingPdf();
        await this.AddOutlinesForNewPdf();
        await this.TopLevelMetaData();
        await this.FormFieldsExample();
        await this.SecurityExample();
        await this.BarcodeExample();
    }

    static async ExampleDemo(pdf, outFileName) {
        try {
            var res = await pdf.Process();
        }
        catch (e) {
            console.log(e);
            console.log("\n" + "------------------------------------------------------------------");
            return;
        }

        if (res.IsSuccessful) {
            var outStream = fs.createWriteStream(`./Output/${outFileName}.pdf`);
            outStream.write(res.Content);
            outStream.close();
            console.log(`PDF Created (using following instructions): ./Output/${outFileName}.pdf\n`);
            console.log(JSON.parse(pdf.GetInstructionsJson()));
            console.log("\n" + "------------------------------------------------------------------");
        }
    }
    static async TemplateExample() {
        var pdf = new Pdf();
        pdf.Author = "John User";
        pdf.Title = "Template Example One";
        var resource = new PdfResource("./Resources/instructions-examples/DocumentA.pdf");
        var input = new PdfInput(resource);
        pdf.Inputs.push(input);

        var template = new Template("Temp1");
        var element = new TextElement("Hello World", ElementPlacement.TopCenter);
        template.Elements.push(element);
        input.Template = template;

        await this.ExampleDemo(pdf, "TemplateExample");
    }
    static async MergeOptions() {

        var cloudResource = "samples/shared/documentA.pdf";
        var fileResource = "./Resources/instructions-examples/documentB.pdf";

        // add pdf from cloud resources

        var pdf = new Pdf();
        pdf.AddPdf(cloudResource);

        // add pdf from local file path

        var pdfResource = new PdfResource(fileResource);
        pdf.AddPdf(pdfResource);

        await this.ExampleDemo(pdf, "MergeOptions");
    }

    static async MergingExample() {
        var cloudResource = "samples/shared/DocumentA.pdf";
        var fileResource = "./Resources/instructions-examples/DocumentB.pdf";

        // add pdf from cloud resources

        var pdf = new Pdf();
        pdf.AddPdf(cloudResource);

        // add pdf from local file path

        var pdfResource = new PdfResource(fileResource);
        pdf.AddPdf(pdfResource);

        // add blank page to pdf

        var pageInput = pdf.AddPage(1008, 612);

        // add image to pdf from cloud api

        pdf.AddImage("Image3.png");

        // add image to pdf from local file system

        var imageResource = new ImageResource("./Resources/instructions-examples/Image1.jpg");
        pdf.AddImage(imageResource);

        // add dlex to pdf from cloud

        var layoutData = new LayoutDataResource("./Resources/instructions-examples/getting-started-data.json");
        //pdf.AddDlex("samples/getting-started/getting-started.dlex", layoutData);

        // add dlex to pdf from local

        var dlexResource = new DlexResource("./Resources/instructions-examples/example-two.dlex");
        layoutData = new LayoutDataResource("./Resources/instructions-examples/example-two.json");
        pdf.AddDlex(dlexResource, layoutData);

        await this.ExampleDemo(pdf, "MergingExample");
    }
    static async AddOutlinesExistingPdf() {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Existing Pdf Example";

        var resource = new PdfResource("./Resources/instructions-examples/AllPageElements.pdf");
        var input = pdf.AddPdf(resource);
        input.Id = "AllPageElements";
        //pdf.Inputs.push(input);

        var resource1 = new PdfResource("./Resources/instructions-examples/outline-existing.pdf");
        var input1 = pdf.AddPdf(resource1);
        input1.Id = "outlineDoc1";
        //pdf.Inputs.push(input1);

        var rootOutline = pdf.Outlines.Add("Imported Outline");
        rootOutline.Expanded = true;

        rootOutline.Children.AddPdfOutlines(input);
        rootOutline.Children.AddPdfOutlines(input1);

        await this.ExampleDemo(pdf, "AddOutlinesExistingPdf");
    }
    static async AddOutlinesForNewPdf() {

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

        await this.ExampleDemo(pdf, "AddOutlinesForNewPdf");
    }

    static async TopLevelMetaData() {

        var pdf = new Pdf();
        pdf.AddPage(1008, 612);

        // top level pdf document metadata

        pdf.Author = "John Doe";
        pdf.Keywords = "dynamicpdf api example pdf java instructions";
        pdf.Creator = "John Creator";
        pdf.Subject = "topLevel document metadata";
        pdf.Title = "Sample PDF";

        await this.ExampleDemo(pdf, "TopLevelMetaData");
    }
    static async FormFieldsExample() {

        var pdf = new Pdf();
        pdf.AddPdf("samples/shared/simple-form-fill.pdf");


        var formField = new FormField("nameField", "DynamicPdf");
        var formField2 = new FormField("descriptionField", "RealTime Pdf's. Real FAST!");

        pdf.FormFields.push(formField);
        pdf.FormFields.push(formField2);

        await this.ExampleDemo(pdf, "FormFieldsExample");
    }
    static async SecurityExample() {

        var fileResource = "./Resources/instructions-examples/documentB.pdf";
        var userName = "myuser";
        var passWord = "mypassword";
        var pdf = new Pdf();
        var pdfResource = new PdfResource(fileResource);
        pdf.AddPdf(pdfResource);
        var sec = new Aes256Security(userName, passWord);
        sec.AllowCopy = false;
        sec.AllowPrint = false;
        pdf.Security = sec;

        await this.ExampleDemo(pdf, "SecurityExample");
    }
    static async BarcodeExample() {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Barcode Example";

        var resource = new PdfResource("./Resources/instructions-examples/DocumentA100.pdf");
        var input = new PdfInput(resource);
        pdf.Inputs.push(input);

        var template = new Template("Temp1");

        var element = new AztecBarcodeElement("Hello World", ElementPlacement.TopCenter, 0, 500);
        template.Elements.push(element);
        input.Template = template;

        await this.ExampleDemo(pdf, "BarcodeExample");
    }
}