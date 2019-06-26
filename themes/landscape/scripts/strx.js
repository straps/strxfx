/**
* Google search
*
* Syntax:
*   {% g search %}
*/
hexo.extend.tag.register('g', function (args) {
  return '<a href="https://www.google.com/search?q='+args.join('+')+'" target="_blank">'+args.join(' ')+'</a>';
});
