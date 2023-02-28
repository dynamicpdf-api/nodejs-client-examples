import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DesignerReportTemplate {
    static async Run() {
        var layoutData = new LayoutDataResource("C:/temp/dynamicpdf-api-samples/using-dlex-layout/invoice-local.json");
        var dlexEndpoint = new DlexLayout("samples/creating-a-report-template-designer/invoice.dlex", layoutData);
        dlexEndpoint.apiKey = "DP<API-KEY>";

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = "C:/temp/dynamicpdf-api-samples/using-dlex-layout/invoice-nodejs-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DesignerReportTemplate.Run();
