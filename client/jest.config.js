module.exports = {
  roots: ['src'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { cwd: __dirname }]
  },
};