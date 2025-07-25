let output=document.querySelector("#output");
let allinput=document.querySelectorAll(".leftpart textarea");
let htmlcode,csscode,jscode='';
allinput.forEach((el,index)=>{
    el.addEventListener("keyup",()=>{
        if(index==0){
            htmlcode=el.value;
        }
        if(index==1){
            csscode=el.value;
        }
        if(index==2){
            jscode=el.value;
        }
        output.contentDocument.body.innerHTML=htmlcode;
        output.contentDocument.head.innerHTML=`<style>${csscode}</style>`;
        output.contentWindow.eval(jscode);
    })
})