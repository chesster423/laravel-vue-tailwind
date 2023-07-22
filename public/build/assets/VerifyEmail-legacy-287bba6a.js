System.register(["./vendor-legacy-5a00c1f1.js","./Errors-legacy-3c12a83a.js","./Success-legacy-fd057051.js","./app-legacy-f97a04bf.js","./__commonjsHelpers__-legacy-366a78b9.js"],(function(e,s){"use strict";var t,r,i,a,o,n,c,l,d,u,m,h,y,f,p,g,v,x;return{setters:[e=>{t=e.f,r=e.a,i=e.b,a=e.r,o=e.o,n=e.c,c=e.e,l=e.z,d=e.D,u=e.B,m=e.w,h=e.E,y=e.d,f=e.n},e=>{p=e.E},e=>{g=e.S},e=>{v=e._,x=e.C},null],execute:function(){const s={components:{Errors:p,Success:g,CircleSvg:x,HomeIcon:t},props:{id:{type:Number,required:!0},hash:{type:String,required:!0}},data:()=>({errors:null,success:"",loading:!1}),computed:{...r({authenticated:"auth/authenticated",user:"auth/user",roles:"auth/roles"})},methods:{...i({verifyResend:"auth/verifyResend",verifyEmail:"auth/verifyEmail",popToast:"toast/popToast"}),popSuccess(){this.$swal.fire({title:"Email verified!",text:"Set password now?",icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, redirect me!"}).then((e=>{e.isConfirmed?this.$router.push({name:"password"}):this.$router.push({name:"dashboard"})}))},async verify(){this.loading=!0,this.errors=null,this.success="";try{await this.verifyEmail({id:this.id,hash:this.hash}).then((e=>{this.loading=!1,this.success="Email Successfully Verified. Redirecting ...",this.popToast({message:"Email Successfully Verified",timer:5e3,icon:"success"}),setTimeout((()=>{this.$router.push({name:"history"})}),1e3)}))}catch(e){this.errors="An errored, please try again later",this.popToast({message:"An errored, please try again later.",timer:5e3,icon:"error"}),this.loading=!1}this.loading=!1},async resend(){this.loading=!0;try{await this.verifyResend({id:this.id}).then((e=>{this.loading=!1,this.popToast({message:"Email sent.",timer:5e3,icon:"success"})}))}catch(e){this.popToast({message:"An errored, please try again later.",timer:5e3,icon:"error"}),this.loading=!1}}}},w={class:"mx-auto max-w-screen-md text-gray-900"},b={class:"flex justify-center"},k={class:"flex-1"},C={class:"w-auto rounded border-gray-300 bg-white p-3 text-gray-800 shadow dark:bg-slate-900 dark:text-gray-100"},E={class:"border-gray-300 p-3 pt-6 text-center font-semibold"},_={class:"rounded p-4"},S={class:"mx-auto my-1 mt-3 flex w-full items-center justify-center py-2 sm:mt-0 sm:w-8/12 md:w-10/12 md:p-4"},j={key:0},T={class:"text-center"},B=c("span",{class:"sr-only"},"Go Home",-1),R={key:1},A={key:0,class:"flex items-center justify-center rounded-sm bg-blue-500 p-2 px-6 text-white hover:bg-blue-600"};e("default",v(s,[["render",function(e,s,t,r,i,p){const g=a("success"),v=a("errors"),x=a("HomeIcon"),V=a("router-link"),H=a("circle-svg"),$=a("AppButton");return o(),n("div",w,[c("div",b,[c("div",k,[c("div",C,[i.success?(o(),l(g,{key:0,content:i.success,onClose:s[0]||(s[0]=e=>i.success=null)},null,8,["content"])):d("",!0),i.errors?(o(),l(v,{key:1,content:i.errors,"container-class":"w-full",onClose:s[1]||(s[1]=e=>i.errors=null)},null,8,["content"])):d("",!0),c("h5",E,u(e.user&&e.user.email_verified_at?"Your email is already confirmed":"Please confirm verification of your email"),1),c("div",_,[c("div",S,[e.user&&e.user.email_verified_at?(o(),n("div",j,[c("div",T,[e.authenticated?(o(),l(V,{key:0,to:{name:"dashboard"},class:"text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",onClick:e.closeDrop},{default:m((({isActive:e})=>[y(x,{class:"mx-auto mb-3 h-20 w-20 text-center"}),B])),_:1},8,["onClick"])):d("",!0)])])):(o(),n("div",R,[i.loading?(o(),n("div",A,[h(" Verifying Email "),y(H,{class:"ml-3 h-5 w-5"})])):(o(),l($,{key:1,disabled:i.loading,loading:i.loading,onClick:s[2]||(s[2]=e=>i.errors?p.resend():p.verify())},{text:m((()=>[h(u(i.errors?"Oops! Resend Verification?":"Click to Verify")+" ",1),c("span",{class:f(["fa-fw fa-envelope ml-2",i.errors?"far fa-envelope":"fas fa-check"])},null,2)])),_:1},8,["disabled","loading"]))]))])])])])])])}]]))}}}));