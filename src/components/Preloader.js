// Imports
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { hidePreloader, startSlider } from "../store/features/formigariSlice";
import gsap from "gsap";
import Logo from "./Logo";

// Component
const Preloader = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Refs
	const preloaderRef = useRef();
	const logoPreloader = useRef();
	const tlLogo = useRef();
	
	// didMount
	useEffect(() => {
		// Variables
		const lettresPreloaderDOM = logoPreloader.current.querySelectorAll('.letter');
		// Remove preloader
		const removePreloader = () => {
			dispatch(startSlider());
			dispatch(hidePreloader());
		};
		// Timeline
		tlLogo.current = gsap.timeline({ onComplete:removePreloader });
		tlLogo.current
		.set(lettresPreloaderDOM, { y:-100, fill:'rgba(255,255,255,0.2)' })
		.set('.logoContainer', { display:'block' })
		.to(lettresPreloaderDOM, { y:0, duration:0.3, stagger:{ each:0.05} })
		.add('lettersOnStage')
		.to(lettresPreloaderDOM, { y:100, duration:0.3, stagger:{ each:0.05 } },'lettersOnStage+=0.5')
		.to(preloaderRef.current, { opacity:0, duration:0.6 });
		// Clean up
		return () => {
			tlLogo.current.kill();
		};
	},[dispatch]);

	// Return
	return(
		<Wrapper ref={ preloaderRef }>
			<div className="logoContainer">
				<Logo ref={ logoPreloader }/>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--blackBackground);
	z-index: 999;
	.logoContainer{
		display: none;
		position: absolute;
		width: 80%;
		max-width: 310px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
`;

// Export
export default Preloader;