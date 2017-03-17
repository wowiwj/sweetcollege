(function(){var a,b,c,d,e,f,g,h,i=[].slice,j={}.hasOwnProperty,k=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=function(){},b=function(){function a(){}return a.prototype.addEventListener=a.prototype.on,a.prototype.on=function(a,b){return this._callbacks=this._callbacks||{},this._callbacks[a]||(this._callbacks[a]=[]),this._callbacks[a].push(b),this},a.prototype.emit=function(){var a,b,c,d,e,f;if(d=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],this._callbacks=this._callbacks||{},c=this._callbacks[d])for(e=0,f=c.length;f>e;e++)b=c[e],b.apply(this,a);return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=a.prototype.off,a.prototype.removeEventListener=a.prototype.off,a.prototype.off=function(a,b){var c,d,e,f,g;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(d=this._callbacks[a],!d)return this;if(1===arguments.length)return delete this._callbacks[a],this;for(e=f=0,g=d.length;g>f;e=++f)if(c=d[e],c===b){d.splice(e,1);break}return this},a}(),a=function(a){function c(a,b){var e,f,g;if(this.element=a,this.version=c.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(c.instances.push(this),this.element.dropzone=this,e=null!=(g=c.optionsForElement(this.element))?g:{},this.options=d({},this.defaultOptions,e,null!=b?b:{}),this.options.forceFallback||!c.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(f=this.getExistingFallback())&&f.parentNode&&f.parentNode.removeChild(f),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?c.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:c.getElements(this.options.clickable,"clickable")),this.init()}var d,e;return k(c,a),c.prototype.Emitter=b,c.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],c.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(a,b){return b()},init:function(){return g},forceFallback:!1,fallback:function(){var a,b,d,e,f,g;for(this.element.className=""+this.element.className+" dz-browser-not-supported",g=this.element.getElementsByTagName("div"),e=0,f=g.length;f>e;e++)a=g[e],/(^| )dz-message($| )/.test(a.className)&&(b=a,a.className="dz-message");return b||(b=c.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(b)),d=b.getElementsByTagName("span")[0],d&&(null!=d.textContent?d.textContent=this.options.dictFallbackMessage:null!=d.innerText&&(d.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(a){var b,c,d;return b={srcX:0,srcY:0,srcWidth:a.width,srcHeight:a.height},c=a.width/a.height,b.optWidth=this.options.thumbnailWidth,b.optHeight=this.options.thumbnailHeight,null==b.optWidth&&null==b.optHeight?(b.optWidth=b.srcWidth,b.optHeight=b.srcHeight):null==b.optWidth?b.optWidth=c*b.optHeight:null==b.optHeight&&(b.optHeight=1/c*b.optWidth),d=b.optWidth/b.optHeight,a.height<b.optHeight||a.width<b.optWidth?(b.trgHeight=b.srcHeight,b.trgWidth=b.srcWidth):c>d?(b.srcHeight=a.height,b.srcWidth=b.srcHeight*d):(b.srcWidth=a.width,b.srcHeight=b.srcWidth/d),b.srcX=(a.width-b.srcWidth)/2,b.srcY=(a.height-b.srcHeight)/2,b},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:g,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:g,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(a){var b,d,e,f,g,h,i,j,k,l,m,n,o;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(a.previewElement=c.createElement(this.options.previewTemplate.trim()),a.previewTemplate=a.previewElement,this.previewsContainer.appendChild(a.previewElement),l=a.previewElement.querySelectorAll("[data-dz-name]"),f=0,i=l.length;i>f;f++)b=l[f],b.textContent=this._renameFilename(a.name);for(m=a.previewElement.querySelectorAll("[data-dz-size]"),g=0,j=m.length;j>g;g++)b=m[g],b.innerHTML=this.filesize(a.size);for(this.options.addRemoveLinks&&(a._removeLink=c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),a.previewElement.appendChild(a._removeLink)),d=function(b){return function(d){return d.preventDefault(),d.stopPropagation(),a.status===c.UPLOADING?c.confirm(b.options.dictCancelUploadConfirmation,function(){return b.removeFile(a)}):b.options.dictRemoveFileConfirmation?c.confirm(b.options.dictRemoveFileConfirmation,function(){return b.removeFile(a)}):b.removeFile(a)}}(this),n=a.previewElement.querySelectorAll("[data-dz-remove]"),o=[],h=0,k=n.length;k>h;h++)e=n[h],o.push(e.addEventListener("click",d));return o}},removedfile:function(a){var b;return a.previewElement&&null!=(b=a.previewElement)&&b.parentNode.removeChild(a.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(a,b){var c,d,e,f;if(a.previewElement){for(a.previewElement.classList.remove("dz-file-preview"),f=a.previewElement.querySelectorAll("[data-dz-thumbnail]"),d=0,e=f.length;e>d;d++)c=f[d],c.alt=a.name,c.src=b;return setTimeout(function(){return function(){return a.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(a,b){var c,d,e,f,g;if(a.previewElement){for(a.previewElement.classList.add("dz-error"),"String"!=typeof b&&b.error&&(b=b.error),f=a.previewElement.querySelectorAll("[data-dz-errormessage]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.textContent=b);return g}},errormultiple:g,processing:function(a){return a.previewElement&&(a.previewElement.classList.add("dz-processing"),a._removeLink)?a._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:g,uploadprogress:function(a,b){var c,d,e,f,g;if(a.previewElement){for(f=a.previewElement.querySelectorAll("[data-dz-uploadprogress]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push("PROGRESS"===c.nodeName?c.value=b:c.style.width=""+b+"%");return g}},totaluploadprogress:g,sending:g,sendingmultiple:g,success:function(a){return a.previewElement?a.previewElement.classList.add("dz-success"):void 0},successmultiple:g,canceled:function(a){return this.emit("error",a,"Upload canceled.")},canceledmultiple:g,complete:function(a){return a._removeLink&&(a._removeLink.textContent=this.options.dictRemoveFile),a.previewElement?a.previewElement.classList.add("dz-complete"):void 0},completemultiple:g,maxfilesexceeded:g,maxfilesreached:g,queuecomplete:g,addedfiles:g,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},d=function(){var a,b,c,d,e,f,g;for(d=arguments[0],c=2<=arguments.length?i.call(arguments,1):[],f=0,g=c.length;g>f;f++){b=c[f];for(a in b)e=b[a],d[a]=e}return d},c.prototype.getAcceptedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted&&e.push(a);return e},c.prototype.getRejectedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted||e.push(a);return e},c.prototype.getFilesWithStatus=function(a){var b,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.status===a&&f.push(b);return f},c.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(c.QUEUED)},c.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(c.UPLOADING)},c.prototype.getAddedFiles=function(){return this.getFilesWithStatus(c.ADDED)},c.prototype.getActiveFiles=function(){var a,b,d,e,f;for(e=this.files,f=[],b=0,d=e.length;d>b;b++)a=e[b],(a.status===c.UPLOADING||a.status===c.QUEUED)&&f.push(a);return f},c.prototype.init=function(){var a,b,d,e,f,g,h;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(d=function(a){return function(){return a.hiddenFileInput&&a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput),a.hiddenFileInput=document.createElement("input"),a.hiddenFileInput.setAttribute("type","file"),(null==a.options.maxFiles||a.options.maxFiles>1)&&a.hiddenFileInput.setAttribute("multiple","multiple"),a.hiddenFileInput.className="dz-hidden-input",null!=a.options.acceptedFiles&&a.hiddenFileInput.setAttribute("accept",a.options.acceptedFiles),null!=a.options.capture&&a.hiddenFileInput.setAttribute("capture",a.options.capture),a.hiddenFileInput.style.visibility="hidden",a.hiddenFileInput.style.position="absolute",a.hiddenFileInput.style.top="0",a.hiddenFileInput.style.left="0",a.hiddenFileInput.style.height="0",a.hiddenFileInput.style.width="0",document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput),a.hiddenFileInput.addEventListener("change",function(){var b,c,e,f;if(c=a.hiddenFileInput.files,c.length)for(e=0,f=c.length;f>e;e++)b=c[e],a.addFile(b);return a.emit("addedfiles",c),d()})}}(this))(),this.URL=null!=(g=window.URL)?g:window.webkitURL,h=this.events,e=0,f=h.length;f>e;e++)a=h[e],this.on(a,this.options[a]);return this.on("uploadprogress",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("canceled",function(a){return function(b){return a.emit("complete",b)}}(this)),this.on("complete",function(a){return function(){return 0===a.getAddedFiles().length&&0===a.getUploadingFiles().length&&0===a.getQueuedFiles().length?setTimeout(function(){return a.emit("queuecomplete")},0):void 0}}(this)),b=function(a){return a.stopPropagation(),a.preventDefault?a.preventDefault():a.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(a){return function(b){return a.emit("dragstart",b)}}(this),dragenter:function(a){return function(c){return b(c),a.emit("dragenter",c)}}(this),dragover:function(a){return function(c){var d;try{d=c.dataTransfer.effectAllowed}catch(e){}return c.dataTransfer.dropEffect="move"===d||"linkMove"===d?"move":"copy",b(c),a.emit("dragover",c)}}(this),dragleave:function(a){return function(b){return a.emit("dragleave",b)}}(this),drop:function(a){return function(c){return b(c),a.drop(c)}}(this),dragend:function(a){return function(b){return a.emit("dragend",b)}}(this)}}],this.clickableElements.forEach(function(a){return function(b){return a.listeners.push({element:b,events:{click:function(d){return(b!==a.element||d.target===a.element||c.elementInside(d.target,a.element.querySelector(".dz-message")))&&a.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},c.prototype.destroy=function(){var a;return this.disable(),this.removeAllFiles(!0),(null!=(a=this.hiddenFileInput)?a.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,c.instances.splice(c.instances.indexOf(this),1)},c.prototype.updateTotalUploadProgress=function(){var a,b,c,d,e,f,g,h;if(d=0,c=0,a=this.getActiveFiles(),a.length){for(h=this.getActiveFiles(),f=0,g=h.length;g>f;f++)b=h[f],d+=b.upload.bytesSent,c+=b.upload.total;e=100*d/c}else e=100;return this.emit("totaluploadprogress",e,c,d)},c.prototype._getParamName=function(a){return"function"==typeof this.options.paramName?this.options.paramName(a):""+this.options.paramName+(this.options.uploadMultiple?"["+a+"]":"")},c.prototype._renameFilename=function(a){return"function"!=typeof this.options.renameFilename?a:this.options.renameFilename(a)},c.prototype.getFallbackForm=function(){var a,b,d,e;return(a=this.getExistingFallback())?a:(d='<div class="dz-fallback">',this.options.dictFallbackText&&(d+="<p>"+this.options.dictFallbackText+"</p>"),d+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',b=c.createElement(d),"FORM"!==this.element.tagName?(e=c.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),e.appendChild(b)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:b)},c.prototype.getExistingFallback=function(){var a,b,c,d,e,f;for(b=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)if(b=a[c],/(^| )fallback($| )/.test(b.className))return b},f=["div","form"],d=0,e=f.length;e>d;d++)if(c=f[d],a=b(this.element.getElementsByTagName(c)))return a},c.prototype.setupEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.addEventListener(b,c,!1));return e}());return g},c.prototype.removeEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.removeEventListener(b,c,!1));return e}());return g},c.prototype.disable=function(){var a,b,c,d,e;for(this.clickableElements.forEach(function(a){return a.classList.remove("dz-clickable")}),this.removeEventListeners(),d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.cancelUpload(a));return e},c.prototype.enable=function(){return this.clickableElements.forEach(function(a){return a.classList.add("dz-clickable")}),this.setupEventListeners()},c.prototype.filesize=function(a){var b,c,d,e,f,g,h,i;if(d=0,e="b",a>0){for(g=["TB","GB","MB","KB","b"],c=h=0,i=g.length;i>h;c=++h)if(f=g[c],b=Math.pow(this.options.filesizeBase,4-c)/10,a>=b){d=a/Math.pow(this.options.filesizeBase,4-c),e=f;break}d=Math.round(10*d)/10}return"<strong>"+d+"</strong> "+e},c.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},c.prototype.drop=function(a){var b,c;a.dataTransfer&&(this.emit("drop",a),b=a.dataTransfer.files,this.emit("addedfiles",b),b.length&&(c=a.dataTransfer.items,c&&c.length&&null!=c[0].webkitGetAsEntry?this._addFilesFromItems(c):this.handleFiles(b)))},c.prototype.paste=function(a){var b,c;if(null!=(null!=a&&null!=(c=a.clipboardData)?c.items:void 0))return this.emit("paste",a),b=a.clipboardData.items,b.length?this._addFilesFromItems(b):void 0},c.prototype.handleFiles=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(this.addFile(b));return e},c.prototype._addFilesFromItems=function(a){var b,c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push(null!=c.webkitGetAsEntry&&(b=c.webkitGetAsEntry())?b.isFile?this.addFile(c.getAsFile()):b.isDirectory?this._addFilesFromDirectory(b,b.name):void 0:null!=c.getAsFile?null==c.kind||"file"===c.kind?this.addFile(c.getAsFile()):void 0:void 0);return f},c.prototype._addFilesFromDirectory=function(a,b){var c,d,e;return c=a.createReader(),d=function(a){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(a):void 0},(e=function(a){return function(){return c.readEntries(function(c){var d,f,g;if(c.length>0){for(f=0,g=c.length;g>f;f++)d=c[f],d.isFile?d.file(function(c){return a.options.ignoreHiddenFiles&&"."===c.name.substring(0,1)?void 0:(c.fullPath=""+b+"/"+c.name,a.addFile(c))}):d.isDirectory&&a._addFilesFromDirectory(d,""+b+"/"+d.name);e()}return null},d)}}(this))()},c.prototype.accept=function(a,b){return a.size>1024*this.options.maxFilesize*1024?b(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(a.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):c.isValidFile(a,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",a)):this.options.accept.call(this,a,b):b(this.options.dictInvalidFileType)},c.prototype.addFile=function(a){return a.upload={progress:0,total:a.size,bytesSent:0},this.files.push(a),a.status=c.ADDED,this.emit("addedfile",a),this._enqueueThumbnail(a),this.accept(a,function(b){return function(c){return c?(a.accepted=!1,b._errorProcessing([a],c)):(a.accepted=!0,b.options.autoQueue&&b.enqueueFile(a)),b._updateMaxFilesReachedClass()}}(this))},c.prototype.enqueueFiles=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)b=a[c],this.enqueueFile(b);return null},c.prototype.enqueueFile=function(a){if(a.status!==c.ADDED||a.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return a.status=c.QUEUED,this.options.autoProcessQueue?setTimeout(function(a){return function(){return a.processQueue()}}(this),0):void 0},c.prototype._thumbnailQueue=[],c.prototype._processingThumbnail=!1,c.prototype._enqueueThumbnail=function(a){return this.options.createImageThumbnails&&a.type.match(/image.*/)&&a.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(a),setTimeout(function(a){return function(){return a._processThumbnailQueue()}}(this),0)):void 0},c.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(a){return function(){return a._processingThumbnail=!1,a._processThumbnailQueue()}}(this)))},c.prototype.removeFile=function(a){return a.status===c.UPLOADING&&this.cancelUpload(a),this.files=h(this.files,a),this.emit("removedfile",a),0===this.files.length?this.emit("reset"):void 0},c.prototype.removeAllFiles=function(a){var b,d,e,f;for(null==a&&(a=!1),f=this.files.slice(),d=0,e=f.length;e>d;d++)b=f[d],(b.status!==c.UPLOADING||a)&&this.removeFile(b);return null},c.prototype.createThumbnail=function(a,b){var c;return c=new FileReader,c.onload=function(d){return function(){return"image/svg+xml"===a.type?(d.emit("thumbnail",a,c.result),void(null!=b&&b())):d.createThumbnailFromUrl(a,c.result,b)}}(this),c.readAsDataURL(a)},c.prototype.createThumbnailFromUrl=function(a,b,c,d){var e;return e=document.createElement("img"),d&&(e.crossOrigin=d),e.onload=function(b){return function(){var d,g,h,i,j,k,l,m;return a.width=e.width,a.height=e.height,h=b.options.resize.call(b,a),null==h.trgWidth&&(h.trgWidth=h.optWidth),null==h.trgHeight&&(h.trgHeight=h.optHeight),d=document.createElement("canvas"),g=d.getContext("2d"),d.width=h.trgWidth,d.height=h.trgHeight,f(g,e,null!=(j=h.srcX)?j:0,null!=(k=h.srcY)?k:0,h.srcWidth,h.srcHeight,null!=(l=h.trgX)?l:0,null!=(m=h.trgY)?m:0,h.trgWidth,h.trgHeight),i=d.toDataURL("image/png"),b.emit("thumbnail",a,i),null!=c?c():void 0}}(this),null!=c&&(e.onerror=c),e.src=b},c.prototype.processQueue=function(){var a,b,c,d;if(b=this.options.parallelUploads,c=this.getUploadingFiles().length,a=c,!(c>=b)&&(d=this.getQueuedFiles(),d.length>0)){if(this.options.uploadMultiple)return this.processFiles(d.slice(0,b-c));for(;b>a;){if(!d.length)return;this.processFile(d.shift()),a++}}},c.prototype.processFile=function(a){return this.processFiles([a])},c.prototype.processFiles=function(a){var b,d,e;for(d=0,e=a.length;e>d;d++)b=a[d],b.processing=!0,b.status=c.UPLOADING,this.emit("processing",b);return this.options.uploadMultiple&&this.emit("processingmultiple",a),this.uploadFiles(a)},c.prototype._getFilesWithXhr=function(a){var b,c;return c=function(){var c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.xhr===a&&f.push(b);return f}.call(this)},c.prototype.cancelUpload=function(a){var b,d,e,f,g,h,i;if(a.status===c.UPLOADING){for(d=this._getFilesWithXhr(a.xhr),e=0,g=d.length;g>e;e++)b=d[e],b.status=c.CANCELED;for(a.xhr.abort(),f=0,h=d.length;h>f;f++)b=d[f],this.emit("canceled",b);this.options.uploadMultiple&&this.emit("canceledmultiple",d)}else((i=a.status)===c.ADDED||i===c.QUEUED)&&(a.status=c.CANCELED,this.emit("canceled",a),this.options.uploadMultiple&&this.emit("canceledmultiple",[a]));return this.options.autoProcessQueue?this.processQueue():void 0},e=function(){var a,b;return b=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],"function"==typeof b?b.apply(this,a):b},c.prototype.uploadFile=function(a){return this.uploadFiles([a])},c.prototype.uploadFiles=function(a){var b,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L;for(w=new XMLHttpRequest,x=0,B=a.length;B>x;x++)b=a[x],b.xhr=w;p=e(this.options.method,a),u=e(this.options.url,a),w.open(p,u,!0),w.withCredentials=!!this.options.withCredentials,s=null,g=function(c){return function(){var d,e,f;for(f=[],d=0,e=a.length;e>d;d++)b=a[d],f.push(c._errorProcessing(a,s||c.options.dictResponseError.replace("{{statusCode}}",w.status),w));return f}}(this),t=function(c){return function(d){var e,f,g,h,i,j,k,l,m;if(null!=d)for(f=100*d.loaded/d.total,g=0,j=a.length;j>g;g++)b=a[g],b.upload={progress:f,total:d.total,bytesSent:d.loaded};else{for(e=!0,f=100,h=0,k=a.length;k>h;h++)b=a[h],(100!==b.upload.progress||b.upload.bytesSent!==b.upload.total)&&(e=!1),b.upload.progress=f,b.upload.bytesSent=b.upload.total;if(e)return}for(m=[],i=0,l=a.length;l>i;i++)b=a[i],m.push(c.emit("uploadprogress",b,f,b.upload.bytesSent));return m}}(this),w.onload=function(b){return function(d){var e;if(a[0].status!==c.CANCELED&&4===w.readyState){if(s=w.responseText,w.getResponseHeader("content-type")&&~w.getResponseHeader("content-type").indexOf("application/json"))try{s=JSON.parse(s)}catch(f){d=f,s="Invalid JSON response from server."}return t(),200<=(e=w.status)&&300>e?b._finished(a,s,d):g()}}}(this),w.onerror=function(){return function(){return a[0].status!==c.CANCELED?g():void 0}}(this),r=null!=(G=w.upload)?G:w,r.onprogress=t,j={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&d(j,this.options.headers);for(h in j)i=j[h],i&&w.setRequestHeader(h,i);if(f=new FormData,this.options.params){H=this.options.params;for(o in H)v=H[o],f.append(o,v)}for(y=0,C=a.length;C>y;y++)b=a[y],this.emit("sending",b,w,f);if(this.options.uploadMultiple&&this.emit("sendingmultiple",a,w,f),"FORM"===this.element.tagName)for(I=this.element.querySelectorAll("input, textarea, select, button"),z=0,D=I.length;D>z;z++)if(l=I[z],m=l.getAttribute("name"),n=l.getAttribute("type"),"SELECT"===l.tagName&&l.hasAttribute("multiple"))for(J=l.options,A=0,E=J.length;E>A;A++)q=J[A],q.selected&&f.append(m,q.value);else(!n||"checkbox"!==(K=n.toLowerCase())&&"radio"!==K||l.checked)&&f.append(m,l.value);for(k=F=0,L=a.length-1;L>=0?L>=F:F>=L;k=L>=0?++F:--F)f.append(this._getParamName(k),a[k],this._renameFilename(a[k].name));return this.submitRequest(w,f,a)},c.prototype.submitRequest=function(a,b){return a.send(b)},c.prototype._finished=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.SUCCESS,this.emit("success",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("successmultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c.prototype._errorProcessing=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.ERROR,this.emit("error",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("errormultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c}(b),a.version="4.3.0",a.options={},a.optionsForElement=function(b){return b.getAttribute("id")?a.options[c(b.getAttribute("id"))]:void 0},a.instances=[],a.forElement=function(a){if("string"==typeof a&&(a=document.querySelector(a)),null==(null!=a?a.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return a.dropzone},a.autoDiscover=!0,a.discover=function(){var b,c,d,e,f,g;for(document.querySelectorAll?d=document.querySelectorAll(".dropzone"):(d=[],b=function(a){var b,c,e,f;for(f=[],c=0,e=a.length;e>c;c++)b=a[c],f.push(/(^| )dropzone($| )/.test(b.className)?d.push(b):void 0);return f},b(document.getElementsByTagName("div")),b(document.getElementsByTagName("form"))),g=[],e=0,f=d.length;f>e;e++)c=d[e],g.push(a.optionsForElement(c)!==!1?new a(c):void 0);return g},a.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],a.isBrowserSupported=function(){var b,c,d,e,f;if(b=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(f=a.blacklistedBrowsers,d=0,e=f.length;e>d;d++)c=f[d],c.test(navigator.userAgent)&&(b=!1);else b=!1;else b=!1;return b},h=function(a,b){var c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],c!==b&&f.push(c);return f},c=function(a){return a.replace(/[\-_](\w)/g,function(a){return a.charAt(1).toUpperCase()})},a.createElement=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.childNodes[0]},a.elementInside=function(a,b){if(a===b)return!0;for(;a=a.parentNode;)if(a===b)return!0;return!1},a.getElement=function(a,b){var c;if("string"==typeof a?c=document.querySelector(a):null!=a.nodeType&&(c=a),null==c)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector or a plain HTML element.");return c},a.getElements=function(a,b){var c,d,e,f,g,h,i,j;if(a instanceof Array){e=[];try{for(f=0,h=a.length;h>f;f++)d=a[f],e.push(this.getElement(d,b))}catch(k){c=k,e=null}}else if("string"==typeof a)for(e=[],j=document.querySelectorAll(a),g=0,i=j.length;i>g;g++)d=j[g],e.push(d);else null!=a.nodeType&&(e=[a]);if(null==e||!e.length)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return e},a.confirm=function(a,b,c){return window.confirm(a)?b():null!=c?c():void 0},a.isValidFile=function(a,b){var c,d,e,f,g;if(!b)return!0;for(b=b.split(","),d=a.type,c=d.replace(/\/.*$/,""),f=0,g=b.length;g>f;f++)if(e=b[f],e=e.trim(),"."===e.charAt(0)){if(-1!==a.name.toLowerCase().indexOf(e.toLowerCase(),a.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(c===e.replace(/\/.*$/,""))return!0
}else if(d===e)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(b){return this.each(function(){return new a(this,b)})}),"undefined"!=typeof module&&null!==module?module.exports=a:window.Dropzone=a,a.ADDED="added",a.QUEUED="queued",a.ACCEPTED=a.QUEUED,a.UPLOADING="uploading",a.PROCESSING=a.UPLOADING,a.CANCELED="canceled",a.ERROR="error",a.SUCCESS="success",e=function(a){var b,c,d,e,f,g,h,i,j,k;for(h=a.naturalWidth,g=a.naturalHeight,c=document.createElement("canvas"),c.width=1,c.height=g,d=c.getContext("2d"),d.drawImage(a,0,0),e=d.getImageData(0,0,1,g).data,k=0,f=g,i=g;i>k;)b=e[4*(i-1)+3],0===b?f=i:k=i,i=f+k>>1;return j=i/g,0===j?1:j},f=function(a,b,c,d,f,g,h,i,j,k){var l;return l=e(b),a.drawImage(b,c,d,f,g,h,i,j,k/l)},d=function(a,b){var c,d,e,f,g,h,i,j,k;if(e=!1,k=!0,d=a.document,j=d.documentElement,c=d.addEventListener?"addEventListener":"attachEvent",i=d.addEventListener?"removeEventListener":"detachEvent",h=d.addEventListener?"":"on",f=function(c){return"readystatechange"!==c.type||"complete"===d.readyState?(("load"===c.type?a:d)[i](h+c.type,f,!1),!e&&(e=!0)?b.call(a,c.type||c):void 0):void 0},g=function(){var a;try{j.doScroll("left")}catch(b){return a=b,void setTimeout(g,50)}return f("poll")},"complete"!==d.readyState){if(d.createEventObject&&j.doScroll){try{k=!a.frameElement}catch(l){}k&&g()}return d[c](h+"DOMContentLoaded",f,!1),d[c](h+"readystatechange",f,!1),a[c](h+"load",f,!1)}},a._autoDiscoverFunction=function(){return a.autoDiscover?a.discover():void 0},d(window,a._autoDiscoverFunction)}).call(this);
/*!
 * Viewer.js v0.6.2
 * https://github.com/fengyuanchen/viewerjs
 *
 * Copyright (c) 2017 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2017-03-04T08:19:00.870Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Viewer = factory());
}(this, (function () { 'use strict';

var DEFAULTS = {
  // Enable inline mode
  inline: false,

  // Show the button on the top-right of the viewer
  button: true,

  // Show the navbar
  navbar: true,

  // Show the title
  title: true,

  // Show the toolbar
  toolbar: true,

  // Show the tooltip with image ratio (percentage) when zoom in or zoom out
  tooltip: true,

  // Enable to move the image
  movable: true,

  // Enable to zoom the image
  zoomable: true,

  // Enable to rotate the image
  rotatable: true,

  // Enable to scale the image
  scalable: true,

  // Enable CSS3 Transition for some special elements
  transition: true,

  // Enable to request fullscreen when play
  fullscreen: true,

  // Enable keyboard support
  keyboard: true,

  // Define interval of each image when playing
  interval: 5000,

  // Min width of the viewer in inline mode
  minWidth: 200,

  // Min height of the viewer in inline mode
  minHeight: 100,

  // Define the ratio when zoom the image by wheeling mouse
  zoomRatio: 0.1,

  // Define the min ratio of the image when zoom out
  minZoomRatio: 0.01,

  // Define the max ratio of the image when zoom in
  maxZoomRatio: 100,

  // Define the CSS `z-index` value of viewer in modal mode.
  zIndex: 2015,

  // Define the CSS `z-index` value of viewer in inline mode.
  zIndexInline: 0,

  // Define where to get the original image URL for viewing
  // Type: String (an image attribute) or Function (should return an image URL)
  url: 'src',

  // Event shortcuts
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null
};

var TEMPLATE = '<div class="viewer-container">' + '<div class="viewer-canvas"></div>' + '<div class="viewer-footer">' + '<div class="viewer-title"></div>' + '<ul class="viewer-toolbar">' + '<li class="viewer-zoom-in" data-action="zoom-in"></li>' + '<li class="viewer-zoom-out" data-action="zoom-out"></li>' + '<li class="viewer-one-to-one" data-action="one-to-one"></li>' + '<li class="viewer-reset" data-action="reset"></li>' + '<li class="viewer-prev" data-action="prev"></li>' + '<li class="viewer-play" data-action="play"></li>' + '<li class="viewer-next" data-action="next"></li>' + '<li class="viewer-rotate-left" data-action="rotate-left"></li>' + '<li class="viewer-rotate-right" data-action="rotate-right"></li>' + '<li class="viewer-flip-horizontal" data-action="flip-horizontal"></li>' + '<li class="viewer-flip-vertical" data-action="flip-vertical"></li>' + '</ul>' + '<div class="viewer-navbar">' + '<ul class="viewer-list"></ul>' + '</div>' + '</div>' + '<div class="viewer-tooltip"></div>' + '<div class="viewer-button" data-action="mix"></div>' + '<div class="viewer-player"></div>' + '</div>';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

// RegExps
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
var REGEXP_SPACES = /\s+/;
var REGEXP_SUFFIX = /^(width|height|left|top|marginLeft|marginTop)$/;
var REGEXP_TRIM = /^\s+(.*)\s+$/;

// Utilities
var objectProto = Object.prototype;
var toString = objectProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var slice = Array.prototype.slice;

function typeOf(obj) {
  return toString.call(obj).slice(8, -1).toLowerCase();
}

function isString(str) {
  return typeof str === 'string';
}

function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
}

function isPlainObject(obj) {
  if (!isObject(obj)) {
    return false;
  }

  try {
    var _constructor = obj.constructor;
    var prototype = _constructor.prototype;

    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (e) {
    return false;
  }
}

function isFunction(fn) {
  return typeOf(fn) === 'function';
}

function isArray(arr) {
  return Array.isArray ? Array.isArray(arr) : typeOf(arr) === 'array';
}

function toArray$$1(obj, offset) {
  offset = offset >= 0 ? offset : 0;

  if (Array.from) {
    return Array.from(obj).slice(offset);
  }

  return slice.call(obj, offset);
}

function inArray(value, arr) {
  var index = -1;

  if (arr.indexOf) {
    return arr.indexOf(value);
  }

  arr.forEach(function (n, i) {
    if (n === value) {
      index = i;
    }
  });

  return index;
}

function trim(str) {
  if (isString(str)) {
    str = str.trim ? str.trim() : str.replace(REGEXP_TRIM, '1');
  }

  return str;
}

function each(obj, callback) {
  if (obj && isFunction(callback)) {
    var i = void 0;

    if (isArray(obj) || isNumber(obj.length) /* array-like */) {
        var length = obj.length;

        for (i = 0; i < length; i++) {
          if (callback.call(obj, obj[i], i, obj) === false) {
            break;
          }
        }
      } else if (isObject(obj)) {
      Object.keys(obj).forEach(function (key) {
        callback.call(obj, obj[key], key, obj);
      });
    }
  }

  return obj;
}

function extend(obj) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (isObject(obj) && args.length > 0) {
    if (Object.assign) {
      return Object.assign.apply(Object, [obj].concat(args));
    }

    args.forEach(function (arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function (key) {
          obj[key] = arg[key];
        });
      }
    });
  }

  return obj;
}

function proxy(fn, context) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, args2 = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args2[_key3] = arguments[_key3];
    }

    return fn.apply(context, args.concat(args2));
  };
}

function setStyle(element, styles) {
  var style = element.style;

  each(styles, function (value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += 'px';
    }

    style[property] = value;
  });
}

function getStyle(element) {
  return window.getComputedStyle ? window.getComputedStyle(element, null) : element.currentStyle;
}

function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}

function addClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    each(element, function (elem) {
      addClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.add(value);
    return;
  }

  var className = trim(element.className);

  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = className + ' ' + value;
  }
}

function removeClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    each(element, function (elem) {
      removeClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.remove(value);
    return;
  }

  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '');
  }
}

function toggleClass(element, value, added) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    each(element, function (elem) {
      toggleClass(elem, value, added);
    });
    return;
  }

  // IE10-11 doesn't support the second parameter of `classList.toggle`
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}

function hyphenate(str) {
  return str.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
}

function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  } else if (element.dataset) {
    return element.dataset[name];
  }

  return element.getAttribute('data-' + hyphenate(name));
}

function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute('data-' + hyphenate(name), data);
  }
}

function removeData(element, name) {
  if (isObject(element[name])) {
    delete element[name];
  } else if (element.dataset) {
    // #128 Safari not allows to delete dataset property
    try {
      delete element.dataset[name];
    } catch (e) {
      element.dataset[name] = null;
    }
  } else {
    element.removeAttribute('data-' + hyphenate(name));
  }
}

function removeListener(element, type, handler) {
  var types = trim(type).split(REGEXP_SPACES);

  if (types.length > 1) {
    each(types, function (t) {
      removeListener(element, t, handler);
    });
    return;
  }

  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, handler);
  }
}

function addListener(element, type, _handler, once) {
  var types = trim(type).split(REGEXP_SPACES);
  var originalHandler = _handler;

  if (types.length > 1) {
    each(types, function (t) {
      addListener(element, t, _handler);
    });
    return;
  }

  if (once) {
    _handler = function handler() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      removeListener(element, type, _handler);

      return originalHandler.apply(element, args);
    };
  }

  if (element.addEventListener) {
    element.addEventListener(type, _handler, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, _handler);
  }
}

function dispatchEvent(element, type, data) {
  if (element.dispatchEvent) {
    var event = void 0;

    // Event and CustomEvent on IE9-11 are global objects, not constructors
    if (isFunction(Event) && isFunction(CustomEvent)) {
      if (isUndefined(data)) {
        event = new Event(type, {
          bubbles: true,
          cancelable: true
        });
      } else {
        event = new CustomEvent(type, {
          detail: data,
          bubbles: true,
          cancelable: true
        });
      }
    } else if (isUndefined(data)) {
      event = document.createEvent('Event');
      event.initEvent(type, true, true);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    // IE9+
    return element.dispatchEvent(event);
  } else if (element.fireEvent) {
    // IE6-10 (native events only)
    return element.fireEvent('on' + type);
  }

  return true;
}

function getEvent(event) {
  var e = event || window.event;

  // Fix target property (IE8)
  if (!e.target) {
    e.target = e.srcElement || document;
  }

  if (!isNumber(e.pageX) && isNumber(e.clientX)) {
    var eventDoc = event.target.ownerDocument || document;
    var doc = eventDoc.documentElement;
    var body = eventDoc.body;

    e.pageX = e.clientX + ((doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0));
    e.pageY = e.clientY + ((doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0));
  }

  return e;
}

function getOffset(element) {
  var doc = document.documentElement;
  var box = element.getBoundingClientRect();

  return {
    left: box.left + ((window.scrollX || doc && doc.scrollLeft || 0) - (doc && doc.clientLeft || 0)),
    top: box.top + ((window.scrollY || doc && doc.scrollTop || 0) - (doc && doc.clientTop || 0))
  };
}

function getByTag(element, tagName) {
  return element.getElementsByTagName(tagName);
}

function getByClass(element, className) {
  return element.getElementsByClassName ? element.getElementsByClassName(className) : element.querySelectorAll('.' + className);
}



function appendChild(element, elem) {
  if (elem.length) {
    each(elem, function (el) {
      appendChild(element, el);
    });
    return;
  }

  element.appendChild(elem);
}

function removeChild(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function setText(element, text) {
  if (!isUndefined(element.textContent)) {
    element.textContent = text;
  } else {
    element.innerText = text;
  }
}

// Force reflow to enable CSS3 transition
function forceReflow(element) {
  return element.offsetWidth;
}

// e.g.: http://domain.com/path/to/picture.jpg?size=1280×960 -> picture.jpg
function getImageName(url) {
  return isString(url) ? url.replace(/^.*\//, '').replace(/[?&#].*$/, '') : '';
}

function getImageSize(image, callback) {
  // Modern browsers
  if (image.naturalWidth) {
    callback(image.naturalWidth, image.naturalHeight);
    return;
  }

  var newImage = document.createElement('img');

  newImage.onload = function load() {
    callback(this.width, this.height);
  };

  newImage.src = image.src;
}

function getTransform(data) {
  var transforms = [];
  var rotate = data.rotate;
  var scaleX = data.scaleX;
  var scaleY = data.scaleY;

  // Rotate should come first before scale to match orientation transform
  if (isNumber(rotate) && rotate !== 0) {
    transforms.push('rotate(' + rotate + 'deg)');
  }

  if (isNumber(scaleX) && scaleX !== 1) {
    transforms.push('scaleX(' + scaleX + ')');
  }

  if (isNumber(scaleY) && scaleY !== 1) {
    transforms.push('scaleY(' + scaleY + ')');
  }

  return transforms.length ? transforms.join(' ') : 'none';
}

function getResponsiveClass(option) {
  switch (option) {
    case 2:
      return 'viewer-hide-xs-down';

    case 3:
      return 'viewer-hide-sm-down';

    case 4:
      return 'viewer-hide-md-down';
  }

  return '';
}

function getPointer(pointer, endOnly) {
  var end = {
    endX: pointer.pageX,
    endY: pointer.pageY
  };

  if (endOnly) {
    return end;
  }

  return extend({
    startX: pointer.pageX,
    startY: pointer.pageY
  }, end);
}

function getMaxZoomRatio(pointers) {
  var pointers2 = extend({}, pointers);
  var ratios = [];

  each(pointers, function (pointer, pointerId) {
    delete pointers2[pointerId];

    each(pointers2, function (pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;

      ratios.push(ratio);
    });
  });

  ratios.sort(function (a, b) {
    return Math.abs(a) < Math.abs(b);
  });

  return ratios[0];
}

function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;

  each(pointers, function (pointer) {
    pageX += pointer.startX;
    pageY += pointer.startY;
    count += 1;
  });

  pageX /= count;
  pageY /= count;

  return {
    pageX: pageX,
    pageY: pageY
  };
}

var render$1 = {
  render: function render() {
    var self = this;

    self.initContainer();
    self.initViewer();
    self.initList();
    self.renderViewer();
  },
  initContainer: function initContainer() {
    var self = this;

    self.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function initViewer() {
    var self = this;
    var options = self.options;
    var parent = self.parent;
    var viewerData = void 0;

    if (options.inline) {
      self.parentData = viewerData = {
        width: Math.max(parent.offsetWidth, options.minWidth),
        height: Math.max(parent.offsetHeight, options.minHeight)
      };
    }

    if (self.fulled || !viewerData) {
      viewerData = self.containerData;
    }

    self.viewerData = extend({}, viewerData);
  },
  renderViewer: function renderViewer() {
    var self = this;

    if (self.options.inline && !self.fulled) {
      setStyle(self.viewer, self.viewerData);
    }
  },
  initList: function initList() {
    var self = this;
    var options = self.options;
    var element = self.element;
    var list = self.list;
    var items = [];

    each(self.images, function (image, i) {
      var src = image.src;
      var alt = image.alt || getImageName(src);
      var url = options.url;

      if (!src) {
        return;
      }

      if (isString(url)) {
        url = image.getAttribute(url);
      } else if (isFunction(url)) {
        url = url.call(image, image);
      }

      items.push('<li>' + '<img' + (' src="' + src + '"') + ' data-action="view"' + (' data-index="' + i + '"') + (' data-original-url="' + (url || src) + '"') + (' alt="' + alt + '"') + '>' + '</li>');
    });

    list.innerHTML = items.join('');

    each(getByTag(list, 'img'), function (image) {
      setData(image, 'filled', true);
      addListener(image, 'load', proxy(self.loadImage, self), true);
    });

    self.items = getByTag(list, 'li');

    if (options.transition) {
      addListener(element, 'viewed', function () {
        addClass(list, 'viewer-transition');
      }, true);
    }
  },
  renderList: function renderList(index) {
    var self = this;
    var i = index || self.index;
    var width = self.items[i].offsetWidth || 30;
    var outerWidth = width + 1; // 1 pixel of `margin-left` width

    // Place the active item in the center of the screen
    setStyle(self.list, {
      width: outerWidth * self.length,
      marginLeft: (self.viewerData.width - width) / 2 - outerWidth * i
    });
  },
  resetList: function resetList() {
    var self = this;

    empty(self.list);
    removeClass(self.list, 'viewer-transition');
    setStyle({
      marginLeft: 0
    });
  },
  initImage: function initImage(callback) {
    var self = this;
    var options = self.options;
    var image = self.image;
    var viewerData = self.viewerData;
    var footerHeight = self.footer.offsetHeight;
    var viewerWidth = viewerData.width;
    var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
    var oldImageData = self.imageData || {};

    getImageSize(image, function (naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var width = viewerWidth;
      var height = viewerHeight;

      if (viewerHeight * aspectRatio > viewerWidth) {
        height = viewerWidth / aspectRatio;
      } else {
        width = viewerHeight * aspectRatio;
      }

      width = Math.min(width * 0.9, naturalWidth);
      height = Math.min(height * 0.9, naturalHeight);

      var imageData = {
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        aspectRatio: aspectRatio,
        ratio: width / naturalWidth,
        width: width,
        height: height,
        left: (viewerWidth - width) / 2,
        top: (viewerHeight - height) / 2
      };
      var initialImageData = extend({}, imageData);

      if (options.rotatable) {
        imageData.rotate = oldImageData.rotate || 0;
        initialImageData.rotate = 0;
      }

      if (options.scalable) {
        imageData.scaleX = oldImageData.scaleX || 1;
        imageData.scaleY = oldImageData.scaleY || 1;
        initialImageData.scaleX = 1;
        initialImageData.scaleY = 1;
      }

      self.imageData = imageData;
      self.initialImageData = initialImageData;

      if (isFunction(callback)) {
        callback();
      }
    });
  },
  renderImage: function renderImage(callback) {
    var self = this;
    var image = self.image;
    var imageData = self.imageData;
    var transform = getTransform(imageData);

    setStyle(image, {
      width: imageData.width,
      height: imageData.height,
      marginLeft: imageData.left,
      marginTop: imageData.top,
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    });

    if (isFunction(callback)) {
      if (self.transitioning) {
        addListener(image, 'transitionend', callback, true);
      } else {
        callback();
      }
    }
  },
  resetImage: function resetImage() {
    var self = this;

    // this.image only defined after viewed
    if (self.image) {
      removeChild(self.image);
      self.image = null;
    }
  }
};

// Events
var PointerEvent = typeof window !== 'undefined' ? window.PointerEvent : null;
var EVENT_MOUSEDOWN = PointerEvent ? 'pointerdown' : 'touchstart mousedown';
var EVENT_MOUSEMOVE = PointerEvent ? 'pointermove' : 'mousemove touchmove';
var EVENT_MOUSEUP = PointerEvent ? 'pointerup pointercancel' : 'touchend touchcancel mouseup';
var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
var EVENT_KEYDOWN = 'keydown';
var EVENT_DRAGSTART = 'dragstart';
var EVENT_CLICK = 'click';
var EVENT_RESIZE = 'resize';
var EVENT_VIEW = 'view';
var EVENT_VIEWED = 'viewed';

var events = {
  bind: function bind() {
    var self = this;
    var options = self.options;
    var element = self.element;
    var viewer = self.viewer;

    if (isFunction(options.view)) {
      addListener(element, EVENT_VIEW, options.view);
    }

    if (isFunction(options.viewed)) {
      addListener(element, EVENT_VIEWED, options.viewed);
    }

    addListener(viewer, EVENT_CLICK, self.onClick = proxy(self.click, self));
    addListener(viewer, EVENT_WHEEL, self.onWheel = proxy(self.wheel, self));
    addListener(viewer, EVENT_DRAGSTART, self.onDragstart = proxy(self.dragstart, self));
    addListener(self.canvas, EVENT_MOUSEDOWN, self.onMousedown = proxy(self.mousedown, self));
    addListener(document, EVENT_MOUSEMOVE, self.onMousemove = proxy(self.mousemove, self));
    addListener(document, EVENT_MOUSEUP, self.onMouseup = proxy(self.mouseup, self));
    addListener(document, EVENT_KEYDOWN, self.onKeydown = proxy(self.keydown, self));
    addListener(window, EVENT_RESIZE, self.onResize = proxy(self.resize, self));
  },
  unbind: function unbind() {
    var self = this;
    var options = self.options;
    var element = self.element;
    var viewer = self.viewer;

    if (isFunction(options.view)) {
      removeListener(element, EVENT_VIEW, options.view);
    }

    if (isFunction(options.viewed)) {
      removeListener(element, EVENT_VIEWED, options.viewed);
    }

    removeListener(viewer, EVENT_CLICK, self.onClick);
    removeListener(viewer, EVENT_WHEEL, self.onWheel);
    removeListener(viewer, EVENT_DRAGSTART, self.onDragstart);
    removeListener(self.canvas, EVENT_MOUSEDOWN, self.onMousedown);
    removeListener(document, EVENT_MOUSEMOVE, self.onMousemove);
    removeListener(document, EVENT_MOUSEUP, self.onMouseup);
    removeListener(document, EVENT_KEYDOWN, self.onKeydown);
    removeListener(window, EVENT_RESIZE, self.onResize);
  }
};

var handlers = {
  start: function start(event) {
    var self = this;
    var e = getEvent(event);
    var target = e.target;

    if (target.tagName.toLowerCase() === 'img') {
      self.target = target;
      self.show();
    }
  },
  click: function click(event) {
    var self = this;
    var e = getEvent(event);
    var target = e.target;
    var action = getData(target, 'action');
    var imageData = self.imageData;

    switch (action) {
      case 'mix':
        if (self.played) {
          self.stop();
        } else if (self.options.inline) {
          if (self.fulled) {
            self.exit();
          } else {
            self.full();
          }
        } else {
          self.hide();
        }

        break;

      case 'view':
        self.view(getData(target, 'index'));
        break;

      case 'zoom-in':
        self.zoom(0.1, true);
        break;

      case 'zoom-out':
        self.zoom(-0.1, true);
        break;

      case 'one-to-one':
        self.toggle();
        break;

      case 'reset':
        self.reset();
        break;

      case 'prev':
        self.prev();
        break;

      case 'play':
        self.play();
        break;

      case 'next':
        self.next();
        break;

      case 'rotate-left':
        self.rotate(-90);
        break;

      case 'rotate-right':
        self.rotate(90);
        break;

      case 'flip-horizontal':
        self.scaleX(-imageData.scaleX || -1);
        break;

      case 'flip-vertical':
        self.scaleY(-imageData.scaleY || -1);
        break;

      default:
        if (self.played) {
          self.stop();
        }
    }
  },
  load: function load() {
    var self = this;
    var options = self.options;
    var image = self.image;
    var index = self.index;
    var viewerData = self.viewerData;

    if (self.timeout) {
      clearTimeout(self.timeout);
      self.timeout = false;
    }

    removeClass(image, 'viewer-invisible');

    image.style.cssText = 'width:0;' + 'height:0;' + ('margin-left:' + viewerData.width / 2 + 'px;') + ('margin-top:' + viewerData.height / 2 + 'px;') + 'max-width:none!important;' + 'visibility:visible;';

    self.initImage(function () {
      toggleClass(image, 'viewer-transition', options.transition);
      toggleClass(image, 'viewer-move', options.movable);

      self.renderImage(function () {
        self.viewed = true;
        dispatchEvent(self.element, 'viewed', {
          originalImage: self.images[index],
          index: index,
          image: image
        });
      });
    });
  },
  loadImage: function loadImage(event) {
    var e = getEvent(event);
    var image = e.target;
    var parent = image.parentNode;
    var parentWidth = parent.offsetWidth || 30;
    var parentHeight = parent.offsetHeight || 50;
    var filled = !!getData(image, 'filled');

    getImageSize(image, function (naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var width = parentWidth;
      var height = parentHeight;

      if (parentHeight * aspectRatio > parentWidth) {
        if (filled) {
          width = parentHeight * aspectRatio;
        } else {
          height = parentWidth / aspectRatio;
        }
      } else if (filled) {
        height = parentWidth / aspectRatio;
      } else {
        width = parentHeight * aspectRatio;
      }

      setStyle(image, {
        width: width,
        height: height,
        marginLeft: (parentWidth - width) / 2,
        marginTop: (parentHeight - height) / 2
      });
    });
  },
  resize: function resize() {
    var self = this;

    self.initContainer();
    self.initViewer();
    self.renderViewer();
    self.renderList();

    if (self.viewed) {
      self.initImage(function () {
        self.renderImage();
      });
    }

    if (self.played) {
      each(getByTag(self.player, 'img'), function (image) {
        addListener(image, 'load', proxy(self.loadImage, self), true);
        dispatchEvent(image, 'load');
      });
    }
  },
  wheel: function wheel(event) {
    var self = this;
    var e = getEvent(event);

    if (!self.viewed) {
      return;
    }

    e.preventDefault();

    // Limit wheel speed to prevent zoom too fast
    if (self.wheeling) {
      return;
    }

    self.wheeling = true;

    setTimeout(function () {
      self.wheeling = false;
    }, 50);

    var ratio = Number(self.options.zoomRatio) || 0.1;
    var delta = 1;

    if (e.deltaY) {
      delta = e.deltaY > 0 ? 1 : -1;
    } else if (e.wheelDelta) {
      delta = -e.wheelDelta / 120;
    } else if (e.detail) {
      delta = e.detail > 0 ? 1 : -1;
    }

    self.zoom(-delta * ratio, true, e);
  },
  keydown: function keydown(event) {
    var self = this;
    var e = getEvent(event);
    var options = self.options;
    var key = e.keyCode || e.which || e.charCode;

    if (!self.fulled || !options.keyboard) {
      return;
    }

    switch (key) {

      // (Key: Esc)
      case 27:
        if (self.played) {
          self.stop();
        } else if (options.inline) {
          if (self.fulled) {
            self.exit();
          }
        } else {
          self.hide();
        }

        break;

      // (Key: Space)
      case 32:
        if (self.played) {
          self.stop();
        }

        break;

      // View previous (Key: ←)
      case 37:
        self.prev();
        break;

      // Zoom in (Key: ↑)
      case 38:

        // Prevent scroll on Firefox
        e.preventDefault();

        self.zoom(options.zoomRatio, true);
        break;

      // View next (Key: →)
      case 39:
        self.next();
        break;

      // Zoom out (Key: ↓)
      case 40:

        // Prevent scroll on Firefox
        e.preventDefault();

        self.zoom(-options.zoomRatio, true);
        break;

      // Zoom out to initial size (Key: Ctrl + 0)
      case 48:
      // Fall through

      // Zoom in to natural size (Key: Ctrl + 1)
      // eslint-disable-next-line
      case 49:
        if (e.ctrlKey || e.shiftKey) {
          e.preventDefault();
          self.toggle();
        }

        break;

      // No default
    }
  },
  dragstart: function dragstart(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
      e.preventDefault();
    }
  },
  mousedown: function mousedown(event) {
    var self = this;
    var options = self.options;
    var pointers = self.pointers;
    var e = getEvent(event);

    if (!self.viewed) {
      return;
    }

    if (e.changedTouches) {
      each(e.changedTouches, function (touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      pointers[e.pointerId || 0] = getPointer(e);
    }

    var action = options.movable ? 'move' : false;

    if (Object.keys(pointers).length > 1) {
      action = 'zoom';
    } else if ((e.pointerType === 'touch' || e.type === 'touchmove') && self.isSwitchable()) {
      action = 'switch';
    }

    self.action = action;
  },
  mousemove: function mousemove(event) {
    var self = this;
    var options = self.options;
    var pointers = self.pointers;
    var e = getEvent(event);
    var action = self.action;
    var image = self.image;

    if (!self.viewed || !action) {
      return;
    }

    e.preventDefault();

    if (e.changedTouches) {
      each(e.changedTouches, function (touch) {
        extend(pointers[touch.identifier], getPointer(touch, true));
      });
    } else {
      extend(pointers[e.pointerId || 0], getPointer(e, true));
    }

    if (action === 'move' && options.transition && hasClass(image, 'viewer-transition')) {
      removeClass(image, 'viewer-transition');
    }

    self.change(e);
  },
  mouseup: function mouseup(event) {
    var self = this;
    var pointers = self.pointers;
    var e = getEvent(event);
    var action = self.action;

    if (!action) {
      return;
    }

    if (e.changedTouches) {
      each(e.changedTouches, function (touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[e.pointerId || 0];
    }

    if (!Object.keys(pointers).length) {
      if (action === 'move' && self.options.transition) {
        addClass(self.image, 'viewer-transition');
      }

      self.action = false;
    }
  }
};

var methods = {
  // Show the viewer (only available in modal mode)
  show: function show() {
    var self = this;
    var options = self.options;
    var element = self.element;

    if (options.inline || self.transitioning) {
      return self;
    }

    if (!self.ready) {
      self.build();
    }

    if (isFunction(options.show)) {
      addListener(element, 'show', options.show, true);
    }

    if (dispatchEvent(element, 'show') === false) {
      return self;
    }

    self.open();

    var viewer = self.viewer;

    removeClass(viewer, 'viewer-hide');
    addListener(element, 'shown', function () {
      self.view(self.target ? inArray(self.target, toArray$$1(self.images)) : self.index);
      self.target = false;
    }, true);

    if (options.transition) {
      self.transitioning = true;
      addClass(viewer, 'viewer-transition');
      forceReflow(viewer);
      addListener(viewer, 'transitionend', proxy(self.shown, self), true);
      addClass(viewer, 'viewer-in');
    } else {
      addClass(viewer, 'viewer-in');
      self.shown();
    }

    return self;
  },


  // Hide the viewer (only available in modal mode)
  hide: function hide() {
    var self = this;
    var options = self.options;
    var element = self.element;
    var viewer = self.viewer;

    if (options.inline || self.transitioning || !self.visible) {
      return self;
    }

    if (isFunction(options.hide)) {
      addListener(element, 'hide', options.hide, true);
    }

    if (dispatchEvent(element, 'hide') === false) {
      return self;
    }

    if (self.viewed && options.transition) {
      self.transitioning = true;
      addListener(self.image, 'transitionend', function () {
        addListener(viewer, 'transitionend', proxy(self.hidden, self), true);
        removeClass(viewer, 'viewer-in');
      }, true);
      self.zoomTo(0, false, false, true);
    } else {
      removeClass(viewer, 'viewer-in');
      self.hidden();
    }

    return self;
  },


  /**
   * View one of the images with image's index
   *
   * @param {Number} index
   */
  view: function view(index) {
    var self = this;
    var element = self.element;
    var title = self.title;
    var canvas = self.canvas;

    index = Number(index) || 0;

    if (!self.ready || !self.visible || self.played || index < 0 || index >= self.length || self.viewed && index === self.index) {
      return self;
    }

    var item = self.items[index];
    var img = getByTag(item, 'img')[0];
    var url = getData(img, 'originalUrl');
    var alt = img.getAttribute('alt');
    var image = document.createElement('img');

    image.src = url;
    image.alt = alt;

    if (dispatchEvent(element, 'view', {
      originalImage: self.images[index],
      index: index,
      image: image
    }) === false) {
      return self;
    }

    self.image = image;

    if (self.viewed) {
      removeClass(self.items[self.index], 'viewer-active');
    }

    addClass(item, 'viewer-active');

    self.viewed = false;
    self.index = index;
    self.imageData = null;

    addClass(image, 'viewer-invisible');
    empty(canvas);
    appendChild(canvas, image);

    // Center current item
    self.renderList();

    // Clear title
    empty(title);

    // Generate title after viewed
    addListener(element, 'viewed', function () {
      var imageData = self.imageData;

      setText(title, alt + ' (' + imageData.naturalWidth + ' \xD7 ' + imageData.naturalHeight + ')');
    }, true);

    if (image.complete) {
      self.load();
    } else {
      addListener(image, 'load', proxy(self.load, self), true);

      if (self.timeout) {
        clearTimeout(self.timeout);
      }

      // Make the image visible if it fails to load within 1s
      self.timeout = setTimeout(function () {
        removeClass(image, 'viewer-invisible');
        self.timeout = false;
      }, 1000);
    }

    return self;
  },


  // View the previous image
  prev: function prev() {
    var self = this;

    self.view(Math.max(self.index - 1, 0));

    return self;
  },


  // View the next image
  next: function next() {
    var self = this;

    self.view(Math.min(self.index + 1, self.length - 1));

    return self;
  },


  /**
   * Move the image with relative offsets
   *
   * @param {Number} offsetX
   * @param {Number} offsetY (optional)
   */
  move: function move(offsetX, offsetY) {
    var self = this;
    var imageData = self.imageData;

    self.moveTo(isUndefined(offsetX) ? offsetX : imageData.left + Number(offsetX), isUndefined(offsetY) ? offsetY : imageData.top + Number(offsetY));

    return self;
  },


  /**
   * Move the image to an absolute point
   *
   * @param {Number} x
   * @param {Number} y (optional)
   */
  moveTo: function moveTo(x, y) {
    var self = this;
    var imageData = self.imageData;

    // If "y" is not present, its default value is "x"
    if (isUndefined(y)) {
      y = x;
    }

    x = Number(x);
    y = Number(y);

    if (self.viewed && !self.played && self.options.movable) {
      var changed = false;

      if (isNumber(x)) {
        imageData.left = x;
        changed = true;
      }

      if (isNumber(y)) {
        imageData.top = y;
        changed = true;
      }

      if (changed) {
        self.renderImage();
      }
    }

    return self;
  },


  /**
   * Zoom the image with a relative ratio
   *
   * @param {Number} ratio
   * @param {Boolean} hasTooltip (optional)
   * @param {Event} _originalEvent (private)
   */
  zoom: function zoom(ratio, hasTooltip, _originalEvent) {
    var self = this;
    var imageData = self.imageData;

    ratio = Number(ratio);

    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }

    self.zoomTo(imageData.width * ratio / imageData.naturalWidth, hasTooltip, _originalEvent);

    return self;
  },


  /**
   * Zoom the image to an absolute ratio
   *
   * @param {Number} ratio
   * @param {Boolean} hasTooltip (optional)
   * @param {Event} _originalEvent (private)
   * @param {Boolean} _zoomable (private)
   */
  zoomTo: function zoomTo(ratio, hasTooltip, _originalEvent, _zoomable) {
    var self = this;
    var options = self.options;
    var pointers = self.pointers;
    var imageData = self.imageData;

    ratio = Math.max(0, ratio);

    if (isNumber(ratio) && self.viewed && !self.played && (_zoomable || options.zoomable)) {
      if (!_zoomable) {
        var minZoomRatio = Math.max(0.01, options.minZoomRatio);
        var maxZoomRatio = Math.min(100, options.maxZoomRatio);

        ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
      }

      if (ratio > 0.95 && ratio < 1.05) {
        ratio = 1;
      }

      var newWidth = imageData.naturalWidth * ratio;
      var newHeight = imageData.naturalHeight * ratio;

      if (_originalEvent) {
        var offset = getOffset(self.viewer);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };

        // Zoom from the triggering point of the event
        imageData.left -= (newWidth - imageData.width) * ((center.pageX - offset.left - imageData.left) / imageData.width);
        imageData.top -= (newHeight - imageData.height) * ((center.pageY - offset.top - imageData.top) / imageData.height);
      } else {
        // Zoom from the center of the image
        imageData.left -= (newWidth - imageData.width) / 2;
        imageData.top -= (newHeight - imageData.height) / 2;
      }

      imageData.width = newWidth;
      imageData.height = newHeight;
      imageData.ratio = ratio;
      self.renderImage();

      if (hasTooltip) {
        self.tooltip();
      }
    }

    return self;
  },


  /**
   * Rotate the image with a relative degree
   *
   * @param {Number} degree
   */
  rotate: function rotate(degree) {
    var self = this;

    self.rotateTo((self.imageData.rotate || 0) + Number(degree));

    return self;
  },


  /**
   * Rotate the image to an absolute degree
   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
   *
   * @param {Number} degree
   */
  rotateTo: function rotateTo(degree) {
    var self = this;
    var imageData = self.imageData;

    degree = Number(degree);

    if (isNumber(degree) && self.viewed && !self.played && self.options.rotatable) {
      imageData.rotate = degree;
      self.renderImage();
    }

    return self;
  },


  /**
   * Scale the image
   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
   *
   * @param {Number} scaleX
   * @param {Number} scaleY (optional)
   */
  scale: function scale(scaleX, scaleY) {
    var self = this;
    var imageData = self.imageData;

    // If "scaleY" is not present, its default value is "scaleX"
    if (isUndefined(scaleY)) {
      scaleY = scaleX;
    }

    scaleX = Number(scaleX);
    scaleY = Number(scaleY);

    if (self.viewed && !self.played && self.options.scalable) {
      var changed = false;

      if (isNumber(scaleX)) {
        imageData.scaleX = scaleX;
        changed = true;
      }

      if (isNumber(scaleY)) {
        imageData.scaleY = scaleY;
        changed = true;
      }

      if (changed) {
        self.renderImage();
      }
    }

    return self;
  },


  /**
   * Scale the abscissa of the image
   *
   * @param {Number} scaleX
   */
  scaleX: function scaleX(_scaleX) {
    var self = this;

    self.scale(_scaleX, self.imageData.scaleY);

    return self;
  },


  /**
   * Scale the ordinate of the image
   *
   * @param {Number} scaleY
   */
  scaleY: function scaleY(_scaleY) {
    var self = this;

    self.scale(self.imageData.scaleX, _scaleY);

    return self;
  },


  // Play the images
  play: function play() {
    var self = this;
    var options = self.options;
    var player = self.player;
    var load = proxy(self.loadImage, self);
    var list = [];
    var total = 0;
    var index = 0;

    if (!self.visible || self.played) {
      return self;
    }

    if (options.fullscreen) {
      self.requestFullscreen();
    }

    self.played = true;
    addClass(player, 'viewer-show');

    each(self.items, function (item, i) {
      var img = getByTag(item, 'img')[0];
      var image = document.createElement('img');

      image.src = getData(img, 'originalUrl');
      image.alt = img.getAttribute('alt');
      total++;

      addClass(image, 'viewer-fade');
      toggleClass(image, 'viewer-transition', options.transition);

      if (hasClass(item, 'viewer-active')) {
        addClass(image, 'viewer-in');
        index = i;
      }

      list.push(image);
      addListener(image, 'load', load, true);
      appendChild(player, image);
    });

    if (isNumber(options.interval) && options.interval > 0) {
      (function () {
        var playing = function playing() {
          self.playing = setTimeout(function () {
            removeClass(list[index], 'viewer-in');
            index++;
            index = index < total ? index : 0;
            addClass(list[index], 'viewer-in');

            playing();
          }, options.interval);
        };

        if (total > 1) {
          playing();
        }
      })();
    }

    return self;
  },


  // Stop play
  stop: function stop() {
    var self = this;
    var player = self.player;

    if (!self.played) {
      return self;
    }

    if (self.options.fullscreen) {
      self.exitFullscreen();
    }

    self.played = false;
    clearTimeout(self.playing);
    removeClass(player, 'viewer-show');
    empty(player);

    return self;
  },


  // Enter modal mode (only available in inline mode)
  full: function full() {
    var self = this;
    var options = self.options;
    var viewer = self.viewer;
    var image = self.image;
    var list = self.list;

    if (!self.visible || self.played || self.fulled || !options.inline) {
      return self;
    }

    self.fulled = true;
    self.open();
    addClass(self.button, 'viewer-fullscreen-exit');

    if (options.transition) {
      removeClass(image, 'viewer-transition');
      removeClass(list, 'viewer-transition');
    }

    addClass(viewer, 'viewer-fixed');
    viewer.setAttribute('style', '');
    setStyle(viewer, {
      zIndex: options.zIndex
    });

    self.initContainer();
    self.viewerData = extend({}, self.containerData);
    self.renderList();
    self.initImage(function () {
      self.renderImage(function () {
        if (options.transition) {
          setTimeout(function () {
            addClass(image, 'viewer-transition');
            addClass(list, 'viewer-transition');
          }, 0);
        }
      });
    });

    return self;
  },


  // Exit modal mode (only available in inline mode)
  exit: function exit() {
    var self = this;
    var options = self.options;
    var viewer = self.viewer;
    var image = self.image;
    var list = self.list;

    if (!self.fulled) {
      return self;
    }

    self.fulled = false;
    self.close();
    removeClass(self.button, 'viewer-fullscreen-exit');

    if (options.transition) {
      removeClass(image, 'viewer-transition');
      removeClass(list, 'viewer-transition');
    }

    removeClass(viewer, 'viewer-fixed');
    setStyle(viewer, {
      zIndex: options.zIndexInline
    });

    self.viewerData = extend({}, self.parentData);
    self.renderViewer();
    self.renderList();
    self.initImage(function () {
      self.renderImage(function () {
        if (options.transition) {
          setTimeout(function () {
            addClass(image, 'viewer-transition');
            addClass(list, 'viewer-transition');
          }, 0);
        }
      });
    });

    return self;
  },


  // Show the current ratio of the image with percentage
  tooltip: function tooltip() {
    var self = this;
    var options = self.options;
    var tooltipBox = self.tooltipBox;
    var imageData = self.imageData;

    if (!self.viewed || self.played || !options.tooltip) {
      return self;
    }

    setText(tooltipBox, Math.round(imageData.ratio * 100) + '%');

    if (!self.tooltiping) {
      if (options.transition) {
        if (self.fading) {
          dispatchEvent(tooltipBox, 'transitionend');
        }

        addClass(tooltipBox, 'viewer-show');
        addClass(tooltipBox, 'viewer-fade');
        addClass(tooltipBox, 'viewer-transition');
        forceReflow(tooltipBox);
        addClass(tooltipBox, 'viewer-in');
      } else {
        addClass(tooltipBox, 'viewer-show');
      }
    } else {
      clearTimeout(self.tooltiping);
    }

    self.tooltiping = setTimeout(function () {
      if (options.transition) {
        addListener(tooltipBox, 'transitionend', function () {
          removeClass(tooltipBox, 'viewer-show');
          removeClass(tooltipBox, 'viewer-fade');
          removeClass(tooltipBox, 'viewer-transition');
          self.fading = false;
        }, true);

        removeClass(tooltipBox, 'viewer-in');
        self.fading = true;
      } else {
        removeClass(tooltipBox, 'viewer-show');
      }

      self.tooltiping = false;
    }, 1000);

    return self;
  },


  // Toggle the image size between its natural size and initial size
  toggle: function toggle() {
    var self = this;

    if (self.imageData.ratio === 1) {
      self.zoomTo(self.initialImageData.ratio, true);
    } else {
      self.zoomTo(1, true);
    }

    return self;
  },


  // Reset the image to its initial state
  reset: function reset() {
    var self = this;

    if (self.viewed && !self.played) {
      self.imageData = extend({}, self.initialImageData);
      self.renderImage();
    }

    return self;
  },


  // Update viewer when images changed
  update: function update() {
    var self = this;
    var indexes = [];

    // Destroy viewer if the target image was deleted
    if (self.isImg && !self.element.parentNode) {
      return self.destroy();
    }

    self.length = self.images.length;

    if (self.ready) {
      each(self.items, function (item, i) {
        var img = getByTag(item, 'img')[0];
        var image = self.images[i];

        if (image) {
          if (image.src !== img.src) {
            indexes.push(i);
          }
        } else {
          indexes.push(i);
        }
      });

      setStyle(self.list, {
        width: 'auto'
      });

      self.initList();

      if (self.visible) {
        if (self.length) {
          if (self.viewed) {
            var index = inArray(self.index, indexes);

            if (index >= 0) {
              self.viewed = false;
              self.view(Math.max(self.index - (index + 1), 0));
            } else {
              addClass(self.items[self.index], 'viewer-active');
            }
          }
        } else {
          self.image = null;
          self.viewed = false;
          self.index = 0;
          self.imageData = null;
          empty(self.canvas);
          empty(self.title);
        }
      }
    }

    return self;
  },


  // Destroy the viewer
  destroy: function destroy() {
    var self = this;
    var element = self.element;

    if (self.options.inline) {
      self.unbind();
    } else {
      if (self.visible) {
        self.unbind();
      }

      removeListener(element, 'click', self.onStart);
    }

    self.unbuild();
    removeData(element, 'viewer');

    return self;
  }
};

var others = {
  open: function open() {
    var body = this.body;

    addClass(body, 'viewer-open');
    body.style.paddingRight = this.scrollbarWidth + 'px';
  },
  close: function close() {
    var body = this.body;

    removeClass(body, 'viewer-open');
    body.style.paddingRight = 0;
  },
  shown: function shown() {
    var self = this;
    var options = self.options;
    var element = self.element;

    self.transitioning = false;
    self.fulled = true;
    self.visible = true;
    self.render();
    self.bind();

    if (isFunction(options.shown)) {
      addListener(element, 'shown', options.shown, true);
    }

    dispatchEvent(element, 'shown');
  },
  hidden: function hidden() {
    var self = this;
    var options = self.options;
    var element = self.element;

    self.transitioning = false;
    self.viewed = false;
    self.fulled = false;
    self.visible = false;
    self.unbind();
    self.close();
    addClass(self.viewer, 'viewer-hide');
    self.resetList();
    self.resetImage();

    if (isFunction(options.hidden)) {
      addListener(element, 'hidden', options.hidden, true);
    }

    dispatchEvent(element, 'hidden');
  },
  requestFullscreen: function requestFullscreen() {
    var self = this;
    var documentElement = document.documentElement;

    if (self.fulled && !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen();
      } else if (documentElement.msRequestFullscreen) {
        documentElement.msRequestFullscreen();
      } else if (documentElement.mozRequestFullScreen) {
        documentElement.mozRequestFullScreen();
      } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
  },
  exitFullscreen: function exitFullscreen() {
    var self = this;

    if (self.fulled) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },
  change: function change(e) {
    var self = this;
    var pointers = self.pointers;
    var pointer = pointers[Object.keys(pointers)[0]];
    var offsetX = pointer.endX - pointer.startX;
    var offsetY = pointer.endY - pointer.startY;

    switch (self.action) {

      // Move the current image
      case 'move':
        self.move(offsetX, offsetY);
        break;

      // Zoom the current image
      case 'zoom':
        self.zoom(getMaxZoomRatio(pointers), false, e);
        break;

      case 'switch':
        self.action = 'switched';

        if (Math.abs(offsetX) > Math.abs(offsetY)) {
          if (offsetX > 1) {
            self.prev();
          } else if (offsetX < -1) {
            self.next();
          }
        }

        break;

      // No default
    }

    // Override
    each(pointers, function (p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  },
  isSwitchable: function isSwitchable() {
    var self = this;
    var imageData = self.imageData;
    var viewerData = self.viewerData;

    return self.length > 1 && imageData.left >= 0 && imageData.top >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
  }
};

var SUPPORT_TRANSITION = typeof document.createElement('viewer').style.transition !== 'undefined';
var AnotherViewer = void 0;

var Viewer = function () {
  function Viewer(element, options) {
    classCallCheck(this, Viewer);

    var self = this;

    self.element = element;
    self.options = extend({}, DEFAULTS, isPlainObject(options) && options);
    self.isImg = false;
    self.ready = false;
    self.visible = false;
    self.viewed = false;
    self.fulled = false;
    self.played = false;
    self.wheeling = false;
    self.playing = false;
    self.fading = false;
    self.tooltiping = false;
    self.transitioning = false;
    self.action = false;
    self.target = false;
    self.timeout = false;
    self.index = 0;
    self.length = 0;
    self.pointers = {};
    self.init();
  }

  createClass(Viewer, [{
    key: 'init',
    value: function init() {
      var self = this;
      var options = self.options;
      var element = self.element;

      if (getData(element, 'viewer')) {
        return;
      }

      setData(element, 'viewer', self);

      var isImg = element.tagName.toLowerCase() === 'img';
      var images = isImg ? [element] : getByTag(element, 'img');
      var length = images.length;

      if (!length) {
        return;
      }

      if (isFunction(options.ready)) {
        addListener(element, 'ready', options.ready, true);
      }

      // Override `transition` option if it is not supported
      if (!SUPPORT_TRANSITION) {
        options.transition = false;
      }

      self.isImg = isImg;
      self.length = length;
      self.count = 0;
      self.images = images;
      self.body = document.body;
      self.scrollbarWidth = window.innerWidth - document.body.clientWidth;

      if (options.inline) {
        (function () {
          var progress = proxy(self.progress, self);

          addListener(element, 'ready', function () {
            self.view();
          }, true);

          each(images, function (image) {
            if (image.complete) {
              progress();
            } else {
              addListener(image, 'load', progress, true);
            }
          });
        })();
      } else {
        addListener(element, 'click', self.onStart = proxy(self.start, self));
      }
    }
  }, {
    key: 'progress',
    value: function progress() {
      var self = this;

      self.count++;

      if (self.count === self.length) {
        self.build();
      }
    }
  }, {
    key: 'build',
    value: function build() {
      var self = this;
      var options = self.options;
      var element = self.element;

      if (self.ready) {
        return;
      }

      var template = document.createElement('div');
      var parent = void 0;
      var viewer = void 0;
      var button = void 0;
      var toolbar = void 0;
      var navbar = void 0;
      var title = void 0;

      template.innerHTML = TEMPLATE;

      self.parent = parent = element.parentNode;
      self.viewer = viewer = getByClass(template, 'viewer-container')[0];
      self.canvas = getByClass(viewer, 'viewer-canvas')[0];
      self.footer = getByClass(viewer, 'viewer-footer')[0];
      self.title = title = getByClass(viewer, 'viewer-title')[0];
      self.toolbar = toolbar = getByClass(viewer, 'viewer-toolbar')[0];
      self.navbar = navbar = getByClass(viewer, 'viewer-navbar')[0];
      self.button = button = getByClass(viewer, 'viewer-button')[0];
      self.tooltipBox = getByClass(viewer, 'viewer-tooltip')[0];
      self.player = getByClass(viewer, 'viewer-player')[0];
      self.list = getByClass(viewer, 'viewer-list')[0];

      addClass(title, !options.title ? 'viewer-hide' : getResponsiveClass(options.title));
      addClass(toolbar, !options.toolbar ? 'viewer-hide' : getResponsiveClass(options.toolbar));
      addClass(navbar, !options.navbar ? 'viewer-hide' : getResponsiveClass(options.navbar));
      toggleClass(button, 'viewer-hide', !options.button);

      toggleClass(toolbar.querySelector('.viewer-one-to-one'), 'viewer-invisible', !options.zoomable);
      toggleClass(toolbar.querySelectorAll('li[class*="zoom"]'), 'viewer-invisible', !options.zoomable);
      toggleClass(toolbar.querySelectorAll('li[class*="flip"]'), 'viewer-invisible', !options.scalable);

      if (!options.rotatable) {
        var rotates = toolbar.querySelectorAll('li[class*="rotate"]');

        addClass(rotates, 'viewer-invisible');
        appendChild(toolbar, rotates);
      }

      if (options.inline) {
        addClass(button, 'viewer-fullscreen');
        setStyle(viewer, {
          zIndex: options.zIndexInline
        });

        if (getStyle(parent).position === 'static') {
          setStyle(parent, {
            position: 'relative'
          });
        }
      } else {
        addClass(button, 'viewer-close');
        addClass(viewer, 'viewer-fixed');
        addClass(viewer, 'viewer-fade');
        addClass(viewer, 'viewer-hide');

        setStyle(viewer, {
          zIndex: options.zIndex
        });
      }

      // Inserts the viewer after to the current element
      parent.insertBefore(viewer, element.nextSibling);

      if (options.inline) {
        self.render();
        self.bind();
        self.visible = true;
      }

      self.ready = true;

      dispatchEvent(element, 'ready');
    }
  }, {
    key: 'unbuild',
    value: function unbuild() {
      var self = this;

      if (!self.ready) {
        return;
      }

      self.ready = false;
      removeChild(self.viewer);
    }
  }], [{
    key: 'noConflict',
    value: function noConflict() {
      window.Viewer = AnotherViewer;
      return Viewer;
    }
  }, {
    key: 'setDefaults',
    value: function setDefaults(options) {
      extend(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
  return Viewer;
}();

extend(Viewer.prototype, render$1);
extend(Viewer.prototype, events);
extend(Viewer.prototype, handlers);
extend(Viewer.prototype, methods);
extend(Viewer.prototype, others);

if (typeof window !== 'undefined') {
  AnotherViewer = window.Viewer;
  window.Viewer = Viewer;
}

return Viewer;

})));
//# sourceMappingURL=viewer.js.map
