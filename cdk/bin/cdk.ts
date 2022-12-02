#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WebDeploymentStack } from '../lib/web-deployment';
import * as process from "process";

import {config as configDotEnv} from 'dotenv';

configDotEnv()

const envEU: cdk.Environment = {account: process.env.ACCOUNT, region: process.env.REGION}

const app = new cdk.App();
new WebDeploymentStack(app, 'WebPortfolio', {env: envEU});
