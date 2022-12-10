const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
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
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    const upBridge = `[ ${String(bridge[0]).split(',').join(' | ')} ]`;
    const downBridge = `[ ${String(bridge[1]).split(',').join(' | ')} ]`;
    Console.print(upBridge + '\n' + downBridge);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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
