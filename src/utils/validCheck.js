const { INPUT } = require('../constants/constants');

const validCheck = {
  BridgeLength(userInput) {
    if (Number.isNaN(Number(userInput))) throw new Error();
    if (Number(userInput) < 3 || Number(userInput) > 20) throw new Error();
  },
  move(userInput) {
    if (userInput.toUpperCase() !== INPUT.UP && userInput.toUpperCase() !== INPUT.DOWN) {
      throw new Error();
    }
  },
};

module.exports = validCheck;
