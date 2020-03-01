chrome.storage.sync.get('isHide',(result)=>{
    if(result.isHide=='true')
        document.getElementById("toggle-1").checked = true;
});

document.getElementById("toggle-1").addEventListener( 'change', function() {
    if(document.getElementById("toggle-1").checked == true) {
        chrome.storage.sync.set({'isHide': 'true'}, function(obj) {
            console.log(chrome.storage.local.get(['isHide'], ()=>{}));
          });
    } else {
        chrome.storage.sync.set({'isHide': 'false'}, function(obj) {  
            console.log("sidebar Show");
          });
    }
});