
var i =0, text;
text = "Puzzology";
function typing() 
    {
        if(i<text.length)
            {
                document.getElementById("typetext").innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 300);
            }    
    }
    typing();