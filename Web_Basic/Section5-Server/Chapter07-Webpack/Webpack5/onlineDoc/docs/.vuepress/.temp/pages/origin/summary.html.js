export const data = {
  "key": "v-860cdcba",
  "path": "/origin/summary.html",
  "title": "总结",
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
  "filePathRelative": "origin/summary.md"
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
