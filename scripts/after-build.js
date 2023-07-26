console.log('BUILD FINISHED');

const fs = require('fs');
const dtsFile = './src/components/MAIN/index.d.ts';
if (fs.existsSync(dtsFile)) {
	fs.copyFileSync(dtsFile, './dist/index.d.ts');
	console.log('d.ts file copied');
}
