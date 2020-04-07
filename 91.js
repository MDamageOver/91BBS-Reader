// ==UserScript==
// @name         91BBS.Reader
// @namespace    http://tampermonkey.net/
// @version      v2020-04-07-Alpha-0.1
// @description  91论坛的【91自拍达人原创申请】区域的阅读器
// @author       MDamageOver
// @source       https://github.com/MDamageOver/91BBS-Reader
// @include      /\S*\.wonderfulday\S*=19\S*/
// @include      /\S*\.wonderfulday\S*tid=/
// @grant        none
// @run-at       document-end
// @copyright    MDamageOver 2020-04-07
// @icon         http://h.wonderfulday28.live/favicon.ico
// ==/UserScript==

(() => {
    'use strict';

    class My91bbs {
        constructor() {
            this.PAGE_HREF = window.location.href;
            this.PAGESLIST_REG = /\S*\.wonderfulday\S*=19/;
            this.PAGE_REG = /\S*\.wonderfulday\S*viewthread\.php\?tid=/;
        }

        judgePageToDo() {
            const href = this.PAGE_HREF;
            if (this.PAGESLIST_REG.test(href)) {
                let style = `
                html{
                    font-size: 62.5%;
                }
                
                html>body{
                    background: black;
                }
                
                #threadlist>#moderate>.datatable{
                    display: block;
                    border: none;
                }
                
                #threadlist>#moderate>.datatable .folder,
                #threadlist>#moderate>.datatable .icon{
                    display: none;
                }
                
                #threadlist>#moderate>.datatable tr th img{
                    display: none;
                }
                
                #threadlist>#moderate>.datatable tbody{
                    display: block;
                    margin-top: .6rem;
                    padding: .6rem .6rem 1rem .6rem;
                    border-bottom: 0.3rem solid #444444;
                }
                
                #threadlist>#moderate>.datatable>tbody>tr{
                    display: block;
                    overflow: hidden;
                }
                
                #threadlist>#moderate>.datatable td,
                #threadlist>#moderate>.datatable th{
                    display: block;
                    padding: 0;
                    border: none;
                    background: black;
                }
                
                #threadlist>#moderate>.datatable>.colplural{
                    display: block;
                    background: black;
                    border-bottom: 1rem solid #444444;
                }
                #threadlist>#moderate>.datatable>.colplural a{
                    color: #4286F3;
                }
                
                #threadlist>#moderate>.datatable>.colplural th{
                    background: black;
                }
                
                #threadlist>#moderate>.datatable>.colplural th:first-child{
                    display: none;
                }
                
                #threadlist>#moderate>.datatable>.colplural>tr>td{
                    display: none;
                    background: black;
                }
                
                #threadlist>#moderate>.datatable>.colplural>tr .itemfilter .current a,
                #threadlist>#moderate>.datatable>.colplural>tr .itemfilter .current span{
                    background: #34A853;
                }
                
                #threadlist>#moderate>.datatable>tbody>tr a{
                    color:white;
                }
                
                #threadlist>#moderate>.datatable>tbody>tr .lastpost{
                    display: none;
                }
                #threadlist>#moderate>.datatable>tbody>tr>.subject{
                    margin: 1rem 0;
                }
                #threadlist>#moderate>.datatable>tbody>tr>.subject>span[alt]{
                    display: none;
                }
                
                #threadlist>#moderate>.datatable>tbody>tr .subject span a{
                    font-size: 2rem;
                    letter-spacing: .2rem;
                    line-height: 3rem;
                    font-weight: 900;
                }
                #threadlist>#moderate>.datatable>tbody>tr>.author{
                    float: left;
                    width:fit-content;
                }
                #threadlist>#moderate>.datatable>tbody>tr>.author cite{
                    display: inline;
                }
                #threadlist>#moderate>.datatable>tbody>tr>.nums{
                    float: right;
                    width:fit-content;
                }
                
                body>.pages_btns.s_clear{
                    padding: 0;
                    text-align: center;
                }
                
                .pages_btns.s_clear>.pages{
                    float: none;
                    overflow: hidden;
                    padding: 1.6rem;
                }
                
                .pages_btns.s_clear>.pages>strong{
                    border: none;
                    background: #FBBC05;
                    
                }
                
                .pages_btns.s_clear>.pages>a{
                    border: none;
                    background: #34A853;
                    color: white;
                }
                .pages_btns.s_clear>.pages>strong,
                .pages_btns.s_clear>.pages>a{
                    height: auto;
                    margin: 0  0 1.6rem 1.6rem;
                    padding: 2.1rem;
                    line-height: 2rem;
                    border-radius: 26%;
                    text-align: center;
                    font-size: 1.4rem;
                    font-weight: lighter;
                }
                
                .pages_btns.s_clear>#newspecial,
                .pages_btns.s_clear>.pageback{
                    display: none;
                }
                
                #toTopBtnDiv{
                    position: fixed;
                    width: 5.5rem;
                    height: 5.5rem;
                    border-radius: 100%;
                    background-color: rgb(138, 138, 138);
                    bottom: 5rem;
                    right: 2rem;
                    opacity: .6;
                    text-align: center;
                    line-height: 5.5rem;
                    font-size: 3rem;
                }
                #toTopBtnDiv:after{
                    content: "👆";
                }
        `;
                M91.rePage([
                    document.getElementById("threadlist"),
                    document.querySelector(".pages_btns.s_clear")
                ], style);
            } else if (this.PAGE_REG.test(href)) {
                let style = `
                html {
                    font-size: 62.5%;
                }
                
                html>body {
                    background: black;
                }
                
                html>body>#wrap {
                    width: auto;
                    background: black;
                }
                #wrap>.forumcontrol:first-child{
                    display: none;
                }
                #wrap>.forumcontrol>table{
                    display: block;
                    width: auto;
                    padding: 1.6rem;
                    background: #4285F4;
                }
                #wrap>.forumcontrol>table>tbody>tr>td>div,
                #wrap>.forumcontrol>table>tbody>tr>td>span{
                    float: none;
                }
                #wrap>.forumcontrol>table>tbody>tr>td strong{
                    border: none;
                    background: #FBBC05;
                }
                
                #wrap>.forumcontrol>table>tbody>tr>td a{
                    border: none;
                    background: #34A853;
                    color: white;
                }
                
                #wrap>.forumcontrol>table>tbody>tr>td strong,
                #wrap>.forumcontrol>table>tbody>tr>td a{
                    height: auto;
                    margin: 0 0 1.6rem 1.6rem;
                    padding: 2.1rem;
                    line-height: 2rem;
                    border-radius: 26%;
                    text-align: center;
                    font-size: 1.4rem;
                    font-weight: lighter;
                }
                
                
                #wrap>.forumcontrol>table>tbody>tr>td:first-child,
                #wrap>.forumcontrol>table>tbody>tr>td>.postbtn{
                    display: none;
                }
                #wrap>.forumcontrol>table>tbody>tr>td>.postbtn{
                
                }
                #wrap>#postlist>div{
                    margin-bottom: 2rem;
                    border-bottom: 1rem solid #4285F4;
                }
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage.firstpost>#threadtitle>a {
                    display: none;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo {
                    margin: 0;
                    padding-bottom: 1rem;
                    height: 3.5rem;
                    line-height: 3.5rem;
                    border-bottom: .5rem dashed #444;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong {
                    box-sizing: border-box;
                    float: left;
                    width: 75%;
                    height: 100%;
                    padding-right: 1rem;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>.posterinfo {
                    float: right;
                    width: 25%;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo .pagecontrol {
                    display: none;
                }
                
                #wrap>#postlist>div .postcontent>#threadstamp {
                    display: none;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>a {
                    float: none;
                    padding: .3rem;
                    border: 1px solid white;
                    border-radius: 15%;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>a:first-child {
                    border: none;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>.left {
                    float: right;
                    margin: 0;
                    padding: 0 .5rem;
                    text-align: center;
                    height: 3.5rem;
                    line-height: 3.5rem;
                    border: none;
                    color: white;
                    background: #4285F4;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>.rpostno {
                    float: none;
                    margin: 0;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>.rpostno>input {
                    padding: 0;
                    height: 3.5rem;
                    border: 1px solid white;
                    border-right: none;
                    border-radius: 15% 0 0 15%;
                    background: #444;
                    box-sizing: border-box;
                    vertical-align: bottom;
                    color: white;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>.rpostno>span {
                    border: 1px solid white;
                    display: inline-block;
                    box-sizing: border-box;
                    border-radius: 0 15% 15% 0;
                    height: 3.5rem;
                    line-height: 3rem;
                    font-size: 3rem;
                    background: #4285F4;
                    color: white;
                    vertical-align: bottom;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>a>em {
                    color: #EA4335;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo>strong>a>em>sup {
                    color: whitesmoke;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo .authorinfo {
                    font-size: 0;
                    color: #444;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo .authorinfo>a {
                    display: inline-block;
                    margin: 0;
                    padding: 0 .5rem;
                    border-radius: 15%;
                    color: white;
                    background: #4285F4;
                    font-size: 1rem;
                }
                
                #wrap>#postlist>div .postcontent>.postinfo .authorinfo img,
                #wrap>#postlist>div .postcontent>.postinfo .authorinfo em {
                    display: none;
                }
                
                #wrap>#postlist>div .postauthor {
                    width: auto;
                    margin: 1rem;
                    padding: 1rem;
                    overflow: hidden;
                    background: #111;
                    font-size: 0;
                    border-radius: 10%;
                    border: .5rem dotted #444;
                }
                #wrap>#postlist>div:first-of-type .postauthor{
                    border: .5rem solid #4285F4;
                    color: #4285F4;
                }
                
                #wrap>#postlist>div .postauthor>p,
                #wrap>#postlist>div .postauthor>a,
                #wrap>#postlist>div .postauthor img {
                    display: none;
                
                }
                
                #wrap>#postlist>div .postauthor>div {
                    float: left;
                    margin: 0 2rem 0 0;
                    height: 3rem;
                    line-height: 3rem;
                    border: none;
                    font-size: 1rem;
                }
                
                #wrap>#postlist>div:first-of-type .postauthor>div>a{
                    font-weight: bolder;
                    color: #EA4335;
                    font-size: 1.6rem;
                }
                
                #wrap>#postlist>div .postauthor>dl {
                    display: inline-block;
                    margin: 0;
                    font-size: 1rem
                }
                
                #wrap>#postlist>div .postauthor>dl>dt,
                #wrap>#postlist>div .postauthor>dl>dd {
                    width: auto;
                    margin: 0;
                }
                
                #wrap>#postlist>div .postauthor>dl>dt:before,
                #wrap>#postlist>div .postauthor>dl>dd:last-of-type:after {
                    content: "||";
                }
                
                #wrap>#postlist>div .postauthor>dl>dt:after {
                    content: "：";
                }
                
                #wrap>#postlist>div .postauthor>div P {
                    margin: 0;
                }
                
                #wrap>#postlist>div table,
                #wrap>#postlist>div table>tbody,
                #wrap>#postlist>div table>tbody>tr,
                #wrap>#postlist>div table>tbody>tr>td {
                    display: block;
                }
                
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix>table,
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix>table>tbody,
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix>table>tbody>tr,
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix>table>tbody>tr>td,
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix>table>tbody>tr>td span {
                    display: block;
                }
                
                #wrap>#postlist>div table>tbody>tr:nth-child(3),
                #wrap>#postlist>div table>tbody>tr:last-of-type{
                    display: none;
                }
                
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix img {
                    width: 100%;
                }
                #wrap>#postlist>div .postcontent>.defaultpost>.postmessage>.t_msgfontfix>div>dl{
                    width: 100%;
                }
                
                #wrap>#postlist>div .postcontent>.defaultpost .useraction {
                    display: none;
                }
                
                #wrap>#postlist>div .postcontent>.defaultpost #threadtitle {
                    border-bottom: .5rem dashed #444;
                }
                
                #wrap>#postlist>div .postcontent>.defaultpost #threadtitle>h1 {
                    margin-bottom: 2rem;
                    font-size: 2rem;
                    color: whitesmoke;
                }
                
                #toTopBtnDiv{
                    position: fixed;
                    width: 5.5rem;
                    height: 5.5rem;
                    border-radius: 100%;
                    background-color: rgb(138, 138, 138);
                    bottom: 5rem;
                    right: 2rem;
                    opacity: .6;
                    text-align: center;
                    line-height: 5.5rem;
                    font-size: 3rem;
                }
                #toTopBtnDiv:after{
                    content: "👆";
                }
        `;
                M91.rePage([
                    document.getElementById("wrap")
                ], style);
            }
        }

        rePage(addEles, pageStyle) {
            let body = document.querySelector("body"),
                html = document.querySelector("html"),
                newBody = document.createElement("body"),
                newStyle = document.createElement("style"),
                newFooter = document.createElement("div");

            for (let i = 0; i < addEles.length; i++) {
                newBody.appendChild(addEles[i]);
            }
         
            newStyle.innerHTML = pageStyle;
                      
            newBody.appendChild(this.toTopBtn());
            newBody.appendChild(newFooter);
            newBody.appendChild(newStyle);

            html.removeChild(body);

            html.appendChild(newBody);
        }

        toTopBtn() {
            let div = document.createElement("div");
            div.id = "toTopBtnDiv";

            div.addEventListener("click", () => {
                let rafId = void 0;
                let speed = 60;

                function myFrame() {
                    document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
                    if (document.documentElement.scrollTop <= 0) {
                        speed > 20 ? speed-=2 : speed = 20;
                        window.cancelAnimationFrame(rafId);
                    } else {
                        rafId = window.requestAnimationFrame(myFrame);
                    }
                }

                myFrame();
            }, false);

            return div;
        }

        addMeta() {
            let head = document.querySelector("head"),
                newLink=document.createElement("link"),
                newMeta = document.createElement("meta");

            newLink.rel="stylesheet";
            newLink.href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css";
            head.appendChild(newLink);

            newMeta.name = "viewport";
            newMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0";
            head = head.insertBefore(newMeta, head.childNodes[0]);

            return this;
        }
    }

    const M91 = new My91bbs();

    M91.addMeta().judgePageToDo();

})();