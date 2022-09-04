import{_ as s,o as a,c as e,d as n}from"./app.368c58e2.js";const A=JSON.parse('{"title":"Vuex","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"settings","slug":"settings","link":"#settings","children":[]},{"level":2,"title":"keepAlive","slug":"keepalive","link":"#keepalive","children":[]},{"level":2,"title":"menu","slug":"menu","link":"#menu","children":[]},{"level":2,"title":"tabbar","slug":"tabbar","link":"#tabbar","children":[]},{"level":2,"title":"user","slug":"user","link":"#user","children":[]}],"relativePath":"guide-vue2/vuex.md"}'),l={name:"guide-vue2/vuex.md"},p=n(`<h1 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>Vuex \u540C\u6837\u5B9E\u73B0\u4E86\u81EA\u52A8\u6CE8\u518C\uFF0C\u5F00\u53D1\u53EA\u9700\u5173\u6CE8 <code>./store/modules/</code> \u6587\u4EF6\u5939\u91CC\u7684\u6587\u4EF6\u5373\u53EF\uFF0C\u8BF7\u6839\u636E\u6A21\u5757\u533A\u5206\u6587\u4EF6\u3002</p><p>\u65B0\u5EFA\u6A21\u677F\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// example.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getters </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> actions </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mutations </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">namespaced</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    state</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    actions</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    getters</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutations</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6587\u4EF6\u9ED8\u8BA4\u5F00\u542F\u547D\u540D\u7A7A\u95F4\uFF0C\u6587\u4EF6\u540D\u4F1A\u9ED8\u8BA4\u6CE8\u518C\u4E3A\u6A21\u5757\u540D\uFF0C\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">example</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getters[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example/xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example/xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example/xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="settings" tabindex="-1">settings <a class="header-anchor" href="#settings" aria-hidden="true">#</a></h2><p>\u8D1F\u8D23\u5B58\u653E\u914D\u7F6E\u76F8\u5173\u6570\u636E\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u8BE5\u6587\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u3002</p><h2 id="keepalive" tabindex="-1">keepAlive <a class="header-anchor" href="#keepalive" aria-hidden="true">#</a></h2><p>\u8D1F\u8D23\u8BB0\u5F55\u9875\u9762\u7F13\u5B58\u7684\u7EC4\u4EF6 <code>name</code> \u540D\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u8BE5\u6587\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u3002</p><h2 id="menu" tabindex="-1">menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h2><p>\u8D1F\u8D23\u751F\u6210\u5BFC\u822A\u83DC\u5355\u7684\u8DEF\u7531\u6570\u636E\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u8BE5\u6587\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u3002</p><h2 id="tabbar" tabindex="-1">tabbar <a class="header-anchor" href="#tabbar" aria-hidden="true">#</a></h2><p>\u8D1F\u8D23\u8BB0\u5F55\u6807\u7B7E\u680F\u72B6\u6001\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u8BE5\u6587\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u3002</p><p>\u5F53\u914D\u7F6E\u5F00\u542F\u6807\u7B7E\u680F\u529F\u80FD\u65F6\uFF0C\u9875\u9762\u7EC4\u4EF6\u7684 <code>name</code> \u4F1A\u5728\u6253\u5F00\u9875\u9762\u65F6\u81EA\u52A8\u52A0\u5165\u7F13\u5B58\u5217\u8868\uFF0C\u5982\u679C\u9875\u9762\u65E0\u9700\u7F13\u5B58\uFF0C\u5219\u4E0D\u8BBE\u7F6E <code>name</code> \u5373\u53EF\uFF0C\u6CE8\u610F\uFF0C\u662F\u9875\u9762\u7EC4\u4EF6\u7684 <code>name</code> \uFF0C\u4E0D\u662F\u8DEF\u7531\u7684 <code>name</code> \u3002</p><p>\u56FA\u5B9A\u7684\u6807\u7B7E\u4F1A\u5C06\u6570\u636E\u5B58\u653E\u5230 <code>localStorage</code> \u91CC\u3002</p><h2 id="user" tabindex="-1">user <a class="header-anchor" href="#user" aria-hidden="true">#</a></h2><p>\u8D1F\u8D23\u5B9E\u73B0\u7528\u6237\u7684\u767B\u5F55\u3001\u767B\u51FA\uFF0C\u4EE5\u53CA\u7528\u6237\u4FE1\u606F\u5904\u7406\u3002</p><p>\u8FD9\u4E2A\u6587\u4EF6\u662F\u9700\u8981\u4E8C\u6B21\u5F00\u53D1\u7684\uFF0C\u5176\u4E2D <code>getters.isLogin</code>\u3001<code>dispatch(&#39;login&#39;)</code>\u3001<code>commit(&#39;setUserData&#39;)</code>\u3001<code>commit(&#39;removeUserData&#39;)</code> \u4E3A\u5FC5\u987B\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u4E3B\u8981\u8D1F\u8D23\u6821\u9A8C\u662F\u5426\u767B\u5F55\u3001\u767B\u5F55\u64CD\u4F5C\u3001\u767B\u5F55\u6210\u529F\u8BB0\u5F55\u7528\u6237\u4FE1\u606F\u3001\u767B\u51FA\u6E05\u9664\u7528\u6237\u4FE1\u606F\u3002</p><p>\u6309\u6846\u67B6\u7684\u8BBE\u8BA1\uFF0C\u7528\u6237\u767B\u5F55\u65F6\u4E0D\u83B7\u53D6\u6743\u9650\u6570\u636E\uFF0C\u767B\u5F55\u6210\u529F\u540E\u901A\u8FC7 <code>dispatch(&#39;getPermissions&#39;)</code> \u83B7\u53D6\u7528\u6237\u6743\u9650\u6570\u636E\uFF0C\u5982\u679C\u4F60\u7684\u7CFB\u7EDF\u662F\u5728\u767B\u5F55\u65F6\u5C31\u80FD\u62FF\u5230\u7528\u6237\u6743\u9650\u6570\u636E\uFF0C\u90A3\u5728\u8FD9\u4E2A\u65B9\u6CD5\u91CC\u53EF\u4EE5\u53EA\u4FDD\u7559\u4E00\u53E5 <code>resolve(permissions)</code> \uFF0C\u53EA\u9700\u5C06\u6743\u9650\u6570\u636E resolve \u51FA\u53BB\u5373\u53EF\u3002</p>`,21),o=[p];function t(c,r,i,D,d,F){return a(),e("div",null,o)}const C=s(l,[["render",t]]);export{A as __pageData,C as default};