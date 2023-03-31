import fs from 'fs';

import {
  Pdf,
  PageSize,
  Orientation,
  HtmlResource
} from "@dynamicpdf/api"

export class PdfHtmlExample {
    
    static async Run() {
        
       var savePath = "c:/temp/html-to-pdf/html-output.pdf";
       var apiKey = "DP.EBoj8OwntzCD2sKVWHiH09v3n+OWtR+vkwPxjmxQ53bwRr5nCnbznASo";
       var pdf = new Pdf();
       pdf.apiKey = apiKey;

        //var resource = new HtmlResource("<html>hello</html>");

        pdf.addHtml("<html>hello</html>", null, 
        PageSize.LETTER, Orientation.PORTRAIT, 1);

        pdf.addHtml(new HtmlResource("<html><p>HTML with basePath.</p><img src='./images/logo.png'></img></html>"),
        "https://www.dynamicpdf.com", PageSize.LETTER, Orientation.PORTRAIT, 1);

        var resourcePath = "c:/temp/html-to-pdf/products.html";
        pdf.addHtml(new HtmlResource(resourcePath), null, PageSize.LETTER, Orientation.PORTRAIT, 1);

        var res = await pdf.process();
        if (res.isSuccessful) {
            var outStream = fs.createWriteStream(savePath);
            outStream.write(res.content);
            outStream.close();
        }
    }
}
await PdfHtmlExample.Run();