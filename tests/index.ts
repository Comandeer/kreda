import test from 'ava';
import kreda, { Kreda } from '../src/index.js';
import { styleText } from 'node:util';

( [
	'reset',
	'bold',
	'italic',
	'underline',
	'strikethrough',
	'strikeThrough',
	'crossedout',
	'crossedOut',
	'hidden',
	'conceal',
	'dim',
	'faint',
	'overlined',
	'blink',
	'inverse',
	'doubleunderline',
	'framed',
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white',
	'gray',
	'grey',
	'blackBright',
	'redBright',
	'greenBright',
	'yellowBright',
	'blueBright',
	'magentaBright',
	'cyanBright',
	'whiteBright',
	'bgBlack',
	'bgRed',
	'bgGreen',
	'bgYellow',
	'bgBlue',
	'bgMagenta',
	'bgCyan',
	'bgWhite',
	'bgGray',
	'bgGrey',
	'bgBlackBright',
	'bgRedBright',
	'bgGreenBright',
	'bgYellowBright',
	'bgBlueBright',
	'bgMagentaBright',
	'bgCyanBright',
	'bgWhiteBright'
] satisfies Array<keyof Kreda> ).forEach( ( modifier ) => {
	test( `kreda.${ modifier }() is a function`, ( t ) => {
		t.is( typeof kreda[ modifier ], 'function' );
	} );

	test( `kreda.${ modifier }() returns correctly formatted text`, ( t ) => {
		const actual = kreda[ modifier ]( 'test' );
		const expected = styleText( modifier, 'test' );

		t.is( actual, expected );
	} );
} );

test( 'kreda supports multiple text parts', ( t ) => {
	const actual = kreda.red( 'red', 'text' );
	const expected = styleText( 'red', 'red text' )

	t.is( actual, expected );
} );

test( 'kreda supports multiple modifiers', ( t ) => {
	const actual = kreda.red.underline( 'test' );
	const expected = styleText( 'red', styleText( 'underline', 'test' ) );

	t.is( actual, expected );
} );

test( 'kreda correctly overrides modifiers', ( t ) => {
	const actual = kreda.red.blue( 'test' );
	const expected = styleText( 'red', styleText( 'blue', 'test' ) );

	t.is( actual, expected );
} );
