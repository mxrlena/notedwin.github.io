(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{230:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(109),c=r.n(o),l=r(221),s=r(237);var p=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{className:"Blog"},a.a.createElement("div",{className:"hero"},a.a.createElement("h1",null,"Blog"),a.a.createElement("h3",null,"Welcome to my Blog"),a.a.createElement("p",null,"This is where I write my thoughts, creations and experiences.")))},n}(n.Component),i=r(57),u=r.n(i);r.d(t,"pageQuery",(function(){return d}));var m=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return a.a.createElement(l.a,null,a.a.createElement("div",{className:"container"},a.a.createElement(c.a,{title:"Blog | "+u.a.siteTitle}),a.a.createElement(p,null),a.a.createElement("div",{className:"panel"},a.a.createElement("h2",null,"Latest Articles"),a.a.createElement(s.a,{postEdges:e}))))},n}(n.Component),d=(t.default=m,"618307409")},237:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(47);var c=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var c=n.prototype;return c.getPostList=function(){var e=[];return this.props.postEdges.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e},c.render=function(){var e=this.getPostList();return a.a.createElement("div",{className:"post-listing"},a.a.createElement("div",{className:"posts"},e.map((function(e){return a.a.createElement(o.Link,{to:e.path,key:e.title,className:"post"},a.a.createElement("h3",null,e.title),a.a.createElement("p",null,e.excerpt))}))))},n}(a.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-journal-jsx-91905e7396a77c349ec1.js.map