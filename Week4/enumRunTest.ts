import { run } from "node:test"

enum Environment {
  DEV = " DEV Environment",
  STAGE = " STAGE Environment",
  PROD = " PROD Environment",
  LOCAL = " LOCAL Environment"
}

function runTests(env: Environment): void {

    console.log('Testing in ' + env);


}

runTests(Environment.PROD)
runTests(Environment.DEV)
runTests(Environment.STAGE)
runTests(Environment.LOCAL) 