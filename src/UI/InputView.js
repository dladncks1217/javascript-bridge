const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(input) {
    Console.readLine(MESSAGE.INPUT_LENGTH + '\n', input);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(input) {
    Console.readLine(MESSAGE.SELECT_MOVE + '\n', input);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(input) {
    Console.readLine(MESSAGE.INPUT_RETRY + '\n', input);
  },
};

module.exports = InputView;
