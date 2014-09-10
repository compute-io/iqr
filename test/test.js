
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	iqr = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-iqr', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( iqr ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
				'5',
				5,
				true,
				undefined,
				null,
				NaN,
				function(){},
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				iqr( value );
			};
		}
	});

	it( 'should compute the interquartile range', function test() {
		var data, expected;

		// Quartiles: [4, 6]; iqr: 2
		data = [ 5, 6, 6, 4, 3, 3, 5, 7, 4, 7 ];
		expected = 2;

		assert.strictEqual( iqr( data ), expected );

		// Quartiles: [3, 7]; iqr: 4
		data = [ 1, 3, 5, 7 ];
		expected = 4;

		assert.strictEqual( iqr( data ), expected );
	});

});