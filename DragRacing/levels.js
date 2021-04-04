//initalizing neural networks
			const net = new brain.NeuralNetwork();
			const net2 = new brain.NeuralNetwork();

            //neural network training
			net.train([
           	{input: {i: 0} , output: {i:0.99 }},
            {input: {i: 2000} , output: {i:0.97 }},
            {input: {i: 6000 }, output: {i:0.8 }},
            {input: {i: 1000 }, output: {i:0.98}},
            {input: {i: 5000 }, output: {i:0.86}},
            {input: {i: 10000 }, output: {i:0.3}},
            {input: {i: 500000 }, output: {i:0.1}}]);

            //neural network2 training
			net2.train([
            {input: {i: -2000} , output: {i:0.16 }},
            {input: {i: -6000} , output: {i:0.2 }},
            {input: {i: -1000 }, output: {i:0.12 }},
            {input: {i: -5000 }, output: {i:0.18}},
            {input: {i: -10000 }, output: {i:0.3}},
            {input: {i: -500000 }, output: {i:0.4}}]);

			'use strict';
            //initalizing three.js library
			import * as THREE from '../build/three.module.js';
			import { MTLLoader } from "./jsm/loaders/MTLLoader.js";
			import { OBJLoader2 } from "./jsm/loaders/OBJLoader2.js";
			import { MtlObjBridge } from "./jsm/loaders/obj2/bridge/MtlObjBridge.js";
			

            //setting basic properites
			const Race = function ( elementToBindTo ) {

				this.renderer = null;
				var renderer = this.renderer;
				this.canvas = elementToBindTo;
				this.aspectRatio = 1;
				this.recalcAspectRatio();

				this.scene = null;
				this.cameraDefaults = {
					posCamera: new THREE.Vector3( -1000.0, 100.0, 0.0 ),
					posCameraTarget: new THREE.Vector3( 0, 90, 0 ),
					near: 0.1,
					far: 10000000,
					fov: 75
				};
				this.camera = null;
				this.cameraTarget = this.cameraDefaults.posCameraTarget;
                
			
                

			};

			Race.prototype = {

				constructor: Race,

				initGL: function () {

					this.renderer = new THREE.WebGLRenderer( {
						canvas: this.canvas,
						antialias: true,
						autoClear: true
					} );
					this.renderer.setClearColor( 0x050505 );

					this.scene = new THREE.Scene();

					this.camera = new THREE.PerspectiveCamera( this.cameraDefaults.fov, this.aspectRatio, this.cameraDefaults.near, this.cameraDefaults.far );
                    const camera = this.camera;
					this.resetCamera();
                    
					
					const loader = new THREE.TextureLoader();



					const dLight = new THREE.DirectionalLight( 0xffdddd, 0.7 );
					dLight.castShadow = true;
					dLight.position.x = -7940;
                    dLight.position.y = 430;
                    dLight.position.z = 4000;
                    this.scene.add( dLight );
					const aLight = new THREE.AmbientLight( 0xffdddd, 0.5 );
                    this.scene.add( aLight );

					
					
					//const skyColor = new THREE.Color( 'skyblue' );
					const skyTexture = loader.load('skyTexture.jpg');

					
                    this.scene.background = skyTexture;

                    this.scene.fog = new THREE.FogExp2(0xeecccc, 0.00008);
					
					var scene = this.scene;


					const modelName = 'car';
					const scope = this;
					const objLoader2 = new OBJLoader2();
					const callbackOnLoad = function ( model ) {

						scene.add( model );
						var car = model;
						var botCar = car.clone();
						scene.add(botCar);
						


					car.position.z = 2870;//400
		            car.position.y = 440;//-92
		            car.position.x = -7730;//40
					car.scale.x = car.scale.y = car.scale.z = 8;
					car.rotation.y = 3.12;
					car.castShadow = true;
					car.receiveShadow = true;



					botCar.position.z = 2870;//400
		            botCar.position.y = 440;//-92
		            botCar.position.x = -7880;//40
					botCar.scale.x = botCar.scale.y = botCar.scale.z = 8;
					botCar.rotation.y = 3.12;
					botCar.castShadow = true;
					botCar.receiveShadow = true;

                    //building a user's car
                    const carGeometry1 = new THREE.BoxGeometry(24, 4, 48);
                    const carMaterial = new THREE.MeshPhysicalMaterial({color: 0x000000});
		            const car1 = new THREE.Mesh(carGeometry1, carMaterial);
		            scene.add(car1);
		            car1.position.z = 2880;//400
		            car1.position.y = 440;//-92
		            car1.position.x = -7730;//40
		            //const wheelGeometry = new THREE.CylinderBufferGeometry(5, 5, 3, 15);
		            //
		            //const wheelmaterials = [
					//  new THREE.MeshPhysicalMaterial({map: loader.load('wheeltexture2.jpg')}),
					//  new THREE.MeshPhysicalMaterial({map: loader.load('wheeltexture123.png')}),
					//  new THREE.MeshPhysicalMaterial({map: loader.load('wheeltexture123.png')}),
					//];
		            //const wheel1 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		            //scene.add(wheel1);
		            //wheel1.position.z = 2854;
		            //wheel1.position.y = 437;
		            //wheel1.position.x = -7741;
		            //wheel1.rotation.z = 80.1;
					//wheel1.castShadow = true;
					//wheel1.receiveShadow = true;
		            //const wheel2 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		            //scene.add(wheel2);
		            //wheel2.position.z = 2887;
		            //wheel2.position.y = 437;
		            //wheel2.position.x = -7741;
		            //wheel2.rotation.z = 80.1;
					//wheel2.castShadow = true;
					//wheel2.receiveShadow = true;
		            //const wheel3 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		            //scene.add(wheel3);
		            //wheel3.position.z = 2854;
		            //wheel3.position.y = 437;
		            //wheel3.position.x = -7719;
		            //wheel3.rotation.z = 80.1;
					//wheel3.castShadow = true;
					//wheel3.receiveShadow = true;
		            //const wheel4 = new THREE.Mesh(wheelGeometry, wheelmaterials);
		            //scene.add(wheel4);
		            //wheel4.position.z = 2887;
		            //wheel4.position.y = 437;
		            //wheel4.position.x = -7719;
		            //wheel4.rotation.z = 80.1;
					//wheel4.castShadow = true;
					//wheel4.receiveShadow = true;
		
			        //making a markup
                    const markupGeometry = new THREE.BoxGeometry(10, 2, 20000);
		            const markupMaterial = new THREE.MeshPhysicalMaterial({color:0xFFA500});
                    const markup = new THREE.Mesh(markupGeometry, markupMaterial);
                    scene.add(markup);
                    markup.position.z = -6000;
		            markup.position.y = 427;
		            markup.position.x = -7800;

		            //making a finish arch
		            const finishGeometry1 = new THREE.BoxGeometry(10, 200, 10);
		            const finishMaterial = new THREE.MeshPhysicalMaterial({color:0xFF0000});
		            finishMaterial.clearcoat=1.0;
		            finishMaterial.metalness=0.2;
		            const finish1 = new THREE.Mesh(finishGeometry1, finishMaterial);
		            scene.add(finish1);
		            finish1.position.z = -14900;
		            finish1.position.y = 490;
		            finish1.position.x = -7580;
		            const finishGeometry2 = new THREE.BoxGeometry(500, 100, 10);
		            const finish2 = new THREE.Mesh(finishGeometry2, finishMaterial);
		            scene.add(finish2);
		            finish2.position.z = -14900;
		            finish2.position.y = 630;
		            finish2.position.x = -7790;
		            const finish3 = new THREE.Mesh(finishGeometry1, finishMaterial);
		            scene.add(finish3);
		            finish3.position.z = -14900;
		            finish3.position.y = 490;
		            finish3.position.x = -8000;

		            //cones
		            const coneGeometry = new THREE.ConeBufferGeometry(2, 15, 60);
		            const coneMaterial = new THREE.MeshPhysicalMaterial({color:0xFFC100});
		            coneMaterial.clearcoat = 1.0;
		            coneMaterial.metalness = 0.0;
		            const cone1 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone1);
		            cone1.position.z = 2700;
		            cone1.position.y = 440;
		            cone1.position.x = -7780;

		            const wallGeometry1 = new THREE.BoxGeometry(80, 60, 30);
                    const wallMaterial = new THREE.MeshPhysicalMaterial({map: loader.load('bordertexture.png')});
		            wallMaterial.metalness = 0.0;
		            wallMaterial.clearcoat = 0.9;
		            const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall1);
		            wall1.position.z = 2000;
		            wall1.position.y = 465;
		            wall1.position.x = -7700;
		            const wall2 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall2);
		            wall2.position.z = 1800;
		            wall2.position.y = 465;
		            wall2.position.x = -7750;
		            const wall3 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall3);
		            wall3.position.z = 1750;
		            wall3.position.y = 465;
		            wall3.position.x = -7620;
		            const cone2 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone2);
		            cone2.position.z = 1600;
		            cone2.position.y = 440;
		            cone2.position.x = -7780;
		            const cone3 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone3);
		            cone3.position.z = 1600;
		            cone3.position.y = 440;
		            cone3.position.x = -7740;
		            const cone4 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone4);
		            cone4.position.z = 1600;
		            cone4.position.y = 440;
		            cone4.position.x = -7700;
		            const cone5 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone5);
		            cone5.position.z = 1600;
		            cone5.position.y = 440;
		            cone5.position.x = -7660;
		            const cone6 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone6);
		            cone6.position.z = 1600;
		            cone6.position.y = 440;
		            cone6.position.x = -7620;
		            const wall4 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall4);
		            wall4.position.z = 1500;
		            wall4.position.y = 465;
		            wall4.position.x = -7660;
		            const cone7 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone7);
		            cone7.position.z = 1560;
		            cone7.position.y = 440;
		            cone7.position.x = -7750;
		            const cone8 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone8);
		            cone8.position.z = 1400;
		            cone8.position.y = 440;
		            cone8.position.x = -7710;
		            const cone9 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone9);
		            cone9.position.z = 1350;
		            cone9.position.y = 440;
		            cone9.position.x = -7680;
		            const wall5 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall5);
		            wall5.position.z = 1300;
		            wall5.position.y = 465;
		            wall5.position.x = -7780;
		            const wall6 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall6);
		            wall6.position.z = 1100;
		            wall6.position.y = 465;
		            wall6.position.x = -7680;
		            const wall7 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall7);
		            wall7.position.z = 800;
		            wall7.position.y = 465;
		            wall7.position.x = -7780;
		            const wall8 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall8);
		            wall8.position.z = 500;
		            wall8.position.y = 465;
		            wall8.position.x = -7680;
		            const wall9 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall9);
		            wall9.position.z = 200;
		            wall9.position.y = 465;
		            wall9.position.x = -7780;
		            const wall10 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall10);
		            wall10.position.z = -100;
		            wall10.position.y = 465;
		            wall10.position.x = -7680;
		            const wall11 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall11);
		            wall11.position.z = -400;
		            wall11.position.y = 465;
		            wall11.position.x = -7620;
		            const wall12 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall12);
		            wall12.position.z = -400;
		            wall12.position.y = 465;
		            wall12.position.x = -7780;
		            const cone10 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone10);
		            cone10.position.z = -450;
		            cone10.position.y = 440;
		            cone10.position.x = -7620;
		            const cone11 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone11);
		            cone11.position.z = -480;
		            cone11.position.y = 440;
		            cone11.position.x = -7620;
		            const cone12 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone12);
		            cone12.position.z = -510;
		            cone12.position.y = 440;
		            cone12.position.x = -7620;
		            const cone13 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone13);
		            cone13.position.z = -540;
		            cone13.position.y = 440;
		            cone13.position.x = -7620;
		            const cone14 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone14);
		            cone14.position.z = -570;
		            cone14.position.y = 440;
		            cone14.position.x = -7620;
		            const cone15 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone15);
		            cone15.position.z = -600;
		            cone15.position.y = 440;
		            cone15.position.x = -7620;
		            const cone16 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone16);
		            cone16.position.z = -630;
		            cone16.position.y = 440;
		            cone16.position.x = -7620;
		            const cone17 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone17);
		            cone17.position.z = -660;
		            cone17.position.y = 440;
		            cone17.position.x = -7620;
		            const cone18 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone18);
		            cone18.position.z = -690;
		            cone18.position.y = 440;
		            cone18.position.x = -7620;
		            const cone19 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone19);
		            cone19.position.z = -720;
		            cone19.position.y = 440;
		            cone19.position.x = -7620;
		            const cone20 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone20);
		            cone20.position.z = -750;
		            cone20.position.y = 440;
		            cone20.position.x = -7620;
		            const cone21 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone21);
		            cone21.position.z = -780;
		            cone21.position.y = 440;
		            cone21.position.x = -7620;
		            const cone22 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone22);
		            cone22.position.z = -810;
		            cone22.position.y = 440;
		            cone22.position.x = -7620;
		            const cone23 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone23);
		            cone23.position.z = -450;
		            cone23.position.y = 440;
		            cone23.position.x = -7700;
		            const cone24 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone24);
		            cone24.position.z = -480;
		            cone24.position.y = 440;
		            cone24.position.x = -7700;
		            const cone25 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone25);
		            cone25.position.z = -510;
		            cone25.position.y = 440;
		            cone25.position.x = -7700;
		            const cone26 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone26);
		            cone26.position.z = -540;
		            cone26.position.y = 440;
		            cone26.position.x = -7700;
		            const cone27 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone27);
		            cone27.position.z = -570;
		            cone27.position.y = 440;
		            cone27.position.x = -7700;
		            const cone28 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone28);
		            cone28.position.z = -600;
		            cone28.position.y = 440;
		            cone28.position.x = -7700;
		            const cone29 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone29);
		            cone29.position.z = -630;
		            cone29.position.y = 440;
		            cone29.position.x = -7700;
		            const cone30 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone30);
		            cone30.position.z = -660;
		            cone30.position.y = 440;
		            cone30.position.x = -7700;
		            const cone31 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone31);
		            cone31.position.z = -690;
		            cone31.position.y = 440;
		            cone31.position.x = -7700;
		            const cone32 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone32);
		            cone32.position.z = -720;
		            cone32.position.y = 440;
		            cone32.position.x = -7700;
		            const cone33 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone33);
		            cone33.position.z = -750;
		            cone33.position.y = 440;
		            cone33.position.x = -7700;
		            const cone34 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone34);
		            cone34.position.z = -780;
		            cone34.position.y = 440;
		            cone34.position.x = -7700;
		            const cone35 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone35);
		            cone35.position.z = -810;
		            cone35.position.y = 440;
		            cone35.position.x = -7700;
		            const wall13 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall13);
		            wall13.position.z = -1000;
		            wall13.position.y = 465;
		            wall13.position.x = -7680;
		            const wall14 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall14);
		            wall14.position.z = -1200;
		            wall14.position.y = 465;
		            wall14.position.x = -7620;
		            const wall15 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall15);
		            wall15.position.z = -1400;
		            wall15.position.y = 465;
		            wall15.position.x = -7740;
		            const wall16 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall16);
		            wall16.position.z = -1600;
		            wall16.position.y = 465;
		            wall16.position.x = -7680;
		            const cone36 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone36);
		            cone36.position.z = -1600;
		            cone36.position.y = 440;
		            cone36.position.x = -7610;
		            const cone37 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone37);
		            cone37.position.z = -1600;
		            cone37.position.y = 440;
		            cone37.position.x = -7770;
		            const wall17 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall17);
		            wall17.position.z = -2000;
		            wall17.position.y = 465;
		            wall17.position.x = -7640;
		            const wall18 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall18);
		            wall18.position.z = -2000;
		            wall18.position.y = 465;
		            wall18.position.x = -7675;
		            const wallGeometry2 = new THREE.BoxGeometry(50, 60, 1000);
		            const wall19 = new THREE.Mesh(wallGeometry2, wallMaterial);
		            scene.add(wall19);
		            wall19.position.z = -2570;
		            wall19.position.y = 465;
		            wall19.position.x = -7650;
		            const wall20 = new THREE.Mesh(wallGeometry2, wallMaterial);
		            scene.add(wall20);
		            wall20.position.z = -2570;
		            wall20.position.y = 465;
		            wall20.position.x = -7780;
		            const cone38 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone38);
		            cone38.position.z = -3500;
		            cone38.position.y = 440;
		            cone38.position.x = -7780;
		            const cone39 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone37);
		            cone39.position.z = -3500;
		            cone39.position.y = 440;
		            cone39.position.x = -7740;
		            const cone40 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone40);
		            cone40.position.z = -3500;
		            cone40.position.y = 440;
		            cone40.position.x = -7700;
		            const cone41 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone41);
		            cone41.position.z = -3500;
		            cone41.position.y = 440;
		            cone41.position.x = -7660;
		            const cone42 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone42);
		            cone42.position.z = -3500;
		            cone42.position.y = 440;
		            cone42.position.x = -7620;
		            const wall21 = new THREE.Mesh(wallGeometry2, wallMaterial);
		            scene.add(wall21);
		            wall21.position.z = -3800;
		            wall21.position.y = 465;
		            wall21.position.x = -7640;
		            const wall22 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall22);
		            wall22.position.z = -3850;
		            wall22.position.y = 465;
		            wall22.position.x = -7790;
		            const wall23 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall23);
		            wall23.position.z = -3900;
		            wall23.position.y = 465;
		            wall23.position.x = -7780;
		            const wall24 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall24);
		            wall24.position.z = -3950;
		            wall24.position.y = 465;
		            wall24.position.x = -7770;
		            const wall25 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall25);
		            wall25.position.z = -4000;
		            wall25.position.y = 465;
		            wall25.position.x = -7755;
		            const wall26 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall26);
		            wall26.position.z = -4600;
		            wall26.position.y = 465;
		            wall26.position.x = -7680;
		            const cone43 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone43);
		            cone43.position.z = -4900;
		            cone43.position.y = 440;
		            cone43.position.x = -7700;
		            const cone44 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone44);
		            cone44.position.z = -5300;
		            cone44.position.y = 440;
		            cone44.position.x = -7640;
		            const cone45 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone45);
		            cone45.position.z = -5700;
		            cone45.position.y = 440;
		            cone45.position.x = -7690;
		            const cone46 = new THREE.Mesh(coneGeometry, coneMaterial);
		            scene.add(cone46);
		            cone46.position.z = -6200;
		            cone46.position.y = 440;
		            cone46.position.x = -7710;
		            const wall27 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall27);
		            wall27.position.z = -6800;
		            wall27.position.y = 465;
		            wall27.position.x = -7720;
		            const wall28 = new THREE.Mesh(wallGeometry1, wallMaterial);
		            scene.add(wall28);
		            wall28.position.z = -7200;
		            wall28.position.y = 465;
		            wall28.position.x = -7640;



                    //initalizing car controls
                    let speed = 0;
                    var counterA = 0;
                    var counterK = 0;
                    var stopperW = true;
                    
                    document.addEventListener('keydown', function(event, boostInterval) {
                        
                        //fullscreen
                        if(event.code == 'KeyF'){
                            document.getElementById('glFullscreen').requestFullscreen();
                        }


                        //to left & to right

                        //to right
                        if (event.code == 'KeyD' && car1.position.x < -7610 && stopperW == false){
                        	camera.position.x+=5;
                            car1.position.x+=5;
                            //wheel1.position.x += 5;
                            //wheel2.position.x += 5;
                            //wheel3.position.x += 5;
                            //wheel4.position.x += 5;
                            
							car.position.x += 5;
                            
                            //finish: stop cars, calculate cash, saving cash, printing cash & u win or lose
                            if(car.position.z < -15000){
                            	//dimming the screen
                                document.getElementById("wl").style.background= "rgba(0, 0, 0, 0.9)";
                                //printing: you win or u lose
                                document.getElementById("WoL").innerHTML = "YOU WIN!";
                                document.getElementById("speed").style.color="black";
                                document.getElementById("backToMenu").style.display="block";
                                //stopping cars
                            	stopperW = true;
                            	stopperD = true;
                            	//calculate average distance to bot
                                var resCounter = counterA/counterK;
                                //printing award & saving cash
                                
                          		let cash = localStorage.getItem("cash");
                          		let r = Math.floor(resCounter/-10);
                                let r2 = r+100;
                          		let newCash = Number(cash)+Number(r2);
                                localStorage.setItem("cash", newCash);
                                document.getElementById("cash").innerHTML = "Your award: "+r2+"$";
                          		
                          		//calculating speed for next race with neural networks
                                if(resCounter > 0){
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net.run(out);
                                	localStorage.setItem("index", output.i);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i;
                                	localStorage.setItem("speed", speed);
                                }
                                else{
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net2.run(out);
                                	localStorage.setItem("index", output.i*10);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i*10;
                                	localStorage.setItem("speed", speed);
                                	
                                }
                            }
                        }

                        //to left
                        if (event.code == 'KeyA' && car.position.x> -7780 && stopperW == false){
                        	camera.position.x-=5;
                            car1.position.x-=5;
                            
                            //wheel1.position.x -= 5;
                            //wheel2.position.x -= 5;
                            //wheel3.position.x -= 5;
                            //wheel4.position.x -= 5;
                            
							car.position.x -= 5;
                            
                            //finish: stop cars, calculate cash, saving cash, printing cash & u win or lose
                            if(car.position.z < -15000){
                            	//dimming the screen
                                document.getElementById("wl").style.background= "rgba(0, 0, 0, 0.9)";
                                //printing: you win or u lose
                                document.getElementById("WoL").innerHTML = "YOU WIN!";
                                document.getElementById("speed").style.color="black";
                                document.getElementById("backToMenu").style.display="block";
                                //stopping cars
                            	stopperW = true;
                            	stopperD = true;
                            	//calculate average distance to bot
                                var resCounter = counterA/counterK;
                                //printing award & saving cash
                                
                          		let cash = localStorage.getItem("cash");
                          		let r = Math.floor(resCounter/-10);
                                let r2 = r+100;
                          		let newCash = Number(cash)+Number(r2);
                                localStorage.setItem("cash", newCash);
                                document.getElementById("cash").innerHTML = "Your award: "+r2+"$";
                          		
                          		//calculating speed for next race with neural networks
                                if(resCounter > 0){
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net.run(out);
                                	localStorage.setItem("index", output.i);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i;
                                	localStorage.setItem("speed", speed);
                                }
                                else{
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net2.run(out);
                                	localStorage.setItem("index", output.i*10);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i*10;
                                	localStorage.setItem("speed", speed);
                                	
                                }
                            }
                        }

                        //break
                        if (event.code == 'KeyS' && stopperW == false) {
			                    	
			                        if(speed*6 > 0){
			                        	
                                            speed -= 0.3;
                                        
                                            
                                        }
                                        document.getElementById("rs").innerHTML = Math.floor(speed*6)+"KPH";
                                        document.getElementById("speed").style.width = String(Math.floor(speed*6)/2)+"%";
                                
                            //finish: stop cars, calculate cash, saving cash, printing cash & u win or lose
                            if(car.position.z < -15000){
                            	//dimming the screen
                                document.getElementById("wl").style.background= "rgba(0, 0, 0, 0.9)";
                                //printing: you win or u lose
                                document.getElementById("WoL").innerHTML = "YOU WIN!";
                                document.getElementById("speed").style.color="black";
                                document.getElementById("backToMenu").style.display="block";
                                //stopping cars
                            	stopperW = true;
                            	
                            	//calculate average distance to bot
                                var resCounter = counterA/counterK;
                                //printing award & saving cash
                                
                          		let cash = localStorage.getItem("cash");
                          		let r = Math.floor(resCounter/-10);
                                let r2 = r+100;
                          		let newCash = Number(cash)+Number(r2);
                                localStorage.setItem("cash", newCash);
                                document.getElementById("cash").innerHTML = "Your award: "+r2+"$";
                          		
                          		//calculating speed for next race with neural networks
                                if(resCounter > 0){
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net.run(out);
                                	localStorage.setItem("index", output.i);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i;
                                	localStorage.setItem("speed", speed);
                                }
                                else{
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net2.run(out);
                                	localStorage.setItem("index", output.i*10);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i*10;
                                	localStorage.setItem("speed", speed);
                                	
                                }
                            }         
                            
                        }
                    });
					
					
					function boost(){
						if(stopperW == false){
                            camera.position.z-=speed;
                            car1.position.z-=speed;
                            
                            //wheel1.position.z -= speed;
                            //wheel2.position.z -= speed;
                            //wheel3.position.z -= speed;
                            //wheel4.position.z -= speed;
                            
							car.position.z -= speed;


                            //wheel1.rotation.x -= speed/10;
                            //wheel2.rotation.x -= speed/10;
                            //wheel3.rotation.x -= speed/10;
                            //wheel4.rotation.x -= speed/10;

							



                            // collision detection!!!
							var collidableMeshList = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, cone1, cone2, cone3, cone4, cone5, cone6, cone7, cone8, cone9, cone10, cone11, cone12, cone13, cone14, cone15, cone16, cone17, cone18, cone19, cone20, cone21, cone22, cone23, cone24, cone25, cone26, cone27, cone28, cone29, cone30, cone31, cone32, cone33, cone34, cone35, cone36, cone37, cone38, cone39, cone40, cone41, cone42, cone43, cone44, cone45, cone46];						
							var originPoint = car1.position.clone();
							for (var vertexIndex = 0; vertexIndex < car1.geometry.vertices.length; vertexIndex++){		
								var localVertex = car1.geometry.vertices[vertexIndex].clone();
								var globalVertex = localVertex.applyMatrix4( car1.matrix );
								var directionVector = globalVertex.sub( car1.position );
								var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
								var collisionResults = ray.intersectObjects( collidableMeshList );
								if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) {
									stopperW = true;
									//dimming the screen
                                	document.getElementById("wl").style.background= "rgba(0, 0, 0, 0.9)";
                                	//printing: you win or u lose
                                	document.getElementById("WoL").innerHTML = "YOU LOSE!";
                                	document.getElementById("speed").style.color="black";
                                	document.getElementById("backToMenu").style.display="block";
                                	let cash = localStorage.getItem("cash");
                          			let newCash = Number(cash)-200;
                                	localStorage.setItem("cash", newCash);
                                	document.getElementById("cash").innerHTML = "Your award: -200$";

								}
								}	
                            






							
                            //finish: stop cars, calculate cash, saving cash, printing cash & u win
                            if(car.position.z < -15000){
                            	//dimming the screen
                                document.getElementById("wl").style.background= "rgba(0, 0, 0, 0.9)";
                                //printing: you win
                                document.getElementById("WoL").innerHTML = "YOU WIN!";
                                document.getElementById("speed").style.color="black";
                                document.getElementById("backToMenu").style.display="block";
                                //stopping cars
                            	stopperW = true;
                            	
                            	//calculate average distance to bot
                                var resCounter = counterA/counterK;
                                //printing award & saving cash
                                
                          		let cash = localStorage.getItem("cash");
                          		let r = Math.floor(resCounter/-10);
                                let r2 = r+100;
                          		let newCash = Number(cash)+Number(r2);
                                localStorage.setItem("cash", newCash);
                                document.getElementById("cash").innerHTML = "Your award: "+r2+"$";
                          		
                          		//calculating speed for next race with neural networks
                                if(resCounter > 0){
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net.run(out);
                                	localStorage.setItem("index", output.i);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i;
                                	localStorage.setItem("speed", speed);
                                }
                                else{
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net2.run(out);
                                	localStorage.setItem("index", output.i*10);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i*10;
                                	localStorage.setItem("speed", speed);
                                	
                                }
                            }

                            counterK++;
                            counterA += car.position.z - botCar.position.z;
                            //printing speed
                            document.getElementById("rs").innerHTML = Math.floor(speed*6)+"KPH";
                            document.getElementById("speed").style.width = String(Math.floor(speed*6)/2)+"%";
                            //speed limit
                            if(speed*6 < 160){
                                speed+= 0.01;
                            }
					}
				}
                
               window.onload = function(){

               			//preloader
                        setTimeout(function() {

			                document.getElementById("preloader_malc").style.display = "none";
			                

		                }, 400);

		                //countdown
                        const startIntervalF = setInterval(cF, 14000);
                        let uC = 0;
                        function cF(){
                            if(uC == 1){
                                document.getElementById("s").innerHTML = "";
                                const startInterval = setInterval(go, 1000);
                                clearInterval(startIntervalF);
                            }
                            else{
                                uC++;
                            }
                        }

                        }

                //bot starts
                let c = 3;
                function go(startInterval){
                    if(c == -1){
                        var MRCInterval = setInterval(moveRC, 10);
                        document.getElementById("s").innerHTML = "";
                        clearInterval(startInterval);
                    }
                    else{
                        if(c == 0){
                            document.getElementById("s").style.color = "green";
                            document.getElementById("s").innerHTML = "<p align='center'>GO!</p>";
                            c -=1;
                            stopperW = false;
                            var boostInterval = setInterval(boost, 10);
							let carSound = new Audio("music/carSound.mp3");
							carSound.play();
							playMusic();
							
                        }
                        
                        else{
                            
                            if(c == 1){
                                document.getElementById("s").style.color = "yellow";
                            }
                            document.getElementById("s").innerHTML = "<p align='center'>"+c+"</p>";
                            c -= 1;
                            if(camera.position.z < 2985){
                                location.reload();
                            }
                        }
                    }
                    
                }
                		//if bot win
                		var co = 0;
                        function RcarFinished(finished){
                        		//dimming the screen
                        		document.getElementById("wl").style.background= "rgba(0, 0, 0, 0.9)";
                        		//printing 'YOU LOSE!'
                                document.getElementById("WoL").innerHTML = "YOU LOSE!";
                                document.getElementById("speed").style.color="black";
                                document.getElementById("backToMenu").style.display="block";
                                //stopping cars
                            	stopperW = true;
                            if(finished == true && co < 1){
                            	//calculating average distance to bot
                                var resCounter = counterA/counterK;

                                //printing & saving award
                                
                          		let cash = localStorage.getItem("cash");
                          		let r = Math.floor(resCounter/-10);
                                let r2 = r-100;
                          		let newCash = Number(cash)+Number(r2);
                                localStorage.setItem("cash", newCash);
                                document.getElementById("cash").innerHTML = "Your award: "+r2+"$";
                          		

                          		//calculating speed for next race with neural networks
                                if(resCounter > 0){
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net.run(out);
                                	localStorage.setItem("index", output.i);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i;
                                	localStorage.setItem("speed", speed);
                                }
                                else{
                                	let out = {i:130};
                                	out.i = resCounter;
                                    let output = net2.run(out);
                                	localStorage.setItem("index", output.i*10);
                                	let Pspeed = localStorage.getItem("speed");
                                	const speed = Pspeed*output.i*10;
                                	localStorage.setItem("speed", speed);
                                }
                            co++;
                            }
                        }

                //bot's car acceleration
                var finished = false;
                let speedR = 0;
				
					function moveRC(MRCInterval){
                        if(stopperW == false){
                        
                        //wheel1R.position.z -= speedR;
                        //wheel2R.position.z -= speedR;
                        //wheel3R.position.z -= speedR;
                        //wheel4R.position.z -= speedR;
                        //wheel1R.rotation.x -= speedR/10;
                        //wheel2R.rotation.x -= speedR/10;
                        //wheel3R.rotation.x -= speedR/10;
                        //wheel4R.rotation.x -= speedR/10;
						botCar.position.z -= speedR;
                    
                        
                        if(speedR*6 < Math.floor(Number(localStorage.getItem("speed"))) && typeof localStorage.getItem("speed") == "string"){
                            speedR += 0.000003;
                        }
                        if(typeof localStorage.getItem("speed") != "string" && speedR*6 < 130){
                                speedR += 0.00002;
                                localStorage.setItem("speed", 130);
                                localStorage.setItem("cash",0);
                            }
                        }
                        if(botCar.position.z < -15000){
                        		clearInterval(MRCInterval);
                                finished = true;
                                RcarFinished(finished);

                            }
                	
                        }
					function playMusic(){
						let num = Math.floor(Math.random() * 18);
						let audio = new Audio("music/"+String(num)+".mp3");
						audio.play();
						audio.addEventListener("ended", playMusic, false);
					}
				};
				const onLoadMtl2 = function ( mtlParseResult ) {

					objLoader2.setModelName( modelName );
					objLoader2.setLogging( false, false );
					objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
					objLoader2.load( 'Chevrolet_Camaro_SS_Low.obj', callbackOnLoad, null, null, null );
					
				};

				const mtlLoader2 = new MTLLoader();
				mtlLoader2.load( 'Chevrolet_Camaro_SS_Low.mtl', onLoadMtl2 );
                
				},

				initContent: function () {

					const modelName = 'city';
					const scope = this;
					const objLoader2 = new OBJLoader2();
					const callbackOnLoad = function ( model ) {

						scope.scene.add( model );
						var city = model;
						model.castShadow = true;
						model.receiveShadow = true;

					};

					const onLoadMtl = function ( mtlParseResult ) {

						objLoader2.setModelName( modelName );
						objLoader2.setLogging( false, false );
						objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
						objLoader2.load( 'OBJ/Amaryllis City.obj', callbackOnLoad, null, null, null );
                        
					};

					const mtlLoader = new MTLLoader();
					mtlLoader.load( 'OBJ/Amaryllis City.mtl', onLoadMtl );
                    

				},
				
				resizeDisplayGL: function () {

					

					this.recalcAspectRatio();
					this.renderer.setSize( this.canvas.offsetWidth, this.canvas.offsetHeight, false );
					this.renderer.shadowMap.enabled = true;
					this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

					
					var renderer = this.renderer;

				},

				recalcAspectRatio: function () {

					this.aspectRatio = ( this.canvas.offsetHeight === 0 ) ? 1 : this.canvas.offsetWidth / this.canvas.offsetHeight;

				},

				resetCamera: function () {
                    const camera = this.camera;
					this.camera.position.x = -7730;
                    this.camera.position.y = 460;
                    this.camera.position.z = 2985;
                    this.camera.rotation.x = 0;
                    

					

				},


				render: function () {

					if ( ! this.renderer.autoClear ) this.renderer.clear();
				
					this.renderer.render( this.scene, this.camera );

				}
			};

			const app = new Race( document.getElementById( 'scene' ) );

			const resizeWindow = function () {

				app.resizeDisplayGL();

			};

			const render = function () {

				requestAnimationFrame( render );
				app.render();

			};

			window.addEventListener( 'resize', resizeWindow, false );
			app.initGL();
			app.resizeDisplayGL();
			app.initContent();
			render();
            


