(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{279:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filters"}},type:{kind:"NamedType",name:{kind:"Name",value:"ProductAttributeFilterInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currentPage"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filters"}}},{kind:"Argument",name:{kind:"Name",value:"pageSize"},value:{kind:"Variable",name:{kind:"Name",value:"pageSize"}}},{kind:"Argument",name:{kind:"Name",value:"currentPage"},value:{kind:"Variable",name:{kind:"Name",value:"currentPage"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price_range"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"minimum_price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"final_price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"media_gallery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"total_count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:513}};t.loc.source={body:"query ($filters: ProductAttributeFilterInput, $pageSize: Int, $currentPage: Int) {\r\n  products(filter: $filters, pageSize: $pageSize, currentPage: $currentPage)\r\n  {\r\n    items {\r\n        name\r\n        id\r\n        stock_status\r\n        price_range {\r\n        minimum_price {\r\n          final_price {\r\n            value\r\n            currency\r\n            }\r\n          }\r\n        }\r\n        categories {\r\n            name\r\n        }\r\n        media_gallery {\r\n            url\r\n      }\r\n    }\r\n    total_count\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var l={};t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),l[e.name.value]=n}})),e.exports=t},280:function(e,n,t){"use strict";t.r(n);var r={props:["pages"],methods:{changePage:function(e){this.$emit("changepage",e)}}},l=t(36),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",[t("ul",{staticClass:"flex list-style-none"},[e._m(0),e._v(" "),e._l(e.pages,(function(n){return t("li",{key:n,on:{click:function(t){return e.changePage(n)}}},[t("a",{staticClass:"\n          relative\n          block\n          py-1.5\n          px-3\n          border-0\n          bg-transparent\n          outline-none\n          transition-all\n          duration-300\n          rounded\n          text-gray-800\n          hover:text-gray-800 hover:bg-gray-200\n          focus:shadow-none\n        ",attrs:{href:"#"}},[e._v(e._s(n))])])})),e._v(" "),e._m(1)],2)])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"page-item"},[t("a",{staticClass:"\n          relative\n          block\n          py-1.5\n          px-3\n          rounded\n          border-0\n          bg-transparent\n          outline-none\n          transition-all\n          duration-300\n          text-gray-800\n        "},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"page-item"},[t("a",{staticClass:"\n          relative\n          block\n          py-1.5\n          px-3\n          border-0\n          bg-transparent\n          outline-none\n          transition-all\n          duration-300\n          rounded\n          text-gray-800\n        "},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])}],!1,null,null,null);n.default=component.exports},281:function(e,n,t){"use strict";t.r(n);var r=t(279),l={name:"products",data:function(){return{categoryUID:"MTk=",pageSize:6,currentPage:1,pages:[]}},mounted:function(){this.getPagesArray()},methods:{getPagesArray:function(){for(var e=Math.ceil(this.products.total_count/this.pageSize),n=1,i=0;i<e;i++)this.pages.push(n),n++},changePage:function(e){this.$router.push({params:{page:e}}),this.currentPage=e}},apollo:{products:{prefetch:!0,query:t.n(r).a,variables:function(){return{filters:{category_uid:{in:this.categoryUID}},pageSize:this.pageSize,currentPage:this.currentPage}}}}},d=t(36),component=Object(d.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[e.products?t("div",{staticClass:"grid grid-cols-2 md:grid-cols-3 max-w-6xl text-sm"},e._l(e.products.items,(function(n){return t("div",{key:n.id},[t("div",{staticClass:"p-10 shadow-inner"},[t("img",{attrs:{src:n.media_gallery[0].url,alt:n.name}}),e._v(" "),t("div",{staticClass:"flex flex-col items-center mt-2 text-center"},[t("p",[e._v(e._s(n.name))]),e._v(" "),t("div",{staticClass:"flex flex-row font-bold"},[t("p",{staticClass:"mr-1"},[e._v("\n              "+e._s(n.price_range.minimum_price.final_price.value)+"\n            ")]),e._v(" "),t("p",[e._v("\n              "+e._s(n.price_range.minimum_price.final_price.currency)+"\n            ")])]),e._v(" "),t("button",{staticClass:"\n              border border-gray-500\n              hover:bg-gray-200\n              rounded-3xl\n              px-1\n              md:px-3\n              py-1\n              mt-2\n            "},[e._v("\n            ADD TO CART\n          ")])])])])})),0):e._e(),e._v(" "),t("div",{staticClass:"flex justify-center mb-3"},[t("pagination",{attrs:{pages:e.pages},on:{changepage:e.changePage}})],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Pagination:t(280).default})},283:function(e,n,t){"use strict";t.r(n);var r={},l=t(36),component=Object(l.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",[n("products")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Products:t(281).default})}}]);