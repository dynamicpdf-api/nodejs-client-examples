// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import { 
    Pdf,
    PageSize,
    Orientation,
    ExcelResource,
    ExcelInput,
    WordInput,
    WordResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class ExcelWordExamples {
    static async Run() {
        await this.RunExcel();
        await this.RunWord();
    }

    static async RunExcel(){
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;
        var resource = new ExcelResource(Constants.BasePath + "excel-word/sample-data.xlsx", "sample-data.xlsx")
        pdf.addExcel(resource, PageSize.Letter, Orientation.PORTRAIT, 1.0);

       var res = await pdf.process();
        
       if (res.isSuccessful) {
           var outFile = Constants.OutputPath + "excel-output_nodejs.pdf";
           var outStream = fs.createWriteStream(outFile);
           outStream.write(res.content);
           outStream.close();
       } else {
           console.log(res.errorJson);
       }
    }

    static async RunWord(){
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;
        var resource = new WordResource(Constants.BasePath + "excel-word/Doc1.docx", "Doc1.docx")
        pdf.addWord(resource, PageSize.Letter, Orientation.PORTRAIT, 1.0);

       var res = await pdf.process();
        
       if (res.isSuccessful) {
           var outFile = Constants.OutputPath + "word-output_nodejs.pdf";
           var outStream = fs.createWriteStream(outFile);
           outStream.write(res.content);
           outStream.close();
       } else {
           console.log(res.errorJson);
       }
    }

}
await ExcelWordExamples.Run();