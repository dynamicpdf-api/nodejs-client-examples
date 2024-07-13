import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    DlexResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class DlexLayoutExample {

    static async Run() {
        await this.RunFromCloud();
        await this.RunFromLocal();
    }

    static async RunFromCloud() {
        var layoutData = new LayoutDataResource(Constants.BasePath + "creating-pdf-dlex-layout/creating-pdf-dlex-layout.json");
        var dlexEndpoint = new DlexLayout("samples/creating-pdf-dlex-layout-endpoint/creating-pdf-dlex-layout.dlex", layoutData);
        dlexEndpoint.apiKey = Constants.ApiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "nodejs-dlex-layout-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }

    static async RunFromLocal(apiKey, localPath, outputPath) {
        var layoutData = new LayoutDataResource(Constants.BasePath + "creating-pdf-dlex-layout/creating-pdf-dlex-layout.json");
        
        var dlexResource = new DlexResource(Constants.BasePath + "creating-pdf-dlex-layout/creating-pdf-dlex-layout.dlex", "creating-pdf-dlex-layout.dlex");
        var dlexEndpoint = new DlexLayout(dlexResource, layoutData);
        dlexEndpoint.dlexAdditionalResource(Constants.BasePath + "creating-pdf-dlex-layout/creating-pdf-dlex-layout.png", "creating-pdf-dlex-layout.png");
        dlexEndpoint.apiKey = Constants.ApiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "nodejs-dlex-layout-example-local-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DlexLayoutExample.Run();