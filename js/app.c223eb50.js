(function(){"use strict";var e={8185:function(e,s,t){var n=t(6369),i=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"app"}},[0==e.vueNumber?s("IntroComponent",{on:{launchConsole:e.onLaunchConsole,launchMusic:e.onLaunchMusic}}):e._e(),s("Transition",{attrs:{name:"console",appear:""}},[1==e.vueNumber?s("MissionComponent",{staticClass:"mission",attrs:{msgConsole:e.msgConsole},on:{launchMission:e.onLaunchMission}}):e._e()],1),2==e.vueNumber?s("LightComponent",{staticClass:"light-component",on:{launchConsole:e.onLaunchConsole}}):e._e()],1)},o=[],a=function(){var e=this,s=e._self._c;return s("div",[e.TurnOn?e._e():s("div",{staticClass:"fond-black"},[s("div",{staticClass:"cnes-text"},[e._v("Vous arrivez proche du CNES")]),s("img",{staticClass:"torch",attrs:{src:e.torche}}),s("div",{staticClass:"pulsating-circle",on:{click:e.switchLight}})]),e.TurnOn?s("div",{staticClass:"fond"},[s("div",{staticClass:"monstre1-div"},[s("img",{staticClass:"monstre1",attrs:{src:e.monstre1}}),s("div",{staticClass:"face-monstre1"},[s("div",{ref:"eye-left-monstre1",staticClass:"left eye"},[s("div",{ref:"pupil1",staticClass:"pupil"})]),s("div",{ref:"eye-right-monstre1",staticClass:"right eye"},[s("div",{ref:"pupil2",staticClass:"pupil"})])])]),s("div",{staticClass:"monstre2-div"},[s("img",{staticClass:"monstre2",attrs:{src:e.monstre2}}),s("div",{staticClass:"face-monstre2"},[s("div",{ref:"eye-left-monstre2",staticClass:"left eye-monster2"},[s("div",{ref:"pupil1-monster2",staticClass:"pupil-monster2"})]),s("div",{ref:"eye-right-monstre2",staticClass:"right eye-monster2"},[s("div",{ref:"pupil2-monster2",staticClass:"pupil-monster2"})])])]),s("div",{staticClass:"monstre3-div"},[s("img",{staticClass:"monstre3",attrs:{src:e.monstre3}}),s("div",{staticClass:"face-monstre3"},[s("div",{ref:"eye-left-monstre3",staticClass:"left eye-monster3"},[s("div",{ref:"pupil1-monster3",staticClass:"pupil-monster3"})]),s("div",{ref:"eye-right-monstre3",staticClass:"right eye-monster3"},[s("div",{ref:"pupil2-monster3",staticClass:"pupil-monster3"})])])]),s("div",{staticClass:"monstre3-2-div"},[s("img",{staticClass:"monstre3",attrs:{src:e.monstre3}}),s("div",{staticClass:"face-monstre3"},[s("div",{ref:"eye-left-monstre3-2",staticClass:"left eye-monster3"},[s("div",{ref:"pupil1-monster3-2",staticClass:"pupil-monster3"})]),s("div",{ref:"eye-right-monstre3-2",staticClass:"right eye-monster3"},[s("div",{ref:"pupil2-monster3-2",staticClass:"pupil-monster3"})])])]),s("div",{staticClass:"monstre4-div"},[s("img",{staticClass:"monstre4",attrs:{src:e.monstre4}}),s("div",{staticClass:"face-monstre4"},[s("div",{ref:"eye-left-monstre4",staticClass:"left eye-monster4"},[s("div",{ref:"pupil1-monster4",staticClass:"pupil-monster4"})]),s("div",{ref:"eye-right-monstre4",staticClass:"right eye-monster4"},[s("div",{ref:"pupil2-monster4",staticClass:"pupil-monster4"})])])]),s("div",{staticClass:"monstre4-2-div"},[s("img",{staticClass:"monstre4",attrs:{src:e.monstre4}}),s("div",{staticClass:"face-monstre4"},[s("div",{ref:"eye-left-monstre4-2",staticClass:"left eye-monster4"},[s("div",{ref:"pupil1-monster4-2",staticClass:"pupil-monster4"})]),s("div",{ref:"eye-right-monstre4-2",staticClass:"right eye-monster4"},[s("div",{ref:"pupil2-monster4-2",staticClass:"pupil-monster4"})])])]),s("div",{staticClass:"button-finish click-button2",attrs:{id:"button-finish"},on:{click:e.onClickButton}},[s("div",{attrs:{id:"circle"}}),s("b",{attrs:{href:"#"}},[e._v("Rentrer à la base.")])]),s("div",[s("div",{ref:"light",attrs:{id:"flashlight"}}),s("div",{staticClass:"container-text"},e._l(e.textJournal,(function(t){return s("p",{key:t,staticClass:"text-1"},[e._v(" "+e._s(t)+" ")])})),0)])]):e._e()])},r=[],u=(t(7658),{name:"LightComponent",props:{msg:String},data:function(){return{mouseX:0,mouseY:0,flashlight:null,TurnOn:!1,textJournal:["journal de bord, jour n°74","Nous commençons a ne plus avoir de vivre, le CNES n'étais pas préparer a un problème aussi épineux.","Nous vivons maintenant reclus depuis depuis 78 jour et plusieurs survivants commence à avoir quelques comportements étranges.","Certain d'entre-eux commence à décorer un cactus afin de lutter contre la solitude... D'autres accroche des canards au plafond...","Mais un élément nous permet de tenir: l'espoir !","Nous savons que les monstres ont commencé à sortir de terre lors de l'apparition d'une entité nommée le 'Roi-monstre'. ","Tous indique que la menace des monstres sera anéantie à la disparition de ce dernier.","Le plan est simple : l'appâter et le tuer.","D'après des sources sûre, le Roi monstre adore les citrouille-lanterne et à un ego surdimensionner.","Ceci pourrait peut être nous aider.","Caporal Ernest Georges Alphonse."],walkSound:"",music:""}},created(){document.addEventListener("mousemove",this.getMousePosition),document.addEventListener("touchmove",this.getMousePosition),this.torche=t(2586),this.monstre1=t(7790),this.monstre2=t(8232),this.monstre3=t(8699),this.monstre4=t(3128)},mounted(){this.walkSound=t(7883),this.music=t(1523),setTimeout((()=>{this.launchWalk()}),100)},methods:{getMousePosition(e){this.flashlight=this.$refs["light"];let s=[];for(let[n,i]of Object.entries(this.$refs))/^pupil/.test(n)&&s.push(i);let t=[];for(let[n,i]of Object.entries(this.$refs))/^eye/.test(n)&&t.push(i);this.mouseX=e.pageX,this.mouseY=e.pageY,null!=this.flashlight&&(this.flashlight.style.setProperty("--Xpos",this.mouseX+"px"),this.flashlight.style.setProperty("--Ypos",this.mouseY+"px"),s.forEach((e=>this.trackingPupil(e))),t.forEach((e=>this.trackingEye(e))))},trackingPupil(e){let s=e.getBoundingClientRect(),t=s.left+s.width/2,n=s.bottom,i=Math.atan2(this.mouseX-t,this.mouseY-n),o=i*(180/Math.PI)*-1;e.style.setProperty("transform","rotate("+(o+180)+"deg)")},trackingEye(e){let s=e.getBoundingClientRect(),t=s.x,n=s.y,i=Math.pow(this.mouseX-t,2),o=Math.pow(this.mouseY-n,2),a=Math.sqrt(i+o);a<60?(e.style.setProperty("--color-eyes","rgb(255, 0, 0)"),e.style.setProperty("opacity","1"),e.style.setProperty("animation","faceAnim 1s linear reverse infinite")):a<150?(e.style.setProperty("--color-eyes","rgb(255, 153, 0)"),e.style.setProperty("opacity","1"),e.style.setProperty("animation","faceAnim 1s linear reverse infinite")):(e.style.setProperty("--color-eyes","rgb(255, 255, 255)"),e.style.setProperty("opacity","0"))},launchWalk(){this.walkSound=new Audio(this.walkSound),this.walkSound.addEventListener("canplaythrough",(()=>{this.walkSound.play(),this.walkSound.volume=.2,this.music=new Audio(this.music),this.music.addEventListener("canplaythrough",(()=>{this.music.play(),this.music.volume=.3}))}))},switchLight(){this.walkSound.pause(),this.TurnOn=!0},onClickButton(){this.$emit("launchConsole",2)}}}),l=u,c=t(1001),m=(0,c.Z)(l,a,r,!1,null,"1b4a5a6f",null),d=m.exports,p=function(){var e=this,s=e._self._c;return s("div",{staticClass:"background-black"},[0==e.nbClick?s("p",{staticClass:"text-avertissement"},[e._v(" L'expérience est optimal avec un casque. La page n'étant pas responsive, elle ne fonctionne pas sur mobile. ")]):e._e(),s("Transition",{attrs:{name:"fade",appear:""}},[e.nbClick>=1?s("div",{staticClass:"panneau body"},[s("div",{staticClass:"poteau1"}),s("div",{staticClass:"poteau2"}),s("div",{staticClass:"bienvenue"},[s("span",{attrs:{id:"light"}},[e._v("B")]),s("span",{attrs:{id:"T"}},[e._v("I")]),s("span",{attrs:{id:"light"}},[e._v("E")]),s("span",{attrs:{id:"T"}},[e._v("N")]),s("span",{attrs:{id:"G"}},[e._v("V")]),s("span",{attrs:{id:"L"}},[e._v("E")]),s("span",{attrs:{id:"G"}},[e._v("N")]),s("span",{attrs:{id:"L"}},[e._v("U")]),s("span",{attrs:{id:"T"}},[e._v("E")])])]):e._e()]),s("Transition",{attrs:{name:"fade",appear:""}},[e.nbClick>=3?s("div",{staticClass:"lamp swing"}):e._e(),2==e.nbClick?s("div",{staticClass:"lamp2 swing"}):e._e()]),e.nbClick>=3?s("img",{staticClass:"zombie1",attrs:{src:e.zombie}}):e._e(),e.nbClick>=3?s("img",{staticClass:"zombie2",attrs:{src:e.zombie2}}):e._e(),e.nbClick>=3?s("img",{staticClass:"decor",attrs:{src:e.decor}}):e._e(),e.buttonEnable?s("div",{staticClass:"button click-button",attrs:{id:"button-3"},on:{click:e.onClickButton}},[s("div",{attrs:{id:"circle"}}),s("a",{attrs:{href:"#"}},[e._v(e._s(e.textClickButton))])]):e._e(),e.newMessageFlag?s("div",{staticClass:"message-text"},[e._v("Vous avez un nouveau message.")]):e._e()],1)},h=[],v={name:"IntroComponent",props:{msg:String},data:function(){return{beast:"",textClickButton:"Commencement",nbClick:0,audio1:"",audio2:"",audio3:"",audio4:"",music1:"",buttonEnable:!0,newMessageFlag:!1}},created(){this.zombie=t(9142),this.zombie2=t(1375),this.decor=t(2908)},mounted(){this.audio1=t(2067),this.audio2=t(8474),this.audio3=t(9321),this.audio4=t(2743),this.music1=t(1077)},methods:{onClickButton:function(){this.nbClick+=1,1==this.nbClick&&(this.launchMusic(),this.toggleFullScreen(),this.textClickButton="Que la Lumière fût !",this.audio2=new Audio(this.audio2),this.audio2.addEventListener("canplaythrough",(()=>{this.audio2.play(),this.audio2.volume=.3}))),2==this.nbClick&&(this.textClickButton="Surprise !"),3==this.nbClick&&(this.textClickButton="Accéder à la console.",this.buttonEnable=!1,this.audio1=new Audio(this.audio1),this.audio1.addEventListener("canplaythrough",(()=>{this.audio1.play(),this.audio1.volume=.7})),setTimeout((()=>{this.newMessage()}),5e3)),4==this.nbClick&&(this.audio2.pause(),this.$emit("launchConsole",1),this.music1.pause())},newMessage:function(){this.buttonEnable=!0,this.newMessageFlag=!0,this.audio4=new Audio(this.audio4),this.audio4.addEventListener("canplaythrough",(()=>{this.audio4.play()}))},toggleFullScreen:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()},launchMusic(){this.$emit("launchMusic",0)}}},f=v,g=(0,c.Z)(f,p,h,!1,null,"60472ee6",null),C=g.exports,b=function(){var e=this,s=e._self._c;return s("div",[s("v-shell",{attrs:{banner:e.banner,shell_input:e.send_to_terminal,commands:e.commands},on:{shell_output:e.prompt}})],1)},y=[],_={name:"MissionComponent",data(){return{send_to_terminal:"",message:["Allô il y a quelqu'un ?","Comment avez-vous réussi à survivre aussi longtemps dans cette zone ?","Quoi ? Vous n'êtes pas au courant ? \n ça fait 4 mois que les rues sont infestées de monstre en tous genres... vous viviez dans une grotte ou quoi ?"],banner:{header:"Mission AGC",subHeader:"Vous avez 1 nouveau message.",helpHeader:"Ecrivez msg dans le terminal pour le lire.",emoji:{first:"💬",second:"💬",time:750},sign:" AGC $"},commands:[{name:"cheatcode",desc:"Do you want cheat ? ",get(){return"<p>🐧🐧🐧  42   🐧🐧🐧 </p>"}}],Message1:'<div class="message-text-2">\n              <t class="t">Allô il y a quelqu\'un ?</t>\n              <t class="t">Comment avez-vous réussi à survivre aussi longtemps dans cette zone ?</t>\n              <t class="t">Quoi ? Vous n\'êtes pas au courant ?</t>\n              <t class="t">ça fait 4 mois que les rues sont infestées de monstre en tous genres... vous viviez dans une grotte ou quoi ?</t>\n              <t class="t">Bon, je vais vous faire un court ré-cap. La situation est très tendue ici. </t>\n              <t class="t">Le monde entier s\'est fait complètement surprendre et nous faisons partie vous et moi des derniers survivants.</t>\n              <t class="t">D\'ailleurs, j\'en oublie les bonnes manières, je ne me suis même pas présenté.</t>\n              <t class="t">Je m\'appelle Toes, Thomas Toes et j\'essaye de coordonner ce qui qu\'il reste de l\'humanité.</t>\n              <t class="t">Et voilà que vous débarquez, tous proches d\'un objectif critique. </t>\n              <t class="t">On va avoir besoin de vous, si vous l\'acceptez.</t>\n              <t class="t">D\'après des sources fiables, le CNES était en train de mettre sur pied un plan pour contrer cette invasion. </t>\n              <t class="t">Malheureusement, l\'endroit est infecté de monstre. Mais nous avons une chance de le récupérer, grâce à vous.</t>\n              <t class="t">Votre géolocalisation m\'indique que vous êtes très proche du CNES,</t>\n              <t class="t">et vous pouvez y accéder très facilement via les égouts. </t>\n              <t class="t">J\'aimerais que vous y alliez et que vous récupérer des informations sur ce fameux plan, je vous guiderais.</t>\n              <t class="t"></t>\n              <t class="t">[Ecrivez mission dans le terminal pour avancer]</t>\n              </div>',messageSound1:"",Message2:'<div class="message-text-2">\n              <t class="t">Mais oui bien sûr ! J\'avais aussi entendu parler de ce fameux Roi monstre.</t>\n              <t class="t">Nous avons enfin une chance de sauver l\'humanité !</t>\n              <t class="t">Il est temps de mettre en place l\'opération Anéantissement du Grand Cruel ou AGC pour les intime.</t>\n              <t class="t">Cette opération est programmée pour le JEUDI 10 NOVEMBRE 2022. Nous avons encore un peu de temps pour nous préparer.</t>\n              <t class="t">Au programme : </t>\n              <t class="t">- Un concours de jack\'o lantern, afin d\'attirer le Roi dans notre piège.</t>\n              <t class="t">- Un concours de déguisement, le Roi monstre ne pourra pas s\'empêcher de venir pour le concours du plus beau monstre.</t>\n              <t class="t">- Un loup garou, les monstres raffolent de ce jeu.</t>\n              <t class="t">Nous devons gagner la confiance des monstres, et pour cela, une seule solution : nous déguiser.</t>\n              <t class="t">Sortez votre meilleur costume si vous souhaitez passer inaperçu.</t>\n              <t class="t">Plus nous serons nombreux, plus les chances de succès seront grandes !</t>\n              <t class="t"></t>\n              <t class="t">Fin.</t>\n              </div>',messageSound2:""}},props:{msgConsole:Number},mounted(){this.messageSound1=t(4495),this.messageSound2=t(6483)},methods:{prompt(e){"mission"==e.trim()?this.LaunchMission():"msg"==e.trim()?1==this.msgConsole?this.LaunchMessage1():2==this.msgConsole&&this.LaunchMessage2():this.send_to_terminal=e},LaunchMission(){this.messageSound1.pause(),this.$emit("launchMission",0)},LaunchMessage1(){console.info("Bonjour"),this.send_to_terminal=this.Message1,this.messageSound1=new Audio(this.messageSound1),this.messageSound1.addEventListener("canplaythrough",(()=>{this.messageSound1.play(),this.messageSound1.volume=1.3}))},LaunchMessage2(){console.info("Bonjour"),this.send_to_terminal=this.Message2,this.messageSound2=new Audio(this.messageSound2),this.messageSound2.addEventListener("canplaythrough",(()=>{this.messageSound2.play(),this.messageSound2.volume=1.3}))}}},k=_,x=(0,c.Z)(k,b,y,!1,null,null,null),w=x.exports,M={name:"App",components:{IntroComponent:C,LightComponent:d,MissionComponent:w},data:function(){return{vueNumber:0,music1:"",msgConsole:1}},mounted(){this.music1=t(1077)},methods:{onLaunchConsole(e){this.vueNumber=1,this.msgConsole=e,console.info("console: ",this.msgConsole)},onLaunchMission(){this.vueNumber=2,this.music1.pause()},onLaunchMusic(){this.music1=new Audio(this.music1),this.music1.addEventListener("canplaythrough",(()=>{this.music1.play(),this.music1.volume=.2}))}}},L=M,E=(0,c.Z)(L,i,o,!1,null,null,null),S=E.exports,z=t(9701);n.ZP.use(z.Z),n.ZP.config.productionTip=!1,new n.ZP({render:e=>e(S)}).$mount("#app")},7790:function(e,s,t){e.exports=t.p+"img/monstre1.cbe64052.svg"},8232:function(e,s,t){e.exports=t.p+"img/monstre2.e19cc345.svg"},8699:function(e,s,t){e.exports=t.p+"img/phantome.1c7122f1.svg"},3128:function(e,s,t){e.exports=t.p+"img/pingouin.12fa0994.svg"},2908:function(e,s,t){e.exports=t.p+"img/terrain.8f30a0a4.svg"},2586:function(e,s,t){e.exports=t.p+"img/torche.261e18ac.svg"},9142:function(e,s,t){e.exports=t.p+"img/zombie.1b8337ce.svg"},1375:function(e,s,t){e.exports=t.p+"img/zombie2.190acd76.svg"},4495:function(e,s,t){e.exports=t.p+"media/histoire1.2d708aa5.mp3"},6483:function(e,s,t){e.exports=t.p+"media/histoire2.e59cb346.mp3"},1077:function(e,s,t){e.exports=t.p+"media/music3.b2545733.mp3"},1523:function(e,s,t){e.exports=t.p+"media/music4.85b7d759.mp3"},8474:function(e,s,t){e.exports=t.p+"media/neon.55e24f2b.mp3"},2743:function(e,s,t){e.exports=t.p+"media/phone.27fdb284.mp3"},9321:function(e,s,t){e.exports=t.p+"media/rope.ad975a88.mp3"},7883:function(e,s,t){e.exports=t.p+"media/walk.be90fb16.mp3"},2067:function(e,s,t){e.exports=t.p+"media/zombie1.0a93ffc2.mp3"}},s={};function t(n){var i=s[n];if(void 0!==i)return i.exports;var o=s[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(s,n,i,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],o=e[c][2];for(var r=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(r=!1,o<a&&(a=o));if(r){e.splice(c--,1);var l=i();void 0!==l&&(s=l)}}return s}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,n){var i,o,a=n[0],r=n[1],u=n[2],l=0;if(a.some((function(s){return 0!==e[s]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(u)var c=u(t)}for(s&&s(n);l<a.length;l++)o=a[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkhalloween_web"]=self["webpackChunkhalloween_web"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(8185)}));n=t.O(n)})();
//# sourceMappingURL=app.c223eb50.js.map