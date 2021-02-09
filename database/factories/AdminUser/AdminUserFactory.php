<?php

namespace Database\Factories\AdminUser;

use Str;
use App\Models\AdminUser\AdminUser;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdminUserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AdminUser::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $date = $this->faker->dateTime;
        return [
            'email' => $this->faker->email,
            'name' => $this->faker->name,
            'surname' => $this->faker->lastName,
            'password' => Str::random(15),
            'photo' => 'default.png',
            'phone' => $this->faker->phoneNumber,
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
