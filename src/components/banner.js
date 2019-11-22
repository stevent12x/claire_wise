import React from 'react';
import './style/banner.css';

const Banner = () => (
	<div className={"text"}>
		<span className={"red"}><a href="#">C</a></span>
		<span className={"green"}><a href="#">L</a></span>
		<span className={"yellow"}><a href="#">a</a></span>
		<span><a href="#">i</a></span>
		<span><a href="#">R</a></span>
		<span className={"blue"}><a href="#">e</a></span>
		<span id={"space"}><a href="#"></a></span>
		<span className={"green"}><a href="#"></a>W</span>
		<span><a href="#"></a>i</span>
		<span><a href="#"></a>S</span>
		<span className={"blue"}><a href="#"></a>e</span>
		<div style={{clear: "both"}}></div>
	</div>
);
export {Banner};