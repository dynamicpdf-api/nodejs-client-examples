import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DlexLayoutExample {
    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/error-handling-example/SimpleReportWithCoverPage.json");
        var dlexEndpoint = new DlexLayout("samples/error-handling-example/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndpoint.apiKey = "DP.HBwj23Eo4r7mcTy2We4ezHfNr2DRXS+qnKP1udc1d0pAS7VLKGfEfVd7";

        var res = await dlexEndpoint.process();
        
        console.log(response.statusCode);

        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/error-handling-example/nodejs-dlex-layout-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log("ErrorId: " + response.errorId);
            console.log("ErrorMsg: " + response.errorMessage);
            console.log(PrettyPrintUtil.JsonPrettify(response.errorJson));
        }
    }
}
await DlexLayoutExample.Run();