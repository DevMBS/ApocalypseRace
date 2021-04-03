
<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $connect = mysqli_connect("localhost", "id16152873_devmbs", "%n{~u?e9g4gkjkJN", "id16152873_wgddb") 
    or die("Error " . mysqli_error($connect));
    date_default_timezone_set('UTC');
    $sql = "SELECT SCORE FROM USERS WHERE NAME = \"ADMIN\"";
    $sql2 = "UPDATE USERS SET SCORE = 2000 WHERE NAME = \"ADMIN\"";
    $user_agent = $_SERVER["HTTP_USER_AGENT"];
    if (strpos($user_agent, "Firefox") !== false) $browser = "Firefox";
    elseif (strpos($user_agent, "Opera") !== false) $browser = "Opera";
    elseif (strpos($user_agent, "Chrome") !== false) $browser = "Chrome";
    elseif (strpos($user_agent, "MSIE") !== false) $browser = "Internet Explorer";
    elseif (strpos($user_agent, "Safari") !== false) $browser = "Safari";
    else $browser = "Unknown";
    $date = date(DATE_RFC822);
    $sqlVisitLogRequest = 'INSERT INTO VISITLOG (DATE, NAME, BROWSER) VALUES ("'.$date.'", "Admin", "'.$browser.'")';
    
    
    $result3 = mysqli_query($connect,$sqlVisitLogRequest);
    $result2 = mysqli_query($connect,$sql2);
    $result = mysqli_query($connect,$sql);
    while($out = mysqli_fetch_assoc($result)) {
        $score = $out['SCORE'];
        
            
    }
    mysqli_close($connect);
?>
<script>
    var Score = '<?php echo $score;?>';
    document.write(':' + Score);
</script>