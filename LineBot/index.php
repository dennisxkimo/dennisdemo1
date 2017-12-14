<?php
require_once('LINEBotTiny.php');

$channelAccessToken = 'Gx3K3qrdummVgBJWwrZeoDZYQmps6KhNAA3fl5dNyeVlwK01eAVhjfRQz5Q40FmzFS+xxcJib2M1TsHIykoOXv4OQ+gKZke7hDNX/Y0j207UJlJ5mnodeBl98XEgXHDP2VPg6Qobie4gJ2XNUuGJmQdB04t89/1O/w1cDnyilFU=';
$channelSecret = '8deaef846a334c2f540f755f40ea12c5';

$client = new LINEBotTiny($channelAccessToken, $channelSecret);

foreach ($client->parseEvents() as $event) {
    $client->replyMessage(array(
        'replyToken' => $event['replyToken'],
        'messages' => array(
            array(
                'type' => 'text',
                'text' => $message['text']
            )
        )
    ));
};

