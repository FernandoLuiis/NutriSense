module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['metro-react-native-babel-preset'],
    plugins: ['react-native-reanimated/plugin'], // Adicione esta linha
  };
};
