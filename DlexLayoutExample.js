import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class DlexLayoutExample {
    static async Run() {
        var layoutData = new LayoutDataResource("./Resources/client-libraries-examples/AllReportElementsData.json");
        var dlexEndpoint = new DlexLayout("AllReportElements.dlex", layoutData);

        dlexEndpoint.Author = "ceTe Software";
        dlexEndpoint.Title = "First Rest API";
        var res = await dlexEndpoint.Process();
        if (res.IsSuccessful) {
            var outFile = "./output/dlex-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.Content);
            outStream.close();
            console.log("Pdf was generated and saved at: " + outFile);
        } else {
            console.log(PrettyPrintUtil.JsonPrettify(response.ErrorJson));
        }
    }
}