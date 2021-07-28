let flag1 = 1;
function openP() {
  document.getElementById("popup").style.display = "block";
}

function closeP() {
  document.getElementById("popup").style.display = "none";
}

function show1(){
  document.getElementById("content-cards1").style.display = "block";
  document.getElementById("content-cards2").style.display = "none";
  flag1 = 1;
  document.getElementById("kards2").style.opacity = "0.5";
  document.getElementById("kards1").style.opacity = "1";
}

function show2(){
  document.getElementById("content-cards2").style.display = "block";
  document.getElementById("content-cards1").style.display = "none";
  document.getElementById("kards1").style.opacity = "0.5";
  document.getElementById("kards2").style.opacity = "1";
  flag1 = 0;
}

function sort1() {
  document.getElementById("kard1").style.opacity = "0.5";
  document.getElementById("kard2").style.opacity = "1";
  if (flag1 == 1){
    var nodeList = document.querySelectorAll('.card_1');
  }else{
    var nodeList = document.querySelectorAll('.card_2');
  }
  var itemsArray = [];
  var parent = nodeList[0].parentNode;
  for (var i = 0; i < nodeList.length; i++) {    

    //itemsArray.push(parent.removeChild(nodeList[i]));
    itemsArray[i] = nodeList[i];
  }
  itemsArray.sort(function(nodeA, nodeB) {
      var textA = nodeA.querySelector('.Datec').textContent;
      var textB = nodeB.querySelector('.Datec').textContent;
       let texta1 = textA.substr(0, 2);
       let texta2 = textA.substr(3, 2);
       let texta3 = textA.substr(6);
      console.log(texta1);
      console.log(texta2);
      console.log(texta3);
      textA = texta2 + "." + texta1 + "." + texta3
      let textb1 = textB.substr(0, 2);
      let textb2 = textB.substr(3, 2);
      let textb3 = textB.substr(6);
      console.log(textb1);
      console.log(textb2);
      console.log(textb3);
      textB = textb2 + "." + textb1 + "." + textb3
      console.log(textB);
      var numberA = Date.parse(textA);
      var numberB = Date.parse(textB);
      console.log(Date.parse(textA))
      console.log(textA + ' a ' + textB)
      if (numberA < numberB) return -1;
      if (numberA > numberB) return 1;
      return 0;
    })
    .forEach(function(node) {
      parent.appendChild(node)
    });
}

function sort2() {
  document.getElementById("kard2").style.opacity = "0.5";
  document.getElementById("kard1").style.opacity = "1";
  if (flag1 == 1){
    var nodeList = document.querySelectorAll('.card_1');
  }else{
    var nodeList = document.querySelectorAll('.card_2');
  }
  let itemsArray = [];
  let parent = nodeList[0].parentNode;
  for (i = 0; i < nodeList.length; i++) {    

    //itemsArray.push(parent.removeChild(nodeList[i]));
    itemsArray[i] = nodeList[i];
  }
  itemsArray.sort(function(nodeA, nodeB) {
    let textA = nodeA.querySelector('.Datec').textContent;
    let textB = nodeB.querySelector('.Datec').textContent;
    let texta1 = textA.substr(0, 2);
    let texta2 = textA.substr(3, 2);
    let texta3 = textA.substr(6);
    console.log(texta1);
    console.log(texta2);
    console.log(texta3);
    textA = texta2 + "." + texta1 + "." + texta3
    let textb1 = textB.substr(0, 2);
    let textb2 = textB.substr(3, 2);
    let textb3 = textB.substr(6);
    console.log(textb1);
    console.log(textb2);
    console.log(textb3);
    textB = textb2 + "." + textb1 + "." + textb3
    console.log(textB);
    var numberA = Date.parse(textA);
    var numberB = Date.parse(textB);
    console.log(Date.parse(textA))
    console.log(textA + ' a ' + textB)
    if (numberA < numberB) return 1;
    if (numberA > numberB) return -1;
    return 0;
  })
  .forEach(function(node) {
    parent.appendChild(node)
  });
}

function allcard(){
  document.getElementById('zagruska-proizvod').checked = 'true';
  document.getElementById('btnall1').style.display = 'none';
}

function allcard2(){
  document.getElementById('zagruska-proizvods').checked = 'true';
  document.getElementById('btnall2').style.display = 'none';
}

function OpenCard(nomer){
  
  document.getElementById("popapglavn").style.display = "block";
  var parent = document.getElementById('card'+ nomer);

  console.log(parent.getElementsByClassName('Datec')[0].textContent);
  document.getElementById('popapImgCard').src = parent.querySelector('img').src;
  document.getElementById('popapDataCard').innerHTML = parent.getElementsByClassName('Datec')[0].textContent;
  document.getElementById('popapZaglCard').innerHTML = parent.getElementsByClassName('zagl-card')[0].textContent;
  document.getElementById('popapTXTCard').innerHTML = parent.getElementsByClassName('text-card')[0].textContent;

}
function closeP2(){
  document.getElementById("popapglavn").style.display = "none";
}