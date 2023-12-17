"use client";

import {useRef} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls, PointerLockControls, SpotLight} from "@react-three/drei";
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
import Image from "next/image";

function MeshComponent() {
	const fileUrl = "/low-poly_camp/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	return (
		<mesh ref={mesh} castShadow receiveShadow position={[0, -1.1, 0]}>
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

export function ForestCampScene() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [-5, 0, 5.5],
					fov: 48,
					near: 1,
					far: 1000,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={5} color={"#f2bd8f"} castShadow={true} />
				<PointerLockControls selector="#button" />
				{/* <RectArealightWithHelper position={[-5, 2, 5]} color="#f2bd8f" /> */}
				<EffectComposer>
					{/* <DepthOfField
						focusDistance={0} // where to focus
						focalLength={0.2} // focal length
						bokehScale={2} // bokeh size
					/> */}
					<Bloom
						luminanceThreshold={0.55}
						luminanceSmoothing={0.2}
						height={100}
					/>
					{/* <Noise opacity={0.02} /> */}
					<Vignette eskil={false} offset={0.1} darkness={0.5} />
				</EffectComposer>
			</Canvas>
			<div className="w-full flex justify-end">
				<button id="button">
					<Image
						src="/3dcontrolTip.png"
						width={600}
						height={200}
						alt="3D: Click to Control | 'Esc' to release"
						className="h-20 w-[15rem] -translate-y-20"
					/>
				</button>
			</div>
		</div>
	);
}
