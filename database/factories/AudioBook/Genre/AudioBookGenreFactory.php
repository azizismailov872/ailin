<?php

namespace Database\Factories\AudioBook\Genre;

use App\Models\AudioBook\Genre\AudioBookGenre;
use Illuminate\Database\Eloquent\Factories\Factory;

class AudioBookGenreFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AudioBookGenre::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->dateTime;

        $this->afterCreating(function($genre,$faker){
            $genre->trans()->create([
                'kg_title' => $faker->jobTitle,
                'kg_description' => $faker->realText($maxNbChars = 200, $indexSize = 2),
                'en_title' => $faker->jobTitle,
                'en_description' => $faker->realText($maxNbChars = 200, $indexSize = 2),
                'kz_title' => $faker->jobTitle,
                'kz_description' => $faker->realText($maxNbChars = 200, $indexSize = 2),
                'uz_title' => $faker->jobTitle,
                'uz_description' => $faker->realText($maxNbChars = 200, $indexSize = 2),
                'tg_title' => $faker->jobTitle,
                'tg_description' => $faker->realText($maxNbChars = 200, $indexSize = 2),
                'genre_id' => $genre->id
            ]);
        });

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
