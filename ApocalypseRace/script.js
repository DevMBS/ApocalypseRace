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
let moveCamera1Interval = setInterval(moveCamera1, 10);
let moveCamera2Interval;
let moveCamera3Interval;
let moveCamera4Interval;
let moveCamera5Interval;
let moveCamera6Interval;
let moveCamera7Interval;
let moveCamera8Interval;
let moveCamera9Interval;
let opacity = 0;
function moveCamera1(){
  let text = "In 2574, humanity unleashed a war, the consequences of which will never be corrected.";
  document.getElementById("text").innerHTML = text;
  if(camera.position.x < -42){
    camera.rotation.y += 0.004;
    camera.position.z += 0.015;
    camera.position.x +=0.012;
    document.getElementById("text").style.opacity = String(opacity);
    opacity+=0.01;
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
    opacity = 0;
    moveCamera3Interval = setInterval(moveCamera3, 10);
  }


}
function moveCamera3(){
  let text = "The Earth turned into a kingdom of radioactive dirt, wherefore it impossible to live on it, so all the remaining inhabitants of the Earth united and built a huge spaceship, which they put into Earth's orbit and settled in it forever.";
  document.getElementById("text").innerHTML = text;
  if(camera.rotation.y < Math.PI+Math.PI/3){
    camera.rotation.y += 0.0032;
    camera.position.z -= 0.011;
    camera.position.x +=0.012;
    document.getElementById("text").style.opacity = String(opacity);
    opacity+=0.01;
  }
  else{
    clearInterval(moveCamera3Interval);
    opacity = 0;
    moveCamera4Interval = setInterval(moveCamera4, 10);
  }


}
function moveCamera4(){
  let text = "But you ask, what am I doing here if all people are far away in space? The fact is that not everyone had enough space on the ship...";
  document.getElementById("text").innerHTML = text;
  if(camera.position.y >= 0.1){
    camera.position.x +=0.02;
    camera.position.y -= 0.0033;
    document.getElementById("text").style.opacity = String(opacity);
    opacity+=0.01;
  }
  else{
    clearInterval(moveCamera4Interval);
    opacity = 0;
    moveCamera5Interval = setInterval(moveCamera5, 10);
  }


}
function moveCamera5(){
  let text = "The poor strata of the population remained on Earth to survive. But hope has not faded. The fleeing earthlings left behind a gravitational cannon with which you can get to space, you just need to get to it.";
  document.getElementById("text").innerHTML = text;
  if(camera.position.y <= 7 && camera.rotation.y < Math.PI*2+Math.PI/3){
    camera.position.x +=0.02;
    camera.position.y += 0.0066;
    camera.rotation.y += 0.004;
    camera.position.z += 0.0066;
    document.getElementById("text").style.opacity = String(opacity);
    opacity+=0.01;
  }
  else{
    clearInterval(moveCamera5Interval);
    opacity = 0;
    moveCamera6Interval = setInterval(moveCamera6, 10);
  }


}
function moveCamera6(){
  let text = "On wheeled vehicles, it's impossible, because a multi-meter layer of radioactive dirt covers almost the entire Earth, so Runners were created - fast flying machines protected from radiation.";
  document.getElementById("text").innerHTML = text;
  if(camera.position.x < 120){
    camera.position.x +=0.03;
    if(camera.position.x < 62){
      camera.position.y -= 0.0028;
    }
    else{
      camera.position.y += 0.0028;
      let text = "And you're in luck - just recently you had enough money to buy one of these. So now is the time to start the race for life! just be careful, it constantly rains trash and remnants of buildings, also get used to the constant temperature changes. It will be a fun journey, albeit challenging..";
      document.getElementById("text").innerHTML = text;
    }
    document.getElementById("text").style.opacity = String(opacity);
    opacity+=0.01;
  }
  else{
    clearInterval(moveCamera6Interval);
    opacity = 0;
    moveCamera7Interval = setInterval(moveCamera7, 10);
  }


}
function moveCamera7(){
  let text = "So... Get into your Runner and go!";
  document.getElementById("text").innerHTML = text;
  if(camera.rotation.y < Math.PI*2+(Math.PI/3)*2){
    camera.position.z +=0.0305;
    camera.rotation.y += 0.006;
    document.getElementById("text").style.opacity = String(opacity);
    opacity+=0.01;
  }
  else{
    clearInterval(moveCamera7Interval);
    opacity = 0;
    document.getElementById("text").innerHTML = ""
    moveCamera8Interval = setInterval(moveCamera8, 10);
  }


}
function moveCamera8(){
  document.getElementById("text").innerHTML = "";
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
}
else{


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
