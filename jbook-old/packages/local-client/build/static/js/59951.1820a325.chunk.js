(self.webpackChunk_jsnote_gdc_local_client=self.webpackChunk_jsnote_gdc_local_client||[]).push([[59951],{59951:function(){!function(n){var t=n.util.clone(n.languages.javascript),e=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function g(n,t){return n=n.replace(/<S>/g,(function(){return e})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(n,t)}s=g(s).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=g(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:g(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:g(/=<BRACES>/.source),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx},alias:"language-javascript"}},n.languages.jsx.tag);var o=function n(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(n).join(""):""},c=function t(e){for(var a=[],s=0;s<e.length;s++){var g=e[s],c=!1;if("string"!==typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===o(g.content[0].content[1])&&a.pop():"/>"===g.content[g.content.length-1].content||a.push({tagName:o(g.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===g.type&&"{"===g.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?a[a.length-1].openedBraces--:c=!0),(c||"string"===typeof g)&&a.length>0&&0===a[a.length-1].openedBraces){var i=o(g);s<e.length-1&&("string"===typeof e[s+1]||"plain-text"===e[s+1].type)&&(i+=o(e[s+1]),e.splice(s+1,1)),s>0&&("string"===typeof e[s-1]||"plain-text"===e[s-1].type)&&(i=o(e[s-1])+i,e.splice(s-1,1),s--),e[s]=new n.Token("plain-text",i,null,i)}g.content&&"string"!==typeof g.content&&t(g.content)}};n.hooks.add("after-tokenize",(function(n){"jsx"!==n.language&&"tsx"!==n.language||c(n.tokens)}))}(Prism)}}]);
//# sourceMappingURL=59951.1820a325.chunk.js.map