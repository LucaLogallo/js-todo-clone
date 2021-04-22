$(function(){
  /* array base che contiene una serie di cose da fare di default */
  var toDoDefault = [
    "fai la cacca",
    "prendi la pillola per non diventare pelato",
    "scongelare il pollo",
    "portare ringhio dal veterinario"
  ];

  for(var i = 0; i < toDoDefault.length; i++){

    var toDo = toDoDefault[i];

    console.log(toDo);
    /* mi salvo una nuova variabile che contiene il codice html dell'elemento della lista da inserire che conterrà la variabile da inserire salvata in toDo */

    var stringHtml = '<li><p>'+toDo+'</p><i class="far fa-trash-alt"></i></li>';

    console.log(stringHtml);

    $('.container #listaToDo').append(stringHtml);

  }

  $(".container input").keyup(function(event){
    
    if(event.which === 13){
      var toDo = $(this).val().trim();

      if(toDo.length > 3){
        var stringHtml = '<li><p>' + toDo + '</p><i class="far fa-trash-alt"></i></li>';

        console.log(stringHtml);
        $('.container #listaToDo').append(stringHtml);
        $(".container input").val('');
      }
    }
  })

  //prova sul bottone 
  $(".container input").keyup(function(event){
      var toDo = $(this).val().trim();
  

    $(document).on("click",".container button",function(){
      var stringHtml = '<li><p>' + toDo + '</p><i class="far fa-trash-alt"></i></li>';

        console.log(stringHtml);
        $('.container #listaToDo').append(stringHtml);
        $(".container input").val('');
      })
  });





  $(document).on("click",".container #listaToDo .far.fa-trash-alt",function(){
    $(this).parent().remove();
  });


  /* /soluzione 1 */


  /* soluzione 2 */

 
 /*    for(var i = 0; i < arrList.length; i++){
      var strList = arrList[i];
      
      var item = $('.template li').clone();
      $(item).find('.testo').append(strList);
      $('.app ul').append(item);
    }
  
  $(document).on("click",".container #listaToDo .far.fa-trash-alt",function(){
    $(this).parent().remove();
  }); */

  //mi faccio una div in html che sarà la base del mio clone che ripeterò ovviamente il div è display none
  //mi salvo il div clone in una variabile in js

  /* var itemClone = $('.clone').clone(); */
  //adesso in questo itemClone che contiene la p e la i devo cercare il tag dove andare a scrivere o attraverso lo stesso tag oppure attraverso una classe data al tag dove andare a scrivere

  /* $(itemClone).find('p').append(stringHtml); */
  //ho cercato con il find nell'itemClone il figlio che volevo scrivere e con append gli ho inserito la stringa salvata in stringHtml 

  //adesso devo indiacare dove inserire itemClone in html e io lo voglio negli ul quindi
  /* $('.container #listaToDo').append(itemClone); */
  //così gli ho detto di mettere con append gli itemClose nella ul che ha l'id #listaToDo figlia di .container

  //adesso devo fare la funzione che mi permette di clonare gli itemClone e di inserirli

  /* $('.container input').keyup(function(event){
    if(event.which === 13){
      var stringHtml = $(this).val().trim();
      if(stringHtml.length > 3){
       var itemClone = $('.clone').clone();
       $(itemClone).find('p').append(stringHtml);
       $('.container #listaToDo').append(itemClone);
      }
    }
  }); */

  /* /soluzione 2 */
}) 