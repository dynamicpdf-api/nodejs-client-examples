import fs from 'fs';
import {
    LayoutDataResource,
    DlexLayout,
    DlexResource
} from "@dynamicpdf/api"

export class DlexLayoutExample {

    static async Run() {
        var localPath = "./resources/creating-pdf-dlex-layout/";
        var apiKey = "DP.wdqmvS3entL4VAGgRUC7dK+oUrsg7tvbY8GX5ABmB2c5T7UB8Xwk4VCh";
        var outputPath = "./output/";
        await this.RunFromCloud(apiKey, localPath, outputPath);
        await this.RunFromLocal(apiKey, localPath, outputPath);
    }

    static async RunFromCloud(apiKey, localPath, outputPath) {
        var layoutData = new LayoutDataResource(localPath + "creating-pdf-dlex-layout.json");
        var dlexEndpoint = new DlexLayout("samples/creating-pdf-dlex-layout-endpoint/creating-pdf-dlex-layout.dlex", layoutData);
        dlexEndpoint.apiKey = apiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = outputPath + "nodejs-dlex-layout-example-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }

    static async RunFromLocal(apiKey, localPath, outputPath) {
        var layoutData = new LayoutDataResource(localPath + "creating-pdf-dlex-layout.json");
        
        var dlexResource = new DlexResource(localPath + "creating-pdf-dlex-layout.dlex", "creating-pdf-dlex-layout.dlex");
        var dlexEndpoint = new DlexLayout(dlexResource, layoutData);
        dlexEndpoint.dlexAdditionalResource(localPath + "creating-pdf-dlex-layout.png", "creating-pdf-dlex-layout.png");
        dlexEndpoint.apiKey = apiKey;

        var res = await dlexEndpoint.process();
        
        if (res.isSuccessful) {
            var outFile = outputPath + "nodejs-dlex-layout-example-local-output.pdf";
            var outStream = fs.createWriteStream(outFile);
            outStream.write(res.content);
            outStream.close();
        } else {
            console.log(res.errorJson);
        }
    }
}
await DlexLayoutExample.Run();