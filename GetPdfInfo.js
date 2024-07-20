// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import {
    PdfResource,
    PdfInfo
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class GetPdfInfo {
    static async Run() {
         
        var resource = new PdfResource(Constants.BasePath + "get-pdf-info-pdf-info-endpoint/fw4.pdf");
        var pdfInfo = new PdfInfo(resource);
        pdfInfo.apiKey = Constants.ApiKey;

        var res = await pdfInfo.process();
        
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}
await GetPdfInfo.Run();