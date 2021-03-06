module.exports = {
  collectCoverageFrom: ["./src/**/*.js"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFiles: ["<rootDir>/tests/__support__/enzyme.js"]
};
