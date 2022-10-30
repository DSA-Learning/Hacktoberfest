const dropZone =document.querySelector(".drop-zone");
const browserbtn=document.querySelector(".browserbtn");
const fileinput=document.querySelector("#fileinput");
dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault()
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }
});
dropZone.addEventListener("dragleave",()=>{
    dropZone.classList.remove("dragged");
});
dropZone.addEventListener("drop",(e)=>{
    e.preventDefault()
    dropZone.classList.remove("dragged");
    const file=e.dataTransfer.files
    console.log(file);
    if(file.length){
        fileinput.file=files;
    }
    
});
browserbtn.addEventListener("click", ()=>{
    fileinput.click();
});



