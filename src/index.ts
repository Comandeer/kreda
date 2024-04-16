import { styleText } from 'node:util';
import allowedModifiers from './modifiers.js';

type KredaModifiers = {
	[ k in typeof allowedModifiers[ number ] ]: Kreda;
};

export type Kreda = KredaModifiers & ( ( ...text: Array<string> ) => string );

export default createProxy( [] );

function createProxy( modifiers: Array<string> ): Kreda {
	return new Proxy( () => {}, {
		get( target: Kreda, property: string ): Kreda | undefined {
			if ( !allowedModifiers.includes( property as unknown as typeof allowedModifiers[ number ] ) ) {
				throw createReferenceError( property );
			}

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

function createReferenceError( modifier: string ): ReferenceError {
	const availableModifiers = allowedModifiers.join( ', ' );

	return new ReferenceError(
		`Passed '${ modifier }' modifier is incorrect. Modifier must be one of the ${ availableModifiers }.`
	);
}
