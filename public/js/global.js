document.addEventListener("DOMContentLoaded", function(){
  	if(window.location.href == 'http://localhost:8081/list'){
		document.getElementById('peupler').style.display = 'initial';
 		document.getElementById('vider').style.display = 'initial';
	}
	else if(window.location.href == 'http://localhost:8081/'){
		document.getElementById('peupler').style.display = 'none';
 		document.getElementById('vider').style.display = 'none';
	}
});