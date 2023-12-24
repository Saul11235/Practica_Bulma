
/*switch-text by Edwin Saul https:edwinsaul.com*/

// how to work:
//    a div whit class="switch-text"
//    contains a subdiv whit style "display:none"
//    switch the contains of the elements


function switch_a_element(element) {
  var divChild=null;
  var subChilds=element.childNodes;
  for (var x=0; x<subChilds.length; x++) {
    if (subChilds[x].nodeName.toLowerCase()==="div") {
      divChild=subChilds[x]; break;
    }
  }
  if (divChild!= null) {
    let old_text=element.childNodes[0].textContent.trim().slice();
    let new_text=divChild.innerText.trim().slice();
    let newdiv=document.createElement("div");
    newdiv.style.display="none";
    newdiv.innerHTML=old_text;
    element.innerText=new_text;
    element.appendChild(newdiv);
  }
}

function switch_all_elements() {
  let all_elements=document.getElementsByClassName("switch-text");
  for (var x=0; x<all_elements.length; x++ ) {
    switch_a_element(all_elements[x]);
  }
}

// config button to switch texts
var switch_text_button=document.getElementById("switch-text-button");
switch_text_button.addEventListener("click",switch_all_elements);

// autoconfig lang - es
var browser_lang=navigator.language || navigator.userLanguage;
if ( browser_lang.startsWith("es")) {
  switch_all_elements();
}

