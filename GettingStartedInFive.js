import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    Endpoint
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class GettingStartedInFive {

    static async Run() {
        var layoutData = new LayoutDataResource(Constants.BasePath + "getting-started/getting-started.json");
        var dlexEndpoint = new DlexLayout("samples/getting-started/getting-started.dlex", layoutData);
        dlexEndpoint.apiKey =  Constants.ApiKey;
        
        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "getting-started-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}

await GettingStartedInFive.Run();