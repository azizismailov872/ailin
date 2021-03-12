function saveHistory(time,type,historyable_id,url)
{
	let data = {
		time: time,
		type: type,
		historyable_id: historyable_id
	};

	$.ajax({
        url: url,
        data:data,
        type:"POST",
        success: function(response) {
           console.log('success');
        },
        error: function(response)
        {
        	console.log('error ',response);
        }
    });
}