// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF Cloud API
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

export class SplitPdf {

    static async Run() {
        
        var pdf = new Pdf();
        pdf.apiKey =  Constants.ApiKey;
        
        var pdf2 = new Pdf();
        pdf2.apiKey = Constants.ApiKey;

        SplitPdf.Split(pdf, 1, 3, Constants.BasePath + "split-pdf/split-one.pdf")
        SplitPdf.Split(pdf, 6, 2, Constants.BasePath + "split-pdf/split-two.pdf");
 
    }

    static async Split(pdf, startPage, pageCount, outFile) {

        var pdfInput = pdf.addPdf(new PdfResource(Constants.BasePath + "split-pdf/pdfnumberedinput.pdf"));
        pdfInput.startPage = startPage;
        pdfInput.pageCount = pageCount;

        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await SplitPdf.Run();