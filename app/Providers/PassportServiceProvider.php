<?php

namespace App\Providers;

//use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;
use \Illuminate\Foundation\Support\Providers\AuthServiceProvider;
class PassportServiceProvider extends AuthServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
	$this->registerPolicies();

        Passport::routes();
	
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
