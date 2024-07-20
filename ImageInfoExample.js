// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import {
    ImageResource,
    ImageInfo,
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class ImageInfoExample {

    static async Run() {
        await ImageInfoExample.RunOne();
        await ImageInfoExample.RunTwo();
    }

    static async RunOne() {
        var imageResource = new ImageResource(Constants.BasePath + "image-conversion/dynamicPdfLogo.png");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.apiKey = Constants.ApiKey;
        var response = await imageInfo.process();

        if (response.isSuccessful) {
            console.log(JSON.parse(response.content));
        }
    }

    static async RunTwo(apiKey, basePath)
    {
        var imageResource = new ImageResource(Constants.BasePath + "image-conversion/MultiPageTiff.tif");
        var imageInfo = new ImageInfo(imageResource);
        imageInfo.apiKey = Constants.ApiKey;
        var response = await imageInfo.process();
        
        if (response.isSuccessful) {
            console.log(JSON.parse(response.content));
        }
    }
}
await ImageInfoExample.Run();