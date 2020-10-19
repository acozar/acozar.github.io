	//Turn a canvas element into a sketch area
	//width and height are grabbed automatically.
	$("#canvas3").drawr({
		"enable_tranparency" : true
	});

	//Enable drawing mode, show controls
	$("#canvas3").drawr("start");

	//add custom save button.
	var buttoncollection = $("#canvas3").drawr("button", {
		"icon":"mdi mdi-folder-open mdi-24px"
	}).on("touchstart mousedown",function(){
		$("#file-picker").click();
	});
	var buttoncollection = $("#canvas3").drawr("button", {
		"icon":"mdi mdi-content-save mdi-24px"
	}).on("touchstart mousedown",function(){
		var imagedata = $("#canvas3").drawr("export","image/jpeg");
		var element = document.createElement('a');
		element.setAttribute('href', imagedata);
		element.setAttribute('download', "test.jpg");
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	});
	$("#file-picker")[0].onchange = function(){
		var file = $("#file-picker")[0].files[0];
		if (!file.type.startsWith('image/')){ return }
		var reader = new FileReader();
		reader.onload = function(e) { 
			$("#canvas3").drawr("load",e.target.result);
		};
		reader.readAsDataURL(file);
	};