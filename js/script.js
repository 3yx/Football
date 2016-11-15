var foolballfield = $('#footballField');
var theLeftGoal = $('#theLeftGoal');
var theRightGoal = $('#theRightGoal');
var muteSound = $ ('#muteSound');
var ball = $('#ball');
var countGoalLeft=null;
var countGoalRight=null;


$(function(){
	$('#tribune')[0].volume = 0.1;
	$('#goal')[0].volume = 0.5;
	$ ('#ballsound')[0].volume = 0.7;
	$('#myModal').modal('show');

	footballField.onclick = function(e) {
		$ ('#ballsound')[0].play();
		
		var fieldPosition = this.getBoundingClientRect();

		var fieldStartPosition = {
			top: fieldPosition.top + footballField.clientTop,
			left: fieldPosition.left + footballField.clientLeft
		};

		var ballPosition = {
			top: e.clientY  - fieldStartPosition.top - $('#ball').height()/2,
			left: e.clientX - fieldStartPosition.left - $('#ball').width()/2
		};

		if (ballPosition.top < 0){
			ballPosition.top = 0;
		} 
		if (ballPosition.left < 0){
			ballPosition.left = 0;
		} 
		if (ballPosition.left + $('#ball').width() > $('#footballField').width()){
			ballPosition.left = $('#footballField').width() - $('#ball').width();
		} 		
		if (ballPosition.top + $('#ball').height() > $('#footballField').height()) {
			ballPosition.top = $('#footballField').height() - $('#ball').height();
		}

		$('#ball').css('left', ballPosition.left + 'px');
		$('#ball').css('top', ballPosition.top + 'px' );

		if (ballPosition.top > 77 && ballPosition.top < 185 &&
			ballPosition.left == 0 && ballPosition.left < 5) {

			$('#ball').css('display','none').delay(500);		
			$('#ball').css('left', '45%');
			$('#ball').css('top', '42%' );
			$('#ball').delay(1).fadeIn();
			$('#goal')[0].play();
			countGoalRight++;
			$('#scoreRight').fadeOut(0);
			$('#scoreRight').html(countGoalRight);
			$('#scoreRight').fadeIn(1000);
		}

		if (ballPosition.top > 77 && ballPosition.top < 185 &&
			ballPosition.left > 435) {

			$('#ball').css('display','none').delay(500);		
			$('#ball').css('left', '45%');
			$('#ball').css('top', '42%' );
			$('#ball').delay(1).fadeIn();
			$('#goal')[0].play();
			countGoalLeft++;
			$('#scoreLerf').fadeOut(0);
			$('#scoreLerf').html(countGoalLeft);
			$('#scoreLerf').fadeIn(1000);
		}
	}
		$('#ball').css('left', '45%');
		$('#ball').css('top', '42%' );		 
});