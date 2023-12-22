/*este es un ejemplo de como colocar elementos en js*/

var button_switch_lang=document.getElementById("switch-lang")

function switch_all_texts() {
  let all_text_elements=document.getElementsByClassName("switch-text");
  for (let i = 0; i < all_text_elements.length; i++) {
    let a_text_element=all_text_elements[i]
    let text_childs=a_text_element.children
    console.log(text_childs)
    if (text_childs.length>0) {
      let first_text_child=text_childs[0]
      let text_variable=a_text_element.innerText
      a_text_element.innerText=first_text_child.innerText
      first_text_child.innerText=text_variable
      }

    //a_text_element.innerText="xxx"
  }
}

button_switch_lang.addEventListener("click", switch_all_texts)


