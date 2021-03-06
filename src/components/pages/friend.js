import React from "react";
import { useParams } from "react-router-dom";

function friend() {
	// the refName is given in the url
	let { refName } = useParams();

	return (
		<div className="page">
			<h1 className="page-title">{refName}.</h1>
			<p>
				this is {refName} -{">"} 😎
				<br />
				{refName} is cool.
			</p>
		</div>
	);
}

export default friend;
