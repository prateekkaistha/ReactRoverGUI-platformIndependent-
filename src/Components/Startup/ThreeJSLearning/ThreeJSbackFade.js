import React, {Component} from 'react';
import * as THREE from 'three';
import smoke from './smoke.png';
import stars from './stars.jpg';

class ThreeJSback extends Component{

    componentDidMount() {

      let scene, camera, renderer,cloudGeo,cloudMaterial,cloudParticles = [];

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.27;
  

           
      // camera.position.z = 280;
      // camera.position.y = 0;
      // camera.position.x = 0;


      let ambient = new THREE.AmbientLight(0x555555);
      scene.add(ambient);
  

      let directionalLight = new THREE.DirectionalLight(0xff8c19);
      directionalLight.position.set(0,0,1);
      scene.add(directionalLight);


      let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
      orangeLight.position.set(200,300,100);
      scene.add(orangeLight);



      let redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
      redLight.position.set(100,300,100);
      scene.add(redLight);

      let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
      blueLight.position.set(300,300,200);
      scene.add(blueLight);
      

      let darkblueLight = new THREE.PointLight(0x122738,50,450,1.7);
      darkblueLight.position.set(300,200,200);
      scene.add(darkblueLight);

      let darkkblueLight = new THREE.PointLight(0x11469c,50,450,1.7);
      darkkblueLight.position.set(200,200,200);
      scene.add(darkkblueLight);



      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth,window.innerHeight);

      // scene.fog = new THREE.FogExp2(0x03544e, 0.001);
      // scene.fog = new THREE.FogExp2(0x2e507b, 0.001);
      scene.fog = new THREE.FogExp2(0x39302e, 0.001);
      // scene.fog = new THREE.FogExp2(0x8e5443, 0.001);
      
      renderer.setClearColor(scene.fog.color);
      
      this.mount.appendChild( renderer.domElement);
   
     
      let loader = new THREE.TextureLoader();
     
      loader.load(smoke, function(texture){
        //texture is loaded
        cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        cloudMaterial = new THREE.MeshLambertMaterial({map:texture,transparent: true});

         for(let p=0; p<50; p++) {
          let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
          cloud.position.set(
            Math.random()*800 -400,
            500,
            Math.random()*500-500
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random()*2*Math.PI;      
          cloud.material.opacity = 0.55;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }

      });

     


      //+++++++++++++++++++++++++


      // const geometry = new THREE.BoxGeometry(20,20,20);
      const geometry = new THREE.SphereBufferGeometry( 10, 25, 25 );
     
      var wireframe = new THREE.WireframeGeometry( geometry );
      var line = new THREE.LineSegments( wireframe );
      line.material.depthTest = false;
      line.material.opacity = 0.25;
      line.material.transparent = true;
      


      var geometry2 = new THREE.SphereBufferGeometry( 100, 100, 100 );

      var wireframe2 = new THREE.WireframeGeometry( geometry2 );
      var line2 = new THREE.LineSegments( wireframe2 );
      line2.material.depthTest = false;
      line2.material.opacity = 0.25;
      line2.material.transparent = true;


      line2.position.set(400,500,50);
      line2.scale.x=5;
      line2.scale.y=5;
      line2.scale.z=5;


      line.position.set(-10,25,-10);
      line.scale.x=0.4;
      line.scale.y=0.4;
      line.scale.z=0.4;
 


      scene.add( line );
      scene.add( line2);
      //+++++++++++++++++++++++++



      var animate = function () {
        cloudParticles.forEach(p => {
          p.rotation.z -=0.001;
        });
        line2.rotation.y += 0.0001;
        line.rotation.y += 0.005;
        // line.rotation.z += 0.005;
				renderer.render( scene, camera );
        requestAnimationFrame( animate );
			};
      
       
      animate();


      window.addEventListener("resize", onWindowResize, false);
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }


      }
      render() 
      {
        return (
      <div className="ThreeJSbackFade"
          // style={{ width: '20px', height: '20px' }}
        ref={(mount) => { this.mount = mount }}
      />

        );
      }
};


export default ThreeJSback;