"use strict"
define("dummy/app",["exports","@ember/application","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,i,r){function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(){super(...arguments),l(this,"modulePrefix",r.default.modulePrefix),l(this,"podModulePrefix",r.default.podModulePrefix),l(this,"Resolver",n.default)}}e.default=o,(0,i.default)(o,r.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/demo-upload",["exports","@ember/component","@ember/template-factory","@glimmer/component","@glimmer/tracking","@ember/object"],(function(e,t,n,i,r,l){var o,a,u,d,f,m
function s(e,t,n,i){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function c(e,t,n,i,r){var l={}
return Object.keys(i).forEach((function(e){l[e]=i[e]})),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=n.slice().reverse().reduce((function(n,i){return i(e,t,n)||n}),l),r&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(r):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(e,t,l),l=null),l}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const p=(0,n.createTemplateFactory)({id:"JfR0QjLz",block:'[[[10,0],[14,0,"docs-my-8 text-center"],[12],[1,"\\n  "],[8,[39,0],[[24,0,"demo-dropzone"]],[["@name"],["photos"]],[["default"],[[[[1,"\\n    "],[10,0],[15,0,[29,["dropzone-upload-area upload ",[52,[30,1,["active"]],"active"]]]],[12],[1,"\\n"],[41,[30,1,["supported"]],[[[1,"        "],[10,0],[14,0,"emoji mb-16"],[12],[1,"\\n"],[41,[30,1,["active"]],[[[1,"            ✨👽✨\\n"]],[]],[[[1,"            👽\\n"]],[]]],[1,"        "],[13],[1,"\\n"]],[]],null],[1,"\\n      "],[10,2],[12],[1,"\\n"],[41,[30,1,["supported"]],[[[1,"          Drag image, video or audio files here or\\n"]],[]],null],[1,"        "],[8,[39,2],null,[["@name","@for","@multiple","@onFileAdd","@accept"],["photos","upload-photo",true,[30,0,["uploadProof"]],"image/*,video/*,audio/*"]],[["default"],[[[[1,"\\n          "],[10,3],[12],[1,"choose files"],[13],[1,"\\n        "]],[]]]]],[1,"\\n        to upload.\\n      "],[13],[1,"\\n\\n"],[41,[30,2,["files","length"]],[[[1,"        Uploading "],[1,[30,2,["files","length"]]],[1," files. ("],[1,[30,2,["progress"]]],[1,"%)\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],[1,2]]]]],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"my-16"],[12],[1,"\\n  "],[10,"ul"],[14,0,"demo-uploaded-files-list"],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[30,3]],null]],null],null,[[[1,"      "],[10,"li"],[12],[1,"\\n        "],[10,0],[14,0,"card text-center"],[12],[1,"\\n"],[41,[30,4,["file"]],[[[1,"            "],[10,0],[14,0,"mb-4"],[12],[1,[30,4,["file","progress"]]],[1,"%"],[13],[1,"\\n"]],[]],[[[41,[28,[37,5],[[30,4,["type"]],"image"],null],[[[1,"            "],[10,"img"],[15,"src",[30,4,["preview"]]],[15,"alt",[30,4,["filename"]]],[12],[13],[1,"\\n"]],[]],[[[41,[28,[37,5],[[30,4,["type"]],"video"],null],[[[1,"            "],[10,"video"],[15,"src",[30,4,["preview"]]],[15,"alt",[30,4,["filename"]]],[14,"muted",""],[14,"loop",""],[14,"autoplay",""],[12],[1,"\\n            "],[13],[1,"\\n          "]],[]],null]],[]]]],[]]],[1,"          "],[10,1],[14,0,"caption"],[12],[1,[30,4,["filename"]]],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[4]],null],[1,"  "],[13],[1,"\\n"],[13],[1,"\\n"]],["dropzone","queue","@files","file"],false,["file-dropzone","if","file-upload","each","-track-array","equals"]]',moduleName:"dummy/components/demo-upload.hbs",isStrictMode:!1})
let b=(a=c((o=class{constructor(e){let{filename:t,file:n}=e
s(this,"filename",a,this),s(this,"file",u,this),s(this,"preview",d,this),s(this,"type",f,this),this.filename=t,this.file=n}}).prototype,"filename",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=c(o.prototype,"file",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=c(o.prototype,"preview",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=c(o.prototype,"type",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o),y=(c((m=class extends i.default{async uploadProof(e){let t,n=new b({filename:e.name,file:e})
this.args.files.pushObject(n)
try{t=await e.upload("/photos/new")}catch(o){return}let{filename:i,url:r,type:l}=t.body.data.attributes
Object.assign(n,{filename:i,preview:r,type:l,file:null})}}).prototype,"uploadProof",[l.action],Object.getOwnPropertyDescriptor(m.prototype,"uploadProof"),m.prototype),m)
e.default=y,(0,t.setComponentTemplate)(p,y)})),define("dummy/components/file-dropzone",["exports","ember-file-upload/components/file-dropzone"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/file-upload",["exports","ember-file-upload/components/file-upload"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/equals",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(e){let[t,n]=e
return t===n}))
e.default=n})),define("dummy/helpers/file-queue",["exports","ember-file-upload/helpers/file-queue"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=n})),define("dummy/initializers/ember-cli-mirage",["exports","dummy/config/environment","ember-cli-mirage/get-rfc232-test-context","ember-cli-mirage/start-mirage","dummy/mirage/config"],(function(e,t,n,i,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.startMirage=d
const{default:l,testConfig:o,makeServer:a}=r
var u={name:"ember-cli-mirage",initialize(e){l&&e.register("mirage:base-config",l,{instantiate:!1}),o&&e.register("mirage:test-config",o,{instantiate:!1}),a&&e.register("mirage:make-server",a,{instantiate:!1}),t.default["ember-cli-mirage"]=t.default["ember-cli-mirage"]||{},function(e,t){if("undefined"!=typeof FastBoot)return!1
if((0,n.default)())return!1
let i=void 0!==t.enabled,r=function(e,t){let n="development"===e&&!t.usingProxy,i="test"===e
return n||i}(e,t)
return i?t.enabled:r}(t.default.environment,t.default["ember-cli-mirage"])&&d(t.default)}}
function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.default
return(0,i.default)(null,{env:e,baseConfig:l,testConfig:o,makeServer:a})}e.default=u})),define("dummy/instance-initializers/ember-cli-mirage-autostart",["exports","ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/mirage/config",["exports","ember-file-upload/mirage"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.post("/photos/new",(0,t.upload)((function(e,t){let{type:n,name:i,size:r,url:l}=t.requestBody.file
return e.create("photo",{filename:i,filesize:r,uploadedAt:new Date,url:l,type:n.split("/")[0]})}))),this.passthrough("*")}})),define("dummy/mirage/models/photo",["exports","ember-cli-mirage"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.Model{}e.default=n})),define("dummy/mirage/scenarios/default",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}})),define("dummy/mirage/serializers/application",["exports","ember-cli-mirage"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.JSONAPISerializer{}e.default=n})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/drag-listener",["exports","ember-file-upload/modifiers/drag-listener"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/update-queue",["exports","ember-file-upload/modifiers/update-queue"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","@ember/routing/router","dummy/config/environment"],(function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{constructor(){super(...arguments),i(this,"location",n.default.locationType),i(this,"rootURL",n.default.rootURL)}}e.default=r,r.map((function(){}))})),define("dummy/routes/index",["exports","@ember/array","@ember/routing/route"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends n.default{model(){return(0,t.A)([{filename:"little-green-men.jpg",preview:"assets/images/little-green-men-c19bc0320c8878817623ca967238447c.jpg",type:"image"},{filename:"samantha-mulder.jpg",preview:"assets/images/samantha-mulder-562a7b3af235924ad507f21eda61a425.jpg",type:"image"}])}}e.default=i})),define("dummy/services/file-queue",["exports","ember-file-upload/services/file-queue"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"C6Ag1dtS",block:'[[[8,[39,0],null,null,null],[1,"\\n\\n"],[46,[28,[37,2],null,null],null,null,null],[1,"\\n"]],[],false,["docs-header","component","-outlet"]]',moduleName:"dummy/templates/application.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/docs",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"/lqKD/zX",block:'[[[8,[39,0],null,null,[["default"],[[[[1,"\\n\\n  "],[8,[30,1,["nav"]],null,null,[["default"],[[[[1,"\\n    "],[1,[28,[30,2,["item"]],["Getting started","docs.index"],null]],[1,"\\n    "],[1,[28,[30,2,["item"]],["Recipes","docs.recipes"],null]],[1,"\\n    "],[1,[28,[30,2,["item"]],["Integration","docs.integration"],null]],[1,"\\n    "],[1,[28,[30,2,["item"]],["Validation","docs.validation"],null]],[1,"\\n    "],[1,[28,[30,2,["item"]],["Testing","docs.testing"],null]],[1,"\\n    "],[1,[28,[30,2,["item"]],["AWS S3 Direct Uploads","docs.aws"],null]],[1,"\\n  "]],[2]]]]],[1,"\\n\\n  "],[8,[30,1,["main"]],null,null,[["default"],[[[[1,"\\n    "],[10,0],[14,0,"docs-container"],[12],[1,"\\n      "],[10,0],[14,0,"docs-section"],[12],[1,"\\n        "],[46,[28,[37,2],null,null],null,null,null],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "]],[]]]]],[1,"\\n\\n"]],[1]]]]],[1,"\\n"]],["viewer","nav"],false,["docs-viewer","component","-outlet"]]',moduleName:"dummy/templates/docs.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"vQdqc9zt",block:'[[[8,[39,0],null,[["@logo","@slimHeading","@strongHeading","@byline"],["ember","File","Upload","A file upload framework for Ember apps."]],null],[1,"\\n\\n"],[10,0],[14,0,"docs-container docs-md"],[12],[1,"\\n  "],[10,"section"],[14,0,"max-w-md mx-auto"],[12],[1,"\\n    "],[8,[39,1],null,[["@files"],[[30,1]]],null],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@model"],false,["docs-hero","demo-upload"]]',moduleName:"dummy/templates/index.hbs",isStrictMode:!1})
e.default=n}))
define("dummy/templates/not-found",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"IlEKW5zO",block:'[[[10,0],[14,0,"docs-container"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Not found"],[13],[1,"\\n  "],[10,2],[12],[1,"This page doesn\'t exist. "],[8,[39,0],null,[["@route"],["index"]],[["default"],[[[[1,"Head home?"]],[]]]]],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["link-to"]]',moduleName:"dummy/templates/not-found.hbs",isStrictMode:!1})
e.default=n})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
