首先要安装docker

docker镜像加速配置

```
{
  "debug": true,
  "experimental": false,
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```

在项目根目录执行一下命令启动

```
docker-compose up -d

```

[API地址](http://127.0.0.1:886/swagger/index.html)

[示例地址](http://127.0.0.1:8088)

配置信息

<table>
<tr>
<td>数据库地址</td>
<td>mysql</td>
</tr>
<tr>
<td>数据库</td>
<td>admin</td>
</tr>
<tr>
<td>数据库用户名</td>
<td>root</td>
</tr>
<tr>
<td>数据库端口号</td>
<td>3306</td>
</tr>
<tr>
<td>数据库密码</td>
<td>123456</td>
</tr>
</table>
