<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $date = $this->faker->dateTimeThisYear('now','Asia/Bishkek');
        return [
            'name' => $this->faker->name,
            'surname' => $this->faker->lastName,
            'phone' => $this->faker->e164PhoneNumber,
            'remember_token' => Str::random(10),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
