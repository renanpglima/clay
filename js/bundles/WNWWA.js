var pageComponent=webpackJsonppageComponent([49],{869:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=o(l),d=n(0),p=o(d);n(18),n(19),n(20),n(5),n(10),n(13),n(21),n(6),n(22),n(4),n(23),n(24),n(8),n(2),n(9),n(3),n(14),n(17),n(25),n(26),n(11),n(16),n(12),n(27),n(7),n(15),n(28),n(29),n(30),n(31),n(32),n(33),n(34),n(35);var c=n(870),s=o(c),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(f,s.default),t.default=f},870:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.WNWWA=void 0;var l,u=n(1),d=o(u),p=n(0),c=o(p);goog.loadModule(function(e){function t(e,t,o){var l=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),a("h6"),r("article",null,null,"id","1"),r("p"),u({data:[{id:"data1",data:[100,20,30]},{id:"data2",data:[20,70,100]}]},null,o),a("p"),d({code:"{call ClayLineChart.render}\n    {param data: [\n        [\n            'id': 'data1',\n            'data': [100, 20, 30]\n        ],\n        [\n            'id': 'data2',\n            'data': [20, 70, 100]\n        ]\n    ] /}\n{/call}",mode:"soy"},null,o),d({code:"<LineChart\n    data={[\n        {\n            id: 'data1',\n            data: [100, 20, 30]\n        },\n        {\n            id: 'data2',\n            data: [20, 70, 100]\n        }\n    ]}\n/>",mode:"jsx"},null,o),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};p(n.$$assignDefaults({content:l},e),null,o)}goog.module("WNWWA.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,c.default.getTemplate("ClayLineChart.incrementaldom","render")),d=c.default.getTemplate("ElectricCode.incrementaldom","render"),p=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="WNWWA.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(d.default);c.default.register(s,l),t.WNWWA=s,t.templates=l,t.default=l}},[869]);