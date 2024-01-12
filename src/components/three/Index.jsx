import React, { useEffect, useRef, useState } from "react";
import { angleToRadius } from "../../utils/angle";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";
import Model from "./Model";
import { useFrame } from "@react-three/fiber";

function Index() {
  const orbitControlesRef = useRef(null);

  const [modelActions, setModelActions] = useState(null); // for animaiton play  set

  useEffect(() => {
    if (modelActions && modelActions["Animation"]) {
      modelActions["Animation"].play();
    }
  }, []);

  // run after every single frame
  useFrame((state) => {
    // console.log(state.mouse)
    if (!!orbitControlesRef.current) {
      // console.log(orbitControlesRef.current)
      const { x, y } = state.mouse;

      // change camera accouding to mouse rotation
      orbitControlesRef.current.setAzimuthalAngle(-x * angleToRadius(90));

      // 0.5 setup initial frame by adding angle valuesin y direction
      orbitControlesRef.current.setPolarAngle(
        (y + 1.2) * angleToRadius(90 - 30)
      );
      orbitControlesRef.current.update();
    }
  });

  return (
    <>
      {/* make camera default */}
      <PerspectiveCamera makeDefault position={[0, 3, 10]} />

      {/* camera focus on mess with orbit cotroll */}
      <OrbitControls ref={orbitControlesRef} />

      {/* <Model onClick={handleFlyAnimation} setActions={setModelActions} /> */}
      <Model setActions={setModelActions} />

      <ambientLight args={["#FFFFFF", 8]} />
      <spotLight args={["red", 20]} castShadow position={[1, 2.5, 1]} />
      <spotLight args={["blue", 20]} castShadow position={[1, 1, 1]} />
      <spotLight args={["purple", 20]} castShadow position={[1, 0, 1]} />

      {/* args color , intensity */}
      <directionalLight args={["yellow", 2]} position={[0, 1, 5]} />
      <pointLight args={["red", 20]} position={[1, 1, 5]} />
    </>
  );
}

export default Index;

// npx vite dev
