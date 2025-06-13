export const LOGIN_USERS = {
  LOCKED: {
    username: 'alice@example.com',
    password: '10203040',
  },
  NO_MATCH: {
    username: '1@2.com',
    password: 'f-o-o',
  },
  NO_USER_DETAILS: {
    username: '',
    password: '',
  },
  NO_PASSWORD: {
    username: 'bob@example.com',
    password: '',
  },
  STANDARD: {
    username: 'bob@example.com',
    password: '10203040',
  },
};
