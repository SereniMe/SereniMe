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
	const fileUrl = "/free_isometric_cafe/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	return (
		<mesh ref={mesh} castShadow receiveShadow position={[0, -0.7, 0]}>
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

	const rectLight = new RectAreaLight(color, 2, 7, 10);
	rectLight.position.set(position[0], position[1], position[2]);
	rectLight.lookAt(new Vector3(1, 1, 1));
	scene.add(rectLight);
	scene.add(new RectAreaLightHelper(rectLight));

	return null;
};

export function CafeScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [-5.5, 2, 5.5],
					fov: 10,
					near: 1,
					far: 1000,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={3} color={"#f2bd8f"} castShadow={true} />
				<OrbitControls />
				{/* <RectArealightWithHelper position={[-5, 2, 5]} color="#f2bd8f" /> */}
				<EffectComposer>
					{/* <DepthOfField
						focusDistance={0} // where to focus
						focalLength={0.2} // focal length
						bokehScale={2} // bokeh size
					/> */}
					<Bloom
						luminanceThreshold={0.25}
						luminanceSmoothing={0.2}
						height={500}
					/>
					{/* <Noise opacity={0.02} /> */}
					<Vignette eskil={false} offset={0.1} darkness={0.5} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
