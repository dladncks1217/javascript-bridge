const { INPUT } = require('../constants/constants');

const getBridgeResult = {
  upFail(nowstate, bridge) {
    const state = Number(nowstate);
    const result = [bridge[0].slice(0, state), bridge[1].slice(0, state)];
    result[0][state] = INPUT.WRONG;
    result[1][state] = INPUT.BLANK;
    return result;
  },

  downFail(nowstate, bridge) {
    console.log(nowstate);
    const state = Number(nowstate);
    const result = [bridge[0].slice(0, state), bridge[1].slice(0, state)];
    result[0][state] = INPUT.BLANK;
    result[1][state] = INPUT.WRONG;
    return result;
  },

  success(state, bridge) {
    const result = [bridge[0].slice(0, state + 1), bridge[1].slice(0, state + 1)];
    return result;
  },
};

module.exports = getBridgeResult;
