import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/MyProjects/Website/Tutoring/Web_Basic/Section5-Server/Chapter07-Webpack/Webpack5/onlineDoc/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/MyProjects/Website/Tutoring/Web_Basic/Section5-Server/Chapter07-Webpack/Webpack5/onlineDoc/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
