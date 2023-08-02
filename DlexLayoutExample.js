import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DlexLayoutExample {
    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/create-pdf-dlex/SimpleReportWithCoverPage.json");
        var dlexEndpoint = new DlexLayout("samples/dlex-layout/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndpoint.apiKey = "DP.xxx-api-key-xxx";

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/create-pdf-dlex/nodejs-dlex-layout-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DlexLayoutExample.Run();