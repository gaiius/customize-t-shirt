<?php
if(!isset($_SESSION['myCart'])) $_SESSION['myCart'] = array();	
function cartAddItem($data){
	//exit if exists item
	if (cartIsInCart($data['id'])) {
		return false; 
	} else {
		//add news item
		$_SESSION['myCart'][$data['id']] = $data;
		return true;
	}
}
	
function cartIsInCart($id){
	return (isset($_SESSION['myCart'][$id]));
}
	
function cartIsEmpty(){
	return (empty($_SESSION['myCart']));
}
	
function cartCountUniqueItems(){
	$uniqueItems = 0;
	if (cartIsEmpty()==false){
		foreach($_SESSION['myCart'] as $item){
			if($item['id']){
				$uniqueItems++;
			}
		}
	}
	return $uniqueItems;
}
	
function cartCountTotalItems(){
	$uniqueItems = 0;
	if (cartIsEmpty()==false){
		foreach($_SESSION['myCart'] as $item){
			if($item['id']){
				$uniqueItems = $uniqueItems + $item['subtotal'];
			}
		}
	}
	return $uniqueItems;
}

?>