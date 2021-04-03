<?php

// сюда нужно вписать токен вашего бота
define('TELEGRAM_TOKEN', '1601257161:AAF5FWqEE3R28wp2jnV7hj4fEb8XrgwWGkE');

// сюда нужно вписать ваш внутренний айдишник
define('TELEGRAM_CHATID', '1388629102');
$file = file_get_contents("stat.txt");
message_to_telegram($file);

function message_to_telegram($text)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $text,
            ),
        )
    );
    curl_exec($ch);
}
file_put_contents('stat.txt', null);
?>