
let q = (elemento)=>document.querySelector(elemento);

let nomePlayer1;
let nomePlayer2;
let playerwinnerp1 = 0;
let playerwinnerp2 = 0;
let scorep1;
let scorep2;
let inputP1 = q('#nameplayer1');
let inputP2 = q('#nameplayer2');

// jogador 1
let player1nome1 = q('.area-nikmane-p1 h2');
let player1nome2 = q('.wait-choose-player1 h2');
let player1nome3 = q('.area-result-player1 h3');

// jogador 2
let player2nome1 = q('.area-nikmane-p2 h2');
let player2nome2 = q('.wait-choose-player2 h2');
let player2nome3 = q('.area-result-player2 h3');
let winnerArea1 =  q('.start-area');

let timeP1;
let timeP2;

q('.question-player1-area button').addEventListener('click',guardaNomep1);
q('.question-player2-area button').addEventListener('click',guardaNomep2);
        
function mudarPagina2(){
        q('.question-player2-area').style.display='none';
        q('.hold-player1').style.display = 'none';
        q('.info-player').style.display = 'none';
        q('.choose-player1').style.display = 'flex';
        q('.choose-player2').style.display = 'flex';
        q('.start-area').style.display = "flex"
        q('.score-area').style.display = 'flex'
};

function mudarPagina1(){
        q('.hand-left i').style.display ='none'
        q('.question-player1-area').style.display = 'none';
        q('.hold-player2').style.display = 'none';
        q('.hold-player1').style.display = 'flex';
        q('.question-player2-area').style.display = 'flex';
        q('.hand-rigth i').style.display = 'flex'
       
};

function guardaNomep1(e){          
        e.preventDefault();
       if(inputP1.value == ""){
        alert('Digite o seu Nikmame');
       }else{ 
        nomePlayer1 = inputP1.value
        player1nome1.innerHTML = inputP1.value;
        player1nome2.innerHTML = inputP1.value;
        player1nome3.innerHTML = inputP1.value;
        inputP1.value = " "        
        mudarPagina1()
       }};

function guardaNomep2(e){          
        e.preventDefault();
       if(inputP2.value == ''){
        // fazer um update com um modal
        alert('Digite o seu Nikmame');
       }else{
        nomePlayer2 = inputP2.value
        player2nome1.innerHTML = inputP2.value;
        player2nome2.innerHTML = inputP2.value;
        player2nome3.innerHTML = inputP2.value;
        inputP2.value = " " ;
        mudarPagina2();
        mudaIcon(iconWinnerp1);
        mudaIcon(iconWinnerp2);
        
       timeP1 = setInterval(executaMudaicon1,4500);
       timeP2 = setInterval(executaMudaicon2,4500);
       
       }};
// icon player 1
 let rockWinnerp1 = q('.figth-player1 .rock-winer');               
 let paperWinnerp1 = q('.figth-player1 .paper-winer');
 let scissorsWinnerp1 = q('.figth-player1 .scissors-winer');
  let iconWinnerp1 =[rockWinnerp1,paperWinnerp1,scissorsWinnerp1];
 /// icon player 2
 let rockWinnerp2 = q('.figth-player2 .rock-winer');
 let paperWinnerp2 = q('.figth-player2 .paper-winer');
 let scissorsWinnerp2 = q('.figth-player2 .scissors-winer'); 
 let iconWinnerp2 =[paperWinnerp2,scissorsWinnerp2,rockWinnerp2];                                           
   
 // funcão icon random            
 function removeIcon(icon){
        for(let i in icon ){
         icon[i].style.display = 'none'
        }
 }
 
 function mudaIcon(icon){
        removeIcon(icon)
        icon[0].style.display = 'flex';
        setTimeout(()=>{
                removeIcon(icon);
                icon[1].style.display = 'flex';
        },1500);
        setTimeout(()=>{
                removeIcon(icon);
                icon[2].style.display = 'flex';
        },3000);
 
 }
 function executaMudaicon1(){
        mudaIcon(iconWinnerp1)
 }
 function executaMudaicon2(){
        mudaIcon(iconWinnerp2)
 }

/// parte 2 area jogo 

q('.choose-player1 button').addEventListener('click',starGamerp1);
 
 let chooseP1 ; 
 let rockP1;
 let paperP1;
 let scissorsP1;

 function starGamerp1(){
 chooseP1 = Math.floor(Math.random()*3+1);
 switch(chooseP1){
        case 1:
           rockP1 = 1 ;
           removeIconresultp1();
           removeIconwinnerp1();
           q('.rock-result-p1').style.display = 'flex';
           q('.rock-winner-p1').style.display = 'flex';
           break;
        case 2 :
           paperP1 = 2;
           removeIconresultp1();
           removeIconwinnerp1();
           q('.paper-result-p1').style.display = 'flex';
           q('.paper-winner-p1').style.display = 'flex'
           break;
        case 3 :
           scissorsP1 = 3;
           removeIconresultp1();
           removeIconwinnerp1();
           q('.scissors-result-p1').style.display = 'flex';
           q('.scissors-winner-p1').style.display = 'flex';
           break;
}
closeChoosep1 ();
closeHandleft ();
setTimeout(openWaitp1,300);
mudaIcon(iconsWaitp1);
timeWaitp1 = setInterval(executaIconwaitp1,4500);
loadingP1()
 loadingWaitp1 = setInterval(loadingP1,3000);
if(chooseP2 > 0 && chooseP1 > 0){
        trocaH4winner();
        setTimeout(stopSetinterval,4500)
        setTimeout(closeWaintarea,3200)
        setTimeout(openWaitarea,4200)
        if(chooseP1 !== chooseP2){
                setTimeout(closeIconResult,7000)
                setTimeout( openChampion,7500)
        }else{
                q('.figth-area').style.margin = '0px'
                q('.rest-gamer-tied').style.display = 'flex';
                q('.icon-area h2').style.display = 'flex'
        } 
        let result = chooseP1 - chooseP2
if(result == 1 || result == -2){
        q('.player-winner h2').innerHTML =  nomePlayer1;
        q('.winer-p1').style.display = 'flex';
        q('.lose-p2').style.display = 'flex';
        scorep1 = playerwinnerp1 +=1;
        setTimeout(()=>{
                q('.score-p1 span').innerHTML = scorep1;
        },7500)
       
}else if(result == -1 || result == 2) {
        q('.player-winner h2').innerHTML =  nomePlayer2
        q('.winer-p2').style.display = 'flex'
        q('.lose-p1').style.display = 'flex'
        scorep2 = playerwinnerp2 += 1;
        setTimeout(()=>{
                q('.score-p2 span').innerHTML = scorep2
        },7500)
        
}
           
}

}
function removeIconwinnerp1(){
        q('.paper-winner-p1').style.display = 'none';
        q('.rock-winner-p1').style.display = 'none';
        q('.scissors-winner-p1').style.display = 'none';

}

function removeIconresultp1(){
        q('.rock-result-p1').style.display = 'none';
        q('.paper-result-p1').style.display = 'none';
        q('.scissors-result-p1').style.display = 'none';

}
function executaIconwaitp1 (){
        mudaIcon(iconsWaitp1)
  } 
/// player 2

q('.choose-player2 button').addEventListener('click',starGamerp2);
 
 let chooseP2 ; 
 let rockP2;
 let paperP2;
 let scissorsP2;

 function starGamerp2(){
 chooseP2 = Math.floor(Math.random()*3+1);
 switch(chooseP2){
        case 1:
           rockP2 = 1 ;
           removeIconresultp2();
           removeIconwinnerp2();
           q('.rock-result-p2').style.display = 'flex';
           q('.rock-winner-p2').style.display = 'flex';
           break;
        case 2 :
           paperP2 = 2;
           removeIconresultp2();
           removeIconwinnerp2();
           q('.paper-result-p2').style.display = 'flex';
           q('.paper-winner-p2').style.display = 'flex';
           break;
        case 3 :
           scissorsP2 = 3;
           removeIconresultp2();
           removeIconwinnerp2();
           q('.scissors-result-p2').style.display = 'flex'
           q('.scissors-winner-p2').style.display = 'flex';
           break;
}
closeChoosep2 ();
closeHandrigth ();
setTimeout(openWaitp2,300 )
mudaIcon(iconsWaitp2)
timeWaitp2 = setInterval(executaIconwaitp2,4500) 
loadingP2()
loadingWaitp2 = setInterval(loadingP2,3000)
if(chooseP2 > 0 && chooseP1 > 0){
        trocaH4winner();
        setTimeout(stopSetinterval,4500)
        setTimeout(closeWaintarea,3200)
        setTimeout(openWaitarea,4200)
        if(chooseP1 !== chooseP2){
        setTimeout(closeIconResult,7000)
        setTimeout( openChampion,7500)
        }else{
                q('.figth-area').style.margin = '0px'
                q('.rest-gamer-tied').style.display = 'flex';
                q('.icon-area h2').style.display = 'flex'
        }
        let result = chooseP1 - chooseP2
        if(result == 1 || result == -2){
                q('.player-winner h2').innerHTML =  nomePlayer1;
                q('.winer-p1').style.display = 'flex';  
                q('.lose-p2').style.display = 'flex';
                scorep1 = playerwinnerp1 +=1;
                setTimeout(()=>{
                        q('.score-p1 span').innerHTML = scorep1;
                },7500)
        
        }else if(result == -1 || result == 2) {
                q('.player-winner h2').innerHTML =  nomePlayer2;
                q('.winer-p1').style.display = 'none';  
                q('.lose-p2').style.display = 'none';
                q('.winer-p2').style.display = 'flex';
                q('.lose-p1').style.display = 'flex';       
                scorep2 = playerwinnerp2 +=1;
                setTimeout(()=>{
                        q('.score-p2 span').innerHTML = scorep2
                },7500)
                
        }
}

}


function removeIconwinnerp2(){
        q('.paper-winner-p2').style.display = 'none';
        q('.rock-winner-p2').style.display = 'none';
        q('.scissors-winner-p2').style.display = 'none';

}
function removeIconresultp2(){
        q('.rock-result-p2').style.display = 'none';
        q('.paper-result-p2').style.display = 'none';
        q('.scissors-result-p2').style.display = 'none';

}

function executaIconwaitp2 (){
        mudaIcon(iconsWaitp2)
  }   

 /// funçoes de abrir e fecha suave 
function closeChoosep1 (){
        q('.choose-player1').style.opacity = 0
        setTimeout(()=>{
            q('.choose-player1').style.display = "none"
        },300)
}
function closeHandleft (){
        q('.hand-left-winer').style.opacity = 0
        setTimeout(()=>{
            q('.hand-left-winer').style.display = "none"
        },300)
}
function openWaitp1 (){
        q('.wait-choose-player1').style.opacity = 0
        q('.wait-choose-player1').style.display = 'flex'
        setTimeout(()=>{
            q('.wait-choose-player1').style.opacity = 1
        },300)      
}
/// player 2 
    function closeChoosep2 (){
        q('.choose-player2').style.opacity = 0
        setTimeout(()=>{
            q('.choose-player2').style.display = "none"
        },300)
}
function closeHandrigth (){
        q('.hand-rigth-winer').style.opacity = 0
        setTimeout(()=>{
            q('.hand-rigth-winer').style.display = "none"
        },300)
}
function openWaitp2 (){
        q('.wait-choose-player2').style.opacity = 0
        q('.wait-choose-player2').style.display = 'flex'
        setTimeout(()=>{
            q('.wait-choose-player2').style.opacity = 1
        },300)      
}
            
                
 // mudando icon da area de aguarde 
 
 let rockWaitp1 = q('.wait-area-hands-player1 .rock-wait');               
 let paperWaitp1 = q('.wait-area-hands-player1 .paper-wait');
 let scissorsWaitp1 = q('.wait-area-hands-player1 .scissors-wait');
let iconsWaitp1 = [rockWaitp1,paperWaitp1,scissorsWaitp1];
let timeWaitp1 ; 

// player 2 

let rockWaitp2 = q('.wait-area-hands-player2 .rock-wait');               
let paperWaitp2 = q('.wait-area-hands-player2 .paper-wait');
let scissorsWaitp2 = q('.wait-area-hands-player2 .scissors-wait');
let iconsWaitp2 = [scissorsWaitp2,rockWaitp2,paperWaitp2];
let timeWaitp2 ; 
 
           

// aguarde

let s1p1 = q('#s1p1');
let s2p1 = q('#s2p1');
let s3p1 = q('#s3p1');
let loadingWaitp1;
                
function loadingP1 () {  
        s1p1.style.color = '#FF4500'
        setTimeout(() => {
             s2p1.style.color =  '#FF4500 '  
        }, 750);
        setTimeout(() => {
                s3p1.style.color =  '#FF4500 '  
           }, 1500);
           setTimeout(() => {
                s1p1.style.color = '#FFF'
                s2p1.style.color =  '#FFF ' 
                s3p1.style.color =  '#FFF '  
           }, 2250);

} 
///player 2
let s1p2 = q('#s1p2');
let s2p2 = q('#s2p2');
let s3p2 = q('#s3p2');
let loadingWaitp2;
                
function loadingP2 () {  
        s1p2.style.color = '#FF4500'
        setTimeout(() => {
             s2p2.style.color =  '#FF4500 '  
        }, 750);
        setTimeout(() => {
                s3p2.style.color =  '#FF4500 '  
           }, 1500);
           setTimeout(() => {
                s1p2.style.color = '#FFF'
                s2p2.style.color =  '#FFF ' 
                s3p2.style.color =  '#FFF '  
           }, 2250);

} 


/// trocando o h4 da winner start
function trocaH4winner(){
        let h4Winner = q('.gamer-winer h4');

        h4Winner.innerHTML = 3 ;
        setTimeout(()=>{
                h4Winner.innerHTML = 2 ;
        },1000)
        setTimeout(()=>{
                h4Winner.innerHTML = 1;
        },2000)
        setTimeout(()=>{
                h4Winner.innerHTML = 'go' ;
        },3000)  

}

// mudando para tela de resultado 

function closeWaintarea(){

        q('.wait-choose-player1').style.opacity = 0;
        q('.wait-choose-player2').style.opacity = 0;
        q('.start-area').style.opacity = 0;     
        setTimeout(()=>{
                q('.wait-choose-player1').style.display = "none";
                q('.wait-choose-player2').style.display = "none";
                q('.start-area').style.display = "none";
        },300)
}        

                
function openWaitarea (){
        q('.icon-area').style.opacity = 0
        q('.icon-area').style.display = 'flex'
        q('.result-player1').style.opacity = 0
        q('.result-player1').style.display = 'flex'
        q('.result-player2').style.opacity = 0
        q('.result-player2').style.display = 'flex'
        setTimeout(()=>{
            q('.icon-area').style.opacity = 1
            q('.result-player1').style.opacity = 1
            q('.result-player2').style.opacity = 1
        },300)      
} 

/// fecha a tela de icon resultado e abri a icon campeão 

function closeIconResult(){
        q('.icon-area').style.opacity = 0;
        setTimeout(()=>{
                q('.icon-area').style.display = "none";
                q('.result-player2').style.opacity = 0;
                q('.result-player1').style.opacity = 0;
                q('.result-player1').style.display = "none";  
                q('.result-player2').style.display = "none"; 
        },300)
}

function openChampion(){
      
        q('.winner-end').style.opacity = 0
        q('.winner-end').style.display = 'flex'
        setTimeout(()=>{
            q('.winner-end').style.opacity = 1
            q('.result-player2').style.opacity = 1;
            q('.result-player1').style.opacity = 1;
            q('.result-player1').style.display = "flex";  
            q('.result-player2').style.display = "flex";
           
           
        },500)      
} 

              
/// para todos os setInterval 

function stopSetinterval (){
        clearInterval(timeP1);
        clearInterval(timeP2);
        clearInterval(timeWaitp1);
        clearInterval(timeWaitp2);
        clearInterval(loadingWaitp1);
        clearInterval(loadingWaitp2 );
}


// butoon restart 

q('.rest-gamer-tied button').addEventListener('click',restart);
q('.rest-gamer button').addEventListener('click',restart);

function restart(){
       chooseP1 = 0;
       chooseP2 = 0;
       executaMudaicon1();
       executaMudaicon2();
       timeP1 = setInterval(executaMudaicon1,4500);
       timeP2 = setInterval(executaMudaicon2,4500);
        q('.icon-area').style.display = 'none';
       q('.winner-end').style.display = 'none';
       q('.result-player1').style.display = 'none';
       q('.result-player2').style.display = 'none';
       
      
        q('.rest-gamer-tied').style.display = 'none';
        q('.icon-area h2').style.display = 'none'
       

        q('.winer-p2').style.display = 'none';
        q('.lose-p1').style.display = 'none';
        q('.winer-p1').style.display = 'none';
        q('.lose-p2').style.display = 'none';      
       
       q('.choose-player1').style.display = 'flex';
       setTimeout(()=>{
        q('.choose-player1').style.opacity = 1
       },300)
       q('.choose-player2').style.display = 'flex';
       setTimeout(()=>{
        q('.choose-player2').style.opacity = 1
       },300)
       q('.start-area').style.display = "flex"
       setTimeout(()=>{
        q('.start-area').style.opacity = 1
       },300)
       
       q('.hand-left-winer').style.display = 'flex'
       setTimeout(()=>{
        q('.hand-left-winer').style.opacity = 1
       },300)

       q('.hand-rigth-winer').style.display = 'flex'
       setTimeout(()=>{
        q('.hand-rigth-winer').style.opacity = 1
       },300)
       
       q('.gamer-winer h4').innerHTML = 'Façam sua Jogada';
     

}