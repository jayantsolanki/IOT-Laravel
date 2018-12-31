<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- csrf token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#e7e7e7">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#e7e7e7">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#e7e7e7">
    <link rel="apple-touch-icon" sizes="76x76" href="img/apple-icon.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/favicon.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <title>IoT Automation</title>
    <!-- Bootstrap core CSS     -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

    <!--  Fonts and icons     -->
    <link type="text/css" href="https://fonts.googleapis.com/css?family=Muli:400,300" rel="stylesheet">
    <link type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="css/themify-icons.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
<div id="app">
    <app></app>
</div>

<script src="{{ mix('/js/app.js') }}"></script>
<!--  Google Maps Plugin    -->
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw"
        type="text/javascript"></script>

</body>
</html>