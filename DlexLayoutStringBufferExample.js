import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DlexLayoutStringBufferExample {

    static async Run() {

        //note: we leave the data as a buffer NOT a string

        var fileData = fs.readFileSync("C:/temp/dlex-layout-example/SimpleReportWithCoverPage.json");
        
        var layoutData = new LayoutDataResource(fileData, "foo");
        //var layoutData = new LayoutDataResource("C:/temp/dlex-layout-example/SimpleReportWithCoverPage.json", "SimpleReportWithCoverPage.json");
        var dlexEndpoint = new DlexLayout("samples/dlex-layout/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndpoint.apiKey = "DP ---api-key---";

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = "C:/temp/dlex-layout-example/nodejs-dlex-layout-string-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DlexLayoutStringBufferExample.Run();