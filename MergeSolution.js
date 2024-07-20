// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    Pdf,
    PdfResource,
    ImageResource,
    LayoutDataResource,
    HtmlResource,
    WordResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class MergeSolution {

    static async Run() {
              
        var pdf = new Pdf();
        var pdfInput = pdf.addPdf(new PdfResource(Constants.BasePath + "merge-pdfs-pdf-endpoint/DocumentA.pdf"));


        var pdfResource = new PdfResource();
        pdf.addPdf(new PdfResource(Constants.BasePath + "merge-pdfs-pdf-endpoint/DocumentB.pdf"));

        pdf.addWord(new WordResource(Constants.BasePath + "users-guide/Doc1.docx", "Doc1.docx"));

        var imageInput = pdf.addImage(new ImageResource(Constants.BasePath + "image-conversion/testimage.tif"));
        imageInput.ScaleX = 0.5;
        imageInput.ScaleY = 0.5;
        
        var layoutData = new LayoutDataResource(Constants.BasePath + "creating-pdf-dlex-layout/creating-pdf-dlex-layout.json");
        pdf.addDlex("samples/creating-pdf-dlex-layout-endpoint/creating-pdf-dlex-layout.dlex", layoutData);
    
        var resourcePath = Constants.BasePath + "/users-guide/products.html";
        pdf.addHtml(new HtmlResource(resourcePath));
              

        pdf.apiKey =  Constants.ApiKey;
        
        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "merge-pdfs-solution-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
        
    }
}
await MergeSolution.Run();