import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DlexLayoutExample {
    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/create-pdf-dlex/SimpleReportWithCoverPage.json");
        var dlexEndpoint = new DlexLayout("samples/dlex-layout/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndpoint.ApiKey = "DP.xxx-api-key-xxx";

        var res = await dlexEndpoint.Process();
        
        if (res.IsSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/create-pdf-dlex/nodejs-dlex-layout-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
        } else {
            console.log(PrettyPrintUtil.JsonPrettify(response.ErrorJson));
        }
    }
}
await DlexLayoutExample.Run();