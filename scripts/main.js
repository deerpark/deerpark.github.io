"use strict";var spy=new ScrollSpy("#nav",{nav:"#nav a",className:"active"});$(function(){$("#nav a").on("click",function(a){a.preventDefault();var n=this.hash;$("html,body").animate({scrollTop:$(n).offset().top},300)})});