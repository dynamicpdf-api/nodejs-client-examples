import { Endpoint } from "@dynamicpdf/api"

import { TestParams } from './init.js';
import { DlexLayoutExample } from "./DlexLayoutExample.js"
import { InstructionsExample } from "./instructions/InstructionsExample.js";
import { PdfXmpExample } from "./PdfXmpExample.js";
import { PdfInfoExample } from "./PdfInfoExample.js";
import { ImageInfoExample } from "./ImageInfoExample.js";
import { PdfExample } from "./PdfExample.js";
import { PdfTextExample } from "./PdfTextExample.js";

async function RunExamples() {
    var testParams = new TestParams();
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }

    try {
        Endpoint.DefaultApiKey = testParams.ApiKey;
        Endpoint.DefaultBaseUrl = testParams.BaseUrl;

       PrintDivider("Image Info (1)");
        await ImageInfoExample.ImageInfoExampleOne();
    //    PrintDivider("Dlex Layout");
    //    await DlexLayoutExample.Run();
    /*    PrintDivider("Pdf Xmp");
        await PdfXmpExample.Run();
        PrintDivider("Pdf Info");
        await PdfInfoExample.Run();
        PrintDivider("Pdf Creation");
        await PdfExample.Run();
        PrintDivider("Pdf Text Extration");
        await PdfTextExample.Run();

        PrintDivider("Instructions Demo");
        await InstructionsExample.Run(); */
    } catch (err) {
        console.log(err);
    }
}

function PrintDivider(title){
    console.log("\n============================================");
    console.log(title);
    console.log("============================================");
}

RunExamples();