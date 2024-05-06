const fs = require('fs');

if (process.argv.length ==5 ) {
    console.error('Usage: node ccwc.js -c <filename>');
    process.exit(1);
}
const filename = process.argv[3];

if(process.argv[2] == "-c"){
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.error(`Failed to read file: ${filename}`);
            process.exit(1);
        }
    
        const filesize = data.length;
    
        console.log(`${filesize} ${filename}`);
    });
}
else if(process.argv[2] == "-l"){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Failed to read file: ${filename}`);
            process.exit(1);
        }
    
        const numLines = data.split('\n').length - 1;
        console.log(`${numLines} ${filename}`);
    });
}
else if(process.argv[2] == "-w"){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Failed to read file: ${filename}`);
            process.exit(1);
        }
    
        
        const words = data.split(/\s+/);
        const totalWords = words.length;
        console.log(`${totalWords} ${filename}`);
    });
}
else if(process.argv[2] == "-m"){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Failed to read file: ${filename}`);
            process.exit(1);
        }
    
        
        
        const totalCharacters = data.length;
        console.log(`${totalCharacters} ${filename}`);
    });
}else{
    const filename2 = process.argv[2]
    fs.readFile(filename2, 'utf8', (err, data) => {
        if (err) {
            console.error(`Failed to read file: ${filename2}`);
            process.exit(1);
        }
        const filesize = data.length;
        const numLines = data.split('\n').length - 1;
        const words = data.split(/\s+/);
        const totalWords = words.length;
        console.log(` ${numLines} ${filesize} ${totalWords}  ${filename2}`);
    });
}
// function countTotalLines(input) {
//     let totalLines = 0;

//     // Read from standard input if no filename is provided
//     if (!input) {
//         process.stdin.setEncoding('utf8');
//         process.stdin.on('readable', () => {
//             const chunk = process.stdin.read();
//             if (chunk !== null) {
//                 totalLines += chunk.split('\n').length - 1;
//             }
//         });
//         process.stdin.on('end', () => {
//             // Output the total number of lines
//             console.log(totalLines);
//         });
//     } else {
//         // Read the file asynchronously
//         const fs = require('fs');
//         fs.readFile(input, 'utf8', (err, data) => {
//             if (err) {
//                 console.error(`Failed to read file: ${input}`);
//                 return;
//             }

//             // Count the total number of lines
//             totalLines = data.split('\n').length - 1;

//             // Output the total number of lines
//             console.log(totalLines);
//         });
//     }
// }

// const filename3 = process.argv[2];
// if (filename3) {
//     countTotalLines(filename);
// } else {
//     countTotalLines(null);
// }