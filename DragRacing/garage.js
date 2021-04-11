
function upgradeCar(num){
    if(num == 1 && Number(localStorage.getItem("cash")) >= 4000){
        const oldBalance = Number(localStorage.getItem("cash"));
        if(localStorage.getItem("upSpeed") == null){
            localStorage.setItem("cash", oldBalance-4000);
            document.getElementById("balance").innerHTML = "Balance: "+localStorage.getItem("cash")+"$";
            localStorage.setItem("transmissionLevel", 1);
            localStorage.setItem("wheelLevel", 1);
            localStorage.setItem("upSpeed", 173);//0.01
            localStorage.setItem("upBoost", 0.011);
            localStorage.setItem("upBreak", 0.31);
            localStorage.setItem("engineLevel", 2);
            document.getElementById("upgrade").innerHTML = '<h6>Price List: Engine Upgrade: 4000$, Transmission Upgrade: 2000$, Wheels Upgrade: 1700$</h6><br/><button onclick="upgradeCar(1);" class="upgBtn"><img src="engine.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("engineLevel")+'</button>   <button onclick="upgradeCar(2);" class="upgBtn"><img src="transmission.svg" width="42.5%" height="42.5%"/>Level 1</button>   <button onclick="upgradeCar(3);" class="upgBtn"><img src="wheel.svg" width="28.5%" height="28.5%"/>Level 1</button>';
            document.getElementById("specs").innerHTML = "Engine: V8, 168HP<br/><br/>Automatic Transmission<br/><br/>Max speed: "+localStorage.getItem("upSpeed")+"kph";
            }
        else{
            if(Number(localStorage.getItem("engineLevel")) < 5){
            localStorage.setItem("cash", oldBalance-4000);
            document.getElementById("balance").innerHTML = "Balance: "+localStorage.getItem("cash")+"$";
            const oldUpSpeed = Number(localStorage.getItem("upSpeed"));
            const oldUpBoost = Number(localStorage.getItem("upBoost"));
            localStorage.setItem("upSpeed", oldUpSpeed+11);
            localStorage.setItem("upBoost", oldUpBoost+0.001);
            const oldEngineLevel = Number(localStorage.getItem("engineLevel"));
            localStorage.setItem("engineLevel", oldEngineLevel+1);
            document.getElementById("upgrade").innerHTML = '<h6>Price List: Engine Upgrade: 4000$, Transmission Upgrade: 2000$, Wheels Upgrade: 1700$</h6><br/><button onclick="upgradeCar(1);" class="upgBtn"><img src="engine.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("engineLevel")+'</button>   <button onclick="upgradeCar(2);" class="upgBtn"><img src="transmission.svg" width="42.5%" height="42.5%"/>Level '+localStorage.getItem("transmissionLevel")+'</button>   <button onclick="upgradeCar(3);" class="upgBtn"><img src="wheel.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("wheelLevel")+'</button>';
            document.getElementById("specs").innerHTML = "Engine: V8, 168HP<br/><br/>Automatic Transmission<br/><br/>Max speed: "+localStorage.getItem("upSpeed")+"kph";
            }
        }
    }
    else if(num == 2 && Number(localStorage.getItem("cash")) >= 2000){
        const oldBalance = Number(localStorage.getItem("cash"));
        if(localStorage.getItem("upSpeed") == null){
            localStorage.setItem("cash", oldBalance-2000);
            document.getElementById("balance").innerHTML = "Balance: "+localStorage.getItem("cash")+"$";
            localStorage.setItem("wheelLevel", 1);
            localStorage.setItem("engineLevel", 1);
            localStorage.setItem("upSpeed", 167);//0.01
            localStorage.setItem("upBoost", 0.013);
            localStorage.setItem("upBreak", 0.35);
            document.getElementById("specs").innerHTML = "Engine: V8, 168HP<br/><br/>Automatic Transmission<br/><br/>Max speed: "+localStorage.getItem("upSpeed")+"kph";
            localStorage.setItem("transmissionLevel", 2);
            document.getElementById("upgrade").innerHTML = '<h6>Price List: Engine Upgrade: 4000$, Transmission Upgrade: 2000$, Wheels Upgrade: 1700$</h6><br/><button onclick="upgradeCar(1);" class="upgBtn"><img src="engine.svg" width="28.5%" height="28.5%"/>Level 1</button>   <button onclick="upgradeCar(2);" class="upgBtn"><img src="transmission.svg" width="42.5%" height="42.5%"/>Level '+localStorage.getItem("transmissionLevel")+'</button>   <button onclick="upgradeCar(3);" class="upgBtn"><img src="wheel.svg" width="28.5%" height="28.5%"/>Level 1</button>';
            }
        else{
            if(Number(localStorage.getItem("transmissionLevel")) < 5){
            localStorage.setItem("cash", oldBalance-2000);
            document.getElementById("balance").innerHTML = "Balance: "+localStorage.getItem("cash")+"$";
            const oldUpSpeed = Number(localStorage.getItem("upSpeed"));
            const oldUpBoost = Number(localStorage.getItem("upBoost"));
            const oldUpBreak = Number(localStorage.getItem("upBreak"));
            localStorage.setItem("upSpeed", oldUpSpeed+6);
            localStorage.setItem("upBoost", oldUpBoost+0.003);
            localStorage.setItem("upBreak", oldUpBreak+0.05);
            document.getElementById("specs").innerHTML = "Engine: V8, 168HP<br/><br/>Automatic Transmission<br/><br/>Max speed: "+localStorage.getItem("upSpeed")+"kph";
            const oldTransmissionLevel = Number(localStorage.getItem("transmissionLevel"));
            localStorage.setItem("transmissionLevel", oldTransmissionLevel+1);
            document.getElementById("upgrade").innerHTML = '<h6>Price List: Engine Upgrade: 4000$, Transmission Upgrade: 2000$, Wheels Upgrade: 1700$</h6><br/><button onclick="upgradeCar(1);" class="upgBtn"><img src="engine.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("engineLevel")+'</button>   <button onclick="upgradeCar(2);" class="upgBtn"><img src="transmission.svg" width="42.5%" height="42.5%"/>Level '+localStorage.getItem("transmissionLevel")+'</button>   <button onclick="upgradeCar(3);" class="upgBtn"><img src="wheel.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("wheelLevel")+'</button>';
            }
    }
    }
    else if(num == 3 && Number(localStorage.getItem("cash")) >= 1700){
        const oldBalance = Number(localStorage.getItem("cash"));
        if(localStorage.getItem("upSpeed") == null){
            localStorage.setItem("cash", oldBalance-1700);
            document.getElementById("balance").innerHTML = "Balance: "+localStorage.getItem("cash")+"$";
            localStorage.setItem("transmissionLevel", 1);
            localStorage.setItem("engineLevel", 1);
            localStorage.setItem("upSpeed", 169);
            localStorage.setItem("upBoost", 0.012);
            localStorage.setItem("upBreak", 0.4);
            document.getElementById("specs").innerHTML = "Engine: V8, 168HP<br/><br/>Automatic Transmission<br/><br/>Max speed: "+localStorage.getItem("upSpeed")+"kph";
            localStorage.setItem("wheelLevel", 2);
            document.getElementById("upgrade").innerHTML = '<h6>Price List: Engine Upgrade: 4000$, Transmission Upgrade: 2000$, Wheels Upgrade: 1700$</h6><br/><button onclick="upgradeCar(1);" class="upgBtn"><img src="engine.svg" width="28.5%" height="28.5%"/>Level 1</button>   <button onclick="upgradeCar(2);" class="upgBtn"><img src="transmission.svg" width="42.5%" height="42.5%"/>Level 1</button>   <button onclick="upgradeCar(3);" class="upgBtn"><img src="wheel.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("wheelLevel")+'</button>';
            
        }
        else{
            if(Number(localStorage.getItem("wheelLevel")) < 5){
            localStorage.setItem("cash", oldBalance-1700);
            document.getElementById("balance").innerHTML = "Balance: "+localStorage.getItem("cash")+"$";
            const oldUpSpeed = Number(localStorage.getItem("upSpeed"));
            const oldUpBoost = Number(localStorage.getItem("upBoost"));
            const oldUpBreak = Number(localStorage.getItem("upBreak"));
            localStorage.setItem("upSpeed", oldUpSpeed+8);
            localStorage.setItem("upBoost", oldUpBoost+0.002);
            localStorage.setItem("upBreak", oldUpBreak+0.1);
            document.getElementById("specs").innerHTML = "Engine: V8, 168HP<br/><br/>Automatic Transmission<br/><br/>Max speed: "+localStorage.getItem("upSpeed")+"kph";
            const oldWheelLevel = Number(localStorage.getItem("wheelLevel"));
            localStorage.setItem("wheelLevel", oldWheelLevel+1);
            document.getElementById("upgrade").innerHTML = '<h6>Price List: Engine Upgrade: 4000$, Transmission Upgrade: 2000$, Wheels Upgrade: 1700$</h6><br/><button onclick="upgradeCar(1);" class="upgBtn"><img src="engine.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("engineLevel")+'</button>   <button onclick="upgradeCar(2);" class="upgBtn"><img src="transmission.svg" width="42.5%" height="42.5%"/>Level '+localStorage.getItem("transmissionLevel")+'</button>   <button onclick="upgradeCar(3);" class="upgBtn"><img src="wheel.svg" width="28.5%" height="28.5%"/>Level '+localStorage.getItem("wheelLevel")+'</button>';
            }
    }
    }

}