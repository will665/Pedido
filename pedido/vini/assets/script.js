confirm("Are you sure you want to delete?")
$(document).ready(function(){

    $(".mudaTela").click(function(){
        mudaTela( $(this), $(this).attr("nova"), $(this).attr("animacao"), $(this).attr("tempoAnimacao") );
    });

    $("a.opcoes").click(function(e){
        e.preventDefault();
        $("div.opcoes").slideToggle(500);
    });

    $(".calendario .marcado").click(function(){
        mostraMsgMes($(this).attr("value"));
    });

    const mudaTela = ( atual, nova = null, animacao = "fade", tempoAnimacao = 900 ) => {

        // define a nova tela
        if(!nova){
            nova = parseInt(atual.parent().attr("id").split("tela")[1])+1;
        }

        if(animacao == "fade"){
            $("#tela"+(nova-1)).fadeOut(tempoAnimacao);
            setTimeout(() => {
                $("#tela"+nova).fadeIn(tempoAnimacao)
            }, tempoAnimacao);
        }else{
            $("#tela"+(nova-1)).hide(tempoAnimacao);
            $("#tela"+nova).show(tempoAnimacao);
        }

        if($("#tela"+nova).hasClass("temporizado")){
            $("#tela"+nova+" div").hide();
            telaTemporizada(nova, 0);
        }

        verificaFundo(nova);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        if(nova == 5){
            var audio = new Audio('assets/musica.mp3');
            audio.volume = 0.1;
            audio.play();
        }
        
    }

    const telaTemporizada = ( nTela, contador ) =>{

        const tela = $("#tela"+nTela+" div:eq("+contador+")");
        const temporizador = 500;
        const temporizadorPrimeiraTela = (contador==0?$("#tela"+nTela).attr("tempo"):temporizador);

        setTimeout(() => {
            tela.fadeIn(temporizador);

            setTimeout(() => {
                tela.fadeOut(temporizador);
                if(tela.attr("final") == "true"){
                    mudaTela(null, nTela+1, "fade", 900);
                    verificaFundo(nTela+1);
                }else{
                    telaTemporizada(nTela, contador+1);
                }

            }, tela.attr("tempo") );

        }, temporizadorPrimeiraTela);
        
    }

    const verificaFundo = (nTela) =>{

        const fundo = $("#tela"+nTela).attr("fundo");
        const tempo = $("#tela"+nTela).attr("tempo");

        if(fundo){
            $("body").attr("class", fundo);            
        }
        
    }

    const mostraMsgMes = (texto) =>{

        let titulo;
        let mensagem;

        switch(texto){
            case "5/5": titulo = "05 de Maio de 2021"; mensagem = "<p>Esse foi o dia que nos conhecemos! Ou pelo menos, o dia que nos conhecemos j?? sabendo que dali pra frente poderiamos ter alguma coisa juntos.</p><p>Foi bem r??pido, voc?? estava atrasada para o servi??o (normal) e conversamos t??o pouquinho, mas j?? foi o suficiente para eu entender naquele momento que voc?? era diferente, e que todo o tempo que eu dedicava em escrever minhas mensanges pra voc??, estavam valendo a pena. Eu quis de verdade, a partir desse dia, te conhecer melhor do que j?? conhecia por mensagens.</p><p>E eu estava certo, voc?? ?? incr??vel!</p>";break;
            case "8/5": titulo = "08 de Maio de 2021"; mensagem = "<p>Foi o primeiro dia que sa??mos.<br>Voc?? estava linda, usando um contorno branco nos olhos e batom rosa bem claro.</p><p>Sentamos em um banco na lagoa e a todo momento eu ainda n??o conseguia acreditar que estava ali com voc??, voc?? estava incr??vel e aquele momento foi m??gico pra mim, e tive a certeza disso depois de poder finalmente te beijar de verdade! E que beijo bom ??????</p>";break;
            case "15/5": titulo = "15 de Maio de 2021"; mensagem = "<p>Foi quando te vi com os cabelos cacheados, nesse dia voc?? estava usando l??pis puxado nas pontas. Repetimos o mesmo processo da semana anterior. Sa??mos, bebemos um pouco e procuramos um lugar para ficarmos mais a vontade, acabamos encontrando aquela casa no final do bairro Muraiaishi. Foi quando fomos pra sua casa pela primeira vez.</p><p>Eu j?? te contei que acho que as escadas da sua casa parecidas com a de um castelo?</p>";break;
            case "25/6": titulo = "25 de Junho de 2022"; mensagem = "<p>Foi no anivers??rio da Madu (santa madu), cheguei l?? depois de um rol?? aleat??rio e quando me levaram pra mesa a primeira coisa que percebi foram esses olhos curiosos e como de costume vc fez a pergunta que quebrou o gelo 'vc era do cemeb?'.</p><p>Papo vai papo vem, cantamos os parab??ns e fomos jogar verdade ou desafio e demos nosso primeiro beijo, o resto da noite vc sabe.</p>";break;
            case "29/5": titulo = "29 de Maio de 2021"; mensagem = "<p>Essa foi a vez que mais rodamos a cidade em busca de um lugar para ficar ????<br>Chegamos a ideia do cemit??rio, que embora fosse sinistro, ainda foi e ?? um ??timo lugar para ficarmos haha.</p><p>Nesse dia acabamos indo muito cedo para a sua casa, e encontramos com seu irm??o e o namorado dele, foi quando eu os conheci. A primeira impress??o que tive do seu irm??o ?? que ele ?? uma pessoa extremamente amig??vel <small><del>eu pegava</del></small>.</p>";break;
            case "26/9": titulo = "26 de Setembro de 2022"; mensagem = "<p>Finalmente chegou o dia, eu como de costume todo atrasado e voc?? j?? estava l?? me esperando, quando cheguei perto do Calaf e te vi com aquela blusa azul fiquei nervoso e ansioso pois n??o sabia o que iria acontecer, cheguei, te comprimentei e quando percebi j?? estava segurando suas m??o e te beijando, al??m de outras coisinhas rs.... A noite foi perfeita e mal podia esperar pra te ver dnv.</p>";break;
            case "21/9": titulo = "21 de Setembro de 2022"; mensagem = "<p>Finalmente criei coragem e mandei mensagem pro garoto que n??o saia da minha cabe??a, voc??.Em meio a desesperos, postei no twitter e repidamente fui respondido com vc confirmando que iria, mal podia esperar para sentir seu abra??o novamente.</p>";break;
            case "28/9": titulo = "28 de Setembro de 2022"; mensagem = "<p>Ai ai... o que dizer desse dia? Acho que foi t??o intenso e sensacional, que reciprocamente eu nem precisaria escrever mais nada aqui, voc?? saberia exatamente o momento ??nico que tivemos juntos.</p><p>Eu pensei em mil coisas para fazermos em Franca, e no final das contas, n??o fizemos nada do que eu havia planejado ???? e o melhor de tudo, foi melhor do que eu pensei. Isso mostra que s?? de estar com voc??, independente da circunst??ncias ou o que estiver acontecendo, tudo fica bom, melhor do que o esperado. ?? como voc?? mesmo diz na sua descri????o do WhatsApp \"S??o os momentos mais simples que marcam nossa vida.\"</p>";break;
            case "13/6": titulo = "13 de Junho de 2021"; mensagem = "<p>Acordar e ver voc?? ali, certamente ?? uma das coisas que nunca vou esquecer na minha vida. S??o tantos momentos que eu consigo lembrar de todos em m??nimos detalhes. Voc?? saindo do banho toda perfumada; a gente assistindo Naruto juntos; nosso momento de intimidade de uma forma incr??vel; tomamos sorvete juntos; a viagem de volta a Gua??ra enquanto eu segurava sua m??o...</p><p>De fato, nunca esquecerei.</p>";break;
            case "19/6": titulo = "19 de Junho de 2021"; mensagem = "<section class='text-center'><p class='letra-vermelha'><strong>Este momento est?? sendo escrito agora...</strong></p></section>";break;
            case "final": titulo = "9 de Janeiro de 2022"; mensagem = "<section class='text-center mt-5 mb-5'><p><strong>O dia em que ele disse<br><span class='letra2 letra-vermelha'>SIM</span></strong></p></section>";break;
        }

        mostraPopUp(true, titulo, mensagem);
        telaFinal = (texto=="final"?true:false);
    }

    

});

let telaFinal = false;

const mostraPopUp = (mostrar, titulo = "T??tulo de testes", mensagem = "Mensagem de teste...") =>{

    if(mostrar){
        $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
        $(".pop-up").fadeIn(500);
        $(".pop-up h1").html(titulo);
        $(".pop-up div").html(mensagem);
        $(".container").css("opacity", "0.5");
    }else{
        $(".pop-up").fadeOut(500);
        $(".container").css("opacity", "1");

        if(telaFinal){
            $("#tela19").fadeOut(4000);
            setTimeout(() => {
                $("#tela20").fadeIn(6500);
                $("body").attr("class", "fundo6");    
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }, 4000);
        }

    }

}