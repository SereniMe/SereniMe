"use client";

import {useRef} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls, SpotLight} from "@react-three/drei";
import THREE, {Mesh, Vector3, RectAreaLight} from "three";
import {
	GLTFLoader,
	RectAreaLightHelper,
	RectAreaLightUniformsLib,
} from "three/examples/jsm/Addons.js";
import React from "react";
import {
	Autofocus,
	Bloom,
	DepthOfField,
	EffectComposer,
	Noise,
	Vignette,
} from "@react-three/postprocessing";

function MeshComponent() {
	const fileUrl = "/low_poly_winter_scene/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	useFrame(() => {
		mesh.current.rotation.y += 0.0001;
	});
	return (
		<mesh ref={mesh} castShadow receiveShadow>
			<primitive object={gltf.scene} />
		</mesh>
	);
}

const RectArealightWithHelper = ({
	position,
	color,
}: {
	position: number[];
	color: string;
}) => {
	// Besides the useThree hook, all of this is taken straight from one of the examples on threejs.org: https://threejs.org/examples/#webgl_lights_rectarealight.

	const {scene} = useThree();

	// This somehow changes the texture of the ground-plane and makes it more shiny? Very interesting
	RectAreaLightUniformsLib.init();

	const rectLight = new RectAreaLight(color, 15, 4, 10);
	rectLight.position.set(position[0], position[1], position[2]);
	rectLight.lookAt(new Vector3(1, 1, 1));
	scene.add(rectLight);
	scene.add(new RectAreaLightHelper(rectLight));

	return null;

	// ### BUG REPORT for using RectAreaLightHelper through useHelper ###
	// This is the way the drei docs would suggest using the RectAreaLightHelper, as I understand:
	//
	//    const rectAreaLight = useRef();
	//    useHelper(rectAreaLight, RectAreaLightHelper);
	//    return (
	//    <rectAreaLight
	//     ref={rectAreaLight}
	//     position={[-5, 5, 15]}
	//     width={4}
	//     height={10}
	//     color={"red"}
	//     intensity={5}
	// />
	// );

	// If I do it like this, Chrome throws an error:
	// > useHelper.js:24 Uncaught TypeError: helper.current.update is not a function
	//
	// This makes sense, as the RectAreaLightHelper class as defined in
	// RectAreaLightHelper.js doesnt have a method called update. Instead, it has a method `updateMatrixWorld`.
	// If I change this method's name to `update`, it no longer crashes, and the helper appears on screen.
	// Unfortunately, it doesn't map on to the actual the rectAreLight object and instead
	// seems to be stuck at around [0, 0, 0] in space.
	// (I wish I could fix this, but I don't even know where to start.)
};

export function WinterScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [10, 3, 10],
					fov: 30,
					near: 1,
					far: 1000,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={2.5} color={"#fffafa"} />
				<OrbitControls />
				{/* <RectArealightWithHelper position={[10, 15, 10]} color="white" /> */}
				<EffectComposer>
					<DepthOfField
						focusDistance={0} // where to focus
						focalLength={0.2} // focal length
						bokehScale={2} // bokeh size
					/>
					<Bloom
						luminanceThreshold={0.5}
						luminanceSmoothing={0.7}
						height={500}
					/>
					<Noise opacity={0.02} />
					<Vignette eskil={false} offset={0.1} darkness={0.5} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
