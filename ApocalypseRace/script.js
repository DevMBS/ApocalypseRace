'use strict';
import * as THREE from '../build/three.module.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/GLTFLoader.js';


const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const loader = new THREE.TextureLoader();
const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(-46, 2.5, 0);
camera.rotation.y = -Math.PI/2;

const scene = new THREE.Scene();

loader.load("assets/atm.jpg", function(atmosphere) {
  scene.background = atmosphere;
});

const skyColor = 0xffbaa4;
const intensity = 0.7;
const light = new THREE.AmbientLight(skyColor, intensity);
scene.add(light);

const light2 = new THREE.DirectionalLight( skyColor, 0.8, 100 );
light2.position.set( -1000, 100, 100 );
light2.castShadow = true;
scene.add( light2 );
light2.shadow.mapSize.width = 512;
light2.shadow.mapSize.height = 512;
light2.shadow.camera.near = 0.5;
light2.shadow.camera.far = 500;

scene.fog = new THREE.FogExp2(skyColor, 0.02);

const gltfLoader = new GLTFLoader();

var world;
var world2;
var world3;
var worldLoaded = false;
var spacecraftLoaded = false;
gltfLoader.load('assets/city.glb', (gltf) => {
  world = gltf.scene;
  world.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; node.receiveShadow = true;} } );
  scene.add(world);
  world2 = world.clone();
  scene.add(world2);
  world2.position.set(85, 0, 0);
  worldLoaded = true;
  world.castShadow = true;
  world.receiveShadow = true;
  world2.castShadow = true;
  world2.receiveShadow = true;
});

var spacecraft;
const hitboxGeometry = new THREE.BoxGeometry(1.68, 0.1, 0.8);
const hitboxMaterial = new THREE.MeshPhongMaterial({color: 'black', opacity: 0.0, transparent: true});
var hitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial);
scene.add(hitbox);
hitbox.position.set(-43.4, 1.2, 0.05);
gltfLoader.load('assets/spacecraft.glb', (gltf) => {
  spacecraft = gltf.scene;
  spacecraft.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; node.receiveShadow = true;} } );
  scene.add(spacecraft);
  spacecraftLoaded = true;
  spacecraft.position.set(-43, 0.2, 0);
  spacecraft.scale.set(0.1, 0.1, 0.1);
  spacecraft.rotation.y = Math.PI/2;
  spacecraft.castShadow = true;
  spacecraft.receiveShadow = true;
});

start.onclick = function(){
if(localStorage.getItem("cutSceneComplete") != 'true'){

world3 = world.clone();
scene.add(world3);
world3.position.set(-85, 0, 0);
world3.castShadow = true;
world3.receiveShadow = true;



//cutscene
camera.rotation.z = -Math.PI/2;
camera.position.set(-28, 0, -10);
let moveHead1Interval = setInterval(moveHead1, 10);
let moveHead2Interval;
let moveHead3Interval;
let moveHead4Interval;
let moveHead5Interval;
let blackoutInterval;
let firstStepComplete = false;
let moveCamera1Interval;
let flashInterval;

let spaceNoise = new Audio('assets/sounds.mp3');
spaceNoise.play();
setTimeout(playNoise, 100);
function playNoise(){
  spaceNoise.play();
  setTimeout(playNoise, 100);
}
let voiceActing1 = new Audio('assets/cutscene_start.wav');
let voiceActing2 = new Audio('assets/cutscene_main.wav');
function moveHead1(){
  voiceActing1.play();
  if(camera.rotation.z < 0){
    camera.rotation.z += Math.PI/120;
  }
  else{
    clearInterval(moveHead1Interval);
    moveHead2Interval = setInterval(moveHead2, 10);
  }
}
function moveHead2(){
  if(camera.rotation.y < Math.PI/4){
    camera.rotation.y += Math.PI/100;
    if(camera.position.y < 0.5){
      camera.position.y += 0.015;
    }
  }
  else{
    clearInterval(moveHead2Interval);
    moveHead3Interval = setInterval(moveHead3, 10);
  }
}
function moveHead3(){
  if(camera.rotation.y > -Math.PI){
    camera.rotation.y -= Math.PI/100;
  }
  else{
    clearInterval(moveHead3Interval);
    moveHead4Interval = setInterval(moveHead4, 10);
  }
}
function moveHead4(){
  if(camera.rotation.y < -Math.PI/2){
    camera.rotation.y += Math.PI/100;
  }
  else{
    clearInterval(moveHead4Interval);
    moveHead5Interval = setInterval(moveHead5, 10);
  }
}
let opacity = 1.0;
let stop = false;
function moveHead5(){
  if(opacity > 0.0 && !stop){
    opacity -= 0.03;
    document.getElementById("cc").style.opacity = String(opacity);
  }
  else{
    stop = true;
    if(opacity < 1.0){
      opacity+= 0.03;
      document.getElementById("cc").style.opacity = String(opacity);
    }
    else{
      clearInterval(moveHead5Interval);
      setTimeout(showAssistant, 5000);
      function showAssistant(){
        document.getElementById("assistant").style.display = "block";
        let txtCntnr = document.getElementById("text");
        let requestToAssistantInterval = setInterval(requestToAssistant, 400);
        let rta = 0;
        function requestToAssistant(){
          switch(rta){
            case 0:
              txtCntnr.innerHTML = "Tell ";
              rta++;
              break;
            case 1:
              txtCntnr.innerHTML += "me ";
              rta++;
              break;
            case 2:
              txtCntnr.innerHTML += "a ";
              rta++;
              break;
            case 3:
              txtCntnr.innerHTML += "memory";
              rta++;
              break;
            case 4:
              txtCntnr.innerHTML = "Processing request...";
              rta++;
              break;
            case 5:
              txtCntnr.innerHTML = "Searching for saved memories...";
              rta++;
              break;
            case 6:
              clearInterval(requestToAssistantInterval);
              txtCntnr.innerHTML = "Launching the programm...";
              blackoutInterval = setInterval(blackout, 10);
              document.body.style.backgroundColor = "white";
              break;
          }
        }
        let o = 1.0;
        let so = false;
        function blackout(){
          if(!firstStepComplete){
            if(o > 0 && !so){
              document.getElementById("cc").style.opacity = String(o);
              o-=0.005;
            }
            else{
              so = true;
              camera.position.set(-46, 2.5, 0);
              if(o < 1){
                document.getElementById("cc").style.opacity = String(o);
                o+=0.005;
                document.getElementById("text").style.display = "none";
                document.getElementById("assistant").style.display = "none";
              }
              else{
                clearInterval(blackoutInterval);
                firstStepComplete = true;
                moveCamera1Interval = setInterval(moveCamera1, 10);
                voiceActing2.play();
                setTimeout(cutsceneFinal, voiceActing2.duration*1000);
              }
            }
          }
        }
      }
    }
  }
}



let moveCamera2Interval;
let moveCamera3Interval;
let moveCamera4Interval;
let moveCamera5Interval;
let moveCamera6Interval;
let moveCamera7Interval;
let moveCamera8Interval;
let moveCamera9Interval;
function moveCamera1(){
  if(camera.position.x < -42){
    camera.rotation.y += 0.004;
    camera.position.z += 0.015;
    camera.position.x +=0.012;
    
  }
  else{
    clearInterval(moveCamera1Interval);
    moveCamera2Interval = setInterval(moveCamera2, 10);
  }


}
function moveCamera2(){
  if(camera.position.x < -39){
    camera.rotation.y += 0.004;
    camera.position.z -= 0.015;
    camera.position.x +=0.012;
  }
  else{
    clearInterval(moveCamera2Interval);
    moveCamera3Interval = setInterval(moveCamera3, 10);
  }


}
function moveCamera3(){
  if(camera.rotation.y < Math.PI+Math.PI/3){
    camera.rotation.y += 0.0032;
    camera.position.z -= 0.011;
    camera.position.x +=0.012;
  }
  else{
    clearInterval(moveCamera3Interval);
    moveCamera4Interval = setInterval(moveCamera4, 10);
  }


}
function moveCamera4(){
  if(camera.position.y >= 0.1){
    camera.position.x +=0.02;
    camera.position.y -= 0.0033;
  }
  else{
    clearInterval(moveCamera4Interval);
    moveCamera5Interval = setInterval(moveCamera5, 10);
  }


}
function moveCamera5(){
  if(camera.position.y <= 7 && camera.rotation.y < Math.PI*2+Math.PI/3){
    camera.position.x +=0.02;
    camera.position.y += 0.0066;
    camera.rotation.y += 0.004;
    camera.position.z += 0.0066;
  }
  else{
    clearInterval(moveCamera5Interval);
    moveCamera6Interval = setInterval(moveCamera6, 10);
  }


}
function moveCamera6(){
  if(camera.position.x < 120){
    camera.position.x +=0.03;
    if(camera.position.x < 62){
      camera.position.y -= 0.0028;
    }
    else{
      camera.position.y += 0.0028;
    }
  }
  else{
    clearInterval(moveCamera6Interval);
    moveCamera7Interval = setInterval(moveCamera7, 10);
  }


}
function moveCamera7(){
  if(camera.rotation.y < Math.PI*2+(Math.PI/3)*2){
    camera.position.z +=0.0305;
    camera.rotation.y += 0.006;
  }
  else{
    clearInterval(moveCamera7Interval);
    moveCamera8Interval = setInterval(moveCamera8, 10);
  }


}
function moveCamera8(){
  if(camera.rotation.y < Math.PI*3+Math.PI/2){
    camera.position.x -=0.4;
    camera.rotation.y += 0.012;
    
  }
  else{
    clearInterval(moveCamera8Interval);
    moveCamera9Interval = setInterval(moveCamera9, 10);
  }


}
function moveCamera9(){
  if(camera.position.x > -46){
    camera.position.x -=0.4;
    camera.position.y -=0.013;
  }
  else{
    clearInterval(moveCamera9Interval);
    localStorage.setItem('cutSceneComplete', 'true');
  }


}

function cutsceneFinal(){
  let voiceActing3 = new Audio('assets/cutscene_end.wav');
  voiceActing3.play();
  setTimeout(okok, 4500);
}

function okok(){
  let voiceActing4 = new Audio('assets/cutscene_ok.wav');
  voiceActing4.play();
  setTimeout(returnToReality, 3500);
}

function returnToReality(){
  document.getElementById("cc").style.opacity = "0.5";
  document.body.style.backgroundColor = "black";
  document.getElementById("text").style.display = "block";
  document.getElementById("text").style.width = "600px";
  document.getElementById("text").innerHTML = "Restoration of damaged areas of the brain...";
  setTimeout(flash, 26000);
}

function flash(){
  document.getElementById("cc").style.opacity = "1.0";
  document.getElementById("text").innerHTML = "";
  document.getElementById("cc").style.opacity = "1.0";
  document.getElementById("text").innerHTML = "";
  document.body.style.backgroundColor = "white";
  flashInterval = setInterval(prestartingGame, 10);
}

let wo = 1;
let sw = false;
function prestartingGame(){
  if(wo > 0 && !sw){
    wo -= 0.005;
    document.getElementById("cc").style.opacity = String(wo);
  }
  else{
    sw = true;
    if(wo < 1){
      wo+= 0.005;
      document.getElementById("cc").style.opacity = String(wo);
    }
    else{
      clearInterval(flashInterval);
    }
  }
}

}





//end cutscene









else{

document.getElementById("km_left").innerHTML = "500 km left";
document.addEventListener('keydown', function(event) {
  if(event.code == 'KeyA'){
    if(spacecraft.position.z > -8.5){
      spacecraft.position.z -= 0.5;
      hitbox.position.z -= 0.5;
      camera.position.z -= 0.5;
      if(spacecraft.rotation.x > -0.5){
        spacecraft.rotation.x -= 0.02;
        hitbox.rotation.x -= 0.02;
      }
    }
  }
  else if(event.code == 'KeyD'){
    if(spacecraft.position.z < 7){
      spacecraft.position.z += 0.5;
      hitbox.position.z += 0.5;
      camera.position.z += 0.5;
      if(spacecraft.rotation.x < 0.5){
        spacecraft.rotation.x += 0.02;
        hitbox.rotation.x += 0.02;
      }
    }
  }
  
});
document.addEventListener('keyup', function(event){
  if(event.code == 'KeyA'){
    let rotInterval = setInterval(backwRotA, 10);
    function backwRotA(){
      if(spacecraft.rotation.x < 0){
        spacecraft.rotation.x += 0.02;
        hitbox.rotation.x += 0.02;
      }
      else{
        clearInterval(rotInterval);
      }
    }
  }
  else if(event.code == 'KeyD'){
    let rotInterval = setInterval(backwRotD, 10);
    function backwRotD(){
      if(spacecraft.rotation.x > 0){
        spacecraft.rotation.x -= 0.02;
        hitbox.rotation.x -= 0.02;
      }
      else{
        clearInterval(rotInterval);
      }
    }
  }
});




const textureLoader = new THREE.TextureLoader();
const obstacleGeometry = new THREE.CylinderGeometry(0.5, 0.5, 8, 50);
const obstacleMaterial = new THREE.MeshPhysicalMaterial({
    map: textureLoader.load('assets/rust.jpg'),
  });
var obstacle1 = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
scene.add(obstacle1);
obstacle1.position.set(30, 100, 0);
var obstacle2 = obstacle1.clone();
var obstacle3 = obstacle1.clone();
var obstacle4 = obstacle1.clone();


scene.add(obstacle2);
scene.add(obstacle3);
scene.add(obstacle4);

obstacle2.position.set(0, 100, 0);
obstacle3.position.set(10, 100, 0);
obstacle4.position.set(20, 100, 0);

obstacle1.castShadow = true;
obstacle1.receiveShadow = true;
obstacle2.castShadow = true;
obstacle2.receiveShadow = true;
obstacle3.castShadow = true;
obstacle3.receiveShadow = true;
obstacle4.castShadow = true;
obstacle4.receiveShadow = true;


function animateObstacle(obstacle){
  let zCoord = Math.floor(Math.random()*16)-8;
  obstacle.position.set(obstacle.position.x, 50, zCoord);
  let moveObstacleDownInterval = setInterval(moveObstacleDown, 10);
  function moveObstacleDown(){
    if(obstacle.position.y > 4){
      obstacle.position.y -= 5;
    }
    else{
      clearInterval(moveObstacleDownInterval);
      let fallSide = Math.floor(Math.random()*7);
      let fallSidewaysInterval = setInterval(fallSideways, 40);
      
      function fallSideways(){
        if(obstacle.position.y < 1.7){
          obstacle.position.y+=0.5;
        }
        switch(fallSide){
          case 0:
            
            if(obstacle.rotation.z > -Math.PI/4){
              obstacle.rotation.z -= 0.05;
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 1:
            
            if(obstacle.rotation.z > -Math.PI/4 && obstacle.rotation.x > -Math.PI/4){
              obstacle.rotation.z -= 0.05;
              obstacle.rotation.x -= 0.05;
              
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 2:
            
            if(obstacle.rotation.x > -Math.PI/4){
              obstacle.rotation.x -= 0.05;
              
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 3:
            
            if(obstacle.rotation.z < Math.PI/4 && obstacle.rotation.x > -Math.PI/4){
              obstacle.rotation.z += 0.05;
              obstacle.rotation.x -= 0.05;
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 4:
            
            if(obstacle.rotation.z < Math.PI/4){
              obstacle.rotation.z += 0.05;
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 5:
            
            if(obstacle.rotation.z > -Math.PI/4 && obstacle.rotation.x < Math.PI/4){
              obstacle.rotation.z -= 0.1;
              obstacle.rotation.x += 0.1;
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 6:
            
            if(obstacle.rotation.x < Math.PI/4){
              obstacle.rotation.x += 0.05;
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          case 7:
            
            if(obstacle.rotation.z < Math.PI/4 && obstacle.rotation.x < Math.PI/4){
              obstacle.rotation.z += 0.05;
              obstacle.rotation.x += 0.05;
            }
            else{
              clearInterval(fallSidewaysInterval);
            }
            break;
          

        }
      }
    }
  }
  let checkInterval = setInterval(check, 100);
  function check(){
    if(obstacle.position.x < camera.position.x){
      clearInterval(checkInterval);
      obstacle.position.set(obstacle.position.x, 100, 0);
      obstacle.rotation.z = 0;
      obstacle.rotation.x = 0;
      animateObstacle(obstacle);
    }
  }
}


var distanceCovered = 0;
var speed = 0;
var boostInterval = setInterval(boost, 10);
let index = 0;
let scaterringInterval = setInterval(scatter, 10);
function scatter(){
  switch(index){
    case 0:
      animateObstacle(obstacle1);
      break;
    case 1:
      animateObstacle(obstacle2);
      break;
    case 2:
      animateObstacle(obstacle3);
      break;
    case 3:
      animateObstacle(obstacle4);
      break;
      index = 0;
    
  }
  index++;
}
function boost(){
  var collidableMeshList = [obstacle1, obstacle2, obstacle3, obstacle4];						
	var originPoint = hitbox.position.clone();
	for (var vertexIndex = 0; vertexIndex < hitbox.geometry.vertices.length; vertexIndex++){		
	  var localVertex = hitbox.geometry.vertices[vertexIndex].clone();
	  var globalVertex = localVertex.applyMatrix4( hitbox.matrix );
	  var directionVector = globalVertex.sub( hitbox.position );
	  var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
	  var collisionResults = ray.intersectObjects( collidableMeshList );
    if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) {
      alert("BOOOOOM!");
    }
  }
  camera.position.x += speed;
  spacecraft.position.x += speed;
  hitbox.position.x += speed;
  if(speed < 1){
    speed += 0.004;
    spacecraft.position.y+=0.001;
    hitbox.position.y+=0.001;
  }
  if(camera.position.x >= 38){
    spacecraft.position.x = -43;
    hitbox.position.x = -43.4;
    camera.position.x = -46;
    distanceCovered++;
    document.getElementById("progress").style.width = String(distanceCovered/25)+"%";
    document.getElementById("km_left").innerHTML = String(500 - distanceCovered)+" km left";
  }
}
}
}
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function render() {
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
