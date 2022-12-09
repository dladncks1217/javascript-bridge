const { INPUT } = require('../constants/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #initBridge;
  #answerBridge;
  #nowState;

  constructor(initBridge) {
    this.#initBridge = initBridge.slice();
    this.#nowState = 0;
    this.#answerBridge = this.makeAnswerBridge(initBridge);
    console.log(initBridge);
    console.log(this.#answerBridge);
  }

  makeAnswerBridge(bridge) {
    const [Up, Down] = [[], []];
    bridge.forEach((value) => {
      if (value === INPUT.UP) {
        Up.push(INPUT.RIGHT);
        Down.push(INPUT.BLANK);
      }
      if (value === INPUT.DOWN) {
        Up.push(INPUT.BLANK);
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
  move(input, isCorrect, bridgeResult) {
    if (input.toUpperCase() === INPUT.UP) return this.moveUp(isCorrect.Up, bridgeResult);
    if (input.toUpperCase() === INPUT.DOWN) return this.moveDown(isCorrect.Down, bridgeResult);
  }

  moveUp(isCorrect, bridgeResult) {
    const correctCheck = isCorrect(this.#nowState, this.#answerBridge);
    if (correctCheck) {
      const result = bridgeResult.success(this.#nowState, this.#answerBridge).slice();
      this.#nowState += 1;
      return result;
    }
    return bridgeResult.upFail(this.#nowState, this.#answerBridge).slice();
  }

  moveDown(isCorrect, bridgeResult) {
    const correctCheck = isCorrect(this.#nowState, this.#answerBridge);
    if (correctCheck) {
      const result = bridgeResult.success(this.#nowState, this.#answerBridge).slice();
      this.#nowState += 1;
      return result;
    }
    return bridgeResult.downFail(this.#nowState, this.#answerBridge).slice();
  }

  moveCorrectCheck(input, isCorrect) {
    if (input.toUpperCase() === INPUT.UP) return isCorrect.Up(this.#nowState, this.#answerBridge);
    if (input.toUpperCase() === INPUT.DOWN)
      return isCorrect.Down(this.#nowState, this.#answerBridge);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
