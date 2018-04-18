import APP from 'webide-plugin-sdk/utils';

const languagePool = {
  en_US: {},
  zh_CN: {},
}

export default new APP({
  pkgId: 'WebIDE-Plugin-Template',
  i18n: { customLanguagePool: languagePool },
});
