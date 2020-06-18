function functionTimer(logs){
    let logsArray=logs.map((e)=>e.split(':'));
    console.log(logsArray);
    let functionStack=[];
    functionStack.push(parseInt(logsArray[0][0]));
    let timeStamp=0;
    let previousTag="start";
    let timeArray=new Array(logsArray.length).fill(0);
    for(let i=1;i<logsArray.length;i++){
        if(logsArray[i][1]==='start'){

           functionStack.push(logsArray[i][0]);
           timeArray[functionStack[i-1]]+=parseInt(logsArray[i][2])-timeStamp;
           timeStamp=parseInt(logsArray[i][2]);
           previousTag="start";
        }
        if(logsArray[i][1]==='end'){
            let task=functionStack.pop();
            if(previousTag==='start'){
                timeArray[task]+=parseInt(logsArray[i][2])-timeStamp+1;
            }
            if(previousTag==='end'){
                timeArray[task]+=parseInt(logsArray[i][2])-timeStamp;
            }
            timeStamp=logsArray[i][2];
            previousTag="end";
        }
    }
    return timeArray.filter((e)=>e!==0);
}

console.log(functionTimer(["0:start:0","1:start:2","1:end:5","0:end:6"]));

