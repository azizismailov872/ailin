<?php

namespace Database\Factories\Podcast\Genre;

use App\Models\Podcast\Genre\PodcastGenre;
use Illuminate\Database\Eloquent\Factories\Factory;

class PodcastGenreFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PodcastGenre::class;

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
