// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';

export class ClientApiUtility {

    static async Run() {
        if(!fs.existsSync("./output"))
        {
            fs.mkdirSync("./output");
        }
    }
}
await ClientApiUtility.Run();
    