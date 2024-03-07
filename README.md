# kreda

[![npm](https://img.shields.io/npm/v/kreda.svg)](https://npmjs.com/package/kreda)

[Chalk-like](https://www.npmjs.com/package/chalk) API for [Node native terminal text styling](https://nodejs.org/api/util.html#utilstyletextformat-text).

⚠️ Requires Node >-21.7.0. The feature is marked as experimental – that means this package also should be treated as such.

## Installation

```bash
npm install kreda --save
```

## Usage

```javascript
import kreda from 'kreda';

console.log( kreda.blue( 'Some blue text' ) );
console.log( kreda.bgBlack.green.underline( 'Some green underlined text on a black background' ) );
console.log( kreda.blue( 'Hello,', 'world!' ) );
// ↑ The same as
console.log( kreda.blue( 'Hello, world!' ) );
```

Refer to Node's documentation for [list of all available modifiers](https://nodejs.org/api/util.html#modifiers).
## License

See [LICENSE](./LICENSE) file for details.
