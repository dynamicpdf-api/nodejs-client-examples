import {
    ImageResource,
    ImageInfo
} from "@dynamicpdf/api"

export class ImageInfoExample {
    static async ImageInfoExampleOne() {
        var imageResource = new ImageResource("./Resources/client-libraries-examples/getting-started.png");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.Author = "ceTe Software";
        imageInfo.Title = "First Rest API";
        var res = await imageInfo.Process();
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }

    static async ImageInfoExampleTwo() {
        var imageResource = new ImageResource("./Resources/client-libraries-examples/multipage.tiff");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.Author = "ceTe Software";
        imageInfo.Title = "First Rest API";
        try {
            var res = await imageInfo.Process();
        }
        catch (e) { }
        if (res.IsSuccessful) {
            console.log(JSON.parse(res.Content));
        }
    }
}