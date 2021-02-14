<?php

namespace App\Http\Requests\AudioBook;

use ResponseFormat;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {   
        if($validator->fails()){
            $errorsList =[];
            foreach($validator->errors()->keys() as $key => $value)
            {
                if($value){
                    $errorsList[$value]['message'] = $validator->errors()->first($value);
                }
            }
        
            $response = ResponseFormat::withErrors($errorsList,500);

            throw new ValidationException($validator, $response);
        }
       
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:audiobooks',
            'slug' => 'required|unique:audiobooks',
            'author' => 'required',
            'en_file' => 'nullable|file|mimes:mp3,pdf,png,jpg,jpeg',
            'ru_file' => 'nullable|file|mimes:mp3,pdf,png,jpg,jpeg',
            'kg_file' => 'nullable|file|mimes:mp3,pdf,png,jpg,jpeg',
            'kz_file' => 'nullable|file|mimes:mp3,pdf,png,jpg,jpeg',
            'uz_file' => 'nullable|file|mimes:mp3,pdf,png,jpg,jpeg',
            'tg_file' => 'nullable|file|mimes:mp3,pdf,png,jpg,jpeg',
            'en_title' => 'required|min:3|unique:audiobook_trans',
            'kg_title' => 'required|min:3|unique:audiobook_trans',
            'kz_title' => 'required|min:3|unique:audiobook_trans',
            'uz_title' => 'required|min:3|unique:audiobook_trans',
            'tg_title' => 'required|min:3|unique:audiobook_trans',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Заполните заголовок',
            'author.required' => 'Укажите автора',
            'en_title.required' => 'Заполните заголовок',
            'kg_title.required' => 'Заполните перевод заголовков',
            'kz_title.required' => 'Заполните перевод заголовков',
            'uz_title.required' => 'Заполните перевод заголовков',
            'tg_title.required' => 'Заполните перевод заголовков',
            'title.unique' => 'Такая аудиокнига уже существует',
            'kg_title.unique' => 'Аудиокнига с таким переводом уже существует',
            'en_title.unique' => 'Аудиокнига с таким переводом уже существует',
            'kz_title.unique' => 'Аудиокнига с таким переводом уже существует',
            'uz_title.unique' => 'Аудиокнига с таким переводом уже существует',
            'tg_title.unique' => 'Аудиокнига с таким переводом уже существует',
            'slug.required' => 'Заполните ссылку',
            'slug.unique' => 'Аудиокнига с такой ссылкой уже существует',
            'min' => 'Минимальное колличество символов :min',
            'status.required' => 'Введите статус',
            'mimes' => 'Загрузите файл разрешенного формата',
        ];
    }
}
