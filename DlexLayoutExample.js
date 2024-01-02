import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    DlexResource
} from "@dynamicpdf/api"

export class DlexLayoutExample {

    static async Run() {
        var localPath = "c:/temp/dlex-layout/";
        var apiKey = "DP.J+G1BiQYH7x+3D7uR5jo+Jo0PPKrY0nU1l+j3XbOtobjTqpWSZErUV70";
        await this.RunFromCloud(apiKey, localPath);
        await this.RunFromLocal(apiKey, localPath);
    }

    static async RunFromCloud(apiKey, localPath) {
        var layoutData = new LayoutDataResource(localPath + "SimpleReportWithCoverPage.json");
        var dlexEndpoint = new DlexLayout("samples/dlex-layout/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndpoint.apiKey = apiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = localPath + "nodejs-dlex-layout-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }

    static async RunFromLocal(apiKey, localPath) {
        var layoutData = new LayoutDataResource(localPath + "SimpleReportWithCoverPage.json");
        
        var dlexResource = new DlexResource(localPath + "SimpleReportWithCoverPage.dlex", "SimpleReportWithCoverPage.dlex");
        var dlexEndpoint = new DlexLayout(dlexResource, layoutData);
        dlexEndpoint.dlexAdditionalResource(localPath + "NorthwindLogo.gif", "NorthwindLogo.gif");
        dlexEndpoint.apiKey = apiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = localPath + "nodejs-dlex-layout-example-local-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DlexLayoutExample.Run();