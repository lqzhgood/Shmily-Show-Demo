Demo 的一些资源文件和配置

### 说明

1. 下载 Shmily-Show
2. 覆盖 `memoryweb` 和 `msgData`
3. 进入 `memoryweb`
4. `npm run build`
5. 删除 `dist\json` 除了 `msg` 以外文件夹
6. 本项目 `dist` 覆盖 'dist'
7. 复制本项目 `msgData` 到 `dist`
8. 目标产物 `dist` 推送到 `page` 分支

##### 增加 modify 显示

`app.md5.js` , 搜索 `["msg","comment"]` 并修改为 `["msg","comment","modify"]`
