const {exec} = require("child_process");
const { stdout, stderr } = require("process");


exec("cd .." ,(error,stdout,stderr) =>{
    console.log("comming to main foldar ")
})
exec("npm install" , (error,stderr,stdout)=>{
    console.log("Started instlaling packeges")
})