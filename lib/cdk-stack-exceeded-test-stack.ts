import * as cdk from '@aws-cdk/core';

import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaNodejs from '@aws-cdk/aws-lambda-nodejs';

export class CdkStackExceededTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const roleArn = this.node.tryGetContext('role_arn');
    const executionRole = iam.Role.fromRoleArn(this, 'ExecutionRole', roleArn, { mutable: false });

    new lambdaNodejs.NodejsFunction(this, 'TestFunction', {
      entry: 'lambda/main.ts',
      handler: 'main',
      role: executionRole, // `cdk synth` will run successfully when this line is removed, or we'll get `Maximum call stack size exceeded` error
    });

    // For debug
    // Following native lambda.Function works well with `role` option
    // new lambda.Function(this, 'TestFunction', {
    //   runtime: lambda.Runtime.NODEJS_12_X,
    //   handler: 'main',
    //   code: lambda.Code.fromAsset('./lambda'),
    //   role: executionRole,
    // });
  }
}
