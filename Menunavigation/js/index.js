
	function fechar(){
		document.getElementById('popup').style.display = 'none';
		document.getElementById('mask').style.display = 'none';
	}
	
function loading(){
		document.getElementById('popup').style.display = 'block';
		setTimeout ("fechar()", 300000000);
	}

	loading();