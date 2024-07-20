// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 DynamicPDF API
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import {
    ImageResource,
    ImageInfo,
    ImageResponse
} from "@dynamicpdf/api"

import {Constants} from './constants.js';
import { ClientApiUtility } from './ClientApiUtility.js';

export class GetImageInfo {
    static async Run() {

        
        var imageResource = new ImageResource(Constants.BasePath + "image-info/getting-started.png");
        var imageInfo = new ImageInfo(imageResource); 
        imageInfo.apiKey = Constants.ApiKey;

        var imageResponse = await imageInfo.process();

        if (imageResponse.isSuccessful) {
            console.log(JSON.parse(imageResponse.content));
        } else {
            console.log(imageResponse.errorJson);
        }
    }
}
await GetImageInfo.Run();