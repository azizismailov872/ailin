<?php

namespace Database\Factories\Training\Genre;

use App\Models\Training\Genre\TrainingGenre;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrainingGenreFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TrainingGenre::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->dateTime;
        return [
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'slug' => $this->faker->slug,
            'status' => random_int(0, 1),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
