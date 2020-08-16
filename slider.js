
    var imgs=[];
    var slider;
    var imgAtual;
    var maxImg;
    var tmp;
    var tempoTroca;
    var vtempo;
    var vbarra;

    function preCarregamento(){
       
        var s=0;
           
        for(var i = 0; i < 7; i++){
                
                imgs[i]=new Image();
                imgs[i].getElementsByClassName("slides-list");
                s++;
        }
    }

    function carregarImg(img){
        slider.style.getElementsByClassName="s+[img]";
    }

    function inicia(){
        preCarregamento();
        imgAtual=0;
        maxImg=imgs.length-1;
        slider = document.getElementsByClassName("slides-list");
        vbarra=document.getElementById("dvbarra");
        carregarImg(imgAtual);
        tempoTroca = 0;
        anima();
    }

    function troca(dir){
        tempoTroca=0;
        imgAtual+=dir;
        
        if(imgAtual>maxImg){
            imgAtual=0;
        
        }else if(imgAtual<0){
            imgAtual=maxImg;
        
        }
        
        carregarImg(imgAtual);
    }

    function anima(){
        tempoTroca++;
            if(tempoTroca >= 600){
                tempoTroca = 0;
                troca(1);
            }
        vtempo=tempoTroca/6;
        vbarra.style.width=vtempo+"%";
        window.requestAnimationFrame(anima);
    }

    window.addEventListener("load",inicia);