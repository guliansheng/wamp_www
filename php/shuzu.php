<?php
	$arr1=array('user1','user2','user3');
	echo "my name is {$arr1[2]}!<br>";
	$arr2=array('name'=>'user1','age'=>'20','sex'=>'nan');
	echo "my name is {$arr2['name']}!my age is {$arr2['age']}!my sex is {$arr2['sex']}!<br>";
	$arr3=array('user1','age'=>'20','nan');
	echo "my name is {$arr3[0]}!";
?>