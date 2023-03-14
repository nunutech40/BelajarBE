const fs = require('fs');

const readableStream = fs.createReadStream('stream/input.txt', {
    highWaterMark: 10
});

let textReaded = '';
readableStream.on('readable', () => {
    try {
        const chunk = readableStream.read();
        if (chunk !== null) {
            textReaded += chunk.toString();
        }
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    const writableStream = fs.createWriteStream('stream/output.txt');
    writableStream.write(textReaded);
});