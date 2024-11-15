module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // TypeScript ve TSX dosyalarını Babel ile işleme
    '^.+\\.jsx?$': 'babel-jest', // JSX ve JS dosyalarını Babel ile işleme
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Jest'in tanıyacağı dosya uzantıları
  testEnvironment: 'jest-environment-jsdom', // jsdom ortamını belirtmek için
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // jest.setup.js dosyasını dahil et
};
