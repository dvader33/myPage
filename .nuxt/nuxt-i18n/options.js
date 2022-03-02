

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"locale":"es","fallbackLocale":"es","messages":{"en":{"message":"Software Developer/Systems Administrator","aboutTitle":"About me","aboutDescription":"Computer science engineer with more than 6 years of experience including Web Development, Desktop Development and Systems administration","aboutExtras":"I like to learn new things and I am quite persevering in all aspects of my life."},"es":{"message":"Desarrollador de Software/Administrador de sistemas","aboutTitle":"Acerca de mi","aboutDescription":"Ingeniero En informática y sistemas con mas de 6 años de experiencia que incluyen desarrollo Web, desarrollo de aplicaciones de Escritorio y administración de sistemas","aboutExtras":"Me gusta aprender nuevas cosas y soy bastante perseverante en todos los aspectos de mi vida."}}},
  vueI18nLoader: true,
  locales: [{"code":"en-us","name":"English","iso":"en-US"},{"code":"es-es","name":"Español","iso":"es-ES"}],
  defaultLocale: "es-es",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en-us","name":"English","iso":"en-US"},{"code":"es-es","name":"Español","iso":"es-ES"}],
  localeCodes: ["en-us","es-es"],
}

export const localeMessages = {}
