import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  name: 'p6-namer',
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  authorOrganization: true,
  repositoryUrl: 'https://github.com/p6m7g8/p6-namer.git',
  description: 'Sets the AWS IAM Account Alias with a Custom Resource',
  stability: 'stable',
  keywords: [
    'aws',
    'cdk',
    'iam',
    'account',
    'alias',
    'landing zone',
  ],

  cdkVersion: '2.15.0',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  gitpod: true,
  devContainer: true,
  codeCov: true,
  prettier: true,
  releaseFailureIssue: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['p6m7g8-automation'],
  },

  peerDeps: [
    'aws-cdk-lib',
    'constructs',
  ],

  devDeps: [
    'cdk-iam-floyd',
    'esbuild',
    'typedoc',
  ],

  deps: [
    '@types/aws-lambda',
    'aws-sdk',
    'cdk-iam-floyd',
  ],

  bundledDeps: [
    '@types/aws-lambda',
    'aws-sdk',
    'cdk-iam-floyd',
  ],

  publishToPypi: {
    distName: 'p6-namer',
    module: 'p6_namer',
  },

  publishToMaven: {
    javaPackage: 'com.github.p6m7g8.p6namer',
    mavenGroupId: 'com.github.p6m7g8',
    mavenArtifactId: 'p6-namer',
  },

  publishToNuget: {
    dotNetNamespace: 'P6m7g8.P6Namer',
    packageId: 'P6m7g8.P6Namer',
  },

  publishToGo: {
    moduleName: 'github.com/p6m7g8/p6-namer',
  },
});

project.synth();
