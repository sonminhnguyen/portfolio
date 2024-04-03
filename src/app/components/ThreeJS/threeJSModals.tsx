import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stats, OrbitControls } from "@react-three/drei";

const ThreeJSModal = () => {
  const [modalLoaded, setModalLoaded] = useState(false);
  const modalRef = useRef();

  // Sử dụng useLoader để load file .jbx
  const gltf = useLoader(GLTFLoader, "shiba/scene.gltf");

  // Sử dụng TextureLoader để load texture
  // const texture = useLoader(TextureLoader, "shiba/textures/default_baseColor.png");

  // Callback khi file đã được load
  const onModalLoaded = () => {
    setModalLoaded(true);
  };
  const refContainer = useRef<any>(null);

  // useEffect(() => {
  //   // === THREE.JS CODE START ===
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   // document.body.appendChild( renderer.domElement );
  //   // use ref as a mount point of the Three.js scene instead of the document.body
  //   refContainer.current && refContainer.current.appendChild( renderer.domElement );
  //   var geometry = new THREE.BoxGeometry(1, 1, 1);
  //   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   var cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);
  //   camera.position.z = 5;
  //   var animate = function () {
  //     requestAnimationFrame(animate);
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render(scene, camera);
  //   };
  //   animate();
  // }, []);
  return (<></>)
  return (
    <div className="Three">
      <Canvas>
        <Suspense fallback={null}>
          {/* Sử dụng OrbitControls để có thể quay vật thể */}
          <OrbitControls enableDamping />

          {/* Hiển thị vật thể và texture */}
          <primitive object={gltf.scene}>
            {/* <meshStandardMaterial map={texture} /> */}
          </primitive>
        </Suspense>

        {/* <div ref={refContainer}></div> */}
      </Canvas>
    </div>
  );

  // return <Scene />;
};

export default ThreeJSModal;
// {modalLoaded && (
//   <>
//     {/* Sử dụng OrbitControls để có thể quay vật thể */}
//     <OrbitControls
//       enableDamping
//       dampingFactor={0.5}
//       enableZoom={false}
//       ref={modalRef}
//     />

//     {/* Hiển thị vật thể và texture */}
//     <primitive object={gltf.scene}>
//       {/* <meshStandardMaterial map={texture} /> */}
//     </primitive>
//   </>
// )}
