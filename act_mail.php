<!-- act_mail.php -->

<?php

$fullname = filter_var($_GET["fullname"], FILTER_SANITIZE_STRING);
$email = filter_var($_GET["email"], FILTER_SANITIZE_STRING);
$message = filter_var($_GET["message"], FILTER_SANITIZE_STRING);
$submit = filter_var($_GET["submit"], FILTER_SANITIZE_STRING);
/* was the submit button pressed and do we have a valid email address */
echo substr_count($email,".")." | ".substr_count($email, '@')." | ".strlen($submit);

if (strlen($submit) > 0 and (substr_count($email, '@') > 0 and substr_count($email,".") > 0)) {
    echo "We're in!";
    $to = "contact@cherylvelez.com";
    $subject = "HTML email";

    $message = "
    <html>
    <head>
    <title>Email from Portfolio Website</title>
    </head>
    <body>
    <table>
    <tr>
    <th>Name</th>
    <td>".$fullname."</td>
    </tr>
    <tr>
    <th>Message</th>
    <td>".$message."</td>
    </tr>
    </table>
    </body>
    </html>
    ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: '.$email. "\r\n";
    echo $to." ".$subject." ".$message." ".$headers;
    mail($to,$subject,$message,$headers);
} else {
    echo "Invalid form values.";
}
?>