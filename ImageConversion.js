import fs from 'fs';
import {
    Pdf,
    ImageResource,
    align,
    vAlign,
    ImageInput
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class ImageConversion {

    static async Run() {
              
        var pdf = new Pdf();
    
        var imageResource = new ImageResource(Constants.BasePath + "image-conversion/testimage.tif")
        var imageResource2 = new ImageResource(Constants.BasePath + "image-conversion/dynamicpdfLogo.png")

        var imageInput = new ImageInput(imageResource);
        var imageInput2 = new ImageInput(imageResource2);
       
        imageInput.expandToFit = false;
        imageInput.align = "center";
        imageInput.vAlign = "center";
        imageInput.pageHeight = 1008;
        imageInput.pageWidth = 612;

        imageInput2.expandToFit = true;
        imageInput2.align = "center";
        imageInput2.vAlign = "center";
        imageInput2.pageHeight = 612;
        imageInput2.pageWidth = 1008;

        pdf.inputs.push(imageInput);
        pdf.inputs.push(imageInput2);


        pdf.apiKey =  Constants.ApiKey;
        
        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "image-conversion-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
//await ImageConversion.Run();