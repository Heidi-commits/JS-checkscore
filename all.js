const passScore = document.querySelector(".passScore");
const errorScore = document.querySelector(".errorScore");


const checkScore = new Promise(function(resolve, reject) {
    console.log("批改中");
    setTimeout(function(){
        const score = Math.round(Math.random()*100);
        if(score>=60){
            resolve(score);
        }else{
            reject(score)}
        } 
        ,2000);
    })


checkScore
.then(data=>passScore.textContent=data)
.catch(error=>errorScore.textContent=error)