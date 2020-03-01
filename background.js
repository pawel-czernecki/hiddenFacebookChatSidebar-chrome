document.getElementsByTagName( 'html' )[0].classList.remove("sidebarMode");

window.addEventListener('resize', ()=>{
    document.getElementsByTagName( 'html' )[0].classList.remove("sidebarMode");
});

chrome.storage.sync.onChanged.addListener(function(changes, namespace) {
    for(key in changes) {
      if(key === 'isHide') {
            if(changes[key].newValue=='true') document.getElementsByTagName( 'html' )[0].classList.remove("sidebarMode");
            else if(changes[key].newValue=='false') document.getElementsByTagName( 'html' )[0].classList.add("sidebarMode");
            console.log("Zmieniono stan sidebara!");
      }
    }
  });