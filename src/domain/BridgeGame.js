const { INPUT } = require('../constants/constants');

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
    console.log(this.#answerBridge);
    if (input.toUpperCase() === INPUT.UP) return isCorrect.Up(this.#nowState, this.#answerBridge);
    if (input.toUpperCase() === INPUT.DOWN)
      return isCorrect.Down(this.#nowState, this.#answerBridge);
  }

  retry() {
    this.#nowState = 0;
  }
}

module.exports = BridgeGame;
