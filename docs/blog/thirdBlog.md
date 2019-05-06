# .gitignore忽略文件失效问题

当我们的文件已经提交到了git仓库，此时再设置相关的文件/文件夹为忽略文件，会发现失效了。因为gitignore只对未提交文件有效。
此时解决方法是:

**1.首先我们先删掉已经提交的文件**

```
git rm -r --cached .settings；
```

**2.提交并备注**

```
git commit -m 'delete .settings'；
```
**3.提交到远程仓库**

```
git push origin master ；
```

**4.在本地文件夹中添加.gitignore文件并添加需要忽略提交的文件**

**5.然后执行如下命令：**

```
git add .gitignore；提交至暂存区

git commit -m 'add .gitignore' ；提交至本地仓库

git push origin master ；提交至远程仓库
```


