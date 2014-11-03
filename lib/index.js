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

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	quantile = require( 'compute-quantile' );


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// INTERQUARTILE RANGE //

/**
* FUNCTION: iqr( arr )
*	Computes the interquartile range for an array.
*
* @param {Array} arr - array of values
* @returns {Number} interquartile range
*/
function iqr( arr, opts ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'iqr()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'iqr()::invalid input argument. Options should be an object.' );
		}
	} else {
		opts = {
			'sorted': false
		};
	}
	if ( !opts.sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
		opts.sorted = true;
	}
	return quantile( arr, 0.75, opts ) - quantile( arr, 0.25, opts );
} // end FUNCTION iqr()


// EXPORTS //

module.exports = iqr;
