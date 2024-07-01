import fs from 'fs';
import {
    Pdf,
    LayoutDataResource,
    DlexResource,
    Resource
} from "@dynamicpdf/api"


export class CreatePdfDlex {
    static async Run() {

        var apiKey = "DP.rOevSIHcbJqaRnkJZhoi+h12X3TxCiflWi++UTS03/0kQ52oTGvCYZQo";
        var basePath = "./resources/creating-pdf-pdf-endpoint/";
        var outputPath = "./output/";

        await CreatePdfDlex.RunLocal(apiKey, basePath, outputPath);
        await CreatePdfDlex.RunRemote(apiKey, basePath, outputPath);
    }

    static async RunLocal(apiKey, basePath, outputPath){
        var pdf = new Pdf();
        pdf.apiKey = apiKey;

        var layoutDataResource = new LayoutDataResource(basePath + "SimpleReportWithCoverPage.json");
        var dlexResource = new DlexResource(basePath + "SimpleReportWithCoverPage.dlex");
       
        pdf.addDlex(dlexResource, layoutDataResource);
       
        var resource = new Resource(basePath + "Northwind logo.gif", "Northwind logo.gif");
      
    
        pdf.dle

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
    
    static async RunRemote(apiKey, basePath, outputPath){
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
await CreatePdfDlex.Run();
