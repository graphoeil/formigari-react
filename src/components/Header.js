// Imports
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeader } from "../store/features/formigariSlice";
import gsap from "gsap";
import Logo from "./Logo";

// Component
const Header = () => {

	// Store
	const { headerVisible } = useSelector((store) => { return store.formigari; });

	// Dispatch
	const dispatch = useDispatch();

	// Refs
	const logoRef = useRef();
	const barBtnRef = useRef();
	const innerRef = useRef();
	const tlHeader = useRef();

	// didMount
	useEffect(() => {
		// Variables
		const bar1 = barBtnRef.current.querySelectorAll('span')[0];
		const bar2 = barBtnRef.current.querySelectorAll('span')[1];
		const bar3 = barBtnRef.current.querySelectorAll('span')[2];
		const letterF = logoRef.current.getElementById('F');
		const letters = logoRef.current.querySelectorAll('.letter');
		const navBtns = innerRef.current.querySelectorAll('.navBtn');
		const adress = innerRef.current.querySelector('.adress');
		const spanAdress = adress.querySelectorAll('span');
		// Timeline
		tlHeader.current = gsap.timeline({ paused:true, onReverseComplete:() => { dispatch(toggleHeader()); } });
		gsap.set(letters, { y:-100 });
		gsap.set(letterF, { y:0, fill:'rgba(255,255,255,0.2)' });
		gsap.set(navBtns, { y:-30, alpha:0 });
		gsap.set(spanAdress, { y:30, alpha:0 });
		tlHeader.current
		.to(bar1, { duration:0.3, rotation:405, top:'5px' },'0')
		.to(bar2, { duration:0.3, alpha:0 },'0')
		.to(bar3, { duration:0.3, rotation:-405, top:'5px' },'0')
		.to(innerRef.current, { duration:0.3, left:'0px', ease:'none' },'0')
		.add('croix')
		.to(letterF, { duration:0.3, fill:'rgba(34,34,34,1)' },'croix')
		.to(letters, { duration:0.3, y:0, stagger:{ each:0.05 } },'croix')
		.to(navBtns, { duration:0.3, y:0, alpha:1, stagger:{ each:0.05 } })
		.to(spanAdress, { duration:0.3, y:0, alpha:1, stagger:{ each:0.03 } });
		// Clean up
		return () => {
			tlHeader.current.kill();
		};
	},[dispatch]);

	// Show / hide header
	const showHideHeader = () => {
		if (headerVisible){
			tlHeader.current.timeScale(2).reverse();
		} else {
			dispatch(toggleHeader());
			tlHeader.current.timeScale(1).play();
		}
	};

	// Return
	return(
		<Wrapper className={ headerVisible ? 'open' : '' }>

			{/* Bar btn */}
			<div className="barBtn" ref={ barBtnRef } onClick={ showHideHeader }>
				<span></span><span></span><span></span>
			</div>
			{/* Bar btn */}

			{/* Logo */}
			<div className="logo">
				<Logo ref={ logoRef }/>
			</div>
			{/* Logo */}

			{/* Inner nav and address */}
			<div className="inner" ref={ innerRef }>
				<nav>
					<button className="bigBtn navBtn">About us</button>
					<button className="bigBtn navBtn">Projects</button>
					<button className="bigBtn navBtn">Materials</button>
					<button className="navBtn">Magazine</button>
					<button className="navBtn">Contact</button>
				</nav>
				<div className="adress">
					<span>
						<p>Phone +39 045 6266811</p>
						<p>Fax +39 045 6260870</p>
					</span>
					<span>
						FORMIGARI SRL<br/>
						VAT 04346170238
					</span>
					<span>
						<button>Privacy</button> - <button>Credits</button>
					</span>
				</div>
			</div>
			{/* Inner nav and address */}

			{/* Language */}
			<button className="language">IT</button>
			{/* Language */}

		</Wrapper>
	);

};

// Styled
const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	max-width: 400px;
	z-index: 99;
	&.open{
		width: 100%;
	}
	.barBtn{
		position: absolute;
		top: 40px;
		left: 30px;
		width: 20px;
		height: 14px;
		z-index: 2;
		cursor: pointer;
		span{
			display: block;
			position: absolute;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: var(--lightGrey);
			&:nth-of-type(1){ top: 0; }
			&:nth-of-type(2){ top: 6px; }
			&:nth-of-type(3){ top: 12px; }
		}
	}
	.logo{
		display: inline-block;
		position: absolute;
		top: 37px;
		left: 60px;
		width: 245px;
		z-index: 2;
	}
	.inner{
		position: absolute;
		top: 0;
		left: -400px;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 1;
		nav{
			position: absolute;
			top: 45%;
			left: 30px;
			transform: translateY(-50%);
			button{
				display: block;
				width: 100%;
				padding: 0;
				font-family: var(--oldTT);
				font-size: 24px;
				text-align: left;
				background-color: transparent;
				color: var(--middleBlackTransparent);
				border: none;
				&:last-of-type{
					margin: 0;
				}
				&.bigBtn{
					font-size: 36px;
				}
				@media only screen and (orientation: portrait){
					margin: 0 0 10px 0;
				}
				/* For iPhone XR in landscape mode */
				@media only screen and (min-width:768px) and (orientation: portrait){
					margin: 0 0 20px 0;
					font-size: 30px;
					&.bigBtn{
						font-size: 42px;
					}
				}
				@media only screen and (min-width:1024px){
					margin: 0 0 20px 0;
					font-size: 30px;
					&.bigBtn{
						font-size: 42px;
					}
				}
			}
		}
		.adress{
			position: absolute;
			left: 30px;
			bottom: 30px;
			span{
				display: block;
				margin: 10px 0 0 0;
				font-family: var(--lato);
				font-size: 12px;
				line-height: 1.3em;
				&:nth-of-type(odd){
					color: var(--middleBlackTransparent);
				}
				&:nth-of-type(even){
					color: var(--matteBlack);
				}
				button{
					display: inline-block;
					padding: 0;
					border: none;
					background-color: transparent;
					font-family: var(--lato);
					text-align: left;
					text-transform: uppercase;
					font-size: 12px;
					color: var(--middleBlackTransparent);
				}
			}
		}
	}
	html.no-touchevents & .inner{
		button{
			transition: 0.5s color ease-in-out;
		}
		button:hover{
			color: var(--matteBlack);
		}
	}
	.language{
		position: absolute;
		right: 30px;
		bottom: 30px;
		width: 30px;
		height: 30px;
		z-index: 2;
		padding: 0;
		border: 1px solid var(--lightBlackTransparent);
		color: var(--lightBlackTransparent);
		background-color: transparent;
		font-family: var(--lato);
		font-size: 10px;
		line-height: 28px;
		letter-spacing: 1px;
		transition: 0.5s border ease-in-out, 0.5s color ease-in-out;
	}
	html.no-touchevents & .language:hover{
		color: var(--matteBlack);
		border: 1px solid var(--matteBlack);
	}
`;

// Export
export default Header;