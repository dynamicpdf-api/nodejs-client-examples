// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    DlexResource
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class LocalDlexExample {
    static async Run() {
        var layoutData = new LayoutDataResource(Constants.BasePath + "local-dlex/ExampleTemplate.json");
        var dlexResource = new DlexResource(Constants.BasePath + "local-dlex/ExampleTemplate.dlex");
        var dlexEndpoint = new DlexLayout(dlexResource, layoutData);
        dlexEndpoint.dlexAdditionalResource(Constants.BasePath + "local-dlex/signature-one.png", "signature-one.png");
        dlexEndpoint.dlexAdditionalResource(Constants.BasePath + "local-dlex/template_example.df", "template_example.pdf");
        dlexEndpoint.apiKey = Constants.ApiKey
        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = Constants.OutputPath + "local-dlex-layout-output-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(response.errorJson);
        }
    }
}
await LocalDlexExample.Run();