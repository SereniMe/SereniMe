"use client";

import {useRef} from "react";
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Mesh, Vector3, PointLight, PointLightHelper} from "three";
import {GLTFLoader} from "three/examples/jsm/Addons.js";
import React from "react";

function MeshComponent() {
	const fileUrl = "/low_poly_winter_scene/scene.gltf";
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	gltf.scene.traverse(function (child) {
		if (child instanceof Mesh) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});

	return (
		<mesh ref={mesh} castShadow receiveShadow>
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

	const pointLight = new PointLight(color, 400);
	pointLight.castShadow = true;
	pointLight.position.set(position[0], position[1], position[2]);
	pointLight.lookAt(new Vector3(1, 1, 1));
	pointLight.shadow.bias = -0.004;

	scene.add(pointLight);
	scene.add(new PointLightHelper(pointLight));

	return null;
};

export function WinterScene() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="percentage"
				camera={{
					position: [10, 3, 10],
					fov: 30,
					near: 1,
					far: 1000,

					aspect: window.innerWidth / window.innerHeight,
				}}
			>
				<MeshComponent />
				<ambientLight intensity={0.1} color={"#fffafa"} />
				<OrbitControls />
				{/* <RectArealightWithHelper position={[10, 15, 10]} color="white" /> */}

				<PointLightWithHelper position={[10, 15, 10]} color="white" />
				{/* <EffectComposer>
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
				</EffectComposer> */}
			</Canvas>
		</div>
	);
}
