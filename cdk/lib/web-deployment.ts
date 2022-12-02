import {CfnOutput, Stack, StackProps,} from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";

import {Construct} from 'constructs';
import config from "./config";
import {SSMParameterReader} from "./ssm-parameter-reader";
import * as path from "path";


export class WebDeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domains = config.domains

    // Creates a distribution from an S3 bucket.
    const bucket = new s3.Bucket(this, 'DeploymentBucket');
    const certificateArn = new SSMParameterReader(this, "SSMParameterReaderUsEast1", {
      parameterName: config.certificateParamName,
      region: "us-east-1",
    }).getParameterValue()
    const cert = acm.Certificate.fromCertificateArn(
        this, "Certificate",
        certificateArn
    )

    new CfnOutput(this, "CertificateArn", {
      value: cert.certificateArn,
    })


    const distribution = new cloudfront.Distribution(this, 'WebDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
      domainNames: domains,
      certificate: cert,
    });

    new s3Deployment.BucketDeployment(this, "S3Deployment", {
      destinationBucket: bucket,
      sources: [s3Deployment.Source.asset(path.join(__dirname, '..', '..', 'out'))],
      distribution,
      // distributionPaths: ["/*"],
    })

    for (const domain of domains) {
      const hostedZone = route53.HostedZone.fromLookup(
          this, `HostedZone${domain}`, {
            domainName: domain.split(".").slice(-2).join(".")
          }
      )

      new route53.ARecord(this, `CloudfrontAliasRecord${domain}`, {
        recordName: domain,
        zone: hostedZone,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
        comment: "Points to portfolio website (Cloudfront distribution)",
      })
    }
  }
}
