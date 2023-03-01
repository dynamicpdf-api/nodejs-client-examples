import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    Endpoint
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/getting-started

export class GettingStartedInFive {

    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/getting-started.json");
        var dlexEndpoint = new DlexLayout("samples/getting-started/getting-started.dlex", layoutData);
        dlexEndpoint.apiKey =  "DP.xxx-api-key-xxx";
        
        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/getting-started-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
            console.log("Pdf was generated and saved at: " + outFile);
        } else {
            console.log(res.errorJson);
        }
    }
}

await GettingStartedInFive.Run();