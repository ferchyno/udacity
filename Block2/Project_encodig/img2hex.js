// Require file system access
let fs = require('fs');

// Read file buffer
let imgReadBuffer = fs.readFileSync('test-pattern.jpeg');

// Encode image buffer to hex
let imgHexEncode = new Buffer.from(imgReadBuffer).toString('hex');

// Output encoded data to console
// console.log(imgHexEncode);

// Decode hex
let imgHexDecode = new Buffer.from(imgHexEncode, 'hex');

// Save decoded file file system
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
