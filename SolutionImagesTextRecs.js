import fs from 'fs';
import {
    Pdf,
    LineElement,
    elementPlacement,
    LineStyle,
    RgbColor,
    Font,
    TextElement
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class SolutionImagesTextRecs {

    
    static async Run() {
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;

        var pageInput = pdf.addPage(1008, 612);
        
        var textElement = new TextElement("Hello PDF", elementPlacement.topCenter, -50, 100);
		textElement.color = RgbColor.blue;
		textElement.fontSize = 42;
		pageInput.elements.push(textElement);


		var element = new LineElement(elementPlacement.topCenter);
		element.color = RgbColor.red;
		//element.xOffset(305);
		//element.yOffset(150);
		element.x2Offset = 900;
		element.y2Offset = 150;
		element.lineStyle = LineStyle.solid;
		element.width = 4;
		pageInput.elements.push(element);




        var res = await pdf.process();


        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "solutions-img-text-rec-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await SolutionImagesTextRecs.Run();