![](./logo-banner2.png)

nodejs-client-examples 
=========================================

The Node.js Client Examples (`nodejs-client-examples`) project provides examples using the DynamicPDF API Node.js client library. This project contains numerous sample projects for the tutorials and examples at the [DynamicPDF  API](https://cloud.dynamicpdf.com/) website.

The DynamicPDF API consists of the following six endpoints.

* `dlex-layout`
* `image-info`
* `pdf`
* `pdf-info`
* `pdf-text`
* `pdf-xmp`

For more information, please visit [DynamicPDF API](https://dpdf.io/ "DynamicPDF API Homepage"). Support for other languages/platforms (PHP, C#, Node.js) is available on GitHub ([DynamicPDF API at GitHub](https://github.com/dynamicpdf-api "DynamicPDF API at GitHub")).

Running Examples
----------------

First add the DynamicPDF API key to constants.js.

To install the `nodejs-client-examples` for the DynamicPDF API, run the following commands.

```bash
$ cd ./nodejs-client-examples
$ npm link nodejs-client-examples
$ npm install
```

To run all the examples at once, run `dynamicpdf-examples.js`
```bash
node dynamicpdf-examples.js
```

Each node.js file runs independently. 

await TemplatesExample.Run()

```bash
node <filename>.js
```

## Resources

To obtain the resources for the project, login to [cloud.dynamicpdf.com](https://dpdf.io/) (assuming you have an account), and go to the **File Manager**. You use the `samples` folder to add the resources for the tutorials and examples from this project.

- [Resource Manager Samples](https://dpdf.io/docs/usersguide/environment-manager/environment-manager-sample-resources)  

You must have the following samples in your cloud storage to run all examples at once.
* samples/dlex-layout/
* samples/fill-acro-form-pdf-endpoint/
* samples/creating-pdf-pdf-endpoint/
* samples/creating-pdf-dlex-layout-endpoint/
* samples/creating-a-report-template-designer/
* samples/getting-started/
* samples/get-image-info-image-info-endpoint/
* samples/users-guide-resources/
* samples/merge-pdfs-pdf-endpoint/
* samples/creating-pdf-dlex-layout-endpoint/
* samples/blog-dynamic-columns/
* samples/fill-acro-form-pdf-endpoint/

For more information on the tutorials and example code, refer to:

- https://dpdf.io/docs/tutorials/tutorials-overview
- https://dpdf.io/docs/usersguide/cloud-api/cloud-api-overview

## **Tutorials**

The following table lists the available tutorials.

| Tutorial Title                                     | Tutorial Location                                            |
| -------------------------------------------------- | ------------------------------------------------------------ |
| Merging PDFs                                       | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/merging-pdfs |
| Completing an AcroForm                             | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/form-completion |
| Creating a PDF Using a DLEX and the `pdf` Endpoint | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/dlex-pdf-endpoint |
| Adding Bookmarks to a PDF                          | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/bookmarks |
| Creating a PDF Using the `dlex-layout` Endpoint    | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/dlex-layout |
| Extracting Image Metadata                          | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/image-info |
| Extract PDF Metadata                               | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-info |
| Extracting PDF's Text                              | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-text |
| Extract XMP Metadata                               | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-xmp |

# Support

The primary source for the DynamicPDF Cloud API support is through [Stack Overflow](https://stackoverflow.com/questions/tagged/dynamicpdf-api). Please use the "[dynamicpdf-api](https://stackoverflow.com/questions/tagged/dynamicpdf-api)" tag to ask questions. Our support team actively monitors the tag and responds promptly to any questions.  Also, let us know you asked the question by following up with an email to [support@dynamicpdf.com](mailto:support@dynamicpdf.com). 

## Pro Plan Subscribers[#](https://cloud.dynamicpdf.com/support#pro-plan-subscribers)

Ticket support is available to Pro Plan subscribers. But we still encourage you to help the community by posting on Stack Overflow when possible. You can also email [support@dynamicpdf.com](mailto:support@dynamicpdf.com) if you need to ask something specific to your use case that may not help the DynamicPDF Cloud API community.

# License

The `nodejs-client-examples` library is licensed under the [MIT License](./LICENSE).
