function random(){
    const random = require('crypto-random')
    return random.range(0,10)
}
module.exports = random