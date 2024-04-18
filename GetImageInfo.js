import {
    ImageResource,
    ImageInfo,
    ImageResponse
} from "@dynamicpdf/api"


export class GetImageInfo {
    static async Run() {

        
        var imageResource = new ImageResource("./resources/image-info/getting-started.png");
        var imageInfo = new ImageInfo(imageResource); 
        imageInfo.apiKey = "DP--api-key--";

        var imageResponse = await imageInfo.process();

        if (imageResponse.isSuccessful) {
            console.log(JSON.parse(imageResponse.content));
        } else {
            console.log(imageResponse.errorJson);
        }
    }
}
await GetImageInfo.Run();