(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{272:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("265da9ba",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";var r=n(272);n.n(r).a},274:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"#results .result:hover{background-color:#ebe2e7}",""])},275:function(t,e,n){"use strict";n.r(e);n(115),n(59);var r=n(16),o=n(156),c={data:function(){return{q:"",resultsReady:!1,archives:{noosphere:"Ноосфера",aire:"Open AIRE",europeana:"Europeana PRO",internet_archive:"Internet Archive",wikidata:"Wikidata"},results:{},count:{}}},methods:{search:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$nuxt.$loading.start(),this.resultsReady=!1,t.next=5,o.get("https://noosphere.ru/pubs.json?query="+this.q);case 5:return e=t.sent,t.next=8,o.get("https://api.openaire.eu/search/publications?format=json&size=15&title="+this.q);case 8:return n=t.sent,t.next=11,o.get("https://www.europeana.eu/api/v2/search.json?query="+this.q+"&wskey=TtdkGCiKH");case 11:return r=t.sent,t.next=14,o.get("https://openlibrary.org/search.json?q="+this.q);case 14:return c=t.sent,t.next=17,o.get("https://api.codetabs.com/v1/proxy?quest="+encodeURIComponent("https://www.wikidata.org/w/api.php?action=wbsearchentities&language=en&format=json&search="+encodeURIComponent(this.q)));case 17:l=t.sent,console.log(e),console.log(n),console.log(r),console.log(c),console.log(l),this.$nuxt.$loading.finish(),this.resultsReady=!0,this.count.noosphere=e.data.numFound,this.count.aire=n.data.response.header.total.$,this.count.europeana=r.data.totalResults,this.count.internet_archive=c.data.numFound,this.count.wikidata=l.data.search.length,this.results.noosphere=e.data.items,this.results.aire=n.data.response.results?n.data.response.results.result.map(function(t){return{url:"https://explore.openaire.eu/search/publication?articleId="+t.header["dri:objIdentifier"].$,title:t.metadata["oaf:entity"]["oaf:result"].title.$,description:(t.metadata["oaf:entity"]["oaf:result"].description||{}).$}}):[],this.results.europeana=r.data.items.map(function(t){return{url:t.guid,title:t.title.join(", "),description:(t.dcDescription||[]).join("<br />")}}),this.results.internet_archive=c.data.docs.map(function(t){return{url:"https://openlibrary.org"+t.key,title:t.title,description:(t.subject||[]).join(", ")}}),this.results.wikidata=l.data.search.map(function(t){return{url:t.url,title:t.label,description:t.description}}),t.next=40;break;case 37:t.prev=37,t.t0=t.catch(0),this.error=t.t0.response.data.message;case 40:case"end":return t.stop()}},t,this,[[0,37]])}));return function(){return t.apply(this,arguments)}}()}},l=(n(273),n(34)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h2",{staticClass:"subtitle"},[t._v("\n      Универсальный поисковик по архивам открытых данных\n    ")]),t._v(" "),n("b-row",[n("b-input-group",{staticClass:"mt-5"},[n("b-form-input",{attrs:{size:"lg",placeholder:"Введите свой поисковый запрос"},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}}),t._v(" "),n("b-input-group-append",[n("b-button",{attrs:{size:"lg",variant:"outline-success"},on:{click:t.search}},[t._v("\n            Найти\n          ")])],1)],1)],1),t._v(" "),t.resultsReady?n("b-row",{staticClass:"mt-5"},[n("b-card",{staticClass:"w-100",attrs:{id:"results","no-body":""}},[n("b-tabs",{attrs:{"content-class":"mt-3",card:""}},t._l(t.archives,function(e,r){return n("b-tab",{key:r},[n("template",{slot:"title"},[t._v("\n              "+t._s(e)+" "),n("b-badge",{attrs:{variant:"light"}},[t._v("\n                "+t._s(t.count[r])+" "),n("span",{staticClass:"sr-only"},[t._v("публикаций")])])],1),t._v(" "),t.count[r]>0?[n("p",[n("b-row",[n("b-col",[n("p",[t._v("Всего нашлось "),n("b",[t._v(t._s(t.count[r]))]),t._v(" публикаций:")])])],1),t._v(" "),t._l(t.results[r],function(e,r){return n("b-row",{key:e.url},[n("b-col",{attrs:{cols:"1"}},[n("h5",{staticClass:"pt-3"},[t._v("\n                      "+t._s(r+1)+".\n                    ")])]),t._v(" "),n("b-col",{staticClass:"result",attrs:{cols:"11"}},[n("b-media",[n("h5",{staticClass:"pt-3"},[n("b-link",{staticClass:"stretched-link",attrs:{href:e.url,target:"_blank"}},[t._v("\n                          "+t._s(e.title)+"\n                        ")])],1),t._v(" "),n("p",{staticStyle:{"max-height":"150px","overflow-x":"hidden"},domProps:{innerHTML:t._s(e.description)}})])],1)],1)})],2)]:[t._v("\n              По вашему запросу ничего не найдено...\n            ")]],2)}),1)],1)],1):t._e()],1)])},[],!1,null,null,null);e.default=component.exports}}]);