

const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

fs.writeFileSync('file.txt', 'Hello World');
fs.appendFileSync('file.txt', '\nNew Line');
fs.copyFileSync('file.txt', 'copy.txt');
fs.renameSync('file.txt', 'newfile.txt');
fs.truncateSync('file.txt', 5); // keeps first 5 chars
fs.unlinkSync('file.txt');

fs.mkdirSync('myFolder');
fs.rmdirSync('myFolder');
fs.rmSync('myFolder', { recursive: true, force: true });
const files = fs.readdirSync('.');
console.log(files);

const stats1 = fs.statSync('file.txt');
console.log(stats1.isFile());

const stats2 = fs.lstatSync('file.txt');
const fd = fs.openSync('file.txt', 'r');
const stats3 = fs.fstatSync(fd);
fs.closeSync(fd);

fs.chmodSync('file.txt', 0o644);
fs.chownSync('file.txt', uid, gid); // Linux/Mac only

fs.linkSync('file.txt', 'hardlink.txt');
fs.symlinkSync('file.txt', 'symlink.txt');
const link = fs.readlinkSync('symlink.txt');
console.log(link);

const fd1 = fs.openSync('file.txt', 'r');
const buffer = Buffer.alloc(10);
fs.readSync(fd1, buffer, 0, 10, 0);
console.log(buffer.toString());
fs.writeSync(fd1, 'Hello');
fs.closeSync(fd);

if (fs.existsSync('file.txt')) {
    console.log('File exists');
}
fs.accessSync('file.txt', fs.constants.R_OK);
const path = fs.realpathSync('file.txt');
console.log(path);

fs.watchFile('file.txt', () => {
    console.log('File changed');
});

fs.unwatchFile('file.txt');