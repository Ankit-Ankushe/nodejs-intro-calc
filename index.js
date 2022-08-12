const add = require("./functions/add");
const random = require("./functions/random");
const sin = require("./functions/sin");
const sub = require("./functions/sub");
const mul = require("./functions/mul");
const div = require("./functions/div");
const tan = require("./functions/tan");
const cos = require("./functions/cos");

const arg = process.argv.slice(2)
switch (arg[0]) {
    case 'add': console.log(add(Number(arg[1]), Number(arg[2])))
        break;
    case 'sub': console.log(sub(Number(arg[1]), Number(arg[2])))
        break;
    case 'mult': console.log(mul(Number(arg[1]), Number(arg[2])))
        break;
    case 'divide': console.log(div(Number(arg[1]), Number(arg[2])))
        break;
    case 'sin': console.log(sin(Number(arg[1])))
        break;
    case 'cos': console.log(cos(Number(arg[1])))
        break;
    case 'tan': console.log(tan(Number(arg[1])))
        break;
    case 'random': console.log(random())
        break;
    default:
        break;
}