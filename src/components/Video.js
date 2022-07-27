// Imports
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { disableVideo } from "../store/features/formigariSlice";

// Component
const Video = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Refs
	const videoRef = useRef();

	// Is video playing ?
	useEffect(() => {
		const isPlaying = videoRef.current.play();
		if (isPlaying !== undefined){
			isPlaying.then(() => {
			}).catch((error) => {
				dispatch(disableVideo());
			});
		}
	},[dispatch]);

	// Variables
	const videoURL = 'http://www.graphoeilmultimedia.com/reactDev/formigari/imagesWWW/video/marble.mp4';

	// Return
	return(
		<Wrapper>
			<video ref={ videoRef } src={ videoURL } type="video/mp4" autoPlay loop muted playsInline />
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
	overflow: hidden;
	video{
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

// Export
export default Video;