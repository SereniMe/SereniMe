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
	const fileUrl = "/free_isometric_cafe/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	gltf.scene.traverse(function (child) {
		if (child instanceof Mesh) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});

	return (
		<mesh ref={mesh} castShadow receiveShadow position={[0, -0.8, 0]}>
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

	const directionalLight = new DirectionalLight(color, 3);
	directionalLight.castShadow = true;
	directionalLight.shadow.isDirectionalLightShadow;
	directionalLight.position.set(position[0], position[1], position[2]);
	directionalLight.lookAt(new Vector3(1, 1, 1));
	directionalLight.shadow.bias -= 0.004;

	scene.add(directionalLight);
	scene.add(new DirectionalLightHelper(directionalLight));

	return null;
};

export function CafeScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="variance"
				camera={{
					position: [-5.5, 0, 5.5],
					fov: 10,
					near: 1,
					far: 1000,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={0.2} color={"#f2bd8f"} castShadow={true} />
				<DirectionalLightWithHelper position={[-5, 4, 5]} color="#f2bd8f" />
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
