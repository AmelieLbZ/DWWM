
let somme=0;
let nbValeur;
let nbTrouve="";

document.write("Les nombres premiers entre 0 et 100 sont :  ");
for (let i = 2; i <=100 ; i++) 
{
   var trouve= false;
   for (j= 2; j<i/2;j++) 
   {
       if (i%j==0) 
       trouve=true;           
    }
    if (trouve==false) 
    {
        nbTrouve+=i+",";
        nbValeur+=1;
        somme+=i;
    }       
   }
   document.write(nbTrouve.substring(0,nbTrouve.length - 1));
    
   