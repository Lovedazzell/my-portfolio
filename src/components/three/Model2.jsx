import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model({ setActions, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/art/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play a specific animation by name
    actions["Take 001"].play();

    setActions(actions); // for animaiton sett

    // Optional: Stop the animation when the component unmounts
    // return () => actions['fly'].stop()
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.12}
      position={[0, 0, -6]}
      rotation={[0, -0.5, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="outerdecoration" rotation={[0, 0, -0.087]} scale={1.048}>
            <mesh
              name="outerdecoration_Material_#3_0"
              castShadow
              receiveShadow
              geometry={nodes["outerdecoration_Material_#3_0"].geometry}
              material={materials.Material_3}
            />
          </group>
          <group
            name="Object001"
            position={[29.373, -18.223, 1.956]}
            scale={1.048}
          >
            <group name="Object_9" position={[-28.024, 18.098, -1.866]}>
              <mesh
                name="Object001_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object001_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object002"
            position={[33.735, -4.339, 2.005]}
            scale={1.048}
          >
            <group name="Object_12" position={[-32.179, 4.139, -1.912]}>
              <mesh
                name="Object002_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object002_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object003"
            position={[14.972, -2.375, -8.953]}
            rotation={[0, 0, -Math.PI / 6]}
            scale={1.048}
          >
            <group
              name="Object_15"
              position={[-13.501, -5.179, 8.54]}
              rotation={[0, 0, Math.PI / 6]}
            >
              <mesh
                name="Object003_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object003_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object004"
            position={[-11.074, -24.842, 2.067]}
            scale={1.048}
          >
            <group name="Object_18" position={[10.563, 23.696, -1.972]}>
              <mesh
                name="Object004_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object004_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object005"
            position={[6.496, -45.251, -9.367]}
            scale={1.048}
          >
            <group name="Object_21" position={[-6.196, 43.163, 8.935]}>
              <mesh
                name="Object005_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object005_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object006"
            position={[3.674, -33.278, -3.912]}
            scale={1.048}
          >
            <group name="Object_24" position={[-3.504, 31.743, 3.732]}>
              <mesh
                name="Object006_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object006_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object007"
            position={[-16.082, -3.117, -5.008]}
            scale={1.048}
          >
            <group name="Object_27" position={[15.34, 2.974, 4.777]}>
              <mesh
                name="Object007_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object007_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object008"
            position={[6.555, -4.268, -3.078]}
            scale={1.048}
          >
            <group name="Object_30" position={[-6.252, 4.071, 2.936]}>
              <mesh
                name="Object008_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object008_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object009"
            position={[25.951, -7.195, -4.921]}
            scale={1.048}
          >
            <group name="Object_33" position={[-24.632, 6.441, 4.694]}>
              <mesh
                name="Object009_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object009_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object010"
            position={[11.202, 12.864, -5.024]}
            scale={1.048}
          >
            <group name="Object_36" position={[-10.685, -12.271, 4.792]}>
              <mesh
                name="Object010_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object010_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Sphere002"
            position={[0, -1.263, 0]}
            rotation={[-Math.PI / 2, 0, 0.182]}
            scale={0.463}
          >
            <group name="Object_39" position={[63.225, -5.428, -4.604]}>
              <mesh
                name="Sphere002_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Sphere002_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Sphere004"
            rotation={[0.636, -0.427, -1.01]}
            scale={0.859}
          >
            <group name="Object_42" position={[33.591, 1.581, -48.305]}>
              <mesh
                name="Sphere004_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Sphere004_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Sphere005"
            rotation={[-2.053, -0.42, -0.835]}
            scale={1.212}
          >
            <group name="Object_45" position={[-14.09, 7.117, -18.261]}>
              <mesh
                name="Sphere005_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Sphere005_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object012"
            position={[-0.995, -0.687, -1.026]}
            rotation={[0, 0, -1.309]}
            scale={1.048}
          >
            <group name="Object_50" position={[0.949, 0.656, 0]}>
              <mesh
                name="Object012_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object012_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
          <group
            name="Object015"
            position={[23.048, 17.953, 0.603]}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.737}
          >
            <group name="Object_58" position={[0.94, 0.709, 0]}>
              <mesh
                name="Object015_Material_#3_0"
                castShadow
                receiveShadow
                geometry={nodes["Object015_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Cylinder004_Material_#3_0"
          castShadow
          receiveShadow
          geometry={nodes["Cylinder004_Material_#3_0"].geometry}
          material={materials.Material_3}
          scale={1.048}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/art/model.glb");
export default Model;
