import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

require('dotenv').config();
const { AWS_ACCOUNT_ID, AWS_REGION, KEYNAME, ENV } = process.env as { [key: string]: string }

if (!AWS_ACCOUNT_ID || !AWS_REGION || !KEYNAME || !ENV) {
  console.log('AWS_ACCOUNT_ID: ', AWS_ACCOUNT_ID)
  console.log('AWS_REGION: ', AWS_REGION)
  console.log('KEYNAME: ', KEYNAME)
  console.log('ENV: ', ENV)
  throw new Error('AWS_ACCOUNT_ID, AWS_REGION, and KEYNAME, ENV need to be set, please see template.env.sh for details.')
}

export class YourCdkApp extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Insert your stack's resources here like so:
    // const exampleBucket = new s3.Bucket(this, 'example-bucket', {
    //   bucketName: 'my-example-bucket',
    // })

  }
}

const app = new cdk.App();
new YourCdkApp(app, `your-cdk-app-${ENV}`, {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_REGION
  },
});
