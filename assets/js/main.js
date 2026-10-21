(function(){
  var btn=document.querySelector('.menu-toggle'), menu=document.getElementById('nav-links');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    menu.addEventListener('click',function(e){
      if(e.target.closest('a')){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');}
    });
  }
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
