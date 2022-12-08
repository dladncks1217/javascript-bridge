const { INPUT } = require('../constants/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #initBridge;
  #answerBridge;

  constructor(initBridge) {
    this.#initBridge = initBridge.slice();
    this.#answerBridge = this.makeAnswerBridge(initBridge);
    console.log(initBridge);
    console.log(this.#answerBridge);
  }

  makeAnswerBridge(bridge) {
    const [Up, Down] = [[], []];
    bridge.forEach((value) => {
      if (value === INPUT.UP) {
        Up.push(INPUT.RIGHT);
        Down.push(INPUT.WRONG);
      }
      if (value === INPUT.DOWN) {
        Up.push(INPUT.WRONG);
        Down.push(INPUT.RIGHT);
      }
    });
    return [Up, Down];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
