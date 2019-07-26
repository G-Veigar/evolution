vue-cli创建的项目中集成了 yorkie（基于husky），它会让你在 package.json 的 gitHooks 字段中方便地指定 Git hook

搭配lint-staged（vue-cli3没集成，需要自行安装），可以只对本次修改的代码lint。