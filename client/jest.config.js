module.exports = {
  roots: ['src'],
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { cwd: __dirname }]
  },
};