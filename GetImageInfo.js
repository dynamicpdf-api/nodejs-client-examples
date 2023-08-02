import {
    ImageResource,
    ImageInfo,
    ImageResponse
} from "@dynamicpdf/api"

// https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/image-info/tutorial-image-info

export class GetImageInfo {
    static async Run() {

        
        var imageResource = new ImageResource("C:/temp/dynamicpdf-api-samples/get-image-info/dynamicpdfLogo.png");
        var imageInfo = new ImageInfo(imageResource); 
        imageInfo.apiKey = "DP.xxx-api-key-xxx";

        var imageResponse = await imageInfo.process();

        if (imageResponse.isSuccessful) {
            console.log(JSON.parse(imageResponse.content));
        } else {
            console.log(imageResponse.errorJson);
        }
    }
}
await GetImageInfo.Run();