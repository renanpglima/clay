var pageComponent=webpackJsonppageComponent([21],{831:function(n,a,l){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function i(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var r=l(1),s=e(r),c=l(0),p=e(c);l(18),l(19),l(20),l(5),l(10),l(13),l(21),l(6),l(22),l(4),l(23),l(24),l(8),l(2),l(9),l(3),l(14),l(17),l(25),l(26),l(11),l(16),l(12),l(27),l(7),l(15),l(28),l(29),l(30),l(31),l(32),l(33),l(34),l(35);var u=l(832),d=e(u),v=function(n){function a(){return t(this,a),o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return i(a,n),a}(s.default);p.default.register(v,d.default),a.default=v},832:function(n,a,l){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function i(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),a.templates=a.yuzdo=void 0;var r,s=l(1),c=e(s),p=l(0),u=e(p);goog.loadModule(function(n){function a(n,a,e){var r=function(){t("h3"),s("Description"),o("h3"),t("p");var a=n.page.description;"function"==typeof a?a():null!=a&&s(a),o("p"),t("div",null,null,"class","alert alert-info"),s("Check the "),t("a",null,null,"href","https://lexicondesign.io"),s("Lexicon"),o("a"),s(" "),t("a",null,null,"href","https://lexicondesign.io/docs/patterns/"+n.page.pattern+".html");var l=n.page.title;"function"==typeof l?l():null!=l&&s(l),s(" Pattern"),o("a"),s(" for a more in-depth look at the motivations and proper usage of this component."),o("div"),t("article",null,null,"id","clay-navbar-navigation-bar"),t("h3"),s("DEFAULT"),o("h3"),t("blockquote"),t("p"),s("Positive navigation bar is defined for Sites."),o("p"),o("blockquote"),t("p"),t("nav",null,null,"class","navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light"),t("div",null,null,"class","container"),t("a",null,null,"aria-controls","navigationBarCollapse00","aria-expanded","false","aria-label","Toggle Navigation","class","collapsed navbar-toggler navbar-toggler-link","data-toggle","collapse","href","#navigationBarCollapse00","role","button"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 2"),o("span"),t("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),i("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),o("svg"),o("a"),t("div",null,null,"class","collapse navbar-collapse","id","navigationBarCollapse00"),t("div",null,null,"class","container"),t("ul",null,null,"class","navbar-nav"),t("li",null,null,"class","nav-item"),t("a",null,null,"class","nav-link","href","#1"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 1"),o("span"),o("a"),o("li"),t("li",null,null,"aria-label","Current Page","class","nav-item"),t("a",null,null,"class","active nav-link","href","#1"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 2"),o("span"),o("a"),o("li"),t("li",null,null,"class","nav-item"),t("a",null,null,"class","nav-link","href","#1"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 3"),o("span"),o("a"),o("li"),t("li",null,null,"class","dropdown nav-item show-dropdown-on-collapse"),t("a",null,null,"aria-expanded","false","aria-haspopup","true","class","dropdown-toggle nav-link","data-toggle","dropdown","href","#1","role","button"),t("span",null,null,"class","navbar-text-truncate"),s("More"),o("span"),t("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),i("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),o("svg"),o("a"),t("div",null,null,"aria-labelledby","","class","dropdown-menu"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 4"),o("a"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 5"),o("a"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 6"),o("a"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 7"),o("a"),o("div"),o("li"),o("ul"),o("div"),o("div"),o("div"),o("nav"),o("p"),c({code:"{call ClayNavbar.render}\n    {param items: [\n        [\n            'title': 'App Section 1',\n            'url': '#1'\n        ],\n        [\n            'active'; true,\n            'title': 'App Section 2',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 3',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 4',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 5',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 6',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 7',\n            'url': '#1'\n        ]\n    ] /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}",mode:"soy"},null,e),c({code:'<clay-navbar\n    items=\'[\n        {"title": "App Section 1", "url": "#1"},\n        {"title": "App Section 2", "url": "#1"},\n        {"title": "App Section 3", "url": "#1"},\n        {"title": "App Section 4", "url": "#1"},\n        {"title": "App Section 5", "url": "#1"},\n        {"title": "App Section 6", "url": "#1"},\n        {"title": "App Section 7", "url": "#1"}\n    ]\'\n    spritemap="/vendor/lexicon/icons.svg">\n</clay-navbar>',mode:"text/html"},null,e),c({code:'<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">\n    <div class="container">\n        <a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">\n            <span class="navbar-text-truncate">App Section 2</span>\n            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n                <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n            </svg>\n        </a>\n        <div class="collapse navbar-collapse" id="navigationBarCollapse00">\n            <div class="container">\n                <ul class="navbar-nav">\n                    <li class="nav-item">\n                        <a class="nav-link" href="#1">\n                            <span class="navbar-text-truncate">App Section 1</span>\n                        </a>\n                    </li>\n                    <li aria-label="Current Page" class="nav-item">\n                        <a class="active nav-link" href="#1">\n                            <span class="navbar-text-truncate">App Section 2</span>\n                        </a>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="#1">\n                            <span class="navbar-text-truncate">App Section 3</span>\n                        </a>\n                    </li>\n                    <li class="dropdown nav-item show-dropdown-on-collapse">\n                        <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">\n                            <span class="navbar-text-truncate">More</span>\n                            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n                                <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n                            </svg>\n                        </a>\n                        <div aria-labelledby="" class="dropdown-menu">\n                            <a class="dropdown-item" href="#1">App Section 4</a>\n                            <a class="dropdown-item" href="#1">App Section 5</a>\n                            <a class="dropdown-item" href="#1">App Section 6</a>\n                            <a class="dropdown-item" href="#1">App Section 7</a>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>',mode:"text/html"},null,e),o("article"),t("article",null,null,"id","clay-navbar-navigation-bar"),t("h3"),s("INVERTED"),o("h3"),t("blockquote"),t("p"),s("Negative navigation bar is defined for Admin. It is always placed right below the header."),o("p"),o("blockquote"),t("p"),t("nav",null,null,"class","navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary"),t("div",null,null,"class","container"),t("a",null,null,"aria-controls","navigationBarCollapse01","aria-expanded","false","aria-label","Toggle Navigation","class","collapsed navbar-toggler navbar-toggler-link","data-toggle","collapse","href","#navigationBarCollapse01","role","button"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 2"),o("span"),t("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),i("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),o("svg"),o("a"),t("div",null,null,"class","collapse navbar-collapse","id","navigationBarCollapse01"),t("div",null,null,"class","container"),t("ul",null,null,"class","navbar-nav"),t("li",null,null,"class","nav-item"),t("a",null,null,"class","nav-link","href","#1"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 1"),o("span"),o("a"),o("li"),t("li",null,null,"aria-label","Current Page","class","nav-item"),t("a",null,null,"class","active nav-link","href","#1"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 2"),o("span"),o("a"),o("li"),t("li",null,null,"class","nav-item"),t("a",null,null,"class","nav-link","href","#1"),t("span",null,null,"class","navbar-text-truncate"),s("App Section 3"),o("span"),o("a"),o("li"),t("li",null,null,"class","dropdown nav-item show-dropdown-on-collapse"),t("a",null,null,"aria-expanded","false","aria-haspopup","true","class","dropdown-toggle nav-link","data-toggle","dropdown","href","#1","role","button"),t("span",null,null,"class","navbar-text-truncate"),s("More"),o("span"),t("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),i("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),o("svg"),o("a"),t("div",null,null,"aria-labelledby","","class","dropdown-menu"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 4"),o("a"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 5"),o("a"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 6"),o("a"),t("a",null,null,"class","dropdown-item","href","#1"),s("App Section 7"),o("a"),o("div"),o("li"),o("ul"),o("div"),o("div"),o("div"),o("nav"),o("p"),c({code:"{call ClayNavbar.render}\n    {param inverted: true /}\n    {param items: [\n        [\n            'title': 'App Section 1',\n            'url': '#1'\n        ],\n        [\n            'active'; true,\n            'title': 'App Section 2',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 3',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 4',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 5',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 6',\n            'url': '#1'\n        ],\n        [\n            'title': 'App Section 7',\n            'url': '#1'\n        ]\n    ] /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}",mode:"soy"},null,e),c({code:'<clay-navbar\n    inverted="true"\n    items=\'[\n        {"title": "App Section 1", "url": "#1"},\n        {"title": "App Section 2", "url": "#1"},\n        {"title": "App Section 3", "url": "#1"},\n        {"title": "App Section 4", "url": "#1"},\n        {"title": "App Section 5", "url": "#1"},\n        {"title": "App Section 6", "url": "#1"},\n        {"title": "App Section 7", "url": "#1"}\n    ]\'\n    spritemap="/vendor/lexicon/icons.svg">\n</clay-navbar>',mode:"text/html"},null,e),c({code:'<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">\n    <div class="container">\n        <a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">\n            <span class="navbar-text-truncate">App Section 2</span>\n            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n                <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n            </svg>\n        </a>\n        <div class="collapse navbar-collapse" id="navigationBarCollapse00">\n            <div class="container">\n                <ul class="navbar-nav">\n                    <li class="nav-item">\n                        <a class="nav-link" href="#1">\n                            <span class="navbar-text-truncate">App Section 1</span>\n                        </a>\n                    </li>\n                    <li aria-label="Current Page" class="nav-item">\n                        <a class="active nav-link" href="#1">\n                            <span class="navbar-text-truncate">App Section 2</span>\n                        </a>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="#1">\n                            <span class="navbar-text-truncate">App Section 3</span>\n                        </a>\n                    </li>\n                    <li class="dropdown nav-item show-dropdown-on-collapse">\n                        <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">\n                            <span class="navbar-text-truncate">More</span>\n                            <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n                                <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n                            </svg>\n                        </a>\n                        <div aria-labelledby="" class="dropdown-menu">\n                            <a class="dropdown-item" href="#1">App Section 4</a>\n                            <a class="dropdown-item" href="#1">App Section 5</a>\n                            <a class="dropdown-item" href="#1">App Section 6</a>\n                            <a class="dropdown-item" href="#1">App Section 7</a>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>',mode:"text/html"},null,e),o("article"),t("input",null,null,"type","hidden","value",n.page.title),o("input"),t("input",null,null,"type","hidden","value",n.site.title),o("input")};p(l.$$assignDefaults({content:r},n),null,e)}goog.module("yuzdo.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var e=goog.require("incrementaldom"),t=e.elementOpen,o=e.elementClose,i=e.elementVoid,s=(e.elementOpenStart,e.elementOpenEnd,e.text),c=(e.attr,u.default.getTemplate("ElectricCode.incrementaldom","render")),p=u.default.getTemplate("guide.incrementaldom","render");return n.render=a,goog.DEBUG&&(a.soyTemplateName="yuzdo.render"),n.render.params=["page","site"],n.render.types={page:"?",site:"?"},n.templates=r=n,n});var d=function(n){function a(){return t(this,a),o(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return i(a,n),a}(c.default);u.default.register(d,r),a.yuzdo=d,a.templates=r,a.default=r}},[831]);