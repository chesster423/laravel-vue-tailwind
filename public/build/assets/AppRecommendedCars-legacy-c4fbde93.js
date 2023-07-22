System.register(["./vendor-legacy-5a00c1f1.js","./app-legacy-f97a04bf.js"],(function(e,t){"use strict";var s,a,l,n,i,r,o,c,d,u,g,p,m,h,f,x,y,b,v;return{setters:[e=>{s=e.a,a=e.b,l=e.Q,n=e.r,i=e.o,r=e.c,o=e.e,c=e.E,d=e.d,u=e.w,g=e.D,p=e.J,m=e.K,h=e.C,f=e.n,x=e.B,y=e.F},e=>{b=e._,v=e.C}],execute:function(){const t={name:"Funnel8",components:{CircleSvg:v},props:{payload:{type:Object,default:()=>({})},classWidth:{type:String,default:"lg:w-7/12"}},data:()=>({drop:!1,carImage:window.location.origin+"/images/funnels/step-6/car.jpg",noImage:window.location.origin+"/images/no-img.jpg",isLoading:!0}),computed:{...s({recommended_cars:"funnel/recommendedCars",authenticated:"auth/authenticated",user:"auth/user"})},mounted(){this.initialize()},methods:{...a({getRecommendedCars:"funnel/getRecommendedCars"}),async initialize(){this.isLoading=!0,await this.getRecommendedCars(this.payload),this.isLoading=!1},isSaved(e){return this.authenticated?Object.keys(e.user_saved_cars).length:null},async saveCar(e){if(this.authenticated){const t={car_id:e.id};await l.post("/api/car/user/save",t).then((t=>{e.user_saved_cars=1===t.data?[]:t.data}))}else this.$swal.fire({icon:"warning",title:"You need an account to save cars.",text:"Do you want to create an account now?",showCancelButton:!0,confirmButtonText:"Yes, register now!",footer:'<a href="/login/true" class="text-blue-400 hover:underline">I have an account. Go to Login.</a>'}).then((e=>{e.isConfirmed&&this.$router.push({name:"register",params:{redirect:!0}})}))},currencyFormat:e=>new Intl.NumberFormat("en-US").format(e),closeDrop(){this.drop=!1}}},w={class:"mx-auto pt-8"},k={class:"funnel-container container mx-auto"},_={key:0,class:"grid-rows-12 mx-auto mt-10 grid grid-flow-row gap-5 text-center lg:w-6/12"},C=o("br",null,null,-1),F=o("br",null,null,-1),S={key:1,class:"text-center"},j=o("span",null,"Getting your cars. Please wait",-1),I={key:2},L={class:"lg:col-span-1"},B=["src"],D=["src"],A={class:"col-span-2"},R={class:"mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5"},z={class:"col-span-3 col-start-1"},E={class:"funnel-label-2 font-medium"},G={class:"mt-2 text-sm font-medium"},N={class:"mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5"},T={class:"funnel-bg-light-gray col-span-2 p-1 pb-0"},$=o("label",{class:"text-xs"},"Price Range",-1),O={class:"text-center text-sm font-bold"},P={class:"funnel-bg-light-gray p-1 pb-0"},V=o("label",{class:"text-xs"},"Body Type",-1),W={class:"text-center text-sm"},Y={class:"funnel-bg-light-gray p-1 pb-0"},J=o("label",{class:"text-xs"},"Drive Type",-1),K={class:"text-center text-sm"},M={class:"funnel-bg-light-gray p-1 pb-0"},Q=o("label",{class:"text-xs"},"Fuel Efficiency",-1),U={class:"text-center text-sm"},q={class:"mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5"},H={class:"lg:col-start-4"},X=["href"],Z=[o("button",{class:"funnel-button-rounded funnel-bg-blue float-right rounded-full px-3 py-2 text-xs text-white opacity-90 hover:opacity-100",style:{width:"100px"}}," View Listing ",-1)],ee={key:1,class:"funnel-button-rounded funnel-bg-blue float-right rounded-full px-3 py-2 text-xs text-white opacity-50",style:{width:"100px"},disabled:""},te={class:"col-start-5"},se=["onClick"],ae=["fill"],le=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1)],ne=o("span",{class:"ml-1"},"SAVE",-1);e("A",b(t,[["render",function(e,t,s,a,l,b){const v=n("router-link"),ie=n("CircleSvg");return i(),r("div",w,[o("div",k,[0==e.recommended_cars.length?(i(),r("div",_,[c(" No cars found within your spending range. "),C,F,d(v,{to:{name:"step-7"},class:"whitespace-nowrap text-base font-medium underline",onClick:b.closeDrop},{default:u((({isActive:e})=>[c(" Go back ")])),_:1},8,["onClick"])])):g("",!0),l.isLoading?(i(),r("div",S,[d(ie,{class:"mx-auto mb-5 mt-5 h-6 w-6",stroke:"#000"}),j])):g("",!0),l.isLoading?g("",!0):(i(),r("div",I,[(i(!0),r(p,null,m(e.recommended_cars,((t,a)=>h((i(),r("div",{key:a,class:f([s.classWidth,"border-y-1 mx-auto mt-10 gap-4 border p-5 lg:grid lg:grid-cols-3 lg:border-0"])},[o("div",L,[t.images[0]?(i(),r("img",{key:0,src:t.images[0].image_url,class:"rounded-lg",alt:"Image"},null,8,B)):g("",!0),t.images[0]?g("",!0):(i(),r("img",{key:1,src:l.noImage,class:"rounded-lg",alt:"Image"},null,8,D))]),o("div",A,[o("div",R,[o("div",z,[o("label",E,x(t.model),1)])]),o("p",G,x(t.overview),1),o("div",N,[o("div",T,[$,o("p",O," $"+x(b.currencyFormat(t.cost)),1)]),o("div",P,[V,o("p",W,x(t.vehicle_type.vehicle_type_name),1)]),o("div",Y,[J,o("p",K,x(t.drive_type??null),1)]),o("div",M,[Q,o("p",U,x(t.fuel_consumption_combined),1)])]),o("div",q,[o("div",H,[t.dealership_url&&e.authenticated?(i(),r("a",{key:0,href:t.dealership_url,target:"_blank"},Z,8,X)):g("",!0),t.dealership_url?g("",!0):(i(),r("button",ee," NA "))]),o("div",te,[o("button",{class:"funnel-button-rounded funnel-bg-blue flex items-center rounded-full text-xs text-white opacity-90 hover:opacity-100",style:{width:"100px",padding:"6px 20px"},onClick:e=>b.saveCar(t)},[(i(),r("svg",{fill:b.isSaved(t)?"#FFF":"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-5 w-5"},le,8,ae)),ne],8,se)])])])],2)),[[y,a<5]]))),128))]))])])}]]))}}}));
