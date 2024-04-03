import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, useTexture } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Scene() {
  const gltf = useLoader(GLTFLoader, "web/scene.gltf");
  return <primitive object={gltf.scene} />;
}

const ReactThreeFiber = () => { 
  const [colorMap] = useLoader(TextureLoader, ["web/textures/Material.012_baseColor.jpeg"])
  return (
    <div className="rtb">
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
          <meshStandardMaterial map={colorMap} />
        </Suspense>  
      </Canvas>
    </div>
  );
};

export default ReactThreeFiber;