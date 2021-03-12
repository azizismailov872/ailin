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
                speak(getPaginationMessage());
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

function getPaginationMessage()
{
	let language = $('html').attr('lang');

	if(language === 'en')
	{
		return 'Next page';
	}
	else if(language === 'ru')
	{
		return 'Следующая страница';
	}
	else if(language === 'kz')
	{
		return 'Келесі бет';
	}
	else if(language === 'uz')
	{
		return 'Keyingi sahifa';
	}
	else if(language === 'kg')
	{
		return 'Кийинки бет';
	}
	else if(language === 'tg')
	{
		return 'Саҳифаи оянда';
	}
}

function speak(text) {
	const message = new SpeechSynthesisUtterance();
  	message.lang = getLang();
  	message.text = text;
  	window.speechSynthesis.speak(message);
}
