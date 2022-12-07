const isValidBridgeLength = (userInput) => {
  if (Number.isNaN(Number(userInput))) throw new Error();
  if (Number(userInput) < 3 || Number(userInput) > 20) throw new Error();
};

module.exports = isValidBridgeLength;
