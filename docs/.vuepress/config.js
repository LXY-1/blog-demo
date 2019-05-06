/*
 * @Description: 1.base:站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束。这里设置/blog-demo/，我们再次本地运行项目，访问路径就需要变更为：http://localhost:8080/blog-demo/
 *************** 2.title：网站的标题
 *************** 3. description:网站描述，自动加入meta标签。
 * @Author: Lxiaowei
 * @Github: https://github.com/LXY-1/itemName
 * @LastEditors: Lxiaowei
 * @Date: 2019-05-06 19:19:00
 * @LastEditTime: 2019-05-06 20:25:23
 */
module.exports = {
    base: '/blog-demo/',
    title: 'blog-demo',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/lxw/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
            { text: 'SecondBlog', link: '/blog/secondBlog.md' },
            { text: 'thirdBlog', link: '/blog/thirdBlog.md' }
        ],
        sidebar:[
            ['/','首页'],
            ['/blog/FirstBlog.md','我的第一篇博客'],
            ['/blog/secondBlog.md','win10升级node版本'],
            ['/blog/thirdBlog.md','.gitgnore失效问题']
        ]
    }  
}