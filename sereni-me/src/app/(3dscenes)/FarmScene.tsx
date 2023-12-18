"use client";

import {useRef} from "react";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Mesh, Vector3, DirectionalLight} from "three";
import {GLTFLoader} from "three/examples/jsm/Addons.js";
import React from "react";
import {Bloom, EffectComposer, Vignette} from "@react-three/postprocessing";

function MeshComponent() {
	const fileUrl = "/wheat_farm_at_sunset/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	gltf.scene.traverse(function (child) {
		if (child instanceof Mesh) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});

	return (
		<mesh ref={mesh} castShadow receiveShadow position={[0, -0.5, 0]}>
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
	directionalLight.shadow.bias -= 0.00002;

	scene.add(directionalLight);
	// scene.add(new DirectionalLightHelper(directionalLight));

	return null;
};

export function FarmScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-bl from-[#d1e7ce] to-[#f88e3d]"
				frameloop="demand"
				shadows="variance"
				camera={{
					position: [2, 0.2, -1],
					fov: 40,
					near: 0.1,
					far: 1000,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={0.2} color={"#f2bd8f"} castShadow={true} />

				<DirectionalLightWithHelper position={[5, 4, -5]} color="#f2bd8f" />
				<OrbitControls />
				<EffectComposer>
					{/* <DepthOfField
						focusDistance={0} // where to focus
						focalLength={0.2} // focal length
						bokehScale={2} // bokeh size
					/> */}
					<Bloom
						luminanceThreshold={0.55}
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
