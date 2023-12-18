"use client";

import {useRef} from "react";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {PointerLockControls} from "@react-three/drei";
import {Mesh, Vector3, DirectionalLight} from "three";
import {GLTFLoader} from "three/examples/jsm/Addons.js";
import React from "react";
import {Bloom, EffectComposer, Vignette} from "@react-three/postprocessing";
import Image from "next/image";

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

let light = 0;
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

	if (light == 0) {
		scene.add(directionalLight);
		light++;
	}
	// scene.add(new DirectionalLightHelper(directionalLight));

	return null;
};

export function LighthouseScene() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-bl from-blue-200 to-yellow-200"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [-7, -3.6, 9],
					fov: 50,
					near: 1,
					far: 100,
					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={1} />
				<PointerLockControls selector="#button" />
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
