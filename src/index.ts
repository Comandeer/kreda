import { styleText } from 'node:util';

const validModifiers = [
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
] as const;

type KredaModifiers = {
	[ k in typeof validModifiers[ number ] ]: Kreda;
};

export type Kreda = KredaModifiers & ( ( ...text: Array<string> ) => string );

export default createProxy( [] );

function createProxy( modifiers: Array<string> ): Kreda {
	return new Proxy( () => {}, {
		get( target: Kreda, property: string ): Kreda {
			return createProxy( [ ...modifiers, property ] );
		},
		apply( target: Kreda, thisArg: unknown, args: Array<string> ): string {
			return style( modifiers, ...args );
		}
	} ) as unknown as Kreda;
}

function style( formats: Array<string>, ...textParts: Array<string> ): string {
	const text = textParts.join( ' ' );

	let styledText = text;

	for ( const format of formats.toReversed() ) {
		styledText = styleText( format, styledText );
	}

	return styledText;
}
