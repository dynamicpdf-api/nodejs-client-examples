import fs from 'fs';
import {
    Pdf,
    PdfResource,
    elementPlacement,
    Template,
    RgbColor,
    RectangleElement,
    LineStyle,
    TextElement
} from "@dynamicpdf/api"


import {Constants} from './constants.js';

export class TemplatesExample {
    
    static async Run() {

        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;
  
        var templateA = new Template("Temp1");
	    var textElement = new TextElement("Hello PDF", elementPlacement.topCenter);
	    textElement.color = RgbColor.blue;
        textElement.fontSize = 42;
		textElement.xOffset = -50;
		textElement.yOffset = 100;

	    
        var input1 = pdf.addPdf(new PdfResource(Constants.BasePath + "users-guide/DocumentA.pdf"));
	            
        input1.template = templateA;
		templateA.elements.push(textElement);


        var recElement = new RectangleElement(elementPlacement.topCenter, 100, 500);
		recElement.xOffset = -150;
		recElement.yOffset = 100;
		recElement.cornerRadius = 10;
		recElement.borderWidth = 5;
		recElement.borderColor = RgbColor.blue;
		recElement.fillColor = RgbColor.green;
        recElement.LineStyle = LineStyle.dots;


        templateA.elements.push(recElement);


        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "template-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
//await TemplatesExample.Run();