var boxes = document.querySelectorAll(".box");
var btn = document.getElementById("btn");
var totalCoin = document.getElementById("totalCoin");
var acc = document.getElementById("accessable");
var coinSelect = document.getElementById("coinSelect");
var blockSelect = document.getElementById("blockSelect");

var arr= [];
var blocks= [];

var accessable = 0;
var action = 1;


function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
coins = createArray(10,10);

for(i = 0; i<10; i++){
    for(j = 0; j<10; j++){
        coins[i][j] = 1-1;
    }
}

boxes.forEach(function(box){
    box.addEventListener('click', function(){
        if(action == 1){
            box.style.backgroundImage = "url('./coin.png')";
            id = box.id;
            arr.push(id);
            console.log(arr);
        }else{
            box.style.backgroundImage = "url('./Blocked-PNG-File.png')";
            id = box.id;
            blocks.push(id);
            console.log(blocks);
        }
    })
});

i = 0;
j = 0;

coins[0][0] = 0;

for(var f = 0; f<10; f++){
    
        var visI = f + "a";
        var vis = document.getElementById(visI);
        vis.innerHTML = coins[f];
    
}

plc = i + "" + j + "b";
let id = document.getElementById(plc);
id.innerHTML = "&#129302";
total = 0;
var flag = 0;
async function robotRun(delay = 15){
    for(i = 0; i<10; i++){
        var visI = i + "a";
        var vis = document.getElementById(visI);

        for(j = 0; j<10; j++){
            id.innerHTML = "";
            plc = i + "" + j + "b";
            id = document.getElementById(plc);
            id.innerHTML = "&#129302";
            flagBlock = 0;

            if(blocks.indexOf(plc) >= 0){
                coins[i][j] = 0;
                flagBlock = 1;
            }

            if(flagBlock != 1){
                if(i > 0 ){
                    if(j > 0){
                        if(coins[i-1][j] > coins[i][j] && coins[i-1][j] >= coins[i][j-1]){
                            coins[i][j] = coins[i-1][j];
                            flag = 1
                        }
                    }else{
                        if(coins[i-1][j] > coins[i][j]){
                            coins[i][j] = coins[i-1][j];
                            flag = 1
                        }
                    }
                    vis.innerHTML =coins[i];
                }

                
                

                if(arr.indexOf(plc) >= 0){
                    total++;
                    totalCoin.innerHTML = total;
                    if(flag == 0){
                        if(j > 0){
                            coins[i][j] = coins[i][j-1] + 1;
                        }
                        else{
                            coins[i][j] = 1;
                        }
                    }
                    else{
                        coins[i][j] = coins[i][j] + 1;
                        
                    }
                                    
                }else if(arr.indexOf(plc) < 0 && j != 0 && flag == 0){
                    coins[i][j] = coins[i][j-1];
                }else if(arr.indexOf(plc) < 0 && j == 0 && flag == 0){
                    coins[i][j] = 0;
                }
                plc1 = i-1 + "" + j + "b";
                plc2 = i + "" + j + "b";
                
            }
            
            vis.innerHTML = coins[i];

            id.style.backgroundColor = "rgb(153, 194, 255)";
            
           
            flag = 0;
            flagBlock = 0;

        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
        }
    }
    btn2.style.display = "inline";
};


function colorChange(color){
    plc = i + "" + j + "b";
    id = document.getElementById(plc);
    id.innerHTML = "&#129302";
    id.style.backgroundColor = color;
    id.style.opacity = "0.6";
    if(arr.indexOf(plc) >= 0){
        accessable++;
        acc.innerHTML = accessable;
    }
}

async function robotBack(delay = 100){
    i = 9;
    j = 9;
    plc = i + "" + j + "b";
    id = document.getElementById(plc);
    id.style.backgroundColor = "green";

    while(j > 0 && i > 0 && (blocks.indexOf(plc) < 0 )){
        if(coins[i][j-1] > coins[i-1][j] && (blocks.indexOf(i + "" + j + "b") < 0 )){
            console.log("up");
            id.innerHTML = "";
            colorChange("green");

            j = j-1;

        }
        else if(coins[i-1][j] > coins[i][j-1]  && (blocks.indexOf(i + "" + j + "b") < 0 )){
            console.log("down");
            id.innerHTML = "";
            colorChange("green");

            i = i-1;

        }else if(coins[i-1][j] == coins[i][j-1] && (blocks.indexOf(i + "" + j + "b") < 0 )){
            var maxJ = 0;
            var maxI = 0;
            for(var a = j-1; a >= 0; a--){
                if(coins[i][j-1]> maxJ)
                    maxJ = coins[i][j-1];
            }
            for(var b = i-1; b >= 0; b--){
                if(coins[i-1][j] > maxI)
                    maxI = coins[i-1][j];
            }
            if(maxJ > maxI){
                id.innerHTML = "";
                colorChange("green");
    
                j = j-1;
            }
            if(maxI >= maxJ){
                id.innerHTML = "";
                colorChange("green");
    
                i = i-1;
            }
        }
        if(blocks.indexOf(i + "" + j + "b") >= 0 ){
            id = document.getElementById(i + "" + j + "b");
            id.style.backgroundColor = "red";
            id.style.opacity = "0.6";
            console.log("blocked");
        }
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));

    }

    while(j > 0 && (blocks.indexOf(i + "" + j + "b") < 0 )){
            plc = i + "" + j + "b";
            id.innerHTML = "";

            colorChange("green");

            j = j-1;
            console.log(i,j);
            plc = i + "" + j + "b";


            await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
        
    }

    while(i > 0 && (blocks.indexOf(i + "" + j + "b") < 0 )){
            plc = i + "" + j + "b";
            id.innerHTML = "";

            colorChange("green");
            i = i-1;
            plc = i + "" + j + "b";


            await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
        
    }
    
    plc1 = i-1 + "" + j + "b";
    plc2 = i + "" + j-1 + "b";
    plc = i + "" + j + "b";


    console.log(plc1);

    if(blocks.indexOf(plc) >= 0){
        id = document.getElementById(plc);
        id.style.backgroundColor = "red";
        id.style.opacity = "0.6";
        console.log("blocked");}
    else if(blocks.indexOf(plc1) >= 0){
        id = document.getElementById(plc1);
        id.style.backgroundColor = "red";
        id.style.opacity = "0.6";
        console.log("blocked");
    }else if(blocks.indexOf(plc2) >= 0){
        id = document.getElementById(plc2);
        id.style.backgroundColor = "red";
        id.style.opacity = "0.6";
        console.log("blocked");
    }
    else{
        id.innerHTML = "";
        colorChange("green");
    }
};

btn.addEventListener('click', function(){
    btn.style.display = "none";
    robotRun();
    console.log(blocks);
})

btn2.addEventListener('click', function(){
    btn2.style.display = "none";
    robotBack();
})

coinSelect.addEventListener('click', function(){
    action = 1;
    coinSelect.style.backgroundColor = "green";
    blockSelect.style.backgroundColor = "red";

})

blockSelect.addEventListener('click', function(){
    action = 0;
    
    coinSelect.style.backgroundColor = "red";
    blockSelect.style.backgroundColor = "green";
})
