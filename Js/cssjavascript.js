$(document).ready(function()
{
    function limpiar(){
        $("div").css("background-color","white");
    }
    $("#Cuadricula").css({"position": "relative","top":"20px","left":"200px"});
    $("#s1").css({"position": "absolute","top":"100px","left":"210px"});

    $("h1").css({"color":"red","font-family":"helvetica","font-size":"50px","margin-left":"200px"});
    $(".cuadro, .cuadro2").css({"height":"90px","width":"90px","border":"10px solid blue","display":"inline-block"});

    $("#bt1").click(function () {
        limpiar();
        $('div[for="1"], div[name="c1"],.cuadro:not(:empty),.cuadro2,div:nth-of-type(6n+7),div:nth-of-type(8n+9)').css("background-color","red");
    });
    $("#bt2").click(function () {
        limpiar();
        $('div[for="1"], div[name="c1"],.cuadro:not(:empty),.cuadro2').css("background-color","red");
    });
    $("#bt3").click(function () {
        limpiar();
        $('div[name="c1"],div:nth-of-type(8n+9),div:first-child,.cuadro:not(:empty)').css("background-color","red");
    });
    $("#bt4").click(function () {
        limpiar();
        $('div[for="1"],div:nth-of-type(8n+9),div   :first-child,.cuadro2').css("background-color","red");
    });
    $("#bt5").click(function () {
        limpiar();
        $('div:nth-of-type(6n+7),div:nth-of-type(8n+9),div:first-child').css("background-color","red");
    });
    $("#bt6").click(function () {
        limpiar();
        $('div:nth-of-type(7n+4)').css("background-color","red");
    });
    $("#bt7").click(function () {
        limpiar();
        $('div[name="p25"]+div,div[for="2"]+div,div:nth-child(25)').css("background-color","red");
    });
    $("#bt8").click(function () {
        limpiar();
        $('div[name="p25"]+div,div:nth-of-type(7n+4),div[for="2"]+div,div:nth-child(25)').css("background-color","red");
    });

});