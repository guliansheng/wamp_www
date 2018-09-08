<?php
//变量定义必须加上$符。
$num='arrggg';
	echo "hello world {$num}<br>";
	//双引号解析变量，单引号不解析。
	echo "$num<br>";
	echo "my name is {$num}ee<br>";
	echo 'my name is $num<br>';
	//变量和字符串用‘.’链接。
	echo 'my name is '.$num.'!';
?>