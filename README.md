nodejs-client-examples 
=========================================

The project contains numerous sample projects for the tutorials and examples on cloud.dynamicpdf.com. Each example project is designed to run independently. All resources can be found on the cloud.dynamicpdf.com website.

- **This project contains the tutorials and examples from [cloud.dynamicpdf.com](http://cloud.dynamicpdf.com)**

Running Examples
----------------

In order to install NodeJS client for DynamicPdf Cloud, run this:

```bash
npm update
```

This will install the client package. Each node.js class runs independently.  Run any of the provided classes as follows.

```bash
node <filename>.js
```

## Resources

To obtain the resources for the project, login to cloud.dynamicpdf.com (assuming you have an account), and go to the **Resource Manager**. You use the `samples` folder to add the resources for the tutorials and examples from this project.

- [Resource Manager Samples](https://cloud.dynamicpdf.com/docs/usersguide/environment-manager/environment-manager-sample-resources)  

For more information on the tutorials and example code, refer to:

- https://cloud.dynamicpdf.com/docs/tutorials/tutorials-overview
- https://cloud.dynamicpdf.com/docs/usersguide/cloud-api/cloud-api-overview

## **Tutorials**

The following table lists the tutorial project or file name.  In Visual Studio each tutorial is it's own project. In the remaining client libraries each tutorial is its own individual class.

| Tutorial Title                                      | Project/File/Class      | Tutorial Location                                            |
| --------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| Getting Started in 5 Minutes                        | `GettingStartedInFive`  | https://cloud.dynamicpdf.com/docs/tutorials/getting-started/getting-started-5-min |
| Completing a Form using the `pdf` Endpoint          | `CompletingAcroForm`    | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-form-completion |
| Creating a PDF Using a DLEX and the `pdf` Endpoint  | `CreatingPdfDlex`       | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-dlex-merge |
| Adding Bookmarks to a PDF                           | `AddBookmarks`          | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-tutorial-outlines |
| Creating a PDF Using the `dlex-layout` Endpoint     | `CreatingPdfDlexLayout` | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/dlex-layout/tutorial-dlex-layout |
| Extracting Metadata Using the `image-info` Endpoint | `GetImageInfo`          | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/image-info/tutorial-image-info |
| Extract PDF Metadata Using the `pdf-info` Endpoint  | `GetPdfInfo`            | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-info/tutorial-pdf-info |
| Extracting Text Using the `pdf-text` Endpoint       | `ExtractingText`        | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-text/tutorial-pdf-text |
| Extract XMP Metadata Using the `pdf-xmp` Endpoint   | `GetXmpMetaData`        | https://cloud.dynamicpdf.com/docs/tutorials/cloud-api/pdf-xmp/tutorial-pdf-xmp |
