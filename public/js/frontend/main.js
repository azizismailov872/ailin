$(function(){
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
	})
});