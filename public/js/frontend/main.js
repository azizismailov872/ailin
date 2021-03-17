$(function(){
	let lang = $('html').attr('lang');
	$('#phoneNumber').on('keyup',function(e){
		let newString = new libphonenumber.parsePhoneNumberFromString(e.target.value);
		if(newString)
		{
			e.target.value = newString.formatInternational();
		}
	});

	$('.carousel-link.next').on('click',function(e){
		e.preventDefault();
		let url = $(this).attr('href');
		$.ajax({
            url: url,
            data:"",
            type:"GET",
            success: function(response) {
                $('body').html(response);
                window.history.pushState({},null,url);
                speak(getNextPageMessage());
            },
            error: function(response)
            {
            	console.log('error ',response);
            }
        });
	});

	$('.carousel-link.prev').on('click',function(e){
		e.preventDefault();
		let url = $(this).attr('href');
		$.ajax({
            url: url,
            data:"",
            type:"GET",
            success: function(response) {
                $('body').html(response);
                window.history.pushState({},null,url);
                speak(getPrevPageMessage());
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

	$('.player_play_button').on('click',function(){
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

function getNextPageMessage()
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

function getPrevPageMessage()
{
	let language = $('html').attr('lang');

	if(language === 'en')
	{
		return 'Previous page';
	}
	else if(language === 'ru')
	{
		return 'Предыдущая страница';
	}
	else if(language === 'kz')
	{
		return 'Алдыңғы бет';
	}
	else if(language === 'uz')
	{
		return 'Oldingi sahifa';
	}
	else if(language === 'kg')
	{
		return 'Мурунку бет';
	}
	else if(language === 'tg')
	{
		return 'Саҳифаи қаблӣ';
	}
}

function speak(text) {
	let msg = new SpeechSynthesisUtterance();
	msg.voiceURI = 'native';
	msg.volume = 1;
	msg.rate = 0.8;
	msg.pitch = 1;
	msg.text = text;
	msg.lang = getLang(); // Язык
	speechSynthesis.speak(msg);
}
