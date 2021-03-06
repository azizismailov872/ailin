<?php

namespace App\Http\Requests\AudioBook\Genre;

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
            'title' => 'required|unique:audiobook_genres',
            'slug' =>  'required|unique:audiobook_genres',
            'en_title' => 'required|unique:audiobook_genre_trans',
            'kg_title' => 'required|unique:audiobook_genre_trans',
            'kz_title' => 'required|unique:audiobook_genre_trans',
            'uz_title' => 'required|unique:audiobook_genre_trans',
            'tg_title' => 'required|unique:audiobook_genre_trans',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Введите название жанра',
            'slug.required' => 'Введите ссылку',
            'title.unique' => 'Такой жанр уже существует', 
            'slug.unique' => 'Жанр с такой ссылкой уже существует',
            'en_title.unique' => 'Жанр с таким переводом уже существует', 
            'kg_title.unique' => 'Жанр с таким переводом уже существует', 
            'kz_title.unique' => 'Жанр с таким переводом уже существует', 
            'uz_title.unique' => 'Жанр с таким переводом уже существует', 
            'tg_title.unique' => 'Жанр с таким переводом уже существует', 
        ];
    }
}
