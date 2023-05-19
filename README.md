# AWS Lambda Node.js Template

This repository contains the code for easily deploying and maintaining a Lambda function!

This template is developed with Github Actions and Claudia, and is an active project being developed by ACM Board's Dev Team.

## How to deploy your own Lambda Instance

- Click "Use this template" and create a new public repository
- Make sure to make the owner UCLA ACM and click "create repository from template"
- Note, the name of your lambda function (`lambda.js`) is automatically set to the name of your Github Repo.
- To deploy your Lambda function for the first time, go to Actions, and click on `claudia-deploy`
- Then click `Run workflow`
- To update your Lambda function, just push to main and it will automatically update your lambda function
- You can change it in the `claudia.json`, which will be generated after deploying your lambda function
