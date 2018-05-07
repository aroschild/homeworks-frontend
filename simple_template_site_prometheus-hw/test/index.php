<?php

$products = array(
    array(
        'code' => 'tir',
        'description' => 'tires',
        'price' => 100
    ),
    array(
        'code' => 'oil',
        'description' => 'oil',
        'price' => 10
    ),
    array(
        'code' => 'spk',
        'description' => 'engine fire',
        'price' => 4
    )
);


for($row = 0; $row < 3; $row++) {
    while (
    list($key, $value) = each($products[$row])) {
        echo "||$value";
    }
    echo '<br />';
}

sort($products);
echo '<pre>';
print_r($products);
