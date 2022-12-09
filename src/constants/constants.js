const MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.',
  INPUT_LENGTH: '다리의 길이를 입력해주세요.',
  SELECT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  INPUT_RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  GAME_RESULT: '최종 게임 결과',
  GAME_SUCCESSED: '게임 성공 여부: 성공',
  GAME_FAILED: '게임 성공 여부: 실패',
  TRY_COUNT: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR = Object.freeze({
  LENGTH_INVALID: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE_INVALID: '[ERROR] 이동 입력 문자는 U또는 D입니다.',
  RETRY_INVALID: '[ERROR] 재시작 입력 문자는 R또는 Q입니다.',
});

const INPUT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
  RIGHT: 'O',
  WRONG: 'X',
  BLANK: ' ',
});

module.exports = { MESSAGE, ERROR, INPUT };
