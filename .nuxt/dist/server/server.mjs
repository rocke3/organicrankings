
// --------------------
// Request: C:/www/organicrankings/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ohmyfetch ($id_4T3an2dV6G)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/paths.mjs ($id_e6eKQe7M8O)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/css.mjs ($id_tNEGJvyvIK)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs ($id_qmHwjo1h3K)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/root-component.mjs ($id_asUtuyAX0U)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/app-component.mjs ($id_nyraFztAbL)
// --------------------
const $id_ahqTl1keuq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ohmyfetch");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: vue
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/components.plugin.mjs ($id_srylYloJkk)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/dashboard.vue?macro=true ($id_27UaHeoNlf)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/index.vue?macro=true ($id_jMwJQMGWuC)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/dashboard.vue ($id_odXCPZACqv)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/index.vue ($id_ERJRVCafPf)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs ($id_9Fl88LaznL)
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// - /components/elements/DarkToggle.vue ($id_0HBTzqUqct)
// - /components/app/AppNavbar.vue ($id_yCOa2K67Gf)
// - /components/app/AppFooter.vue ($id_KJ4OY4wAoN)
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// - /components/PublicNavbar.vue ($id_pJwvrnFSHD)
// - /components/PublicFooter.vue ($id_tKSuDnTH4U)
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 
// - @vue/runtime-dom ($id_xcKel6nH2q)
// --------------------
const $id_G33erDMZ5a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/runtime-dom");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@vue/runtime-dom");
__vite_ssr_exportAll__(__vite_ssr_import_1__);

function initDev() {
    {
        __vite_ssr_import_0__.initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((process.env.NODE_ENV !== 'production')) {
    initDev();
}
const compile = () => {
    if ((process.env.NODE_ENV !== 'production')) {
        __vite_ssr_import_0__.warn(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};


Object.defineProperty(__vite_ssr_exports__, "compile", { enumerable: true, configurable: true, get(){ return compile }});
;
}


// --------------------
// Request: @vue/runtime-dom
// Parents: 
// - vue ($id_VkOCJnUZrn)
// Dependencies: 

// --------------------
const $id_9sriful2d8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/runtime-dom")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/runtime-dom\".")
  })


// --------------------
// Request: ohmyfetch
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// Dependencies: 

// --------------------
const $id_kLE5W6MKaY = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohmyfetch")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohmyfetch\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/paths.mjs
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// --------------------
const $id_bMPJFexSTF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const appConfig = {"head":{"meta":[],"link":[{"rel":"stylesheet","href":"/assets/css/main.css"}],"style":[],"script":[],"noscript":[{"children":"Javascript is required"}],"charset":"utf-8","viewport":"width=device-width, initial-scale=1, shrink-to-fit=no"},"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":""}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});
globalThis.__buildAssetsURL = buildAssetsURL
globalThis.__publicAssetsURL = publicAssetsURL;
}


// --------------------
// Request: ufo
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/paths.mjs ($id_e6eKQe7M8O)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_KJr7LehhrL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ufo")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ufo\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/components.plugin.mjs ($id_srylYloJkk)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// - /middleware/auth.global.ts ($id_TIzqZfw6gq)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_fgrt3UeQEL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - hookable ($id_Jqn8E4F5w7)
// - unctx ($id_95GsJqysu7)
// --------------------
const $id_lfCjBrgcte = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("hookable");

const __vite_ssr_import_2__ = await __vite_ssr_import__("unctx");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: hookable
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_p6x8naIYgL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("hookable")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"hookable\".")
  })


// --------------------
// Request: unctx
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_Zn9H5zfDIh = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unctx")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unctx\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_YvAaozTraC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createError }});
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.isNuxtError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.showError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.setResponseStatus }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_XTtQ30wmO3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$BblPDwLpsD');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: vue-router
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 

// --------------------
const $id_7dT9jx0uwT = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue-router")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue-router\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BHNdDlA1Pk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_6bgT8vIFHQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_oMJXouc9nw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_kP3GBeDzaR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_0OCs51rfoK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => __vite_ssr_import_1__.toRef(__vite_ssr_import_2__.useNuxtApp().payload, "error");
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return showError }});
const throwError = showError;
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
const isNuxtError = (err) => err && typeof err === "object" && "__nuxt_error" in err;
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return isNuxtError }});
const createError = (err) => {
  const _err = __vite_ssr_import_0__.createError(err);
  _err.__nuxt_error = true;
  return _err;
};
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return createError }});
;
}


// --------------------
// Request: h3
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_K2PnHEPz0m = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("h3")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"h3\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_zYOrYjkwm9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$2Qpjr020wX');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    autoKey
  , '$O2v9FOrXIM');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - cookie-es ($id_MKm94FqkqC)
// - h3 ($id_ltfhTi4n2w)
// - destr ($id_12yP1cX3Wj)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_XUZhFBVStH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("cookie-es");

const __vite_ssr_import_2__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_3__ = await __vite_ssr_import__("destr");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_6__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_7__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!__vite_ssr_import_4__.isEqual(cookie.value, cookies[name])) {
        writeServerCookie(__vite_ssr_import_5__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_5__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: cookie-es
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_t3HHRMhh7L = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("cookie-es")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"cookie-es\".")
  })


// --------------------
// Request: destr
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ZK3lg3ye5b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("destr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"destr\".")
  })


// --------------------
// Request: ohash
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ApQSwD9AXx = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohash")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohash\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BjnOCDcfIZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
function setResponseStatus(code, message) {
  const event = true && useRequestEvent();
  if (event) {
    event.res.statusCode = code;
    if (message) {
      event.res.statusMessage = message;
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return setResponseStatus }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_72OrpZA28S = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_2__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_3__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  if (__vite_ssr_import_0__.getCurrentInstance()) {
    return __vite_ssr_import_0__.inject("_route", __vite_ssr_import_3__.useNuxtApp()._route);
  }
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_3__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_2__.joinURL(__vite_ssr_import_3__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_1__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_HRAmKRepZ0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// - /components/PublicNavbar.vue ($id_pJwvrnFSHD)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_aAoWaPsGgE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(
            __vite_ssr_import_0__.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/dashboard.vue?macro=true ($id_27UaHeoNlf)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/index.vue?macro=true ($id_jMwJQMGWuC)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/dashboard.vue ($id_odXCPZACqv)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/index.vue ($id_ERJRVCafPf)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/elements/DarkToggle.vue ($id_0HBTzqUqct)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_DBzckdbLOm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - @vue/shared ($id_FcJYoqIAB0)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_TG3cDPMBp5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/shared");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: @vue/shared
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_NOAOzpHkPB = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/shared\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/css.mjs
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// Dependencies: 

// --------------------
const $id_dC1MsHuY7o = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/components.plugin.mjs ($id_srylYloJkk)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// --------------------
const $id_k8JAeCfcE3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs ($id_qmHwjo1h3K)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1SAEi7QN5N = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs ($id_qmHwjo1h3K)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_ESjlVSVakk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs ($id_qmHwjo1h3K)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - vue ($id_VkOCJnUZrn)
// - defu ($id_q1WUEsFSUQ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_wRsEVKfW1P = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("defu");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta = __vite_ssr_import_0__.renderHeadToString(head);
      return {
        ...meta,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_19kbcSkZ7c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title ?? "");
  }
  return template(__vite_ssr_import_0__.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => ({
    element: createElement(tag.tag, tag.props, document),
    body: tag.props.body ?? false
  }));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(__vite_ssr_import_0__.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => __vite_ssr_import_0__.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(__vite_ssr_import_0__.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const head = injectHead();
  const headObj = __vite_ssr_import_0__.ref(obj);
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var addVNodeToHeadObj = (node, obj) => {
  const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
  if (typeof type !== "string" || !(type in obj))
    return;
  const props = __spreadProps(__spreadValues({}, node.props), {
    children: Array.isArray(node.children) ? node.children[0].children : node.children
  });
  if (Array.isArray(obj[type])) {
    ;
    obj[type].push(props);
  } else if (type === "title") {
    obj.title = props.children;
  } else {
    ;
    obj[type] = props;
  }
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children) {
        addVNodeToHeadObj(childNode, obj);
      }
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: defu
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_q6X4BWspBy = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("defu")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"defu\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs ($id_qmHwjo1h3K)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/meta.config.mjs ($id_G1g6teQThT)
// --------------------
const $id_M1tN3PM97T = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_PE2LM6mDyc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const NoScript = __vite_ssr_import_0__.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    const noscript = { ...props };
    const textContent = (slots.default?.() || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "NoScript", { enumerable: true, configurable: true, get(){ return NoScript }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_lfmStlh9we = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[],"link":[{"rel":"stylesheet","href":"/assets/css/main.css"}],"style":[],"script":[],"noscript":[{"children":"Javascript is required"}],"charset":"utf-8","viewport":"width=device-width, initial-scale=1, shrink-to-fit=no"}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs ($id_qmHwjo1h3K)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/router.options.mjs ($id_txriAifgBu)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/middleware.mjs ($id_AOunJP2X1t)
// --------------------
const $id_0CQA2LNfeu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_3__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/router.options.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_4__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_4__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_6__.defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_5__.default);
  const baseURL = __vite_ssr_import_6__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_2__.createWebHistory(baseURL) : __vite_ssr_import_2__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_2__.createRouter({
    ...__vite_ssr_import_8__.default,
    history: routerHistory,
    routes: __vite_ssr_import_7__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_1__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = __vite_ssr_import_1__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = __vite_ssr_import_1__.computed(() => _route.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_1__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_6__.useError();
  try {
    if (true) {
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
    }
    ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.isReady())),await __temp,__restore());;
  } catch (error2) {
    __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_1__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_9__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_9__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_9__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_6__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_3__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [__vite_ssr_import_3__.createError({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_4__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
    }
  });
  return { provide: { router } };
},1);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_L9I1eoE7dW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps);
          return __vite_ssr_import_4__._wrapIf(
            __vite_ssr_import_0__.Transition,
            routeProps.route.meta.pageTransition ?? defaultPageTransition,
            __vite_ssr_import_2__.wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = __vite_ssr_import_0__.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = __vite_ssr_import_0__.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    __vite_ssr_import_0__.provide("_route", __vite_ssr_import_0__.reactive(route));
    return () => __vite_ssr_import_0__.h(props.routeProps.Component);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_ZR0LUqwyer = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_NgApSiB2xA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/dashboard.vue?macro=true ($id_27UaHeoNlf)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/index.vue?macro=true ($id_jMwJQMGWuC)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/dashboard.vue ($id_odXCPZACqv)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/index.vue ($id_ERJRVCafPf)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// --------------------
const $id_Cf8Hlf9i6m = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/app/csstools.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/app/dashboard.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/app/htmltools.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/app/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/app/jstools.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/resetpassword.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/signin.vue?macro=true");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/signup.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "app-csstools",
    path: "/app/csstools",
    file: "C:/www/organicrankings/pages/app/csstools.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/app/csstools.vue").then(m => m.default || m)
  },
  {
    name: "app-dashboard",
    path: "/app/dashboard",
    file: "C:/www/organicrankings/pages/app/dashboard.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/app/dashboard.vue").then(m => m.default || m)
  },
  {
    name: "app-htmltools",
    path: "/app/htmltools",
    file: "C:/www/organicrankings/pages/app/htmltools.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/app/htmltools.vue").then(m => m.default || m)
  },
  {
    name: "app",
    path: "/app",
    file: "C:/www/organicrankings/pages/app/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/app/index.vue").then(m => m.default || m)
  },
  {
    name: "app-jstools",
    path: "/app/jstools",
    file: "C:/www/organicrankings/pages/app/jstools.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/app/jstools.vue").then(m => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "C:/www/organicrankings/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/index.vue").then(m => m.default || m)
  },
  {
    name: "resetpassword",
    path: "/resetpassword",
    file: "C:/www/organicrankings/pages/resetpassword.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/resetpassword.vue").then(m => m.default || m)
  },
  {
    name: "signin",
    path: "/signin",
    file: "C:/www/organicrankings/pages/signin.vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/signin.vue").then(m => m.default || m)
  },
  {
    name: "signup",
    path: "/signup",
    file: "C:/www/organicrankings/pages/signup.vue",
    children: [],
    meta: __vite_ssr_import_8__.meta,
    alias: __vite_ssr_import_8__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/signup.vue").then(m => m.default || m)
  }
];
}


// --------------------
// Request: /pages/app/csstools.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_uxu2BF1Njl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/Tooltip.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'csstools',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_4__.definePageMeta({ layout: "app-layout" });
__vite_ssr_import_5__.useHead({ title: "CSS Tools - Organic Rankings" });

const website = __vite_ssr_import_6__.ref('https://www.organicrankings.com/')
const css = __vite_ssr_import_6__.ref('')
const urlClass = __vite_ssr_import_6__.ref('')
const cssClass = __vite_ssr_import_6__.ref('')
const processing = __vite_ssr_import_6__.ref(false)
const cssLength = __vite_ssr_import_6__.ref(0)
const showOutputModal = __vite_ssr_import_6__.ref(false)
const outputcss = __vite_ssr_import_6__.ref('')
const upload = __vite_ssr_import_6__.ref(false)
const genarate = __vite_ssr_import_6__.ref(false)
const beautify = __vite_ssr_import_6__.ref(false)
const todo = __vite_ssr_import_6__.ref('critical')
const optimize = __vite_ssr_import_6__.ref(1)



function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("criricalcss"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

async function genarateCss() {
	if (website.value) {
		showOutputModal.value = true;
		processing.value = true;
		upload.value = false;
		genarate.value = false;
		outputcss.value = "";
		urlClass.value = "";
		cssClass.value = "";
		window.setTimeout(() => { if (processing.value) { upload.value = true; } }, 1500);
		window.setTimeout(() => { if (processing.value) { genarate.value = true; } }, 3000);


		await $fetch("https://www.organicrankings.com/criticalcss", {
			method: "POST",
			body: css.value,
			headers: {
				website: website.value,
				todo: todo.value,
				optimize: optimize.value,
				output: beautify.value ? 'beautify' : 'minify',
				"content-type": "application/octet-stream",
				"url": "https://www.organicrankings.com/",
				"cache-control": "no-cache"
			}
		}).then((res) => {
			processing.value = false;
			outputcss.value = res;
		}).catch((err) => {
			processing.value = false;
			outputcss.value = "Something went wrong please try again";
		});
	} else {
		if (!website.value) {
			urlClass.value = "is-invalid"
		}
		if (!css.value) {
			cssClass.value = "is-invalid"
		}
	}
}

__vite_ssr_import_6__.watch(css, async (val) => {
	cssLength.value = val.length;
})



const __returned__ = { website, css, urlClass, cssClass, processing, cssLength, showOutputModal, outputcss, upload, genarate, beautify, todo, optimize, copyToClipboard, genarateCss, ref: __vite_ssr_import_6__.ref, watch: __vite_ssr_import_6__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsTooltip = __vite_ssr_import_1__.default
  const _component_ElementsSpinner = __vite_ssr_import_2__.default
  const _component_ElementsProcessing = __vite_ssr_import_3__.default

  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)} data-v-ac7a0ea1><div class="row" data-v-ac7a0ea1><div class="col-12" data-v-ac7a0ea1>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "CSS Tools",
    titleClass: "ps-3"
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form data-v-ac7a0ea1${
          _scopeId
        }><div class="todo" data-v-ac7a0ea1${
          _scopeId
        }><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.todo == 'critical' ? 'active' : '', "form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-check-label m-0 px-3 py-2" data-v-ac7a0ea1${
          _scopeId
        }><input class="form-check-input me-1" type="radio" name="option" value="critical"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.todo, "critical"))) ? " checked" : ""
        } checked data-v-ac7a0ea1${
          _scopeId
        }> Genarate Critical CSS </label></div><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.todo == 'minify' ? 'active' : '', "form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-check-label m-0 px-3 py-2" data-v-ac7a0ea1${
          _scopeId
        }><input class="form-check-input me-1" type="radio" name="option" value="minify"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.todo, "minify"))) ? " checked" : ""
        } data-v-ac7a0ea1${
          _scopeId
        }> Minify CSS </label></div><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.todo == 'beautify' ? 'active' : '', "form-check form-check-radio btn btn-outline-primary p-0 mb-3"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-check-label m-0 px-3 py-2" data-v-ac7a0ea1${
          _scopeId
        }><input class="form-check-input me-1" type="radio" name="option" value="beautify"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.todo, "beautify"))) ? " checked" : ""
        } data-v-ac7a0ea1${
          _scopeId
        }> Beautify CSS </label></div></div>`)
        if ($setup.todo == 'critical') {
          _push(`<div class="${
            __vite_ssr_import_8__.ssrRenderClass([$setup.urlClass, "input-group input-group-outline mt-3"])
          }" data-v-ac7a0ea1${
            _scopeId
          }><label class="form-label" data-v-ac7a0ea1${
            _scopeId
          }>Website URL</label><input type="url" class="form-control"${
            __vite_ssr_import_8__.ssrRenderAttr("value", $setup.website)
          } data-v-ac7a0ea1${
            _scopeId
          }></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<div class="pb-2" data-v-ac7a0ea1${_scopeId}>`)
        if ($setup.todo == 'critical') {
          _push(`<div class="outputSettings me-3" data-v-ac7a0ea1${
            _scopeId
          }><label class="settingLvl" data-v-ac7a0ea1${
            _scopeId
          }>Output Settings</label><div class="form-check form-switch d-flex align-items-center" data-v-ac7a0ea1${
            _scopeId
          }><div class="${
            __vite_ssr_import_8__.ssrRenderClass([{ 'text-primary': !$setup.beautify }, "toggle me-1"])
          }" data-v-ac7a0ea1${
            _scopeId
          }>Minify</div><div class="ms-5 me-2" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="checkbox"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr((Array.isArray($setup.beautify))
              ? __vite_ssr_import_8__.ssrLooseContain($setup.beautify, null)
              : $setup.beautify)) ? " checked" : ""
          } data-v-ac7a0ea1${
            _scopeId
          }></div><div class="${
            __vite_ssr_import_8__.ssrRenderClass([{ 'text-primary': $setup.beautify }, "toggle"])
          }" data-v-ac7a0ea1${
            _scopeId
          }>Beautify</div></div></div>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.todo == 'minify' || ($setup.todo == 'critical' && !$setup.beautify)) {
          _push(`<div class="outputSettings" data-v-ac7a0ea1${
            _scopeId
          }><label class="settingLvl" data-v-ac7a0ea1${
            _scopeId
          }>Optimization</label><div class="form-check form-check-radio optimize p-0" data-v-ac7a0ea1${
            _scopeId
          }><label class="form-check-label m-0 pe-3" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="radio" name="optimize" value="0"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.optimize, "0"))) ? " checked" : ""
          } data-v-ac7a0ea1${
            _scopeId
          }>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`NO`)
              } else {
                return [
                  __vite_ssr_import_7__.createTextVNode("NO")
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`</label><label class="form-check-label m-0 pe-3" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="radio" name="optimize" value="1"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.optimize, "1"))) ? " checked" : ""
          } checked data-v-ac7a0ea1${
            _scopeId
          }>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(` Level 1`)
              } else {
                return [
                  __vite_ssr_import_7__.createTextVNode(" Level 1")
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`</label><label class="form-check-label m-0 pe-3" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="radio" name="optimize" value="2"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.optimize, "2"))) ? " checked" : ""
          } data-v-ac7a0ea1${
            _scopeId
          }>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(` Level 2`)
              } else {
                return [
                  __vite_ssr_import_7__.createTextVNode(" Level 2")
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`</label></div></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.cssClass, "input-group input-group-outline mt-4"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-label" data-v-ac7a0ea1${
          _scopeId
        }>All CSS </label><textarea class="form-control" rows="10" data-v-ac7a0ea1${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.css)
        }</textarea></div><small class="text-info" data-v-ac7a0ea1${
          _scopeId
        }>Copy all CSS styles from your website and paste them above.</small><small class="cssLength" data-v-ac7a0ea1${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.cssLength)
        } character</small><div class="mb-1 text-end mt-4" data-v-ac7a0ea1${
          _scopeId
        }><button class="btn btn-primary" data-v-ac7a0ea1${
          _scopeId
        }>`)
        if (!$setup.processing) {
          _push(`<span data-v-ac7a0ea1${_scopeId}>Genarate</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.processing) {
          _push(`<div data-v-ac7a0ea1${_scopeId}>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Genarating `)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div></form>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("form", {
            onSubmit: __vite_ssr_import_7__.withModifiers($setup.genarateCss, ["prevent"])
          }, [
            __vite_ssr_import_7__.createVNode("div", { class: "todo" }, [
              __vite_ssr_import_7__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0", $setup.todo == 'critical' ? 'active' : '']
              }, [
                __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "critical",
                    "onUpdate:modelValue": $event => (($setup.todo) = $event),
                    checked: ""
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_7__.createTextVNode(" Genarate Critical CSS ")
                ])
              ], 2 /* CLASS */),
              __vite_ssr_import_7__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0", $setup.todo == 'minify' ? 'active' : '']
              }, [
                __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "minify",
                    "onUpdate:modelValue": $event => (($setup.todo) = $event)
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_7__.createTextVNode(" Minify CSS ")
                ])
              ], 2 /* CLASS */),
              __vite_ssr_import_7__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary p-0 mb-3", $setup.todo == 'beautify' ? 'active' : '']
              }, [
                __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "beautify",
                    "onUpdate:modelValue": $event => (($setup.todo) = $event)
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_7__.createTextVNode(" Beautify CSS ")
                ])
              ], 2 /* CLASS */)
            ]),
            ($setup.todo == 'critical')
              ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                  key: 0,
                  class: ["input-group input-group-outline mt-3", $setup.urlClass]
                }, [
                  __vite_ssr_import_7__.createVNode("label", { class: "form-label" }, "Website URL"),
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    type: "url",
                    class: "form-control",
                    "onUpdate:modelValue": $event => (($setup.website) = $event)
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelText, $setup.website]
                  ])
                ], 2 /* CLASS */))
              : __vite_ssr_import_7__.createCommentVNode("v-if", true),
            __vite_ssr_import_7__.createVNode("div", { class: "pb-2" }, [
              ($setup.todo == 'critical')
                ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                    key: 0,
                    class: "outputSettings me-3"
                  }, [
                    __vite_ssr_import_7__.createVNode("label", { class: "settingLvl" }, "Output Settings"),
                    __vite_ssr_import_7__.createVNode("div", { class: "form-check form-switch d-flex align-items-center" }, [
                      __vite_ssr_import_7__.createVNode("div", {
                        class: ["toggle me-1", { 'text-primary': !$setup.beautify }],
                        onClick: $event => ($setup.beautify = false)
                      }, "Minify", 10 /* CLASS, PROPS */, ["onClick"]),
                      __vite_ssr_import_7__.createVNode("div", { class: "ms-5 me-2" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          "onUpdate:modelValue": $event => (($setup.beautify) = $event)
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelCheckbox, $setup.beautify]
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", {
                        class: ["toggle", { 'text-primary': $setup.beautify }],
                        onClick: $event => ($setup.beautify = true)
                      }, "Beautify", 10 /* CLASS, PROPS */, ["onClick"])
                    ])
                  ]))
                : __vite_ssr_import_7__.createCommentVNode("v-if", true),
              ($setup.todo == 'minify' || ($setup.todo == 'critical' && !$setup.beautify))
                ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                    key: 1,
                    class: "outputSettings"
                  }, [
                    __vite_ssr_import_7__.createVNode("label", { class: "settingLvl" }, "Optimization"),
                    __vite_ssr_import_7__.createVNode("div", { class: "form-check form-check-radio optimize p-0" }, [
                      __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "radio",
                          name: "optimize",
                          value: "0",
                          "onUpdate:modelValue": $event => (($setup.optimize) = $event)
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.optimize]
                        ]),
                        __vite_ssr_import_7__.createVNode(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createTextVNode("NO")
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "radio",
                          name: "optimize",
                          value: "1",
                          "onUpdate:modelValue": $event => (($setup.optimize) = $event),
                          checked: ""
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.optimize]
                        ]),
                        __vite_ssr_import_7__.createVNode(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createTextVNode(" Level 1")
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "radio",
                          name: "optimize",
                          value: "2",
                          "onUpdate:modelValue": $event => (($setup.optimize) = $event)
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.optimize]
                        ]),
                        __vite_ssr_import_7__.createVNode(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createTextVNode(" Level 2")
                          ]),
                          _: 1 /* STABLE */
                        })
                      ])
                    ])
                  ]))
                : __vite_ssr_import_7__.createCommentVNode("v-if", true)
            ]),
            __vite_ssr_import_7__.createVNode("div", {
              class: ["input-group input-group-outline mt-4", $setup.cssClass]
            }, [
              __vite_ssr_import_7__.createVNode("label", { class: "form-label" }, "All CSS "),
              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                class: "form-control",
                rows: "10",
                "onUpdate:modelValue": $event => (($setup.css) = $event)
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_7__.vModelText, $setup.css]
              ])
            ], 2 /* CLASS */),
            __vite_ssr_import_7__.createVNode("small", { class: "text-info" }, "Copy all CSS styles from your website and paste them above."),
            __vite_ssr_import_7__.createVNode("small", { class: "cssLength" }, __vite_ssr_import_7__.toDisplayString($setup.cssLength) + " character", 1 /* TEXT */),
            __vite_ssr_import_7__.createVNode("div", { class: "mb-1 text-end mt-4" }, [
              __vite_ssr_import_7__.createVNode("button", { class: "btn btn-primary" }, [
                (!$setup.processing)
                  ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("span", { key: 0 }, "Genarate"))
                  : __vite_ssr_import_7__.createCommentVNode("v-if", true),
                ($setup.processing)
                  ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_7__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_7__.createTextVNode(" Genarating "),
                      __vite_ssr_import_7__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_7__.createCommentVNode("v-if", true)
              ])
            ])
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><!-- Modal -->`)
  if ($setup.showOutputModal) {
    _push(`<div class="modal fade show" aria-modal="true" role="dialog" data-v-ac7a0ea1><div class="modal-dialog modal-dialog-scrollable modal-xl" data-v-ac7a0ea1><div class="modal-content" data-v-ac7a0ea1><div class="modal-header" data-v-ac7a0ea1><h5 class="modal-title" data-v-ac7a0ea1>CSS Output (${__vite_ssr_import_8__.ssrInterpolate($setup.outputcss.length)} character)</h5><button type="button" class="btn-close" data-v-ac7a0ea1><i class="material-icons" data-v-ac7a0ea1>close</i></button></div><div class="modal-body" data-v-ac7a0ea1>`)
    if ($setup.processing) {
      _push(`<div class="text-success text-center" data-v-ac7a0ea1><p data-v-ac7a0ea1>`)
      if (!$setup.upload) {
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
      } else {
        _push(`<!---->`)
      }
      if ($setup.upload) {
        _push(`<i class="material-icons" data-v-ac7a0ea1>task_alt</i>`)
      } else {
        _push(`<!---->`)
      }
      _push(` Uploading Your CSS. </p>`)
      if ($setup.upload) {
        _push(`<p data-v-ac7a0ea1>`)
        if (!$setup.genarate && $setup.upload) {
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        } else {
          _push(`<!---->`)
        }
        if ($setup.genarate) {
          _push(`<i class="material-icons" data-v-ac7a0ea1>task_alt</i>`)
        } else {
          _push(`<!---->`)
        }
        _push(` Genarating Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      if ($setup.genarate) {
        _push(`<p data-v-ac7a0ea1>`)
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        _push(` Downloading Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      _push(`</div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div id="criricalcss" data-v-ac7a0ea1>`)
    if ($setup.todo == 'beautify' || ($setup.todo == 'critical' && $setup.beautify)) {
      _push(`<pre data-v-ac7a0ea1>${__vite_ssr_import_8__.ssrInterpolate($setup.outputcss)}</pre>`)
    } else {
      _push(`<div data-v-ac7a0ea1>${__vite_ssr_import_8__.ssrInterpolate($setup.outputcss)}</div>`)
    }
    _push(`</div></div><div class="modal-footer" data-v-ac7a0ea1><button class="btn btn-secondary" data-v-ac7a0ea1> Close </button>`)
    if ($setup.outputcss) {
      _push(`<button class="btn btn-primary" data-v-ac7a0ea1> Copy Css </button>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/app/csstools.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-ac7a0ea1"],['__file',"C:/www/organicrankings/pages/app/csstools.vue"]])
const meta = { layout: "app-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/elements/BsCard.vue
// Parents: 
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - /components/elements/BsCard.vue?vue&type=style&index=0&scoped=026398e5&lang.css ($id_Aup5bc4UVi)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_k2uADfOTl7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'BsCard',
  props: ['formTitle', 'titleClass'],
  setup(__props, { expose }) {
  expose();



const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  } data-v-026398e5><div class="card my-4" data-v-026398e5><div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2" data-v-026398e5><div class="bg-gradient-primary shadow-primary border-radius-lg pt-3 pb-2" data-v-026398e5><h6 class="${
    __vite_ssr_import_0__.ssrRenderClass([$props.titleClass, "text-white"])
  }" data-v-026398e5>${
    __vite_ssr_import_0__.ssrInterpolate($props.formTitle)
  }</h6></div></div><div class="card-body pb-2" data-v-026398e5>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div></div>`)
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/BsCard.vue?vue&type=style&index=0&scoped=026398e5&lang.css");


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/elements/BsCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-026398e5"],['__file',"C:/www/organicrankings/components/elements/BsCard.vue"]]);
}


// --------------------
// Request: vue/server-renderer
// Parents: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/dashboard.vue?macro=true ($id_27UaHeoNlf)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/index.vue?macro=true ($id_jMwJQMGWuC)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/dashboard.vue ($id_odXCPZACqv)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/index.vue ($id_ERJRVCafPf)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// - /components/elements/DarkToggle.vue ($id_0HBTzqUqct)
// - /components/app/AppNavbar.vue ($id_yCOa2K67Gf)
// - /components/app/AppFooter.vue ($id_KJ4OY4wAoN)
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// - /components/PublicNavbar.vue ($id_pJwvrnFSHD)
// - /components/PublicFooter.vue ($id_tKSuDnTH4U)
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_aRHphPzMpI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue/server-renderer")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue/server-renderer\".")
  })


// --------------------
// Request: /components/elements/BsCard.vue?vue&type=style&index=0&scoped=026398e5&lang.css
// Parents: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// Dependencies: 

// --------------------
const $id_P42EDUSzaN = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.material-icons[data-v-026398e5] {\r\n\tvertical-align: middle;\r\n\tfont-size: 18px;\n}\n.card[data-v-026398e5]{\r\n\tmin-width: 320px;\n}\r\n";
}


// --------------------
// Request: /@id/__x00__plugin-vue:export-helper
// Parents: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/dashboard.vue?macro=true ($id_27UaHeoNlf)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/index.vue?macro=true ($id_jMwJQMGWuC)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/dashboard.vue ($id_odXCPZACqv)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/index.vue ($id_ERJRVCafPf)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// - /components/elements/DarkToggle.vue ($id_0HBTzqUqct)
// - /components/app/AppNavbar.vue ($id_yCOa2K67Gf)
// - /components/app/AppFooter.vue ($id_KJ4OY4wAoN)
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// - /components/PublicNavbar.vue ($id_pJwvrnFSHD)
// - /components/PublicFooter.vue ($id_tKSuDnTH4U)
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_mHD6riC5ol = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /components/elements/Tooltip.vue
// Parents: 
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/elements/Tooltip.vue?vue&type=style&index=0&scoped=75e3e590&lang.css ($id_VhZNrxhhwr)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_0lRxI8bDIc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'Tooltip',
  props: {
		tooltip: "",
},
  setup(__props, { expose }) {
  expose();

 

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "cus-tooltip" }, _attrs))} data-v-75e3e590>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`<span class="cus-tooltiptext" data-v-75e3e590>${__vite_ssr_import_1__.ssrInterpolate($props.tooltip)}</span></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Tooltip.vue?vue&type=style&index=0&scoped=75e3e590&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/elements/Tooltip.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-75e3e590"],['__file',"C:/www/organicrankings/components/elements/Tooltip.vue"]]);
}


// --------------------
// Request: /components/elements/Tooltip.vue?vue&type=style&index=0&scoped=75e3e590&lang.css
// Parents: 
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// Dependencies: 

// --------------------
const $id_SpxjCTnbTY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.cus-tooltip[data-v-75e3e590] {\r\n  position: relative;\r\n  display: inline-block;\n}\n.cus-tooltip .cus-tooltiptext[data-v-75e3e590] {\r\n  visibility: hidden;\r\n  width: 220px;\r\n  background-color: #555;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  bottom: 125%;\r\n  left: 50%;\r\n  margin-left: -60px;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n  transform: translate(-25%);\n}\n.cus-tooltip .cus-tooltiptext[data-v-75e3e590]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: #555 transparent transparent transparent;\n}\n.cus-tooltip:hover .cus-tooltiptext[data-v-75e3e590] {\r\n  visibility: visible;\r\n  opacity: 1;\n}\r\n";
}


// --------------------
// Request: /components/elements/Spinner.vue
// Parents: 
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/elements/Spinner.vue?vue&type=style&index=0&scoped=fd317803&lang.css ($id_8W0dL4oP7U)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_SH4eH1Wz1R = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'Spinner',
  props: {
	color: {
		default: "white",
	},
},
  setup(__props, { expose }) {
  expose();

const props = __props



const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "lds-ring" }, _attrs))
  } data-v-fd317803><div style="${
    __vite_ssr_import_1__.ssrRenderStyle({ 'border-left-color': $props.color})
  }" data-v-fd317803></div><div style="${
    __vite_ssr_import_1__.ssrRenderStyle({ 'border-left-color': $props.color})
  }" data-v-fd317803></div><div style="${
    __vite_ssr_import_1__.ssrRenderStyle({ 'border-left-color': $props.color})
  }" data-v-fd317803></div><div style="${
    __vite_ssr_import_1__.ssrRenderStyle({ 'border-left-color': $props.color})
  }" data-v-fd317803></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Spinner.vue?vue&type=style&index=0&scoped=fd317803&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/elements/Spinner.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-fd317803"],['__file',"C:/www/organicrankings/components/elements/Spinner.vue"]]);
}


// --------------------
// Request: /components/elements/Spinner.vue?vue&type=style&index=0&scoped=fd317803&lang.css
// Parents: 
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// Dependencies: 

// --------------------
const $id_HZbO5u0MDL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.lds-ring[data-v-fd317803] {\r\n\tvertical-align: text-top;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\twidth: 22px;\r\n\theight: 12px;\n}\n.lds-ring div[data-v-fd317803] {\r\n\tbox-sizing: border-box;\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\tmargin: 0px;\r\n\tborder: 3px solid;\r\n\tborder-radius: 50%;\r\n\t-webkit-animation: lds-ring-fd317803 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n\t        animation: lds-ring-fd317803 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n\tborder-color: transparent;\n}\n.lds-ring div[data-v-fd317803]:nth-child(1) {\r\n\t-webkit-animation-delay: -0.45s;\r\n\t        animation-delay: -0.45s;\n}\n.lds-ring div[data-v-fd317803]:nth-child(2) {\r\n\t-webkit-animation-delay: -0.3s;\r\n\t        animation-delay: -0.3s;\n}\n.lds-ring div[data-v-fd317803]:nth-child(3) {\r\n\t-webkit-animation-delay: -0.15s;\r\n\t        animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring-fd317803 {\n0% {\r\n\t\ttransform: rotate(0deg);\n}\n100% {\r\n\t\ttransform: rotate(360deg);\n}\n}\n@keyframes lds-ring-fd317803 {\n0% {\r\n\t\ttransform: rotate(0deg);\n}\n100% {\r\n\t\ttransform: rotate(360deg);\n}\n}\r\n";
}


// --------------------
// Request: /components/elements/Processing.vue
// Parents: 
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/elements/Processing.vue?vue&type=style&index=0&scoped=8000fe06&lang.css ($id_mJFibUWgnX)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_qIhB1ABUFi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "lds-ellipsis" }, _attrs))} data-v-8000fe06><div data-v-8000fe06></div><div data-v-8000fe06></div><div data-v-8000fe06></div><div data-v-8000fe06></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Processing.vue?vue&type=style&index=0&scoped=8000fe06&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/elements/Processing.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-8000fe06"],['__file',"C:/www/organicrankings/components/elements/Processing.vue"]]);
}


// --------------------
// Request: /components/elements/Processing.vue?vue&type=style&index=0&scoped=8000fe06&lang.css
// Parents: 
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// Dependencies: 

// --------------------
const $id_NcE1s8Wirl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.lds-ellipsis[data-v-8000fe06] {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\twidth: 50px;\r\n\theight: 12px;\n}\n.lds-ellipsis div[data-v-8000fe06] {\r\n\tposition: absolute;\r\n\ttop: 3px;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 50%;\r\n\tbackground: #fff;\r\n\t-webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n\t        animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div[data-v-8000fe06]:nth-child(1) {\r\n\tleft: 4px;\r\n\t-webkit-animation: lds-ellipsis1-8000fe06 0.6s infinite;\r\n\t        animation: lds-ellipsis1-8000fe06 0.6s infinite;\n}\n.lds-ellipsis div[data-v-8000fe06]:nth-child(2) {\r\n\tleft: 4px;\r\n\t-webkit-animation: lds-ellipsis2-8000fe06 0.6s infinite;\r\n\t        animation: lds-ellipsis2-8000fe06 0.6s infinite;\n}\n.lds-ellipsis div[data-v-8000fe06]:nth-child(3) {\r\n\tleft: 16px;\r\n\t-webkit-animation: lds-ellipsis2-8000fe06 0.6s infinite;\r\n\t        animation: lds-ellipsis2-8000fe06 0.6s infinite;\n}\n.lds-ellipsis div[data-v-8000fe06]:nth-child(4) {\r\n\tleft: 25px;\r\n\t-webkit-animation: lds-ellipsis3-8000fe06 0.6s infinite;\r\n\t        animation: lds-ellipsis3-8000fe06 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1-8000fe06 {\n0% {\r\n\t\ttransform: scale(0);\n}\n100% {\r\n\t\ttransform: scale(1);\n}\n}\n@keyframes lds-ellipsis1-8000fe06 {\n0% {\r\n\t\ttransform: scale(0);\n}\n100% {\r\n\t\ttransform: scale(1);\n}\n}\n@-webkit-keyframes lds-ellipsis3-8000fe06 {\n0% {\r\n\t\ttransform: scale(1);\n}\n100% {\r\n\t\ttransform: scale(0);\n}\n}\n@keyframes lds-ellipsis3-8000fe06 {\n0% {\r\n\t\ttransform: scale(1);\n}\n100% {\r\n\t\ttransform: scale(0);\n}\n}\n@-webkit-keyframes lds-ellipsis2-8000fe06 {\n0% {\r\n\t\ttransform: translate(0, 0);\n}\n100% {\r\n\t\ttransform: translate(15px, 0);\n}\n}\n@keyframes lds-ellipsis2-8000fe06 {\n0% {\r\n\t\ttransform: translate(0, 0);\n}\n100% {\r\n\t\ttransform: translate(15px, 0);\n}\n}\r\n";
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /pages/app/csstools.vue?macro=true ($id_HFD0CKiekG)
// - /pages/app/dashboard.vue?macro=true ($id_27UaHeoNlf)
// - /pages/app/htmltools.vue?macro=true ($id_5tCwnXWusu)
// - /pages/app/index.vue?macro=true ($id_jMwJQMGWuC)
// - /pages/app/jstools.vue?macro=true ($id_Ppfg891ZbL)
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// - /pages/app/dashboard.vue ($id_odXCPZACqv)
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// - /pages/app/index.vue ($id_ERJRVCafPf)
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// Dependencies: 

// --------------------
const $id_PgbhbSnfkR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(
  `${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /pages/app/dashboard.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_dRS2pZfHBq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'dashboard',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({ layout: "app-layout" });
__vite_ssr_import_1__.useHead({ title: "Dashboard - Organic Rankings" });

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "row" }, _attrs))}><div class="col-lg-7 position-relative z-index-2"><div class="row"><div class="col-lg-5 col-sm-5"><div class="card mb-2"><div class="card-header p-3 pt-2"><div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute"><i class="material-icons opacity-10">weekend</i></div><div class="text-end pt-1"><p class="text-sm mb-0 text-capitalize">a</p><h4 class="mb-0">281</h4></div></div><hr class="dark horizontal my-0"><div class="card-footer p-3"><p class="mb-0"><span class="text-success text-sm font-weight-bolder">+55% </span>than last week </p></div></div></div><div class="col-lg-5 col-sm-5 mt-sm-0 mt-4"><div class="card mb-2"><div class="card-header p-3 pt-2 bg-transparent"><div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute"><i class="material-icons opacity-10">store</i></div><div class="text-end pt-1"><p class="text-sm mb-0 text-capitalize">Revenue</p><h4 class="mb-0">34k</h4></div></div><hr class="horizontal my-0 dark"><div class="card-footer p-3"><p class="mb-0"><span class="text-success text-sm font-weight-bolder">+1% </span>than yesterday </p></div></div></div></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/app/dashboard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/pages/app/dashboard.vue"]])
const meta = { layout: "app-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/app/htmltools.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_NeiLMVH4PZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_main = {
  __name: 'htmltools',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_3__.definePageMeta({ layout: "app-layout" });
__vite_ssr_import_4__.useHead({ title: "HTML Tools - Organic Rankings" });


const htmlOptions = [
	{name: 'collapseWhitespace', value: false, label: "Collapse Whitespace (Minify)", toltip: ""},
	{name: 'removeComments', value: false, label: "Remove Comments", toltip: ""},
	{name: 'removeOptionalTags', value: false, label: "Remove optional tags", toltip: ""},
	{name: 'removeEmptyElements', value: false, label: "Remove Empty Elements", toltip: ""},
	{name: 'collapseInlineTagWhitespace', value: false, label: "Collapse Inline Tag Whitespace", toltip: ""},
	{name: 'conservativeCollapse', value: false, label: "Conservative Collapse", toltip: ""},
	{name: 'keepClosingSlash', value: false, label: "Keep Closing Slash", toltip: ""},
	{name: 'preventAttributesEscaping', value: false, label: "Prevent Attributes Escaping", toltip: ""},
	{name: 'removeAttributeQuotes', value: false, label: "Remove Attribute Quotes", toltip: ""},
	{name: 'removeEmptyAttributes', value: false, label: "Remove Empty Attributes", toltip: ""},
	{name: 'removeScriptTypeAttributes', value: false, label: "Remove Script Type Attributes", toltip: ""},
	{name: 'removeStyleLinkTypeAttributes', value: false, label: "Remove Link Type Attributes", toltip: ""},
	{name: 'sortAttributes', value: false, label: "Sort Attributes", toltip: ""},
	{name: 'sortClassName', value: false, label: "Sort Class Name", toltip: ""}
]


const html = __vite_ssr_import_5__.ref('')
const options = __vite_ssr_import_5__.ref(htmlOptions)
const cssClass = __vite_ssr_import_5__.ref('')
const processing = __vite_ssr_import_5__.ref(false)
const cssLength = __vite_ssr_import_5__.ref(0)
const showOutputModal = __vite_ssr_import_5__.ref(false)
const outputHtml = __vite_ssr_import_5__.ref('')
const upload = __vite_ssr_import_5__.ref(false)
const genarate = __vite_ssr_import_5__.ref(false)
const minify = __vite_ssr_import_5__.ref(false)

async function optimizeHtml() {
  showOutputModal.value = true;
  processing.value = true;
  var option = {};
  for (var val of options.value) {
    option[val.name] = val.value;
  }
  await $fetch("/htmlTools", {
    method: "POST",
    body: html.value,
    headers: {
      options: JSON.stringify(option),
      "content-type": "application/octet-stream",
      "cache-control": "no-cache"
    }
  }).then((res) => {
    processing.value = false;
    outputHtml.value = res;
  }).catch((err) => {
    processing.value = false;
    outputHtml.value = "Something went wrong please try again";
  });
}

function checkMinifyOrNot(name) {
  minify.value = (name == "collapseWhitespace") ? true : false;
}

function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("criricalcss"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}


const __returned__ = { htmlOptions, html, options, cssClass, processing, cssLength, showOutputModal, outputHtml, upload, genarate, minify, optimizeHtml, checkMinifyOrNot, copyToClipboard }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsSpinner = __vite_ssr_import_1__.default
  const _component_ElementsProcessing = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)} data-v-e2ebeaf7><div class="row" data-v-e2ebeaf7><div class="col-12" data-v-e2ebeaf7>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "HTML Tools",
    titleClass: "ps-3"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form data-v-e2ebeaf7${
          _scopeId
        }><div class="pb-2" data-v-e2ebeaf7${
          _scopeId
        }><div class="outputSettings me-3" data-v-e2ebeaf7${
          _scopeId
        }><label class="settingLvl" data-v-e2ebeaf7${
          _scopeId
        }>Output Settings</label><div class="form-check ps-0" data-v-e2ebeaf7${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.options, (item, index) => {
          _push(`<label class="form-check-label me-2" data-v-e2ebeaf7${
            _scopeId
          }><input class="form-check-input" type="checkbox"${
            (__vite_ssr_import_7__.ssrIncludeBooleanAttr((Array.isArray(item.value))
              ? __vite_ssr_import_7__.ssrLooseContain(item.value, null)
              : item.value)) ? " checked" : ""
          } data-v-e2ebeaf7${
            _scopeId
          }> ${
            __vite_ssr_import_7__.ssrInterpolate(item.label)
          }</label>`)
        })
        _push(`<!--]--></div></div></div><div class="${
          __vite_ssr_import_7__.ssrRenderClass([$setup.cssClass, "input-group input-group-outline mt-4"])
        }" data-v-e2ebeaf7${
          _scopeId
        }><label class="form-label" data-v-e2ebeaf7${
          _scopeId
        }>All HTML </label><textarea class="form-control" rows="10" data-v-e2ebeaf7${
          _scopeId
        }>${
          __vite_ssr_import_7__.ssrInterpolate($setup.html)
        }</textarea></div><small class="cssLength" data-v-e2ebeaf7${
          _scopeId
        }>${
          __vite_ssr_import_7__.ssrInterpolate($setup.cssLength)
        } character</small><div class="mb-1 text-end mt-4" data-v-e2ebeaf7${
          _scopeId
        }><button class="btn btn-primary" data-v-e2ebeaf7${
          _scopeId
        }>`)
        if (!$setup.processing) {
          _push(`<span data-v-e2ebeaf7${_scopeId}>Genarate</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.processing) {
          _push(`<div data-v-e2ebeaf7${_scopeId}>`)
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Genarating `)
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div></form>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("form", {
            onSubmit: __vite_ssr_import_6__.withModifiers($setup.optimizeHtml, ["prevent"])
          }, [
            __vite_ssr_import_6__.createVNode("div", { class: "pb-2" }, [
              __vite_ssr_import_6__.createVNode("div", { class: "outputSettings me-3" }, [
                __vite_ssr_import_6__.createVNode("label", { class: "settingLvl" }, "Output Settings"),
                __vite_ssr_import_6__.createVNode("div", { class: "form-check ps-0" }, [
                  (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.options, (item, index) => {
                    return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("label", { class: "form-check-label me-2" }, [
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        class: "form-check-input",
                        type: "checkbox",
                        "onUpdate:modelValue": $event => ((item.value) = $event),
                        onClick: $event => ($setup.checkMinifyOrNot(item.name))
                      }, null, 8 /* PROPS */, ["onUpdate:modelValue", "onClick"]), [
                        [__vite_ssr_import_6__.vModelCheckbox, item.value]
                      ]),
                      __vite_ssr_import_6__.createTextVNode(" " + __vite_ssr_import_6__.toDisplayString(item.label), 1 /* TEXT */)
                    ]))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ])
              ])
            ]),
            __vite_ssr_import_6__.createVNode("div", {
              class: ["input-group input-group-outline mt-4", $setup.cssClass]
            }, [
              __vite_ssr_import_6__.createVNode("label", { class: "form-label" }, "All HTML "),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("textarea", {
                class: "form-control",
                rows: "10",
                "onUpdate:modelValue": $event => (($setup.html) = $event)
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.html]
              ])
            ], 2 /* CLASS */),
            __vite_ssr_import_6__.createVNode("small", { class: "cssLength" }, __vite_ssr_import_6__.toDisplayString($setup.cssLength) + " character", 1 /* TEXT */),
            __vite_ssr_import_6__.createVNode("div", { class: "mb-1 text-end mt-4" }, [
              __vite_ssr_import_6__.createVNode("button", { class: "btn btn-primary" }, [
                (!$setup.processing)
                  ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("span", { key: 0 }, "Genarate"))
                  : __vite_ssr_import_6__.createCommentVNode("v-if", true),
                ($setup.processing)
                  ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_6__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_6__.createTextVNode(" Genarating "),
                      __vite_ssr_import_6__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_6__.createCommentVNode("v-if", true)
              ])
            ])
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><!-- Modal -->`)
  if ($setup.showOutputModal) {
    _push(`<div class="modal fade show" aria-modal="true" role="dialog" data-v-e2ebeaf7><div class="modal-dialog modal-dialog-scrollable modal-xl" data-v-e2ebeaf7><div class="modal-content" data-v-e2ebeaf7><div class="modal-header" data-v-e2ebeaf7><h5 class="modal-title" data-v-e2ebeaf7>CSS Output (${__vite_ssr_import_7__.ssrInterpolate($setup.outputHtml.length)} character)</h5><button type="button" class="btn-close" data-v-e2ebeaf7><i class="material-icons" data-v-e2ebeaf7>close</i></button></div><div class="modal-body" data-v-e2ebeaf7>`)
    if ($setup.processing) {
      _push(`<div class="text-success text-center" data-v-e2ebeaf7><p data-v-e2ebeaf7>`)
      if (!$setup.upload) {
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
      } else {
        _push(`<!---->`)
      }
      if ($setup.upload) {
        _push(`<i class="material-icons" data-v-e2ebeaf7>task_alt</i>`)
      } else {
        _push(`<!---->`)
      }
      _push(` Uploading Your CSS. </p>`)
      if ($setup.upload) {
        _push(`<p data-v-e2ebeaf7>`)
        if (!$setup.genarate && $setup.upload) {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        } else {
          _push(`<!---->`)
        }
        if ($setup.genarate) {
          _push(`<i class="material-icons" data-v-e2ebeaf7>task_alt</i>`)
        } else {
          _push(`<!---->`)
        }
        _push(` Genarating Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      if ($setup.genarate) {
        _push(`<p data-v-e2ebeaf7>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        _push(` Downloading Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      _push(`</div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div id="criricalcss" data-v-e2ebeaf7>`)
    if (!$setup.minify) {
      _push(`<pre data-v-e2ebeaf7>${__vite_ssr_import_7__.ssrInterpolate($setup.outputHtml)}</pre>`)
    } else {
      _push(`<div data-v-e2ebeaf7>${__vite_ssr_import_7__.ssrInterpolate($setup.outputHtml)}</div>`)
    }
    _push(`</div></div><div class="modal-footer" data-v-e2ebeaf7><button class="btn btn-secondary" data-v-e2ebeaf7> Close </button>`)
    if ($setup.outputHtml) {
      _push(`<button class="btn btn-primary" data-v-e2ebeaf7> Copy Css </button>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/app/htmltools.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-e2ebeaf7"],['__file',"C:/www/organicrankings/pages/app/htmltools.vue"]])
const meta = { layout: "app-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/app/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_oY1Z7dLZzs = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    /*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({ layout: "app-layout" });
    __vite_ssr_import_1__.useHead({ title: "Dashboard - Organic Rankings" });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/pages/app/index.vue"]]);

const meta = { layout: "app-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/app/jstools.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_VKkuiZMX8E = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/Tooltip.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "jstools",
  setup(__props, { expose }) {
    expose();
    /*#__PURE__*/ false && __vite_ssr_import_4__.definePageMeta({ layout: "app-layout" });
    __vite_ssr_import_5__.useHead({ title: "JS Tools - Organic Rankings" });
    const website = __vite_ssr_import_7__.ref("https://www.organicrankings.com/");
    const css = __vite_ssr_import_7__.ref("");
    const urlClass = __vite_ssr_import_7__.ref("");
    const cssClass = __vite_ssr_import_7__.ref("");
    const processing = __vite_ssr_import_7__.ref(false);
    const cssLength = __vite_ssr_import_7__.ref(0);
    const showOutputModal = __vite_ssr_import_7__.ref(false);
    const outputcss = __vite_ssr_import_7__.ref("");
    const upload = __vite_ssr_import_7__.ref(false);
    const genarate = __vite_ssr_import_7__.ref(false);
    const beautify = __vite_ssr_import_7__.ref(false);
    const todo = __vite_ssr_import_7__.ref("minify");
    const optimize = __vite_ssr_import_7__.ref(1);
    function copyToClipboard() {
      var range = document.createRange();
      range.selectNode(document.getElementById("criricalcss"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    async function genarateCss() {
      if (website.value) {
        showOutputModal.value = true;
        processing.value = true;
        upload.value = false;
        genarate.value = false;
        outputcss.value = "";
        urlClass.value = "";
        cssClass.value = "";
        window.setTimeout(() => {
          if (processing.value) {
            upload.value = true;
          }
        }, 1500);
        window.setTimeout(() => {
          if (processing.value) {
            genarate.value = true;
          }
        }, 3e3);
        await $fetch("https://www.organicrankings.com/criticalcss", {
          method: "POST",
          body: css.value,
          headers: {
            website: website.value,
            todo: todo.value,
            optimize: optimize.value,
            output: beautify.value ? "beautify" : "minify",
            "content-type": "application/octet-stream",
            "url": "https://www.organicrankings.com/",
            "cache-control": "no-cache"
          }
        }).then((res) => {
          processing.value = false;
          outputcss.value = res;
        }).catch((err) => {
          processing.value = false;
          outputcss.value = "Something went wrong please try again";
        });
      } else {
        if (!website.value) {
          urlClass.value = "is-invalid";
        }
        if (!css.value) {
          cssClass.value = "is-invalid";
        }
      }
    }
    __vite_ssr_import_7__.watch(css, async (val) => {
      cssLength.value = val.length;
    });
    const __returned__ = { website, css, urlClass, cssClass, processing, cssLength, showOutputModal, outputcss, upload, genarate, beautify, todo, optimize, copyToClipboard, genarateCss };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default;
  const _component_ElementsTooltip = __vite_ssr_import_1__.default;
  const _component_ElementsSpinner = __vite_ssr_import_2__.default;
  const _component_ElementsProcessing = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(_attrs)} data-v-6823c786><div class="row" data-v-6823c786><div class="col-12" data-v-6823c786>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Javascript Tools",
    titleClass: "ps-3"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form data-v-6823c786${_scopeId}><div class="todo" data-v-6823c786${_scopeId}><div class="${__vite_ssr_import_9__.ssrRenderClass([$setup.todo == "minify" ? "active" : "", "form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"])}" data-v-6823c786${_scopeId}><label class="form-check-label m-0 px-3 py-2" data-v-6823c786${_scopeId}><input class="form-check-input me-1" type="radio" name="option" value="minify"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.todo, "minify")) ? " checked" : ""} data-v-6823c786${_scopeId}> Minify Javascript </label></div><div class="${__vite_ssr_import_9__.ssrRenderClass([$setup.todo == "beautify" ? "active" : "", "form-check form-check-radio btn btn-outline-primary p-0 mb-3"])}" data-v-6823c786${_scopeId}><label class="form-check-label m-0 px-3 py-2" data-v-6823c786${_scopeId}><input class="form-check-input me-1" type="radio" name="option" value="beautify"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.todo, "beautify")) ? " checked" : ""} data-v-6823c786${_scopeId}> Beautify Javascript </label></div></div><div class="pb-2" data-v-6823c786${_scopeId}>`);
        if ($setup.todo == "critical") {
          _push2(`<div class="outputSettings me-3" data-v-6823c786${_scopeId}><label class="settingLvl" data-v-6823c786${_scopeId}>Output Settings</label><div class="form-check form-switch d-flex align-items-center" data-v-6823c786${_scopeId}><div class="${__vite_ssr_import_9__.ssrRenderClass([{ "text-primary": !$setup.beautify }, "toggle me-1"])}" data-v-6823c786${_scopeId}>Minify</div><div class="ms-5 me-2" data-v-6823c786${_scopeId}><input class="form-check-input" type="checkbox"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(Array.isArray($setup.beautify) ? __vite_ssr_import_9__.ssrLooseContain($setup.beautify, null) : $setup.beautify) ? " checked" : ""} data-v-6823c786${_scopeId}></div><div class="${__vite_ssr_import_9__.ssrRenderClass([{ "text-primary": $setup.beautify }, "toggle"])}" data-v-6823c786${_scopeId}>Beautify</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.todo == "minify" || $setup.todo == "critical" && !$setup.beautify) {
          _push2(`<div class="outputSettings" data-v-6823c786${_scopeId}><label class="settingLvl" data-v-6823c786${_scopeId}>Optimization</label><div class="form-check form-check-radio optimize p-0" data-v-6823c786${_scopeId}><label class="form-check-label m-0 pe-3" data-v-6823c786${_scopeId}><input class="form-check-input" type="radio" name="optimize" value="0"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.optimize, "0")) ? " checked" : ""} data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
            default: __vite_ssr_import_8__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`NO`);
              } else {
                return [
                  __vite_ssr_import_8__.createTextVNode("NO")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</label><label class="form-check-label m-0 pe-3" data-v-6823c786${_scopeId}><input class="form-check-input" type="radio" name="optimize" value="1"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.optimize, "1")) ? " checked" : ""} checked data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
            default: __vite_ssr_import_8__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Level 1`);
              } else {
                return [
                  __vite_ssr_import_8__.createTextVNode(" Level 1")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</label><label class="form-check-label m-0 pe-3" data-v-6823c786${_scopeId}><input class="form-check-input" type="radio" name="optimize" value="2"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.optimize, "2")) ? " checked" : ""} data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
            default: __vite_ssr_import_8__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Level 2`);
              } else {
                return [
                  __vite_ssr_import_8__.createTextVNode(" Level 2")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</label></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="${__vite_ssr_import_9__.ssrRenderClass([$setup.cssClass, "input-group input-group-outline mt-4"])}" data-v-6823c786${_scopeId}><label class="form-label" data-v-6823c786${_scopeId}>All Javascript </label><textarea class="form-control" rows="10" data-v-6823c786${_scopeId}>${__vite_ssr_import_9__.ssrInterpolate($setup.css)}</textarea></div><small class="cssLength" data-v-6823c786${_scopeId}>${__vite_ssr_import_9__.ssrInterpolate($setup.cssLength)} character</small><div class="mb-1 text-end mt-4" data-v-6823c786${_scopeId}><button class="btn btn-primary" data-v-6823c786${_scopeId}>`);
        if (!$setup.processing) {
          _push2(`<span data-v-6823c786${_scopeId}>Genarate</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.processing) {
          _push2(`<div data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent2, _scopeId));
          _push2(` Genarating `);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</button></div></form>`);
      } else {
        return [
          __vite_ssr_import_8__.createVNode("form", {
            onSubmit: __vite_ssr_import_8__.withModifiers($setup.genarateCss, ["prevent"])
          }, [
            __vite_ssr_import_8__.createVNode("div", { class: "todo" }, [
              __vite_ssr_import_8__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0", $setup.todo == "minify" ? "active" : ""]
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "minify",
                    "onUpdate:modelValue": ($event) => $setup.todo = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_8__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_8__.createTextVNode(" Minify Javascript ")
                ])
              ], 2),
              __vite_ssr_import_8__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary p-0 mb-3", $setup.todo == "beautify" ? "active" : ""]
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "beautify",
                    "onUpdate:modelValue": ($event) => $setup.todo = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_8__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_8__.createTextVNode(" Beautify Javascript ")
                ])
              ], 2)
            ]),
            __vite_ssr_import_8__.createVNode("div", { class: "pb-2" }, [
              $setup.todo == "critical" ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("div", {
                key: 0,
                class: "outputSettings me-3"
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "settingLvl" }, "Output Settings"),
                __vite_ssr_import_8__.createVNode("div", { class: "form-check form-switch d-flex align-items-center" }, [
                  __vite_ssr_import_8__.createVNode("div", {
                    class: ["toggle me-1", { "text-primary": !$setup.beautify }],
                    onClick: ($event) => $setup.beautify = false
                  }, "Minify", 10, ["onClick"]),
                  __vite_ssr_import_8__.createVNode("div", { class: "ms-5 me-2" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => $setup.beautify = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelCheckbox, $setup.beautify]
                    ])
                  ]),
                  __vite_ssr_import_8__.createVNode("div", {
                    class: ["toggle", { "text-primary": $setup.beautify }],
                    onClick: ($event) => $setup.beautify = true
                  }, "Beautify", 10, ["onClick"])
                ])
              ])) : __vite_ssr_import_8__.createCommentVNode("v-if", true),
              $setup.todo == "minify" || $setup.todo == "critical" && !$setup.beautify ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("div", {
                key: 1,
                class: "outputSettings"
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "settingLvl" }, "Optimization"),
                __vite_ssr_import_8__.createVNode("div", { class: "form-check form-check-radio optimize p-0" }, [
                  __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "radio",
                      name: "optimize",
                      value: "0",
                      "onUpdate:modelValue": ($event) => $setup.optimize = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelRadio, $setup.optimize]
                    ]),
                    __vite_ssr_import_8__.createVNode(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createTextVNode("NO")
                      ]),
                      _: 1
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "radio",
                      name: "optimize",
                      value: "1",
                      "onUpdate:modelValue": ($event) => $setup.optimize = $event,
                      checked: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelRadio, $setup.optimize]
                    ]),
                    __vite_ssr_import_8__.createVNode(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createTextVNode(" Level 1")
                      ]),
                      _: 1
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "radio",
                      name: "optimize",
                      value: "2",
                      "onUpdate:modelValue": ($event) => $setup.optimize = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelRadio, $setup.optimize]
                    ]),
                    __vite_ssr_import_8__.createVNode(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createTextVNode(" Level 2")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])) : __vite_ssr_import_8__.createCommentVNode("v-if", true)
            ]),
            __vite_ssr_import_8__.createVNode("div", {
              class: ["input-group input-group-outline mt-4", $setup.cssClass]
            }, [
              __vite_ssr_import_8__.createVNode("label", { class: "form-label" }, "All Javascript "),
              __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("textarea", {
                class: "form-control",
                rows: "10",
                "onUpdate:modelValue": ($event) => $setup.css = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_8__.vModelText, $setup.css]
              ])
            ], 2),
            __vite_ssr_import_8__.createVNode("small", { class: "cssLength" }, __vite_ssr_import_8__.toDisplayString($setup.cssLength) + " character", 1),
            __vite_ssr_import_8__.createVNode("div", { class: "mb-1 text-end mt-4" }, [
              __vite_ssr_import_8__.createVNode("button", { class: "btn btn-primary" }, [
                !$setup.processing ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("span", { key: 0 }, "Genarate")) : __vite_ssr_import_8__.createCommentVNode("v-if", true),
                $setup.processing ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("div", { key: 1 }, [
                  __vite_ssr_import_8__.createVNode(_component_ElementsSpinner),
                  __vite_ssr_import_8__.createTextVNode(" Genarating "),
                  __vite_ssr_import_8__.createVNode(_component_ElementsProcessing)
                ])) : __vite_ssr_import_8__.createCommentVNode("v-if", true)
              ])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><!-- Modal -->`);
  if ($setup.showOutputModal) {
    _push(`<div class="modal fade show" aria-modal="true" role="dialog" data-v-6823c786><div class="modal-dialog modal-dialog-scrollable modal-xl" data-v-6823c786><div class="modal-content" data-v-6823c786><div class="modal-header" data-v-6823c786><h5 class="modal-title" data-v-6823c786>CSS Output (${__vite_ssr_import_9__.ssrInterpolate($setup.outputcss.length)} character)</h5><button type="button" class="btn-close" data-v-6823c786><i class="material-icons" data-v-6823c786>close</i></button></div><div class="modal-body" data-v-6823c786>`);
    if ($setup.processing) {
      _push(`<div class="text-success text-center" data-v-6823c786><p data-v-6823c786>`);
      if (!$setup.upload) {
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ($setup.upload) {
        _push(`<i class="material-icons" data-v-6823c786>task_alt</i>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Uploading Your CSS. </p>`);
      if ($setup.upload) {
        _push(`<p data-v-6823c786>`);
        if (!$setup.genarate && $setup.upload) {
          _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if ($setup.genarate) {
          _push(`<i class="material-icons" data-v-6823c786>task_alt</i>`);
        } else {
          _push(`<!---->`);
        }
        _push(` Genarating Critical CSS. </p>`);
      } else {
        _push(`<!---->`);
      }
      if ($setup.genarate) {
        _push(`<p data-v-6823c786>`);
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent));
        _push(` Downloading Critical CSS. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div id="criricalcss" data-v-6823c786>`);
    if ($setup.todo == "beautify" || $setup.todo == "critical" && $setup.beautify) {
      _push(`<pre data-v-6823c786>${__vite_ssr_import_9__.ssrInterpolate($setup.outputcss)}</pre>`);
    } else {
      _push(`<div data-v-6823c786>${__vite_ssr_import_9__.ssrInterpolate($setup.outputcss)}</div>`);
    }
    _push(`</div></div><div class="modal-footer" data-v-6823c786><button class="btn btn-secondary" data-v-6823c786> Close </button>`);
    if ($setup.outputcss) {
      _push(`<button class="btn btn-primary" data-v-6823c786> Copy Css </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/jstools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6823c786"], ["__file", "C:/www/organicrankings/pages/app/jstools.vue"]]);

const meta = { layout: "app-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Abu5Z9bR98 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const router = __vite_ssr_import_0__.useRouter();
    router.push("/signin");
    const __returned__ = { router };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/pages/index.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/resetpassword.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_G68cUP9Doq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/InputEmail.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/InputCaptcha.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/SsrLinks.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "resetpassword",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_4__.useHead({
      title: "Reset Password - Organic Rankings"
    });
    /*#__PURE__*/ false && __vite_ssr_import_5__.definePageMeta({ layout: "public-layout" });
    const form = __vite_ssr_import_7__.ref({ email: "asd", confemail: "", captchaValid: false });
    async function passwordResetRequst(form2) {
      if (form2.email && form2.confemail && form2.captchaValid && form2.email == form2.confemail) {
        const response = await $fetch("/passwordresetrequst", {
          method: "POST",
          body: { email: form2.email, confemail: form2.confemail }
        });
      } else {
      }
    }
    const __returned__ = { form, passwordResetRequst };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default;
  const _component_ElementsInputEmail = __vite_ssr_import_1__.default;
  const _component_ElementsInputCaptcha = __vite_ssr_import_2__.default;
  const _component_SsrLinks = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Reset Password",
    titleClass: "font-weight-bolder text-center text-uppercase h3"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form role="form" class="text-start"${_scopeId}>`);
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Email",
          email: $setup.form.email,
          "onUpdate:email": ($event) => $setup.form.email = $event,
          required: true
        }, null, _parent2, _scopeId));
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Confirm Email",
          email: $setup.form.confemail,
          "onUpdate:email": ($event) => $setup.form.confemail = $event,
          class: "mt-4",
          required: true
        }, null, _parent2, _scopeId));
        _push2(`<div class="mt-4"${_scopeId}>`);
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsInputCaptcha, {
          captchaValid: $setup.form.captchaValid,
          "onUpdate:captchaValid": ($event) => $setup.form.captchaValid = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="text-center mt-2"${_scopeId}><button type="submit" class="btn bg-gradient-primary w-100 mt-3"${_scopeId}>Reset</button></div>`);
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_SsrLinks, { reset: false }, null, _parent2, _scopeId));
        _push2(`</form>`);
      } else {
        return [
          __vite_ssr_import_8__.createVNode("form", {
            role: "form",
            class: "text-start",
            onSubmit: __vite_ssr_import_8__.withModifiers(($event) => $setup.passwordResetRequst($setup.form), ["prevent"])
          }, [
            __vite_ssr_import_8__.createVNode(_component_ElementsInputEmail, {
              label: "Email",
              email: $setup.form.email,
              "onUpdate:email": ($event) => $setup.form.email = $event,
              required: true
            }, null, 8, ["email", "onUpdate:email"]),
            __vite_ssr_import_8__.createVNode(_component_ElementsInputEmail, {
              label: "Confirm Email",
              email: $setup.form.confemail,
              "onUpdate:email": ($event) => $setup.form.confemail = $event,
              class: "mt-4",
              required: true
            }, null, 8, ["email", "onUpdate:email"]),
            __vite_ssr_import_8__.createVNode("div", { class: "mt-4" }, [
              __vite_ssr_import_8__.createVNode(_component_ElementsInputCaptcha, {
                captchaValid: $setup.form.captchaValid,
                "onUpdate:captchaValid": ($event) => $setup.form.captchaValid = $event
              }, null, 8, ["captchaValid", "onUpdate:captchaValid"])
            ]),
            __vite_ssr_import_8__.createVNode("div", { class: "text-center mt-2" }, [
              __vite_ssr_import_8__.createVNode("button", {
                type: "submit",
                class: "btn bg-gradient-primary w-100 mt-3"
              }, "Reset")
            ]),
            __vite_ssr_import_8__.createVNode(_component_SsrLinks, { reset: false })
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resetpassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/pages/resetpassword.vue"]]);

const meta = { layout: "public-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/elements/InputEmail.vue
// Parents: 
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_f7j9HF21wo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: {label:String, email:String,required: {type: Boolean,default: false}},
  emits: ['update:email'],
  data() {
    return {
      inputClass: ""
    };
  },
  watch: {
    email: function (val, oldVal) {
      this.inputClass = "";
      if (val != "") {
        if (val.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/)) {
          this.inputClass = "is-valid";
        } else {
          this.inputClass = "is-invalid";
        }
      }
    }
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      class: ["input-group input-group-outline mt-3", $data.inputClass]
    }, _attrs))
  }><label class="form-label">${
    __vite_ssr_import_1__.ssrInterpolate($props.label)
  }</label><input${
    __vite_ssr_import_1__.ssrRenderAttr("value", $props.email)
  } class="form-control" type="email"${
    (__vite_ssr_import_1__.ssrIncludeBooleanAttr($props.required)) ? " required" : ""
  }></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/elements/InputEmail.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/components/elements/InputEmail.vue"]]);
}


// --------------------
// Request: /components/elements/InputCaptcha.vue
// Parents: 
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_xSvPgP2Eq2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'InputCaptcha',
  props: ['captchaValid'],
  emits: ['update:captchaValid'],
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_0__.useHead({
	link: [{ body: true, rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" }],
});



const rotate = __vite_ssr_import_2__.ref(0)
const { pending, data: captchaCode } = __vite_ssr_import_1__.useLazyAsyncData('captchaCode', () => $fetch('/loadcaptcha'), '$KiAOGrvPlX')

function refresh($emit) {
	rotate.value = rotate.value+360;
  $emit('update:captchaValid', false )
	document.getElementById("refresh").style.transform = `rotate(${rotate.value}deg)`;
	__vite_ssr_import_1__.refreshNuxtData('captchaCode')
}

const __returned__ = { rotate, pending, captchaCode, refresh, ref: __vite_ssr_import_2__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "row" }, _attrs))
  }><div class="col-7"><div class="captcha outline-primary">${
    __vite_ssr_import_4__.ssrInterpolate($setup.pending ? '. . . . .' : $setup.captchaCode)
  } <button type="button" class="btn btn-outline-primary refresh"><i class="material-icons" id="refresh">sync</i></button><div class="layar"></div></div></div><div class="col-5"><div class="input-group input-group-outline"><label class="form-label">Captcha</label><input type="text" class="form-control" required></div></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/elements/InputCaptcha.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/components/elements/InputCaptcha.vue"]]);
}


// --------------------
// Request: /components/SsrLinks.vue
// Parents: 
// - /pages/resetpassword.vue?macro=true ($id_Yg6GjLm66l)
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/SsrLinks.vue?vue&type=style&index=0&scoped=1e5a26b3&lang.css ($id_FuDchW3Aqz)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_3YBnAYKnYJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  __name: 'SsrLinks',
  props: {
	signin: {
		default: true,
	},
	signup: {
		default: true,
	},
	reset: {
		default: true,
	},
},
  setup(__props, { expose }) {
  expose();

const props = __props



const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<p${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "mt-2 mb-3 text-sm d-flex justify-content-between" }, _attrs))} data-v-1e5a26b3>`)
  if ($props.signin) {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
      class: "text-primary text-gradient font-weight-bold",
      to: "/signin"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="material-icons" data-v-1e5a26b3${_scopeId}>fingerprint</i> Sign in `)
        } else {
          return [
            __vite_ssr_import_1__.createVNode("i", { class: "material-icons" }, "fingerprint"),
            __vite_ssr_import_1__.createTextVNode(" Sign in ")
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  if ($props.signup) {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
      class: "text-primary text-gradient font-weight-bold",
      to: "/signup"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="material-icons" data-v-1e5a26b3${_scopeId}>person_add</i> Sign up `)
        } else {
          return [
            __vite_ssr_import_1__.createVNode("i", { class: "material-icons" }, "person_add"),
            __vite_ssr_import_1__.createTextVNode(" Sign up ")
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  if ($props.reset) {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
      class: "text-primary text-gradient font-weight-bold",
      to: "/resetpassword"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="material-icons" data-v-1e5a26b3${_scopeId}>lock</i> Reset Password `)
        } else {
          return [
            __vite_ssr_import_1__.createVNode("i", { class: "material-icons" }, "lock"),
            __vite_ssr_import_1__.createTextVNode(" Reset Password ")
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`</p>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/SsrLinks.vue?vue&type=style&index=0&scoped=1e5a26b3&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/SsrLinks.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1e5a26b3"],['__file',"C:/www/organicrankings/components/SsrLinks.vue"]]);
}


// --------------------
// Request: /components/SsrLinks.vue?vue&type=style&index=0&scoped=1e5a26b3&lang.css
// Parents: 
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// Dependencies: 

// --------------------
const $id_JRlYVN4fYY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\ni.material-icons[data-v-1e5a26b3] {\r\n\tvertical-align: text-bottom;\n}\r\n";
}


// --------------------
// Request: /pages/signin.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_YYkkeVIgQ0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/InputEmail.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/InputPassword.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/SsrLinks.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'signin',
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_6__.useHead({ title: "Sign in - Organic Rankings" });
/*#__PURE__*/ false && __vite_ssr_import_7__.definePageMeta({ layout: "public-layout" });

const checking = __vite_ssr_import_9__.ref(false)
const loginStatus = __vite_ssr_import_9__.ref('')
const email = __vite_ssr_import_9__.ref('test@gmail.com')
const password = __vite_ssr_import_9__.ref('123456')
const emailCls = __vite_ssr_import_9__.ref('')
const passCls = __vite_ssr_import_9__.ref('')

async function requstSignin() {
	const router = __vite_ssr_import_8__.useRouter();
	checking.value = true;
	const response = await $fetch("/requstSignin", {
		method: "POST",
		body: { email: email.value, password: password.value },
	});
	if (response.login) {
		router.push("/app");
	} else {
		loginStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${response.message}</span>`;
	}
	checking.value = false;
	window.setInterval(() => {
		loginStatus.value = "";
	}, 3500);
}


const __returned__ = { checking, loginStatus, email, password, emailCls, passCls, requstSignin, ref: __vite_ssr_import_9__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsInputEmail = __vite_ssr_import_1__.default
  const _component_ElementsInputPassword = __vite_ssr_import_2__.default
  const _component_ElementsSpinner = __vite_ssr_import_3__.default
  const _component_ElementsProcessing = __vite_ssr_import_4__.default
  const _component_SsrLinks = __vite_ssr_import_5__.default

  _push(`<div${__vite_ssr_import_11__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Sign In",
    titleClass: "font-weight-bolder text-center text-uppercase h3"
  }, {
    default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form role="form" class="text-start"${_scopeId}>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Email",
          email: $setup.email,
          "onUpdate:email": $event => (($setup.email) = $event),
          class: $setup.emailCls,
          required: true
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputPassword, {
          label: "Password",
          password: $setup.password,
          "onUpdate:password": $event => (($setup.password) = $event),
          class: ["mt-4", $setup.passCls],
          required: true
        }, null, _parent, _scopeId))
        _push(`<div class="form-check form-switch d-flex align-items-center mb-3 mt-4"${
          _scopeId
        }><input class="form-check-input" type="checkbox" id="rememberMe"${
          _scopeId
        }><label class="form-check-label mb-0 ms-3" for="rememberMe"${
          _scopeId
        }> Remember me </label></div><div class="text-center"${
          _scopeId
        }><button type="submit" class="btn bg-gradient-primary w-100 mt-2"${
          _scopeId
        }>`)
        if (!$setup.checking) {
          _push(`<span${_scopeId}>Sign in</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.checking) {
          _push(`<div${_scopeId}>`)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Checking `)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div><div class="text-center"${
          __vite_ssr_import_11__.ssrRenderAttr("innerHTML", $setup.loginStatus)
        }${
          _scopeId
        }></div>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_SsrLinks, { signin: false }, null, _parent, _scopeId))
        _push(`</form>`)
      } else {
        return [
          __vite_ssr_import_10__.createVNode("form", {
            role: "form",
            class: "text-start",
            onSubmit: __vite_ssr_import_10__.withModifiers($setup.requstSignin, ["prevent"])
          }, [
            __vite_ssr_import_10__.createVNode(_component_ElementsInputEmail, {
              label: "Email",
              email: $setup.email,
              "onUpdate:email": $event => (($setup.email) = $event),
              class: $setup.emailCls,
              required: true
            }, null, 8 /* PROPS */, ["email", "onUpdate:email", "class"]),
            __vite_ssr_import_10__.createVNode(_component_ElementsInputPassword, {
              label: "Password",
              password: $setup.password,
              "onUpdate:password": $event => (($setup.password) = $event),
              class: ["mt-4", $setup.passCls],
              required: true
            }, null, 8 /* PROPS */, ["password", "onUpdate:password", "class"]),
            __vite_ssr_import_10__.createVNode("div", { class: "form-check form-switch d-flex align-items-center mb-3 mt-4" }, [
              __vite_ssr_import_10__.createVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                id: "rememberMe"
              }),
              __vite_ssr_import_10__.createVNode("label", {
                class: "form-check-label mb-0 ms-3",
                for: "rememberMe"
              }, " Remember me ")
            ]),
            __vite_ssr_import_10__.createVNode("div", { class: "text-center" }, [
              __vite_ssr_import_10__.createVNode("button", {
                type: "submit",
                class: "btn bg-gradient-primary w-100 mt-2"
              }, [
                (!$setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("span", { key: 0 }, "Sign in"))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true),
                ($setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_10__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_10__.createTextVNode(" Checking "),
                      __vite_ssr_import_10__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true)
              ])
            ]),
            __vite_ssr_import_10__.createVNode("div", {
              class: "text-center",
              innerHTML: $setup.loginStatus
            }, null, 8 /* PROPS */, ["innerHTML"]),
            __vite_ssr_import_10__.createVNode(_component_SsrLinks, { signin: false })
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/signin.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/pages/signin.vue"]])
const meta = { layout: "public-layout" }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/elements/InputPassword.vue
// Parents: 
// - /pages/signin.vue?macro=true ($id_AXlB8HQX1T)
// - /pages/signup.vue?macro=true ($id_ro0CSgIs9z)
// - /pages/signin.vue ($id_Cn17mYC1zo)
// - /pages/signup.vue ($id_MeuSvnwKkO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_UQ6QpqQah9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  props: { label: String, password: String, required: { type: Boolean, default: false } },
  emits: ["update:password"],
  data() {
    return {
      inputClass: ""
    };
  },
  watch: {
    password: function(val) {
      this.inputClass = "";
      if (val != "") {
        if (val.length > 5) {
          this.inputClass = "is-valid";
        } else {
          this.inputClass = "is-invalid";
        }
      }
    }
  }
};
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "passGrpup" }, _attrs))}><div class="${__vite_ssr_import_1__.ssrRenderClass([$data.inputClass, "input-group input-group-outline mt-3"])}"><label class="form-label">${__vite_ssr_import_1__.ssrInterpolate($props.label)}</label><input${__vite_ssr_import_1__.ssrRenderAttr("value", $props.password)} class="form-control" type="password"${__vite_ssr_import_1__.ssrIncludeBooleanAttr($props.required) ? " required" : ""}></div></div>`);
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/InputPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/components/elements/InputPassword.vue"]]);
;
}


// --------------------
// Request: /pages/signup.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_XzxhBfjpAn = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/InputEmail.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/InputPassword.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/SsrLinks.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'signup',
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_6__.useHead({ title: "Sign up - Organic Rankings" });
/*#__PURE__*/ false && __vite_ssr_import_7__.definePageMeta({
	layout: "public-layout",
});

const checking = __vite_ssr_import_9__.ref(false)
const email = __vite_ssr_import_9__.ref('')
const emailCls = __vite_ssr_import_9__.ref('')
const signupStatus = __vite_ssr_import_9__.ref('')
const password = __vite_ssr_import_9__.ref('')
const confpass = __vite_ssr_import_9__.ref('')

async function requstSignup() {
	if ((email.value && email.value.length > 7) && (password.value && password.value.length > 5) && (password.value === confpass.value)) {
		const router = __vite_ssr_import_8__.useRouter();
		checking.value = true;
		const response = await $fetch("/requstSignup", {
			method: "POST",
			body: { email: email.value, password: password.value, confpass: confpass.value },
		});
		if (response.signup) {
			router.push("/app");
		} else {
			signupStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${response.message}</span>`;
		}
		checking.value = false;
		window.setInterval(() => {
			signupStatus.value = "";
		}, 3500);
	} else {
		if (!email.value || email.value.length < 6)
			emailCls.value = "is-invalid";

		window.setInterval(() => {
			emailCls.value = "";
		}, 2000);
	}
}

const __returned__ = { checking, email, emailCls, signupStatus, password, confpass, requstSignup, ref: __vite_ssr_import_9__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsInputEmail = __vite_ssr_import_1__.default
  const _component_ElementsInputPassword = __vite_ssr_import_2__.default
  const _component_ElementsSpinner = __vite_ssr_import_3__.default
  const _component_ElementsProcessing = __vite_ssr_import_4__.default
  const _component_SsrLinks = __vite_ssr_import_5__.default

  _push(`<div${__vite_ssr_import_11__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Sign Up",
    titleClass: "font-weight-bolder text-center text-uppercase h3"
  }, {
    default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form role="form" class="text-start"${_scopeId}>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Email",
          email: $setup.email,
          "onUpdate:email": $event => (($setup.email) = $event),
          class: $setup.emailCls,
          required: true
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputPassword, {
          label: "Password",
          password: $setup.password,
          "onUpdate:password": $event => (($setup.password) = $event),
          class: "mt-4"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputPassword, {
          label: "Confirm Password",
          password: $setup.confpass,
          "onUpdate:password": $event => (($setup.confpass) = $event),
          class: "mt-4"
        }, null, _parent, _scopeId))
        _push(`<div class="text-center"${
          _scopeId
        }><button type="submit" class="btn bg-gradient-primary w-100 mt-2"${
          _scopeId
        }>`)
        if (!$setup.checking) {
          _push(`<span${_scopeId}>Sign up</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.checking) {
          _push(`<div${_scopeId}>`)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Checking `)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div><div class="text-center"${
          __vite_ssr_import_11__.ssrRenderAttr("innerHTML", $setup.signupStatus)
        }${
          _scopeId
        }></div>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_SsrLinks, { signup: false }, null, _parent, _scopeId))
        _push(`</form>`)
      } else {
        return [
          __vite_ssr_import_10__.createVNode("form", {
            role: "form",
            class: "text-start",
            onSubmit: __vite_ssr_import_10__.withModifiers($setup.requstSignup, ["prevent"])
          }, [
            __vite_ssr_import_10__.createVNode(_component_ElementsInputEmail, {
              label: "Email",
              email: $setup.email,
              "onUpdate:email": $event => (($setup.email) = $event),
              class: $setup.emailCls,
              required: true
            }, null, 8 /* PROPS */, ["email", "onUpdate:email", "class"]),
            __vite_ssr_import_10__.createVNode(_component_ElementsInputPassword, {
              label: "Password",
              password: $setup.password,
              "onUpdate:password": $event => (($setup.password) = $event),
              class: "mt-4"
            }, null, 8 /* PROPS */, ["password", "onUpdate:password"]),
            __vite_ssr_import_10__.createVNode(_component_ElementsInputPassword, {
              label: "Confirm Password",
              password: $setup.confpass,
              "onUpdate:password": $event => (($setup.confpass) = $event),
              class: "mt-4"
            }, null, 8 /* PROPS */, ["password", "onUpdate:password"]),
            __vite_ssr_import_10__.createVNode("div", { class: "text-center" }, [
              __vite_ssr_import_10__.createVNode("button", {
                type: "submit",
                class: "btn bg-gradient-primary w-100 mt-2"
              }, [
                (!$setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("span", { key: 0 }, "Sign up"))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true),
                ($setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_10__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_10__.createTextVNode(" Checking "),
                      __vite_ssr_import_10__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true)
              ])
            ]),
            __vite_ssr_import_10__.createVNode("div", {
              class: "text-center",
              innerHTML: $setup.signupStatus
            }, null, 8 /* PROPS */, ["innerHTML"]),
            __vite_ssr_import_10__.createVNode(_component_SsrLinks, { signup: false })
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/signup.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/pages/signup.vue"]])
const meta = {
	layout: "public-layout",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/app/csstools.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/app/csstools.vue?vue&type=style&index=0&scoped=ac7a0ea1&lang.css ($id_E646jJtWCY)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_9BfplwZf5b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/Tooltip.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'csstools',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_4__.definePageMeta({ layout: "app-layout" });
__vite_ssr_import_5__.useHead({ title: "CSS Tools - Organic Rankings" });

const website = __vite_ssr_import_6__.ref('https://www.organicrankings.com/')
const css = __vite_ssr_import_6__.ref('')
const urlClass = __vite_ssr_import_6__.ref('')
const cssClass = __vite_ssr_import_6__.ref('')
const processing = __vite_ssr_import_6__.ref(false)
const cssLength = __vite_ssr_import_6__.ref(0)
const showOutputModal = __vite_ssr_import_6__.ref(false)
const outputcss = __vite_ssr_import_6__.ref('')
const upload = __vite_ssr_import_6__.ref(false)
const genarate = __vite_ssr_import_6__.ref(false)
const beautify = __vite_ssr_import_6__.ref(false)
const todo = __vite_ssr_import_6__.ref('critical')
const optimize = __vite_ssr_import_6__.ref(1)



function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("criricalcss"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

async function genarateCss() {
	if (website.value) {
		showOutputModal.value = true;
		processing.value = true;
		upload.value = false;
		genarate.value = false;
		outputcss.value = "";
		urlClass.value = "";
		cssClass.value = "";
		window.setTimeout(() => { if (processing.value) { upload.value = true; } }, 1500);
		window.setTimeout(() => { if (processing.value) { genarate.value = true; } }, 3000);


		await $fetch("https://www.organicrankings.com/criticalcss", {
			method: "POST",
			body: css.value,
			headers: {
				website: website.value,
				todo: todo.value,
				optimize: optimize.value,
				output: beautify.value ? 'beautify' : 'minify',
				"content-type": "application/octet-stream",
				"url": "https://www.organicrankings.com/",
				"cache-control": "no-cache"
			}
		}).then((res) => {
			processing.value = false;
			outputcss.value = res;
		}).catch((err) => {
			processing.value = false;
			outputcss.value = "Something went wrong please try again";
		});
	} else {
		if (!website.value) {
			urlClass.value = "is-invalid"
		}
		if (!css.value) {
			cssClass.value = "is-invalid"
		}
	}
}

__vite_ssr_import_6__.watch(css, async (val) => {
	cssLength.value = val.length;
})



const __returned__ = { website, css, urlClass, cssClass, processing, cssLength, showOutputModal, outputcss, upload, genarate, beautify, todo, optimize, copyToClipboard, genarateCss, ref: __vite_ssr_import_6__.ref, watch: __vite_ssr_import_6__.watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsTooltip = __vite_ssr_import_1__.default
  const _component_ElementsSpinner = __vite_ssr_import_2__.default
  const _component_ElementsProcessing = __vite_ssr_import_3__.default

  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)} data-v-ac7a0ea1><div class="row" data-v-ac7a0ea1><div class="col-12" data-v-ac7a0ea1>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "CSS Tools",
    titleClass: "ps-3"
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form data-v-ac7a0ea1${
          _scopeId
        }><div class="todo" data-v-ac7a0ea1${
          _scopeId
        }><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.todo == 'critical' ? 'active' : '', "form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-check-label m-0 px-3 py-2" data-v-ac7a0ea1${
          _scopeId
        }><input class="form-check-input me-1" type="radio" name="option" value="critical"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.todo, "critical"))) ? " checked" : ""
        } checked data-v-ac7a0ea1${
          _scopeId
        }> Genarate Critical CSS </label></div><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.todo == 'minify' ? 'active' : '', "form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-check-label m-0 px-3 py-2" data-v-ac7a0ea1${
          _scopeId
        }><input class="form-check-input me-1" type="radio" name="option" value="minify"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.todo, "minify"))) ? " checked" : ""
        } data-v-ac7a0ea1${
          _scopeId
        }> Minify CSS </label></div><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.todo == 'beautify' ? 'active' : '', "form-check form-check-radio btn btn-outline-primary p-0 mb-3"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-check-label m-0 px-3 py-2" data-v-ac7a0ea1${
          _scopeId
        }><input class="form-check-input me-1" type="radio" name="option" value="beautify"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.todo, "beautify"))) ? " checked" : ""
        } data-v-ac7a0ea1${
          _scopeId
        }> Beautify CSS </label></div></div>`)
        if ($setup.todo == 'critical') {
          _push(`<div class="${
            __vite_ssr_import_8__.ssrRenderClass([$setup.urlClass, "input-group input-group-outline mt-3"])
          }" data-v-ac7a0ea1${
            _scopeId
          }><label class="form-label" data-v-ac7a0ea1${
            _scopeId
          }>Website URL</label><input type="url" class="form-control"${
            __vite_ssr_import_8__.ssrRenderAttr("value", $setup.website)
          } data-v-ac7a0ea1${
            _scopeId
          }></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<div class="pb-2" data-v-ac7a0ea1${_scopeId}>`)
        if ($setup.todo == 'critical') {
          _push(`<div class="outputSettings me-3" data-v-ac7a0ea1${
            _scopeId
          }><label class="settingLvl" data-v-ac7a0ea1${
            _scopeId
          }>Output Settings</label><div class="form-check form-switch d-flex align-items-center" data-v-ac7a0ea1${
            _scopeId
          }><div class="${
            __vite_ssr_import_8__.ssrRenderClass([{ 'text-primary': !$setup.beautify }, "toggle me-1"])
          }" data-v-ac7a0ea1${
            _scopeId
          }>Minify</div><div class="ms-5 me-2" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="checkbox"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr((Array.isArray($setup.beautify))
              ? __vite_ssr_import_8__.ssrLooseContain($setup.beautify, null)
              : $setup.beautify)) ? " checked" : ""
          } data-v-ac7a0ea1${
            _scopeId
          }></div><div class="${
            __vite_ssr_import_8__.ssrRenderClass([{ 'text-primary': $setup.beautify }, "toggle"])
          }" data-v-ac7a0ea1${
            _scopeId
          }>Beautify</div></div></div>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.todo == 'minify' || ($setup.todo == 'critical' && !$setup.beautify)) {
          _push(`<div class="outputSettings" data-v-ac7a0ea1${
            _scopeId
          }><label class="settingLvl" data-v-ac7a0ea1${
            _scopeId
          }>Optimization</label><div class="form-check form-check-radio optimize p-0" data-v-ac7a0ea1${
            _scopeId
          }><label class="form-check-label m-0 pe-3" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="radio" name="optimize" value="0"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.optimize, "0"))) ? " checked" : ""
          } data-v-ac7a0ea1${
            _scopeId
          }>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`NO`)
              } else {
                return [
                  __vite_ssr_import_7__.createTextVNode("NO")
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`</label><label class="form-check-label m-0 pe-3" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="radio" name="optimize" value="1"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.optimize, "1"))) ? " checked" : ""
          } checked data-v-ac7a0ea1${
            _scopeId
          }>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(` Level 1`)
              } else {
                return [
                  __vite_ssr_import_7__.createTextVNode(" Level 1")
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`</label><label class="form-check-label m-0 pe-3" data-v-ac7a0ea1${
            _scopeId
          }><input class="form-check-input" type="radio" name="optimize" value="2"${
            (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.optimize, "2"))) ? " checked" : ""
          } data-v-ac7a0ea1${
            _scopeId
          }>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(` Level 2`)
              } else {
                return [
                  __vite_ssr_import_7__.createTextVNode(" Level 2")
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`</label></div></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div><div class="${
          __vite_ssr_import_8__.ssrRenderClass([$setup.cssClass, "input-group input-group-outline mt-4"])
        }" data-v-ac7a0ea1${
          _scopeId
        }><label class="form-label" data-v-ac7a0ea1${
          _scopeId
        }>All CSS </label><textarea class="form-control" rows="10" data-v-ac7a0ea1${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.css)
        }</textarea></div><small class="text-info" data-v-ac7a0ea1${
          _scopeId
        }>Copy all CSS styles from your website and paste them above.</small><small class="cssLength" data-v-ac7a0ea1${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.cssLength)
        } character</small><div class="mb-1 text-end mt-4" data-v-ac7a0ea1${
          _scopeId
        }><button class="btn btn-primary" data-v-ac7a0ea1${
          _scopeId
        }>`)
        if (!$setup.processing) {
          _push(`<span data-v-ac7a0ea1${_scopeId}>Genarate</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.processing) {
          _push(`<div data-v-ac7a0ea1${_scopeId}>`)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Genarating `)
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div></form>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("form", {
            onSubmit: __vite_ssr_import_7__.withModifiers($setup.genarateCss, ["prevent"])
          }, [
            __vite_ssr_import_7__.createVNode("div", { class: "todo" }, [
              __vite_ssr_import_7__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0", $setup.todo == 'critical' ? 'active' : '']
              }, [
                __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "critical",
                    "onUpdate:modelValue": $event => (($setup.todo) = $event),
                    checked: ""
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_7__.createTextVNode(" Genarate Critical CSS ")
                ])
              ], 2 /* CLASS */),
              __vite_ssr_import_7__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0", $setup.todo == 'minify' ? 'active' : '']
              }, [
                __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "minify",
                    "onUpdate:modelValue": $event => (($setup.todo) = $event)
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_7__.createTextVNode(" Minify CSS ")
                ])
              ], 2 /* CLASS */),
              __vite_ssr_import_7__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary p-0 mb-3", $setup.todo == 'beautify' ? 'active' : '']
              }, [
                __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "beautify",
                    "onUpdate:modelValue": $event => (($setup.todo) = $event)
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_7__.createTextVNode(" Beautify CSS ")
                ])
              ], 2 /* CLASS */)
            ]),
            ($setup.todo == 'critical')
              ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                  key: 0,
                  class: ["input-group input-group-outline mt-3", $setup.urlClass]
                }, [
                  __vite_ssr_import_7__.createVNode("label", { class: "form-label" }, "Website URL"),
                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                    type: "url",
                    class: "form-control",
                    "onUpdate:modelValue": $event => (($setup.website) = $event)
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_7__.vModelText, $setup.website]
                  ])
                ], 2 /* CLASS */))
              : __vite_ssr_import_7__.createCommentVNode("v-if", true),
            __vite_ssr_import_7__.createVNode("div", { class: "pb-2" }, [
              ($setup.todo == 'critical')
                ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                    key: 0,
                    class: "outputSettings me-3"
                  }, [
                    __vite_ssr_import_7__.createVNode("label", { class: "settingLvl" }, "Output Settings"),
                    __vite_ssr_import_7__.createVNode("div", { class: "form-check form-switch d-flex align-items-center" }, [
                      __vite_ssr_import_7__.createVNode("div", {
                        class: ["toggle me-1", { 'text-primary': !$setup.beautify }],
                        onClick: $event => ($setup.beautify = false)
                      }, "Minify", 10 /* CLASS, PROPS */, ["onClick"]),
                      __vite_ssr_import_7__.createVNode("div", { class: "ms-5 me-2" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          "onUpdate:modelValue": $event => (($setup.beautify) = $event)
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelCheckbox, $setup.beautify]
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", {
                        class: ["toggle", { 'text-primary': $setup.beautify }],
                        onClick: $event => ($setup.beautify = true)
                      }, "Beautify", 10 /* CLASS, PROPS */, ["onClick"])
                    ])
                  ]))
                : __vite_ssr_import_7__.createCommentVNode("v-if", true),
              ($setup.todo == 'minify' || ($setup.todo == 'critical' && !$setup.beautify))
                ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                    key: 1,
                    class: "outputSettings"
                  }, [
                    __vite_ssr_import_7__.createVNode("label", { class: "settingLvl" }, "Optimization"),
                    __vite_ssr_import_7__.createVNode("div", { class: "form-check form-check-radio optimize p-0" }, [
                      __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "radio",
                          name: "optimize",
                          value: "0",
                          "onUpdate:modelValue": $event => (($setup.optimize) = $event)
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.optimize]
                        ]),
                        __vite_ssr_import_7__.createVNode(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createTextVNode("NO")
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "radio",
                          name: "optimize",
                          value: "1",
                          "onUpdate:modelValue": $event => (($setup.optimize) = $event),
                          checked: ""
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.optimize]
                        ]),
                        __vite_ssr_import_7__.createVNode(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createTextVNode(" Level 1")
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      __vite_ssr_import_7__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          class: "form-check-input",
                          type: "radio",
                          name: "optimize",
                          value: "2",
                          "onUpdate:modelValue": $event => (($setup.optimize) = $event)
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.optimize]
                        ]),
                        __vite_ssr_import_7__.createVNode(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createTextVNode(" Level 2")
                          ]),
                          _: 1 /* STABLE */
                        })
                      ])
                    ])
                  ]))
                : __vite_ssr_import_7__.createCommentVNode("v-if", true)
            ]),
            __vite_ssr_import_7__.createVNode("div", {
              class: ["input-group input-group-outline mt-4", $setup.cssClass]
            }, [
              __vite_ssr_import_7__.createVNode("label", { class: "form-label" }, "All CSS "),
              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                class: "form-control",
                rows: "10",
                "onUpdate:modelValue": $event => (($setup.css) = $event)
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_7__.vModelText, $setup.css]
              ])
            ], 2 /* CLASS */),
            __vite_ssr_import_7__.createVNode("small", { class: "text-info" }, "Copy all CSS styles from your website and paste them above."),
            __vite_ssr_import_7__.createVNode("small", { class: "cssLength" }, __vite_ssr_import_7__.toDisplayString($setup.cssLength) + " character", 1 /* TEXT */),
            __vite_ssr_import_7__.createVNode("div", { class: "mb-1 text-end mt-4" }, [
              __vite_ssr_import_7__.createVNode("button", { class: "btn btn-primary" }, [
                (!$setup.processing)
                  ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("span", { key: 0 }, "Genarate"))
                  : __vite_ssr_import_7__.createCommentVNode("v-if", true),
                ($setup.processing)
                  ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_7__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_7__.createTextVNode(" Genarating "),
                      __vite_ssr_import_7__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_7__.createCommentVNode("v-if", true)
              ])
            ])
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><!-- Modal -->`)
  if ($setup.showOutputModal) {
    _push(`<div class="modal fade show" aria-modal="true" role="dialog" data-v-ac7a0ea1><div class="modal-dialog modal-dialog-scrollable modal-xl" data-v-ac7a0ea1><div class="modal-content" data-v-ac7a0ea1><div class="modal-header" data-v-ac7a0ea1><h5 class="modal-title" data-v-ac7a0ea1>CSS Output (${__vite_ssr_import_8__.ssrInterpolate($setup.outputcss.length)} character)</h5><button type="button" class="btn-close" data-v-ac7a0ea1><i class="material-icons" data-v-ac7a0ea1>close</i></button></div><div class="modal-body" data-v-ac7a0ea1>`)
    if ($setup.processing) {
      _push(`<div class="text-success text-center" data-v-ac7a0ea1><p data-v-ac7a0ea1>`)
      if (!$setup.upload) {
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
      } else {
        _push(`<!---->`)
      }
      if ($setup.upload) {
        _push(`<i class="material-icons" data-v-ac7a0ea1>task_alt</i>`)
      } else {
        _push(`<!---->`)
      }
      _push(` Uploading Your CSS. </p>`)
      if ($setup.upload) {
        _push(`<p data-v-ac7a0ea1>`)
        if (!$setup.genarate && $setup.upload) {
          _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        } else {
          _push(`<!---->`)
        }
        if ($setup.genarate) {
          _push(`<i class="material-icons" data-v-ac7a0ea1>task_alt</i>`)
        } else {
          _push(`<!---->`)
        }
        _push(` Genarating Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      if ($setup.genarate) {
        _push(`<p data-v-ac7a0ea1>`)
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        _push(` Downloading Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      _push(`</div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div id="criricalcss" data-v-ac7a0ea1>`)
    if ($setup.todo == 'beautify' || ($setup.todo == 'critical' && $setup.beautify)) {
      _push(`<pre data-v-ac7a0ea1>${__vite_ssr_import_8__.ssrInterpolate($setup.outputcss)}</pre>`)
    } else {
      _push(`<div data-v-ac7a0ea1>${__vite_ssr_import_8__.ssrInterpolate($setup.outputcss)}</div>`)
    }
    _push(`</div></div><div class="modal-footer" data-v-ac7a0ea1><button class="btn btn-secondary" data-v-ac7a0ea1> Close </button>`)
    if ($setup.outputcss) {
      _push(`<button class="btn btn-primary" data-v-ac7a0ea1> Copy Css </button>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/app/csstools.vue?vue&type=style&index=0&scoped=ac7a0ea1&lang.css");


const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/app/csstools.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-ac7a0ea1"],['__file',"C:/www/organicrankings/pages/app/csstools.vue"]]);
}


// --------------------
// Request: /pages/app/csstools.vue?vue&type=style&index=0&scoped=ac7a0ea1&lang.css
// Parents: 
// - /pages/app/csstools.vue ($id_2UD7rzu8BL)
// Dependencies: 

// --------------------
const $id_arVKCymY8s = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.todo input[data-v-ac7a0ea1] {\r\n\tdisplay: none;\n}\n.form-check.active label[data-v-ac7a0ea1] {\r\n\tcolor: #fff !important\n}\n.cssLength[data-v-ac7a0ea1] {\r\n\tfloat: right;\n}\n.modal[data-v-ac7a0ea1] {\r\n\tdisplay: block;\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\n}\n.modal-body .material-icons[data-v-ac7a0ea1] {\r\n\tvertical-align: middle;\n}\n.btn-close[data-v-ac7a0ea1] {\r\n\tpadding: 0;\n}\n.btn-close .material-icons[data-v-ac7a0ea1] {\r\n\tcolor: black;\r\n\tvertical-align: top;\n}\n.form-switch[data-v-ac7a0ea1] {\r\n\tpadding-left: 0 !important;\n}\n.todo label[data-v-ac7a0ea1] {\r\n\ttext-transform: capitalize;\n}\n.toggle[data-v-ac7a0ea1] {\r\n\tcursor: pointer;\n}\n.form-check-input[data-v-ac7a0ea1] {\r\n\tmargin-right: 5px;\r\n\tvertical-align: text-bottom;\n}\n.form-check:not(.form-switch) .form-check-input[type=\"radio\"][data-v-ac7a0ea1]:after {\r\n\twidth: 0.8rem;\r\n\theight: 0.8rem;\n}\n.outputSettings[data-v-ac7a0ea1] {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tborder: 1px solid #d2d6da;\r\n\tborder-radius: 0.375rem;\r\n\tmargin: 30px 0 0 0;\r\n\tpadding: 15px 10px 10px 10px;\n}\n.outputSettings .settingLvl[data-v-ac7a0ea1] {\r\n\tposition: absolute;\r\n\ttop: -15px;\r\n\tfont-weight: bold;\r\n\tbackground: #fff;\r\n\tleft: 2px;\r\n\tpadding: 3px;\n}\r\n";
}


// --------------------
// Request: /pages/app/dashboard.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_2mqzKDTAoe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'dashboard',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({ layout: "app-layout" });
__vite_ssr_import_1__.useHead({ title: "Dashboard - Organic Rankings" });

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "row" }, _attrs))}><div class="col-lg-7 position-relative z-index-2"><div class="row"><div class="col-lg-5 col-sm-5"><div class="card mb-2"><div class="card-header p-3 pt-2"><div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute"><i class="material-icons opacity-10">weekend</i></div><div class="text-end pt-1"><p class="text-sm mb-0 text-capitalize">a</p><h4 class="mb-0">281</h4></div></div><hr class="dark horizontal my-0"><div class="card-footer p-3"><p class="mb-0"><span class="text-success text-sm font-weight-bolder">+55% </span>than last week </p></div></div></div><div class="col-lg-5 col-sm-5 mt-sm-0 mt-4"><div class="card mb-2"><div class="card-header p-3 pt-2 bg-transparent"><div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute"><i class="material-icons opacity-10">store</i></div><div class="text-end pt-1"><p class="text-sm mb-0 text-capitalize">Revenue</p><h4 class="mb-0">34k</h4></div></div><hr class="horizontal my-0 dark"><div class="card-footer p-3"><p class="mb-0"><span class="text-success text-sm font-weight-bolder">+1% </span>than yesterday </p></div></div></div></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/app/dashboard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/pages/app/dashboard.vue"]]);
}


// --------------------
// Request: /pages/app/htmltools.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/app/htmltools.vue?vue&type=style&index=0&scoped=e2ebeaf7&lang.css ($id_vbTj8JkooZ)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_jZXwpvovSi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_main = {
  __name: 'htmltools',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_3__.definePageMeta({ layout: "app-layout" });
__vite_ssr_import_4__.useHead({ title: "HTML Tools - Organic Rankings" });


const htmlOptions = [
	{name: 'collapseWhitespace', value: false, label: "Collapse Whitespace (Minify)", toltip: ""},
	{name: 'removeComments', value: false, label: "Remove Comments", toltip: ""},
	{name: 'removeOptionalTags', value: false, label: "Remove optional tags", toltip: ""},
	{name: 'removeEmptyElements', value: false, label: "Remove Empty Elements", toltip: ""},
	{name: 'collapseInlineTagWhitespace', value: false, label: "Collapse Inline Tag Whitespace", toltip: ""},
	{name: 'conservativeCollapse', value: false, label: "Conservative Collapse", toltip: ""},
	{name: 'keepClosingSlash', value: false, label: "Keep Closing Slash", toltip: ""},
	{name: 'preventAttributesEscaping', value: false, label: "Prevent Attributes Escaping", toltip: ""},
	{name: 'removeAttributeQuotes', value: false, label: "Remove Attribute Quotes", toltip: ""},
	{name: 'removeEmptyAttributes', value: false, label: "Remove Empty Attributes", toltip: ""},
	{name: 'removeScriptTypeAttributes', value: false, label: "Remove Script Type Attributes", toltip: ""},
	{name: 'removeStyleLinkTypeAttributes', value: false, label: "Remove Link Type Attributes", toltip: ""},
	{name: 'sortAttributes', value: false, label: "Sort Attributes", toltip: ""},
	{name: 'sortClassName', value: false, label: "Sort Class Name", toltip: ""}
]


const html = __vite_ssr_import_5__.ref('')
const options = __vite_ssr_import_5__.ref(htmlOptions)
const cssClass = __vite_ssr_import_5__.ref('')
const processing = __vite_ssr_import_5__.ref(false)
const cssLength = __vite_ssr_import_5__.ref(0)
const showOutputModal = __vite_ssr_import_5__.ref(false)
const outputHtml = __vite_ssr_import_5__.ref('')
const upload = __vite_ssr_import_5__.ref(false)
const genarate = __vite_ssr_import_5__.ref(false)
const minify = __vite_ssr_import_5__.ref(false)

async function optimizeHtml() {
  showOutputModal.value = true;
  processing.value = true;
  var option = {};
  for (var val of options.value) {
    option[val.name] = val.value;
  }
  await $fetch("/htmlTools", {
    method: "POST",
    body: html.value,
    headers: {
      options: JSON.stringify(option),
      "content-type": "application/octet-stream",
      "cache-control": "no-cache"
    }
  }).then((res) => {
    processing.value = false;
    outputHtml.value = res;
  }).catch((err) => {
    processing.value = false;
    outputHtml.value = "Something went wrong please try again";
  });
}

function checkMinifyOrNot(name) {
  minify.value = (name == "collapseWhitespace") ? true : false;
}

function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("criricalcss"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}


const __returned__ = { htmlOptions, html, options, cssClass, processing, cssLength, showOutputModal, outputHtml, upload, genarate, minify, optimizeHtml, checkMinifyOrNot, copyToClipboard }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsSpinner = __vite_ssr_import_1__.default
  const _component_ElementsProcessing = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)} data-v-e2ebeaf7><div class="row" data-v-e2ebeaf7><div class="col-12" data-v-e2ebeaf7>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "HTML Tools",
    titleClass: "ps-3"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form data-v-e2ebeaf7${
          _scopeId
        }><div class="pb-2" data-v-e2ebeaf7${
          _scopeId
        }><div class="outputSettings me-3" data-v-e2ebeaf7${
          _scopeId
        }><label class="settingLvl" data-v-e2ebeaf7${
          _scopeId
        }>Output Settings</label><div class="form-check ps-0" data-v-e2ebeaf7${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.options, (item, index) => {
          _push(`<label class="form-check-label me-2" data-v-e2ebeaf7${
            _scopeId
          }><input class="form-check-input" type="checkbox"${
            (__vite_ssr_import_7__.ssrIncludeBooleanAttr((Array.isArray(item.value))
              ? __vite_ssr_import_7__.ssrLooseContain(item.value, null)
              : item.value)) ? " checked" : ""
          } data-v-e2ebeaf7${
            _scopeId
          }> ${
            __vite_ssr_import_7__.ssrInterpolate(item.label)
          }</label>`)
        })
        _push(`<!--]--></div></div></div><div class="${
          __vite_ssr_import_7__.ssrRenderClass([$setup.cssClass, "input-group input-group-outline mt-4"])
        }" data-v-e2ebeaf7${
          _scopeId
        }><label class="form-label" data-v-e2ebeaf7${
          _scopeId
        }>All HTML </label><textarea class="form-control" rows="10" data-v-e2ebeaf7${
          _scopeId
        }>${
          __vite_ssr_import_7__.ssrInterpolate($setup.html)
        }</textarea></div><small class="cssLength" data-v-e2ebeaf7${
          _scopeId
        }>${
          __vite_ssr_import_7__.ssrInterpolate($setup.cssLength)
        } character</small><div class="mb-1 text-end mt-4" data-v-e2ebeaf7${
          _scopeId
        }><button class="btn btn-primary" data-v-e2ebeaf7${
          _scopeId
        }>`)
        if (!$setup.processing) {
          _push(`<span data-v-e2ebeaf7${_scopeId}>Genarate</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.processing) {
          _push(`<div data-v-e2ebeaf7${_scopeId}>`)
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Genarating `)
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div></form>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("form", {
            onSubmit: __vite_ssr_import_6__.withModifiers($setup.optimizeHtml, ["prevent"])
          }, [
            __vite_ssr_import_6__.createVNode("div", { class: "pb-2" }, [
              __vite_ssr_import_6__.createVNode("div", { class: "outputSettings me-3" }, [
                __vite_ssr_import_6__.createVNode("label", { class: "settingLvl" }, "Output Settings"),
                __vite_ssr_import_6__.createVNode("div", { class: "form-check ps-0" }, [
                  (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.options, (item, index) => {
                    return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("label", { class: "form-check-label me-2" }, [
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        class: "form-check-input",
                        type: "checkbox",
                        "onUpdate:modelValue": $event => ((item.value) = $event),
                        onClick: $event => ($setup.checkMinifyOrNot(item.name))
                      }, null, 8 /* PROPS */, ["onUpdate:modelValue", "onClick"]), [
                        [__vite_ssr_import_6__.vModelCheckbox, item.value]
                      ]),
                      __vite_ssr_import_6__.createTextVNode(" " + __vite_ssr_import_6__.toDisplayString(item.label), 1 /* TEXT */)
                    ]))
                  }), 256 /* UNKEYED_FRAGMENT */))
                ])
              ])
            ]),
            __vite_ssr_import_6__.createVNode("div", {
              class: ["input-group input-group-outline mt-4", $setup.cssClass]
            }, [
              __vite_ssr_import_6__.createVNode("label", { class: "form-label" }, "All HTML "),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("textarea", {
                class: "form-control",
                rows: "10",
                "onUpdate:modelValue": $event => (($setup.html) = $event)
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.html]
              ])
            ], 2 /* CLASS */),
            __vite_ssr_import_6__.createVNode("small", { class: "cssLength" }, __vite_ssr_import_6__.toDisplayString($setup.cssLength) + " character", 1 /* TEXT */),
            __vite_ssr_import_6__.createVNode("div", { class: "mb-1 text-end mt-4" }, [
              __vite_ssr_import_6__.createVNode("button", { class: "btn btn-primary" }, [
                (!$setup.processing)
                  ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("span", { key: 0 }, "Genarate"))
                  : __vite_ssr_import_6__.createCommentVNode("v-if", true),
                ($setup.processing)
                  ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_6__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_6__.createTextVNode(" Genarating "),
                      __vite_ssr_import_6__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_6__.createCommentVNode("v-if", true)
              ])
            ])
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><!-- Modal -->`)
  if ($setup.showOutputModal) {
    _push(`<div class="modal fade show" aria-modal="true" role="dialog" data-v-e2ebeaf7><div class="modal-dialog modal-dialog-scrollable modal-xl" data-v-e2ebeaf7><div class="modal-content" data-v-e2ebeaf7><div class="modal-header" data-v-e2ebeaf7><h5 class="modal-title" data-v-e2ebeaf7>CSS Output (${__vite_ssr_import_7__.ssrInterpolate($setup.outputHtml.length)} character)</h5><button type="button" class="btn-close" data-v-e2ebeaf7><i class="material-icons" data-v-e2ebeaf7>close</i></button></div><div class="modal-body" data-v-e2ebeaf7>`)
    if ($setup.processing) {
      _push(`<div class="text-success text-center" data-v-e2ebeaf7><p data-v-e2ebeaf7>`)
      if (!$setup.upload) {
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
      } else {
        _push(`<!---->`)
      }
      if ($setup.upload) {
        _push(`<i class="material-icons" data-v-e2ebeaf7>task_alt</i>`)
      } else {
        _push(`<!---->`)
      }
      _push(` Uploading Your CSS. </p>`)
      if ($setup.upload) {
        _push(`<p data-v-e2ebeaf7>`)
        if (!$setup.genarate && $setup.upload) {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        } else {
          _push(`<!---->`)
        }
        if ($setup.genarate) {
          _push(`<i class="material-icons" data-v-e2ebeaf7>task_alt</i>`)
        } else {
          _push(`<!---->`)
        }
        _push(` Genarating Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      if ($setup.genarate) {
        _push(`<p data-v-e2ebeaf7>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent))
        _push(` Downloading Critical CSS. </p>`)
      } else {
        _push(`<!---->`)
      }
      _push(`</div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div id="criricalcss" data-v-e2ebeaf7>`)
    if (!$setup.minify) {
      _push(`<pre data-v-e2ebeaf7>${__vite_ssr_import_7__.ssrInterpolate($setup.outputHtml)}</pre>`)
    } else {
      _push(`<div data-v-e2ebeaf7>${__vite_ssr_import_7__.ssrInterpolate($setup.outputHtml)}</div>`)
    }
    _push(`</div></div><div class="modal-footer" data-v-e2ebeaf7><button class="btn btn-secondary" data-v-e2ebeaf7> Close </button>`)
    if ($setup.outputHtml) {
      _push(`<button class="btn btn-primary" data-v-e2ebeaf7> Copy Css </button>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/app/htmltools.vue?vue&type=style&index=0&scoped=e2ebeaf7&lang.css");


const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/app/htmltools.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-e2ebeaf7"],['__file',"C:/www/organicrankings/pages/app/htmltools.vue"]]);
}


// --------------------
// Request: /pages/app/htmltools.vue?vue&type=style&index=0&scoped=e2ebeaf7&lang.css
// Parents: 
// - /pages/app/htmltools.vue ($id_QmHyaP1lGc)
// Dependencies: 

// --------------------
const $id_uGt8laP77X = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.todo input[data-v-e2ebeaf7] {\r\n    display: none;\n}\n.form-check.active label[data-v-e2ebeaf7] {\r\n    color: #fff !important\n}\n.cssLength[data-v-e2ebeaf7] {\r\n    float: right;\n}\n.modal[data-v-e2ebeaf7] {\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-body .material-icons[data-v-e2ebeaf7] {\r\n    vertical-align: middle;\n}\n.btn-close[data-v-e2ebeaf7] {\r\n    padding: 0;\n}\n.btn-close .material-icons[data-v-e2ebeaf7] {\r\n    color: black;\r\n    vertical-align: top;\n}\n.todo label[data-v-e2ebeaf7] {\r\n    text-transform: capitalize;\n}\n.outputSettings[data-v-e2ebeaf7] {\r\n    display: inline-block;\r\n    position: relative;\r\n    border: 1px solid #d2d6da;\r\n    border-radius: 0.375rem;\r\n    margin: 30px 0 0 0;\r\n    padding: 15px 10px 10px 10px;\n}\n.outputSettings .settingLvl[data-v-e2ebeaf7] {\r\n    position: absolute;\r\n    top: -15px;\r\n    font-weight: bold;\r\n    background: #fff;\r\n    left: 2px;\r\n    padding: 3px;\n}\n.form-check:not(.form-switch) .form-check-input[type=\"checkbox\"][data-v-e2ebeaf7]:after {\r\n    content: \"\";\n}\n.form-check:not(.form-switch) .form-check-input[type=\"checkbox\"][data-v-e2ebeaf7] {\r\n    margin: 1px 2px 0 0;\n}\r\n  ";
}


// --------------------
// Request: /pages/app/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_lECjhA6j9J = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    /*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({ layout: "app-layout" });
    __vite_ssr_import_1__.useHead({ title: "Dashboard - Organic Rankings" });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/pages/app/index.vue"]]);
;
}


// --------------------
// Request: /pages/app/jstools.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/Tooltip.vue ($id_TFbIkoEHYu)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/app/jstools.vue?vue&type=style&index=0&scoped=6823c786&lang.css ($id_ikA1WyjcJN)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_l3UlqH7l30 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/Tooltip.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "jstools",
  setup(__props, { expose }) {
    expose();
    /*#__PURE__*/ false && __vite_ssr_import_4__.definePageMeta({ layout: "app-layout" });
    __vite_ssr_import_5__.useHead({ title: "JS Tools - Organic Rankings" });
    const website = __vite_ssr_import_7__.ref("https://www.organicrankings.com/");
    const css = __vite_ssr_import_7__.ref("");
    const urlClass = __vite_ssr_import_7__.ref("");
    const cssClass = __vite_ssr_import_7__.ref("");
    const processing = __vite_ssr_import_7__.ref(false);
    const cssLength = __vite_ssr_import_7__.ref(0);
    const showOutputModal = __vite_ssr_import_7__.ref(false);
    const outputcss = __vite_ssr_import_7__.ref("");
    const upload = __vite_ssr_import_7__.ref(false);
    const genarate = __vite_ssr_import_7__.ref(false);
    const beautify = __vite_ssr_import_7__.ref(false);
    const todo = __vite_ssr_import_7__.ref("minify");
    const optimize = __vite_ssr_import_7__.ref(1);
    function copyToClipboard() {
      var range = document.createRange();
      range.selectNode(document.getElementById("criricalcss"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    async function genarateCss() {
      if (website.value) {
        showOutputModal.value = true;
        processing.value = true;
        upload.value = false;
        genarate.value = false;
        outputcss.value = "";
        urlClass.value = "";
        cssClass.value = "";
        window.setTimeout(() => {
          if (processing.value) {
            upload.value = true;
          }
        }, 1500);
        window.setTimeout(() => {
          if (processing.value) {
            genarate.value = true;
          }
        }, 3e3);
        await $fetch("https://www.organicrankings.com/criticalcss", {
          method: "POST",
          body: css.value,
          headers: {
            website: website.value,
            todo: todo.value,
            optimize: optimize.value,
            output: beautify.value ? "beautify" : "minify",
            "content-type": "application/octet-stream",
            "url": "https://www.organicrankings.com/",
            "cache-control": "no-cache"
          }
        }).then((res) => {
          processing.value = false;
          outputcss.value = res;
        }).catch((err) => {
          processing.value = false;
          outputcss.value = "Something went wrong please try again";
        });
      } else {
        if (!website.value) {
          urlClass.value = "is-invalid";
        }
        if (!css.value) {
          cssClass.value = "is-invalid";
        }
      }
    }
    __vite_ssr_import_7__.watch(css, async (val) => {
      cssLength.value = val.length;
    });
    const __returned__ = { website, css, urlClass, cssClass, processing, cssLength, showOutputModal, outputcss, upload, genarate, beautify, todo, optimize, copyToClipboard, genarateCss };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default;
  const _component_ElementsTooltip = __vite_ssr_import_1__.default;
  const _component_ElementsSpinner = __vite_ssr_import_2__.default;
  const _component_ElementsProcessing = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(_attrs)} data-v-6823c786><div class="row" data-v-6823c786><div class="col-12" data-v-6823c786>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Javascript Tools",
    titleClass: "ps-3"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form data-v-6823c786${_scopeId}><div class="todo" data-v-6823c786${_scopeId}><div class="${__vite_ssr_import_9__.ssrRenderClass([$setup.todo == "minify" ? "active" : "", "form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"])}" data-v-6823c786${_scopeId}><label class="form-check-label m-0 px-3 py-2" data-v-6823c786${_scopeId}><input class="form-check-input me-1" type="radio" name="option" value="minify"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.todo, "minify")) ? " checked" : ""} data-v-6823c786${_scopeId}> Minify Javascript </label></div><div class="${__vite_ssr_import_9__.ssrRenderClass([$setup.todo == "beautify" ? "active" : "", "form-check form-check-radio btn btn-outline-primary p-0 mb-3"])}" data-v-6823c786${_scopeId}><label class="form-check-label m-0 px-3 py-2" data-v-6823c786${_scopeId}><input class="form-check-input me-1" type="radio" name="option" value="beautify"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.todo, "beautify")) ? " checked" : ""} data-v-6823c786${_scopeId}> Beautify Javascript </label></div></div><div class="pb-2" data-v-6823c786${_scopeId}>`);
        if ($setup.todo == "critical") {
          _push2(`<div class="outputSettings me-3" data-v-6823c786${_scopeId}><label class="settingLvl" data-v-6823c786${_scopeId}>Output Settings</label><div class="form-check form-switch d-flex align-items-center" data-v-6823c786${_scopeId}><div class="${__vite_ssr_import_9__.ssrRenderClass([{ "text-primary": !$setup.beautify }, "toggle me-1"])}" data-v-6823c786${_scopeId}>Minify</div><div class="ms-5 me-2" data-v-6823c786${_scopeId}><input class="form-check-input" type="checkbox"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(Array.isArray($setup.beautify) ? __vite_ssr_import_9__.ssrLooseContain($setup.beautify, null) : $setup.beautify) ? " checked" : ""} data-v-6823c786${_scopeId}></div><div class="${__vite_ssr_import_9__.ssrRenderClass([{ "text-primary": $setup.beautify }, "toggle"])}" data-v-6823c786${_scopeId}>Beautify</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.todo == "minify" || $setup.todo == "critical" && !$setup.beautify) {
          _push2(`<div class="outputSettings" data-v-6823c786${_scopeId}><label class="settingLvl" data-v-6823c786${_scopeId}>Optimization</label><div class="form-check form-check-radio optimize p-0" data-v-6823c786${_scopeId}><label class="form-check-label m-0 pe-3" data-v-6823c786${_scopeId}><input class="form-check-input" type="radio" name="optimize" value="0"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.optimize, "0")) ? " checked" : ""} data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
            default: __vite_ssr_import_8__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`NO`);
              } else {
                return [
                  __vite_ssr_import_8__.createTextVNode("NO")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</label><label class="form-check-label m-0 pe-3" data-v-6823c786${_scopeId}><input class="form-check-input" type="radio" name="optimize" value="1"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.optimize, "1")) ? " checked" : ""} checked data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
            default: __vite_ssr_import_8__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Level 1`);
              } else {
                return [
                  __vite_ssr_import_8__.createTextVNode(" Level 1")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</label><label class="form-check-label m-0 pe-3" data-v-6823c786${_scopeId}><input class="form-check-input" type="radio" name="optimize" value="2"${__vite_ssr_import_9__.ssrIncludeBooleanAttr(__vite_ssr_import_9__.ssrLooseEqual($setup.optimize, "2")) ? " checked" : ""} data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
            default: __vite_ssr_import_8__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Level 2`);
              } else {
                return [
                  __vite_ssr_import_8__.createTextVNode(" Level 2")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</label></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="${__vite_ssr_import_9__.ssrRenderClass([$setup.cssClass, "input-group input-group-outline mt-4"])}" data-v-6823c786${_scopeId}><label class="form-label" data-v-6823c786${_scopeId}>All Javascript </label><textarea class="form-control" rows="10" data-v-6823c786${_scopeId}>${__vite_ssr_import_9__.ssrInterpolate($setup.css)}</textarea></div><small class="cssLength" data-v-6823c786${_scopeId}>${__vite_ssr_import_9__.ssrInterpolate($setup.cssLength)} character</small><div class="mb-1 text-end mt-4" data-v-6823c786${_scopeId}><button class="btn btn-primary" data-v-6823c786${_scopeId}>`);
        if (!$setup.processing) {
          _push2(`<span data-v-6823c786${_scopeId}>Genarate</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.processing) {
          _push2(`<div data-v-6823c786${_scopeId}>`);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent2, _scopeId));
          _push2(` Genarating `);
          _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</button></div></form>`);
      } else {
        return [
          __vite_ssr_import_8__.createVNode("form", {
            onSubmit: __vite_ssr_import_8__.withModifiers($setup.genarateCss, ["prevent"])
          }, [
            __vite_ssr_import_8__.createVNode("div", { class: "todo" }, [
              __vite_ssr_import_8__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0", $setup.todo == "minify" ? "active" : ""]
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "minify",
                    "onUpdate:modelValue": ($event) => $setup.todo = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_8__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_8__.createTextVNode(" Minify Javascript ")
                ])
              ], 2),
              __vite_ssr_import_8__.createVNode("div", {
                class: ["form-check form-check-radio btn btn-outline-primary p-0 mb-3", $setup.todo == "beautify" ? "active" : ""]
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 px-3 py-2" }, [
                  __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                    class: "form-check-input me-1",
                    type: "radio",
                    name: "option",
                    value: "beautify",
                    "onUpdate:modelValue": ($event) => $setup.todo = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [__vite_ssr_import_8__.vModelRadio, $setup.todo]
                  ]),
                  __vite_ssr_import_8__.createTextVNode(" Beautify Javascript ")
                ])
              ], 2)
            ]),
            __vite_ssr_import_8__.createVNode("div", { class: "pb-2" }, [
              $setup.todo == "critical" ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("div", {
                key: 0,
                class: "outputSettings me-3"
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "settingLvl" }, "Output Settings"),
                __vite_ssr_import_8__.createVNode("div", { class: "form-check form-switch d-flex align-items-center" }, [
                  __vite_ssr_import_8__.createVNode("div", {
                    class: ["toggle me-1", { "text-primary": !$setup.beautify }],
                    onClick: ($event) => $setup.beautify = false
                  }, "Minify", 10, ["onClick"]),
                  __vite_ssr_import_8__.createVNode("div", { class: "ms-5 me-2" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => $setup.beautify = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelCheckbox, $setup.beautify]
                    ])
                  ]),
                  __vite_ssr_import_8__.createVNode("div", {
                    class: ["toggle", { "text-primary": $setup.beautify }],
                    onClick: ($event) => $setup.beautify = true
                  }, "Beautify", 10, ["onClick"])
                ])
              ])) : __vite_ssr_import_8__.createCommentVNode("v-if", true),
              $setup.todo == "minify" || $setup.todo == "critical" && !$setup.beautify ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("div", {
                key: 1,
                class: "outputSettings"
              }, [
                __vite_ssr_import_8__.createVNode("label", { class: "settingLvl" }, "Optimization"),
                __vite_ssr_import_8__.createVNode("div", { class: "form-check form-check-radio optimize p-0" }, [
                  __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "radio",
                      name: "optimize",
                      value: "0",
                      "onUpdate:modelValue": ($event) => $setup.optimize = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelRadio, $setup.optimize]
                    ]),
                    __vite_ssr_import_8__.createVNode(_component_ElementsTooltip, { tooltip: "No Optimization" }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createTextVNode("NO")
                      ]),
                      _: 1
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "radio",
                      name: "optimize",
                      value: "1",
                      "onUpdate:modelValue": ($event) => $setup.optimize = $event,
                      checked: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelRadio, $setup.optimize]
                    ]),
                    __vite_ssr_import_8__.createVNode(_component_ElementsTooltip, { tooltip: "Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments" }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createTextVNode(" Level 1")
                      ]),
                      _: 1
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("label", { class: "form-check-label m-0 pe-3" }, [
                    __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("input", {
                      class: "form-check-input",
                      type: "radio",
                      name: "optimize",
                      value: "2",
                      "onUpdate:modelValue": ($event) => $setup.optimize = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_8__.vModelRadio, $setup.optimize]
                    ]),
                    __vite_ssr_import_8__.createVNode(_component_ElementsTooltip, { tooltip: "Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around." }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createTextVNode(" Level 2")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])) : __vite_ssr_import_8__.createCommentVNode("v-if", true)
            ]),
            __vite_ssr_import_8__.createVNode("div", {
              class: ["input-group input-group-outline mt-4", $setup.cssClass]
            }, [
              __vite_ssr_import_8__.createVNode("label", { class: "form-label" }, "All Javascript "),
              __vite_ssr_import_8__.withDirectives(__vite_ssr_import_8__.createVNode("textarea", {
                class: "form-control",
                rows: "10",
                "onUpdate:modelValue": ($event) => $setup.css = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_8__.vModelText, $setup.css]
              ])
            ], 2),
            __vite_ssr_import_8__.createVNode("small", { class: "cssLength" }, __vite_ssr_import_8__.toDisplayString($setup.cssLength) + " character", 1),
            __vite_ssr_import_8__.createVNode("div", { class: "mb-1 text-end mt-4" }, [
              __vite_ssr_import_8__.createVNode("button", { class: "btn btn-primary" }, [
                !$setup.processing ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("span", { key: 0 }, "Genarate")) : __vite_ssr_import_8__.createCommentVNode("v-if", true),
                $setup.processing ? (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("div", { key: 1 }, [
                  __vite_ssr_import_8__.createVNode(_component_ElementsSpinner),
                  __vite_ssr_import_8__.createTextVNode(" Genarating "),
                  __vite_ssr_import_8__.createVNode(_component_ElementsProcessing)
                ])) : __vite_ssr_import_8__.createCommentVNode("v-if", true)
              ])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><!-- Modal -->`);
  if ($setup.showOutputModal) {
    _push(`<div class="modal fade show" aria-modal="true" role="dialog" data-v-6823c786><div class="modal-dialog modal-dialog-scrollable modal-xl" data-v-6823c786><div class="modal-content" data-v-6823c786><div class="modal-header" data-v-6823c786><h5 class="modal-title" data-v-6823c786>CSS Output (${__vite_ssr_import_9__.ssrInterpolate($setup.outputcss.length)} character)</h5><button type="button" class="btn-close" data-v-6823c786><i class="material-icons" data-v-6823c786>close</i></button></div><div class="modal-body" data-v-6823c786>`);
    if ($setup.processing) {
      _push(`<div class="text-success text-center" data-v-6823c786><p data-v-6823c786>`);
      if (!$setup.upload) {
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ($setup.upload) {
        _push(`<i class="material-icons" data-v-6823c786>task_alt</i>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Uploading Your CSS. </p>`);
      if ($setup.upload) {
        _push(`<p data-v-6823c786>`);
        if (!$setup.genarate && $setup.upload) {
          _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if ($setup.genarate) {
          _push(`<i class="material-icons" data-v-6823c786>task_alt</i>`);
        } else {
          _push(`<!---->`);
        }
        _push(` Genarating Critical CSS. </p>`);
      } else {
        _push(`<!---->`);
      }
      if ($setup.genarate) {
        _push(`<p data-v-6823c786>`);
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsSpinner, { color: "green" }, null, _parent));
        _push(` Downloading Critical CSS. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div id="criricalcss" data-v-6823c786>`);
    if ($setup.todo == "beautify" || $setup.todo == "critical" && $setup.beautify) {
      _push(`<pre data-v-6823c786>${__vite_ssr_import_9__.ssrInterpolate($setup.outputcss)}</pre>`);
    } else {
      _push(`<div data-v-6823c786>${__vite_ssr_import_9__.ssrInterpolate($setup.outputcss)}</div>`);
    }
    _push(`</div></div><div class="modal-footer" data-v-6823c786><button class="btn btn-secondary" data-v-6823c786> Close </button>`);
    if ($setup.outputcss) {
      _push(`<button class="btn btn-primary" data-v-6823c786> Copy Css </button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/app/jstools.vue?vue&type=style&index=0&scoped=6823c786&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/jstools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6823c786"], ["__file", "C:/www/organicrankings/pages/app/jstools.vue"]]);
;
}


// --------------------
// Request: /pages/app/jstools.vue?vue&type=style&index=0&scoped=6823c786&lang.css
// Parents: 
// - /pages/app/jstools.vue ($id_9RV4eSyiUb)
// Dependencies: 

// --------------------
const $id_PPIr5Py33A = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.todo input[data-v-6823c786] {\r\n      display: none;\n}\n.form-check.active label[data-v-6823c786] {\r\n      color: #fff !important\n}\n.cssLength[data-v-6823c786] {\r\n      float: right;\n}\n.modal[data-v-6823c786] {\r\n      display: block;\r\n      background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-body .material-icons[data-v-6823c786] {\r\n      vertical-align: middle;\n}\n.btn-close[data-v-6823c786] {\r\n      padding: 0;\n}\n.btn-close .material-icons[data-v-6823c786] {\r\n      color: black;\r\n      vertical-align: top;\n}\n.form-switch[data-v-6823c786] {\r\n      padding-left: 0 !important;\n}\n.todo label[data-v-6823c786] {\r\n      text-transform: capitalize;\n}\n.toggle[data-v-6823c786] {\r\n      cursor: pointer;\n}\n.form-check-input[data-v-6823c786] {\r\n      margin-right: 5px;\r\n      vertical-align: text-bottom;\n}\n.form-check:not(.form-switch) .form-check-input[type=\"radio\"][data-v-6823c786]:after {\r\n      width: 0.8rem;\r\n      height: 0.8rem;\n}\n.outputSettings[data-v-6823c786] {\r\n      display: inline-block;\r\n      position: relative;\r\n      border: 1px solid #d2d6da;\r\n      border-radius: 0.375rem;\r\n      margin: 30px 0 0 0;\r\n      padding: 15px 10px 10px 10px;\n}\n.outputSettings .settingLvl[data-v-6823c786] {\r\n      position: absolute;\r\n      top: -15px;\r\n      font-weight: bold;\r\n      background: #fff;\r\n      left: 2px;\r\n      padding: 3px;\n}\r\n    ";
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_vdTnpezFOX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const router = __vite_ssr_import_0__.useRouter();
    router.push("/signin");
    const __returned__ = { router };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/pages/index.vue"]]);
;
}


// --------------------
// Request: /pages/resetpassword.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputCaptcha.vue ($id_n0f90kFcRK)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/resetpassword.vue?vue&type=style&index=0&lang.css ($id_m6oLsqETuj)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_v45cDvxpq3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/InputEmail.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/InputCaptcha.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/SsrLinks.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_6__.defineComponent({
  __name: "resetpassword",
  setup(__props, { expose }) {
    expose();
    __vite_ssr_import_4__.useHead({
      title: "Reset Password - Organic Rankings"
    });
    /*#__PURE__*/ false && __vite_ssr_import_5__.definePageMeta({ layout: "public-layout" });
    const form = __vite_ssr_import_7__.ref({ email: "asd", confemail: "", captchaValid: false });
    async function passwordResetRequst(form2) {
      if (form2.email && form2.confemail && form2.captchaValid && form2.email == form2.confemail) {
        const response = await $fetch("/passwordresetrequst", {
          method: "POST",
          body: { email: form2.email, confemail: form2.confemail }
        });
      } else {
      }
    }
    const __returned__ = { form, passwordResetRequst };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default;
  const _component_ElementsInputEmail = __vite_ssr_import_1__.default;
  const _component_ElementsInputCaptcha = __vite_ssr_import_2__.default;
  const _component_SsrLinks = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_9__.ssrRenderAttrs(_attrs)}>`);
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Reset Password",
    titleClass: "font-weight-bolder text-center text-uppercase h3"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form role="form" class="text-start"${_scopeId}>`);
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Email",
          email: $setup.form.email,
          "onUpdate:email": ($event) => $setup.form.email = $event,
          required: true
        }, null, _parent2, _scopeId));
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Confirm Email",
          email: $setup.form.confemail,
          "onUpdate:email": ($event) => $setup.form.confemail = $event,
          class: "mt-4",
          required: true
        }, null, _parent2, _scopeId));
        _push2(`<div class="mt-4"${_scopeId}>`);
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_ElementsInputCaptcha, {
          captchaValid: $setup.form.captchaValid,
          "onUpdate:captchaValid": ($event) => $setup.form.captchaValid = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="text-center mt-2"${_scopeId}><button type="submit" class="btn bg-gradient-primary w-100 mt-3"${_scopeId}>Reset</button></div>`);
        _push2(__vite_ssr_import_9__.ssrRenderComponent(_component_SsrLinks, { reset: false }, null, _parent2, _scopeId));
        _push2(`</form>`);
      } else {
        return [
          __vite_ssr_import_8__.createVNode("form", {
            role: "form",
            class: "text-start",
            onSubmit: __vite_ssr_import_8__.withModifiers(($event) => $setup.passwordResetRequst($setup.form), ["prevent"])
          }, [
            __vite_ssr_import_8__.createVNode(_component_ElementsInputEmail, {
              label: "Email",
              email: $setup.form.email,
              "onUpdate:email": ($event) => $setup.form.email = $event,
              required: true
            }, null, 8, ["email", "onUpdate:email"]),
            __vite_ssr_import_8__.createVNode(_component_ElementsInputEmail, {
              label: "Confirm Email",
              email: $setup.form.confemail,
              "onUpdate:email": ($event) => $setup.form.confemail = $event,
              class: "mt-4",
              required: true
            }, null, 8, ["email", "onUpdate:email"]),
            __vite_ssr_import_8__.createVNode("div", { class: "mt-4" }, [
              __vite_ssr_import_8__.createVNode(_component_ElementsInputCaptcha, {
                captchaValid: $setup.form.captchaValid,
                "onUpdate:captchaValid": ($event) => $setup.form.captchaValid = $event
              }, null, 8, ["captchaValid", "onUpdate:captchaValid"])
            ]),
            __vite_ssr_import_8__.createVNode("div", { class: "text-center mt-2" }, [
              __vite_ssr_import_8__.createVNode("button", {
                type: "submit",
                class: "btn bg-gradient-primary w-100 mt-3"
              }, "Reset")
            ]),
            __vite_ssr_import_8__.createVNode(_component_SsrLinks, { reset: false })
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/resetpassword.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resetpassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_12__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/www/organicrankings/pages/resetpassword.vue"]]);
;
}


// --------------------
// Request: /pages/resetpassword.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/resetpassword.vue ($id_YagoaEObSD)
// Dependencies: 

// --------------------
const $id_Q5ZsrA1TeX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.captcha button {\r\n\tposition: absolute;\r\n\ttop: -1px;\r\n\tright: 0;\r\n\tpadding: 10px 7px !important;\r\n\tborder-right: 0;\r\n\theight: calc(100% + 2px);\r\n\tz-index: 5;\r\n\tbackground: #fff;\n}\n.captcha .layar{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\n}\n.btn-outline-primary .material-icons{\r\n\tfont-size: 25px;\r\n\ttransition: 0.5s transform;\n}\n.captcha {\r\n\tposition: relative;\r\n\tfont-family: 'Rubik Iso', cursive;\r\n\tfont-size: 33px;\r\n\tline-height: 1.2;\r\n\tpadding-left: 8px;\r\n\tborder: 1px solid #e91e63;\r\n\tcolor: #e91e63;\r\n\tborder-radius: 10px;\r\n\t-webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n\tbackground-image: linear-gradient(45deg, transparent 20%, brown 25%, transparent 25%),\r\n                      linear-gradient(-45deg, transparent 20%, brown 25%, transparent 25%),\r\n                      linear-gradient(-45deg, transparent 75%, brown 80%, transparent 0);\r\n  background-size: 20px 20px, 20px 20px;\n}\n.btn-outline-primary{\r\n\tmargin: 0;\n}\n.refresh:focus,\r\n.refresh.btn-outline-primary:hover:not(.active){\r\n\tbackground: #fff !important;\r\n\tcolor: #e91e63;\r\n\tbox-shadow: none !important;\r\n\topacity: 1;\n}\r\n";
}


// --------------------
// Request: /pages/signin.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/signin.vue?vue&type=style&index=0&lang.css ($id_la2hRRNKmq)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_bniNNZaMk2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/InputEmail.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/InputPassword.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/SsrLinks.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'signin',
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_6__.useHead({ title: "Sign in - Organic Rankings" });
/*#__PURE__*/ false && __vite_ssr_import_7__.definePageMeta({ layout: "public-layout" });

const checking = __vite_ssr_import_9__.ref(false)
const loginStatus = __vite_ssr_import_9__.ref('')
const email = __vite_ssr_import_9__.ref('test@gmail.com')
const password = __vite_ssr_import_9__.ref('123456')
const emailCls = __vite_ssr_import_9__.ref('')
const passCls = __vite_ssr_import_9__.ref('')

async function requstSignin() {
	const router = __vite_ssr_import_8__.useRouter();
	checking.value = true;
	const response = await $fetch("/requstSignin", {
		method: "POST",
		body: { email: email.value, password: password.value },
	});
	if (response.login) {
		router.push("/app");
	} else {
		loginStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${response.message}</span>`;
	}
	checking.value = false;
	window.setInterval(() => {
		loginStatus.value = "";
	}, 3500);
}


const __returned__ = { checking, loginStatus, email, password, emailCls, passCls, requstSignin, ref: __vite_ssr_import_9__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsInputEmail = __vite_ssr_import_1__.default
  const _component_ElementsInputPassword = __vite_ssr_import_2__.default
  const _component_ElementsSpinner = __vite_ssr_import_3__.default
  const _component_ElementsProcessing = __vite_ssr_import_4__.default
  const _component_SsrLinks = __vite_ssr_import_5__.default

  _push(`<div${__vite_ssr_import_11__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Sign In",
    titleClass: "font-weight-bolder text-center text-uppercase h3"
  }, {
    default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form role="form" class="text-start"${_scopeId}>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Email",
          email: $setup.email,
          "onUpdate:email": $event => (($setup.email) = $event),
          class: $setup.emailCls,
          required: true
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputPassword, {
          label: "Password",
          password: $setup.password,
          "onUpdate:password": $event => (($setup.password) = $event),
          class: ["mt-4", $setup.passCls],
          required: true
        }, null, _parent, _scopeId))
        _push(`<div class="form-check form-switch d-flex align-items-center mb-3 mt-4"${
          _scopeId
        }><input class="form-check-input" type="checkbox" id="rememberMe"${
          _scopeId
        }><label class="form-check-label mb-0 ms-3" for="rememberMe"${
          _scopeId
        }> Remember me </label></div><div class="text-center"${
          _scopeId
        }><button type="submit" class="btn bg-gradient-primary w-100 mt-2"${
          _scopeId
        }>`)
        if (!$setup.checking) {
          _push(`<span${_scopeId}>Sign in</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.checking) {
          _push(`<div${_scopeId}>`)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Checking `)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div><div class="text-center"${
          __vite_ssr_import_11__.ssrRenderAttr("innerHTML", $setup.loginStatus)
        }${
          _scopeId
        }></div>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_SsrLinks, { signin: false }, null, _parent, _scopeId))
        _push(`</form>`)
      } else {
        return [
          __vite_ssr_import_10__.createVNode("form", {
            role: "form",
            class: "text-start",
            onSubmit: __vite_ssr_import_10__.withModifiers($setup.requstSignin, ["prevent"])
          }, [
            __vite_ssr_import_10__.createVNode(_component_ElementsInputEmail, {
              label: "Email",
              email: $setup.email,
              "onUpdate:email": $event => (($setup.email) = $event),
              class: $setup.emailCls,
              required: true
            }, null, 8 /* PROPS */, ["email", "onUpdate:email", "class"]),
            __vite_ssr_import_10__.createVNode(_component_ElementsInputPassword, {
              label: "Password",
              password: $setup.password,
              "onUpdate:password": $event => (($setup.password) = $event),
              class: ["mt-4", $setup.passCls],
              required: true
            }, null, 8 /* PROPS */, ["password", "onUpdate:password", "class"]),
            __vite_ssr_import_10__.createVNode("div", { class: "form-check form-switch d-flex align-items-center mb-3 mt-4" }, [
              __vite_ssr_import_10__.createVNode("input", {
                class: "form-check-input",
                type: "checkbox",
                id: "rememberMe"
              }),
              __vite_ssr_import_10__.createVNode("label", {
                class: "form-check-label mb-0 ms-3",
                for: "rememberMe"
              }, " Remember me ")
            ]),
            __vite_ssr_import_10__.createVNode("div", { class: "text-center" }, [
              __vite_ssr_import_10__.createVNode("button", {
                type: "submit",
                class: "btn bg-gradient-primary w-100 mt-2"
              }, [
                (!$setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("span", { key: 0 }, "Sign in"))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true),
                ($setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_10__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_10__.createTextVNode(" Checking "),
                      __vite_ssr_import_10__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true)
              ])
            ]),
            __vite_ssr_import_10__.createVNode("div", {
              class: "text-center",
              innerHTML: $setup.loginStatus
            }, null, 8 /* PROPS */, ["innerHTML"]),
            __vite_ssr_import_10__.createVNode(_component_SsrLinks, { signin: false })
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_12__ = await __vite_ssr_import__("/pages/signin.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_13__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_13__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/signin.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_14__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_14__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/pages/signin.vue"]]);
}


// --------------------
// Request: /pages/signin.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/signin.vue ($id_Cn17mYC1zo)
// Dependencies: 

// --------------------
const $id_DOnpxdAfFg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\ni.material-icons.statusIcon {\r\n\tvertical-align: text-bottom;\r\n\tmargin-right: 5px;\n}\r\n";
}


// --------------------
// Request: /pages/signup.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs ($id_QFZ1wYnZJK)
// Dependencies: 
// - /components/elements/BsCard.vue ($id_VDpND8gIEc)
// - /components/elements/InputEmail.vue ($id_ZJQiGf6MzU)
// - /components/elements/InputPassword.vue ($id_ViCeN485f8)
// - /components/elements/Spinner.vue ($id_zxPRZDBYag)
// - /components/elements/Processing.vue ($id_dDk1fh4Wi2)
// - /components/SsrLinks.vue ($id_DRfvPgmcEC)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_7VrADkRdHe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/BsCard.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/elements/InputEmail.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/elements/InputPassword.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/elements/Spinner.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/elements/Processing.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/SsrLinks.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");


const _sfc_main = {
  __name: 'signup',
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_6__.useHead({ title: "Sign up - Organic Rankings" });
/*#__PURE__*/ false && __vite_ssr_import_7__.definePageMeta({
	layout: "public-layout",
});

const checking = __vite_ssr_import_9__.ref(false)
const email = __vite_ssr_import_9__.ref('')
const emailCls = __vite_ssr_import_9__.ref('')
const signupStatus = __vite_ssr_import_9__.ref('')
const password = __vite_ssr_import_9__.ref('')
const confpass = __vite_ssr_import_9__.ref('')

async function requstSignup() {
	if ((email.value && email.value.length > 7) && (password.value && password.value.length > 5) && (password.value === confpass.value)) {
		const router = __vite_ssr_import_8__.useRouter();
		checking.value = true;
		const response = await $fetch("/requstSignup", {
			method: "POST",
			body: { email: email.value, password: password.value, confpass: confpass.value },
		});
		if (response.signup) {
			router.push("/app");
		} else {
			signupStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${response.message}</span>`;
		}
		checking.value = false;
		window.setInterval(() => {
			signupStatus.value = "";
		}, 3500);
	} else {
		if (!email.value || email.value.length < 6)
			emailCls.value = "is-invalid";

		window.setInterval(() => {
			emailCls.value = "";
		}, 2000);
	}
}

const __returned__ = { checking, email, emailCls, signupStatus, password, confpass, requstSignup, ref: __vite_ssr_import_9__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsBsCard = __vite_ssr_import_0__.default
  const _component_ElementsInputEmail = __vite_ssr_import_1__.default
  const _component_ElementsInputPassword = __vite_ssr_import_2__.default
  const _component_ElementsSpinner = __vite_ssr_import_3__.default
  const _component_ElementsProcessing = __vite_ssr_import_4__.default
  const _component_SsrLinks = __vite_ssr_import_5__.default

  _push(`<div${__vite_ssr_import_11__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsBsCard, {
    formTitle: "Sign Up",
    titleClass: "font-weight-bolder text-center text-uppercase h3"
  }, {
    default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<form role="form" class="text-start"${_scopeId}>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputEmail, {
          label: "Email",
          email: $setup.email,
          "onUpdate:email": $event => (($setup.email) = $event),
          class: $setup.emailCls,
          required: true
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputPassword, {
          label: "Password",
          password: $setup.password,
          "onUpdate:password": $event => (($setup.password) = $event),
          class: "mt-4"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsInputPassword, {
          label: "Confirm Password",
          password: $setup.confpass,
          "onUpdate:password": $event => (($setup.confpass) = $event),
          class: "mt-4"
        }, null, _parent, _scopeId))
        _push(`<div class="text-center"${
          _scopeId
        }><button type="submit" class="btn bg-gradient-primary w-100 mt-2"${
          _scopeId
        }>`)
        if (!$setup.checking) {
          _push(`<span${_scopeId}>Sign up</span>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.checking) {
          _push(`<div${_scopeId}>`)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsSpinner, null, null, _parent, _scopeId))
          _push(` Checking `)
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_ElementsProcessing, null, null, _parent, _scopeId))
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div><div class="text-center"${
          __vite_ssr_import_11__.ssrRenderAttr("innerHTML", $setup.signupStatus)
        }${
          _scopeId
        }></div>`)
        _push(__vite_ssr_import_11__.ssrRenderComponent(_component_SsrLinks, { signup: false }, null, _parent, _scopeId))
        _push(`</form>`)
      } else {
        return [
          __vite_ssr_import_10__.createVNode("form", {
            role: "form",
            class: "text-start",
            onSubmit: __vite_ssr_import_10__.withModifiers($setup.requstSignup, ["prevent"])
          }, [
            __vite_ssr_import_10__.createVNode(_component_ElementsInputEmail, {
              label: "Email",
              email: $setup.email,
              "onUpdate:email": $event => (($setup.email) = $event),
              class: $setup.emailCls,
              required: true
            }, null, 8 /* PROPS */, ["email", "onUpdate:email", "class"]),
            __vite_ssr_import_10__.createVNode(_component_ElementsInputPassword, {
              label: "Password",
              password: $setup.password,
              "onUpdate:password": $event => (($setup.password) = $event),
              class: "mt-4"
            }, null, 8 /* PROPS */, ["password", "onUpdate:password"]),
            __vite_ssr_import_10__.createVNode(_component_ElementsInputPassword, {
              label: "Confirm Password",
              password: $setup.confpass,
              "onUpdate:password": $event => (($setup.confpass) = $event),
              class: "mt-4"
            }, null, 8 /* PROPS */, ["password", "onUpdate:password"]),
            __vite_ssr_import_10__.createVNode("div", { class: "text-center" }, [
              __vite_ssr_import_10__.createVNode("button", {
                type: "submit",
                class: "btn bg-gradient-primary w-100 mt-2"
              }, [
                (!$setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("span", { key: 0 }, "Sign up"))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true),
                ($setup.checking)
                  ? (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock("div", { key: 1 }, [
                      __vite_ssr_import_10__.createVNode(_component_ElementsSpinner),
                      __vite_ssr_import_10__.createTextVNode(" Checking "),
                      __vite_ssr_import_10__.createVNode(_component_ElementsProcessing)
                    ]))
                  : __vite_ssr_import_10__.createCommentVNode("v-if", true)
              ])
            ]),
            __vite_ssr_import_10__.createVNode("div", {
              class: "text-center",
              innerHTML: $setup.signupStatus
            }, null, 8 /* PROPS */, ["innerHTML"]),
            __vite_ssr_import_10__.createVNode(_component_SsrLinks, { signup: false })
          ], 40 /* PROPS, HYDRATE_EVENTS */, ["onSubmit"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/signup.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/pages/signup.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_Ek3KS8NDCw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /middleware/auth.global.ts ($id_TIzqZfw6gq)
// --------------------
const $id_ZWo3nirO6g = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/middleware/auth.global.ts");

const globalMiddleware = [
  __vite_ssr_import_0__.default
]
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /middleware/auth.global.ts
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/middleware.mjs ($id_AOunJP2X1t)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_u84pDmqm72 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtRouteMiddleware(async (to) => {
  const nologin = ["/", "/signin", "/signup", "/resetpassword", "/requstSignin", "/requstSignup", "/requstReset", "/loadcaptcha"];
  const cookie = __vite_ssr_import_0__.useCookie("org_user");
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/root-component.mjs
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_xGgNs6Swfh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/root-component.mjs ($id_asUtuyAX0U)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/error-component.mjs ($id_bnuYEW6cYN)
// --------------------
const $id_Tc4bZ2N7lY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const ErrorComponent = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/error-component.mjs"))

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// Inject default route (outside of pages) as active route
__vite_ssr_import_0__.provide('_route', __vite_ssr_import_1__.useRoute())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true || (__vite_ssr_import_1__.isNuxtError(err) && (err.fatal || err.unhandled))) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.showError, [err])
  }
})

const __returned__ = { ErrorComponent, nuxtApp, onResolve, results, error, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, provide: __vite_ssr_import_0__.provide, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, isNuxtError: __vite_ssr_import_1__.isNuxtError, showError: __vite_ssr_import_1__.showError, useError: __vite_ssr_import_1__.useError, useRoute: __vite_ssr_import_1__.useRoute, useNuxtApp: __vite_ssr_import_1__.useNuxtApp }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_2__.resolveComponent("App")

  __vite_ssr_import_3__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_idIf6ZADlm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/error-component.mjs ($id_bnuYEW6cYN)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// --------------------
const $id_a7v82cv02k = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
        line.includes('internal') ||
        line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = Number(error.statusCode || 500)
const is404 = statusCode === 404

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

// TODO: Investigate side-effect issue with imports
const _Error404 = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"))
const _Error = true
  ? __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"))
  : __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"))

const ErrorTemplate = is404 ? _Error404 : _Error

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_2__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_1__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css ($id_UH106zs9IT)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_xGuWXTshE1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 404
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-bc8852ab><div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab></div><div class="max-w-520px text-center z-20" data-v-bc8852ab><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-bc8852ab>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-bc8852ab"],['__file',"C:/www/organicrankings/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_jIbUn0IkCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-bc8852ab]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-bc8852ab]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-bc8852ab]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-bc8852ab]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-bc8852ab]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-bc8852ab]:hover::before{background-position:-50% 0;opacity:1}.bg-white[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-bc8852ab]{cursor:pointer}.flex[data-v-bc8852ab]{display:flex}.grid[data-v-bc8852ab]{display:grid}.place-content-center[data-v-bc8852ab]{place-content:center}.items-center[data-v-bc8852ab]{align-items:center}.justify-center[data-v-bc8852ab]{justify-content:center}.font-sans[data-v-bc8852ab]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-bc8852ab]{font-weight:500}.font-light[data-v-bc8852ab]{font-weight:300}.text-8xl[data-v-bc8852ab]{font-size:6rem;line-height:1}.text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-bc8852ab]{line-height:1.25}.mb-8[data-v-bc8852ab]{margin-bottom:2rem}.mb-16[data-v-bc8852ab]{margin-bottom:4rem}.max-w-520px[data-v-bc8852ab]{max-width:520px}.min-h-screen[data-v-bc8852ab]{min-height:100vh}.overflow-hidden[data-v-bc8852ab]{overflow:hidden}.px-8[data-v-bc8852ab]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bc8852ab]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-bc8852ab]{padding-left:1rem;padding-right:1rem}.fixed[data-v-bc8852ab]{position:fixed}.left-0[data-v-bc8852ab]{left:0px}.right-0[data-v-bc8852ab]{right:0px}.text-center[data-v-bc8852ab]{text-align:center}.text-black[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-bc8852ab]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-bc8852ab]{width:100%}.z-10[data-v-bc8852ab]{z-index:10}.z-20[data-v-bc8852ab]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-bc8852ab]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-bc8852ab]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-bc8852ab]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-bc8852ab]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-bc8852ab]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css ($id_qcoFgmhGJ5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_dOwWedCQ6g = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-6b2d7187><div class="fixed left-0 right-0 spotlight" data-v-6b2d7187></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-6b2d7187><pre class="text-xl font-light leading-tight z-10 p-8" data-v-6b2d7187>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6b2d7187"],['__file',"C:/www/organicrankings/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_zU3KktJDTV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-6b2d7187]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}.bg-white[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-6b2d7187]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-6b2d7187]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-6b2d7187]{display:flex}.flex-col[data-v-6b2d7187]{flex-direction:column}.flex-1[data-v-6b2d7187]{flex:1 1 0%}.font-sans[data-v-6b2d7187]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-6b2d7187]{font-weight:500}.font-light[data-v-6b2d7187]{font-weight:300}.h-auto[data-v-6b2d7187]{height:auto}.text-xl[data-v-6b2d7187]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-6b2d7187]{font-size:3.75rem;line-height:1}.leading-tight[data-v-6b2d7187]{line-height:1.25}.mb-8[data-v-6b2d7187]{margin-bottom:2rem}.mb-6[data-v-6b2d7187]{margin-bottom:1.5rem}.min-h-screen[data-v-6b2d7187]{min-height:100vh}.overflow-y-auto[data-v-6b2d7187]{overflow-y:auto}.p-8[data-v-6b2d7187]{padding:2rem}.px-10[data-v-6b2d7187]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-6b2d7187]{padding-top:3.5rem}.fixed[data-v-6b2d7187]{position:fixed}.left-0[data-v-6b2d7187]{left:0px}.right-0[data-v-6b2d7187]{right:0px}.text-black[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-6b2d7187]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-6b2d7187]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-6b2d7187]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-6b2d7187]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-6b2d7187]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css ($id_anXr5LNAH3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_XnIWE2194k = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-f37408fc><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-f37408fc></div><div class="max-w-520px text-center" data-v-f37408fc><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f37408fc"],['__file',"C:/www/organicrankings/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aNL2Q0cdkg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-f37408fc]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}.bg-white[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-f37408fc]{display:grid}.place-content-center[data-v-f37408fc]{place-content:center}.font-sans[data-v-f37408fc]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-f37408fc]{font-weight:500}.font-light[data-v-f37408fc]{font-weight:300}.h-1\\/2[data-v-f37408fc]{height:50%}.text-8xl[data-v-f37408fc]{font-size:6rem;line-height:1}.text-xl[data-v-f37408fc]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f37408fc]{line-height:1.25}.mb-8[data-v-f37408fc]{margin-bottom:2rem}.mb-16[data-v-f37408fc]{margin-bottom:4rem}.max-w-520px[data-v-f37408fc]{max-width:520px}.min-h-screen[data-v-f37408fc]{min-height:100vh}.overflow-hidden[data-v-f37408fc]{overflow:hidden}.px-8[data-v-f37408fc]{padding-left:2rem;padding-right:2rem}.fixed[data-v-f37408fc]{position:fixed}.left-0[data-v-f37408fc]{left:0px}.right-0[data-v-f37408fc]{right:0px}.-bottom-1\\/2[data-v-f37408fc]{bottom:-50%}.text-center[data-v-f37408fc]{text-align:center}.text-black[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f37408fc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-f37408fc]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-f37408fc]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f37408fc]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/app-component.mjs
// Parents: 
// - C:/www/organicrankings/node_modules/nuxt/dist/app/entry ($id_Tpvv9Apumh)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// --------------------
const $id_EwyzQr6i47 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/app-component.mjs ($id_nyraFztAbL)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_VDlbgrMYLo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs ($id_9Fl88LaznL)
// --------------------
const $id_cvsgl4HIQr = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(
        __vite_ssr_import_0__.Transition,
        hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition),
        __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// --------------------
const $id_Azuo6gD1PK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = {
  "app-layout": __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/layouts/app-layout.vue")),
  "public-layout": __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/layouts/public-layout.vue"))
};
}


// --------------------
// Request: /layouts/app-layout.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs ($id_9Fl88LaznL)
// Dependencies: 
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// - /components/app/AppNavbar.vue ($id_yCOa2K67Gf)
// - /components/app/AppFooter.vue ($id_KJ4OY4wAoN)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /layouts/app-layout.vue?vue&type=style&index=0&scoped=031fc290&lang.css ($id_aWCqh0zwFg)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_R5ndVbL1Xi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/app/AppSidebar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/app/AppNavbar.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/app/AppFooter.vue");

const _sfc_main = {}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppSidebar = __vite_ssr_import_0__.default
  const _component_AppNavbar = __vite_ssr_import_1__.default
  const _component_AppFooter = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)} data-v-031fc290>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_AppSidebar, null, null, _parent))
  _push(`<main class="main-content position-relative max-height-vh-100 h-100" data-v-031fc290>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_AppNavbar, null, null, _parent))
  _push(`<div class="container-fluid py-4 pageContent" data-v-031fc290>`)
  __vite_ssr_import_4__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_AppFooter, null, null, _parent))
  _push(`</main></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/layouts/app-layout.vue?vue&type=style&index=0&scoped=031fc290&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/app-layout.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-031fc290"],['__file',"C:/www/organicrankings/layouts/app-layout.vue"]]);
}


// --------------------
// Request: /components/app/AppSidebar.vue
// Parents: 
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/app/AppSidebar.vue?vue&type=style&index=0&scoped=d5cfa2d8&lang.css ($id_Ml7cVFwNH5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_pfmEzLECv2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const _sfc_main = {
  __name: 'AppSidebar',
  setup(__props, { expose }) {
  expose();

const router = __vite_ssr_import_1__.useRouter();
function signout() {
	const cookieJwt = __vite_ssr_import_1__.useCookie("org_user");
	const cookieAgent = __vite_ssr_import_1__.useCookie("org_log");
	cookieJwt.value = '';
	cookieAgent.value = '';
	router.push("/signin");
}

const menuItems = [
	{ name: 'Dashboard', path: '/app', icon: 'dashboard' },
	{ name: 'HTML Tools', path: '/app/htmltools', icon: 'html' },
	{ name: 'CSS Tools', path: '/app/csstools', icon: 'css' },
	{ name: 'JS Tools', path: '/app/jstools', icon: 'javascript' },
]

async function requstLogout() {
	const response = await $fetch("/requstLogout", {
		method: "POST"
	});
	if (response) {
		router.push("/signin");
	}
}

const __returned__ = { router, signout, menuItems, requstLogout }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<aside${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: "sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark small",
    id: "sidenav-main"
  }, _attrs))} data-v-d5cfa2d8><div class="sidenav-header" data-v-d5cfa2d8><i class="material-icons p-3 cursor-pointer text-white opacity-10 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" data-v-d5cfa2d8>skip_previous</i><div class="navbar-brand m-0" data-v-d5cfa2d8><span class="ms-1 font-weight-bold text-white" data-v-d5cfa2d8>Organic Rankings</span></div></div><hr class="horizontal light mt-0 mb-2" data-v-d5cfa2d8><div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main" data-v-d5cfa2d8><ul class="navbar-nav" data-v-d5cfa2d8><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.menuItems, (menuItem) => {
    _push(`<li class="nav-item" data-v-d5cfa2d8>`)
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
      to: menuItem.path,
      class: "nav-link text-white"
    }, {
      default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="material-icons opacity-10" data-v-d5cfa2d8${
            _scopeId
          }>${
            __vite_ssr_import_3__.ssrInterpolate(menuItem.icon)
          }</i> ${
            __vite_ssr_import_3__.ssrInterpolate(menuItem.name)
          }`)
        } else {
          return [
            __vite_ssr_import_2__.createVNode("i", { class: "material-icons opacity-10" }, __vite_ssr_import_2__.toDisplayString(menuItem.icon), 1 /* TEXT */),
            __vite_ssr_import_2__.createTextVNode(" " + __vite_ssr_import_2__.toDisplayString(menuItem.name), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</li>`)
  })
  _push(`<!--]--></ul></div><div class="sidenav-footer position-absolute w-100 bottom-1 navbar-nav" data-v-d5cfa2d8><div class="nav-item" data-v-d5cfa2d8><a class="nav-link" type="button" data-v-d5cfa2d8><i class="material-icons opacity-10" data-v-d5cfa2d8>logout</i><span class="nav-link-text ms-1" data-v-d5cfa2d8>Sign out</span></a></div></div></aside>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/app/AppSidebar.vue?vue&type=style&index=0&scoped=d5cfa2d8&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/app/AppSidebar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-d5cfa2d8"],['__file',"C:/www/organicrankings/components/app/AppSidebar.vue"]]);
}


// --------------------
// Request: /components/app/AppSidebar.vue?vue&type=style&index=0&scoped=d5cfa2d8&lang.css
// Parents: 
// - /components/app/AppSidebar.vue ($id_88uiZSPvh3)
// Dependencies: 

// --------------------
const $id_4xTwkKQxdw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n#sidenav-main[data-v-d5cfa2d8] {\r\n\tmargin: 0 !important;\r\n\tborder-radius: 0;\r\n\t/* background-image: url(\"../../assets/images/sidebarbg.jpg\");\r\n\tbackground-size: cover; */\n}\n.nav-item .material-icons[data-v-d5cfa2d8] {\r\n\twidth: 33px !important;\r\n\ttext-align: left !important;\n}\n.navbar-vertical.navbar-expand-xs .navbar-collapse[data-v-d5cfa2d8] {\r\n\theight: calc(100vh - 124px);\n}\n.sidenav-header[data-v-d5cfa2d8] {\r\n\theight: auto;\n}\n.sidenav .navbar-brand[data-v-d5cfa2d8] {\r\n\tpadding: 15px 20px;\n}\n.navbar-nav .nav-link[data-v-d5cfa2d8] {\r\n\tpadding: 9px 10px !important;\n}\n.router-link-active[data-v-d5cfa2d8] {\r\n\tbackground: linear-gradient(195deg, #EC407A 0%, #D81B60 100%);\n}\r\n";
}


// --------------------
// Request: /components/app/AppNavbar.vue
// Parents: 
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// Dependencies: 
// - /components/elements/DarkToggle.vue ($id_0HBTzqUqct)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/app/AppNavbar.vue?vue&type=style&index=0&scoped=e96448d1&lang.css ($id_FlmhNp6Jzy)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_EPayCLEpXz = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/elements/DarkToggle.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "AppNavbar",
  setup(__props, { expose }) {
    expose();
    function toggleNavbar() {
      const body = document.body;
      const className = "g-sidenav-pinned";
      if (body.classList.contains(className)) {
        body.classList.remove(className);
      } else {
        body.classList.add(className);
      }
    }
    const __returned__ = { toggleNavbar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ElementsDarkToggle = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "userNav shadow mb-4" }, _attrs))} data-v-e96448d1><nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true" data-v-e96448d1><div class="container-fluid py-1 px-3" data-v-e96448d1><nav aria-label="breadcrumb" data-v-e96448d1><ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5" data-v-e96448d1><li class="breadcrumb-item text-sm" data-v-e96448d1><a class="opacity-5 text-dark" href="javascript:;" data-v-e96448d1>Pages</a></li><li class="breadcrumb-item text-sm text-dark active" aria-current="page" data-v-e96448d1> Dashboard </li></ol><h6 class="font-weight-bolder mb-0" data-v-e96448d1>Dashboard</h6></nav><div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar" data-v-e96448d1><ul class="navbar-nav ms-md-auto justify-content-end" data-v-e96448d1><li class="nav-item d-xl-none ps-3 d-flex align-items-center" data-v-e96448d1><a href="javascript:;" class="nav-link text-body p-0" data-v-e96448d1><div class="sidenav-toggler-inner" data-v-e96448d1><i class="sidenav-toggler-line" data-v-e96448d1></i><i class="sidenav-toggler-line" data-v-e96448d1></i><i class="sidenav-toggler-line" data-v-e96448d1></i></div></a></li><li class="nav-item ps-3 d-flex align-items-center" data-v-e96448d1>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_ElementsDarkToggle, null, null, _parent));
  _push(`</li></ul></div></div></nav></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/app/AppNavbar.vue?vue&type=style&index=0&scoped=e96448d1&lang.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e96448d1"], ["__file", "C:/www/organicrankings/components/app/AppNavbar.vue"]]);
;
}


// --------------------
// Request: /components/elements/DarkToggle.vue
// Parents: 
// - /components/app/AppNavbar.vue ($id_yCOa2K67Gf)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/elements/DarkToggle.vue?vue&type=style&index=0&scoped=4aea9eb0&lang.css ($id_q8zl57tJbM)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_uj7qpmRull = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "DarkToggle",
  setup(__props, { expose }) {
    expose();
    const darkMode = __vite_ssr_import_2__.ref(false);
    __vite_ssr_import_2__.watch(darkMode, (darkMode2) => {
      if (darkMode2)
        __vite_ssr_import_0__.useHead({ bodyAttrs: { class: "dark-version" } });
      else
        __vite_ssr_import_0__.useHead({ bodyAttrs: { class: "" } });
    });
    const __returned__ = { darkMode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    class: ["night-day-toggle", [$setup.darkMode ? "day" : "night"]],
    title: $setup.darkMode ? "Trun Off Dark Mode" : "Trun On Dark Mode",
    "data-bs-toggle": "tooltip",
    "data-bs-placement": "left"
  }, _attrs))} data-v-4aea9eb0><div class="trigger" data-v-4aea9eb0></div><div class="planet" data-v-4aea9eb0><div class="moon" data-v-4aea9eb0><i class="material-icons" data-v-4aea9eb0>dark_mode</i></div><div class="sun" data-v-4aea9eb0><i class="material-icons" data-v-4aea9eb0>wb_sunny</i></div></div><div class="sky sky-night" data-v-4aea9eb0><svg class="star star-1" width="12" height="12" viewBox="0 0 24 24" data-v-4aea9eb0><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" data-v-4aea9eb0></path></svg><svg class="star star-2" width="10" height="10" viewBox="0 0 24 24" data-v-4aea9eb0><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" data-v-4aea9eb0></path></svg><svg class="star star-3" width="8" height="8" viewBox="0 0 24 24" data-v-4aea9eb0><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" data-v-4aea9eb0></path></svg><svg class="star star-4" width="6" height="6" viewBox="0 0 24 24" data-v-4aea9eb0><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" data-v-4aea9eb0></path></svg><svg class="star star-5" width="4" height="4" viewBox="0 0 24 24" data-v-4aea9eb0><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" data-v-4aea9eb0></path></svg></div><div class="sky sky-day" data-v-4aea9eb0><div class="cloud cloud-1" data-v-4aea9eb0><div class="cloud-bubble cloud-bubble-1" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-2" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-3" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-4" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-5" data-v-4aea9eb0></div></div><div class="cloud cloud-2" data-v-4aea9eb0><div class="cloud-bubble cloud-bubble-1" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-2" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-3" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-4" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-5" data-v-4aea9eb0></div></div><div class="cloud cloud-3" data-v-4aea9eb0><div class="cloud-bubble cloud-bubble-1" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-2" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-3" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-4" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-5" data-v-4aea9eb0></div></div><div class="cloud cloud-4" data-v-4aea9eb0><div class="cloud-bubble cloud-bubble-1" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-2" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-3" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-4" data-v-4aea9eb0></div><div class="cloud-bubble cloud-bubble-5" data-v-4aea9eb0></div></div></div></label>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/elements/DarkToggle.vue?vue&type=style&index=0&scoped=4aea9eb0&lang.css");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/DarkToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4aea9eb0"], ["__file", "C:/www/organicrankings/components/elements/DarkToggle.vue"]]);
;
}


// --------------------
// Request: /components/elements/DarkToggle.vue?vue&type=style&index=0&scoped=4aea9eb0&lang.css
// Parents: 
// - /components/elements/DarkToggle.vue ($id_0HBTzqUqct)
// Dependencies: 

// --------------------
const $id_gASfTRkSeF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.trigger[data-v-4aea9eb0] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 40px;\r\n  z-index: 20;\n}\n.night-day-toggle[data-v-4aea9eb0] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  width: 50px;\r\n  height: 23px;\r\n  border-radius: 40px;\r\n  transition: background 0.3s ease;\n}\n.night-day-toggle .planet[data-v-4aea9eb0] {\r\n  position: absolute;\r\n  width: 23px;\r\n  height: 23px;\r\n  top: 1px;\r\n  left: 2px;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  transition: all 0.3s ease;\n}\n.night-day-toggle.day .planet[data-v-4aea9eb0] {\r\n  transform: translateX(25px);\n}\n.night-day-toggle .planet .moon[data-v-4aea9eb0],\r\n.night-day-toggle .planet .sun[data-v-4aea9eb0] {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.3s ease;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\n}\n.night-day-toggle .planet .moon[data-v-4aea9eb0] {\r\n  color: #fff;\r\n  z-index: 5;\n}\n.night-day-toggle .planet .moon .crater[data-v-4aea9eb0] {\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  background: #efefef;\n}\n.night-day-toggle .planet .moon .crater-1[data-v-4aea9eb0] {\r\n  width: 48%;\r\n  height: 48%;\r\n  right: 0;\r\n  top: 18%;\r\n  transform: translateX(35%);\n}\n.night-day-toggle .planet .moon .crater-2[data-v-4aea9eb0] {\r\n  width: 13%;\r\n  height: 13%;\r\n  top: 7%;\r\n  left: 10%;\r\n  background: #d6d6d6;\n}\n.night-day-toggle .planet .moon .crater-3[data-v-4aea9eb0] {\r\n  width: 25%;\r\n  height: 25%;\r\n  top: 26%;\r\n  left: 22%;\n}\n.night-day-toggle .planet .moon .crater-4[data-v-4aea9eb0] {\r\n  width: 22%;\r\n  height: 22%;\r\n  top: 70%;\r\n  left: 8%;\n}\n.night-day-toggle .planet .moon .crater-5[data-v-4aea9eb0] {\r\n  width: 15%;\r\n  height: 15%;\r\n  top: 70%;\r\n  left: 58%;\n}\n.night-day-toggle .planet .sun[data-v-4aea9eb0] {\r\n  color: #ff8d00;\n}\n.night-day-toggle .sky[data-v-4aea9eb0] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.3s ease;\n}\n.night-day-toggle .sky-night .star[data-v-4aea9eb0] {\r\n  position: absolute;\r\n  transform: translateX(-100%);\r\n  transition: transform 0.3s ease;\n}\n.night-day-toggle .sky-night .star path[data-v-4aea9eb0] {\r\n  fill: #fff;\n}\n.night-day-toggle .sky-night .star-1[data-v-4aea9eb0] {\r\n  right: 11%;\r\n  bottom: 21%;\r\n  width: 8%;\r\n  height: 16%;\n}\n.night-day-toggle .sky-night .star-2[data-v-4aea9eb0] {\r\n  left: 50%;\r\n  top: 20%;\r\n  width: 7%;\r\n  height: 15%;\n}\n.night-day-toggle .sky-night .star-3[data-v-4aea9eb0] {\r\n  top: 19%;\r\n  right: 16%;\r\n  width: 5%;\r\n  height: 14%;\n}\n.night-day-toggle .sky-night .star-4[data-v-4aea9eb0] {\r\n  right: 27%;\r\n  top: 47%;\r\n  width: 5%;\r\n  height: 9%;\n}\n.night-day-toggle .sky-night .star-5[data-v-4aea9eb0] {\r\n  left: 55%;\r\n  bottom: 26%;\r\n  width: 4%;\r\n  height: 12%;\n}\n.night-day-toggle .sky-day .cloud[data-v-4aea9eb0] {\r\n  position: absolute;\r\n  transform: translateX(100%);\r\n  transition: transform 0.3s ease;\n}\n.night-day-toggle .sky-day .cloud .cloud-bubble[data-v-4aea9eb0] {\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  position: absolute;\n}\n.night-day-toggle .sky-day .cloud .cloud-bubble[data-v-4aea9eb0]:after {\r\n  content: \"\";\r\n  display: block;\r\n  padding-bottom: 100%;\n}\n.night-day-toggle .sky-day .cloud-1[data-v-4aea9eb0] {\r\n  width: 20%;\r\n  height: 30.5%;\r\n  right: 38%;\r\n  bottom: 22%;\n}\n.night-day-toggle .sky-day .cloud-1 .cloud-bubble-1[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  bottom: 8%;\n}\n.night-day-toggle .sky-day .cloud-1 .cloud-bubble-2[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  bottom: 0;\r\n  left: 30%;\n}\n.night-day-toggle .sky-day .cloud-1 .cloud-bubble-3[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  right: 0;\r\n  bottom: 10%;\n}\n.night-day-toggle .sky-day .cloud-1 .cloud-bubble-4[data-v-4aea9eb0] {\r\n  width: 42%;\r\n  right: 20%;\r\n  top: 0;\n}\n.night-day-toggle .sky-day .cloud-1 .cloud-bubble-5[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  left: 10%;\r\n  top: 0;\n}\n.night-day-toggle .sky-day .cloud-2[data-v-4aea9eb0] {\r\n  width: 11.5%;\r\n  height: 18%;\r\n  left: 12%;\r\n  top: 22%;\n}\n.night-day-toggle .sky-day .cloud-2 .cloud-bubble-1[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  bottom: 10%;\n}\n.night-day-toggle .sky-day .cloud-2 .cloud-bubble-2[data-v-4aea9eb0] {\r\n  width: 40%;\r\n  bottom: 0;\r\n  left: 32%;\n}\n.night-day-toggle .sky-day .cloud-2 .cloud-bubble-3[data-v-4aea9eb0] {\r\n  width: 42%;\r\n  right: 0;\r\n  bottom: 18%;\n}\n.night-day-toggle .sky-day .cloud-2 .cloud-bubble-4[data-v-4aea9eb0] {\r\n  width: 40%;\r\n  right: 18%;\r\n  top: 5%;\n}\n.night-day-toggle .sky-day .cloud-2 .cloud-bubble-5[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  left: 12%;\r\n  top: 0;\n}\n.night-day-toggle .sky-day .cloud-3[data-v-4aea9eb0] {\r\n  width: 11.5%;\r\n  height: 16%;\r\n  left: 42%;\r\n  top: 12%;\n}\n.night-day-toggle .sky-day .cloud-3 .cloud-bubble-1[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  left: 0;\r\n  bottom: 16%;\n}\n.night-day-toggle .sky-day .cloud-3 .cloud-bubble-2[data-v-4aea9eb0] {\r\n  width: 42%;\r\n  bottom: 0;\r\n  left: 30%;\n}\n.night-day-toggle .sky-day .cloud-3 .cloud-bubble-3[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  right: 0;\r\n  bottom: 14%;\n}\n.night-day-toggle .sky-day .cloud-3 .cloud-bubble-4[data-v-4aea9eb0] {\r\n  width: 40%;\r\n  top: 0;\r\n  right: 14%;\n}\n.night-day-toggle .sky-day .cloud-3 .cloud-bubble-5[data-v-4aea9eb0] {\r\n  width: 32%;\r\n  left: 23%;\r\n  top: 4%;\n}\n.night-day-toggle .sky-day .cloud-4[data-v-4aea9eb0] {\r\n  left: 15%;\r\n  bottom: 22%;\r\n  width: 10%;\r\n  height: 13%;\n}\n.night-day-toggle .sky-day .cloud-4 .cloud-bubble-1[data-v-4aea9eb0] {\r\n  width: 42%;\r\n  left: 0;\r\n  bottom: 17%;\n}\n.night-day-toggle .sky-day .cloud-4 .cloud-bubble-2[data-v-4aea9eb0] {\r\n  width: 45%;\r\n  bottom: 0;\r\n  left: 25%;\n}\n.night-day-toggle .sky-day .cloud-4 .cloud-bubble-3[data-v-4aea9eb0] {\r\n  width: 44%;\r\n  bottom: 0;\r\n  right: 0;\n}\n.night-day-toggle .sky-day .cloud-4 .cloud-bubble-4[data-v-4aea9eb0] {\r\n  width: 40%;\r\n  top: 0;\r\n  right: 5%;\n}\n.night-day-toggle .sky-day .cloud-4 .cloud-bubble-5[data-v-4aea9eb0] {\r\n  width: 36%;\r\n  left: 28%;\r\n  top: 5%;\n}\n.night-day-toggle input[type=checkbox][data-v-4aea9eb0] {\r\n  width: 0;\r\n  height: 0;\r\n  overflow: hidden;\r\n  position: absolute;\n}\n.night-day-toggle.night[data-v-4aea9eb0] {\r\n  background: #3c4360;\n}\n.night-day-toggle.night .planet .moon[data-v-4aea9eb0] {\r\n  visibility: visible;\r\n  opacity: 1;\n}\n.night-day-toggle.night .sky-night[data-v-4aea9eb0] {\r\n  visibility: visible;\r\n  opacity: 1;\n}\n.night-day-toggle.night .sky-night .star[data-v-4aea9eb0] {\r\n  transform: translateX(0);\n}\n.night-day-toggle.day[data-v-4aea9eb0] {\r\n  background: #afdfeb;\n}\n.night-day-toggle.day .planet .sun[data-v-4aea9eb0] {\r\n  visibility: visible;\r\n  opacity: 1;\n}\n.night-day-toggle.day .sky-day[data-v-4aea9eb0] {\r\n  visibility: visible;\r\n  opacity: 1;\n}\n.night-day-toggle.day .sky-day .cloud[data-v-4aea9eb0] {\r\n  transform: translateX(0);\n}\r\n";
}


// --------------------
// Request: /components/app/AppNavbar.vue?vue&type=style&index=0&scoped=e96448d1&lang.css
// Parents: 
// - /components/app/AppNavbar.vue ($id_yCOa2K67Gf)
// Dependencies: 

// --------------------
const $id_GvkUNoVGmq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.userNav[data-v-e96448d1] {\r\n\tbackground-color: #fff !important;\n}\n.dark-version .userNav[data-v-e96448d1] {\r\n\tbackground-color: #202940 !important;\r\n\tbox-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),\r\n\t\t0 1px 5px 0 rgb(0 0 0 / 12%);\n}\n#navbarBlur[data-v-e96448d1] {\r\n\tbackground: transparent !important;\n}\r\n";
}


// --------------------
// Request: /components/app/AppFooter.vue
// Parents: 
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_bNO3Bw5HJp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "footer py-4" }, _attrs))}><div class="container-fluid"><div class="row align-items-center justify-content-lg-between"><div class="col-lg-6 mb-lg-0 mb-4"><div class="copyright text-center text-sm text-muted text-lg-start"> ©2022 - Organic Rankings </div></div><div class="col-lg-6"><ul class="nav nav-footer justify-content-center justify-content-lg-end"><li class="nav-item"><a href="#" class="nav-link text-muted">About Us</a></li><li class="nav-item"><a href="#" class="nav-link pe-0 text-muted">Contact Us</a></li></ul></div></div></div></footer>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/app/AppFooter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/www/organicrankings/components/app/AppFooter.vue"]]);
}


// --------------------
// Request: /layouts/app-layout.vue?vue&type=style&index=0&scoped=031fc290&lang.css
// Parents: 
// - /layouts/app-layout.vue ($id_DI5CID2WQB)
// Dependencies: 

// --------------------
const $id_bSOnaYD8u6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\nmain[data-v-031fc290] {\r\n\tmin-height: 100vh;\n}\n.pageContent[data-v-031fc290] {\r\n\tmin-height: 81vh;\n}\n@media only screen and (min-width: 1200px) {\n.sidenav.fixed-start+.main-content[data-v-031fc290] {\r\n\t\tmargin-left: 15.65rem;\n}\n}\r\n";
}


// --------------------
// Request: /layouts/public-layout.vue
// Parents: 
// - /@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs ($id_9Fl88LaznL)
// Dependencies: 
// - /components/PublicNavbar.vue ($id_pJwvrnFSHD)
// - /components/PublicFooter.vue ($id_tKSuDnTH4U)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /layouts/public-layout.vue?vue&type=style&index=0&scoped=8e666dcf&lang.css ($id_YzSrZNaWuY)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_tweL2H47O2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/PublicNavbar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/PublicFooter.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const _sfc_main = {
  __name: 'public-layout',
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_2__.definePageMeta({
	middleware: 'UserMiddleware'
})


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PublicNavbar = __vite_ssr_import_0__.default
  const _component_PublicFooter = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)} data-v-8e666dcf>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_PublicNavbar, null, null, _parent))
  _push(`<main class="main-content mt-0" data-v-8e666dcf><div class="page-header align-items-start min-vh-100" style="${__vite_ssr_import_4__.ssrRenderStyle({"background-image":"url('/assets/images/bg.jpg')"})}" data-v-8e666dcf><span class="mask bg-gradient-dark opacity-6" data-v-8e666dcf></span><div class="container my-auto" data-v-8e666dcf><div class="row" data-v-8e666dcf><div class="col-lg-4 col-md-8 col-12 mx-auto" data-v-8e666dcf>`)
  __vite_ssr_import_4__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div></div></div></main>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_PublicFooter, null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/layouts/public-layout.vue?vue&type=style&index=0&scoped=8e666dcf&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/public-layout.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-8e666dcf"],['__file',"C:/www/organicrankings/layouts/public-layout.vue"]]);
}


// --------------------
// Request: /components/PublicNavbar.vue
// Parents: 
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/PublicNavbar.vue?vue&type=style&index=0&scoped=86d44893&lang.css ($id_d1n4BPy2aQ)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_MBmqOC20Zn = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "container position-sticky z-index-sticky top-0" }, _attrs))} data-v-86d44893><div class="row" data-v-86d44893><div class="col-12" data-v-86d44893><!-- Navbar --><nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4" data-v-86d44893><div class="container-fluid ps-2 pe-0" data-v-86d44893><a class="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="/app" data-v-86d44893> Organic Rankings </a><button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" data-v-86d44893><span class="navbar-toggler-icon mt-2" data-v-86d44893><span class="navbar-toggler-bar bar1" data-v-86d44893></span><span class="navbar-toggler-bar bar2" data-v-86d44893></span><span class="navbar-toggler-bar bar3" data-v-86d44893></span></span></button><div class="collapse navbar-collapse justify-content-end publicNav" id="navigation" data-v-86d44893><ul class="navbar-nav" data-v-86d44893><li class="nav-item" data-v-86d44893>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/signin",
    class: "nav-link me-2",
    "no-rel": ""
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="material-icons" data-v-86d44893${
          _scopeId
        }>fingerprint</i><span class="nav-link-text ms-1" data-v-86d44893${
          _scopeId
        }>Sign in</span>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("i", { class: "material-icons" }, "fingerprint"),
          __vite_ssr_import_1__.createVNode("span", { class: "nav-link-text ms-1" }, "Sign in")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="nav-item" data-v-86d44893>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/signup",
    class: "nav-link me-2",
    "no-rel": ""
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="material-icons" data-v-86d44893${
          _scopeId
        }>person_add</i><span class="nav-link-text ms-1" data-v-86d44893${
          _scopeId
        }>Sign up</span>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("i", { class: "material-icons" }, "person_add"),
          __vite_ssr_import_1__.createVNode("span", { class: "nav-link-text ms-1" }, "Sign up")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div></div></nav><!-- End Navbar --></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/PublicNavbar.vue?vue&type=style&index=0&scoped=86d44893&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PublicNavbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-86d44893"],['__file',"C:/www/organicrankings/components/PublicNavbar.vue"]]);
}


// --------------------
// Request: /components/PublicNavbar.vue?vue&type=style&index=0&scoped=86d44893&lang.css
// Parents: 
// - /components/PublicNavbar.vue ($id_pJwvrnFSHD)
// Dependencies: 

// --------------------
const $id_3WVVssg1rS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.material-icons[data-v-86d44893] {\r\n\tvertical-align: middle;\r\n\tfont-size: 20px;\n}\n.nav-link-text[data-v-86d44893] {\r\n\tfont-size: 15px;\n}\n.material-icons[data-v-86d44893],\r\n.nav-link-text[data-v-86d44893] {\r\n\ttransition: 0.3s all;\n}\n.nav-item:hover *[data-v-86d44893] {\r\n\tcolor: #e91e63;\n}\r\n";
}


// --------------------
// Request: /components/PublicFooter.vue
// Parents: 
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/PublicFooter.vue?vue&type=style&index=0&scoped=a103b7ab&lang.css ($id_6Wt5I0iwLg)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_1WndHVI1TJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "footer position-absolute py-2 w-100" }, _attrs))} data-v-a103b7ab><div class="container" data-v-a103b7ab><div class="row align-items-center justify-content-lg-between" data-v-a103b7ab><div class="col-12 col-md-6 my-auto" data-v-a103b7ab><div class="copyright text-center text-sm text-white text-lg-start sm-mb-2" data-v-a103b7ab> ©2022 - Organic Rankings </div></div><div class="col-12 col-md-6" data-v-a103b7ab><ul class="nav nav-footer justify-content-center justify-content-lg-end" data-v-a103b7ab><li class="nav-item" data-v-a103b7ab><a href="#" class="nav-link text-white" data-v-a103b7ab>Home</a></li><li class="nav-item" data-v-a103b7ab><a href="#" class="nav-link text-white" data-v-a103b7ab>About Us</a></li><li class="nav-item" data-v-a103b7ab><a href="#" class="nav-link pe-0 text-white" data-v-a103b7ab>Contact us</a></li></ul></div></div></div></footer>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PublicFooter.vue?vue&type=style&index=0&scoped=a103b7ab&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PublicFooter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-a103b7ab"],['__file',"C:/www/organicrankings/components/PublicFooter.vue"]]);
}


// --------------------
// Request: /components/PublicFooter.vue?vue&type=style&index=0&scoped=a103b7ab&lang.css
// Parents: 
// - /components/PublicFooter.vue ($id_tKSuDnTH4U)
// Dependencies: 

// --------------------
const $id_K91vRcx1hq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.footer[data-v-a103b7ab] {\r\n\tbottom: 0;\n}\n.footer .nav-link[data-v-a103b7ab] {\r\n\tpadding: 10px 15px !important;\n}\n.nav-link[data-v-a103b7ab]:hover {\r\n\tcolor: #e91e63 !important;\n}\r\n";
}


// --------------------
// Request: /layouts/public-layout.vue?vue&type=style&index=0&scoped=8e666dcf&lang.css
// Parents: 
// - /layouts/public-layout.vue ($id_W5r8i3aAmg)
// Dependencies: 

// --------------------
const $id_Tg6xdFn6yV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n@media only screen and (min-width: 500px) {\n.card[data-v-8e666dcf] {\r\n\t\tmin-width: 350px;\r\n\t\tmax-width: 380px;\r\n\t\tmargin: auto;\n}\n}\r\n";
}


const __modules__ = {
  "C:/www/organicrankings/node_modules/nuxt/dist/app/entry": $id_ahqTl1keuq,
  vue: $id_G33erDMZ5a,
  "@vue/runtime-dom": $id_9sriful2d8,
  ohmyfetch: $id_kLE5W6MKaY,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/paths.mjs": $id_bMPJFexSTF,
  ufo: $id_KJr7LehhrL,
  "/node_modules/nuxt/dist/app/index.mjs": $id_fgrt3UeQEL,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_lfCjBrgcte,
  hookable: $id_p6x8naIYgL,
  unctx: $id_Zn9H5zfDIh,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_YvAaozTraC,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_XTtQ30wmO3,
  "vue-router": $id_7dT9jx0uwT,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_BHNdDlA1Pk,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_6bgT8vIFHQ,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_oMJXouc9nw,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_kP3GBeDzaR,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_0OCs51rfoK,
  h3: $id_K2PnHEPz0m,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_zYOrYjkwm9,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_XUZhFBVStH,
  "cookie-es": $id_t3HHRMhh7L,
  destr: $id_ZK3lg3ye5b,
  ohash: $id_ApQSwD9AXx,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_BjnOCDcfIZ,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_72OrpZA28S,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_HRAmKRepZ0,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_aAoWaPsGgE,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_DBzckdbLOm,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_TG3cDPMBp5,
  "@vue/shared": $id_NOAOzpHkPB,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/css.mjs": $id_dC1MsHuY7o,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/plugins/server.mjs": $id_k8JAeCfcE3,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_1SAEi7QN5N,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/components.plugin.mjs": $id_ESjlVSVakk,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_wRsEVKfW1P,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_19kbcSkZ7c,
  defu: $id_q6X4BWspBy,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_M1tN3PM97T,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_PE2LM6mDyc,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/meta.config.mjs": $id_lfmStlh9we,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_0CQA2LNfeu,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_L9I1eoE7dW,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_ZR0LUqwyer,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_NgApSiB2xA,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/routes.mjs": $id_Cf8Hlf9i6m,
  "/pages/app/csstools.vue?macro=true": $id_uxu2BF1Njl,
  "/components/elements/BsCard.vue": $id_k2uADfOTl7,
  "vue/server-renderer": $id_aRHphPzMpI,
  "/components/elements/BsCard.vue?vue&type=style&index=0&scoped=026398e5&lang.css": $id_P42EDUSzaN,
  "/@id/__x00__plugin-vue:export-helper": $id_mHD6riC5ol,
  "/components/elements/Tooltip.vue": $id_0lRxI8bDIc,
  "/components/elements/Tooltip.vue?vue&type=style&index=0&scoped=75e3e590&lang.css": $id_SpxjCTnbTY,
  "/components/elements/Spinner.vue": $id_SH4eH1Wz1R,
  "/components/elements/Spinner.vue?vue&type=style&index=0&scoped=fd317803&lang.css": $id_HZbO5u0MDL,
  "/components/elements/Processing.vue": $id_qIhB1ABUFi,
  "/components/elements/Processing.vue?vue&type=style&index=0&scoped=8000fe06&lang.css": $id_NcE1s8Wirl,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_PgbhbSnfkR,
  "/pages/app/dashboard.vue?macro=true": $id_dRS2pZfHBq,
  "/pages/app/htmltools.vue?macro=true": $id_NeiLMVH4PZ,
  "/pages/app/index.vue?macro=true": $id_oY1Z7dLZzs,
  "/pages/app/jstools.vue?macro=true": $id_VKkuiZMX8E,
  "/pages/index.vue?macro=true": $id_Abu5Z9bR98,
  "/pages/resetpassword.vue?macro=true": $id_G68cUP9Doq,
  "/components/elements/InputEmail.vue": $id_f7j9HF21wo,
  "/components/elements/InputCaptcha.vue": $id_xSvPgP2Eq2,
  "/components/SsrLinks.vue": $id_3YBnAYKnYJ,
  "/components/SsrLinks.vue?vue&type=style&index=0&scoped=1e5a26b3&lang.css": $id_JRlYVN4fYY,
  "/pages/signin.vue?macro=true": $id_YYkkeVIgQ0,
  "/components/elements/InputPassword.vue": $id_UQ6QpqQah9,
  "/pages/signup.vue?macro=true": $id_XzxhBfjpAn,
  "/pages/app/csstools.vue": $id_9BfplwZf5b,
  "/pages/app/csstools.vue?vue&type=style&index=0&scoped=ac7a0ea1&lang.css": $id_arVKCymY8s,
  "/pages/app/dashboard.vue": $id_2mqzKDTAoe,
  "/pages/app/htmltools.vue": $id_jZXwpvovSi,
  "/pages/app/htmltools.vue?vue&type=style&index=0&scoped=e2ebeaf7&lang.css": $id_uGt8laP77X,
  "/pages/app/index.vue": $id_lECjhA6j9J,
  "/pages/app/jstools.vue": $id_l3UlqH7l30,
  "/pages/app/jstools.vue?vue&type=style&index=0&scoped=6823c786&lang.css": $id_PPIr5Py33A,
  "/pages/index.vue": $id_vdTnpezFOX,
  "/pages/resetpassword.vue": $id_v45cDvxpq3,
  "/pages/resetpassword.vue?vue&type=style&index=0&lang.css": $id_Q5ZsrA1TeX,
  "/pages/signin.vue": $id_bniNNZaMk2,
  "/pages/signin.vue?vue&type=style&index=0&lang.css": $id_DOnpxdAfFg,
  "/pages/signup.vue": $id_7VrADkRdHe,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/router.options.mjs": $id_Ek3KS8NDCw,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/middleware.mjs": $id_ZWo3nirO6g,
  "/middleware/auth.global.ts": $id_u84pDmqm72,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/root-component.mjs": $id_xGgNs6Swfh,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_Tc4bZ2N7lY,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/error-component.mjs": $id_idIf6ZADlm,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_a7v82cv02k,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_xGuWXTshE1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css": $id_jIbUn0IkCP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_dOwWedCQ6g,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css": $id_zU3KktJDTV,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_XnIWE2194k,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css": $id_aNL2Q0cdkg,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/app-component.mjs": $id_EwyzQr6i47,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_VDlbgrMYLo,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_cvsgl4HIQr,
  "/@id/virtual:nuxt:C:/www/organicrankings/.nuxt/layouts.mjs": $id_Azuo6gD1PK,
  "/layouts/app-layout.vue": $id_R5ndVbL1Xi,
  "/components/app/AppSidebar.vue": $id_pfmEzLECv2,
  "/components/app/AppSidebar.vue?vue&type=style&index=0&scoped=d5cfa2d8&lang.css": $id_4xTwkKQxdw,
  "/components/app/AppNavbar.vue": $id_EPayCLEpXz,
  "/components/elements/DarkToggle.vue": $id_uj7qpmRull,
  "/components/elements/DarkToggle.vue?vue&type=style&index=0&scoped=4aea9eb0&lang.css": $id_gASfTRkSeF,
  "/components/app/AppNavbar.vue?vue&type=style&index=0&scoped=e96448d1&lang.css": $id_GvkUNoVGmq,
  "/components/app/AppFooter.vue": $id_bNO3Bw5HJp,
  "/layouts/app-layout.vue?vue&type=style&index=0&scoped=031fc290&lang.css": $id_bSOnaYD8u6,
  "/layouts/public-layout.vue": $id_tweL2H47O2,
  "/components/PublicNavbar.vue": $id_MBmqOC20Zn,
  "/components/PublicNavbar.vue?vue&type=style&index=0&scoped=86d44893&lang.css": $id_3WVVssg1rS,
  "/components/PublicFooter.vue": $id_1WndHVI1TJ,
  "/components/PublicFooter.vue?vue&type=style&index=0&scoped=a103b7ab&lang.css": $id_K91vRcx1hq,
  "/layouts/public-layout.vue?vue&type=style&index=0&scoped=8e666dcf&lang.css": $id_Tg6xdFn6yV
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/www/organicrankings/node_modules/nuxt/dist/app/entry")