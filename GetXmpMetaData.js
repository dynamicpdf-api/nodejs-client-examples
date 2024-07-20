// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    PdfXmp,
    PdfResource,
    Endpoint
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class GetXmpMetaData {

    static async Run() {
        var resource = new PdfResource(Constants.BasePath + "get-xmp-metadata-pdf-xmp-endpoint/fw4.pdf")
        var pdfXmp = new PdfXmp(resource);
        pdfXmp.apiKey = Constants.ApiKey;

        var res = await pdfXmp.process();

        if (res.isSuccessful) {
            console.log(res.content);
        } else {
            console.log(res.errorJson);
        }
    }
}
await GetXmpMetaData.Run();