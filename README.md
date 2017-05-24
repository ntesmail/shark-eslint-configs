# shark-eslint 配置文件仓库

shark-eslint 1.1.0 版本后，支持从本仓库拉取所需的配置文件和配置代码，同时，为了配合类似 ` shark-eslint -t ng ` 支持自动生成不同的 .eslintrc.json 模板，请向本仓库添加或更新配置文件

注意：新增 .eslintrc.json 配置请按照 .eslintrc-xx.json 的格式，其中，xx 便是参数 -t 后面跟的参数，如：执行命令`shark-eslint -t ng`，生成的 .eslintrc.json 文件就是本仓库中的 .eslintrc-ng.json