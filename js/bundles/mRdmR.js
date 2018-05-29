var pageComponent=webpackJsonppageComponent([66],{757:function(n,t,o){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function s(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),u=e(r),i=o(0),c=e(i);o(18),o(19),o(20),o(5),o(10),o(13),o(21),o(6),o(22),o(4),o(23),o(24),o(8),o(2),o(9),o(3),o(14),o(17),o(25),o(26),o(11),o(16),o(12),o(27),o(7),o(15),o(28),o(29),o(30),o(31),o(32),o(33),o(34),o(35);var d=o(758),b=e(d),p=function(n){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,n),t}(u.default);c.default.register(p,b.default),t.default=p},758:function(n,t,o){"use strict";function e(n){return n&&n.__esModule?n:{default:n}}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function s(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.mRdmR=void 0;var r,u=o(1),i=e(u),c=o(0),d=e(c);goog.loadModule(function(n){function t(n,t,e){var r=function(){l("h3"),u("Description"),a("h3"),l("p");var t=n.page.description;"function"==typeof t?t():null!=t&&u(t),a("p"),l("div",null,null,"class","alert alert-info"),u("Check the "),l("a",null,null,"href","https://lexicondesign.io"),u("Lexicon"),a("a"),u(" "),l("a",null,null,"href","https://lexicondesign.io/docs/patterns/"+n.page.pattern+".html");var o=n.page.title;"function"==typeof o?o():null!=o&&u(o),u(" Pattern"),a("a"),u(" for a more in-depth look at the motivations and proper usage of this component."),a("div"),l("article",null,null,"id","clay-button"),l("h3"),u("States"),a("h3"),l("h4"),u("Default state"),a("h4"),l("button",null,null,"class","btn btn-primary","type","button"),u("Primary"),a("button"),u(" "),l("button",null,null,"class","btn btn-monospaced btn-primary","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#blogs"),a("svg"),a("button"),u(" "),l("button",null,null,"class","btn btn-secondary","type","button"),u("Secondary"),a("button"),u(" "),l("button",null,null,"class","btn btn-monospaced btn-secondary","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#blogs"),a("svg"),a("button"),u(" "),l("button",null,null,"class","btn btn-link","type","button"),u("Link"),a("button"),i({code:"{call ClayButton.render}\n    {param label: 'Primary' /}\n    {param type: 'button' /}\n{/call}\n\n{call ClayButton.render}\n    {param icon: 'blogs' /}\n    {param monospaced: true /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}\n\n{call ClayButton.render}\n    {param label: 'Secondary' /}\n    {param style: 'secondary' /}\n    {param type: 'button' /}\n{/call}\n\n{call ClayButton.render}\n    {param icon: 'blogs' /}\n    {param monospaced: true /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param style: 'secondary' /}\n{/call}\n\n{call ClayButton.render}\n    {param label: 'Link' /}\n    {param style: 'link' /}\n    {param type: 'button' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button label="Primary" type="button"></clay-button>\n\n<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>\n\n<clay-button label="Secondary" style="secondary" type="button"></clay-button>\n\n<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg" style="secondary"></clay-button>\n\n<clay-button label="Link" style="link" type="button"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-primary" type="button">Primary</button>\n<button class="btn btn-monospaced btn-primary" type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n        <use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>\n    </svg>\n</button>\n<button class="btn btn-secondary" type="button">Secondary</button>\n<button class="btn btn-monospaced btn-secondary" type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n        <use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>\n    </svg>\n</button>\n<button class="btn btn-link" type="button">Link</button>',mode:"text/html"},null,e),l("h4"),u("Disabled State"),a("h4"),l("button",null,null,"class","btn btn-primary","disabled","","type","button"),u("Primary"),a("button"),u(" "),l("button",null,null,"class","btn btn-monospaced btn-primary","disabled","","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#blogs"),a("svg"),a("button"),u(" "),l("button",null,null,"class","btn btn-secondary","disabled","","type","button"),u("Secondary"),a("button"),u(" "),l("button",null,null,"class","btn btn-monospaced btn-secondary","disabled","","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#blogs"),a("svg"),a("button"),u(" "),l("button",null,null,"class","btn btn-link","disabled","","type","button"),u("Link"),a("button"),i({code:"{call ClayButton.render}\n    {param disabled: true /}\n    {param label: 'Primary' /}\n    {param type: 'button' /}\n{/call}\n\n{call ClayButton.render}\n    {param disabled: true /}\n    {param icon: 'blogs' /}\n    {param monospaced: true /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}\n\n{call ClayButton.render}\n    {param disabled: true /}\n    {param label: 'Secondary' /}\n    {param style: 'secondary' /}\n    {param type: 'button' /}\n{/call}\n\n{call ClayButton.render}\n    {param disabled: true /}\n    {param icon: 'blogs' /}\n    {param monospaced: true /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param style: 'secondary' /}\n{/call}\n\n{call ClayButton.render}\n    {param disabled: true /}\n    {param label: 'Link' /}\n    {param style: 'link' /}\n    {param type: 'button' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button disabled="true" label="Primary" type="button"></clay-button>\n\n<clay-button disabled="true" icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>\n\n<clay-button disabled="true" label="Secondary" style="secondary" type="button"></clay-button>\n\n<clay-button disabled="true" icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg" style="secondary"></clay-button>\n\n<clay-button disabled="true" label="Link" style="link" type="button"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-primary"  disabledtype="button">Primary</button>\n<button class="btn btn-monospaced btn-primary" disabled type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n        <use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>\n    </svg>\n</button>\n<button class="btn btn-secondary" disabled type="button">Secondary</button>\n<button class="btn btn-monospaced btn-secondary" disabled type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n        <use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>\n    </svg>\n</button>\n<button class="btn btn-link" disabled type="button">Link</button>',mode:"text/html"},null,e),a("article"),l("article",null,null,"id","clay-button-sizes"),l("h3"),u("Sizes"),a("h3"),l("button",null,null,"class","btn btn-primary btn-sm","type","button"),u("Small"),a("button"),u(" "),l("button",null,null,"class","btn btn-primary","type","button"),u("Default"),a("button"),i({code:"{call ClayButton.render}\n    {param label: 'Small' /}\n    {param size: 'sm' /}\n{/call}\n\n{call ClayButton.render}\n    {param label: 'Default' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button label="Small" size="sm"></clay-button>\n\n<clay-button label="Default"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-secondary btn-sm" type="button">Small</button>\n\n<button class="btn btn-secondary" type="button">Default</button>',mode:"text/html"},null,e),a("article"),l("article",null,null,"id","clay-button-sizes"),l("h3"),u("Variations"),a("h3"),l("h4"),u("Icon button"),a("h4"),l("blockquote"),l("p"),u("Buttons can icons instead of text and for that icons need to be monospaced inside the button. Lexicon do not use buttons with text and icon, or text and loading indicator. Icon buttons are used intensively in management bars. This button variation can be primary, secondary or borderless type."),a("p"),a("blockquote"),l("button",null,null,"class","btn btn-monospaced btn-primary","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#blogs"),a("svg"),a("button"),u(" "),l("button",null,null,"class","btn btn-monospaced btn-secondary","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#blogs"),a("svg"),a("button"),i({code:"{call ClayButton.render}\n    {param icon: 'blogs' /}\n    {param monospaced: true /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}\n\n{call ClayButton.render}\n    {param icon: 'blogs' /}\n    {param monospaced: true /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param style: 'secondary' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>\n\n<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg" style="secondary"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-monospaced btn-primary" type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n        <use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>\n    </svg>\n</button>\n<button class="btn btn-monospaced btn-secondary" type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n        <use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>\n    </svg>\n</button>',mode:"text/html"},null,e),l("h4"),u("Icon and text button"),a("h4"),l("blockquote"),l("p"),u("This button type is used only in sites and not in administration. The icon emphasizes and helps to understand the action. The label must be the same icon purpose."),a("p"),a("blockquote"),l("button",null,null,"class","btn btn-secondary","type","button"),l("span",null,null,"class","inline-item inline-item-before"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#share"),a("svg"),a("span"),u("Share"),a("button"),i({code:"{call ClayButton.render}\n    {param label: 'Share' /}\n    {param icon: 'share' /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param style: 'secondary' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button\n    label="share"\n    icon="share"\n    spritemap="/vendor/lexicon/icons.svg"\n    style="secondary">\n</clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-secondary" type="button">\n    <span class="inline-item inline-item-before">\n        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">\n            <use xlink:href="/vendor/lexicon/icons.svg#share"></use>\n        </svg>\n    </span>\n    Share\n</button>',mode:"text/html"},null,e),l("h4"),u("Block level button"),a("h4"),l("blockquote"),l("p"),u("All buttons can also be configured at block level. Use this configuration in those cases that you need the user to realize there is an important action to be done. It could be used as a load more action below a list, as an example. Please do not use it in forms. Be always careful with the type button to use, primary is not always the best choice neither the only configuration."),a("p"),a("blockquote"),l("button",null,null,"class","btn btn-block btn-secondary btn-sm","type","button"),u("Small Block Level Button"),a("button"),u(" "),l("button",null,null,"class","btn btn-block btn-secondary","type","button"),u("Normal Block Level Button"),a("button"),i({code:"{call ClayButton.render}\n    {param block: true /}\n    {param label: 'Small Block Level Button' /}\n    {param size: 'sm' /}\n{/call}\n\n{call ClayButton.render}\n    {param block: true /}\n    {param label: 'Normal Block Level Button' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button block="true" label="Small Block Level Button" size="sm"></clay-button>\n\n<clay-button block="true" label="Normal Block Level Button"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>\n\n<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>',mode:"text/html"},null,e),l("h4"),u("Dropdown button"),a("h4"),l("blockquote"),l("p"),u("Dropdown buttons are always used together with a dropdown menu. This button variation can be secondary or borderless type."),a("p"),a("blockquote"),l("div",null,null,"class","btn-group"),l("button",null,null,"aria-expanded","false","aria-haspopup","true","class","btn btn-primary dropdown-toggle","data-toggle","dropdown","type","button"),u("Primary"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),a("svg"),a("button"),l("div",null,null,"class","dropdown-menu"),l("a",null,null,"class","dropdown-item","href","#1"),u("Action"),a("a"),s("div",null,null,"class","dropdown-divider"),l("a",null,null,"class","dropdown-item","href","#1"),u("Scope"),a("a"),a("div"),a("div"),u(" "),l("div",null,null,"class","btn-group"),l("button",null,null,"aria-expanded","false","aria-haspopup","true","class","btn btn-secondary dropdown-toggle","data-toggle","dropdown","type","button"),u("Primary"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),a("svg"),a("button"),l("div",null,null,"class","dropdown-menu"),l("a",null,null,"class","dropdown-item","href","#1"),u("Action"),a("a"),s("div",null,null,"class","dropdown-divider"),l("a",null,null,"class","dropdown-item","href","#1"),u("Scope"),a("a"),a("div"),a("div"),u(" "),i({code:"{call ClayDropdown.render}\n    {param items: [\n        [\n            'label': 'Action',\n            'url': '#1'\n        ],\n        [\n            'separator': true,\n            'type': 'group'\n        ],\n        [\n            'label': 'Scope',\n            'url': '#1'\n        ]\n    ] /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n    {param triggerLabel: 'Primary' /}\n    {param triggerStyle: 'primary' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-dropdown\n    items=\'[{"label": "Action", "url": "#1"},{"separator": true, "type": : "group"},{"label": "Scope", "url": "#1"}]\'\n    spritemap="/vendor/lexicon/icons.svg"\n    triggerLabel="Primary"\n    triggerStyle="primary">\n</clay-dropdown>',mode:"text/html"},null,e),i({code:'<div class="btn-group">\n    <button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">\n        Primary\n        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n            <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n        </svg>\n    </button>\n    <div class="dropdown-menu">\n        <a class="dropdown-item" href="#1">Action</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#1">Scope</a>\n    </div>\n</div>\n<div class="btn-group">\n    <button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">\n        Primary\n        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n            <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n        </svg>\n    </button>\n    <div class="dropdown-menu">\n        <a class="dropdown-item" href="#1">Action</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#1">Scope</a>\n    </div>\n</div>',mode:"text/html"},null,e),l("h4"),u("Split button"),a("h4"),l("blockquote"),l("p"),u("Split buttons are used in those cases where you need to offer the user a quick main action but also secondary actions."),a("p");a("blockquote"),l("div",null,null,"class","btn-group dropdown","role","group"),l("button",null,null,"class","btn btn-primary","type","button"),u("Primary"),a("button"),l("button",null,null,"aria-expanded","false","aria-haspopup","true","class","btn btn-primary btn-monospaced dropdown-toggle","data-toggle","dropdown","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),a("svg"),a("button"),l("div",null,null,"class","dropdown-menu dropdown-menu-right"),l("a",null,null,"class","dropdown-item","href","#1"),u("Action"),a("a"),s("div",null,null,"class","dropdown-divider"),l("a",null,null,"class","dropdown-item","href","#1"),u("Scope"),a("a"),a("div"),a("div"),u(" "),l("div",null,null,"class","btn-group dropdown","role","group"),l("button",null,null,"class","btn btn-secondary","type","button"),u("Secondary"),a("button"),l("button",null,null,"aria-expanded","false","aria-haspopup","true","class","btn btn-secondary btn-monospaced dropdown-toggle","data-toggle","dropdown","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-caret-bottom"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#caret-bottom"),a("svg"),a("button"),l("div",null,null,"class","dropdown-menu dropdown-menu-right"),l("a",null,null,"class","dropdown-item","href","#1"),u("Action"),a("a"),s("div",null,null,"class","dropdown-divider"),l("a",null,null,"class","dropdown-item","href","#1"),u("Scope"),a("a"),a("div"),a("div"),i({code:'<div class="btn-group dropdown" role="group">\n    <button class="btn btn-primary" type="button">Primary</button>\n    <button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">\n        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n            <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n        </svg>\n    </button>\n    <div class="dropdown-menu dropdown-menu-right">\n        <a class="dropdown-item" href="#1">Action</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#1">Scope</a>\n    </div>\n</div>{sp}\n<div class="btn-group dropdown" role="group">\n    <button class="btn btn-secondary" type="button">Secondary</button>\n    <button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">\n        <svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">\n            <use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />\n        </svg>\n    </button>\n    <div class="dropdown-menu dropdown-menu-right">\n        <a class="dropdown-item" href="#1">Action</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#1">Scope</a>\n    </div>\n</div>',mode:"text/html"},null,e),l("h4"),u("Button group"),a("h4"),l("blockquote"),l("p"),u('Button groups are used to switch between complementary views for example, but they must never be used for complementary actions and "Change and Cancel" or "Save and Cancel". In those cases the use of single buttons is the correct solution.'),a("p"),a("blockquote"),l("div",null,null,"class","btn-group","role","group"),l("button",null,null,"class","btn btn-secondary","type","button"),u("Day"),a("button"),l("button",null,null,"class","active btn btn-secondary","type","button"),u("Month"),a("button"),l("button",null,null,"class","btn btn-secondary","type","button"),u("Year"),a("button"),l("button",null,null,"class","btn btn-secondary","disabled","","type","button"),u("Agenda"),a("button"),a("div"),i({code:'<div class="btn-group" role="group">\n    <button class="btn btn-secondary" type="button">Day</button>\n    <button class="active btn btn-secondary" type="button">Month</button>\n    <button class="btn btn-secondary" type="button">Year</button>\n    <button class="btn btn-secondary" disabled type="button">Agenda</button>\n</div>',mode:"text/html"},null,e),l("h4"),u("Plus button"),a("h4"),l("blockquote"),l("p"),u("Normally placed in toolbars, allows to have adding actions over a dataset. The kind of elements to add with this button are of the same nature and folders. Sometimes it only has a unique action, some others it has more. Visit Dropdown menu > Sorting actions to know more."),a("p"),a("blockquote"),l("button",null,null,"class","btn btn-monospaced btn-sm btn-primary","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-blogs"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#plus"),a("svg"),a("button"),i({code:"{call ClayButton.render}\n    {param icon: 'plus' /}\n    {param monospaced: true /}\n    {param size: 'sm' /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button icon="plus" size="sm" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-monospaced btn-sm btn-primary" type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">\n        <use xlink:href="/vendor/lexicon/icons.svg#plus"></use>\n    </svg>\n</button>',mode:"text/html"},null,e),l("h4"),u("Action button"),a("h4"),l("blockquote"),l("p"),u("It is used when a set of contextual actions are needed over an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in an specific way, please visit Dropdown menu > Sorting actions to know more."),a("p"),a("blockquote"),l("button",null,null,"class","btn btn-monospaced btn-sm btn-unstyled","type","button"),l("svg",null,null,"aria-hidden","true","class","lexicon-icon lexicon-icon-ellipsis-v"),s("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#ellipsis-v"),a("svg"),a("button"),i({code:"{call ClayButton.render}\n    {param icon: 'ellipsis-v' /}\n    {param monospaced: true /}\n    {param size: 'sm' /}\n    {param spritemap: '/vendor/lexicon/icons.svg' /}\n{/call}",mode:"soy"},null,e),i({code:'<clay-button icon="ellipsis-v" size="sm" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>',mode:"text/html"},null,e),i({code:'<button class="btn btn-monospaced btn-sm btn-primary" type="button">\n    <svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">\n        <use xlink:href="/vendor/lexicon/ellipsis-v.svg#plus"></use>\n    </svg>\n</button>',mode:"text/html"},null,e),a("article"),l("input",null,null,"type","hidden","value",n.page.title),a("input"),l("input",null,null,"type","hidden","value",n.site.title),a("input")};c(o.$$assignDefaults({content:r},n),null,e)}goog.module("mRdmR.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var e=goog.require("incrementaldom"),l=e.elementOpen,a=e.elementClose,s=e.elementVoid,u=(e.elementOpenStart,e.elementOpenEnd,e.text),i=(e.attr,d.default.getTemplate("ElectricCode.incrementaldom","render")),c=d.default.getTemplate("guide.incrementaldom","render");return n.render=t,goog.DEBUG&&(t.soyTemplateName="mRdmR.render"),n.render.params=["page","site"],n.render.types={page:"?",site:"?"},n.templates=r=n,n});var b=function(n){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,n),t}(i.default);d.default.register(b,r),t.mRdmR=b,t.templates=r,t.default=r}},[757]);