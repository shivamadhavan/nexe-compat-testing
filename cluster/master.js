console.log("Cluster process.argv %s", JSON.stringify(process.argv));

var cluster = require("cluster");



function echoSelf(id) {
    console.log(id);
}

if (cluster.isMaster) {
    cluster.fork();
    setInterval(echoSelf, 1000, 'master');
} else {
    setInterval(echoSelf, 1000, 'worker');
}
