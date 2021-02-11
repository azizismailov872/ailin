<?php

namespace App\Http\Requests\Auth;

use ResponseFormat;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
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

            throw new ValidationException($validator, ResponseFormat::withErrors($errorsList,401));
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
            'email' => 'required|exists:admin_users',
            'password' => 'required|min:6',
        ];
    }

    public function messages()
    {
        return[
            'email.required' => 'Поле email обязательно к заполнению',
            'email.exists' => 'Такого пользователя не существует',
            'password.required' => 'Поле пароль обязательно к заполнению',
            'password.min' => 'Слишком короткий пароль'
        ];
    }
}
