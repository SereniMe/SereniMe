"use client";
import Link from "next/link";
import ThemeChanger from "@/components/Darkswitch";
import Image from "next/image";
import {AvatarImg} from "./Avatar";

import {Fragment, useEffect, useState} from "react";
import {Menu, Transition} from "@headlessui/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const navigation = ["Home", "Sleep", "Stress & Anxiety", "Mindfullness"];

	return (
		<div className="w-auto mx-[10rem]">
			<nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
				<div>
					<Link href="/">
						<Image
							src="/serenimelogo2.png"
							width={160}
							height={160}
							alt="serenime Logo"
						></Image>
					</Link>
				</div>
				{/* menu  */}
				<div className="hidden text-center lg:flex lg:items-center">
					<ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
						{navigation.map((menu, index) => (
							<li className="mr-3 nav__item" key={index}>
								<Link
									href={`?find=${menu}`}
									className="inline-block hover:scale-110 transition ease-in-out duration-300 px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#5E7A8B] focus:text-[#5E7A8B] focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
								>
									{menu}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* <div className="hidden mr-3 space-x-4 lg:flex nav__item">
					<AvatarImg image="/monk.jpeg" />
					<Link
						href="/"
						className="px-6 py-2 text-white bg-[#6A99AC] rounded-md md:ml-5"
					>
						Continue to App
					</Link>

					<ThemeChanger />
				</div> */}

				<div className="hidden mr-3 space-x-4 lg:flex nav__item">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold dark:bg-[#6A99AC] text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
								Profile
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={`transform rotate-180 w-5 h-5 text-indigo-500`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 15.75l7.5-7.5 7.5 7.5"
									/>
								</svg>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										<p className="block px-4 py-[2px] text-lg text-gray-700">
											Name
										</p>
									</Menu.Item>
									<Menu.Item>
										<p className="block px-4 py-[2px] text-sm text-gray-700">
											Email
										</p>
									</Menu.Item>
								</div>
								<div className="py-1">
									<Menu.Item>
										{({active}) => (
											<Link
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}
											>
												Edit Profile
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({active}) => (
											<Link
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}
											>
												Favorites
											</Link>
										)}
									</Menu.Item>
								</div>

								<div className="py-1">
									<Menu.Item>
										{({active}) => (
											<Link
												href="/signin"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}
											>
												Sign Out
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>

					<ThemeChanger />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
