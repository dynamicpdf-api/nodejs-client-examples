// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    PdfImage, PdfResource, PngImageFormat} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class PdfImageExample {

    static async Run() {
        this.ConvertPdf(Constants.BasePath + "pdf-image/onepage.pdf", "pdf-image-out");
        this.ConvertPdf(Constants.BasePath + "pdf-image/pdfnumberedinput.pdf", "pdf-multi-image-out");
    }

    static async ConvertPdf(pdfName, outName) {
              
       var pdfImage = new PdfImage(new PdfResource(pdfName));
       pdfImage.apiKey =  Constants.ApiKey;
       var pngImageFormat = new PngImageFormat();
       pdfImage.ImageFormat = pngImageFormat;
        
        var res = await pdfImage.process();
        
        if (res.isSuccessful) {

            for (var i = 0; i < res.images.length; i++)
                {
                    const image = res.images[i];
                    var outStream = fs.createWriteStream(Constants.OutputPath + outName + i + ".png");
                    outStream.write(Buffer.from(image.data, 'base64'));
                    outStream.close();
                }
        } else {
            console.log(res.er)
            console.log(res.errorJson);
        }
    }
}
await PdfImageExample.Run();