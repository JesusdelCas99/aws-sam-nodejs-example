# Local Debugging of Node.js AWS Lambda Functions via SAM CLI and VS Code


This project demonstrates a sample setup for debugging AWS Lambda functions with a Node.js runtime on a Windows host machine using the AWS Serverless Application Model (AWS SAM), Docker, and Visual Studio Code. The example features a simple Lambda function that returns a message with the current timestamp upon each execution.


### Requirements

Ensure the following tools and software are installed before proceeding:

- [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install)
   - [Docker](https://docs.docker.com/engine/install/ubuntu/)
   - [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
   - [Node.js](https://nodejs.org/) (v18.x or later)
   - [npm](https://www.npmjs.com/)
- [VS Code](https://code.visualstudio.com/download)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JesusdelCas99/aws-sam-nodejs-example.git
      
2. Install project dependencies:

   ```bash
   cd aws-sam-nodejs-example/HelloWorlFunction
   npm install  
### Project Files

The project consists of the following folders and files:

- `.vscode/launch.json`: Debugging configuration for VS Code.
  
- `HelloWorldFunction/`: Contains the Lambda function's source code and dependencies.

- `template.yaml`: SAM template for Lambda configuration (runtime, handler, resources).

- `events/`: JSON files for simulating Lambda event data.

 
### Running Locally


For local testing of the Lambda function, use the AWS SAM CLI `sam local invoke` command with a sample event: 
   
```bash
sam local invoke HelloWorldFunction --event events/event.json
```
This command launches a Docker container that emulates the Lambda function's execution environment, providing a realistic simulation of how the function would behave in AWS, including dependencies and resource constraints.

#### Linking the Debug UI

To enable local debugging, the Visual Studio Code debugger can be configured to attach to the Docker container’s runtime using the `--debug-port` flag. This forwards a port on the host machine to the container, allowing Visual Studio Code (VS Code) to control the Lambda function process for efficient step-through debugging.

To initiate a debugging session:

1. Launch the Lambda function locally with the `sam local invoke` command and the debug port option enabled:

    ```bash
   sam local invoke HelloWorldFunction --event events/event.json --debug-port 9999
    
2. Open the debug panel in VS Code, choose `Attach to SAM CLI`, and press `F5` to start debugging.
   
### Deploying to AWS

To deploy the application: 

1. Build the application:

    ```bash
    sam build
    
2. Deploy to AWS using guided prompts:
   
    ```bash
    sam deploy --guided

### License

This project is licensed under the MIT License.
