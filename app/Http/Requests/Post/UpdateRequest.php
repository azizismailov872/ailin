<?php

namespace App\Http\Requests\Post;

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
            'title' => 'required|unique:posts,title,'.$this->id,
            'content' => 'required',
            'en_title' => 'required|unique:posts,en_title,'.$this->id,
            'kg_title' => 'required|unique:posts,kg_title,'.$this->id,
            'kz_title' => 'required|unique:posts,kz_title,'.$this->id,
            'uz_title' => 'required|unique:posts,uz_title,'.$this->id,
            'tg_title' => 'required|unique:posts,tg_title,'.$this->id,
            'en_content' => 'required',
            'kg_content' => 'required',
            'kz_content' => 'required',
            'uz_content' => 'required',
            'tg_content' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Заголовок не может быть пустым',
            'unique' => 'Пост с таким заголовком уже сущесвтует',
            'content.required' => 'Заполните содержимое поста',
            'required' => 'Заполните перевод',
            'en_title.unique' => 'Пост с таким заголовком уже существует',
            'kg_title.unique' => 'Пост с таким заголовком уже существует',
            'kz_title.unique' => 'Пост с таким заголовком уже существует',
            'uz_title.unique' => 'Пост с таким заголовком уже существует',
            'tg_title.unique' => 'Пост с таким заголовком уже существует',
        ];
    }
}
