<?php

namespace Database\Factories\Post;

use App\Models\Post\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $date = $this->faker->dateTimeThisYear('now','Asia/Bishkek');
        return [
            'title' => $this->faker->company,
            'content' => $this->faker->realText,
            'en_title' => $this->faker->company,
            'kg_title' => $this->faker->company,
            'kz_title' => $this->faker->company,
            'uz_title' => $this->faker->company,
            'tg_title' => $this->faker->company,
            'en_content' => $this->faker->realText,
            'kg_content' => $this->faker->realText,
            'kz_content' => $this->faker->realText,
            'uz_content' => $this->faker->realText,
            'tg_content' => $this->faker->realText,
            'created_at' => $date,
            'updated_at' => $date
        ];
    }
}
