import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs'
import * as s3 from 'aws-cdk-lib/aws-s3';

require('dotenv').config();
const { AWS_ACCOUNT_ID, AWS_REGION, ENV } = process.env as { [key: string]: string }

if (!AWS_ACCOUNT_ID || !AWS_REGION || !ENV) {
  console.log('AWS_ACCOUNT_ID: ', AWS_ACCOUNT_ID)
  console.log('AWS_REGION: ', AWS_REGION)
  console.log('ENV: ', ENV)
  throw new Error('AWS_ACCOUNT_ID, AWS_REGION, and KEYNAME, ENV need to be set, please see template.env.sh for details.')
}

export class MyCdkApp extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Insert your stack's resources here like so:
    const exampleBucket = new s3.Bucket(this, 'example-bucket', {
      bucketName: 'my-example-bucket',
    })

  }
}

const app = new cdk.App();
new MyCdkApp(app, `your-cdk-app-${ENV}`, {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_REGION
  },
});
