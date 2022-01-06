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
        var res = await imageInfo.process();
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }

    static async ImageInfoExampleTwo() {
        var imageResource = new ImageResource("./Resources/client-libraries-examples/multipage.tiff");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.author = "ceTe Software";
        imageInfo.title = "First Rest API";
        try {
            var res = await imageInfo.process();
        }
        catch (e) { }
        if (res.isSuccessful) {
            console.log(JSON.parse(res.content));
        }
    }
}