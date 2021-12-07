import { Endpoint } from "@dynamicpdf/api"

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
import {GettingStartedInFive} from "./GettingStartedInFive.js";

async function RunExamples() {
    
    try {


       // await OutlineTutorialExample.Run();

       await GettingStartedInFive.Run();
       //await SimpleFormFillExample.Run();

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

RunExamples();