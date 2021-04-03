<!DOCTYPE html>
<html>
	<head>
		<title>MBS Development</title>
		<link rel="icon" href="logo3.png" type="image/x-icon"/>
	</head>
	<body>
	<style>
        
	    body{
            background-color: #515151;
            color: #00f8ff;

        }
        h1{
            font-family: wgd;
        }
        hr{
            margin: 20px 0;
	        padding: 0;
	        height: 6px;
	        border: none;
	        background: linear-gradient(45deg, #000000, aqua);
            
            
        }
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }
        .btn {
            transform: scale(0.8);
            color: #00f8ff;
            cursor:pointer;
            top:70%;
            left: 70%;
            position:absolute;
            transform:translate(-50%, -50%);
            text-decorarion: none;
            font-weight:500;
            font-size:2em;

        }
        .btn span{
            position:absolute;
            width:100%;
            text-align:center;
            text-transform:uppercase;
            height:100%;
            margin: 45px 0 2px 25px;
            max-width:350px;
            max-height:90px;
            border-radius:50em;
        }
        .btn .line1{
            fill:none;
            stroke:#00f8ff;
            stroke-width: 1;
        }
        .btn .line2{
            fill:none;
            stroke:#00f8ff;
            stroke-linecap:round;
            stroke-width:15;
            stroke-dasharray:230;
            stroke-dashoffset:-345;
            transition: 0.5s all cubic-bezier(0.23, 1, 0.32, 1.2);
        }
        .btn:hover .line2{
            stroke-dashoffset:-580;
        }
        .btn,
        .btn>*,
        .btn>*>*{
            transition: all 0.4s ease-out;
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
            img{
                display:none;
            }
            #9{
                display:inline;
            }
            #bit{
                display:inline;
            }
            #blah{
                left:100px;
            }
	</style>
    <br/><br/><br/><br/>
    <span id="blah">9b</span>
    <h1><span id="9">9B</span>IT Development</h1>
    
    
   <a href="openLevel.php" class="btn">
   <span>Start</span>
   <svg width="400" height="130" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
   <rect class="line1" x="10" y="4" width="379" height="112" rx="59.5"/>
   <rect class="line2" x="10" y="4" width="379" height="112" rx="59.5"/>
   </svg>
   </a>
    <hr/>
    <script>
        document.addEventListener('keydown', function(event) {
                        
                        //fullscreen
                        if(event.code == 'KeyF'){
                            document.body.requestFullscreen();
                        }});
        window.onload = function(){
		    setTimeout(function() {

			                document.getElementById("preloader_malc").style.display = "none";
			                

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