(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=(a(16),a(1)),l=a.n(c),s=a(2),m=a(5),u=a(6),p=a(8),d=a(7),f=a(9),v=function(){var e=Object(s.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://rickandmortyapi.com/api/character/");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}(),E=(a(19),a(20),function(e){return r.a.createElement("div",{className:"filters-wrapper"},r.a.createElement("form",{onChange:function(t){e.handleFilter(t)}},r.a.createElement("div",{className:"filters"},r.a.createElement("input",{name:"name",type:"text",placeholder:"Search by Name",className:"input-field"}),r.a.createElement("div",{className:"input-group"},"Gender",r.a.createElement("select",{name:"gender"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female"),r.a.createElement("option",{value:"unknown"},"Unknown"))),r.a.createElement("div",{className:"input-group"},"Species",r.a.createElement("select",{name:"species"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"human"},"Human"),r.a.createElement("option",{value:"alien"},"Alien"),r.a.createElement("option",{value:"unknown"},"Unknown"))),r.a.createElement("div",{className:"input-group"},"Location",r.a.createElement("select",{name:"location"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Earth (Replacement Dimension)"},"Earth (Replacement Dimension)"),r.a.createElement("option",{value:"Anatomy Park"},"Anatomy Park"),r.a.createElement("option",{value:"Citadel of Ricks"},"Citadel of Ricks"),r.a.createElement("option",{value:"Interdimensional Cable"},"Interdimensional Cable"),r.a.createElement("option",{value:"unknown"},"unknown"))),r.a.createElement("div",{className:"sorting"},r.a.createElement("button",{onClick:e.handleSorting,name:"sort-name-acs"},"Sort by Name ASC"),r.a.createElement("button",{onClick:e.handleSorting,name:"sort-name-desc"},"Sort by Name DESC")))))}),h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:e.character.image,alt:"rick"})),r.a.createElement("div",{className:"card__info"},r.a.createElement("div",{className:"card__info-row"},"Name: ",e.character.name),r.a.createElement("div",{className:"card__info-row"},"Gender: ",e.character.gender),r.a.createElement("div",{className:"card__info-row"},"Species: ",e.character.species),r.a.createElement("div",{className:"card__info-row"},"Location: ",e.character.location.name)))},g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={originalList:[],listToRender:[],filteringOptions:{}},a.searchInList=function(e,t,a){return console.log(e,t,a),e.filter(function(e){return e[t].toLowerCase().includes(a.toLowerCase())})},a.sortingList=function(e){e.preventDefault();var t=a.state.listToRender,n=e.target.name,r=t.sort(function(e,t){return"sort-name-acs"===n?e.name.localeCompare(t.name):t.name.localeCompare(e.name)});a.setState({listToRender:r})},a.filterList=function(e,t,a){return"all"===a?e:e.filter(function(e){return("location"===t?e[t].name:e[t]).toLowerCase()===a.toLowerCase()})},a.generateFilteredList=function(e){var t=a.state.originalList;return Object.keys(e).forEach(function(n){t="name"===n?a.searchInList(t,n,e[n]):a.filterList(t,n,e[n])}),t},a.performFiltering=function(e){var t=e.target,n=a.state.filteringOptions;n[t.name]=t.value,a.setState({listToRender:a.generateFilteredList(n),filteringOptions:n})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,this.setState({originalList:t.results,listToRender:t.results});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.listToRender;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{handleFilter:this.performFiltering,handleSorting:this.sortingList}),r.a.createElement("div",{className:"card-wrapper"},e.map(function(e){return r.a.createElement(h,{key:e.id,character:e})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.47f12138.chunk.js.map