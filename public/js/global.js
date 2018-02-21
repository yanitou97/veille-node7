document.addEventListener("DOMContentLoaded", function(){
  	if(window.location.href == 'http://localhost:8081/'){
		document.getElementById('peupler').style.display = 'none';
 		document.getElementById('vider').style.display = 'none';
	}
	else{
		document.getElementById('peupler').style.display = 'initial';
 		document.getElementById('vider').style.display = 'initial';
	}
});