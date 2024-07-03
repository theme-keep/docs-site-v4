import{_ as l,D as t,c as p,j as s,a as i,I as e,a3 as n,o as r}from"./chunks/framework.8bH7GJix.js";const h="/assets/img-5.RtUjMagi.png",o="/assets/img-3.B-UoqLhl.png",d="/assets/img-7.BiXOULwQ.png",c="/assets/img-8.BupiTTV2.png",k="/assets/img-9.DnMpkFtF.png",u="/assets/img-13.CLyC62rh.png",g="/assets/img-10.B1KtXBHs.png",_="/assets/img-11.DkCSvIhq.png",b="/assets/img-12.DNMDqJBZ.png",m="/assets/img-14.CejSNsPU.png",E="/assets/img-15.Dl4prSzo.png",y="/assets/img-6.CdBeMust.png",v="/assets/img-1.Bs60-_JH.png",f="/assets/img-2.DLjguZdM.png",A="/assets/img-4.c2zBrhoV.png",rs=JSON.parse('{"title":"footer","description":"","frontmatter":{},"headers":[],"relativePath":"basis/configuration-guide/footer.md","filePath":"basis/configuration-guide/footer.md","lastUpdated":1719987706000}'),D={name:"basis/configuration-guide/footer.md"},C=n(`<h1 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;footer&quot;">​</a></h1><p><code>footer</code> 用于配置博客网站底部的信息展示。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  since</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2020</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # The starting year of your website, Can be null</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  word_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Option values: true | false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  site_deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # Option values: github | vercel | netlify | cloudflare | gitee | aliyun | tencent_cloud | upyun</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your deployment provider url, Can be null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># record code of your website</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># record link of your website, Can be null</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="since" tabindex="-1">since <a class="header-anchor" href="#since" aria-label="Permalink to &quot;since&quot;">​</a></h2><p><code>since</code> 设置网站起始年份，可以为空，不填则自动使用当前年份。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  since</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2020</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+h+'" alt="image"></p>',7),x={id:"word-count",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#word-count","aria-label":'Permalink to "word_count <Badge type="tip" text="v3.7.0" />"'},"​",-1),P=s("p",null,[s("code",null,"word_count"),i(" 启用全站字数统计，可选值："),s("code",null,"true"),i(" 或 "),s("code",null,"false"),i("。")],-1),B=s("p",null,[s("img",{src:o,alt:"image"})],-1),T={id:"site-deploy",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#site-deploy","aria-label":'Permalink to "site_deploy <Badge type="tip" text="v3.6.0" />"'},"​",-1),S=n('<p><code>site_deploy</code> 是 <code>v3.6.0</code> 新增功能，用于配置显示你的 Keep 主题静态网站部署服务器提供商。</p><h3 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 是否启用，可选值：<code>true</code> | <code>false</code> 。</p><h3 id="provider" tabindex="-1">provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;provider&quot;">​</a></h3><p><code>provider</code> 配置网站部署提供商，可选值：<code>github</code> | <code>vercel</code> | <code>netlify</code> | <code>cloudflare</code> | <code>gitee</code> | <code>aliyun</code> | <code>tencent_cloud</code> | <code>upyun</code> 。</p>',5),I=s("li",null,[s("p",null,[i("github "),s("img",{src:d,alt:"image"})])],-1),V=s("li",null,[s("p",null,[i("vercel "),s("img",{src:c,alt:"image"})])],-1),w=s("li",null,[s("p",null,[i("netlify "),s("img",{src:k,alt:"image"})])],-1),N=s("img",{src:u,alt:"image"},null,-1),O=s("li",null,[s("p",null,[i("gitee "),s("img",{src:g,alt:"image"})])],-1),R=s("li",null,[s("p",null,[i("aliyun "),s("img",{src:_,alt:"image"})])],-1),M=s("li",null,[s("p",null,[i("tencent_cloud "),s("img",{src:b,alt:"image"})])],-1),U=s("li",null,[s("p",null,[i("upyun "),s("img",{src:m,alt:"image"})])],-1),j=s("h3",{id:"url",tabindex:"-1"},[i("url "),s("a",{class:"header-anchor",href:"#url","aria-label":'Permalink to "url"'},"​")],-1),K=s("p",null,[s("code",null,"url"),i(" 配置网站部署提供商的跳转链接，可以为空。")],-1),L={id:"record",tabindex:"-1"},$=s("a",{class:"header-anchor",href:"#record","aria-label":'Permalink to "record <Badge type="tip" text="v4.1.2" />"'},"​",-1),H=n(`<p><code>record</code> 是 <code>v4.1.2</code> 新增的配置项，用于配置备案相关的记录，例如：ICP、公网安备、域名备案等。</p><h3 id="enable-1" tabindex="-1">enable <a class="header-anchor" href="#enable-1" aria-label="Permalink to &quot;enable&quot;">​</a></h3><p><code>enable</code> 是否启用，可选值：<code>true</code> | <code>false</code> 。</p><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;list&quot;">​</a></h3><p><code>list</code> 用于填写备案记录的详细信息，支持填写多条记录。</p><p>使用示例：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">粤 ICP 证 0001 号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://beian.miit.gov.cn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">粤公网安备 0001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://beian.mps.gov.cn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>效果图：</p><p><img src="`+E+'" alt="image"></p>',9),J={id:"icp",tabindex:"-1"},X=s("s",null,"icp",-1),z=s("a",{class:"header-anchor",href:"#icp","aria-label":'Permalink to "~~icp~~ <Badge type="danger" text="v4.1.2 已废弃" />"'},"​",-1),Z=n('<h3 id="enable-2" tabindex="-1"><s>enable</s> <a class="header-anchor" href="#enable-2" aria-label="Permalink to &quot;~~enable~~&quot;">​</a></h3><p><code>enable</code> 是否开启显示网站 ICP 备案编号，可选值：<code>true</code> 或 <code>false</code>。</p><h3 id="record-code" tabindex="-1"><s>record_code</s> <a class="header-anchor" href="#record-code" aria-label="Permalink to &quot;~~record_code~~&quot;">​</a></h3><p><code>record_code</code> 配置 ICP 备案编号，只在 <code>enable: true</code> 时才生效。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">record_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">粤 ICP 证 00000001 号</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+y+'" alt="image"></p><h3 id="url-1" tabindex="-1"><s>url</s> <a class="header-anchor" href="#url-1" aria-label="Permalink to &quot;~~url~~&quot;">​</a></h3><p><code>url</code> 配置 ICP 备案编号链接，可以为空。</p>',8),Q={id:"shields-style",tabindex:"-1"},Y=s("s",null,"shields_style",-1),G=s("a",{class:"header-anchor",href:"#shields-style","aria-label":'Permalink to "~~shields_style~~ <Badge type="danger" text="v4.1.2 已废弃" />"'},"​",-1),W=n('<p><code>shields_style</code> 是 Keep 主题 <code>v3.7.0</code> 提供的配置项，可以把 footer 模块转换成 <a href="https://shields.io/" target="_blank" rel="noreferrer">shields</a> 风格。</p><h3 id="enable-3" tabindex="-1"><s>enable</s> <a class="header-anchor" href="#enable-3" aria-label="Permalink to &quot;~~enable~~&quot;">​</a></h3><p><code>enable</code> 用于开启或关闭 shields 风格。</p><ul><li><p><code>enable: true</code></p><p><img src="'+v+'" alt="image"></p></li><li><p><code>enable: false</code></p><p><img src="'+f+`" alt="image"></p></li></ul><h3 id="custom" tabindex="-1"><s>custom</s> <a class="header-anchor" href="#custom" aria-label="Permalink to &quot;~~custom~~&quot;">​</a></h3><p><code>custom</code> 用于在网站底部自定义配置你的 shields.io 图标，支持配置无限个。</p><blockquote><p>只有在 shields 风格开启状态下才生效。</p></blockquote><ul><li><p><code>img_url</code> shields.io 图标图片。</p></li><li><p><code>link_url</code> shields.io 图标链接，可以为空。</p></li></ul><p>示例：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">shields_style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  custom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://github.com/XPoet/hexo-theme-keep</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      img_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://img.shields.io/badge/Hexo-Keep%20v3.7.0-blue?style=flat-square&amp;logo=hexo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+A+'" alt="image"></p>',11);function ss(is,as,es,ns,ls,ts){const a=t("Badge");return r(),p("div",null,[C,s("h2",x,[i("word_count "),e(a,{type:"tip",text:"v3.7.0"}),i(),F]),P,B,s("h2",T,[i("site_deploy "),e(a,{type:"tip",text:"v3.6.0"}),i(),q]),S,s("ul",null,[I,V,w,s("li",null,[s("p",null,[i("cloudflare "),e(a,{type:"tip",text:"v4.1.1"}),N])]),O,R,M,U]),j,K,s("h2",L,[i("record "),e(a,{type:"tip",text:"v4.1.2"}),i(),$]),H,s("h2",J,[X,i(),e(a,{type:"danger",text:"v4.1.2 已废弃"}),i(),z]),Z,s("h2",Q,[Y,i(),e(a,{type:"danger",text:"v4.1.2 已废弃"}),i(),G]),W])}const hs=l(D,[["render",ss]]);export{rs as __pageData,hs as default};