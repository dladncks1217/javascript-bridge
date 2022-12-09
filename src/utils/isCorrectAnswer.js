const { INPUT } = require('../constants/constants');

const isCorrectAnswer = {
  Up(state, bridge) {
    if (bridge[0][state] === INPUT.RIGHT) return true;
    return false;
  },
  Down(state, bridge) {
    if (bridge[1][state] === INPUT.RIGHT) return true;
    return false;
  },
};

module.exports = isCorrectAnswer;
