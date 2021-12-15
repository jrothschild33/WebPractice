### 请求的根路径

> http://www.liulongbin.top:3006





### 评论列表

+ 接口URL：  /api/cmtlist
+ 调用方式： GET
+ 参数格式：无
+ 响应格式：

| 数据名称  | 数据类型 | 说明                     |
| --------- | -------- | ------------------------ |
| status    | Number   | 200 成功；500 失败；     |
| msg       | String   | 对 status 字段的详细说明 |
| data      | Array    | 评论列表                 |
| +id       | Number   | 评论Id                   |
| +username | String   | 评论人姓名               |
| +content  | String   | 评论内容                 |
| +time     | String   | 评论时间                 |

+ 返回示例：

```json
{
    "status": 200,
    "msg": "获取评论列表成功",
    "data": [
        {
            "id": 2,
            "username": "李四",
            "content": "宝塔镇河妖",
            "time": "2019-10-25 16:18:52"
        },
        {
            "id": 1,
            "username": "张三",
            "content": "天王盖地虎",
            "time": "2019-10-25 16:12:57"
        }
    ]
}
```





### 发表评论

+ 接口URL：  /api/addcmt
+ 调用方式： POST
+ 参数格式：

| 参数名称 | 参数类型 | 是否必选 | 参数说明   |
| -------- | -------- | -------- | ---------- |
| username | String   | 是       | 评论人名称 |
| content  | String   | 是       | 评论内容   |

+ 响应格式：

| 数据名称 | 数据类型 | 说明                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| status   | Number   | 201 发表评论成功；500 请填写完整的评论信息； 501 执行Sql失败； |
| msg      | String   | 对 status 字段的详细说明                                     |

+ 返回示例：

```json
{
    "status": 201,
    "msg": "发表评论成功"
}
```





### 新闻列表

+ 接口URL：  /api/news
+ 调用方式： GET
+ 参数格式：无
+ 响应格式：

| 数据名称  | 数据类型 | 说明                                         |
| --------- | -------- | -------------------------------------------- |
| status    | Number   | 200 获取新闻列表成功；500 获取新闻列表失败！ |
| msg       | String   | 对 status 字段的详细说明                     |
| data      | Array    | 新闻列表数组                                 |
| +id       | Number   | 新闻Id                                       |
| +title    | String   | 新闻标题                                     |
| +source   | String   | 新闻来源                                     |
| +cmtcount | Number   | 评论数量                                     |
| +tags     | String   | 标签                                         |
| +img      | String   | 图片地址                                     |
| +time     | String   | 发表时间                                     |

+ 返回示例：

```json
{
    "status": 200,
    "msg": "获取新闻列表成功",
    "data": [
        {
            "id": 1,
            "title": "5G商用在即，三大运营商营收持续下降",
            "source": "新京报经济新闻",
            "cmtcount": 58,
            "tags": "三大运营商,中国移动,5G商用",
            "img": "/images/0.webp",
            "time": "2019-10-28T03:50:28.000Z"
        }
    ]
}
```

