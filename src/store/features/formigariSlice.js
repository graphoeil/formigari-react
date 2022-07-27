// Imports
import { createSlice } from "@reduxjs/toolkit";

// Slider data
const sliderData = [
	{ id:1, title:'About us', html:'<b>Marble</b> is the beating heart <b>of an elegant tradition</b>', button:'Discover us' },
	{ id:2, title:'Projects', html:'Flexible <b>projects</b> lead to <b>artworks</b>', button:'Discover projects' },
	{ id:3, title:'Materials', html:'Different <b>materials</b> to satisfy <b>unique personalities</b>', button:'Discover materials' }
];

// Initial state
const initialState = {
	// UI
	isTouch:false,
	// Preloader
	preloaderVisible:true,
	// Header
	headerVisible:false,
	// Video
	isVideo:true,
	// Slider
	sliderPlaying:false,
	sliderIndex:0,
	sliderImages:sliderData,
	sliderImagesDOM:[sliderData[0]]
};

// Slice
const formigariSlice = createSlice({
	name:'formigari',
	initialState,
	reducers:{
		// Is touch ?
		setIsTouch:(state) => {
			state.isTouch = true;
		},
		// Hide preloader
		hidePreloader:(state) => {
			state.preloaderVisible = false;
		},
		// Toggle header
		toggleHeader:(state) => {
			state.headerVisible = !state.headerVisible;
		},
		// Disable video
		disableVideo:(state) => {
			state.isVideo = false;
		},
		// Start slider
		startSlider:(state) => {
			state.sliderPlaying = true;
		},
		// Change sliderIndex
		changeSliderIndex:(state) => {
			let newSliderIndex = state.sliderIndex + 1;
			if (newSliderIndex > 2){
				newSliderIndex = 0;
			}
			const newSliderImageDOM = [ state.sliderImages[newSliderIndex] ];
			return {
				...state,
				sliderIndex:newSliderIndex,
				sliderImagesDOM:newSliderImageDOM
			};
		}
	}
})

// Actions export
export const { setIsTouch, hidePreloader, toggleHeader, disableVideo, startSlider, changeSliderIndex } = formigariSlice.actions;

// Reducer export
export default formigariSlice.reducer;