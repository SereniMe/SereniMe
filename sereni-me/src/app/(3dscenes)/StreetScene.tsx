"use client";

import {useRef} from "react";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Mesh, Vector3, PointLight} from "three";
import {GLTFLoader} from "three/examples/jsm/Addons.js";
import React from "react";
import {Bloom, EffectComposer, Vignette} from "@react-three/postprocessing";

function MeshComponent() {
	const fileUrl = "/low_poly_stylized_city_block/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	return (
		<mesh ref={mesh} castShadow={true} receiveShadow={true}>
			<primitive object={gltf.scene} />
		</mesh>
	);
}

const PointLightWithHelper = ({
	color,
	position,
}: {
	position: number[];
	color: string;
}) => {
	const {scene} = useThree();

	const pointLight = new PointLight(color, 2000);
	pointLight.castShadow = true;
	pointLight.position.set(position[0], position[1], position[2]);
	pointLight.lookAt(new Vector3(1, 1, 1));
	pointLight.shadow.bias = -0.004;

	scene.add(pointLight);
	// scene.add(new PointLightHelper(pointLight));

	return null;
};

export function StreetScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-[#383838]"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [58, 8, 90],
					fov: 60,
					near: 1,
					far: 1000,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={1} color={"#506886"} castShadow={true} />
				<OrbitControls />
				<PointLightWithHelper position={[40, 20, -50]} color="#f2bd8f" />
				<PointLightWithHelper position={[40, 20, -25]} color="#f2bd8f" />
				<PointLightWithHelper position={[50, 20, 60]} color="#f2bd8f" />
				<PointLightWithHelper position={[-25, 55, -80]} color="#f2bd8f" />
				<EffectComposer>
					<Bloom
						luminanceThreshold={0.15}
						luminanceSmoothing={0.2}
						height={500}
					/>
					<Vignette eskil={false} offset={0.3} darkness={0.5} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
