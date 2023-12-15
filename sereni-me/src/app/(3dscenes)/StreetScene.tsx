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
	const fileUrl = "/low_poly_stylized_city_block/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	return (
		<mesh ref={mesh} castShadow={true} receiveShadow={true}>
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

	const rectLight = new RectAreaLight(color, 100, 30, 30);
	rectLight.position.set(position[0], position[1], position[2]);
	rectLight.lookAt(new Vector3(1, 1, 1));
	rectLight.intensity = 15;
	rectLight.castShadow = true;
	scene.add(rectLight);
	// scene.add(new RectAreaLightHelper(rectLight));

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
				<ambientLight intensity={3} color={"#506886"} castShadow={true} />
				<OrbitControls />
				<RectArealightWithHelper position={[50, 40, -50]} color="#f2bd8f" />
				<RectArealightWithHelper position={[-25, 80, -80]} color="#f2bd8f" />
				<EffectComposer>
					{/* <DepthOfField
						focusDistance={0} // where to focus
						focalLength={0.2} // focal length
						bokehScale={2} // bokeh size
					/> */}
					<Bloom
						luminanceThreshold={0.15}
						luminanceSmoothing={0.2}
						height={500}
					/>
					{/* <Noise opacity={0.02} /> */}
					<Vignette eskil={false} offset={0.3} darkness={0.5} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
