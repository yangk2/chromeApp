chrome.tabs.executeScript({
    code:'document.querySelector("body").innerText'
},function(result){
    if(result[0]){
        
        $('body').html(result[0])
        // alert(result[0])
    }else{
        alert("no")
    }
})