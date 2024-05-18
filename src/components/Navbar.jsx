import { useState } from "react";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
		<nav className="w-full flex py-6 justify-between items-center">
			<div className="w-[30%]" />
			<ul className="list-none sm:flex hidden justify-between items-center flex-1 ">
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
			<div className="w-[30%]" />
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						<li className="navbar">
							<a href="">Home</a>
						</li>
						<li className="navbar">
							<a href="">About</a>
						</li>
						<li className="navbar">
							<a href="">Contacts</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar