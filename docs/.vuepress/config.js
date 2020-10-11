module.exports = {
  themeConfig: {
    navbar: true,
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
      /* 参考资料：
          markdown-it官方文档：
          http://markdown-it.docschina.org/api/MarkdownIt.html#markdownit-renderer
          markdown-it-container
          https://github.com/markdown-it/markdown-it-container
       */
      // 
      md.use(require('markdown-it-container'), 'card', {
        /* validate: function(params) {
          return params.trim().match(/^card\s+(.*)$/);
        }, */
        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^card\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            // opening tag
            const title = Array.isArray(m) && m.length > 1? '<p class="title">' + md.utils.escapeHtml(m[1]) +'</p>\n': '';
            return  '<div class="card">'+ title +'\n';
          } else {
            // closing tag
            return '</div>\n';
          }
        }
      });
    }
  }
}