// Imports
import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeSliderIndex } from "../store/features/formigariSlice";
import SliderItem from "./SliderItem";

// Component
const Slider = () => {

	// Store
	const { sliderImagesDOM } = useSelector((store) => { return store.formigari });

	// Dispatch
	const dispatch = useDispatch();

	// Show next image slider
	// With useCallback this function won't be re-writed
	// on each component, store changes, ... 
	// (Here it's toggleHeader which trigger a global re-render)
	// It'll be re-writed only when props 
	// of SliderItem will change !!!
	const nextImageSlider = useCallback(() => {
		dispatch(changeSliderIndex());
	},[dispatch]);

	// Return
	return(
		<Wrapper>
			{
				sliderImagesDOM.map((slider) => {
					return <SliderItem key={ slider.id } { ...slider } nextImageSlider={ nextImageSlider }/>
				})
			}
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
`;

// Export
export default Slider;