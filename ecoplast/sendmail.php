<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $project_name = trim($_POST["project_name"]);
    $admin_email = trim($_POST["admin_email"]);
    $form_subject = trim($_POST["form_subject"]);
    $name = trim($_POST["Name"]);
    $phone = trim($_POST["Phone"]);
    $comment = trim($_POST["Comment"]);
    $article = trim($_POST["Article"]);
    
    $message = "Ім'я: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Коментар: $comment\n";
    $message .= "Артикул: $article\n";
    
    $headers = "From: $project_name <$admin_email>\r\n"
             . "Reply-To: $admin_email\r\n"
             . "Content-type: text/plain; charset=utf-8\r\n";
             
    mail($admin_email, $form_subject, $message, $headers);
    
    header("Location: thanks.html");
    exit;
}
?>
