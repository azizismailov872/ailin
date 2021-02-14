<?php

namespace Database\Factories\Podcast;

use Str;
use App\Models\Podcast\Genre\PodcastGenre;
use App\Models\Podcast\Podcast;
use Illuminate\Database\Eloquent\Factories\Factory;

class PodcastFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Podcast::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->dateTimeThisYear('now','Asia/Bishkek');
        $genres =  PodcastGenre::select('id','title')->get()->toArray();
        foreach ($genres as $key => $value) {
            $id = $key;
        }
        return [
            'title' => $this->faker->lastName,
            'slug' => $this->faker->slug,
            'description' => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'author' => $this->faker->firstName,
            'ru_file_link' => $this->faker->imageUrl,
            'ru_file' => Str::random(15),
            'genre_id' => $id,
            'status' => random_int(0, 1),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
