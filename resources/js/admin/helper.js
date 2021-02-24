export const setErrors = (errors,setError) => {
	if(errors)
	{
		for(let error in errors)
		{	
			setError(error,{
				type: 'server',
				message: errors[error].message
			});
		}
	}
}

export const getFormValues = (data) => {
	let formData = new FormData();
	if(data){
		for(let field in data)
		{	
			if(field === 'status')
			{
				if(data[field] !== 2)
				{
					formData.append(field,data[field]);
				}
			}
			else if(field === 'photo')
			{	
				if(typeof data.photo[0] !== 'undefined' && data.photo[0].type && data.photo[0].type !== 'undefined')
				{
					formData.append('photo',data.photo[0]);
				}
			}
			else if(field === 'passwordRepeat')
			{
				console.log('password');
			}
			else 
			{	
				if(data[field].length > 0)
				{
					formData.append(field,data[field]);
				}	
			}
		}

		return formData;
	}else {
		return null;
	}

}

export const getApplicationFormValues = (data) => {
	let formData = new FormData();
	if(data){
		for(let field in data)
		{	
			if(field === 'status')
			{
				if(data[field] !== 3)
				{
					formData.append(field,data[field]);
				}
			}
			else 
			{	
				if(data[field].length > 0)
				{
					formData.append(field,data[field]);
				}	
			}
		}

		return formData;
	}else {
		return null;
	}
}

export const getFormValuesWithFiles = (data) => {
	let promise = new Promise((resolve,reject) => {
		let formData = new FormData();
		if(data)
		{
			for(let field in data)
			{
				if(field === 'status')
				{
					if(data[field] !== 2)
					{
						formData.append(field,data[field]);
					}
				}
				else if(field === 'ru_file')
				{	
					if(typeof data.ru_file[0] !== 'undefined' && data.ru_file[0].type && data.ru_file[0].type !== 'undefined')
					{
						formData.append('ru_file',data.ru_file[0]);
					}
				}
				else if(field === 'en_file')
				{	
					if(typeof data.en_file[0] !== 'undefined' && data.en_file[0].type && data.en_file[0].type !== 'undefined')
					{
						formData.append('en_file',data.en_file[0]);
					}
				}
				else if(field === 'kz_file')
				{
					if(typeof data.kz_file[0] !== 'undefined' && data.kz_file[0].type && data.kz_file[0]?.type !== 'undefined')
					{
						formData.append('kz_file',data.kz_file[0]);
					}
				}
				else if(field === 'kg_file')
				{
					if(typeof data.kg_file[0] !== 'undefined' && data.kg_file[0].type && data.kg_file[0]?.type !== 'undefined')
					{
						formData.append('kg_file',data.kg_file[0]);
					}
				}
				else if(field === 'uz_file')
				{
					if(typeof data.uz_file[0] !== 'undefined' && data.uz_file[0].type && data.uz_file[0]?.type !== 'undefined')
					{
						formData.append('uz_file',data.uz_file[0]);
					}
				}
				else if(field === 'tg_file')
				{
					if(typeof data.tg_file[0] !== 'undefined' && data.tg_file[0].type && data.tg_file[0]?.type !== 'undefined')
					{
						formData.append('tg_file',data.tg_file[0]);
					}
				}
				else
				{
					formData.append(field,data[field]);
				}
			}

			resolve(formData);
		}

		resolve(null);
	});
	return promise;
}

export const getFormVideos = (data) => {
	let promise = new Promise((resolve,reject) => {
		let formData = new FormData();
		if(data)
		{
			for(let field in data)
			{
				if(field === 'ru_video')
				{
					if(typeof data.ru_video[0] !== 'undefined' && data.ru_video[0].type && data.ru_video[0].type !== 'undefined')
					{
						formData.append('ru_video',data.ru_video[0]);
					}
				}
				else if(field === 'en_video')
				{
					if(typeof data.en_video[0] !== 'undefined' && data.en_video[0].type && data.en_video[0].type !== 'undefined')
					{
						formData.append('en_video',data.en_video[0]);
					}
				}
				else if(field === 'kz_video')
				{
					if(typeof data.kz_video[0] !== 'undefined' && data.kz_video[0].type && data.kz_video[0].type !== 'undefined')
					{
						formData.append('kz_video',data.kz_video[0]);
					}
				}
				else if(field === 'kg_video')
				{
					if(typeof data.kg_video[0] !== 'undefined' && data.kg_video[0].type && data.kg_video[0].type !== 'undefined')
					{
						formData.append('kg_video',data.kg_video[0]);
					}
				}
				else if(field === 'uz_video')
				{
					if(typeof data.uz_video[0] !== 'undefined' && data.uz_video[0].type && data.uz_video[0].type !== 'undefined')
					{
						formData.append('uz_video',data.uz_video[0]);
					}
				}
				else if(field === 'tg_video')
				{
					if(typeof data.tg_video[0] !== 'undefined' && data.tg_video[0].type && data.tg_video[0].type !== 'undefined')
					{
						formData.append('tg_video',data.tg_video[0]);
					}
				}
				else
				{
					formData.append(field,data[field]);
				}
			}

			resolve(formData);
		}

		resolve(null);
	});
	return promise;
}

export const bytesToSize = (bytes) =>  {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (!bytes) {
    	return '0 Byte'
  	}
  	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  	return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}