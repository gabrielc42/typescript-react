(self.webpackChunk_jsnote_gdc_local_client=self.webpackChunk_jsnote_gdc_local_client||[]).push([[73581],{73581:function(){!function(e){for(var n='\\((?:[^();"#\\\\]|\\\\[^]|;.*(?!.)|"(?:[^"\\\\]|\\\\.)*"|#(?:\\{(?:(?!#\\})[^])*#\\}|[^{])|<expr>)*\\)',i=0;i<5;i++)n=n.replace(/<expr>/g,(function(){return n}));n=n.replace(/<expr>/g,"[^\\s\\S]");var d=e.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp('(^|[=\\s])#(?:"(?:[^"\\\\]|\\\\.)*"|[^\\s()"]*(?:[^\\s()]|<expr>))'.replace(/<expr>/g,(function(){return n})),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:e.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};d["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=d,e.languages.ly=d}(Prism)}}]);
//# sourceMappingURL=73581.f0d292e9.chunk.js.map