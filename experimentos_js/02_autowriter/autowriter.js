/*Autowriter animate text by Edwin Saul*/

class autowriter  {

  constructor() {
    this.count_elem=0;   //count element in  autowriter-input
    this.count_char=0;   //count char element
    this.begin=true;     //true if begins false is erasing
    this.typingchar="_"; //char for typing
    this.timechar=0.1;   //time for write a character
    this.timeread=1 ;    //time for read message
    this.textline="";    //var line text
  }
  get_li_childs() {
    null
  }
  get_line() {
    //only li childs
    let elements_input=document.getElementById("autowriter-input").childNodes
    if (this) {
    }
    

    console.log(elements_input);
  }

  fun() {
  //  console.log("inicio")
    this.get_line()
   // console.log(this.textline)
    //console.log("final")
  }







}


var autowriter_obj = new autowriter();
autowriter_obj.fun();


console.log("autowriter ok")






