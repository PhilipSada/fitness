<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('services')->insert([
            'name'=>'cycling-de',
            'image_url'=>'/images/cycling.jpg',
            'description'=>'Enroll for the best cycling class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Germany',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'yoga-de',
            'image_url'=>'/images/yoga.jpg',
            'description'=>'Enroll for the best yoga class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Germany',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'running-de',
            'image_url'=>'/images/running.jpg',
            'description'=>'Enroll for the best running class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Germany',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'body building-de',
            'image_url'=>'/images/body-building.jpg',
            'description'=>'Enroll for the best body-building class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Germany',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'cycling-ca',
            'image_url'=>'/images/cycling.jpg',
            'description'=>'Enroll for the best cycling class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Canada',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'yoga-ca',
            'image_url'=>'/images/yoga.jpg',
            'description'=>'Enroll for the best yoga class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Canada',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'running-ca',
            'image_url'=>'/images/running.jpg',
            'description'=>'Enroll for the best running class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Canada',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'body building-ca',
            'image_url'=>'/images/body-building.jpg',
            'description'=>'Enroll for the best body-building class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Canada',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'cycling-rl',
            'image_url'=>'/images/cycling.jpg',
            'description'=>'Enroll for the best cycling class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Ireland',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'yoga-rl',
            'image_url'=>'/images/yoga.jpg',
            'description'=>'Enroll for the best yoga class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Ireland',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'running-rl',
            'image_url'=>'/images/running.jpg',
            'description'=>'Enroll for the best running class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Ireland',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'body building-rl',
            'image_url'=>'/images/body-building.jpg',
            'description'=>'Enroll for the best body-building class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'Ireland',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'cycling-us',
            'image_url'=>'/images/cycling.jpg',
            'description'=>'Enroll for the best cycling class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'USA',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'yoga-us',
            'image_url'=>'/images/yoga.jpg',
            'description'=>'Enroll for the best yoga class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'USA',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'running-us',
            'image_url'=>'/images/running.jpg',
            'description'=>'Enroll for the best running class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'USA',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('services')->insert([
            'name'=>'body building-us',
            'image_url'=>'/images/body-building.jpg',
            'description'=>'Enroll for the best body-building class you could ever find. This class has three levels which are the beginners, intermediate and advanced level',
            'gym_location'=>'USA',
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
    }
}
