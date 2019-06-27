/**
* Google search
*
* Syntax:
*   {% g search %}
*/
hexo.extend.tag.register('g', function (args) {
  return '<a href="https://www.google.com/search?q=' + args.join('+') + '" target="_blank">' + args.join(' ') + '</a>';
});

hexo.extend.tag.register('finviz', function (args) {
  var text=args[0];
  var quote = text.indexOf('$')==0?text.substr(1):text;
  return '<a href="https://finviz.com/quote.ashx?t=' + quote + '" target="_blank">' + text + '</a>';
});

hexo.extend.tag.register('color', function (args) {
  var color=args.shift();
  return '<span style="color:'+color+';">'+args.join(' ')+'</span>';
});
