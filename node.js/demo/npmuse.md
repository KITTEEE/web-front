* 全局安装的包位于 node.js 环境的 node_modules 目录下
* 全局安装的包一般用于命令行工具

* 本地安装的包位于当前项目(目录)下的node_modules里
* 本地安装的包一般用于实际的开发工作

-------------------------------------------------
* 1. 包安装
npm install -g 包名称(全局)
npm install 包名称 （本地）
* 2. 安装时可指定安装版本，若没有指定，则安装最新版本
npm install -g 包名称@版本号
* 3. 卸载包
npm uninstall -g 包名称
* 4. 更新包
npm update -g 包名称 

`开发环境：平时开发使用的环境，比如开发时需要使用到es-checker，但实际环境中不需要用到这个包`
`生产环境：项目部署上线后服务器环境，实际环境下需要依赖的包，可通过 npm install --production 给项目添加全部依赖`

* npm install 安装所有依赖(包括开发环境的包)
* --save  向生产环境添加依赖  package.json 中的 dependencies
* --save-dev 向开发环境添加依赖 package.json 中的 devDependencies

### 包的规范
- package.json必须在包的顶层目录下
- 二进制文件应该在bin目录下
- JavaScript代码应该在lib目录下
- 文档应该在doc目录下
- 单元测试应该在test目录下

### package.json字段分析
- name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
- description：包的简要说明
- version：符合语义化版本识别规范的版本字符串
- keywords：关键字数组，通常用于搜索
- maintainers：维护者数组，每个元素要包含name、email（可选）、web（可选）字段
- contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一- 个元素
- bugs：提交bug的地址，可以是网站或者电子邮件地址
- licenses：许可证数组，每个元素要包含type（许可证名称）和url（链接到许可证文本的- 地址）字段
- repositories：仓库托管地址数组，每个元素要包含type（仓库类型，如git）、url（仓- 库的地址）和path（相对于仓库的路径，可选）字段
- dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
- devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成