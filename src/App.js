// Imports
import React, { useEffect } from "react";
import './css/displayMain.css';
import { useDispatch, useSelector } from "react-redux";
import { setIsTouch } from "./store/features/formigariSlice";
import { Preloader, Header, Video, AnimatedBackground, Slider } from "./components/";

// Modernizr
const Modernizr = window.Modernizr;

// Component
const App = () => {

	// Store
	const { isVideo, preloaderVisible, sliderPlaying } = useSelector((store) => { return store.formigari; });

	// Dispatch
	const dispatch = useDispatch();

	// Is touch ?
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<React.Fragment>

			{/* Preloader */}
			{
				preloaderVisible && <Preloader/>
			}
			{/* Preloader */}

			{/* Header */}
			<Header/>
			{/* Header */}

			{/* Main */}
			<main>

				{/* Video */}
				{
					isVideo && <Video/>
				}
				{/* Video */}

				{/* Animated background */}
				{
					!isVideo && <AnimatedBackground/>
				}
				{/* Animated background */}

				{/* Slider */}
				{
					sliderPlaying && <Slider/>
				}
				{/* Slider */}

			</main>
			{/* Main */}

		</React.Fragment>
	);

};

// Export
export default App;