
var megaman = document.getElementById('megaman')
var megatext = document.getElementById('megatext')

megatext.hidden = false;
var on = true
megaman.onclick = function(){
    if(on)
    {
        megaman.hidden = true
        megatext.hidden = false
        on = false
    } 
    else
    {
        megaman.hidden = false
        megatext.hidden = true
        on = true
    }  
   
}