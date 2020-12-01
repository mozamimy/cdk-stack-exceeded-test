#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkStackExceededTestStack } from '../lib/cdk-stack-exceeded-test-stack';

const app = new cdk.App();
new CdkStackExceededTestStack(app, 'CdkStackExceededTestStack');
