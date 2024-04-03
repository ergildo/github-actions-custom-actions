const core = require('@actions/core');
const exec = require('@actions/exec');
function run(){
    const backet = core.getInput('bucket', {required: true})
    const region = core.getInput('region', {required: true})
    const dist = core.getInput('dist-folder', {required: true})

    exec.exec(`aws s3 sync ${dist}  s3:\\${backet} --region=${region}`);

    siteUrl = `http://${backet}.s3-website-${region}.amazonaws.com/`

   core.setOutput('website-url', siteUrl);

};

run();

