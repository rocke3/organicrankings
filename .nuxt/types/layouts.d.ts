import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "app-layout" | "public-layout"
declare module "C:/www/organicrankings/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}