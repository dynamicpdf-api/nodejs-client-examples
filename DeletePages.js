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

import { ClientApiUtility } from './ClientApiUtility.js';
import {Constants} from './constants.js';

export class DeletePages {

    static async Run() {
              
        var pdf = new Pdf();
        var pdfInput = pdf.addPdf(new PdfResource(Constants.BasePath + "delete-pages/pdfnumberedinput.pdf"));
        pdfInput.startPage = 1;
        pdfInput.pageCount = 3;

        var pdfInput = pdf.addPdf(new PdfResource(Constants.BasePath + "delete-pages/pdfnumberedinput.pdf"));
        pdfInput.startPage = 6;
        pdfInput.pageCount = 2;

        pdf.apiKey =  Constants.ApiKey
        
        var res = await pdf.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "delete-pages-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DeletePages.Run();