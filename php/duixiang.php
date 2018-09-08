<meta charset="utf-8">
<?php
class person{
	public $name='user';
	public $age='20';
	public $sex='nan';
	public function say(){
		echo "my name is $this->name";
	}
}
$gu=new person();
echo "my age is {$gu->age}!<br>";
echo "{$gu->say()}!<br>";
echo "my sex is {$gu->sex}!";
?>