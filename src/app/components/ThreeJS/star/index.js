'use client'
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";
import { Text, Html, OrbitControls } from "@react-three/drei";
import "./styles.css";

function Overlay() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas>
          <OrbitControls enableZoom={false} />
          <mesh>
            <Text isObject3D font="/FiraMono-Regular.ttf">
              <Html
                style={{ userSelect: "none" }}
                castShadow
                receiveShadow
                occlude="blending"
                transform
              >
                {" "}
                <h1 className="star-text">PROGRAMMING</h1>
              </Html>
            </Text>
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

const StarsBackground = () => {
  return (
    <div className="stars">
      <Stars />
      <Overlay />
      {/* <Logo style={{ position: "absolute", bottom: 40, left: 40, width: 30 }} /> */}
    </div>
  );
};

export default StarsBackground;
