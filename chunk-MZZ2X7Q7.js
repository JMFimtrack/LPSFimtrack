import{B as $,D as fe,Ha as A,K as L,L as _e,N as S,Q as u,R as b,Sa as ve,T,V as a,W as v,Z as y,_ as j,a as d,f as le,i as F,j as he,la as _,m as ue,na as E,q as R,r as me,ra as ge,sa as W,t as pe,ta as be,ub as w,z as K,zb as ye}from"./chunk-RZVSONEK.js";var G;try{G=typeof Intl<"u"&&Intl.v8BreakIterator}catch{G=!1}var p=(()=>{class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?ye(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||G)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(t){return new(t||i)(a(ge))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var O;function Ue(){if(O==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>O=!0}))}finally{O=O||!1}return O}function M(i){return Ue()?i:!!i.capture}var Y;function He(){if(Y==null){let i=typeof document<"u"?document.head:null;Y=!!(i&&(i.createShadowRoot||i.attachShadow))}return Y}function Ie(i){if(He()){let s=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&s instanceof ShadowRoot)return s}return null}function g(i){return i.composedPath?i.composedPath()[0]:i.target}function Ee(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function q(i){return Array.isArray(i)?i:[i]}function k(i){return i instanceof E?i.nativeElement:i}var Ae=new Set,D,ze=(()=>{class i{constructor(e,t){this._platform=e,this._nonce=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):$e}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ke(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(t){return new(t||i)(a(p),a(be,8))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Ke(i,s){if(!Ae.has(i))try{D||(D=document.createElement("style"),s&&D.setAttribute("nonce",s),D.setAttribute("type","text/css"),document.head.appendChild(D)),D.sheet&&(D.sheet.insertRule(`@media ${i} {body{ }}`,0),Ae.add(i))}catch(e){console.error(e)}}function $e(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ke=(()=>{class i{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new F}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return we(q(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=we(q(e)).map(o=>this._registerQuery(o).observable),r=me(n);return r=pe(r.pipe($(1)),r.pipe(L(1),K(0))),r.pipe(R(o=>{let c={matches:!1,breakpoints:{}};return o.forEach(({matches:f,query:h})=>{c.matches=c.matches||f,c.breakpoints[h]=f}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new le(o=>{let c=f=>this._zone.run(()=>o.next(f));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(_e(t),R(({matches:o})=>({query:e,matches:o})),S(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static{this.\u0275fac=function(t){return new(t||i)(a(ze),a(_))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function we(i){return i.map(s=>s.split(",")).reduce((s,e)=>s.concat(e)).map(s=>s.trim())}function Q(i){return i.buttons===0||i.detail===0}function J(i){let s=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!s&&s.identifier===-1&&(s.radiusX==null||s.radiusX===1)&&(s.radiusY==null||s.radiusY===1)}var Ze=new T("cdk-input-modality-detector-options"),qe={ignoreKeys:[18,17,224,91,16]},Te=650,C=M({passive:!0,capture:!0}),Xe=(()=>{class i{get mostRecentModality(){return this._modality.value}constructor(e,t,n,r){this._platform=e,this._mostRecentTarget=null,this._modality=new he(null),this._lastTouchMs=0,this._onKeydown=o=>{this._options?.ignoreKeys?.some(c=>c===o.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=g(o))},this._onMousedown=o=>{Date.now()-this._lastTouchMs<Te||(this._modality.next(Q(o)?"keyboard":"mouse"),this._mostRecentTarget=g(o))},this._onTouchstart=o=>{if(J(o)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=g(o)},this._options=d(d({},qe),r),this.modalityDetected=this._modality.pipe(L(1)),this.modalityChanged=this.modalityDetected.pipe(fe()),e.isBrowser&&t.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,C),n.addEventListener("mousedown",this._onMousedown,C),n.addEventListener("touchstart",this._onTouchstart,C)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,C),document.removeEventListener("mousedown",this._onMousedown,C),document.removeEventListener("touchstart",this._onTouchstart,C))}static{this.\u0275fac=function(t){return new(t||i)(a(p),a(_),a(w),a(Ze,8))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var V=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}(V||{}),Qe=new T("cdk-focus-monitor-default-options"),B=M({passive:!0,capture:!0}),ei=(()=>{class i{constructor(e,t,n,r,o){this._ngZone=e,this._platform=t,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new F,this._rootNodeFocusAndBlurListener=c=>{let f=g(c);for(let h=f;h;h=h.parentElement)c.type==="focus"?this._onFocus(c,h):this._onBlur(c,h)},this._document=r,this._detectionMode=o?.detectionMode||V.IMMEDIATE}monitor(e,t=!1){let n=k(e);if(!this._platform.isBrowser||n.nodeType!==1)return ue();let r=Ie(n)||this._getDocument(),o=this._elementInfo.get(n);if(o)return t&&(o.checkChildren=!0),o.subject;let c={checkChildren:t,subject:new F,rootNode:r};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=k(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=k(e),o=this._getDocument().activeElement;r===o?this._getClosestElementsInfo(r).forEach(([c,f])=>this._originChanged(c,t,f)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===V.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===V.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Te:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=g(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,B),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,B)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(S(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,B),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,B),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static{this.\u0275fac=function(t){return new(t||i)(a(_),a(p),a(Xe),a(w,8),a(Qe,8))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var x=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(x||{}),De="cdk-high-contrast-black-on-white",xe="cdk-high-contrast-white-on-black",X="cdk-high-contrast-active",Me=(()=>{class i{constructor(e,t){this._platform=e,this._document=t,this._breakpointSubscription=v(ke).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return x.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return x.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return x.BLACK_ON_WHITE}return x.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(X,De,xe),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===x.BLACK_ON_WHITE?e.add(X,De):t===x.WHITE_ON_BLACK&&e.add(X,xe)}}static{this.\u0275fac=function(t){return new(t||i)(a(p),a(w))}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ee=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=b({})}}return i})();function it(){return!0}var nt=new T("mat-sanity-checks",{providedIn:"root",factory:it}),Ce=(()=>{class i{constructor(e,t,n){this._sanityChecks=t,this._document=n,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return Ee()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}static{this.\u0275fac=function(t){return new(t||i)(a(Me),a(nt,8),a(w))}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=b({imports:[ee,ee]})}}return i})();var m=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(m||{}),ne=class{constructor(s,e,t,n=!1){this._renderer=s,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n,this.state=m.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Fe=M({passive:!0,capture:!0}),se=class{constructor(){this._events=new Map,this._delegateEventHandler=s=>{let e=g(s);e&&this._events.get(s.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(s))})}}addHandler(s,e,t,n){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(n):r.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),s.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Fe)})}removeHandler(s,e,t){let n=this._events.get(s);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(s),document.removeEventListener(s,this._delegateEventHandler,Fe)))}},Oe={enterDuration:225,exitDuration:150},st=800,Ne=M({passive:!0,capture:!0}),Re=["mousedown","touchstart"],Le=["mouseup","mouseleave","touchend","touchcancel"],re=class i{static{this._eventManager=new se}constructor(s,e,t,n){this._target=s,this._ngZone=e,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=k(t))}fadeInRipple(s,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=d(d({},Oe),t.animation);t.centered&&(s=n.left+n.width/2,e=n.top+n.height/2);let o=t.radius||rt(s,e,n),c=s-n.left,f=e-n.top,h=r.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${c-o}px`,l.style.top=`${f-o}px`,l.style.height=`${o*2}px`,l.style.width=`${o*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(l);let oe=window.getComputedStyle(l),Ve=oe.transitionProperty,ae=oe.transitionDuration,H=Ve==="none"||ae==="0s"||ae==="0s, 0s"||n.width===0&&n.height===0,I=new ne(this,l,t,H);l.style.transform="scale3d(1, 1, 1)",I.state=m.FADING_IN,t.persistent||(this._mostRecentTransientRipple=I);let N=null;return!H&&(h||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ce=()=>{N&&(N.fallbackTimer=null),clearTimeout(de),this._finishRippleTransition(I)},z=()=>this._destroyRipple(I),de=setTimeout(z,h+100);l.addEventListener("transitionend",ce),l.addEventListener("transitioncancel",z),N={onTransitionEnd:ce,onTransitionCancel:z,fallbackTimer:de}}),this._activeRipples.set(I,N),(H||!h)&&this._finishRippleTransition(I),I}fadeOutRipple(s){if(s.state===m.FADING_OUT||s.state===m.HIDDEN)return;let e=s.element,t=d(d({},Oe),s.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",s.state=m.FADING_OUT,(s._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(s)}fadeOutAll(){this._getActiveRipples().forEach(s=>s.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(s=>{s.config.persistent||s.fadeOut()})}setupTriggerEvents(s){let e=k(s);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Re.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(s){s.type==="mousedown"?this._onMousedown(s):s.type==="touchstart"?this._onTouchStart(s):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Le.forEach(e=>{this._triggerElement.addEventListener(e,this,Ne)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(s){s.state===m.FADING_IN?this._startFadeOutTransition(s):s.state===m.FADING_OUT&&this._destroyRipple(s)}_startFadeOutTransition(s){let e=s===this._mostRecentTransientRipple,{persistent:t}=s.config;s.state=m.VISIBLE,!t&&(!e||!this._isPointerDown)&&s.fadeOut()}_destroyRipple(s){let e=this._activeRipples.get(s)??null;this._activeRipples.delete(s),this._activeRipples.size||(this._containerRect=null),s===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),s.state=m.HIDDEN,e!==null&&(s.element.removeEventListener("transitionend",e.onTransitionEnd),s.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),s.element.remove()}_onMousedown(s){let e=Q(s),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+st;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(s.clientX,s.clientY,this._target.rippleConfig))}_onTouchStart(s){if(!this._target.rippleDisabled&&!J(s)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=s.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(s=>{let e=s.state===m.VISIBLE||s.config.terminateOnPointerUp&&s.state===m.FADING_IN;!s.config.persistent&&e&&s.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let s=this._triggerElement;s&&(Re.forEach(e=>i._eventManager.removeHandler(e,s,this)),this._pointerUpEventsRegistered&&(Le.forEach(e=>s.removeEventListener(e,this,Ne)),this._pointerUpEventsRegistered=!1))}};function rt(i,s,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(s-e.top),Math.abs(s-e.bottom));return Math.sqrt(t*t+n*n)}var Be=new T("mat-ripple-global-options"),ot=(()=>{class i{get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}constructor(e,t,n,r,o){this._elementRef=e,this._animationMode=o,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=r||{},this._rippleRenderer=new re(this,t,e,n)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:d(d(d({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,d(d({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,d(d({},this.rippleConfig),e))}static{this.\u0275fac=function(t){return new(t||i)(A(E),A(_),A(p),A(Be,8),A(W,8))}}static{this.\u0275dir=j({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&ve("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0})}}return i})(),$i=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=y({type:i})}static{this.\u0275inj=b({imports:[Ce,Ce]})}}return i})();var Se={capture:!0},je=["focus","mousedown","mouseenter","touchstart"],te="mat-ripple-loader-uninitialized",ie="mat-ripple-loader-class-name",Pe="mat-ripple-loader-centered",U="mat-ripple-loader-disabled",Wi=(()=>{class i{constructor(){this._document=v(w,{optional:!0}),this._animationMode=v(W,{optional:!0}),this._globalRippleOptions=v(Be,{optional:!0}),this._platform=v(p),this._ngZone=v(_),this._hosts=new Map,this._onInteraction=e=>{let t=g(e);if(t instanceof HTMLElement){let n=t.closest(`[${te}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}},this._ngZone.runOutsideAngular(()=>{for(let e of je)this._document?.addEventListener(e,this._onInteraction,Se)})}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);for(let t of je)this._document?.removeEventListener(t,this._onInteraction,Se)}configureRipple(e,t){e.setAttribute(te,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(ie))&&e.setAttribute(ie,t.className||""),t.centered&&e.setAttribute(Pe,""),t.disabled&&e.setAttribute(U,"")}getRipple(e){return this._hosts.get(e)||this._createRipple(e)}setDisabled(e,t){let n=this._hosts.get(e);if(n){n.disabled=t;return}t?e.setAttribute(U,""):e.removeAttribute(U)}_createRipple(e){if(!this._document)return;let t=this._hosts.get(e);if(t)return t;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(ie)),e.append(n);let r=new ot(new E(n),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return r._isInitialized=!0,r.trigger=e,r.centered=e.hasAttribute(Pe),r.disabled=e.hasAttribute(U),this.attachRipple(e,r),r}attachRipple(e,t){e.removeAttribute(te),this._hosts.set(e,t)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.ngOnDestroy(),this._hosts.delete(e))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{p as a,ei as b,Ce as c,$i as d,Wi as e};
