## Laravel-IOT Project, next generation sister site of [Broker Codes](https://github.com/jayantsolanki/Broker_codes)
> Original Website can be found here [IOT-Bootstrapped](https://github.com/jayantsolanki/IOT-Bootstrapped) UI of the 
> Dashboard based on paper dashboard UI template + vue-router [Source] 
> (https://cristijora.github.io/vue-paper-dashboard/)

## Added support
* Added support for JWT Auth for creating REST Apis framework 
* Will access the database of the Broker Codes using REST Apis and Websocket 
* Migration creation

## Setup
``` 
composer install #to install Laravel and third party packages 
cp .env.example .env #to configure installation
php artisan key:generate #to generate unique key for the project 
npm install #to install npm dependencies 
npm run dev #to build app.js with laravel mix 
php artisan serve #to serve application on localhost:8000 
```


## License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
