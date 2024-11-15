module.exports = {
  presets: [
    '@babel/preset-env', // ES6+ özellikleri için
    '@babel/preset-react', // JSX dönüşümü için
    '@babel/preset-typescript', // TypeScript dönüşümü için
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import', // Dinamik importlar için
    '@babel/plugin-proposal-class-properties', // Sınıf özellikleri için
    '@babel/plugin-transform-runtime', // Kod optimizasyonu için
  ],
};
