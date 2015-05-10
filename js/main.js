$(function(){"use strict";var a=window.console||{log:function(){}},b=$(".docs-alert"),c=b.find(".message"),d=function(a,d){c.text(a),d&&c.addClass(d),b.fadeIn(),setTimeout(function(){b.fadeOut()},3e3)};!function(){var b=$(".img-container > img"),c=$("#dataX"),e=$("#dataY"),f=$("#dataHeight"),g=$("#dataWidth"),h=$("#dataRotate"),i={aspectRatio:16/9,preview:".img-preview",crop:function(a){c.val(Math.round(a.x)),e.val(Math.round(a.y)),f.val(Math.round(a.height)),g.val(Math.round(a.width)),h.val(Math.round(a.rotate))}};b.on({"build.cropper":function(b){a.log(b.type)},"built.cropper":function(b){a.log(b.type)},"dragstart.cropper":function(b){a.log(b.type,b.dragType)},"dragmove.cropper":function(b){a.log(b.type,b.dragType)},"dragend.cropper":function(b){a.log(b.type,b.dragType)},"zoomin.cropper":function(b){a.log(b.type)},"zoomout.cropper":function(b){a.log(b.type)}}).cropper(i),$(document.body).on("click","[data-method]",function(){var c,d,e=$(this).data();if(e.method){if(e=$.extend({},e),"undefined"!=typeof e.target&&(c=$(e.target),"undefined"==typeof e.option))try{e.option=JSON.parse(c.val())}catch(f){a.log(f.message)}if(d=b.cropper(e.method,e.option),"getCroppedCanvas"===e.method&&$("#getCroppedCanvasModal").modal().find(".modal-body").html(d),$.isPlainObject(d)&&c)try{c.val(JSON.stringify(d))}catch(f){a.log(f.message)}}}).on("keydown",function(a){if(!(this.scrollTop>300))switch(a.which){case 37:a.preventDefault(),b.cropper("move",-1,0);break;case 38:a.preventDefault(),b.cropper("move",0,-1);break;case 39:a.preventDefault(),b.cropper("move",1,0);break;case 40:a.preventDefault(),b.cropper("move",0,1)}});var j,k=$("#inputImage"),l=window.URL||window.webkitURL;l?k.change(function(){var a,c=this.files;c&&c.length&&(a=c[0],/^image\/\w+$/.test(a.type)?(j=l.createObjectURL(a),b.one("built.cropper",function(){l.revokeObjectURL(j)}).cropper("reset").cropper("replace",j),k.val("")):d("Please choose an image file."))}):k.parent().remove(),$(".docs-options :checkbox").on("change",function(){var a=$(this);i[a.val()]=a.prop("checked"),b.cropper("destroy").cropper(i)}),$('[data-toggle="tooltip"]').tooltip()}(),function(){$(".cropper-example-1 > img").cropper({aspectRatio:16/9,autoCropArea:.65,strict:!1,guides:!1,highlight:!1,dragCrop:!1,movable:!1,resizable:!1})}(),function(){var a,b,c=$("#cropper-example-2 > img");$("#cropper-example-2-modal").on("shown.bs.modal",function(){c.cropper({autoCropArea:.5,built:function(){c.cropper("setCropBoxData",a),c.cropper("setCanvasData",b)}})}).on("hidden.bs.modal",function(){a=c.cropper("getCropBoxData"),b=c.cropper("getCanvasData"),c.cropper("destroy")})}()});