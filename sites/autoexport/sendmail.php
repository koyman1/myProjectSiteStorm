<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $question = $_POST["question"];

  // Формуємо повідомлення електронної пошти
  $message = "Ім'я: " . $name . "\n" .
             "Номер телефону: " . $phone . "\n" .
             "Запит: " . $question;

  // Надсилаємо повідомлення електронної пошти
  $sent = mail("eutoex@gmail.com", "Форма зворотнього зв'язку", $message);

  // Відправляємо код відповіді до клієнтського браузера
  if ($sent) {
    echo "<h1>Ваша заявка успешно отправлена! Ожидайте нашего звонка</h1>";
    echo "<h2>Через 5 секунд вас будет перенаправлено на главную.</h2>";
    echo '<meta http-equiv="refresh" content="5;url=index.html">';
  } else {
    echo "<h2>Під час відправки заявки сталася помилка. Спробуйте знову.</h2>";
  }
}
?>
