/*
 * jwerty - Awesome handling of keyboard events
 *
 * jwerty is a JS lib which allows you to bind, fire and assert key combination
 * strings against elements and events. It normalises the poor std api into
 * something easy to use and clear.
 *
 * This code is licensed under the MIT
 * For the full license see: http://keithamus.mit-license.org/
 * For more information see: http://keithamus.github.com/jwerty
 *
 * @author Keith Cirkel ('keithamus') <jwerty@keithcirkel.co.uk>
 * @license http://keithamus.mit-license.org/
 * @copyright Copyright © 2011, Keith Cirkel
 *
 */

(function(e,t){function a(e,t){return e===null?t==="null":e===undefined?t==="undefined":e.is&&e instanceof r?t==="element":Object.prototype.toString.call(e).toLowerCase().indexOf(t)>7}function p(e){var t,n,r,i,s,o,u,c,h;if(e instanceof p)return e;if(!a(e,"array")){e=String(e).replace(/\s/g,"").toLowerCase().match(/(?:\+,|[^,])+/g)}for(t=0,n=e.length;t<n;++t){if(!a(e[t],"array")){e[t]=String(e[t]).match(/(?:\+\/|[^\/])+/g)}o=[],r=e[t].length;while(r--){u=e[t][r];s={jwertyCombo:String(u),shiftKey:false,ctrlKey:false,altKey:false,metaKey:false};if(!a(u,"array")){u=String(u).toLowerCase().match(/(?:(?:[^\+])+|\+\+|^\+$)/g)}i=u.length;while(i--){if(u[i]==="++")u[i]="+";if(u[i]in l.mods){s[f[l.mods[u[i]]]]=true}else if(u[i]in l.keys){s.keyCode=l.keys[u[i]]}else{c=u[i].match(/^\[([^-]+\-?[^-]*)-([^-]+\-?[^-]*)\]$/)}}if(a(s.keyCode,"undefined")){if(c&&c[1]in l.keys&&c[2]in l.keys){c[2]=l.keys[c[2]];c[1]=l.keys[c[1]];for(h=c[1];h<c[2];++h){o.push({altKey:s.altKey,shiftKey:s.shiftKey,metaKey:s.metaKey,ctrlKey:s.ctrlKey,keyCode:h,jwertyCombo:String(u)})}s.keyCode=h}else{s.keyCode=0}}o.push(s)}this[t]=o}this.length=t;return this}var n=e.document,r=e.jQuery||e.Zepto||e.ender||n,i,s,o,u="keydown";if(r===n){i=function(e,t){return e?r.querySelector(e,t||r):r};s=function(e,t){e.addEventListener(u,t,false)};o=function(e,t){var i=n.createEvent("Event"),s;i.initEvent(u,true,true);for(s in t)i[s]=t[s];return(e||r).dispatchEvent(i)}}else{i=function(e,t){return r(e||n,t)};s=function(e,t){r(e).bind(u+".jwerty",t)};o=function(e,t){r(e||n).trigger(r.Event(u,t))}}var f={16:"shiftKey",17:"ctrlKey",18:"altKey",91:"metaKey"};var l={mods:{"⇧":16,shift:16,"⌃":17,ctrl:17,"⌥":18,alt:18,option:18,"⌘":91,meta:91,cmd:91,"super":91,win:91},keys:{"⌫":8,backspace:8,"⇥":9,"⇆":9,tab:9,"↩":13,"return":13,enter:13,"⌅":13,pause:19,"pause-break":19,"⇪":20,caps:20,"caps-lock":20,"⎋":27,escape:27,esc:27,space:32,"↖":33,pgup:33,"page-up":33,"↘":34,pgdown:34,"page-down":34,"⇟":35,end:35,"⇞":36,home:36,ins:45,insert:45,del:46,"delete":46,"←":37,left:37,"arrow-left":37,"↑":38,up:38,"arrow-up":38,"→":39,right:39,"arrow-right":39,"↓":40,down:40,"arrow-down":40,"*":106,star:106,asterisk:106,multiply:106,"+":107,plus:107,"-":109,subtract:109,"num-.":110,"num-period":110,"num-dot":110,"num-full-stop":110,"num-delete":110,";":186,semicolon:186,"=":187,equals:187,",":188,comma:188,".":190,period:190,"full-stop":190,"/":191,slash:191,"forward-slash":191,"`":192,tick:192,"back-quote":192,"[":219,"open-bracket":219,"\\":220,"back-slash":220,"]":221,"close-bracket":221,"'":222,quote:222,apostraphe:222}};var c=47,h=0;while(++c<106){l.keys[h]=c;l.keys["num-"+h]=c+48;++h}c=111,h=1;while(++c<136){l.keys["f"+h]=c;++h}c=64;while(++c<91){l.keys[String.fromCharCode(c).toLowerCase()]=c}var d=t.jwerty={event:function(e,t,n){if(a(t,"boolean")){var r=t;t=function(){return r}}e=new p(e);var i=0,s=e.length-1,o,u;return function(r){if(u=d.is(e,r,i)){if(i<s){++i;return}else{o=t.call(n||this,r,u);if(o===false)r.preventDefault();i=0;return}}i=d.is(e,r)?1:0}},is:function(e,t,n){e=new p(e);n=n||0;e=e[n];t=t.originalEvent||t;var r=e.length,i=false;while(r--){i=e[r].jwertyCombo;for(var s in e[r]){if(s!=="jwertyCombo"&&t[s]!=e[r][s])i=false}if(i!==false)return i}return i},key:function(t,n,r,o,u){var f=a(r,"element")||a(r,"string")?r:o,l=f===r?e:r,c=f===r?o:u;s(a(f,"element")?f:i(f,c),d.event(t,n,l))},fire:function(e,t,n,r){e=new p(e);var s=a(n,"number")?n:r;o(a(t,"element")?t:i(t,n),e[s||0][0])},KEYS:l}})(this,typeof module!=="undefined"&&module.exports?module.exports:this)
;
