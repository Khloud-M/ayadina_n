
// @ts-nocheck


export const localeCodes =  [
  "en",
  "ar"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "locale_C_58_C_58_Users_ORIGINAL_Desktop_ayadina_n_locales_en_json" */), cache: true }],
  "ar": [{ key: "../locales/ar.json", load: () => import("../locales/ar.json" /* webpackChunkName: "locale_C_58_C_58_Users_ORIGINAL_Desktop_ayadina_n_locales_ar_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": ""
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "name": "En",
      "iso": "en-US",
      "dir": "ltr",
      "files": [
        "locales/en.json"
      ]
    },
    {
      "code": "ar",
      "name": "Ar",
      "iso": "ar-AR",
      "dir": "rtl",
      "files": [
        "locales/ar.json"
      ]
    }
  ],
  "defaultLocale": "ar",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales",
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const nuxtI18nOptionsDefault = {
  "experimental": {
    "localeDetector": ""
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "En",
    "iso": "en-US",
    "dir": "ltr",
    "files": [
      {
        "path": "locales/en.json"
      }
    ]
  },
  {
    "code": "ar",
    "name": "Ar",
    "iso": "ar-AR",
    "dir": "rtl",
    "files": [
      {
        "path": "locales/ar.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
}
export const DEFAULT_LOCALE = ""
export const DEFAULT_STRATEGY = "prefix_except_default"
export const DEFAULT_TRAILING_SLASH = false
export const DEFAULT_ROUTES_NAME_SEPARATOR = "___"
export const DEFAULT_LOCALE_ROUTE_NAME_SUFFIX = "default"
export const DEFAULT_DETECTION_DIRECTION = "ltr"
export const DEFAULT_BASE_URL = ""
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"


