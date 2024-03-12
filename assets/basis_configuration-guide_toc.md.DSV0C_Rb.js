import{_ as a}from"./chunks/img-1.Be4Nb5iU.js";import{_ as n,E as l,c as p,m as s,a as e,J as o,a4 as i,o as r}from"./chunks/framework.L7gT5uOw.js";const d="/assets/img-2.CSkPAMaY.png",c="/assets/img-3.KqCeJ1gn.png",h="/assets/img-6.qbqNgsys.png",k="/assets/img-7.eMOMF1fB.png",u="/assets/img-5.DnYNSEz7.png",g="/assets/img-4.CKQ2dD4v.png",B=JSON.parse('{"title":"toc","description":"","frontmatter":{},"headers":[],"relativePath":"basis/configuration-guide/toc.md","filePath":"basis/configuration-guide/toc.md","lastUpdated":1710212021000}'),m={name:"basis/configuration-guide/toc.md"},_=i(`<h1 id="toc" tabindex="-1">toc <a class="header-anchor" href="#toc" aria-label="Permalink to &quot;toc&quot;">​</a></h1><p><code>toc</code> 用于设置文章的 TOC，非常实用的功能，启用后可以快速查看文章整体的目录结构和点击目录跳转对应位置。（建议开启）</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">toc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  expand_all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  init_open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">right</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Option values: left | right</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h2><p><code>enable</code> 是否开启 TOC，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>enable: false</code> 关闭</p><p><img src="`+d+'" alt="image"></p></li><li><p><code>enable: true</code> 开启</p><p><img src="'+a+'" alt="image"></p></li></ul><h2 id="number" tabindex="-1">number <a class="header-anchor" href="#number" aria-label="Permalink to &quot;number&quot;">​</a></h2><p><code>number</code> 给 TOC 目录结构自动加上数字编号，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>number: false</code></p><p><img src="'+a+'" alt="image"></p></li><li><p><code>number: true</code></p><p><img src="'+c+'" alt="image"></p></li></ul><h2 id="expand-all" tabindex="-1">expand_all <a class="header-anchor" href="#expand-all" aria-label="Permalink to &quot;expand_all&quot;">​</a></h2><p><code>expand_all</code> 展开所有目录结构，可选值：<code>true</code> 或 <code>false</code>。</p><ul><li><p><code>expand_all: true</code> 一次性展开所有的目录结构</p><p><img src="'+h+'" alt="image"></p></li><li><p><code>expand_all: false</code> 边滚动页面边展开对应的位置的目录</p><p><img src="'+k+'" alt="image"></p></li></ul><h2 id="init-open" tabindex="-1">init_open <a class="header-anchor" href="#init-open" aria-label="Permalink to &quot;init_open&quot;">​</a></h2><p><code>init_open</code> 打开文章页时是否自动打开 TOC 目录结构，可选值：<code>true</code> 或 <code>false</code>。</p>',14),b={id:"layout",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#layout","aria-label":'Permalink to "layout <Badge type="tip" text="v3.7.0" />"'},"​",-1),f=i('<p><code>layout</code> 用于设置 TOC 目录结构模块的布局位置，默认为 right (右侧)，可选值：<code>left</code> 或 <code>right</code>。</p><ul><li><p><code>layout: right</code></p><p><img src="'+u+'" alt="image"></p></li><li><p><code>layout: left</code></p><p><img src="'+g+'" alt="image"></p></li></ul>',2);function E(C,A,D,x,v,T){const t=l("Badge");return r(),p("div",null,[_,s("h2",b,[e("layout "),o(t,{type:"tip",text:"v3.7.0"}),e(),y]),f])}const F=n(m,[["render",E]]);export{B as __pageData,F as default};