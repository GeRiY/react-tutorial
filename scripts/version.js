const fs = require('fs');
const packageJSONRoute = process.cwd() + '/package.json';
const packageJSON = require(packageJSONRoute);

// console.log('Checking for tgz files...');
// console.log();
// // We are in library root
const rootDir = process.cwd();
// const files = fs.readdirSync(rootDir);
// for (let f of files) {
// 	if (f.indexOf('.tgz') > -1) {
// 		console.log(`DELETING ${f}`);
// 		fs.unlinkSync(f);
// 	}
// }
// console.log();
// console.log('Checking version file...');
const versionFilePath = rootDir + '/config/version.json';
const versionFile = fs.existsSync(versionFilePath);
if (versionFile) {
	const version = require(versionFilePath);
	switch (process.env.RELEASE_LEVEL) {
		case 'major':
			version.major = version.major + 1;
			version.minor = 0;
			version.patch = 0;
			break;
		case 'minor':
			version.minor = version.minor + 1;
			version.patch = 0;
			break;
		case 'patch':
			version.patch = version.patch + 1;
			break;
		default:
			break;
	}
	const newVersion = `${version.major}.${version.minor}.${version.patch}`;
	console.log();
	console.log(`Modifying version file. New version: ${newVersion}`);
	fs.writeFileSync(versionFilePath, JSON.stringify(version));
	packageJSON.version = newVersion;
	console.log();
	console.log(`Modifying package.json`);
	console.log();
	fs.writeFileSync(packageJSONRoute, JSON.stringify(packageJSON));
} else {
	const version = {
		major: 0,
		minor: 1,
		patch: 0,
	};
	const newVersion = `${version.major}.${version.minor}.${version.patch}`;
	console.log();
	console.log('Creating version file...');
	fs.writeFileSync(versionFilePath, JSON.stringify(version));
	packageJSON.version = newVersion;
	console.log();
	console.log(`Modifying package.json`);
	console.log();
	fs.writeFileSync(packageJSONRoute, JSON.stringify(packageJSON));
}
