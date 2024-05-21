const {execSync} = require('child_process');

try{
    const result = execSync(`dir /s /-c "W:/Udemy Projects/Project - File Explorer"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}