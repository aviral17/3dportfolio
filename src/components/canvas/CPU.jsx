// Check Notes.txt for Suspense, Canvas, etc
// Also npm i three,  If some error occurs then use npm i --legacy-peer-deps three
// React Three Fiber DOCS ---->https://www.npmjs.com/package/@react-three/drei (using) and  https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const CPU = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf"); // Inside public folder
  const computer = useGLTF("./desktop_pc_1/scene.gltf");
  //   const computer = useGLTF("./desktop_pc_2/scene.glb");

  // using mesh for Three JS model, and to see object we need light so using hemisphereLight,  pointLight is for that small portion of light on Monitor
  // We will see pc or object as soon as we use them inside Canvas

  const [screensm, setScreensm] = useState(
    window.matchMedia("(min-width: 501px) and (max-width: 1000px)").matches
  );

  const [screenmd, setScreenmd] = useState(
    window.matchMedia("(min-width: 1000px) and (max-width: 1535px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setScreensm(
        window.matchMedia("(min-width: 501px) and (max-width: 1000px)").matches
      );
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenmd(
        window.matchMedia("(min-width: 1000px) and (max-width: 1535px)").matches
      );
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1} // dark/bright light on PC
        castShadow
        shadow-mapSize={1024}
      />
      {/* <group position={[-1, 0, 3]}> */}
      <group position={screenmd ? [-1, 1.5, 3] : [-1, 0, 3]}>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : screensm ? 0.9 : screenmd ? 1.3 : 1.5} // 0.7 : 0.75,| 0.7 : 1.5 |
          position={
            isMobile
              ? [0, -3.9, -3.1]
              : screensm
              ? [0, -4.25, -3.4]
              : screenmd
              ? [0, -5.25, -2.2]
              : [0, -4.25, -2.2]
          } // isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5] | [0, -3, -2.2] : [0, -4.25, -2.2]
          rotation={[0, 0.9, 0]} // rotation={[-0.01, -0.2, -0.1]} | {[0, 0.7, 0]}
        />
      </group>
    </mesh>
  );
};

// x,y,z axis  and fov=field of view (how wide we gonna see that object), all are experimental values which I think would be the best
// max min polar angle ---> To rotate it from the specific angle only
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenmd, setScreenmd] = useState(
    window.matchMedia("(min-width: 1000px) and (max-width: 1535px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenmd(
        window.matchMedia("(min-width: 1000px) and (max-width: 1535px)").matches
      );
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // position: [20, 3, 5], fov = 25
      gl={{ preserveDrawingBuffer: true }}
      className={`absolute 2xl:left-0 2xl:-bottom-[320px] 2xl:block p-4 ${
        screenmd && "-bottom-[290px]"
      } `}
    >
      {/* border-red-500 rounded-lg border-[5px] */}
      {/* OrbitControls to move the object left and right */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CPU isMobile={isMobile} />
      </Suspense>

      {/* Check Notes.txt for Preload */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
