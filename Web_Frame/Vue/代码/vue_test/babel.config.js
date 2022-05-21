module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 注意：这里和官网写的不一样
    ['@babel/preset-env', { modules: false }],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
