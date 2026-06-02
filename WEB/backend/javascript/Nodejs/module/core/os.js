const os=require("os");
//return os platform
const platform=os.platform();
//return os version
const release=os.release();
//return current home directory
const homedir=os.homedir();
//return system temp directory
const tempdir=os.tmpdir();
//return os type
const ostype=os.type();
//returns architecture
const osarch=os.arch();
//returns free memory
const freememory=os.freemem();
;//return total memory
const totalmemory=os.totalmem()
//return cpu datails
const totalcpudetails=os.cpus();
//returns uptime
const uptime=os.uptime();
//returns network details
const networkinterfaces=os.networkInterfaces();
//suggest ideal threadpool
const availableparallelism=os.availableParallelism();
//returns user information
const userinfo=os.userInfo();
// os.EOL();//end of linemaker
console.log({platform,release,homedir,tempdir,ostype,osarch,freememory,totalmemory,totalcpudetails});
console.log({networkinterfaces,availableparallelism,userinfo});