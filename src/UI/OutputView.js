const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  gameResultMessage() {
    Console.print(MESSAGE.GAME_RESULT);
  },

  inputLengthError() {
    Console.print(ERROR.LENGTH_INVALID);
  },

  moveError() {
    Console.print(ERROR.MOVE_INVALID);
  },

  retryError() {
    Console.print(ERROR.RETRY_INVALID);
  },

  printMap(bridge) {
    const upBridge = `[ ${String(bridge[0]).split(',').join(' | ')} ]`;
    const downBridge = `[ ${String(bridge[1]).split(',').join(' | ')} ]`;
    Console.print(upBridge + '\n' + downBridge);
  },

  printResult(bridge, isSuccessed, trycount) {
    const upBridge = `[ ${String(bridge[0]).split(',').join(' | ')} ]`;
    const downBridge = `[ ${String(bridge[1]).split(',').join(' | ')} ]`;
    Console.print(MESSAGE.GAME_RESULT);
    Console.print(upBridge + '\n' + downBridge + '\n');
    if (isSuccessed) Console.print(MESSAGE.GAME_SUCCESSED + '\n' + MESSAGE.TRY_COUNT(trycount));
    if (!isSuccessed) Console.print(MESSAGE.GAME_FAILED + '\n' + MESSAGE.TRY_COUNT(trycount));
  },
};

module.exports = OutputView;
