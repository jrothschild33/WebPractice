export const data = {
  "key": "v-ab115cee",
  "path": "/base/html.html",
  "title": "处理 Html 资源",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 下载包",
      "slug": "_1-下载包",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 配置",
      "slug": "_2-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "3. 修改 index.html",
      "slug": "_3-修改-index-html",
      "children": []
    },
    {
      "level": 2,
      "title": "4. 运行指令",
      "slug": "_4-运行指令",
      "children": []
    }
  ],
  "git": {
    "contributors": []
  },
  "filePathRelative": "base/html.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
