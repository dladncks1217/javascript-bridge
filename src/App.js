const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./domain/BridgeGame');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const isValidBridgeLength = require('./utils/isValidBridgeLength');

class App {
  #bridgeGame;

  play() {
    OutputView.gameStart();
    return this.gameSetting();
  }

  gameSetting() {
    InputView.readBridgeSize((input) => {
      try {
        isValidBridgeLength(input);
        this.#bridgeGame = new BridgeGame(
          BridgeMaker(Number(input), BridgeRandomNumberGenerator)
        );
        return this.gameEnd();
      } catch (err) {
        OutputView.inputLengthError();
        return this.gameSetting();
      }
    });
  }

  gameEnd() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
