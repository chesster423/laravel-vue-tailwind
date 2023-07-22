<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @if($ga_enabled)
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id={{$ga_key}}"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '{{ $ga_key }}');
            </script>
        @endif
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name') }}</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <meta name="description" content="{{ config('settings.description') }}">
        <meta name="keywords" content="{{ config('settings.keywords') }}">
        <meta name="author" content="{{ config('settings.author') }}">


        <meta property="fb:app_id" content="263495799657372"/>
        <meta property="og:site_name" content="Carsona"/>
        <meta property="og:image" content="{{ config('app.url') }}/images/og-image.png">
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Carsona | Find the perfect car that suits your lifestyle and needs." />
        <meta property="og:description" content="{{ config('settings.description') }}" />
        <meta property="og:url" content="{{ config('app.url') }}"/>
        <meta property="og:type" content="website"/>

        <link rel="icon" href="{{ config('app.url') }}/images/icons/carson-title-icon.png">
        <link rel="apple-touch-icon" href="{{ config('app.url') }}/apple-touch-icon.png" sizes="180x180">
        <link rel="mask-icon" href="{{ config('app.url') }}/images/icons/carson-title-icon.png" color="#FFFFFF">
        <meta name="theme-color" content="#ffffff">
        <script>
            const GA_ENABLED="{{ $ga_enabled }}"
            const GA_TAG="{{ $ga_key }}"
            const APP_URL="{{ config('app.url') }}"
            const SENTRY_ENABLED="{{ config('services.sentry.enabled') }}"
            const SENTRY_FEEDBACK_ENABLED="{{ config('services.sentry.feedback-enabled') }}"
            const SENTRY_DSN="{{ config('sentry.dsn') }}"
            const ENVIRONMENT="{{ config('app.env') }}"
            const KONAMI_TOASTY_ENABLED="{{ config('settings.enableKonamiToasty') }}"
            const KONAMI_ASTEROIDS_ENABLED="{{ config('settings.enableKonamiAsteroids') }}"
            const VULTR_REFERRAL_ENABLED="{{ config('settings.vultrReferralEnabled') }}"
            const VULTR_REFERRAL_LINK="{{ config('settings.vultrReferralLink') }}"
        </script>        

        <!-- carsona.io -->
        @if(strpos(request()->getHost(), "carsona.io") !== false)
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FD928MHR48"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FD928MHR48');
        </script>
        @endif


        <!-- carsona.com.au-->
        @if(strpos(request()->getHost(), "carsona.com.au") !== false)
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F0TD8M8T6K"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-F0TD8M8T6K');
        </script>
        @endif
        

        @vite(['resources/css/app.css'])
        @laravelPWA
    </head>
    <body class="bg-gray-50 h-screen antialiased leading-none font-sans overflow-x-hidden overflow-y-auto">
        <div id="app"  v-cloak></div>       
        @vite(['resources/js/app.js'])
        @if(config('settings.enableKonamiAsteroids'))
            <script type="text/javascript" src="{{ config('app.url') }}/js/s-code.min.js"></script>
        @endif
    </body>

</html>
