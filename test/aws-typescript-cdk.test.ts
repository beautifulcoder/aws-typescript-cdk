import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsTypescriptCdkStack } from '../lib/aws-typescript-cdk-stack';

test('S3 bucket created', () => {
  const app = new App();

  const stack = new AwsTypescriptCdkStack(app, 'test-stack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
  });
});

test('Lambda function created', () => {
  const app = new App();

  const stack = new AwsTypescriptCdkStack(app, 'test-stack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Architectures: ['ar64'],
    MemorySize: 1024
  });
});

test('REST API created', () => {
  const app = new App();

  const stack = new AwsTypescriptCdkStack(app, 'test-stack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::ApiGateway::RestApi', {
  });
  template.hasResourceProperties('AWS::ApiGateway::Method', {
    HttpMethod: 'POST'
  });
});
