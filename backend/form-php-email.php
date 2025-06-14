<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $para = "johnatan.quenes@gmail.com";
    $assunto = "Contato via Site";
    $corpo = "Nome: $nome\nE-mail: $email\nMensagem:\n$mensagem";

    $headers = "From: $email";

    if (mail($para, $assunto, $corpo, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
