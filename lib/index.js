/**
*
*	COMPUTE: iqr
*
*
*	DESCRIPTION:
*		- Computes the interquartile range for an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: iqr( arr )
	*	Computes the interquartile range for an array.
	*
	* @param {Array} arr - array of values
	* @returns {Number} interquartile range
	*/
	function iqr( arr ) {
		var vec = arr.slice(),
			low,
			high;

		// Sort the vector:
		vec.sort( function sort( a, b ) {
			return a - b;
		});

		low = quantile( vec, 0.25 );
		high = quantile( vec, 0.75 );
		
		return high - low;
	} // end FUNCTION iqr()

	/**
	* FUNCTION: quantile( vector, percent )
	*	Finds a quantile value.
	*
	* @private
	* @param {Array} vector - 1d array
	* @param {Number} percent - quantile percent [0,1]
	* @returns {Number} quantile value
	*/
	function quantile( vector, percent ) {
		var numValues = vector.length,
			id, value;

		// Calculate the vector index marking the quantile:
		id = ( numValues * percent ) - 1;

		// Is the index an integer?
		if ( id === Math.floor( id ) ) {
			// Value is the average between the value at id and id+1:
			value = ( vector[ id ] + vector[ id+1 ] ) / 2.0;
		} else {
			// Round up to the next index:
			id = Math.ceil( id );
			value = vector[ id ];
		}
		return value;
	} // end FUNCTION quantile()


	// EXPORTS //

	module.exports = iqr;

})();