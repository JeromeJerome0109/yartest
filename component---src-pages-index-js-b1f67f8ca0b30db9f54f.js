(self.webpackChunkgatsby_starter_spectral=self.webpackChunkgatsby_starter_spectral||[]).push([[678],{9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,n=e.HTMLElement||e.Element,a={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||o,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,c=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):a.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?a.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var l=p(this),n=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(d.call(this,l,l.scrollLeft+r.left-n.left,l.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function o(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(e,t){return"Y"===t?e.clientHeight+c<e.scrollHeight:"X"===t?e.clientWidth+c<e.scrollWidth:void 0}function m(t,l){var n=e.getComputedStyle(t,null)["overflow"+l];return"auto"===n||"scroll"===n}function u(e){var t=i(e,"Y")&&m(e,"Y"),l=i(e,"X")&&m(e,"X");return t||l}function p(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function E(t){var l,n,a,c,o=(r()-t.startTime)/468;c=o=o>1?1:o,l=.5*(1-Math.cos(Math.PI*c)),n=t.startX+(t.x-t.startX)*l,a=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,n,a),n===t.x&&a===t.y||e.requestAnimationFrame(E.bind(e,t))}function d(l,n,c){var s,i,m,u,p=r();l===t.body?(s=e,i=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=a.scroll):(s=l,i=l.scrollLeft,m=l.scrollTop,u=o),E({scrollable:s,method:u,startTime:p,startX:i,startY:m,x:n,y:c})}}}}()},5397:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var n=l(7294),a=l(3656);var r=l(1721),c=l(9634),o=l.n(c),s=function(e){return e.children},i=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,r.Z)(t,e);var l=t.prototype;return l.componentDidMount=function(){o().polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,n=this.props,a=n.type,r=n.element,c=n.offset,o=n.timeout;if(a&&r)switch(a){case"class":l=!!(t=document.getElementsByClassName(r)[0]);break;case"id":l=!!(t=document.getElementById(r))}l?this.scrollTo(t,c,o):console.log("Element not found: "+r)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),l):window.scroll({top:n+t,left:0,behavior:"smooth"})},l.render=function(){return n.createElement(s,null,"object"==typeof this.props.children?n.cloneElement(this.props.children,{onClick:this.handleClick}):n.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.Component),m=l(1012),u=l(5793),p=l(2464),E=l(1349),d=l.n(E),f=function(){return n.createElement(a.Z,null,n.createElement("section",{id:"banner"},n.createElement("div",{className:"inner"},n.createElement("h2",null,d().heading),n.createElement("p",null,d().subHeading),n.createElement("ul",{className:"actions special"},n.createElement("li",null,n.createElement(i,{type:"id",element:"cta"},n.createElement("a",{href:"/#",className:"button primary"},"Записаться"))))),n.createElement(i,{type:"id",element:"one"},n.createElement("a",{href:"#one",className:"more"},"Узнать больше"))),n.createElement("section",{id:"one",className:"wrapper style1 special"},n.createElement("div",{className:"inner"},n.createElement("header",{className:"major"},n.createElement("h2",null,"Ты - уникальна, как и наша студия.",n.createElement("hr",null),"Бронируй своё рабочее место в нужное и удобное для тебя время.",n.createElement("hr",null),"Места для бровистов, визажистов, массажистов, мастеров маникюра и макияжа.",n.createElement("hr",null),"Место для встреч за чашечкой кофе.",n.createElement("hr",null),"Используй нашу студию для своих мероприятий.",n.createElement("hr",null),"Обменивайся идеями с другими мастерами.",n.createElement("hr",null),"Работай на себя. Расти."),n.createElement("p",null,"Удобные рабочие места в самом центре города.",n.createElement("br",null),"4 минуты пешком от Красной площади и площади Волкова.")))),n.createElement("section",{id:"two",className:"wrapper alt style2"},n.createElement("section",{className:"spotlight"},n.createElement("div",{className:"image"},n.createElement("img",{src:m.Z,alt:""})),n.createElement("div",{className:"content"},n.createElement("h2",null,"Работай на себя"),n.createElement("p",null,"Тебе не надо больше отдавать от 30 до 60 процентов своего дохода хозяину салона. Не нужно заботиться о наполняемости.",n.createElement("br",null),"Выбирай удобное для тебя время и плати только за нужные тебе часы."))),n.createElement("section",{className:"spotlight"},n.createElement("div",{className:"image"},n.createElement("img",{src:u.Z,alt:""})),n.createElement("div",{className:"content"},n.createElement("h2",null,"Коворкинг для визажистов, бровистов, массажистов, мастеров маникюра и макияжа"),n.createElement("p",null,n.createElement("ul",null,n.createElement("li",null,"3 места под маникюр"),n.createElement("li",null,"2 места для бровистов/визажистов"),n.createElement("li",null,"1 кушетка для массажа"))))),n.createElement("section",{className:"spotlight"},n.createElement("div",{className:"image"},n.createElement("img",{src:p.Z,alt:""})),n.createElement("div",{className:"content"},n.createElement("h2",null,"Выгодное расположение в самом центре Ярославля"),n.createElement("p",null,n.createElement("ul",null,n.createElement("li",null,"Улица Собинова 12"),n.createElement("li",null,"Центр города. Кировский район Ярославля"),n.createElement("li",null,"4 минуты пешком от Красной площади и от площади Волкова"),n.createElement("li",null,"Удобная парковка???"))))),n.createElement("section",{className:"spotlight"},n.createElement("div",{className:"image"},n.createElement("img",{src:m.Z,alt:""})),n.createElement("div",{className:"content"},n.createElement("h2",null,"Проводи свои мероприятия, мастер-классы, обучения, презентации"),n.createElement("p",null,n.createElement("ul",null,n.createElement("li",null,"Класс на 10 человек"),n.createElement("li",null,"Маркерная доска"),n.createElement("li",null,"Проектор"))))),n.createElement("section",{className:"spotlight"},n.createElement("div",{className:"image"},n.createElement("img",{src:u.Z,alt:""})),n.createElement("div",{className:"content"},n.createElement("h2",null,"Устрой кофе-брейк или просто поболтай с нами за чашечкой кофе"),n.createElement("p",null,n.createElement("ul",null,n.createElement("li",null,"Рецепшн, зона ожидания, фото-зона"),n.createElement("li",null,"Чай и кофе"),n.createElement("li",null,"Рядом с нами есть отличная кондитерская")))))),n.createElement("section",{id:"three",className:"wrapper style1 special"},n.createElement("div",{className:"inner"},n.createElement("header",{className:"major"},n.createElement("h2",null,"Наши цены и время работы"),n.createElement("p",null,"Pаботаем по предварительной записи с 10:00 до 22:00",n.createElement("br",null),"(но мы открыты для предложений и при необходимости готовы открыться раньше или остаться позже, напиши нам)")),n.createElement("h3",null,"Аренда места на час"),n.createElement("div",{className:"table-wrapper"},n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"Рабочие дни"),n.createElement("td",null,"99 рублей")),n.createElement("tr",null,n.createElement("td",null,"Выходные дни"),n.createElement("td",null,"149 рублей"))))),n.createElement("h3",null,"Аренда места на целый день"),n.createElement("div",{className:"table-wrapper"},n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"Рабочие дни"),n.createElement("td",null,"599 рублей")),n.createElement("tr",null,n.createElement("td",null,"Выходные дни"),n.createElement("td",null,"899 рублей"))))))),n.createElement("section",{id:"four",className:"wrapper style3 special"},n.createElement("div",{className:"inner"},n.createElement("header",{className:"major"},n.createElement("h2",null,'Отзывы о бьюти коворкинге "Студия D"'),n.createElement("p",null,"Вот, что говорят о нас Бьюти Мастера")),n.createElement("ul",{className:"features"},n.createElement("li",{className:"icon fa-heart"},n.createElement("h3",null,"Даша, визажист"),n.createElement("p",null,'Студия "D" - это отличное место в самом центре города, где я могу работать со своими клиентами. Мне больше не приходится встречаться с ними у себя дома в Чепыжах.\'')),n.createElement("li",{className:"icon fa-heart"},n.createElement("h3",null,"Саша, массажист"),n.createElement("p",null,'Я сразу разглядел все преимущества работы в коворкинге "Студия D". Это приемлемые цены, отличное расположение и приветливый персонал.')),n.createElement("li",{className:"icon fa-heart"},n.createElement("h3",null,"Паша, программист"),n.createElement("p",null,"Меня просто попросили оставить хороший отзыв и я не смог отказать.")),n.createElement("li",{className:"icon fa-heart"},n.createElement("h3",null,"Яша, юрист"),n.createElement("p",null,'Иногда я просыпаюсь утром и думаю, а не зайти ли мне в коворкинг "Студия D"?! Выпить чашечку крепкого, ароматного кофе, посмотреть на красивых танцующих девочек. Расслабиться. И в такие моменты на моём лице появляется мечтательная улыбка.'))))),n.createElement("section",{id:"cta",className:"wrapper style4"},n.createElement("div",{className:"inner"},n.createElement("header",null,n.createElement("h2",null,"Забронируй место в бьюти коворкинге"),n.createElement("p",null,"Напиши или позвони нам:",n.createElement("ul",null,n.createElement("li",null,"Telegram: ",n.createElement("a",{href:"https://t.me/Dkucegub"},"@Dkucegub")),n.createElement("li",null,"VK: ",n.createElement("a",{href:"https://vk.link/dancestudio_d"},"dancestudio_d")),n.createElement("li",null,"Телефон: +7 (930) 114 17 78")))),n.createElement("ul",{className:"actions stacked"},n.createElement("li",null,n.createElement("a",{href:"https://t.me/Dkucegub",className:"button fit primary"},"Написать в ТГ")),n.createElement("hr",null),n.createElement("li",null,n.createElement("a",{href:"https://vk.link/dancestudio_d",className:"button fit"},"Написать в VK"))))))}},1012:function(e,t,l){"use strict";t.Z=l.p+"static/pic01-0944862861ef0d6e4d1bf512bd08fda9.jpg"},5793:function(e,t,l){"use strict";t.Z=l.p+"static/pic02-330e03de32b6984bc758326b99dba3b8.jpg"},2464:function(e,t,l){"use strict";t.Z=l.p+"static/pic03-a5b5e669331899add1f88df16fd472aa.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-b1f67f8ca0b30db9f54f.js.map