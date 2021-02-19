<?php

namespace App\Http\Requests\User;

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
            'name' => 'required|unique:users,name,'.$this->id,
            'phone' => 'required|unique:users,phone,'.$this->id,
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Имя пользвоателя обязательно для заполенения',
            'name.unique' => 'Пользователь с таким именем уже существует',
            'phone.required' => 'Введите номер телефона',
            'phone.unique' => 'Пользователь с таким номером уже существует'
        ];
    }
}
