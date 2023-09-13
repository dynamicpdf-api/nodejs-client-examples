﻿import fs from 'fs';
import {
    Pdf,
    PdfResource,
    PdfInput,
    PageNumberingElement,
    elementPlacement,
    RgbColor,
    Font,
    Aes256Security,
    ImageResource,
    FormField,
    Template,
    TextElement,
    AztecBarcodeElement,
    PageSize,
    Orientation,
    HtmlResource
} from "@dynamicpdf/api"

export class InstructionsExample {

    static async Run() {


	var basePath = "c:/temp/users-guide-resources/";
   

    await this.BarcodeExample(basePath);
    await this.TemplateExample(basePath);
    await this.TopLevelMetaData(basePath);
    await this.FontsExample(basePath);
    await this.SecurityExample(basePath);
    await this.MergeExample(basePath);
    await this.FormFieldsExample(basePath);
    await this.AddOutlinesExistingPdf(basePath);
    await this.AddOutlinesForNewPdf(basePath);
    await this.HtmlExample(basePath);
    await this.ImageExample(apiKey, basePath, "image-json-output.pdf");

    }

    static async ProcessAndSave(pdf, outFileName) {
        pdf.apiKey = "DP.s2eSlDpAF80sPSdNDRi5wBfeVJQVeI1Q0CqqGubveJP/TLBiNNDWZpmH";
        var outPath = "c:/temp/dynamicpdf-api-usersguide-examples/nodejs-output/";
    	var basePath = "c:/temp/users-guide-resources/";

        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outStream = fs.createWriteStream(outPath + outFileName);
            outStream.write(res.content);
            outStream.close();
        }
    }

    static async ImageExample(apiKey, basePath, outFileName) {
        var pdf = new Pdf();
        //get image from local system
        var ir = new ImageResource(basePath + "A.png");
        pdf.addImage(ir);
		
        //get Image as binary from local system
        var ir2 = null;
        
        ir2 = new ImageResource();
        pdf.addImage(ir2);
        
        //get image from cloud storage
        pdf.addImage("samples/users-guide-resources/C.png");
        
        await this.ProcessAndSave(pdf, apiKey, basePath, outFileName);

    
   }    
    static async TopLevelMetaData(apiKey, basePath) {
        var pdf = new Pdf();
        pdf.addPage(1008, 612);
        pdf.author = "John Doe";
        pdf.keywords = "dynamicpdf api example pdf java instructions";
        pdf.creator = "John Creator";
        pdf.subject = "topLevel document metadata";
        pdf.title = "Sample PDF";
        await this.ProcessAndSave(pdf, "json-top-level-metadata-output.pdf");
    }

    static async HtmlExample(basePath) {
        var pdf = new Pdf();
        pdf.addHtml("<html>An example HTML fragment.</html>");
        pdf.addHtml("<html><p>HTML with basePath.</p><img src='./images/logo.png'></img></html>",
        "https://www.dynamicpdf.com", PageSize.LETTER, Orientation.PORTRAIT,1);
        var resourcePath = basePath + "/products.html";
        pdf.addHtml(new HtmlResource(resourcePath), null, PageSize.LETTER, Orientation.PORTRAIT, 1);
        await this.ProcessAndSave(pdf, "html-output.pdf");
    }

    static async FontsExample(basePath) {
        var pdf = new Pdf();
        var pageInput = pdf.addPage(1008, 612);
        var pageNumberingElement = new PageNumberingElement("A", elementPlacement.topRight);
        pageNumberingElement.color = RgbColor.red;
        pageNumberingElement.font = Font.helvetica;
        pageNumberingElement.fontSize = 42;
    
        var cloudResourceName = "samples/users-guide-resources/Calibri.otf";
        var pageNumberingElementTwo = new PageNumberingElement("B", elementPlacement.topLeft);
        pageNumberingElementTwo.color = RgbColor.darkOrange;
        pageNumberingElementTwo.font = new Font(cloudResourceName);
        pageNumberingElementTwo.fontSize = 32;
        
        var filePathFont = basePath + "cnr.otf";
        var pageNumberingElementThree = new PageNumberingElement("C", elementPlacement.topCenter);
        pageNumberingElementThree.color = RgbColor.green;
        pageNumberingElementThree.font = Font.fromFile(filePathFont);
        pageNumberingElementThree.fontSize = 42;

        pageInput.elements.push(pageNumberingElement);
        pageInput.elements.push(pageNumberingElementTwo);
        pageInput.elements.push(pageNumberingElementThree);
        await this.ProcessAndSave(pdf, "json-font-output.pdf");
    }

    static async SecurityExample(basePath) {

        var fileResource = basePath + "DocumentB.pdf";
        var userName = "myuser";
        var passWord = "mypassword";
        var pdf = new Pdf();
        var pdfResource = new PdfResource(fileResource);
        pdf.addPdf(pdfResource);
        var sec = new Aes256Security(userName, passWord);
        sec.allowCopy = false;
        sec.allowPrint = false;
        pdf.security = sec;
        await this.ProcessAndSave(pdf, "json-SecurityExample-output.pdf");
    }

    static async PdfInputExample(apiKey, basePath) {

        var pdf = new Pdf();
        var pdfInput = pdf.addPdf(new PdfResource(basePath + "DocumentA.pdf"));
        var pdfResource = new PdfResource(fs.readFileSync(basePath + "DocumentB.pdf"));
        pdf.addPdf(pdfResource);
        pdf.addPdf("samples/users-guide-resources/DocumentC.pdf");

        await this.ProcessAndSave(pdf, apiKey, "c:/temp/instructions-example/out/", "pdf-json-output.pdf");
    }

    static async MergeExample(apiKey, basePath) {
        var pdf = new Pdf();
        pdf.addPdf(new PdfResource(basePath + "DocumentA.pdf"));
        var imageResource = new ImageResource(basePath + "DPDFLogo.png");
        pdf.addImage(imageResource);
        pdf.addPdf(new PdfResource(basePath + "DocumentB.pdf"));
        await this.ProcessAndSave(pdf, "json-merge-example-output.pdf");
    }

    static async FormFieldsExample(basePath) {

        var pdf = new Pdf();
        pdf.addPdf(new PdfResource(basePath + "simple-form-fill.pdf"));


        var formField = new FormField("nameField", "DynamicPdf");
        var formField2 = new FormField("descriptionField", "RealTime Pdf's. Real FAST!");

        pdf.formFields.push(formField);
        pdf.formFields.push(formField2);

        await this.ProcessAndSave(pdf, "json-FormFieldsExample-output.pdf");
    }

    static async AddOutlinesExistingPdf(basePath) {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Existing Pdf Example";

        var resource = new PdfResource(basePath + "AllPageElements.pdf");
        var input = pdf.addPdf(resource);
        input.Id = "AllPageElements";
     
        var resource1 = new PdfResource(basePath + "OutlineExisting.pdf");
        var input1 = pdf.addPdf(resource1);
        input1.Id = "outlineDoc1";
     
        var rootOutline = pdf.outlines.add("Imported Outline");
        rootOutline.expanded = true;

        rootOutline.children.addPdfOutlines(input);
        rootOutline.children.addPdfOutlines(input1);

        await this.ProcessAndSave(pdf, "json-AddOutlinesExisting-output.pdf");
    }

    static async AddOutlinesForNewPdf(basePath) {

        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Sample Pdf";

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

        await this.ProcessAndSave(pdf, "json-AddOutlinesForNewPdf-output.pdf");
    }

    static async TemplateExample(basePath) {
        var pdf = new Pdf();
        pdf.Author = "John User";
        pdf.Title = "Template Example One";
        var resource = new PdfResource(basePath + "DocumentA.pdf");
        var input = new PdfInput(resource);
        pdf.inputs.push(input);

        var template = new Template("Temp1");
        var element = new TextElement("Hello World", elementPlacement.topCenter);
        template.elements.push(element);
        input.template = template;

        await this.ProcessAndSave(pdf, "json-TemplateExample-output.pdf");
    }

    static async BarcodeExample(basePath) {
        var pdf = new Pdf();
        pdf.Author = "John Doe";
        pdf.Title = "Barcode Example";

        var resource = new PdfResource(basePath + "DocumentA.pdf");
        var input = new PdfInput(resource);
        pdf.inputs.push(input);

        var template = new Template("Temp1");

        var element = new AztecBarcodeElement("Hello World", elementPlacement.topCenter, 0, 500);
        template.elements.push(element);
        input.template = template;

        await this.ProcessAndSave(pdf, "json-Barcode-Example-output.pdf");
    }

}
await InstructionsExample.Run();