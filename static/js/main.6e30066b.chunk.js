(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[1],{72:function(e,s,c){},73:function(e,s,c){},74:function(e,s,c){},75:function(e,s,c){},76:function(e,s,c){},83:function(e,s,c){},84:function(e,s,c){},85:function(e,s,c){},86:function(e,s,c){},88:function(e,s){},96:function(e,s,c){"use strict";c.r(s);var t=c(4),a=c.n(t),i=c(56),l=c.n(i),n=(c(72),c(17)),r=c(7),j=(c(73),c(74),c(75),c(3)),o=c(36),d=c(29),b=c(13),m=c(41),h=(c(76),c(57)),x=c(58),O=c(59),u={eth:1},N="https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",g=new h.a({supportedChainIds:[u.eth]}),p=new x.a({infuraId:"9aa3d95b3bc440fa88ea12eaa4456161",bridge:"https://bridge.walletconnect.org",supportedChainIds:[u.mainnet],rpc:{1:N},qrcode:!0,pollingInterval:8e3}),f=new O.a({url:N,appName:"Halloween Bear",supportedChainIds:[u.eth,u.eth]}),v=c(25),y=c(23),w=c(22),k=c(1),S=["activate","connector","account","library"],C=function(e){var s=e.setIsWalletConnect,c=e.setWalletModal,a=e.walletModal,i=Object(r.f)(),l=Object(v.b)(),n=l.activate,h=(l.connector,l.account),x=(l.library,Object(d.a)(l,S),Object(t.useState)(0)),O=Object(b.a)(x,2),u=O[0],N=O[1];Object(t.useEffect)((function(){N(window.innerHeight)}),[window.innerHeight]);var C=function(){var e=Object(o.a)(Object(j.a)().mark((function e(t){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"metamask"!=t){e.next=15;break}return e.prev=2,e.next=5,n(g,void 0,!0,(function(e){return console.log(e)}));case 5:h?(s(!0),c(!1)):(s(!1),i("/dashboard")),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),s(!1),console.log(e.t0),w.NotificationManager.error(e.t0.message);case 13:e.next=41;break;case 15:if("walletconnect"!=t){e.next=29;break}return e.prev=16,e.next=19,n(p,void 0,!0,(function(e){return console.log(e)}));case 19:h?(s(!0),c(!1)):s(!1),i("/dashboard"),e.next=27;break;case 23:e.prev=23,e.t1=e.catch(16),console.log(e.t1),w.NotificationManager.error(e.t1.message);case 27:e.next=41;break;case 29:if("coinbase"!=t){e.next=41;break}return e.prev=30,e.next=33,n(f,void 0,!0,(function(e){return console.log(e)}));case 33:h?(s(!0),c(!1)):s(!1),i("/dashboard"),e.next=41;break;case 37:e.prev=37,e.t2=e.catch(30),console.log(e.t2),w.NotificationManager.error(e.t2.message);case 41:case"end":return e.stop()}}),e,null,[[2,8],[16,23],[30,37]])})));return function(s){return e.apply(this,arguments)}}();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"request-setting-modal-container ".concat(a?"modal-show":""),children:[Object(k.jsx)("div",{className:"request-setting-modal-bg",onClick:function(){return c(!1)}}),Object(k.jsxs)("div",{className:"request-setting-modal-body",style:{maxHeight:"".concat(u-150,"px")},children:[Object(k.jsx)("div",{className:"request-modal-header w-full m-auto p-5 ",children:Object(k.jsxs)("div",{className:"dis-f ai-c jc-sb w-full",children:[Object(k.jsx)("h4",{className:"white-color",children:"Connect"}),Object(k.jsx)("div",{onClick:function(){return c(!1)},className:"p-2 rounded-full cu-po",children:Object(k.jsx)(m.a,{className:"white-color",fontSize:"25px"})})]})}),Object(k.jsx)("div",{className:"p-10 w-full modal-content",children:Object(k.jsxs)("div",{className:"mt-6",children:[Object(k.jsx)("div",{className:"row flex-1",children:Object(k.jsx)("div",{className:"col-sm-12 col-md-12 mb-6",children:Object(k.jsxs)("div",{className:"rect-frame-modal w-full dis-f ai-c jc-sb",onClick:function(){return C("metamask")},children:[Object(k.jsx)("div",{className:"flex1",children:Object(k.jsx)("span",{className:"cu-po bold",children:"MetaMask"})}),Object(k.jsx)("div",{className:"rounded-full p-2 white-bg dis-f mr-4",children:Object(k.jsx)("img",{src:"/assets/wallet/metamask.png",alt:"",className:"",style:{width:"20px",height:"20px"}})}),Object(k.jsx)(y.a,{style:{color:"white",fontSize:"22px"}})]})})}),Object(k.jsx)("div",{className:"row flex-1",children:Object(k.jsx)("div",{className:"col-sm-12 col-md-12 mb-6",children:Object(k.jsxs)("div",{className:"rect-frame-modal w-full dis-f ai-c jc-sb",onClick:function(){return C("walletconnect")},children:[Object(k.jsx)("div",{className:"flex1",children:Object(k.jsx)("span",{className:"cu-po bold",children:"WalletConnect"})}),Object(k.jsx)("div",{className:"rounded-full p-2 white-bg dis-f mr-4",children:Object(k.jsx)("img",{src:"/assets/wallet/walletconnect.png",alt:"",className:"",style:{width:"20px",height:"20px"}})}),Object(k.jsx)(y.a,{style:{color:"white",fontSize:"22px"}})]})})}),Object(k.jsx)("div",{className:"row flex-1",children:Object(k.jsx)("div",{className:"col-sm-12 col-md-12 mb-6",children:Object(k.jsxs)("div",{className:"rect-frame-modal w-full dis-f ai-c jc-sb",onClick:function(){return C("coinbase")},children:[Object(k.jsx)("div",{className:"flex1",children:Object(k.jsx)("span",{className:"cu-po bold",children:"Coinbase\xa0Wallet"})}),Object(k.jsx)("div",{className:"rounded-full p-2 white-bg dis-f mr-4",children:Object(k.jsx)("img",{src:"/assets/wallet/coinbase.png",alt:"",className:"",style:{width:"20px",height:"20px"}})}),Object(k.jsx)(y.a,{style:{color:"white",fontSize:"22px"}})]})})})]})})]})]})})},D=["activate","connector","chainId","account","library"],T=function(){var e=Object(t.useState)(!1),s=Object(b.a)(e,2),c=s[0],a=s[1],i=Object(t.useState)(!1),l=Object(b.a)(i,2),h=l[0],x=l[1],O=Object(t.useState)(),u=Object(b.a)(O,2),N=u[0],g=u[1],p=Object(t.useState)(!1),f=Object(b.a)(p,2),S=f[0],T=f[1],U=Object(t.useState)(!1),A=Object(b.a)(U,2),F=A[0],I=A[1],E=Object(r.f)(),W=Object(v.b)(),M=(W.activate,W.connector,W.chainId,W.account),P=(W.library,Object(d.a)(W,D),function(){var e=Object(o.a)(Object(j.a)().mark((function e(s){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=s.slice(0,6)+"..."+s.slice(-3),g(c),a(!1);case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}());return Object(t.useEffect)((function(){M?(P(M),T(!0)):T(!1)}),[M]),Object(k.jsxs)("header",{className:"white",children:[Object(k.jsx)("div",{className:"container dis-f",children:Object(k.jsxs)("div",{className:"dis-f ai-c jc-sb mobile-just-start gap-2 w-full",children:[Object(k.jsx)("div",{className:"dis-f ai-c jc-s header-container flex1",children:Object(k.jsx)(n.b,{to:"/",children:Object(k.jsx)("div",{className:"logo-container",children:Object(k.jsx)("img",{title:"Arbitrage Plus | Trading Bot",src:"/url-logo.png",alt:"",className:"site-logo"})})})}),Object(k.jsxs)("div",{className:"".concat(h?"hamburger-box":""," justify mo-dis-none\n\t\t\t\t\t"),children:[Object(k.jsx)("div",{className:"".concat(h?"hamburger-cancel-container":""," dis-n"),children:Object(k.jsx)(m.a,{onClick:function(){return x(!1)},className:"cu-po hamburger-cancel-btn black-color",fontSize:"35px"})}),Object(k.jsxs)("ul",{className:"hamburger justify li-none-style",children:[Object(k.jsx)("li",{onClick:function(){M?E("/dashboard"):w.NotificationManager.error("You have to connect wallet","ERROR")},className:"hamburger-list",children:Object(k.jsx)("a",{href:"#",className:"",children:"Account"})}),Object(k.jsx)("li",{className:"hamburger-list",children:Object(k.jsx)(n.b,{to:"/",children:"Contract"})}),Object(k.jsx)("li",{className:"hamburger-list",children:Object(k.jsx)(n.b,{to:"/",children:"Whitepaper"})})]})]}),Object(k.jsxs)("div",{className:"flex1 dis-f ai-c jc-e",children:[Object(k.jsx)("div",{onClick:function(){return x(!1)},className:"".concat(h?"hamburger-bg":""," dis-n")}),N&&N.length<=0||!1===S?Object(k.jsxs)("button",{onClick:function(){return a(!0)},className:"btn white-bg grey-color wallet-connect-btn ",style:{borderRadius:"10px",padding:"7px 40px",gap:"10px"},children:[Object(k.jsx)("h6",{className:"mauto",children:"CONNECT"}),Object(k.jsx)(y.a,{className:"mauto",style:{fontSize:"20px",fontWeight:"bold"}})]}):Object(k.jsxs)("div",{className:"connected-btn",children:[Object(k.jsxs)("button",{onClick:function(){I(!F)},className:"btn white-bg grey-color wallet-connect-btn",style:{borderRadius:"10px",padding:"7px 40px",gap:"10px"},children:[Object(k.jsx)("h6",{className:"mauto",children:N}),Object(k.jsx)(y.a,{className:"mauto",style:{fontSize:"20px",fontWeight:"bold"}})]}),F&&Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("button",{onClick:function(){T(!1),I(!F)},className:"disconnect-drop",children:[Object(k.jsx)("h5",{className:"mauto",children:"Disconnect"}),Object(k.jsx)(y.b,{className:"mauto",style:{fontSize:"20px",fontWeight:"bold"}})]})})]})]})]})}),c&&Object(k.jsx)(C,{setIsWalletConnect:T,walletModal:c,setWalletModal:a})]})},U=(c(83),function(){return Object(k.jsx)("footer",{className:"res-pt6 res-pb6 white-color",children:Object(k.jsx)("section",{className:"container",children:Object(k.jsxs)("div",{className:"row mobile-p2rem",children:[Object(k.jsxs)("div",{className:"top-line col-sm-12 col-md-6 col-lg-6 mb-6 flex flex-col gap-8",children:[Object(k.jsxs)("div",{className:"flex items-center justify-start gap-2",children:[Object(k.jsx)("br",{}),Object(k.jsx)("h1",{className:"grey-color",children:"Community"}),Object(k.jsx)("h4",{className:"grey-color mo-dis-none",children:"Join Arbitrage Plus thriving community on..."})]}),Object(k.jsxs)("div",{className:"social-link-container gap-4 mt-8",children:[Object(k.jsx)("h4",{className:"grey-color social-link",children:Object(k.jsx)("a",{href:"",className:"grey-color",children:"Telegram"})}),Object(k.jsx)("h4",{className:"grey-color social-link",children:Object(k.jsx)("a",{href:"",className:"grey-color",children:"Discord"})}),Object(k.jsx)("h4",{className:"grey-color social-link",children:Object(k.jsx)("a",{href:"",className:"grey-color",children:"Twitter"})}),Object(k.jsx)("h4",{className:"grey-color social-link",children:Object(k.jsx)("a",{href:"",className:"grey-color",children:"Medium"})})]})]}),Object(k.jsxs)("div",{className:"top-line col-sm-12 col-md-6 col-lg-6 mb-6",children:[Object(k.jsx)("br",{}),Object(k.jsx)("h1",{className:"grey-color",children:"Tutorials"}),Object(k.jsxs)("div",{className:"",children:[Object(k.jsxs)("h4",{className:"grey-color ",children:["Stuck? Check out our tutorials on"," ",Object(k.jsx)("span",{className:"underline",children:"Arbitrage Plus Academy."}),Object(k.jsxs)("span",{className:"desktop-none",children:[" ","Still can't find what you're looking for?"]})]}),Object(k.jsx)("br",{className:"desktop-none"}),Object(k.jsx)("div",{className:" mt-8 desktop-none ",children:Object(k.jsx)("h4",{className:"grey-color underline",children:Object(k.jsx)("a",{href:"arbitrageplus@protonmail.com",children:"Contact us"})})}),Object(k.jsxs)("div",{className:"contactus mt-8",children:[Object(k.jsx)("h4",{className:"grey-color",children:"Still can't find what you're looking for?"}),Object(k.jsx)("h4",{className:"grey-color underline",children:Object(k.jsx)("a",{href:"arbitrageplus@protonmail.com grey-color underline",children:"Contact us"})})]})]})]})]})})})}),A=(c(84),function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(T,{}),Object(k.jsx)("main",{children:e.children}),Object(k.jsx)(U,{})]})}),F=(c(85),function(){return Object(k.jsxs)(A,{children:[Object(k.jsx)("section",{className:"exchange-section",children:Object(k.jsx)("div",{className:"container home-container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsxs)("div",{className:"col-sm-12 col-md-6 mb-9",children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("h1",{className:"font-bold big-font",children:Object(k.jsxs)("div",{className:"",children:["Earn 1% daily ",Object(k.jsx)("br",{className:"mo-dis-none"}),"passive income",Object(k.jsx)("br",{className:"mo-dis-none"})]})}),Object(k.jsx)("div",{className:"mt-10 mo-dis-none"}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsxs)("h4",{className:" tl",children:[Object(k.jsxs)("div",{className:"dis-f ai-s jc-s gap-4 mt-2",children:[Object(k.jsx)("span",{className:"",children:" \u2714 "}),Object(k.jsxs)("div",{className:"",children:["Arbitrage bot trading generates profits for investors",Object(k.jsx)("br",{className:""})]})]}),Object(k.jsxs)("div",{className:"dis-f ai-s jc-s gap-4 mt-2",children:[Object(k.jsx)("span",{className:"",children:" \u2714 "}),Object(k.jsxs)("div",{className:"",children:["Daily income paid directly to your wallet",Object(k.jsx)("br",{className:""})]})]}),Object(k.jsxs)("div",{className:"dis-f ai-s jc-s gap-4 mt-2",children:[Object(k.jsx)("span",{className:"",children:" \u2714 "}),Object(k.jsxs)("div",{className:"",children:["Zero fees",Object(k.jsx)("br",{className:""})]})]})]})]}),Object(k.jsx)("div",{className:"col-sm-12 col-md-6 mb-9",children:Object(k.jsx)("img",{src:"/assets/images/exchange/exchange-section.webp",className:"w-full m-auto exchange-img",alt:""})})]})})}),Object(k.jsx)("section",{className:"icon-section pt-4 ",children:Object(k.jsx)("div",{className:"container icon-container ",children:Object(k.jsxs)("div",{className:"row py-6 ",children:[Object(k.jsx)("div",{className:"col-md-4 mb-10 tl jc-c dis-f",children:Object(k.jsxs)("div",{className:"dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c table-fd-c",children:[Object(k.jsx)("img",{src:"/assets/images/exchange/exchange.svg",alt:"",className:""}),Object(k.jsxs)("div",{className:"tl mo-tc",children:[Object(k.jsx)("h4",{className:"nobold",children:"Exchange"}),Object(k.jsx)("span",{className:"icon-grey-color mt-1",children:"Arbitrage\xa0differences"})]})]})}),Object(k.jsx)("div",{className:"col-md-4 mb-10 tl jc-c dis-f",children:Object(k.jsxs)("div",{className:"dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c table-fd-c",children:[Object(k.jsx)("img",{src:"/assets/images/exchange/market.svg",alt:"",className:""}),Object(k.jsxs)("div",{className:"tl mo-tc",children:[Object(k.jsx)("h4",{className:"nobold",children:"Market"}),Object(k.jsx)("span",{className:"icon-grey-color mt-1",children:"Arbitrage"})]})]})}),Object(k.jsx)("div",{className:"col-md-4 mb-10 tl jc-c dis-f",children:Object(k.jsxs)("div",{className:"dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c table-fd-c",children:[Object(k.jsx)("img",{src:"/assets/images/exchange/profit.svg",alt:"",className:""}),Object(k.jsxs)("div",{className:"tl mo-tc",children:[Object(k.jsx)("h4",{className:"nobold",children:"Profit"}),Object(k.jsx)("span",{className:"icon-grey-color mt-1",children:"From price"})]})]})})]})})}),Object(k.jsx)("section",{className:"cross-section",children:Object(k.jsx)("div",{className:"container home-container ",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-6 mb-9",children:Object(k.jsx)("img",{src:"/assets/images/cross/cross.webp",className:"w-full m-auto",alt:""})}),Object(k.jsxs)("div",{className:"col-sm-12 col-md-6 mb-9 dis-f ai-s jc-c fd-c",children:[Object(k.jsx)("span",{className:"primary-color",children:"Risk-free profits"}),Object(k.jsx)("br",{}),Object(k.jsx)("h2",{className:"font-bold",children:Object(k.jsxs)("div",{className:"",children:["Exchange Arbitrage,",Object(k.jsx)("br",{className:"mo-dis-none"}),"without withdrawls",Object(k.jsx)("br",{className:"mo-dis-none"})]})}),Object(k.jsx)("div",{className:"mt-4"}),Object(k.jsx)("h5",{className:"grey-color",children:"Our crypto bots execute profitable arbitrage trades between exchanges without sending funds from one exchange to another. This allows our proprietary bots to buy and sell cryptocurrencies simultaneously and profit from the price difference instantly. We remove the risk entirely from arbitrage trading."})]})]})})}),Object(k.jsx)("section",{className:"intro-section pt-4 ",children:Object(k.jsx)("div",{className:"container intro-container",children:Object(k.jsx)("div",{className:"",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-4 mb-4 h-10",children:Object(k.jsxs)("div",{className:"security-card frame-div p-7",children:[Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h1",{className:"opacity-20",children:"01"})}),Object(k.jsx)("div",{children:Object(k.jsx)("h4",{className:"black-color",children:"Arbitrage Trading Bot"})}),Object(k.jsx)("div",{children:Object(k.jsx)("span",{className:"black-color",children:"Arbitrage Plus is a proprietary trading bot that will generate profits for investors via risk-free exchange & triangular arbitrage. Arbitrage Plus earns about 2-3% daily, and we distribute 1% daily returns to our investors."})})]})}),Object(k.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-4 mb-4 h-10",children:Object(k.jsxs)("div",{className:"security-card frame-div p-7",children:[Object(k.jsx)("h1",{className:"opacity-20",children:"02"}),Object(k.jsx)("h4",{className:"black-color",children:"Daily Income"}),Object(k.jsx)("span",{className:"black-color",children:"Arbitrage Plus automatically pays out 1% daily returns, including the weekends, as our bots are running 24/7. You have the option to manually transfer your profits to your stake to compound your returns."}),Object(k.jsx)("br",{})]})}),Object(k.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-4 mb-4 h-10",children:Object(k.jsxs)("div",{className:"security-card frame-div p-7",children:[Object(k.jsx)("h1",{className:"opacity-20",children:"03"}),Object(k.jsx)("h4",{className:"black-color",children:"Zero Fees"}),Object(k.jsxs)("span",{className:"black-color",children:["We believe that passive income is for everyone. You shouldn't have to pay crazy high fees. Arbitrage Plus is 100% free to use. You're welcome!",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})]})})]})})})}),Object(k.jsx)("section",{className:"font-section pt-4 ",children:Object(k.jsx)("div",{className:"container intro-container",children:Object(k.jsx)("div",{className:"dis-f",children:Object(k.jsx)("div",{className:"row big-font",children:"Experience bot trading that works"})})})}),Object(k.jsx)("section",{className:"exp-section pb-4",children:Object(k.jsxs)("div",{className:"container exp-container",children:[Object(k.jsxs)("div",{className:"exp-row exp-rou-1",children:[Object(k.jsxs)("div",{className:"part h10",children:[Object(k.jsx)("h4",{className:"px-8",children:"Exchange Arbitrage"}),Object(k.jsx)("span",{className:"black-color mt-4 px-8",style:{fontSize:"20px"},children:"Exchange arbitrage involves trading virtual currencies across two different exchange platforms. Exchange arbitrage is a straightforward way of conducting crypto arbitrage. This is the basic form of arbitrage trading, where a trader tries to generate profit by buying crypto on one exchange and selling it on another exchange at a higher price."})]}),Object(k.jsx)("div",{className:"flex1 h10",children:Object(k.jsx)("div",{className:"h10 exp-background",style:{background:"url(/assets/images/exp/ai.png)"}})})]}),Object(k.jsxs)("div",{className:"exp-row exp-rou-2",children:[Object(k.jsx)("div",{className:"flex1 h10",children:Object(k.jsx)("div",{className:"h10 exp-background",style:{background:"url(/assets/images/exp/price.png)"}})}),Object(k.jsxs)("div",{className:"part h10",children:[Object(k.jsx)("h4",{className:"px-8",children:"Triangular Arbitrage"}),Object(k.jsx)("span",{className:"black-color mt-4 px-8",style:{fontSize:"20px"},children:"Triangular arbitrage takes advantage of pricing inefficiencies among different pairs of cryptocurrencies on the same exchange. With this strategy, an investor starts with one cryptocurrency and then trades it for another cryptocurrency on that same exchange \u2014 one which is undervalued relative to the first crypto. The investor would then trade that second cryptocurrency for a third cryptocurrency which is relatively overvalued when compared with the first. Finally, the investor would trade that third cryptocurrency for the first crypto, completing the circuit potentially a little richer."})]})]}),Object(k.jsxs)("div",{className:"exp-row exp-rou-3",children:[Object(k.jsxs)("div",{className:"part h10",children:[Object(k.jsx)("h4",{className:"px-8",children:"Proprietary HFT Grid Bot"}),Object(k.jsx)("span",{className:"black-color mt-4 px-8",style:{fontSize:"20px"},children:"Generate profit from small price fluctuations as the market moves sideways. Most markets are moving sideways most of the time, while strong price moves are usually short-lived. GRID trading allows making a continuous profit when other strategies fail to make any profit at all! This, combined with our arbitrage bots, allows us to generate profits continuously regardless of what the markets are doing."})]}),Object(k.jsx)("div",{className:"flex1 h10",children:Object(k.jsx)("div",{className:"h10 exp-background",style:{background:"url(/assets/images/exp/liquidity.png)"}})})]})]})})]})}),I=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:" fixed top-0 bottom-0 right-0 left-0 bg-[#F6F6F6] overflow-auto",children:Object(k.jsx)("section",{className:"container mx-auto flex flex-col roulette-container mb-10",children:Object(k.jsxs)("div",{className:"sm:mt-32 text-center mx-auto",children:[Object(k.jsx)("img",{src:"/assets/page-not-found.svg",alt:"",width:"400px",height:"400px"}),Object(k.jsx)("h1",{className:"text-blue-500 mb-4",children:"Page Not Found (404)"}),Object(k.jsx)(n.b,{to:"/",children:Object(k.jsx)("a",{className:"underline text-black hover:text-red-500",children:"Return to homepage."})})]})})})})},E=(c(86),["activate","connector","account","library"]),W=function(){var e=Object(r.f)(),s=Object(t.useState)([{asset:"USDT",type:"type",date:"10/25/2022",amount:"9814",desination:"desination",txid:"28721"},{asset:"USDT",type:"type",date:"10/25/2022",amount:"9814",desination:"desination",txid:"28721"},{asset:"USDT",type:"type",date:"10/25/2022",amount:"9814",desination:"desination",txid:"28721"},{asset:"USDC",type:"type",date:"10/25/2022",amount:"9814",desination:"desination",txid:"28721"},{asset:"USDC",type:"type",date:"10/25/2022",amount:"9814",desination:"desination",txid:"28721"}]),c=Object(b.a)(s,2),a=c[0],i=(c[1],Object(t.useState)([{date:"15th August, 2022",content:"USDC token launched on stable fund for staking"},{date:"15th August, 2022",content:"USDC token launched on stable fund for staking"},{date:"15th August, 2022",content:"USDC token launched on stable fund for staking"}])),l=Object(b.a)(i,2),n=l[0],j=(l[1],Object(v.b)()),o=(j.activate,j.connector,j.account);j.library,Object(d.a)(j,E);Object(t.useEffect)((function(){o||e("/")}),[]);var m=Object(t.useState)(!0),h=Object(b.a)(m,2),x=h[0],O=h[1],u=Object(t.useState)(!0),N=Object(b.a)(u,2),g=N[0],p=N[1];return Object(k.jsx)(A,{children:Object(k.jsx)("section",{className:"dashboard-section",children:Object(k.jsxs)("div",{className:"dashboard-container",children:[Object(k.jsxs)("div",{className:"info-container",children:[Object(k.jsxs)("div",{className:"",children:[Object(k.jsx)("h5",{className:"grey-color",children:"Hello!"}),Object(k.jsxs)("div",{className:"justify-js w0 mo-w10 mt-6 gap-2 mo-tc",children:[Object(k.jsx)("h1",{children:"$0.00"}),Object(k.jsx)("h5",{className:"grey-color",children:"Total Balance"})]})]}),Object(k.jsxs)("div",{className:"daily-box mt-2",children:[Object(k.jsx)("h4",{children:"Earn 1% Interest Daily"}),Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"justify-js",children:[Object(k.jsx)("div",{className:"justify gap-2 tc w10",children:Object(k.jsxs)("div",{className:"justify gap-2",children:[Object(k.jsx)("h5",{className:"w10 tc",children:"with Token"}),Object(k.jsx)("img",{style:{height:"100%",width:"30px"},src:"/assets/images/dashboard/USDT.svg",alt:""}),Object(k.jsx)("img",{style:{height:"100%",width:"28px"},src:"/assets/images/dashboard/USDC.svg",alt:""})]})}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("img",{src:"/assets/images/dashboard/wallet.svg",alt:""})})]})]})]}),Object(k.jsx)("br",{className:"mo-dis-none"}),Object(k.jsx)("br",{className:"mo-dis-none"}),Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-6 mb-9",children:Object(k.jsxs)("div",{className:"get-start",children:[Object(k.jsxs)("div",{className:"get-start-body",children:[Object(k.jsxs)("div",{className:"w10 justify-s",children:[Object(k.jsxs)("div",{className:"w0 justify-js gap-2",children:[Object(k.jsx)("div",{className:"crypto-logo",children:Object(k.jsx)("img",{src:"/assets/images/dashboard/USDC.svg",alt:"USDC"})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{children:"USDC"}),Object(k.jsx)("h6",{className:"grey-color",children:"$0.0000"})]})]}),!x&&Object(k.jsx)("div",{className:"",children:Object(k.jsx)("img",{src:"/assets/images/dashboard/emoticon-2.png",style:{width:"100px"},alt:"",className:""})})]}),x?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"mt-12",children:Object(k.jsx)("h5",{className:"site-lite-color",children:"Start Earning 1% interest on your USDC daily"})}),Object(k.jsxs)("div",{className:"justify-s",children:[Object(k.jsx)("h5",{className:"",children:"Didn't start yet?"}),Object(k.jsx)("img",{className:"emoticon",src:"/assets/images/dashboard/emoticon.png",alt:""})]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"justify-js font18 mt-4",children:Object(k.jsx)("h5",{children:"Deposit amount"})}),Object(k.jsx)("div",{className:"justify-js mt-4",children:Object(k.jsx)("input",{type:"text",className:"stake-input"})})]}),Object(k.jsx)("div",{className:"mt-8",children:x?Object(k.jsx)("button",{onClick:function(){return O(!1)},className:"w-full",children:Object(k.jsx)("h5",{children:"Get Started"})}):Object(k.jsxs)("div",{className:"justify-js gap-4",children:[Object(k.jsx)("button",{className:"w-full withdrow-btn",children:Object(k.jsx)("h5",{children:"Withdraw"})}),Object(k.jsx)("button",{className:"w-full",children:Object(k.jsx)("h5",{children:"Deposit"})})]})})]}),Object(k.jsx)("div",{className:"get-start-footer",children:Object(k.jsxs)("div",{className:"justify-s",children:[Object(k.jsx)("h5",{className:"",children:"Daily USDC Rewards"}),Object(k.jsx)("h5",{className:"",children:"0.0000"})]})})]})}),Object(k.jsx)("div",{className:"col-sm-12 col-md-6 mb-9",children:Object(k.jsxs)("div",{className:"get-start",children:[Object(k.jsxs)("div",{className:"get-start-body",children:[Object(k.jsxs)("div",{className:"w10 justify-s",children:[Object(k.jsxs)("div",{className:"w0 justify-js gap-2",children:[Object(k.jsx)("div",{className:"crypto-logo",children:Object(k.jsx)("img",{src:"/assets/images/dashboard/USDT.svg",alt:"USDT"})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{children:"USDT"}),Object(k.jsx)("h6",{className:"grey-color",children:"$0.0000"})]})]}),!g&&Object(k.jsx)("div",{className:"",children:Object(k.jsx)("img",{src:"/assets/images/dashboard/emoticon-2.png",style:{width:"100px"},alt:"",className:""})})]}),g?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"mt-12",children:Object(k.jsx)("h5",{className:"site-lite-color",children:"Start Earning 1% interest on your USDT daily"})}),Object(k.jsxs)("div",{className:"justify-s",children:[Object(k.jsx)("h5",{className:"",children:"Didn't start yet?"}),Object(k.jsx)("img",{className:"emoticon",src:"/assets/images/dashboard/emoticon.png",alt:""})]})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"justify-js font18 mt-4",children:Object(k.jsx)("h5",{children:"Deposit amount"})}),Object(k.jsx)("div",{className:"justify-js mt-4",children:Object(k.jsx)("input",{type:"text",className:"stake-input"})})]}),Object(k.jsx)("div",{className:"mt-8",children:g?Object(k.jsx)("button",{onClick:function(){return p(!1)},className:"w-full",children:Object(k.jsx)("h5",{children:"Get Started"})}):Object(k.jsxs)("div",{className:"justify-js gap-4",children:[Object(k.jsx)("button",{className:"w-full withdrow-btn",children:Object(k.jsx)("h5",{children:"Withdraw"})}),Object(k.jsx)("button",{className:"w-full",children:Object(k.jsx)("h5",{children:"Deposit"})})]})})]}),Object(k.jsx)("div",{className:"get-start-footer",children:Object(k.jsxs)("div",{className:"justify-s",children:[Object(k.jsx)("h5",{className:"",children:"Daily USDT Rewards"}),Object(k.jsx)("h5",{className:"",children:"0.0000"})]})})]})})]}),Object(k.jsxs)("div",{className:"assets-container",children:[Object(k.jsxs)("div",{className:"justify-js gap-4 w0",children:[Object(k.jsx)("h5",{className:"nobold",children:"Portfolio\xa0Graph"}),Object(k.jsx)("button",{className:"crypto-btn grey-bg",children:"USDT"}),Object(k.jsx)("button",{className:"crypto-btn",children:"USDC"})]}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-8 mt-4",children:Object(k.jsx)("div",{className:"h10 justify",children:Object(k.jsx)("h2",{className:"site-lite-color",children:"Calculating Your Assets..."})})}),Object(k.jsxs)("div",{className:"col-sm-12 col-md-4 mt-4",children:[Object(k.jsxs)("div",{className:"justify-js w0 mt-4",children:[Object(k.jsx)("img",{className:"mr-4",src:"/assets/images/dashboard/USDC.svg",style:{width:"35px",height:"35px"},alt:"USDC"}),Object(k.jsx)("h4",{className:"",children:"Staking\xa0Info"})]}),Object(k.jsxs)("div",{className:"justify-s mt-8",children:[Object(k.jsxs)("div",{className:"justify-s gap-2",children:[Object(k.jsx)("div",{className:"staking-img-box",children:Object(k.jsx)("img",{src:"/assets/images/staking/invest.png",alt:"",className:""})}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h5",{className:"nobold",children:"Total investment"})})]}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h5",{className:"site-lite-color",children:"126071062.49 USDC"})})]}),Object(k.jsxs)("div",{className:"justify-s mt-6",children:[Object(k.jsxs)("div",{className:"justify-s gap-2",children:[Object(k.jsx)("div",{className:"staking-img-box",children:Object(k.jsx)("img",{src:"/assets/images/staking/investors.png",alt:"",className:""})}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h5",{className:"nobold",children:"Total investors"})})]}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h5",{className:"site-lite-color",children:"12747"})})]}),Object(k.jsxs)("div",{className:"justify-s mt-6",children:[Object(k.jsxs)("div",{className:"justify-s gap-2",children:[Object(k.jsx)("div",{className:"staking-img-box",children:Object(k.jsx)("img",{src:"/assets/images/staking/reward.png",alt:"",className:""})}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h5",{className:"nobold",children:"Total rewards"})})]}),Object(k.jsx)("div",{className:"",children:Object(k.jsx)("h5",{className:"site-lite-color",children:"64164106.84 USDC"})})]})]})]})]}),Object(k.jsxs)("div",{className:"history-container mt-8",children:[Object(k.jsx)("div",{className:"justify-js gap-4 w0",children:Object(k.jsx)("h5",{className:"nobold",children:"Transaction\xa0history"})}),Object(k.jsx)("br",{}),Object(k.jsxs)("div",{className:"row ",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-9 mt-4",children:Object(k.jsxs)("table",{className:"",children:[Object(k.jsxs)("thead",{className:"",children:[Object(k.jsx)("th",{className:"",children:"Asset"}),Object(k.jsx)("th",{className:"",children:"Type"}),Object(k.jsx)("th",{className:"",children:"Date"}),Object(k.jsx)("th",{className:"",children:"Amount"}),Object(k.jsx)("th",{className:"",children:"Destination"}),Object(k.jsx)("th",{className:"",children:"TxID"})]}),Object(k.jsx)("tbody",{className:"",children:a.map((function(e,s){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"",children:e.asset}),Object(k.jsx)("td",{className:"",children:e.type}),Object(k.jsx)("td",{className:"",children:e.date}),Object(k.jsx)("td",{className:"",children:e.amount}),Object(k.jsx)("td",{className:"",children:e.desination}),Object(k.jsx)("td",{className:"",children:e.txid})]},s)}))})]})}),Object(k.jsx)("div",{className:"col-sm-12 col-md-3 mt-4",children:Object(k.jsx)("div",{className:"history",children:n.map((function(e,s){return Object(k.jsx)("div",{className:"history-row",children:Object(k.jsxs)("div",{className:"history-row-container",children:[n&&n.length-1!==s&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"history-tail"})}),Object(k.jsx)("div",{className:"history-icon",children:Object(k.jsx)("span",{className:"",children:Object(k.jsx)("img",{src:"/assets/images/dashboard/circle.svg",alt:"",className:""})})}),Object(k.jsxs)("div",{className:"history-content",children:[Object(k.jsx)("div",{className:"history-title",children:e.date}),Object(k.jsx)("div",{className:"history-description",children:e.content})]})]})},s)}))})})]})]})]})})})},M=c(101);c(87);function P(e){var s=new M.a(e);return s.pollingInterval=12e3,s}var z=function(){return Object(k.jsxs)(v.a,{getLibrary:P,children:[Object(k.jsx)(n.a,{children:Object(k.jsxs)(r.c,{children:[Object(k.jsx)(r.a,{path:"*",element:Object(k.jsx)(I,{})}),Object(k.jsx)(r.a,{path:"/",element:Object(k.jsx)(F,{})}),Object(k.jsx)(r.a,{path:"/dashboard",element:Object(k.jsx)(W,{})})]})}),Object(k.jsx)(w.NotificationContainer,{})]})},R=function(e){e&&e instanceof Function&&c.e(7).then(c.bind(null,427)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,i=s.getLCP,l=s.getTTFB;c(e),t(e),a(e),i(e),l(e)}))};l.a.createRoot(document.getElementById("root")).render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(z,{})})),R()}},[[96,2,5]]]);
//# sourceMappingURL=main.6e30066b.chunk.js.map