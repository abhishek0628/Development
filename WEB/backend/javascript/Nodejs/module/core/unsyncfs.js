const fs=require('fs').promises
const data = await fs.readFile('file.txt', 'utf-8');
await fs.writeFile('file.txt', 'Hello');
await fs.appendFile('file.txt', '\nMore text');
await fs.copyFile('file.txt', 'copy.txt');
await fs.rename('copy.txt', 'new.txt');
await fs.truncate('file.txt', 5);
await fs.unlink('new.txt');
await fs.mkdir('myFolder');
await fs.rm('myFolder', { recursive: true, force: true });
const files = await fs.readdir('.');
const info = await fs.stat('file.txt');
const info2 = await fs.lstat('file.txt');
await fs.chmod('file.txt', 0o644);
await fs.chown('file.txt', 1000, 1000);
await fs.link('file.txt', 'hardlink.txt');
await fs.symlink('file.txt', 'symlink.txt');
const path = await fs.readlink('symlink.txt');

const file1 = await fs.open('file.txt', 'r');
await file1.close();

const file2 = await fs.open('file.txt', 'r');
const buffer = Buffer.alloc(10);
await file2.read(buffer, 0, 10, 0);
await file2.close();

const file3 = await fs.open('file.txt', 'w');
await file3.write('Hello');
await file3.close();

const stream = require('fs').createReadStream('file.txt');
stream.on('data', chunk => console.log(chunk.toString()));

const stream2 = require('fs').createWriteStream('file.txt');
stream2.write('Hello');
stream2.end();

require('fs').watch('file.txt', () => {
    console.log('File changed');
});
const real = await fs.realpath('file.txt');
await fs.access('file.txt');
