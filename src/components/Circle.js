// Imports
import React from "react";

// Component
const Circle = React.forwardRef((props, ref) => {

	// Return
	return(
		<svg ref={ ref } xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44" enableBackground="new 0 0 44 44" xmlSpace="preserve"><circle fill="none" stroke="#CCCCCC" strokeWidth="2" strokeMiterlimit="10" cx="22" cy="22" r="18"/><path className="animatedCircle" fill="none" stroke="#666666" strokeWidth="2" strokeMiterlimit="10" d="M23.689 4.079C32.84 4.931 40 12.63 40 22c0 9.941-8.059 18-18 18 -9.94 0-18-8.059-18-18 0-9.499 7.359-17.279 16.687-17.953"/></svg>
	);

});

// Export
export default Circle;