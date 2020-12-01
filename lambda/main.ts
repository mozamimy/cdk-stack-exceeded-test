import * as lambda from 'aws-lambda';

export function main(event: lambda.SQSEvent, _: lambda.Context, callback: lambda.Callback) {
  for (const record in event.Records) {
    console.log(record);
  }

  callback(null, 0);
}
