import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/dlex-layout/tutorial-dlex-layout

export class CreatingPdfDlexLayout {
    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/creating-pdf-dlex-layout-endpoint/create-pdf-dlex-layout.json");
        var dlexEndpoint = new DlexLayout("samples/creating-pdf-dlex-layout-endpoint/create-pdf-dlex-layout.dlex", layoutData);
        dlexEndpoint.ApiKey = "DP.xxx-api-key-xxx";
        var res = await dlexEndpoint.Process();
        
        if (res.IsSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/creating-pdf-dlex-layout-endpoint/create-pdf-dlex-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
        } else {
            console.log(response.ErrorJson);
        }
    }
}
await CreatingPdfDlexLayout.Run();