<!DOCTYPE html>

<html>

	<head>

		<title>MBSDEV - Drag Racing</title>

		<meta charset="utf-8"/>

		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>

		<link rel="icon" href="logo3.png" type="image/x-icon"/>

	    <link rel="stylesheet" href = "levels.css"/>

	</head>



	<body>

		<div id="glFullscreen">

            <div id = "wl"><h1 id="WoL"></h1>

            <div id="cash"></div>

            <div id="bfpb"><div id="speed"></div></div>

			<div id="rs">0 KPH</div>

            <div id="s"><p align="center">STOP</p></div>

            <button id="backToMenu" onclick="location.href='../openLevel.php';">Back To Menu</button>

            </div>

			<canvas id="scene"></canvas>

		</div>

		

		<script src="//unpkg.com/brain.js"></script>

		

		<script type="module" src="levels.js"></script>

<div id="preloader_malc">

<p id="dm">DevMBS</p><p id="l">Loading...</p>

</div>





<?php

$file="../stat.txt";    // файл для записи истории посещения сайта

$col_zap=4999;    // ограничиваем количество строк log-файла 



function getRealIpAddr() {

  if (!empty($_SERVER['HTTP_CLIENT_IP']))        // Определяем IP

  { $ip=$_SERVER['HTTP_CLIENT_IP']; }

  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) 

  { $ip=$_SERVER['HTTP_X_FORWARDED_FOR']; }

  else { $ip=$_SERVER['REMOTE_ADDR']; }

  return $ip;

}



if (strstr($_SERVER['HTTP_USER_AGENT'], 'YandexBot')) {$bot='YandexBot';} //Выявляем поисковых ботов

elseif (strstr($_SERVER['HTTP_USER_AGENT'], 'Googlebot')) {$bot='Googlebot';}

else { $bot=$_SERVER['HTTP_USER_AGENT']; }



$ip = getRealIpAddr();

$date = date("H:i:s d.m.Y");        // определяем дату и время события

$home = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];    // определяем страницу сайта

$lines = file($file);

while(count($lines) > $col_zap) array_shift($lines);

$lines[] = $date."|".$bot."|".$ip."|".$home."|\r\n";

file_put_contents($file, $lines);

?>

	</body>

</html>

