const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'p6-namer',
  repositoryUrl: 'https://github.com/p6m7g8/p6-namer.git',
  description: 'Sets the AWS IAM Account Alias with a Custom Resource',
  keywords: [
    'aws',
    'cdk',
    'iam',
    'account',
    'alias',
    'landing zone',
  ],

  minNodeVersion: '14.15.0',
  gitpod: true,
  devenv: true,

  peerDeps: [
    'aws-cdk-lib',
    'constructs',
    'cdk-iam-floyd',
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
});

project.gitpod.addTasks({
  name: 'Setup',
  init: 'yarn install',
  command: 'npx projen build',
});

project.synth();