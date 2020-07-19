const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.52.0';
const PROJECT_NAME = 'cdk-spot-one';
const PROJECT_DESCRIPTION = 'EC2 Spot Block with Single Instance and EIP';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/cdk-spot-one.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
  },
  peerDependencies: {
    'constructs': Semver.pinned('3.0.4'),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/custom-resources': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  dependencies: {
    'constructs': Semver.pinned('3.0.4'),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/custom-resources': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-spot-one',
    module: 'cdk_sopt_one'
  }
});

project.addFields({
  'keywords': [
    'cdk',
    'spot',
    'aws',
  ]
});

project.gitignore.exclude(
  'cdk.context.json',
  'cdk.out',
);


project.npmignore.exclude(
  'cdk.context.json',
  'cdk.out',
  'coverage',
  'yarn-error.log',
);

// override the version to 1.4.0 tentatively 
project.addDevDependencies({
  'jsii-docgen': Semver.pinned('1.4.0'),
})

project.addFields({
  awscdkio: {
    twitter: '@pahudnet',
  }
})

project.synth();