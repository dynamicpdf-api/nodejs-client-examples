import {
    ImageResource,
    ImageInfo,
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/image-info/tutorial-image-info

export class ImageInfoExample {

    static async Run() {
        var basePath = "C:/temp/dynamicpdf-api-usersguide-examples/";
        var apiKey = "DP.xxx--api-key--xxx";
        await ImageInfoExample.RunOne(apiKey, basePath);
        await ImageInfoExample.RunTwo(apiKey, basePath);
    }

    static async RunOne(apiKey, basePath) {
        var imageResource = new ImageResource(basePath + "getting-started.png");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.ApiKey = apiKey;
        var response = await imageInfo.Process();

        if (response.IsSuccessful) {
            console.log(JSON.parse(response.Content));
        }
    }

    static async RunTwo(apiKey, basePath)
    {
        var imageResource = new ImageResource(basePath + "multipage.tiff");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.ApiKey = apiKey;
        var response = await imageInfo.Process();
        
        if (response.IsSuccessful) {
            console.log(JSON.parse(response.Content));
        }
    }
}
await ImageInfoExample.Run();