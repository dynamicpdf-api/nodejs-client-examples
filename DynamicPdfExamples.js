import fs from 'fs';
import { AddBookmarks } from './AddBookmarks.js';
import { AxiosDlexExample } from './AxiosDlexExample.js';
import {BookmarksSolution} from './BookmarksSolution.js'
import {CompletingAcroForm} from './CompletingAcroForm.js'
import {CreatingPdfDlexLayout} from './CreatingPdfDlexLayout.js'
import {DeletePages} from './DeletePages.js'
import {DesignerReportTemplate} from './DesignerReportTemplate.js'
import {DlexLayoutExample} from './DlexLayoutExample.js'
import {DlexLayoutStringBufferExample} from './DlexLayoutStringBufferExample.js'
import {ExtractText} from './ExtractText.js'
import {FormFieldFlattenDelete} from './FormFieldFlattenDelete.js';
import {GetImageInfo} from './GetImageInfo.js'
import {GetPdfInfo} from './GetPdfInfo.js'
import {GettingStartedInFive} from './GettingStartedInFive.js'
import {GetXmpMetaData} from './GetXmpMetaData.js'
import {HtmlToPdf} from './HtmlToPdf.js'
import {ImageConversion} from './ImageConversion.js'
import {ImageInfoExample} from './ImageInfoExample.js'
import {InstructionsExample} from './InstructionsExample.js'
import {MergePdfs} from './MergePdfs.js'
import {MergeSolution} from './MergeSolution.js'
import {PdfBarcode} from './PdfBarcode.js'
import {PdfExample} from './PdfExample.js'
import {PdfHtmlCssWorkAround} from './PdfHtmlCssWorkAround.js'
import {PdfHtmlExample} from './PdfHtmlExample.js'
import {PdfInfoExample} from './PdfInfoExample.js'
import {PdfTextExample} from './PdfTextExample.js'
import {PdfXmpExample} from './PdfXmpExample.js'
import {SolutionImagesTextRecs} from './SolutionImagesTextRecs.js'
import {SplitPdf} from './SplitPdf.js'
import { TemplatesExample } from './TemplatesExample.js';


export class DynamicPdfExamples {

    static async Run() {

        if(!fs.existsSync("./output"))
        {
            fs.mkdirSync("./output");
        }

        await AddBookmarks.Run();
        await AxiosDlexExample.Run();
        await BookmarksSolution.Run();
        await CompletingAcroForm.Run();
        await CreatingPdfDlexLayout.Run();
        await DeletePages.Run();
        await DesignerReportTemplate.Run();
        await DlexLayoutExample.Run();
        await DlexLayoutStringBufferExample.Run();
        await ExtractText.Run();
        await FormFieldFlattenDelete.Run();
        await GetImageInfo.Run();
        await GetPdfInfo.Run();
        await GettingStartedInFive.Run();
        await GetXmpMetaData.Run();
        await HtmlToPdf.Run();
        await ImageConversion.Run();
        await ImageInfoExample.Run();
        await InstructionsExample.Run();
        await MergePdfs.Run();
        await MergeSolution.Run();
        await PdfBarcode.Run();
        await PdfExample.Run();
        await PdfHtmlCssWorkAround.Run();
        await PdfHtmlExample.Run();
        await PdfInfoExample.Run();
        await PdfTextExample.Run();
        await PdfXmpExample.Run();
        await SolutionImagesTextRecs.Run();
        await SplitPdf.Run();
        await TemplatesExample.Run();
    }
}
await DynamicPdfExamples.Run();