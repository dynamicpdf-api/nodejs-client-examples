import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class DlexLayoutStringBufferExample {

    static async Run() {

        //note: we leave the data as a buffer NOT a string

        var fileData = fs.readFileSync(Constants.BasePath + "dlex-layout/SimpleReportWithCoverPage.json");
        
        var layoutData = new LayoutDataResource(fileData, "foo");
        var dlexEndpoint = new DlexLayout("samples/dlex-layout/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndpoint.apiKey = Constants.ApiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "nodejs-dlex-layout-string-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DlexLayoutStringBufferExample.Run();