import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/dlex-layout/tutorial-dlex-layout

export class CreatingPdfDlexLayout {
    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/creating-pdf-dlex-layout-endpoint/creating-pdf-dlex-layout.json");
        var dlexEndpoint = new DlexLayout("samples/creating-pdf-dlex-layout-endpoint/creating-pdf-dlex-layout.dlex", layoutData);
        dlexEndpoint.apiKey = "DP.xxx-api-key-xxx";
        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/creating-pdf-dlex-layout-endpoint/create-pdf-dlex-layout-output-nodejs.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(response.errorJson);
        }
    }
}
await CreatingPdfDlexLayout.Run();