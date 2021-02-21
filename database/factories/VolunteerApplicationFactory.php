<?php

namespace Database\Factories;

use App\Models\VolunteerApplication;
use Illuminate\Database\Eloquent\Factories\Factory;

class VolunteerApplicationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = VolunteerApplication::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->dateTimeThisYear('now','Asia/Bishkek');
        return [
            'phone' => $this->faker->e164PhoneNumber,
            'status' => random_int(0,2),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
