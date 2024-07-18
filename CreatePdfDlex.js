import fs from 'fs';
import {
    Pdf,
    LayoutDataResource,
    DlexResource,
    Resource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

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
       
        var dlexInput = pdf.addDlex(dlexResource, layoutDataResource);
       
        var resource = new Resource(basePath + "Northwind logo.gif", "Northwind logo.gif");
        

        //tbd - still need code to add additional resource

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "create-pdf-dlex-output_nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
    
    static async RunRemote(basePath){
        var pdf = new Pdf();
        pdf.apiKey = apiKey;

        var layoutDataResource = new LayoutDataResource(basePath + "SimpleReportWithCoverPage.json");
        pdf.addDlex("samples/creating-pdf-pdf-endpoint/SimpleReportWithCoverPage.dlex", layoutDataResource);

        var res = await pdf.process();

        if (res.isSuccessful) {
            var outFile = outputPath + "create-pdf-dlex-output_nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
//awaiting fix to api to add additional resource
//await CreatePdfDlex.Run();
