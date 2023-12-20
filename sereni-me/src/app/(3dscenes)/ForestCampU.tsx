"use client";

import {useRef} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {Mesh} from "three";
import {GLTFLoader} from "three/examples/jsm/Addons.js";
import React from "react";
import {Bloom, EffectComposer, Vignette} from "@react-three/postprocessing";

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

export function ForestCampScene() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Canvas
				className="h-2xl w-2xl bg-gradient-to-r from-slate-500 to-blue-500"
				frameloop="demand"
				shadows="soft"
				camera={{
					position: [-5, 0, 5.5],
					fov: 45,
					near: 1,
					far: 1000,
					aspect: window?.innerWidth / window?.innerHeight,
				}}
			>
				<MeshComponent />
				<Stars
					radius={100}
					depth={50}
					count={5000}
					factor={4}
					saturation={0}
					fade
					speed={0.01}
				/>
				<ambientLight intensity={5} color={"#f2bd8f"} />
				<OrbitControls />

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
		</div>
	);
}
