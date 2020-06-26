function functionTimer(logs){
    let logsArray=logs.map((e)=>e.split(':'));
    for(let i=0;i<logsArray.length;i++){
        logsArray[i][1]==='start'?logsArray[i][2]=parseInt(logsArray[i][2]):logsArray[i][2]=parseInt(logsArray[i][2])+1;
        logsArray[i][0]=parseInt(logsArray[i][0]);
    }
    console.log(logsArray);
    let functionStack=[];
    let timeStamp;
    let timeArray=new Array(logsArray.length).fill(0);
    functionStack.push(logsArray[0][0]);
    timeArray[0]=logsArray[0][2];
    timeStamp=logsArray[0][2];
    for(let i=1;i<logsArray.length;i++){
        if(logsArray[i][1]==='start'){
            timeStamp=logsArray[i][2];
            functionStack.push(logsArray[i][0]);
            timeArray[functionStack[i-1]]+=logsArray[i][2];
            timeStamp=logsArray[i][2];
        }
        if(logsArray[i][1]==='end'){
            let functionId=functionStack.pop();
            timeArray[functionId]+=logsArray[i][2]-timeStamp;
            timeStamp=logsArray[i][2];

        }
    }
    return timeArray.filter((e)=>e!==0);
}

console.log(functionTimer(["0:start:0","1:start:2","1:end:5","0:end:6"]));

