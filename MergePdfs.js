// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    Pdf,
    PdfResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class MergePdfs {

    static async Run() {
              
        var pdf = new Pdf();
        var pdfInput = pdf.addPdf(new PdfResource(Constants.BasePath + "merge-pdfs-pdf-endpoint/DocumentA.pdf"));
        pdfInput.startPage = 1;
        pdfInput.pageCount = 2;


        var pdfResource = new PdfResource();
        pdf.addPdf(new PdfResource(Constants.BasePath + "merge-pdfs-pdf-endpoint/DocumentB.pdf"));


        pdf.addPdf("samples/merge-pdfs-pdf-endpoint/DocumentC.pdf");
        

        pdf.apiKey =  Constants.ApiKey;
        
        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "merge-pdfs-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await MergePdfs.Run();