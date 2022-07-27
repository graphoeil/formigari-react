// Imports
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Circle from "./Circle";

// DrawSVG and Splittext
const drawSVG = window.DrawSVGPlugin;
const SplitText = window.SplitText;
gsap.registerPlugin(drawSVG);

// Component
const SliderItem = ({ title, html, button, nextImageSlider }) => {

	// Refs
	const titleRef = useRef();
	const htmlRef = useRef();
	const buttonRef = useRef();
	const circleRef = useRef();
	const tlVisuel = useRef();

	// Animation
	useEffect(() => {

		// Variables
		const title = titleRef.current;
		const html = htmlRef.current;
		const button = buttonRef.current;
		const circle = circleRef.current;
		const animatedCircle = circle.querySelector('.animatedCircle');

		// Split text
		const htmlSplit = new SplitText(htmlRef.current, {
			type:'words'
		});
		htmlSplit.split({ type:'words' });

		// Timeline
		tlVisuel.current = gsap.timeline({ onComplete:nextImageSlider });
		tlVisuel.current
		.set(title, { y:-100 })
		.set(htmlSplit.words, { opacity:0, scale:2 })
		.set(button, { y:100 })
		.set(html, { opacity:1 })
		.to(title, { duration:0.5, y:0, opacity:1 })
		.to(htmlSplit.words, { duration:0.3, opacity:1, scale:1, stagger:{ each:0.1 } })
		.to(button, { y:0, opacity:1 })
		.fromTo(animatedCircle, { duration:0.1, drawSVG:'0' }, { drawSVG:'100%' })
		.add('firstDraw')
		.to(circle, { duration:0.5, opacity:1 },'firstDraw')
		.to(animatedCircle, { duration:4, drawSVG:'100% 100%' },'firstDraw')
		.to(circle, { duration:0.1, scale:1.2, ease:'bounce.out' })
		.to(circle, { duration:0.1, scale:1, ease:'bounce.out' })
		.add('heartBeat')
		.to(circle, { duration:0.1, scale:1.2, ease:'bounce.out' },'heartBeat')
		.to(circle, { duration:0.3, opacity:0, ease:'power4.out' },'heartBeat')
		.to(button, { duration:0.3, y:100, opacity:0 })
		.to(htmlSplit.words, { duration:0.2, opacity:0, scale:2, stagger:{ each:0.1 } },'heartBeat+=0.3')
		.to(title, { duration:0.3, y:-100, opacity:0 },'heartBeat+=0.7');
		
		// Clean up
		return () => {
			tlVisuel.current.kill();
		};

	},[nextImageSlider]);

	// Return
	return(
		<Wrapper>
			<div className="inner">
				<h2 ref={ titleRef }>{ title }</h2>
				<p ref={ htmlRef } dangerouslySetInnerHTML={ { __html:html } }></p>
				<button ref={ buttonRef }>{ button }</button>
				<Circle ref={ circleRef }/>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	.inner{
		display: inline-block;
		position: absolute;
		width: 80%;
		max-width: 600px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 2;
		h2{
			display: block;
			width: 100%;
			font-family: var(--lato);
			font-size: 11px;
			color: var(--lightGrey);
			text-transform: uppercase;
			opacity: 0;
			@media only screen and (min-width:768px){
				font-size: 13px;
			}
		}
		p{
			display: block;
			width: 100%;
			padding: 30px 0;
			font-family: var(--oldTT);
			font-size: 34px;
			font-weight: 400;
			line-height: 1.5em;
			color: var(--lightGrey);
			opacity: 0;
			& b{
				font-weight: 700;
				color: white;
			}
			@media only screen and (min-width:768px){
				font-size: 44px;
			}
			@media only screen and (min-width:1440px){
				font-size: 48px;
			}
		}
		button{
			display: block;
			position: relative;
			width: 150px;
			margin: 0 auto 40px auto;
			padding: 15px 0;
			background-color: transparent;
			border: 1px solid var(--whiteTransparent);
			font-family: var(--lato);
			font-size: 11px;
			text-transform: uppercase;
			color: var(--whiteTransparent);
			opacity: 0;
			&::after{
				content: '';
				display: block;
				position: absolute;
				top: 5px;
				left: 50%;
				transform: translateX(-50%);
				padding: 0;
				width: calc(100% + 10px);
				height: calc(100% - 10px);
				border: 1px solid var(--whiteTransparent);
			}
			@media only screen and (min-width:768px){
				width: 200px;
				font-size: 13px;
			}
		}
		svg{
			opacity: 0;
		}
	}
	html.no-touchevents & button{
		transition: 0.5s border ease-in-out, 0.5s color ease-in-out;
		&::after{
			transition: 0.5s border ease-in-out, 0.5s color ease-in-out, 0.5s padding ease-in-out;
		}
		&:hover{
			border: 1px solid var(--matteWhite);
			color: var(--matteWhite);
		}
		&:hover::after{
			border: 1px solid var(--matteWhite);
			padding: 0 10px;
		}
	}
`;

// Export
export default SliderItem;