---
layout: SpecialLayout
---

::: card 123


这是一个`警告`

```js

  md.use(require('markdown-it-container'), 'spoiler', {
    /* validate: function(params) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    }, */
    render: function (tokens, idx) {
      //var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag '<div>' + md.utils.escapeHtml(m[1]) + '\n'
        return  '<div>\n';
  
      } else {
        // closing tag
        return '</div>\n';
      }
    }
  });


```
:::

'# Hello VuePress' 

