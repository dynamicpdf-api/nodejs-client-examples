import fs from 'fs';
import {
    Pdf,
    PageInput,
    LineElement,
    ImageResource,
    ImageElement,
    RectangleElement,
    elementPlacement,
    LineStyle,
    RgbColor,
    TextElement
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class SolutionImagesTextRecs {

    
    static async Run() {
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;

        var pageInput = pdf.addPage(1008,612);
        var textElement = new TextElement("Hello PDF", elementPlacement.topCenter, 50, 100);
		textElement.color = RgbColor.blue;
        textElement.xOffset = -50;
        textElement.yOffset = 100
		textElement.fontSize = 42;
		pageInput.elements.push(textElement);
        


		var lineElement = new LineElement(elementPlacement.topCenter,200,200);
		lineElement.color = RgbColor.red;
        lineElement.xOffset = 305;
        lineElement.yOffset = 150
		lineElement.x2Offset = 900;
		lineElement.y2Offset = 150;
		lineElement.lineStyle = LineStyle.solid;
		lineElement.width = 4;
		pageInput.elements.push(lineElement);

        var recElement = new RectangleElement(elementPlacement.TopCenter, 100, 500);
        recElement.xOffset = -250;
        recElement.yOffset = -10;
        recElement.corner_radius = 10;
        recElement.border_width = 5;
        recElement.corner_radius = 10;
        recElement.border_style = LineStyle.dots;
        recElement.border_color = RgbColor.blue;
        recElement.fill_color = RgbColor.green;
        pageInput.elements.push(recElement);

        var imgResource = new ImageResource(Constants.BasePath + "templates/dynamicpdfLogo.png");
        var imageElement = new ImageElement(imgResource);
        imageElement.elementPlacement = elementPlacement.topLeft;
        imageElement.xOffset = 835;
        imageElement.yOffset = 75;
        pageInput.elements.push(imageElement);

        console.log(JSON.parse(pdf.getInstructionsJson(true)));

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "solutions-img-text-rec-node-js-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
//await SolutionImagesTextRecs.Run();