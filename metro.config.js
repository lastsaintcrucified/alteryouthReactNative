const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const {assetExts, sourceExts} = defaultConfig.resolver;

  const customConfig = {
    transformer: {
      babelTransformerPath: require.resolve(
        'react-native-svg-transformer/react-native',
      ),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };

  const mergedConfig = mergeConfig(defaultConfig, customConfig);

  return wrapWithReanimatedMetroConfig(mergedConfig);
})();
