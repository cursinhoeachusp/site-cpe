
          var imgs=[];
          var slider;
          var imgAtual;
          var maxImg;
          var tempoTroca;
          var vtempo;
          var vbarra;
          var slideIndex;

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

           function showDivs(n) {
            
            var texto1 = document.getElementsByClassName("s1");
            var texto2 = document.getElementsByClassName("s2");
            var texto3 = document.getElementsByClassName("s3");
            var texto4 = document.getElementsByClassName("s4");
            var texto5 = document.getElementsByClassName("s5");
            var texto6 = document.getElementsByClassName("s6");
            var texto7 = document.getElementsByClassName("s7");

              if(imgAtual == imgs[0]) {

                texto1.style.display = "block";

              }

              if(imgAtual == 2) {

                texto1.style.display = "block";

              }

              if(imgAtual == 3) {

                texto1.style.display = "block";

              }

              if(imgAtual == 4) {

                texto1.style.display = "block";

              }

              if(imgAtual == 5) {

                texto1.style.display = "block";

              }

              if(imgAtual == 6) {

                texto1.style.display = "block";

              }

              if(imgAtual == 7) {

                texto1.style.display = "block";

              }
          
        }

           
        window.addEventListener("load",inicia);