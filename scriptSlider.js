
          var imgs=[];
          var slider;
          var imgAtual;
          var maxImg;
          var tempoTroca;
          var vtempo;
          var vbarra;

          function preCarregamento(){
            var s=1;
              for(var i=0; i<7; i++){
                imgs[i]=new Image();
                imgs[i].src="img/s"+s+".jpg";
                s++;
              }
           }

           function carregarImg(img){
            slider.style.backgroundImage="url('"+imgs[img].src+"')";
           }

           function inicia(){
              preCarregamento();
              imgAtual = 0;
              maxImg = imgs.length-1;
              slider = document.getElementById("dvslider");
              vbarra = document.getElementById("dvbarra");
              carregarImg(imgAtual);
              tempoTroca=0;
              anima();
           }

           function troca(dir){

             tempoTroca = 0;
             imgAtual+=dir;

             if(imgAtual>maxImg){
               imgAtual=0;
             } else if(imgAtual<0){

               imgAtual=maxImg;
             }


             carregarImg(imgAtual);
           } 

           function anima(){
              tempoTroca++;
              if(tempoTroca >= 500){
                tempoTroca=0;
                troca(1);
              }
              
              vtempo=tempoTroca/5; /* em relação ao tempo com a % da largura da barra */ 
              vbarra.style.width=vtempo+"%";

              window.requestAnimationFrame(anima);
           }

          function plusDivs(n) {
            showDivs(slideIndex += dir);
            }

           function showDivs(dir) {

            var slideIndex = 1;
            showDivs(slideIndex);

              var x = document.getElementById("dvslider");

              if (dir > x.length) slideIndex = 1;
              if (dir < 1) slideIndex = x.length;

              for (var i = 0, len = x.length; i < len; i++) {

              x[i].style.display = "none";
              document.getElementsByClassName("s" + (i + 1))[0].style.display = "none";

    }

              x[slideIndex-1].style.display = "block";
              document.getElementsByClassName("s" + slideIndex)[0].style.display = "block";
}

           window.addEventListener("load",inicia);
