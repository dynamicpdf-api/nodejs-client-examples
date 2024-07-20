// ========================================================================
// Author: DynamicPDF.COM CETE  www.dynamicpdf.com
// Copyright: (c) 2021 CeTe Software
// License: MIT - for additional information see ./LICENSE in this project.
// Errors: Please report any errors in software to support@dynamicpdf.com
// ========================================================================

import fs from 'fs';
import path from 'path';
import { ClientApiUtility } from './ClientApiUtility.js';
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

console.log("================================================================================");
console.log("Ran all examples. Created PDFs in output folder:");
console.log("================================================================================");

const directoryPath = path.join(".", "output")
await fs.readdir(directoryPath, function(err, files) {
  if (err) {
    console.log("Error getting directory information.")
  } else {
    files.forEach(function(file) {
      console.log(file)
    })
  }
})