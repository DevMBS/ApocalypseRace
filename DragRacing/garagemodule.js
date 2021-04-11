
'use strict';

import * as THREE from '../build/three.module.js';
import { MTLLoader } from "./jsm/loaders/MTLLoader.js";
import { OBJLoader2 } from "./jsm/loaders/OBJLoader2.js";
import { MtlObjBridge } from "./jsm/loaders/obj2/bridge/MtlObjBridge.js";


    



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
lightTwo.position.set(100, 2, -4);
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

    const modelName = 'car';
    const objLoader2 = new OBJLoader2();
    const callbackOnLoad = function ( model ) {

        scene.add( model );
        var car = model;
        car.position.z = 367;
        car.position.x = 70;
        car.position.y = -90;
        car.scale.x = car.scale.y = car.scale.z = 2;
        car.rotation.y = 3.12;

    };

    const onLoadMtl = function ( mtlParseResult ) {

        objLoader2.setModelName( modelName );
        objLoader2.setLogging( false, false );
        objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
        objLoader2.load( 'Chevrolet_Camaro_SS_Low.obj', callbackOnLoad, null, null, null );
        
    };

    const mtlLoader = new MTLLoader();
    mtlLoader.load( 'Chevrolet_Camaro_SS_Low.mtl', onLoadMtl );

camera.position.z = 350;
camera.position.x = 80;
camera.position.y = -90;
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