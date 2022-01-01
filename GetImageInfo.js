import {
    ImageResource,
    ImageInfo,
    ImageResponse
} from "@dynamicpdf/api"

export class GetImageInfo {
    static async Run() {

        
        var imageResource = new ImageResource("C:/temp/dynamicpdf-api-samples/get-image-info/dynamicpdfLogo.png");
        var imageInfo = new ImageInfo(imageResource); 
        imageInfo.ApiKey = "DP.xxx-api-key-xxx";

        var imageResponse = await imageInfo.Process();

        if (imageResponse.IsSuccessful) {
            console.log(JSON.parse(imageResponse.Content));
        } else {
            console.log(imageResponse.ErrorJson);
        }
    }
}
await GetImageInfo.Run();