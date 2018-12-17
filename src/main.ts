import {ProgramRunner} from './ProgramRunner';
import fs = require('fs');

let imageFileLocation = '/home/marshall/dev/github/lc3-2048/2048.obj';
let imageData = fs.readFileSync(imageFileLocation);
let imageDataUInt16 = new Uint16Array(imageData.length/2);
for (var i = 0; i < imageData.length; i += 2) {
    let uint16 = imageData[i] << 8 | imageData[i+1];
    imageDataUInt16[i/2] = uint16;
}

let runner = new ProgramRunner([]);
runner.readImage(imageDataUInt16);
runner.run();