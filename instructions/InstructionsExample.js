import fs from 'fs';
import { TestParams } from '../init.js';
import {
    Pdf,
    PageNumberingElement,
    elementPlacement,
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
            var res = await pdf.process();
        }
        catch (e) {
            console.log(e);
            console.log("\n" + "------------------------------------------------------------------");
            return;
        }

        if (res.isSuccessful) {
            var outStream = fs.createWriteStream(`./Output/${outFileName}.pdf`);
            outStream.write(res.content);
            outStream.close();
            console.log(`PDF Created (using following instructions): ./Output/${outFileName}.pdf\n`);
            console.log(JSON.parse(pdf.getInstructionsJson()));
            console.log("\n" + "------------------------------------------------------------------");
        }
    }
    static async TemplateExample() {
        var pdf = new Pdf();
        pdf.author = "John User";
        pdf.title = "Template Example One";
        var resource = new PdfResource("./Resources/instructions-examples/DocumentA.pdf");
        var input = new PdfInput(resource);
        pdf.inputs.push(input);

        var template = new Template("Temp1");
        var element = new TextElement("Hello World", elementPlacement.topCenter);
        template.elements.push(element);
        input.template = template;

        await this.ExampleDemo(pdf, "TemplateExample");
    }
    static async MergeOptions() {

        var cloudResource = "samples/shared/documentA.pdf";
        var fileResource = "./Resources/instructions-examples/documentB.pdf";

        // add pdf from cloud resources

        var pdf = new Pdf();
        pdf.addPdf(cloudResource);

        // add pdf from local file path

        var pdfResource = new PdfResource(fileResource);
        pdf.addPdf(pdfResource);

        await this.ExampleDemo(pdf, "MergeOptions");
    }

    static async MergingExample() {
        var cloudResource = "samples/shared/DocumentA.pdf";
        var fileResource = "./Resources/instructions-examples/DocumentB.pdf";

        // add pdf from cloud resources

        var pdf = new Pdf();
        pdf.addPdf(cloudResource);

        // add pdf from local file path

        var pdfResource = new PdfResource(fileResource);
        pdf.addPdf(pdfResource);

        // add blank page to pdf

        var pageInput = pdf.addPage(1008, 612);

        // add image to pdf from cloud api

        pdf.addImage("Image3.png");

        // add image to pdf from local file system

        var imageResource = new ImageResource("./Resources/instructions-examples/Image1.jpg");
        pdf.addImage(imageResource);

        // add dlex to pdf from cloud

        var layoutData = new LayoutDataResource("./Resources/instructions-examples/getting-started-data.json");

        // add dlex to pdf from local

        var dlexResource = new DlexResource("./Resources/instructions-examples/example-two.dlex");
        layoutData = new LayoutDataResource("./Resources/instructions-examples/example-two.json");
        pdf.addDlex(dlexResource, layoutData);

        await this.ExampleDemo(pdf, "MergingExample");
    }
    static async AddOutlinesExistingPdf() {

        var pdf = new Pdf();
        pdf.author = "John Doe";
        pdf.title = "Existing Pdf Example";

        var resource = new PdfResource("./Resources/instructions-examples/AllPageElements.pdf");
        var input = pdf.addPdf(resource);
        input.id = "AllPageElements";
        //pdf.Inputs.push(input);

        var resource1 = new PdfResource("./Resources/instructions-examples/outline-existing.pdf");
        var input1 = pdf.addPdf(resource1);
        input1.id = "outlineDoc1";
        //pdf.Inputs.push(input1);

        var rootOutline = pdf.outlines.add("Imported Outline");
        rootOutline.expanded = true;

        rootOutline.children.addPdfOutlines(input);
        rootOutline.children.addPdfOutlines(input1);

        await this.ExampleDemo(pdf, "AddOutlinesExistingPdf");
    }
    static async AddOutlinesForNewPdf() {

        var pdf = new Pdf();
        pdf.author = "John Doe";
        pdf.title = "Sample Pdf";

        var pageInput = pdf.addPage();
        var element = new TextElement("Hello World 1", elementPlacement.topCenter);
        pageInput.elements.push(element);

        var pageInput1 = pdf.addPage();
        var element1 = new TextElement("Hello World 2", elementPlacement.topCenter);
        pageInput1.elements.push(element1);

        var pageInput2 = pdf.addPage();
        var element2 = new TextElement("Hello World 3", elementPlacement.topCenter);
        pageInput2.elements.push(element2);

        var rootOutline = pdf.outlines.add("Root Outline");

        rootOutline.children.add("Page 1", pageInput);
        rootOutline.children.add("Page 2", pageInput1);
        rootOutline.children.add("Page 3", pageInput2);

        await this.ExampleDemo(pdf, "AddOutlinesForNewPdf");
    }

    static async TopLevelMetaData() {

        var pdf = new Pdf();
        pdf.addPage(1008, 612);

        // top level pdf document metadata

        pdf.author = "John Doe";
        pdf.keywords = "dynamicpdf api example pdf java instructions";
        pdf.creator = "John Creator";
        pdf.subject = "topLevel document metadata";
        pdf.title = "Sample PDF";

        await this.ExampleDemo(pdf, "TopLevelMetaData");
    }
    static async FormFieldsExample() {

        var pdf = new Pdf();
        pdf.addPdf("samples/shared/simple-form-fill.pdf");


        var formField = new FormField("nameField", "DynamicPdf");
        var formField2 = new FormField("descriptionField", "RealTime Pdf's. Real FAST!");

        pdf.formFields.push(formField);
        pdf.formFields.push(formField2);

        await this.ExampleDemo(pdf, "FormFieldsExample");
    }
    static async SecurityExample() {

        var fileResource = "./Resources/instructions-examples/documentB.pdf";
        var userName = "myuser";
        var passWord = "mypassword";
        var pdf = new Pdf();
        var pdfResource = new PdfResource(fileResource);
        pdf.addPdf(pdfResource);
        var sec = new Aes256Security(userName, passWord);
        sec.allowCopy = false;
        sec.allowPrint = false;
        pdf.security = sec;

        await this.ExampleDemo(pdf, "SecurityExample");
    }
    static async BarcodeExample() {

        var pdf = new Pdf();
        pdf.author = "John Doe";
        pdf.title = "Barcode Example";

        var resource = new PdfResource("./Resources/instructions-examples/DocumentA100.pdf");
        var input = new PdfInput(resource);
        pdf.inputs.push(input);

        var template = new Template("Temp1");

        var element = new AztecBarcodeElement("Hello World", elementPlacement.topCenter, 0, 500);
        template.elements.push(element);
        input.template = template;

        await this.ExampleDemo(pdf, "BarcodeExample");
    }
}