<?PHP
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

if (!$_GET['channel']) {
    echo json_encode(Array());
} else {
    $channel = $_GET['channel'];
    $output =  shell_exec('streamlink -j twitch.tv/' . $channel);

    echo $output;
}


?>
