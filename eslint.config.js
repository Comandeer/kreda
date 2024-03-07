import eslintConfig from '@comandeer/eslint-config';
import formattingConfig from '@comandeer/eslint-config/formatting';

const tsProject = [ './tsconfig.json' ];

export default [
	...eslintConfig( { tsProject } ),
	...formattingConfig( { tsProject } )
];
