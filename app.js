function display_c(){
    var refresh=1000; 
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    document.getElementById('ct').style.fontSize='30px';
    display_c();
     }