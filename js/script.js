function progress() {
	var prg = document.getElementById('progress');
	var percent = document.getElementById('percentCount');
	var counter = 5;
	var progress = 25;
	var id = setInterval(frame, 50);

	function frame() {
		if(progress == 500 && counter == 100) {
			clearInterval(id);

		} else {
			progress += 5;
			counter +=1;
			percent.innerHTML = counter + 'R$';
			prg.style.width = progress + 'px';
			
		}
	}
}

