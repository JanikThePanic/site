import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function openNav() {
	document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
	document.getElementById("mySidenav").style.height = "0";
}

// on mobile, when you click, menu should be gone
function checkForMobile() {
	if (window.innerWidth < 600) {
		closeNav();
	}
}

function navbar() {
	return (
		<div>
			<div id="mySidenav" className="nav" onClick={checkForMobile}>
				<div className="navList">
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/work">Work</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/thoughts">Thoughts</Link>
					<a href={process.env.PUBLIC_URL + "/assets/Resume.pdf"}>
						Resume
					</a>
					<Link to="/contact">Contact</Link>
					<Link className="closebtn" onClick={closeNav}>
						&times;
					</Link>
				</div>
			</div>

			{/* little menu button for mobile */}
			<span onClick={openNav}>
				<img
					className="openbtn"
					src={
						process.env.PUBLIC_URL +
						"/iconfinder_menu-alt_134216.svg"
					}
					alt=""
				/>
			</span>
			<div className="btnbox"></div>
		</div>
	);
}

export default navbar;
