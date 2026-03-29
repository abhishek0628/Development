const path=require("path");
// import path from "path";
const currentdir=__dirname;
const currentfile=__filename;
const filepath=path.join("folder/subfolder/data.txt");
const parsedata=path.parse(filepath);
const pathresolve=path.resolve(filepath);
const pathbase=path.basename(filepath);
const fileextension=path.extname(filepath);
const pathnormalize=path.normalize(filepath);
const dirname=path.dirname(filepath);

const from='/data/app/config';
const to='/data/app/logs/server.log';

console.log({currentdir,currentfile,filepath,parsedata,pathresolve,pathbase,fileextension});
 console.log(path.relative(from,to));

// import {fileURLToPath}from 'url';
// import {pathToFileURL} from 'node:url';
// const url=pathToFileURl('/home/alice/docs/report.txt');
// // const __filename=fileURLToPath(import.meta.url);
// // const __dirname=path.dirname(__filename);
// console.log(url.href);