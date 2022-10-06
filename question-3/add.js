const fs = require("fs");

// to create log files.
const createLogs = () => {
    const target = "./logs";
    //This function is used to synchronously check if a file already exists in the given path or not.
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }
    process.chdir(target);
    for (let i = 1; i <= 10; i++) {
        fs.writeFile(`log${i}.txt`, `File number ${i}`, (err) =>
            err ? console.error(`Error creating file 'log${i}.txt'`) : console.log(`Creating file 'log${i}.txt'`)
        );
    }
};


createLogs();