/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.5.1 (2020-10-01)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.Env"),i=function(e,t){var n;return t<0&&(t=0),3!==e.nodeType||(n=e.data.length)<t&&(t=n),t},y=function(e,t,n){1!==t.nodeType||t.hasChildNodes()?e.setStart(t,i(t,n)):e.setStartBefore(t)},k=function(e,t,n){1!==t.nodeType||t.hasChildNodes()?e.setEnd(t,i(t,n)):e.setEndAfter(t)},r=function(e,t,n){var o,i,r,a,s,d,f,l=e.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@(?!.*@))(.+)$/i),c=e.getParam("default_link_target",!1);if("A"!==e.selection.getNode().tagName){var g=e.selection.getRng().cloneRange();if(g.startOffset<5){if(!(s=g.endContainer.previousSibling)){if(!g.endContainer.firstChild||!g.endContainer.firstChild.nextSibling)return;s=g.endContainer.firstChild.nextSibling}if(d=s.length,y(g,s,d),k(g,s,d),g.endOffset<5)return;o=g.endOffset,i=s}else{if(3!==(i=g.endContainer).nodeType&&i.firstChild){for(;3!==i.nodeType&&i.firstChild;)i=i.firstChild;3===i.nodeType&&(y(g,i,0),k(g,i,i.nodeValue.length))}o=1===g.endOffset?2:g.endOffset-1-t}for(var u,h=o;y(g,i,2<=o?o-2:0),k(g,i,1<=o?o-1:0),--o," "!==(f=g.toString())&&""!==f&&160!==f.charCodeAt(0)&&0<=o-2&&f!==n;);(u=g.toString())===n||" "===u||160===u.charCodeAt(0)?(y(g,i,o),k(g,i,h),o+=1):(0===g.startOffset?y(g,i,0):y(g,i,o),k(g,i,h)),"."===(a=g.toString()).charAt(a.length-1)&&k(g,i,h-1);var m=(a=g.toString().trim()).match(l),C=e.getParam("link_default_protocol","http","string");m&&("www."===m[1]?m[1]=C+"://www.":/@$/.test(m[1])&&!/^mailto:/.test(m[1])&&(m[1]="mailto:"+m[1]),r=e.selection.getBookmark(),e.selection.setRng(g),e.execCommand("createlink",!1,m[1]+m[2]),!1!==c&&e.dom.setAttrib(e.selection.getNode(),"target",c),e.selection.moveToBookmark(r),e.nodeChanged())}},t=function(t){var n;t.on("keydown",function(e){13!==e.keyCode||r(t,-1,"")}),o.browser.isIE()?t.on("focus",function(){if(!n){n=!0;try{t.execCommand("AutoUrlDetect",!1,!0)}catch(e){}}}):(t.on("keypress",function(e){41!==e.keyCode||r(t,-1,"(")}),t.on("keyup",function(e){32!==e.keyCode||r(t,0,"")}))};e.add("autolink",function(e){t(e)})}();