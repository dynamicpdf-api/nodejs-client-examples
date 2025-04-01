// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    Pdf,
    LayoutDataResource,
    DlexResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class CreatePdfDlex {
    static async Run() {

        var basePath = Constants.BasePath + "creating-pdf-pdf-endpoint/";
        
        await CreatePdfDlex.RunLocal(basePath);
        await CreatePdfDlex.RunRemote(basePath);
    }

    static async RunLocal(basePath){
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;

        var layoutDataResource = new LayoutDataResource(basePath + "SimpleReportWithCoverPage.json");
        var dlexResource = new DlexResource(basePath + "SimpleReportWithCoverPage.dlex");
       
        pdf.addDlex(dlexResource, layoutDataResource);
        pdf.dlexAdditionalResource(basePath + "Northwind logo.gif", "Northwind logo.gif");        

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "create-pdf-dlex-output-local-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
    
    static async RunRemote(basePath){
        var pdf = new Pdf();
        pdf.apiKey = Constants.ApiKey;

        var layoutDataResource = new LayoutDataResource(basePath + "SimpleReportWithCoverPage.json");
        pdf.addDlex("samples/creating-pdf-pdf-endpoint/SimpleReportWithCoverPage.dlex", layoutDataResource);

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "create-pdf-dlex-output-remote-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
// awaiting fix to api to add additional resource
await CreatePdfDlex.Run();
