"use strict";var app=app||{};app.circles=function(){var a;return{settings:{theBody:$("body")},init:function(){a=this.settings,this.createCircles()},createCircles:function(){a.theBody.on("click",function(a){var b=$(this),c=$("<div/>"),d=$("#circle-form"),e=d.val(),f=a.pageX,g=a.pageY;e.length&&(b.append(c.addClass("circle touchstart").text(e[0]).css({left:f,top:g})),d.val(function(a,b){return b.substr(1)}))})}}}(),$(function(){app.circles.init()});