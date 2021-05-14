function loadFlag()
{
    document.getElementById("imgFlagName").src= "flagImages/"+document.getElementById("inputCountryName").value + ".png";
    document.getElementById("imgFlagNameBig").src= "flagImages/"+document.getElementById("inputCountryName").value + ".png";
    document.getElementById("h4FlagHeading").innerHTML=  document.getElementById("inputCountryName").value ;
    document.getElementById("pHeading").innerHTML=  document.getElementById("inputCountryName").value ;
    read();
}


function read()  
{  
     var txtFile = new XMLHttpRequest();  


     txtFile.open("GET", "../info/"+document.getElementById("inputCountryName").value + ".txt", true);  
     
     //Creating the wikipedia link
     var linkHyper="https://en.wikipedia.org/wiki/"+document.getElementById("inputCountryName").value;



     txtFile.onreadystatechange = function()   
     {  
          if (txtFile.readyState === 4)   
          {  
               // Makes sure the document is ready to parse.  
               if (txtFile.status === 200)   
               {  
                    // Along with the text creating anchor tag 
                    document.getElementById("pFlagDesc").innerHTML = txtFile.responseText + "<a href=" + linkHyper + "  target=\"_blank\"><b>More Info</b></a>"  ;
               }  
          }  
     }  
     txtFile.send(null)  
}  