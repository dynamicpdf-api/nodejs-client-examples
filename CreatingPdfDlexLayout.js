import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

import {Constants} from './constants.js';

export class CreatingPdfDlexLayout {
    static async Run() {
        var layoutData = new LayoutDataResource(Constants.BasePath + "creating-pdf-dlex-layout/creating-pdf-dlex-layout.json");
        var dlexEndpoint = new DlexLayout("samples/creating-pdf-dlex-layout-endpoint/creating-pdf-dlex-layout.dlex", layoutData);
        dlexEndpoint.apiKey = Constants.ApiKey
        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "create-pdf-dlex-layout-output-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(response.errorJson);
        }
    }
}
await CreatingPdfDlexLayout.Run();