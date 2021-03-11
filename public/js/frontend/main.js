$(function(){
	let lang = $('html').attr('lang');
	$('#phoneNumber').on('keyup',function(e){
		let newString = new libphonenumber.parsePhoneNumberFromString(e.target.value);
		if(newString)
		{
			e.target.value = newString.formatInternational();
		}
	});

	$('.carousel-link').on('click',function(e){
		e.preventDefault();
		let url = $(this).attr('href');
		$.ajax({
            url: url,
            data:"",
            type:"GET",
            success: function(response) {
                $('body').html(response);
            },
            error: function(response)
            {
            	console.log('error ',response);
            }
        });
	});

	$('.play-description').on('click',function(){
		let text = $('.description-play').text();
		speak(text);
	});

	$('.player_play_button.play-icon').on('click',function(){
		$(this).toggleClass('stop-icon');
	});
});

function getLang()
{	
	let lang = $('html').attr('lang');
	if(lang === 'en')
	{
		return 'en-EN';
	}
	else
	{
		return 'ru-RU';
	}

}

function speak(text) {
	const message = new SpeechSynthesisUtterance();
  	message.lang = getLang();
  	message.text = text;
  	window.speechSynthesis.speak(message);
}
