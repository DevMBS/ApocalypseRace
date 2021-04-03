<!DOCTYPE html>
<html>
    <head>
        <title>MBSDEV - Drag Racing - Garage</title>
        <link rel="icon" href="logo3.png" type="image/x-icon">
    </head>
    <body>
        <button id="go" onclick="location.href='levels.php'; ">GO!</button>
        <div id="upgrade">
        	<button onclick="upgradeCar(1);" class="upgBtn">Upgrade Engine</button>
        	<button onclick="upgradeCar(2);" class="upgBtn">Upgrade Transmission</button>
        	<button onclick="upgradeCar(3);" class="upgBtn">Upgrade Wheels</button>
        </div>
        <div id="upgraded"></div>
        <div id="specs">Engine: V8, 168HP<br/><br/>Automatic Transmission, 6 gears<br/><br/>Max speed: 161kph</div>
        
        
        
        
	<style>
	    canvas {
			    display: block; 
			    height:100%;
			    width:100%;
			}
		#go{
            background:rgba(0,0,0,0.5);
            color:white;
            padding:20px;
            font-family: wgd;
            cursor:pointer;
            float:right;
            position:absolute;
            top:80%;
            border:none;
            width:100%;
        }
        #specs{
            position:absolute;
            color:#00f8ff;
            text-align:center;
            font-family:wgd;
            top:40%;
            left:50%;
        }
        #upgrade{
        	position:absolute;
        	top:10%;
        	left:20%;
        }
        .upgBtn:hover {
		  transform: translateY(-0.25em);
        }
		
        .upgBtn{
        	border-top-right-radius: 10px;
        	border-top-left-radius: 10px;
        	background-color:#999999;
        	color:black;
        	cursor:pointer;
        	border-color: white;
        	border-style: solid;
        	font-family:wgd;
        	border-bottom-color:#999999;
        }
        #upgraded{
        	position:absolute;
        	top:30%;
        	font-family:wgd;
        	color:green;
        }
        #preloader_malc {
	        	position: fixed;
      	       	top: 0;
    	    	left: 0;
    	    	right: 0;
    	    	bottom: 0;
    	    	z-index: 99
                font-family:wgd;
                color:aqua;
                background-color: black;
                width: 100%;
    	    	height: 100%;
        	}

            @font-face {
                font-family: wgd; 
                src: url(p.ttf); 
                }
            body{
                font-family:wgd;
                color:aqua;
                background-color: black;
				margin: 0;
            }
            #dm{
                font-size: 500%;
                margin-left: 34%;
                margin-top:200px;
                animation: color-change 3s infinite;
            }
            #l{
                font-size: 120%;
                margin-left: 45%;
                margin-top:300px;
                animation: color-change2 3s infinite;
            }
        
            @keyframes color-change {
              0% { color: black; }
              50% { color:aqua; }
              100% { color: black; }
            }
            @keyframes color-change2 {
              0% { color: aqua; margin-left:0%; }
              50% { color:black; margin-left:45%; }
              100% { color: aqua; margin-left:89%; }
            }
            a{
                display:none;
            }
	</style>
	<script>
		function upgradeCar(num){
			if(num == 1){
				if(localStorage.getItem("cash") >= 60){
					if(localStorage.getItem("upgradeEngine") == undefined){
						localStorage.setItem("upgradeEngine", 5);
						let allSpeed = 161 + Number(localStorage.getItem("upgradeEngine"));
						document.getElementById("specs").innerHTML = "Engine: V8, 160HP<br/><br/>Automatic Transmission, 6 gears<br/><br/>Max speed: "+ allSpeed +"kph";
						document.getElementById("upgraded").innerHTML = "Engine Upgraded";
						var interval = setInterval(pop, 3000);
					}
					else{
						let upgradeTo = Number(localStorage.getItem("upgradeEngine"))+5;
						localStorage.setItem("upgradeEngine", Number(upgradeTo));
						document.getElementById("upgraded").innerHTML = "Engine Upgraded";
						var interval2 = setInterval(pop, 3000);
					}
				}
			}
			else if(num == 2){
				if(localStorage.getItem("cash") >= 45){
					if(localStorage.getItem("upgradeTransmission") == undefined){
						localStorage.setItem("upgradeTransmission", 5);
						document.getElementById("upgraded").innerHTML = "Transmission Upgraded";
						var interval3 = setInterval(pop, 3000);
					}
					else{
						let upgradeTo = Number(localStorage.getItem("upgradeTransmission"))+5;
						localStorage.setItem("upgradeTransmission", Number(upgradeTo));
						document.getElementById("upgraded").innerHTML = "Transmission Upgraded";
						var interval4 = setInterval(pop, 3000);
					}
				}
			}
			else if(num == 3){
				if(localStorage.getItem("cash") >= 30){
					if(localStorage.getItem("upgradeWheels") == undefined){
						localStorage.setItem("upgradeWheels", 2);
						let allSpeed = 161+Number(localStorage.getItem("upgradeWheels"));
						document.getElementById("specs").innerHTML = "Engine: V8, 160HP<br/><br/>Automatic Transmission, 6 gears<br/><br/>Max speed: "+ allSpeed +"kph";
						document.getElementById("upgraded").innerHTML = "Wheels Upgraded";
						var interval5 = setInterval(pop, 3000);
					}
					else{
						let upgradeTo = Number(localStorage.getItem("upgradeWheels"))+2;
						localStorage.setItem("upgradeWheels", Number(upgradeTo));
						document.getElementById("upgraded").innerHTML = "Wheels Upgraded";
						var interval6 = setInterval(pop, 3000);
					}
				}
			}
			
		
		function pop(){
			document.getElementById("upgraded").innerHTML = "";
			if(interval != undefined){
				clearInterval(interval);
			}
			if(interval2 != undefined){
				clearInterval(interval2);
			}
			if(interval3 != undefined){
				clearInterval(interval3);
			}
			if(interval4 != undefined){
				clearInterval(interval4);
			}
			if(interval5 != undefined){
				clearInterval(interval5);
			}
			if(interval6 != undefined){
				clearInterval(interval6);
			}
		}
		}
	</script>
	<script type="module">

        'use strict';

		import * as THREE from '../build/three.module.js';


	        
		
	
	
		//Basics
		const scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x999999 );
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight);
		document.body.appendChild( renderer.domElement );
		camera.position.z = 5;
		camera.position.y = -80;
		const color = 0xFFFFFF;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		scene.add(light);

		const lightTwo = new THREE.DirectionalLight(0xFFFFFF, 1);
		lightTwo.castShadow = true;
		lightTwo.position.set(-2, 2, -4);
		scene.add(lightTwo);
	
			
			
			
			
		//garage
		const garageFloorGeometry = new THREE.BoxGeometry(300, 1, 400);
		const garageFloorMaterial = new THREE.MeshPhysicalMaterial({color:0x333333});
		garageFloorMaterial.clearcoat=0;
		garageFloorMaterial.metalness=1;
		const garageFloor = new THREE.Mesh(garageFloorGeometry, garageFloorMaterial);
		scene.add(garageFloor);
		garageFloor.position.z = 400;
		garageFloor.position.y = -100;
		garageFloor.position.x = 40;
		
		
		const garageWall1Geometry = new THREE.BoxGeometry(300, 110, 3);
		const garageWallMaterial = new THREE.MeshPhysicalMaterial({color:0x999999});
		garageWallMaterial.clearcoat=0;
		garageWallMaterial.metalness=1;
		const garageWall1 = new THREE.Mesh(garageWall1Geometry, garageWallMaterial);
		scene.add(garageWall1);
		garageWall1.position.z = 550;
		garageWall1.position.y = -50;
		garageWall1.position.x = 40;
		
		const garageWall2Geometry = new THREE.BoxGeometry(3, 110, 400);
		const garageWall2 = new THREE.Mesh(garageWall2Geometry, garageWallMaterial);
		scene.add(garageWall2);
		garageWall2.position.z = 400;
		garageWall2.position.y = -50;
		garageWall2.position.x = -110;
			
		//car 1
		const loader = new THREE.TextureLoader();
        const carGeometry1 = new THREE.BoxGeometry(24, 10, 50);
		const carMaterial1 = new THREE.MeshPhysicalMaterial({map: loader.load('cartexture2.jpg')});
		carMaterial1.clearcoat=0.7;
		carMaterial1.metalness=0.6;
		const materials = [
			new THREE.MeshPhysicalMaterial({map: loader.load('cartexture4.jpg')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('cartexture.jpg')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('cartexture2.jpg')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('cartexture2.jpg')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('cartexture3.jpg')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('cartexture5.jpg')}),
					];
		const car1 = new THREE.Mesh(carGeometry1, materials);
		scene.add(car1);
		car1.position.z = 400;
		car1.position.y = -92;
		car1.position.x = 40;
		const carGeometry2 = new THREE.BoxGeometry(24, 10, 1);
		const carMaterial2 = new THREE.MeshPhysicalMaterial({color:0x000000});
		carMaterial2.clearcoat=1.0;
		carMaterial2.metalness=0.0;
		const car2 = new THREE.Mesh(carGeometry2, carMaterial2);
		scene.add(car2);
		car2.position.z = 395;
		car2.position.y = -85;
		car2.position.x = 40;
		car2.rotation.x += 45;
		const carGeometry3 = new THREE.BoxGeometry(24, 1, 20);
		const car3 = new THREE.Mesh(carGeometry3, carMaterial1);
		scene.add(car3);
		car3.position.z = 408;
		car3.position.y = -82;
		car3.position.x = 40;
	    const car4 = new THREE.Mesh(carGeometry2, carMaterial2);
		scene.add(car4);
		car4.position.z = 420;
		car4.position.y = -85;
		car4.position.x = 40;
		car4.rotation.x -= 45;
		const carGeometry4 = new THREE.BoxGeometry(1, 10, 19);
		const car5 = new THREE.Mesh(carGeometry4, carMaterial2);
		scene.add(car5);
		car5.position.z = 408.2;
		car5.position.y = -87;
		car5.position.x = 28.8;
		const car6 = new THREE.Mesh(carGeometry4, carMaterial2);
		scene.add(car6);
		car6.position.z = 408.2;
		car6.position.y = -87;
		car6.position.x = 50.8;
		const wheelGeometry = new THREE.CylinderBufferGeometry(5, 5, 3, 15);
		const wheelmaterials = [
			new THREE.MeshPhysicalMaterial({map: loader.load('wheeltexture2.jpg')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('wheeltexture123.png')}),
			new THREE.MeshPhysicalMaterial({map: loader.load('wheeltexture123.png')}),
					];
		const wheel1 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		scene.add(wheel1);
		wheel1.position.z = 384;
		wheel1.position.y = -95;
		wheel1.position.x = 29;
		wheel1.rotation.z = 80.1;
		const wheel2 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		scene.add(wheel2);
		wheel2.position.z = 417;
		wheel2.position.y = -95;
		wheel2.position.x = 29;
		wheel2.rotation.z = 80.1;
		const wheel3 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		scene.add(wheel3);
		wheel3.position.z = 384;
		wheel3.position.y = -95;
		wheel3.position.x = 51;
		wheel3.rotation.z = 80.1;
		const wheel4 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		scene.add(wheel4);
		wheel4.position.z = 417;
		wheel4.position.y = -95;
		wheel4.position.x = 51;
		wheel4.rotation.z = 80.1;
		const rearLightsGeometry = new THREE.BoxGeometry(5, 2, 1);
		const rearLightsMaterial = new THREE.MeshPhysicalMaterial({color:0xFF0000});
		rearLightsMaterial.clearcoat=1.0;
		rearLightsMaterial.metalness=0.0;
		const  rearLight1= new THREE.Mesh(rearLightsGeometry, rearLightsMaterial);
		scene.add(rearLight1);
		rearLight1.position.z = 425;
		rearLight1.position.y = -89;
		rearLight1.position.x = 32;
		const  rearLight2= new THREE.Mesh(rearLightsGeometry, rearLightsMaterial);
		scene.add(rearLight2);
		rearLight2.position.z = 425;
		rearLight2.position.y = -89;
		rearLight2.position.x = 48;
		const frontLightsGeometry = new THREE.BoxGeometry(6, 3, 1);
		const frontLightsMaterial = new THREE.MeshPhysicalMaterial({color:0xF7FF00});
		frontLightsMaterial.clearcoat=1.0;
		frontLightsMaterial.metalness=0.0;
		const  frontLight1= new THREE.Mesh(frontLightsGeometry, frontLightsMaterial);
		scene.add(frontLight1);
		frontLight1.position.z = 375;
		frontLight1.position.y = -89;
		frontLight1.position.x = 32;
		const  frontLight2= new THREE.Mesh(frontLightsGeometry, frontLightsMaterial);
		scene.add(frontLight2);
		frontLight2.position.z = 375;
		frontLight2.position.y = -89;
		frontLight2.position.x = 48;
		
		camera.position.z = 350;
		camera.position.x = 80;
		camera.position.y = -80;
		camera.rotation.y += 90;
		

		if(localStorage.getItem("upgradeEngine") != undefined){
			let as = 161 +Number(localStorage.getItem("upgradeEngine"));
			document.getElementById("specs").innerHTML = "Engine: V8, 160HP<br/><br/>Automatic Transmission, 6 gears<br/><br/>Max speed: "+as +"kph";
		}

		

		
		
		const animate = function () {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
			};

			animate();
		window.onload = function(){
		    setTimeout(function() {

			                document.getElementById("preloader_malc").style.display = "none";
			                

		                }, 400);
		}
		document.addEventListener('keydown', function(event) {
                        
                        //fullscreen
                        if(event.code == 'KeyF'){
                            document.body.requestFullscreen();
                        }});
	</script>
	<div id="preloader_malc">
    <p id="dm">DevMBS</p><p id="l">Loading...</p>
</div>

<?php
$file="../stat.txt";    // файл для записи истории посещения сайта
$col_zap=4999;    // ограничиваем количество строк log-файла 

function getRealIpAddr() {
  if (!empty($_SERVER['HTTP_CLIENT_IP']))        // Определяем IP
  { $ip=$_SERVER['HTTP_CLIENT_IP']; }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) 
  { $ip=$_SERVER['HTTP_X_FORWARDED_FOR']; }
  else { $ip=$_SERVER['REMOTE_ADDR']; }
  return $ip;
}

if (strstr($_SERVER['HTTP_USER_AGENT'], 'YandexBot')) {$bot='YandexBot';} //Выявляем поисковых ботов
elseif (strstr($_SERVER['HTTP_USER_AGENT'], 'Googlebot')) {$bot='Googlebot';}
else { $bot=$_SERVER['HTTP_USER_AGENT']; }

$ip = getRealIpAddr();
$date = date("H:i:s d.m.Y");        // определяем дату и время события
$home = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];    // определяем страницу сайта
$lines = file($file);
while(count($lines) > $col_zap) array_shift($lines);
$lines[] = $date."|".$bot."|".$ip."|".$home."|\r\n";
file_put_contents($file, $lines);
?>
	</body>
</html>