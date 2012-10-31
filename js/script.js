$(function(){
	//window.localStorage.src = window.localStorage.test = '';
	$('#src').val(window.localStorage.src);
	$('#test').val(window.localStorage.test);

	$('#src').on('keyup', function(e){
		window.localStorage.src = this.value;
	});

	$('#test').on('keyup', function(e){
		window.localStorage.test = this.value;
	});

	$('#run').on('click', function(){
		document.getElementById('resultFrame').contentWindow.location.reload();
	});
})