const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./utils/BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./domain/BridgeGame');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const validCheck = require('./utils/validCheck');
const isCorrectAnswer = require('../src/utils/isCorrectAnswer');
const getBridgeResult = require('./utils/getBridgeResult');
const { INPUT } = require('./constants/constants');

class App {
  #bridgeGame;
  #trycount;

  play() {
    OutputView.gameStart();
    this.#trycount = 0;
    return this.gameSetting();
  }

  gameSetting() {
    InputView.readBridgeSize((input) => {
      try {
        validCheck.BridgeLength(input);
        this.#bridgeGame = new BridgeGame(
          BridgeMaker.makeBridge(Number(input), BridgeRandomNumberGenerator.generate)
        );
        return this.countCheck();
      } catch (error) {
        OutputView.inputLengthError();
        return this.gameSetting();
      }
    });
  }

  countCheck() {
    this.#trycount += 1;
    return this.moveState();
  }

  moveState() {
    InputView.readMoving((input) => {
      try {
        validCheck.move(input);
        const bridge = this.#bridgeGame.move(input, isCorrectAnswer, getBridgeResult);
        const [up, down] = [bridge[0][bridge[0].length - 1], bridge[1][bridge[0].length - 1]];
        OutputView.printMap(bridge);
        if (up === INPUT.WRONG || down === INPUT.WRONG) return this.retryCheck(bridge);
        if (this.#bridgeGame.finishCheck()) return this.gameEnd(bridge, true, this.#trycount);
        return this.moveState();
      } catch (error) {
        OutputView.retryError();
        this.moveState();
      }
    });
  }

  retryCheck(bridge) {
    InputView.readGameCommand((input) => {
      validCheck.retry(input);
      if (input.toUpperCase() === INPUT.RETRY) {
        this.#bridgeGame.retry();
        return this.countCheck();
      }
      if (input.toUpperCase() === INPUT.QUIT) {
        return this.gameEnd(bridge, false, this.#trycount);
      }
    });
  }

  gameEnd(bridge, isFinished, count) {
    OutputView.printResult(bridge, isFinished, count);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
