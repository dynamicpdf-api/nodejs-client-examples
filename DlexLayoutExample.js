import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DlexLayoutExample {
    static async Run() {
        var layoutData = new LayoutDataResource("./Resources/client-libraries-examples/AllReportElementsData.json");
        var dlexEndpoint = new DlexLayout("AllReportElements.dlex", layoutData);

        dlexEndpoint.author = "ceTe Software";
        dlexEndpoint.title = "First Rest API";
        var res = await dlexEndpoint.process();
        if (res.isSuccessful) {
            var outFile = "./output/dlex-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
            console.log("Pdf was generated and saved at: " + outFile);
        } else {
            console.log(PrettyPrintUtil.JsonPrettify(response.errorJson));
        }
    }
}