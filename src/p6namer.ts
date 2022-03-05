import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdajs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cr from 'aws-cdk-lib/custom-resources';
import * as floyd from 'cdk-iam-floyd';
import { Construct } from 'constructs';

export interface IP6NamerProps {
  accountAlias: string;
}

export class P6Namer extends cdk.Resource {
  constructor(scope: Construct, id: string, props: IP6NamerProps) {
    super(scope, id);

    const policy = new floyd.Iam()
      .allow()
      .toCreateAccountAlias();

    const onEvent = new lambdajs.NodejsFunction(this, 'p6namer', {
      runtime: lambda.Runtime.NODEJS_12_X,
      timeout: cdk.Duration.seconds(2),
      tracing: lambda.Tracing.ACTIVE,
      bundling: {
        minify: true,
        externalModules: [
          'aws-sdk',
        ],
      },
    });

    onEvent.addToRolePolicy(policy);

    const provider = new cr.Provider(this, 'P6Namer/Provider', {
      onEventHandler: onEvent,
    });

    new cdk.CustomResource(this, 'P6Namer/CR', {
      serviceToken: provider.serviceToken,
      properties: {
        AccountAlias: props.accountAlias,
      },
    });
  }
}
