<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>

<h1>Informations TP 6</h1>

<?php
$etablissement = "ISET / Université Exemple";
$module = "Développement Web";
$annee = 2025;

// Variables numériques
$a = 12;
$b = 5;
$addition = $a + $b;
$multiplication = $a * $b;

echo "<p><strong>Établissement :</strong> $etablissement</p>";
echo "<p><strong>Module :</strong> $module</p>";
echo "<p><strong>Année :</strong> $annee</p>";

echo "<h2>Exemples de calculs :</h2>";
echo "<p>$a + $b = $addition</p>";
echo "<p>$a × $b = $multiplication</p>";
?>

</body>
</html>
