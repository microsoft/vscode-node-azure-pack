
# Azure Support for VS Code

[Microsoft Azure](https://azure.microsoft.com/en-us/overview/what-is-azure/) is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.

Azure support in Visual Studio Code is provided through a rich set of extensions that make it easy to discover and interact with the cloud services that power your applications. 

> If you do not have an Azure subscription, [sign up today](https://azure.microsoft.com/en-us/free/?b=16.48) for a free account and get **$200** in Azure Credits to try out any combination of Azure services.

## Azure Services

* [App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) is Azure's fully-managed Platform as a Service (PaaS) that let's you deploy and scale web, mobile, and API apps. Use the Azure App Service extension for VS Code to quickly create, manage, and deploy your websites.

* [Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb) is Azure's globally distributed, multi-model database serivice. Browse and query your MongoDB databases both locally and in the cloud. In addition to MongoDB, CosmosDB supports Graphs (Gremlin), SQL (previously known as DocumentDB), and Apache Cassandra .

* [Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) is an event driven, compute on demand service, sometimes referred to as ["serverless computing"](https://en.wikipedia.org/wiki/Serverless_computing). You can focus on writing the code and let Azure worry about the infrastructure. The Functions support in VS Code lets you quickly browse, create, manage, deploy, and even **debug** functions locally.

* Have a static website you want to host in the cloud? You can use [Storage](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestorage) to host your site quickly and inexpensively. The Storage service also provides massive scale blob, file, and document storage with low latency and high throughput. Storage support lets you deploy static sites and browse Blob Containers, File Shares, Tables, and Queues.

* [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker) support makes it easy to develop and deploy containerized microservice-based applications using Docker containers. 

* [Azure CLI](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli) support provides an enhanced editing experience when authoring [Azure CLI 2.0](https://aka.ms/AzureCLI2) commands with full completions (IntelliSense), the ability to invoke one or more commands in the terminal, and the ability to easily view and format results as a separate JSON document.

* [Azure Resource Manager (ARM) Tools](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools) support provides a rich editing experience for Azure Resource Manager ("ARM") deployment templates and template language expressions. For example, IntelliSense for TLE function names, parameter references, signature help, Go to Definition, Peek Definition, and Find All References (Shift+F12) as well as Errors and Warnings, making it quick and easy to author ARM templates in VS Code.

## Installation

By intalling this extension you will install all of the extensions listed above. Some of these extensions will also install the [Azure Account extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account) which provides a single Azure login and subscription filtering experience.

You can uninstall individual extensions or all by uninstalling this extension.

## Explorer

Once installed you can access your Azure resources through the Azure Explorer. If you have not signed into Azure yet, or if you don't have an Azure subscription, you can click on the approriate links.

![Azure Explorer in VS Code](explorer.png)


## Contributing 

Got a suggestion for the Node Azure Extension Pack? Submit a new issue and a PR with an updated package.json and README.md and we'll take a look! 

Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

[MIT](LICENSE)
