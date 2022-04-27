window.onload=()=>{
    let memo=localStorage["Memo"];
    if(memo==null){
        memo=''
    }
    document.getElementById("text_id").value=memo;
    
}

document.getElementById("text_save").onclick=()=>{
    localStorage["Memo"]=document.getElementById("text_id").value;
}