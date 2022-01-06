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
        dlexEndpoint.ApiKey =  "DP.TrJj2UBRFfrxiLYYD9xQryHXnFoSRKVPTBYH0LRpVWWnTZPOmgRO6yX6";
        
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