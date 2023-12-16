"use client";

import {useRef} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls, SpotLight} from "@react-three/drei";
import THREE, {
	Mesh,
	Vector3,
	RectAreaLight,
	DirectionalLight,
	DirectionalLightHelper,
} from "three";
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
	const fileUrl = "/low_poly_lighthouse_scene/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	return (
		<mesh ref={mesh} castShadow receiveShadow position={[-5, 0, 0]}>
			<primitive object={gltf.scene} />
		</mesh>
	);
}

const DirectionalLightWithHelper = ({
	color,
	position,
}: {
	position: number[];
	color: string;
}) => {
	const {scene} = useThree();

	const directionalLight = new DirectionalLight(color, 4);
	directionalLight.castShadow = true;
	directionalLight.shadow.isDirectionalLightShadow;
	directionalLight.position.set(position[0], position[1], position[2]);
	directionalLight.lookAt(new Vector3(1, 1, 1));

	scene.add(directionalLight);
	// scene.add(new DirectionalLightHelper(directionalLight));

	return null;
};

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

	const rectLight = new RectAreaLight(color, 2, 7, 10);
	rectLight.position.set(position[0], position[1], position[2]);
	rectLight.lookAt(new Vector3(1, 1, 1));
	scene.add(rectLight);
	// scene.add(new RectAreaLightHelper(rectLight));

	return null;
};

export function LighthouseScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [-7, -3.6, 9],
					fov: 70,
					near: 1,
					far: 100,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				{/* <ambientLight intensity={3} castShadow={true} /> */}
				<OrbitControls />
				<DirectionalLightWithHelper position={[-5, 2, 5]} color="#f2bd8f" />
				<EffectComposer>
					{/* <DepthOfField
						focusDistance={0} // where to focus
						focalLength={0.2} // focal length
						bokehScale={2} // bokeh size
					/> */}
					<Bloom
						luminanceThreshold={0.725}
						luminanceSmoothing={0.7}
						height={500}
					/>
					{/* <Noise opacity={0.02} /> */}
					<Vignette eskil={false} offset={0.1} darkness={0.5} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
