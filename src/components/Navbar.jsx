import { useState } from "react"

import {close, logo, menu } from "../assets"


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
		<nav className="w-full flex py-6 justify-between items-center">
			<img src={logo} alt="logo" />

			<ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
				<li className="navbar mr-10 ">
					<a href="">Home</a>
				</li>
				<li className="navbar mr-10">
					<a href="#about">About</a>
				</li>
				<li className="navbar">
					<a href="#contact">Contacts</a>
				</li>
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center z-[100]">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[200px] rounded-xl sidebar`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						<li className="navbar-sidebar mr-10 mb-4 ">
							<a href="">Home</a>
						</li>
						<li className="navbar-sidebar mr-10 mb-4">
							<a href="#about">About</a>
						</li>
						<li className="navbar-sidebar ml-[-20px]">
							<a href="#contact">Contacts</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar

