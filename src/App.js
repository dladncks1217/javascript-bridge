const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./utils/BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./domain/BridgeGame');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const validCheck = require('./utils/validCheck');
const isCorrectAnswer = require('../src/utils/isCorrectAnswer');
const getBridgeResult = require('./utils/getBridgeResult');

class App {
  #bridgeGame;

  play() {
    OutputView.gameStart();
    return this.gameSetting();
  }

  gameSetting() {
    InputView.readBridgeSize((input) => {
      try {
        validCheck.BridgeLength(input);
        this.#bridgeGame = new BridgeGame(
          BridgeMaker.makeBridge(Number(input), BridgeRandomNumberGenerator.generate)
        );
        return this.moveState();
      } catch (err) {
        console.error(err);
        OutputView.inputLengthError();
        return this.gameSetting();
      }
    });
  }

  moveState() {
    InputView.readMoving((input) => {
      validCheck.move(input);
      const bridge = this.#bridgeGame.move(input, isCorrectAnswer, getBridgeResult);
      OutputView.printMap(bridge);
      const isAnswer = this.#bridgeGame.moveCorrectCheck(input, isCorrectAnswer);
      if (isAnswer) return this.moveState();
    });
  }

  gameEnd() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
