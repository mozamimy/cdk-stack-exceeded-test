# cdk-stack-exceeded-test

Minimal code reproducing maximum call stack error

```sh
cdk synth --context role_arn=arn:aws:iam::XXXXXXXXXXXX:role/XXXXXXXXXXXXXXXXXXXXXXXXXX
```

and we get following error

```
Maximum call stack size exceeded
Subprocess exited with error 1
```
