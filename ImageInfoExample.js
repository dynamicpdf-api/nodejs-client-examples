import {
    ImageResource,
    ImageInfo
} from "@dynamicpdf/api"

export class ImageInfoExample {
    static async ImageInfoExampleOne() {
        var imageResource = new ImageResource("./Resources/client-libraries-examples/dynamicpdflogo.png");
        var imageInfo = new ImageInfo(imageResource);
        var res = await imageInfo.Process();
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }
}