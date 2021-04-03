<!DOCTYPE html>
<html>
	<head>
		<title>MBS Development</title>
		<link rel="icon" href="logo3.png" type="image/x-icon">
	</head>
	<body>
	<style>
        body{
                font-family:wgd;
                color:aqua;
                background-color: black;
            }
        h1, h2{
            font-family: wgd;
        }
        #o{
            margin: 20px 0;
	        padding: 0;
	        height: 6px;
	        border: none;
	        background: linear-gradient(45deg, #000000, aqua);
            
            
        }
        #t{
            margin: 20px 0;
	        padding: 0;
	        height: 6px;
	        border: none;
	        background: linear-gradient(45deg, aqua, #000000);
            
            
        }
        h2{
            float:right;
        }
        button{
            background:rgba(0,0,0,0.5);
            color:#00f8ff;
            padding:30px;
            font-family: wgd;
            cursor:pointer;
            border:none;
            width:100%;
        }
        #preloader_malc {
	        	position: fixed;
      	       	top: 0;
    	    	left: 0;
    	    	right: 0;
    	    	bottom: 0;
    	    	z-index: 99
                font-family:wgd;
                color:aqua;
                background-color: black;
                width: 100%;
    	    	height: 100%;
        	}

            @font-face {
                font-family: wgd; 
                src: url(p.ttf); 
                }
            body{
                font-family:wgd;
                color:aqua;
                background-color: black;
            }
            #dm{
                font-size: 500%;
                margin-left: 34%;
                margin-top:200px;
                animation: color-change 3s infinite;
            }
            #l{
                font-size: 120%;
                margin-left: 45%;
                margin-top:300px;
                animation: color-change2 3s infinite;
            }
        
            @keyframes color-change {
              0% { color: black; }
              50% { color:aqua; }
              100% { color: black; }
            }
            @keyframes color-change2 {
              0% { color: aqua; margin-left:0%; }
              50% { color:black; margin-left:45%; }
              100% { color: aqua; margin-left:89%; }
            }
            a{
                display:none;
            }
	</style>
    <br/><br/><br/><br/>
    <h1>MBS Development</h1>
    <hr id="o"/>
    <h2><p align="center">Drag Racing</p></h2><br/><br/><br/><br/><br/><br/><br/>
    <hr id="t"/>
    <div id="levels"><button onclick="location.href='DragRacing/garage.php';"><h3>START GAME</h3></button></div>


    <script>
        document.addEventListener('keydown', function(event) {
                        
                        //fullscreen
                        if(event.code == 'KeyF'){
                            document.body.requestFullscreen();
                        }});
        window.onload = function(){
		    setTimeout(function() {

			                document.getElementById("preloader_malc").style.display = "none";
			                document.getElementById("preload").style.display = "none";

		                }, 400);
		}
    </script>
    <div id="preloader_malc">
    <p id="dm">DevMBS</p><p id="l">Loading...</p>
</div>


<?php
$file="stat.txt";    // файл для записи истории посещения сайта
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