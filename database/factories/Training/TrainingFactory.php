<?php

namespace Database\Factories\Training;

use Str;
use App\Models\Training\Training;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrainingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Training::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $date = $this->faker->dateTimeThisYear('now','Asia/Bishkek');
        return [
            'title' => $this->faker->lastName,
            'slug' => $this->faker->slug,
            'description' => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'author' => $this->faker->firstName,
            'ru_file_link' => $this->faker->imageUrl,
            'ru_file' => Str::random(15),
            'genre_id' => 23,
            'status' => random_int(0, 1),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
