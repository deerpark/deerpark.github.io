"use strict";var spy=new ScrollSpy("#nav",{nav:"#nav a",className:"active"}),site={};site.init=function(e){inView("#nav").once("enter",function(e){TweenLite.set(e,{y:-50}),TweenLite.to(e,.5,{opacity:1,y:0,delay:.5})}),inView("#footer").once("enter",function(e){TweenLite.set(e,{y:50}),TweenLite.to(e,.5,{opacity:1,y:0,delay:2.5})}),setTimeout(function(){inView(".section").on("enter",function(e){"profile"!=e.id&&1==$("#profile .section-icon").data("play")&&site.closeProfile(),TweenLite.set($(e).find(".section-icon"),{opacity:0,y:30}),TweenLite.set($(e).find(".title"),{opacity:0,y:20}),TweenLite.set($(e).find(".subtitle"),{opacity:0,y:15}),TweenLite.set($(e).find(".section-body"),{opacity:0}),TweenLite.to($(e).find(".section-icon"),.5,{opacity:1,y:0,delay:.5}),TweenLite.to($(e).find(".title"),.5,{opacity:1,y:0,delay:.7}),TweenLite.to($(e).find(".subtitle"),.5,{opacity:1,y:0,delay:.8}),TweenLite.to($(e).find(".section-body"),1,{opacity:1,delay:1})}).on("exit",function(e){TweenLite.set($(e).find(".section-icon"),{opacity:0,y:-30}),TweenLite.set($(e).find(".title"),{opacity:0,y:-20}),TweenLite.set($(e).find(".subtitle"),{opacity:0,y:-15}),TweenLite.set($(e).find(".section-body"),{opacity:0})})},1e3),e&&"function"==typeof e&&e()},site.openProfile=function(){var e="#profile .section-icon";$(e).data("play",-1),TweenLite.to($(e).find(".thumb img"),.5,{opacity:0,scale:2,delay:.4,ease:Power4.easeOut}),TweenLite.to($(e).find(".fa-close"),.3,{opacity:1,scale:1}),TweenLite.to($(e).find(".fa-play"),.2,{opacity:0,scale:0}),TweenLite.to($("#nav"),.3,{opacity:0,y:-50,delay:.2}),TweenLite.to($("#footer"),.3,{opacity:0,y:50,delay:.2}),TweenLite.to($("#profile .section-body"),.1,{opacity:1,y:174,delay:.3}),TweenLite.to($("#profile .subtitle"),.2,{opacity:1,y:174,delay:.5}),TweenLite.to($("#profile .title"),.3,{opacity:1,y:174,delay:.53}),TweenLite.to($(e),.2,{scale:1.2,delay:.7}),TweenLite.to($(e),.1,{scale:1,delay:.8}),TweenMax.staggerTo($(".pieces li"),.5,{cycle:{x:[0,140,200,140,0,-140,-200,-140],y:[-200,-140,0,140,200,140,0,-140]},opacity:1,delay:.6,ease:Power4.easeOut,onComplete:function(){$("#profile .section-icon").data("play",1)}},.03),TweenMax.staggerTo($(".pieces li img"),.5,{scale:1,opacity:1,delay:.9,ease:Power4.easeOut},.1)},site.closeProfile=function(){var e="#profile .section-icon";$(e).data("play",-1),TweenLite.to($(e).find(".thumb img"),.3,{opacity:1,scale:1,delay:.2,ease:Power4.easeOut}),TweenLite.to($(e).find(".fa-play"),.3,{opacity:1,scale:1}),TweenLite.to($(e).find(".fa-close"),.2,{opacity:0,scale:0}),TweenLite.to($(e),.2,{scale:1.2,delay:.2}),TweenLite.to($(e),.1,{scale:1,delay:.3}),TweenMax.staggerTo($(".pieces li"),.5,{x:0,y:0,opacity:0,delay:.2,ease:Power4.easeOut},.03),TweenLite.to($("#profile .title"),.1,{opacity:1,y:0,delay:.3}),TweenLite.to($("#profile .subtitle"),.2,{opacity:1,y:0,delay:.35}),TweenLite.to($("#profile .section-body"),.3,{opacity:1,y:0,delay:.55}),TweenLite.to($("#footer"),.3,{opacity:1,y:0,delay:.7}),TweenLite.to($("#nav"),.3,{opacity:1,y:0,delay:.7,onComplete:function(){TweenLite.set($(".pieces li img"),{scale:0,opacity:0}),$("#profile .section-icon").data("play",0)}})},$(function(){$(".thumb > img").each(function(){var e=$(this).parent().width(),t=$(this).parent().height(),i=$(this).width(),o=$(this).height(),a=e/t,n=i/o;n<a?($(this).width(e),$(this).height("auto"),$(this).css({bottom:(e/n-t)/2})):($(this).width("auto"),$(this).height(t),$(this).css({right:(t*n-e)/2}))}),$("#nav a").on("click",function(e){e.preventDefault();var t=this.hash;$("html,body").animate({scrollTop:$(t).offset().top},300)}),$("#profile .section-icon").data("play",0).on("click",function(e){e.preventDefault(),0==$(this).data("play")?site.openProfile():1==$(this).data("play")&&site.closeProfile()}),$(".lb-cancel").addClass("fa fa-spinner fa-pulse fa-3x fa-fw"),$(".lb-data .lb-close").addClass("fa fa-window-close"),setTimeout(function(){site.init(function(){window.scrollTo(0,1)})},1e3)});