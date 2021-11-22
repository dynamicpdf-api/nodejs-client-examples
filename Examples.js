import { Endpoint } from "@dynamicpdf/api"

import { TestParams } from './init.js';
import { DlexLayoutExample } from "./DlexLayoutExample.js"
import { InstructionsExample } from "./instructions/InstructionsExample.js";
import { PdfXmpExample } from "./PdfXmpExample.js";
import { PdfInfoExample } from "./PdfInfoExample.js";
import { ImageInfoExample } from "./ImageInfoExample.js";
import { PdfExample } from "./PdfExample.js";
import { PdfTextExample } from "./PdfTextExample.js";
import {SimpleDlexMergeExample} from "./SimpleDlexMergeExample.js";
import {PdfFormFillExample} from "./PdfFormFillExample.js";
import {OutlineTutorialExample} from "./OutlineTutorialExample.js";
import {SimpleFormFillExample} from "./SimpleFormFillExample.js";

async function RunExamples() {
    
    var testParams = new TestParams();
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }

    try {
        Endpoint.DefaultApiKey = testParams.ApiKey;
        Endpoint.DefaultBaseUrl = testParams.BaseUrl;

       // await OutlineTutorialExample.Run();

       await SimpleFormFillExample.Run();

        //await PdfFormFillExample.Run();

        //await SimpleDlexMergeExample.Run();

       // PrintDivider("PdfMergeTutorial");
      //  await PdfMergeTutorial.Run();

//       PrintDivider("Image Info (1)");
//        await ImageInfoExample.ImageInfoExampleOne();
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