import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class DesignerReportTemplate {
    static async Run() {
        var layoutData = new LayoutDataResource(Constants.BasePath + "creating-a-report-template-designer/invoice.json");
        var dlexEndpoint = new DlexLayout("samples/creating-a-report-template-designer/invoice.dlex", layoutData);
        dlexEndpoint.apiKey = Constants.ApiKey

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "invoice-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
//await DesignerReportTemplate.Run();
