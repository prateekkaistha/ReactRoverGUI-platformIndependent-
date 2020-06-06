import React, {Component} from 'react';
import * as THREE from 'three';
import { Loader } from 'three';
// import { threadId } from 'worker_threads';

let R;
let cuPos = 0;
let sPos = 0;
class ThreeD extends Component{

 
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, 3/2,0.1,1000);
        const renderer = new THREE.WebGLRenderer({antialias:true});
        scene.background = new THREE.Color('#202020' ); 
        const loader = new THREE.TextureLoader();
        // const bgtexture = loader.load('cosmos.jpg');
        // scene.background = bgtexture;
        console.log(window.innerWidth,window.innerHeight);
        
        // renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.setSize(250,180);
        
        
        
        this.mount.appendChild( renderer.domElement);

        const geometry = new THREE.BoxGeometry(200,200,200);
        var wireframe = new THREE.WireframeGeometry( geometry );
        var line = new THREE.LineSegments( wireframe );
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = true;
        


        // const material = new THREE.MeshBasicMaterial({color:0x0000ff});
        
        // // const texture = new THREE.TextureLoader(  ).load('tex2.gif');
        // // const material = new THREE.MeshBasicMaterial({map:texture});

      
        // const cube = new THREE.Mesh(geometry,material);
        // const cube2 = new THREE.Mesh(geometry,material);
        
        // cube2.position.x=5;


        var geometry2 = new THREE.SphereBufferGeometry( 100, 100, 100 );

        var wireframe2 = new THREE.WireframeGeometry( geometry2 );
        var line2 = new THREE.LineSegments( wireframe2 );
        line2.material.depthTest = false;
        line2.material.opacity = 0.25;
        line2.material.transparent = true;


        var light = new THREE.PointLight(0xff0000,1,100);
        light.position.set(300,300,300);
        scene.add(light);


        scene.add( line );
        scene.add( line2);
        
        camera.position.z = 280;
        camera.position.y = 0;
        camera.position.x = 0;


        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene,camera);
           if(true)
           {
            // line.rotation.x += 0.01;
            line.rotation.y += 0.01;
            // line.rotation.z += 0.01;
            if(R){
              if(cuPos>-150){
                cuPos-=1;
                sPos+=1;
                
              }
              // else if(sPos>0){
              //   sPos-=1;
              //   cuPos-=1;
                
              // }
              // else if(cuPos>-1000){
              //   cuPos-=1;
              // }
            }
            if(!R){
              if(cuPos<0){
                cuPos+=1;
                sPos-=1;
                
              }
            }
            
            line.position.set(cuPos,0,0);
            line2.position.set(sPos,0,0);
            // line2.rotation.x -= 0.02;
            // line2.rotation.y -= 0.02;
            line2.rotation.z -= 0.02;
            
           }
            
        }
        animate();
      }
      render() {
        R = this.props.rotate;      
        return (


          <div
        style={{ width: '20px', height: '20px' }}
        ref={(mount) => { this.mount = mount }}
      />

        );
      }
};


export default ThreeD;