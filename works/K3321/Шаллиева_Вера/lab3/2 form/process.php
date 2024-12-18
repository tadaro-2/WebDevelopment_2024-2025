<?php
$method = $_SERVER["REQUEST_METHOD"];
$data = ($method === "POST") ? $_POST : $_GET;

if (!empty($data)) {
    echo "<h1>Полученные данные</h1>";
    echo "<p><strong>Метод отправки:</strong> $method</p>";
    echo "<p><strong>Имя:</strong> " . htmlspecialchars($data['first_name']) . "</p>";
    echo "<p><strong>Фамилия:</strong> " . htmlspecialchars($data['last_name']) . "</p>";
    echo "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";

    if (isset($data['topics'])) {
        echo "<p><strong>Темы, которые запомнились:</strong> " . implode(", ", $data['topics']) . "</p>";
    } else {
        echo "<p><strong>Темы, которые запомнились:</strong> Не выбрано</p>";
    }

    echo "<p><strong>Общее впечатление:</strong> " . htmlspecialchars($data['impression']) . "</p>";
    echo "<p><strong>Посоветуете изучение Web друзьям:</strong> " . htmlspecialchars($data['recommendation']) . "</p>";
    echo "<p><strong>Ваши эмоции:</strong> " . htmlspecialchars($data['feedback']) . "</p>";
} else {
    echo "<p>Данные не отправлены. Проверьте заполнение формы.</p>";
}
?>
