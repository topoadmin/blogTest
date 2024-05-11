import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as d,c as a,d as t,b as n,f as l}from"./app-Dya65-u5.js";const i={},c=l('<div class="hint-container caution"><p class="hint-container-title">警告</p><p>本 Hooks 是系统最重要的内容，主要封装高度复用的 <code>表格增删改查</code> 代码。</p><p>Hooks 的优点是可以有效的组织和封装代码，同时又不强限制使用形式。</p></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>由于多选，过滤等操作需依赖表格组件提供的方法，所以目前仅支持 <mark>vxe-table</mark>。</p><p>仅封装了大部分已知的表格通用型方法。</p><p>因为众所周知过度封装后使用时的学习成本、维护成本都是很高的。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>',6),o=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"属性"),t("th",{style:{"text-align":"center"}},"类型"),t("th",{style:{"text-align":"center"}},"默认值"),t("th",{style:{"text-align":"center"}},"说明")])],-1),g=t("tr",null,[t("td",{style:{"text-align":"center"}},"title"),t("td",{style:{"text-align":"center"}},"string"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"页面标题")],-1),y=t("tr",null,[t("td",{style:{"text-align":"center"}},"getList"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"获取列表接口函数")],-1),x=t("tr",null,[t("td",{style:{"text-align":"center"}},"add"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"新增接口函数")],-1),h=t("tr",null,[t("td",{style:{"text-align":"center"}},"del"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"删除接口函数")],-1),p=t("tr",null,[t("td",{style:{"text-align":"center"}},"get"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"获取单条详情接口函数")],-1),_=t("tr",null,[t("td",{style:{"text-align":"center"}},"update"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"更新接口函数")],-1),u=t("tr",null,[t("td",{style:{"text-align":"center"}},"importData"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"导入接口函数")],-1),m=t("tr",null,[t("td",{style:{"text-align":"center"}},"export"),t("td",{style:{"text-align":"center"}},"string"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"导出地址")],-1),f=t("tr",null,[t("td",{style:{"text-align":"center"}},"formRef"),t("td",{style:{"text-align":"center"}},"string"),t("td",{style:{"text-align":"center"}},"formRef"),t("td",{style:{"text-align":"center"}},"表单的 ref")],-1),b=t("tr",null,[t("td",{style:{"text-align":"center"}},"tableRef"),t("td",{style:{"text-align":"center"}},"string"),t("td",{style:{"text-align":"center"}},"tableRef"),t("td",{style:{"text-align":"center"}},"表格的 ref")],-1),k=t("tr",null,[t("td",{style:{"text-align":"center"}},"row"),t("td",{style:{"text-align":"center"}},"object"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"行数据配置")],-1),v=t("tr",null,[t("td",{style:{"text-align":"center"}},"data"),t("td",{style:{"text-align":"center"}},"object"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"需要解构为响应式的数据")],-1),T=t("td",{style:{"text-align":"center"}},"cellClick",-1),H=t("td",{style:{"text-align":"center"}},"function",-1),A={style:{"text-align":"center"}},j=t("td",{style:{"text-align":"center"}},"当表格存在多选框时，此方法可控制点击某行时清除别的行的选中状态",-1),D=t("td",{style:{"text-align":"center"}},"myGetList",-1),z=t("td",{style:{"text-align":"center"}},"function",-1),B={style:{"text-align":"center"}},N=t("td",{style:{"text-align":"center"}},"自定义请求列表函数，不调用内置函数",-1),P=t("td",{style:{"text-align":"center"}},"handleReset",-1),R=t("td",{style:{"text-align":"center"}},"function",-1),C={style:{"text-align":"center"}},L=t("td",{style:{"text-align":"center"}},"重置表单钩子，如果需要对表单设置动态值，可在这个回调内添加",-1),q=t("td",{style:{"text-align":"center"}},"handleAdd",-1),w=t("td",{style:{"text-align":"center"}},"function",-1),G={style:{"text-align":"center"}},O=t("td",{style:{"text-align":"center"}},"新增钩子，如果需要对表单设置动态值，可在这个回调内添加",-1),S=t("td",{style:{"text-align":"center"}},"submitAfter",-1),V=t("td",{style:{"text-align":"center"}},"function",-1),Z={style:{"text-align":"center"}},E=t("td",{style:{"text-align":"center"}},"提交数据前最后的处理方法，修改数据不会影响 form 原数据",-1),I=t("tr",null,[t("td",{style:{"text-align":"center"}},"callback"),t("td",{style:{"text-align":"center"}},"function"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"回调方法")],-1),U=l('<h2 id="行数据配置" tabindex="-1"><a class="header-anchor" href="#行数据配置"><span>行数据配置</span></a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">id</td><td style="text-align:center;">string</td><td style="text-align:center;">id</td><td style="text-align:center;">数据的 <code>id</code> 字段</td></tr><tr><td style="text-align:center;">status</td><td style="text-align:center;">string</td><td style="text-align:center;">status</td><td style="text-align:center;">数据的 <code>状态</code> 字段，变更状态时用到</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">string</td><td style="text-align:center;">name</td><td style="text-align:center;">数据的 <code>名称</code> 字段，变更状态时用到</td></tr><tr><td style="text-align:center;">sort</td><td style="text-align:center;">string</td><td style="text-align:center;">sort</td><td style="text-align:center;">数据的 <code>排序</code> 字段，新增修改时用到</td></tr></tbody></table><h2 id="需要解构为响应式的数据" tabindex="-1"><a class="header-anchor" href="#需要解构为响应式的数据"><span>需要解构为响应式的数据</span></a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">form</td><td style="text-align:center;">object</td><td style="text-align:center;">表单数据</td></tr><tr><td style="text-align:center;">appendForm</td><td style="text-align:center;">object</td><td style="text-align:center;">提交表单时追加参数(异步参数时使用)</td></tr><tr><td style="text-align:center;">rules</td><td style="text-align:center;">object</td><td style="text-align:center;">表单校验数据</td></tr><tr><td style="text-align:center;">queryParams</td><td style="text-align:center;">object</td><td style="text-align:center;">查询参数</td></tr><tr><td style="text-align:center;">appendQueryParams</td><td style="text-align:center;">object</td><td style="text-align:center;">追加请求参数(异步参数时使用)</td></tr></tbody></table><h2 id="回调方法" tabindex="-1"><a class="header-anchor" href="#回调方法"><span>回调方法</span></a></h2><h3 id="callback" tabindex="-1"><a class="header-anchor" href="#callback"><span>callback</span></a></h3><p>在许多异步请求前、后，某些场景需要一些特定的数据或者页面交互。所以衍生出此回调函数。</p><p><strong><code>此函数包含许多种类型回调</code></strong></p><p>示例方法：callback(type, response, formData)</p><ul><li><strong><code>type</code></strong> 回调类型</li><li><strong><code>response</code></strong> response || 空 || queryParams</li><li><strong><code>formData</code></strong> 表单数据</li></ul><h3 id="回调说明" tabindex="-1"><a class="header-anchor" href="#回调说明"><span>回调说明</span></a></h3><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">说明</th><th style="text-align:center;">response</th><th style="text-align:center;">是否有formData</th></tr></thead><tbody><tr><td style="text-align:center;">GetListBefore</td><td style="text-align:center;">请求列表前执行</td><td style="text-align:center;">queryParams</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">GetListAfter</td><td style="text-align:center;">请求列表参数格式化完成，可在此回调内修改请求参数</td><td style="text-align:center;">query</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">Cancel</td><td style="text-align:center;">取消弹窗</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">OpenUpdate</td><td style="text-align:center;">打开修改窗口</td><td style="text-align:center;">response</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">Status</td><td style="text-align:center;">状态修改</td><td style="text-align:center;">response</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">Update</td><td style="text-align:center;">修改提交完成</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">Add</td><td style="text-align:center;">新增提交完成</td><td style="text-align:center;">response</td><td style="text-align:center;">有</td></tr><tr><td style="text-align:center;">Delete</td><td style="text-align:center;">删除完成</td><td style="text-align:center;">response</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">ImportBefore</td><td style="text-align:center;">导入前</td><td style="text-align:center;">formData对象</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">Import</td><td style="text-align:center;">导入完成</td><td style="text-align:center;">response</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">Export</td><td style="text-align:center;">导出完成</td><td style="text-align:center;">response</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">List</td><td style="text-align:center;">请求列表完成</td><td style="text-align:center;">response</td><td style="text-align:center;">无</td></tr></tbody></table>',12);function F(J,M){const e=s("Badge");return d(),a("div",null,[c,t("table",null,[o,t("tbody",null,[g,y,x,h,p,_,u,m,f,b,k,v,t("tr",null,[T,H,t("td",A,[n(e,{text:"正在进行中",type:"warning"})]),j]),t("tr",null,[D,z,t("td",B,[n(e,{text:"正在进行中",type:"warning"})]),N]),t("tr",null,[P,R,t("td",C,[n(e,{text:"正考虑是否废弃",type:"danger"})]),L]),t("tr",null,[q,w,t("td",G,[n(e,{text:"正考虑是否废弃",type:"danger"})]),O]),t("tr",null,[S,V,t("td",Z,[n(e,{text:"正考虑是否废弃",type:"danger"})]),E]),I])]),U])}const W=r(i,[["render",F],["__file","config.html.vue"]]),X=JSON.parse('{"path":"/ydfel/Hooks/useTable/config.html","title":"useTable 配置","lang":"zh-CN","frontmatter":{"title":"useTable 配置","shortTitle":"配置文档","isOriginal":true,"order":1,"description":"警告 本 Hooks 是系统最重要的内容，主要封装高度复用的 表格增删改查 代码。 Hooks 的优点是可以有效的组织和封装代码，同时又不强限制使用形式。 说明 由于多选，过滤等操作需依赖表格组件提供的方法，所以目前仅支持 vxe-table。 仅封装了大部分已知的表格通用型方法。 因为众所周知过度封装后使用时的学习成本、维护成本都是很高的。 参数 行...","head":[["meta",{"property":"og:url","content":"http://localhost:8080/ydfel/Hooks/useTable/config.html"}],["meta",{"property":"og:site_name","content":"Azil"}],["meta",{"property":"og:title","content":"useTable 配置"}],["meta",{"property":"og:description","content":"警告 本 Hooks 是系统最重要的内容，主要封装高度复用的 表格增删改查 代码。 Hooks 的优点是可以有效的组织和封装代码，同时又不强限制使用形式。 说明 由于多选，过滤等操作需依赖表格组件提供的方法，所以目前仅支持 vxe-table。 仅封装了大部分已知的表格通用型方法。 因为众所周知过度封装后使用时的学习成本、维护成本都是很高的。 参数 行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T09:57:32.000Z"}],["meta",{"property":"article:author","content":"Azil"}],["meta",{"property":"article:modified_time","content":"2024-05-09T09:57:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"useTable 配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-09T09:57:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Azil\\",\\"url\\":\\"https://gitee.com/codedi\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"行数据配置","slug":"行数据配置","link":"#行数据配置","children":[]},{"level":2,"title":"需要解构为响应式的数据","slug":"需要解构为响应式的数据","link":"#需要解构为响应式的数据","children":[]},{"level":2,"title":"回调方法","slug":"回调方法","link":"#回调方法","children":[{"level":3,"title":"callback","slug":"callback","link":"#callback","children":[]},{"level":3,"title":"回调说明","slug":"回调说明","link":"#回调说明","children":[]}]}],"git":{"createdTime":1714229871000,"updatedTime":1715248652000,"contributors":[{"name":"Azil","email":"13701378834@163.com","commits":3}]},"readingTime":{"minutes":2.67,"words":800},"filePathRelative":"ydfel/Hooks/useTable/config.md","localizedDate":"2024年4月27日","autoDesc":true,"excerpt":"<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">警告</p>\\n<p>本 Hooks 是系统最重要的内容，主要封装高度复用的 <code>表格增删改查</code> 代码。</p>\\n<p>Hooks 的优点是可以有效的组织和封装代码，同时又不强限制使用形式。</p>\\n</div>\\n<h2>说明</h2>\\n<p>由于多选，过滤等操作需依赖表格组件提供的方法，所以目前仅支持 <mark>vxe-table</mark>。</p>\\n<p>仅封装了大部分已知的表格通用型方法。</p>\\n<p>因为众所周知过度封装后使用时的学习成本、维护成本都是很高的。</p>"}');export{W as comp,X as data};
