<?php

namespace App\Http\Requests\AudioBook\Genre;

use ResponseFormat;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class UpdateRequest extends FormRequest
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
            'title' => "required|min:3,max:255|unique:audiobook_genres,title,".$this->id,
            'slug' => "required|min:3,max:255|unique:audiobook_genres,slug,".$this->id,
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Укажите название жанра',
            'title.min' => 'Название должно состоять минимум из :min символов',
            'title.max' => 'Слишком длинное название',
            'title.unique' => 'Такой жанр уже существует',
            'slug.required' => 'Укажите ссылку для жанра',
            'slug.min' => 'Ссылка должна состоять минимум из :min символов',
            'slug.max' => 'Слишком длинная ссылка',
            'slug.unique' => 'Жанр с такой ссылкой уже существует',
        ];
    }
}
