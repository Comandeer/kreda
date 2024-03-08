import { styleText } from 'node:util';

export interface Kreda {
	( ...text: Array<string> ): string;

	reset: Kreda;
	bold: Kreda;
	italic: Kreda;
	underline: Kreda;
	strikethrough: Kreda;
	strikeThrough: Kreda;
	crossedout: Kreda;
	crossedOut: Kreda;
	hidden: Kreda;
	conceal: Kreda;
	dim: Kreda;
	faint: Kreda;
	overlined: Kreda;
	blink: Kreda;
	inverse: Kreda;
	doubleunderline: Kreda;
	framed: Kreda;
	black: Kreda;
	red: Kreda;
	green: Kreda;
	yellow: Kreda;
	blue: Kreda;
	magenta: Kreda;
	cyan: Kreda;
	white: Kreda;
	gray: Kreda;
	grey: Kreda;
	blackBright: Kreda;
	redBright: Kreda;
	greenBright: Kreda;
	yellowBright: Kreda;
	blueBright: Kreda;
	magentaBright: Kreda;
	cyanBright: Kreda;
	whiteBright: Kreda;
	bgBlack: Kreda;
	bgRed: Kreda;
	bgGreen: Kreda;
	bgYellow: Kreda;
	bgBlue: Kreda;
	bgMagenta: Kreda;
	bgCyan: Kreda;
	bgWhite: Kreda;
	bgGray: Kreda;
	bgGrey: Kreda;
	bgBlackBright: Kreda;
	bgRedBright: Kreda;
	bgGreenBright: Kreda;
	bgYellowBright: Kreda;
	bgBlueBright: Kreda;
	bgMagentaBright: Kreda;
	bgCyanBright: Kreda;
	bgWhiteBright: Kreda;
}

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
