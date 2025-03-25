import{b as S,d as f,f as A,g as M,i as h,j as E,k as D,l as B,m as k,o as I}from"./chunk-DYC5FZPF.js";import{a as v,h as P,k as U}from"./chunk-DKTAZ3D3.js";import{Fb as b,Hc as x,Rb as _,Ua as d,Va as l,Z as w,_ as s,ca as F,ha as y,ia as c,nb as u,wb as i,xb as r,yb as a}from"./chunk-ZH6AJY4I.js";var g=class o{constructor(e){this.http=e}apiUrl="https://empleaveappnode.onrender.com";LoginEmployee(e){return this.http.post(`${this.apiUrl}/login`,e,{headers:{"Content-Type":"application/json"}})}static \u0275fac=function(t){return new(t||o)(F(v))};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})};var p=class o{constructor(e,t,n){this.formBuilder=e;this.authSrv=t;this.router=n}loginForm;ngOnInit(){this.loginForm=this.formBuilder.group({emailId:new h("",[f.required,f.email]),password:new h("",[f.required])})}login(){let e=this.loginForm.value,t={userEmail:e.emailId,userPassword:e.password};this.authSrv.LoginEmployee(t).subscribe({next:n=>{console.log(n),n.status==="Success"?(this.router.navigate(["/dashboard"]),sessionStorage.setItem("Employee",JSON.stringify(n.data))):(alert("Wrong Credentials"),this.loginForm.reset())},error:n=>{console.log("Error:",n),alert(n.error.data?.message||"Invalid credentials"),this.loginForm.reset()}})}static \u0275fac=function(t){return new(t||o)(l(k),l(g),l(P))};static \u0275cmp=y({type:o,selectors:[["app-login"]],decls:27,vars:2,consts:[[1,"parent"],[1,"container"],[1,"screen"],[1,"screen__content"],[1,"login",3,"ngSubmit","formGroup"],[1,"login__field"],[1,"login__icon","fas","fa-user"],["type","text","formControlName","emailId","placeholder","User name / Email",1,"login__input"],[1,"login__icon","fas","fa-lock"],["type","password","formControlName","password","placeholder","Password",1,"login__input"],["type","submit",1,"button","login__submit",3,"disabled"],[1,"button__text"],[1,"button__icon","fas","fa-chevron-right"],[1,"social-login"],[1,"social-icons"],["href","#",1,"social-login__icon","fab","fa-instagram"],["href","#",1,"social-login__icon","fab","fa-facebook"],["href","#",1,"social-login__icon","fab","fa-twitter"],[1,"screen__background"],[1,"screen__background__shape","screen__background__shape4"],[1,"screen__background__shape","screen__background__shape3"],[1,"screen__background__shape","screen__background__shape2"],[1,"screen__background__shape","screen__background__shape1"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),b("ngSubmit",function(){return n.login()}),i(5,"div",5),a(6,"i",6)(7,"input",7),r(),i(8,"div",5),a(9,"i",8)(10,"input",9),r(),i(11,"button",10)(12,"span",11),_(13,"Log In Now"),r(),a(14,"i",12),r()(),i(15,"div",13)(16,"h3"),_(17,"log in via"),r(),i(18,"div",14),a(19,"a",15)(20,"a",16)(21,"a",17),r()()(),i(22,"div",18),a(23,"span",19)(24,"span",20)(25,"span",21)(26,"span",22),r()()()()),t&2&&(d(4),u("formGroup",n.loginForm),d(7),u("disabled",!n.loginForm.valid))},dependencies:[E,S,A,M,D,B],styles:['@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.parent[_ngcontent-%COMP%]{overflow:hidden;background:linear-gradient(90deg,#c7c5f4,#776bcc)}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:100vh}.screen[_ngcontent-%COMP%]{background:linear-gradient(90deg,#5d54a4,#7c78b8);position:relative;height:600px;width:360px;box-shadow:0 0 24px #5c5696}.screen__content[_ngcontent-%COMP%]{z-index:1;position:relative;height:100%}.screen__background[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}.screen__background__shape[_ngcontent-%COMP%]{transform:rotate(45deg);position:absolute}.screen__background__shape1[_ngcontent-%COMP%]{height:520px;width:520px;background:#fff;top:-50px;right:120px;border-radius:0 72px 0 0}.screen__background__shape2[_ngcontent-%COMP%]{height:220px;width:220px;background:#6c63ac;top:-172px;right:0;border-radius:32px}.screen__background__shape3[_ngcontent-%COMP%]{height:540px;width:190px;background:linear-gradient(270deg,#5d54a4,#6a679e);top:-24px;right:0;border-radius:32px}.screen__background__shape4[_ngcontent-%COMP%]{height:400px;width:200px;background:#7e7bb9;top:420px;right:50px;border-radius:60px}.login[_ngcontent-%COMP%]{width:320px;padding:156px 30px 30px}.login__field[_ngcontent-%COMP%]{padding:20px 0;position:relative}.login__icon[_ngcontent-%COMP%]{position:absolute;top:30px;color:#7875b5}.login__input[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #D1D1D4;background:none;padding:10px 10px 10px 24px;font-weight:700;width:75%;transition:.2s}.login__input[_ngcontent-%COMP%]:active, .login__input[_ngcontent-%COMP%]:focus, .login__input[_ngcontent-%COMP%]:hover{outline:none;border-bottom-color:#6a679e}.login__submit[_ngcontent-%COMP%]{background:#fff;font-size:14px;margin-top:30px;padding:16px 20px;border-radius:26px;border:1px solid #D4D3E8;text-transform:uppercase;font-weight:700;display:flex;align-items:center;width:100%;color:#4c489d;box-shadow:0 2px 2px #5c5696;cursor:pointer;transition:.2s}.login__submit[_ngcontent-%COMP%]:active, .login__submit[_ngcontent-%COMP%]:focus, .login__submit[_ngcontent-%COMP%]:hover{border-color:#6a679e;outline:none}.button__icon[_ngcontent-%COMP%]{font-size:24px;margin-left:auto;color:#7875b5}.social-login[_ngcontent-%COMP%]{position:absolute;height:140px;width:160px;text-align:center;bottom:0;right:0;color:#fff}.social-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.social-login__icon[_ngcontent-%COMP%]{padding:20px 10px;color:#fff;text-decoration:none;text-shadow:0px 0px 8px #7875B5}.social-login__icon[_ngcontent-%COMP%]:hover{transform:scale(1.5)}']})};var R=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:p}],m=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=c({type:o});static \u0275inj=s({imports:[U.forChild(R),U]})};var O=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=c({type:o});static \u0275inj=s({imports:[x,I,m]})};export{O as AuthModule};
