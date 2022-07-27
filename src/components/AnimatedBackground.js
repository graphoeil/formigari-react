// Imports
import React from "react";
import styled from "styled-components";

// Component
const AnimatedBackground = () => {

	// Return
	return <Wrapper/>

};

// Styled
const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3d3d3d+0,d3d3d3+36,222222+100 */
	background: #3d3d3d; /* Old browsers */
	background: -moz-linear-gradient(45deg,  #3d3d3d 0%, #d3d3d3 36%, #222222 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(45deg,  #3d3d3d 0%,#d3d3d3 36%,#222222 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(45deg,  #3d3d3d 0%,#d3d3d3 36%,#222222 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	background-size: 500%;
	animation: animeBackground 25s ease infinite;
	@keyframes animeBackground {
		0%{ background-position: 0 50%; }
		50%{ background-position: 100% 50%; }
		100%{ background-position: 0 50%; }
	}
`;

// Export
export default AnimatedBackground;