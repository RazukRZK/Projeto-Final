$(document).ready(function(){
    var assistenteVirtual = $("#assistenteVirtual").hide();
    var email = $("#email").hide();
    var telefone = $("#telefone").hide();

    $("#btnAssistenteVirtual").on("click", function(){
      assistenteVirtual.slideToggle(1000);
    })

    $("#btnEmail").on("click", function(){
      email.slideToggle(1000);
    })

    $("#btnTelefone").on("click", function(){
      telefone.slideToggle(1000);
    })
  });




