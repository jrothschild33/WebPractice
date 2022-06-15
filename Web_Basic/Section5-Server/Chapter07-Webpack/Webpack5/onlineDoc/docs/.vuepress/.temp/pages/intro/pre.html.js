export const data = {
  "key": "v-10b408dc",
  "path": "/intro/pre.html",
  "title": "前置知识",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "Jason Zhou",
        "email": "dr_neutron@126.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "intro/pre.md"
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
