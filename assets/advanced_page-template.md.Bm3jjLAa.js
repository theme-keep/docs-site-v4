import{_ as e,D as p,c as t,j as a,a as s,I as l,a4 as i,o as h}from"./chunks/framework.Sqfz5Ens.js";const k="/assets/img-1.BCanpsCX.png",r="/assets/img-3.Cbpc3yvk.png",d="/assets/img-4.CFX1AfSW.png",o="/assets/img-5.CwnPe0tc.png",c="/assets/img-6.OB-Uk9o8.png",q=JSON.parse('{"title":"页面模板","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/page-template.md","filePath":"advanced/page-template.md","lastUpdated":1721032377000}'),E={name:"advanced/page-template.md"},g=i('<h1 id="页面模板" tabindex="-1">页面模板 <a class="header-anchor" href="#页面模板" aria-label="Permalink to &quot;页面模板&quot;">​</a></h1><p>在 Keep 主题中，内置一些比较通用的页面模板，例如：links（友链）、photos（相册）和 tools（工具），在创建新页面后，按照如下教程填写相应页面数据，便可自动生成非常美观的页面。</p><p><a href="./page-config.html#创建页面">如何创建页面？→</a></p><h2 id="links-友链" tabindex="-1">links（友链） <a class="header-anchor" href="#links-友链" aria-label="Permalink to &quot;links（友链）&quot;">​</a></h2><h3 id="效果图" tabindex="-1">效果图 <a class="header-anchor" href="#效果图" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="'+k+`" alt="img"></p><h3 id="使用流程" tabindex="-1">使用流程 <a class="header-anchor" href="#使用流程" aria-label="Permalink to &quot;使用流程&quot;">​</a></h3><ol><li><p>在 Hexo 项目的 <code>source</code> 目录里增加 <code>_data</code> 文件夹。</p></li><li><p>在 <code>_source/_data</code> 目录下新建 <code>links.yml</code> 文件，填写 links 页面模板数据。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">朋友们 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">XPoet</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://xpoet.cn</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">懒惰是程序员第一生产力</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://xpoet.cn/images/avatar.png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">不知名艺术家</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://jinzhanqi.com/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">love artist, love code.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  avatar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://s3.ax1x.com/2020/11/17/DVvkB4.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>v4.0.0</code> 起，支持在 <code>links.yml</code> 中添加 <code>- title: xxx</code> 可以为友链列表设置分类标题，如下图。<br><img src="`+r+`" alt="image"></p></blockquote></li><li><p>使用 links 页面模板。</p><p>你可以在任意页面的 Front-Matter 中通过添加 <strong><code>template: links</code></strong> 来使用 links 页面模板。</p><p>如下示例，我们在 links 页面中使用 links 页面模板。</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">links</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024-07-13 14:16:07</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">links</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Keep 主题 <code>v4.2.0</code> 起，只有在页面的 Front-Matter 中添加了 <strong><code>template: links</code></strong>，该页面才能使用 links 页面模板。</p></div></li></ol>`,8),m={id:"photos-相册",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#photos-相册","aria-label":'Permalink to "photos（相册） <Badge type="tip" text="v4.0.0" />"'},"​",-1),y=i('<h3 id="效果图-1" tabindex="-1">效果图 <a class="header-anchor" href="#效果图-1" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="'+d+`" alt="image"></p><h3 id="使用流程-1" tabindex="-1">使用流程 <a class="header-anchor" href="#使用流程-1" aria-label="Permalink to &quot;使用流程&quot;">​</a></h3><ol><li><p>在 Hexo 项目的 <code>source</code> 目录里增加 <code>_data</code> 文件夹。</p></li><li><p>在 <code>_source/_data</code> 目录下新建 <code>photos.yml</code> 文件，填写 photos 页面模板数据。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://xpoet.cn/images/logo.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">XPoet</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/photos/img-1.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">img1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/photos/img-2.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">img2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>使用 photos 页面模板。</p><p>你可以在任意页面的 Front-Matter 中通过添加 <strong><code>template: photos</code></strong> 来使用 photos 页面模板。</p><p>如下示例，我们在 photos 页面中使用 photos 页面模板。</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">photos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024-07-13 15:16:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">photos</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Keep 主题 <code>v4.2.0</code> 起，只有在页面的 Front-Matter 中添加了 <strong><code>template: photos</code></strong>，该页面才能使用 photos 页面模板。</p></div></li></ol>`,4),u={id:"tools-工具",tabindex:"-1"},F=a("a",{class:"header-anchor",href:"#tools-工具","aria-label":'Permalink to "tools（工具）  <Badge type="tip" text="v4.1.0" />"'},"​",-1),_=i('<h3 id="效果图-2" tabindex="-1">效果图 <a class="header-anchor" href="#效果图-2" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="'+o+`" alt="image"></p><h3 id="使用流程-2" tabindex="-1">使用流程 <a class="header-anchor" href="#使用流程-2" aria-label="Permalink to &quot;使用流程&quot;">​</a></h3><ol><li><p>在 Hexo 项目的 <code>source</code> 目录里增加 <code>_data</code> 文件夹。</p></li><li><p>在 <code>_source/_data</code> 目录下新建 <code>tools.yml</code> 文件，填写 tools 页面模板数据。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">聊天 AI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ChatGPT</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://chat.openai.com/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OpenAI 旗下 AI 聊天对话工具</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/tools/chatgpt.svg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Gemini</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://gemini.google.com/app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Google 旗下 AI 聊天对话工具</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/images/tools/gemini.svg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">......</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>在 <code>tools.yml</code> 中添加 <code>- category: xxx</code> 可以为工具列表设置分类，如下图。<br><img src="`+c+`" alt="image"></p></blockquote></li><li><p>使用 tools 页面模板。</p><p>你可以在任意页面的 Front-Matter 中通过添加 <strong><code>template: tools</code></strong> 来使用 tools 页面模板。</p><p>如下示例，我们在 tools 页面中使用 tools 页面模板。</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tools</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024-07-13 16:16:00</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tools</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Keep 主题 <code>v4.2.0</code> 起，只有在页面的 Front-Matter 中添加了 <strong><code>template: tools</code></strong>，该页面才能使用 tools 页面模板。</p></div></li></ol>`,4);function C(v,B,A,D,x,P){const n=p("Badge");return h(),t("div",null,[g,a("h2",m,[s("photos（相册） "),l(n,{type:"tip",text:"v4.0.0"}),s(),b]),y,a("h2",u,[s("tools（工具） "),l(n,{type:"tip",text:"v4.1.0"}),s(),F]),_])}const T=e(E,[["render",C]]);export{q as __pageData,T as default};