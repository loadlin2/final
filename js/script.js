console.log('start!!!');

"use strict";

console.log('started');

 

let statusSmile=document.getElementsByClassName('icon');

let imgtag=document.createElement('img');

imgtag.src='img/heart.png';

statusSmile[0].appendChild(imgtag);

 

class cPerson {
                constructor(name){
                              this.name=name;
                               this.happiness=0;
                }

                hasCat(){

                               this.happiness+=1;

                               return this.happiness;

                }

                hasRest(){

                               this.happiness+=1;

                               return this.happiness;

                }

                hasMoney(){

                               this.happiness+=1;

                               return this.happiness;                 

                }

                isSunny(){

                               this.happiness+=1;

                               return this.happiness;                 

                }

}


const form=document.querySelector('form');

form.onsubmit= function(e){
                e.preventDefault();
                let fName=document.getElementsByTagName('input');
                let pers = new cPerson(fName.name.value);
                if (fName.cat.checked){pers.hasCat();}
                if (fName.rest.checked){pers.hasRest();}
                if (fName.money.checked){pers.hasMoney();}                             
                pers.isSunny();
                let nname=document.getElementsByClassName('personName');
                nname[0].innerText=pers.name;
                let smile=document.getElementsByTagName('img');
                if (pers.happiness==4) {
                               smile[0].src='img/good.png';
                }
                if (pers.happiness==3 || pers.happiness==2){
                               smile[0].src='img/neu.png';
                }
                if (pers.happiness<2){

                               smile[0].src='img/bad.png';
                }

}