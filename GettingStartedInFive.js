import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    Endpoint
} from "@dynamicpdf/api"


export class GettingStartedInFive {

    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/getting-started.json");
        var dlexEndpoint = new DlexLayout("samples/getting-started/getting-started.dlex", layoutData);
        dlexEndpoint.ApiKey =  "DP.jNFADSRTMGk60fv4+QY1qID9bzpp+mrkC8IU8wcWtl2wSYcQFV1S3Mww";
        
        var res = await dlexEndpoint.Process();
        
        if (res.IsSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/getting-started-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: " + outFile);
        } else {
            console.log(res.ErrorJson);
        }
    }
}

await GettingStartedInFive.Run();