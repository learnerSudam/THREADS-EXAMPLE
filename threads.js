
//importing worker threads modules
const {
    isMainThread,
    workerData,
    Worker
} = require('worker_threads');

/*
How worker threads are different than cluster mode is it is a part of single process unlike clusters which
has multiple process running at the same time
As the worker threads are part of one process, they share the same memory. So while executing the 
sort() function, both of the threads shared the same array 
*/
if(isMainThread){
    console.log(`Main Thread ! Process ID: ${process.pid} `);
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 3, 4, 3]
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}