// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF Cloud API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import {
    PdfResource,
    PdfXmp
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class PdfXmpExample {
    static async Run() {
        var resource = new PdfResource(Constants.BasePath + "get-pdf-info-pdf-info-endpoint/fw4.pdf");
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.apiKey = Constants.ApiKey;

        var res = await pdfXmp.process();

        if (res.isSuccessful) {
            console.log(res.content);
        }
    }
}
await PdfXmpExample.Run();