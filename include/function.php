<?php

	function getExcerpt($content, $length = 40){
		$words = explode(" ", strip_tags($content), $length);
		array_pop($words);
		return implode(' ', $words)."..";
	}
	
	function html_entities($str){
		if (is_array($str)){
			foreach ($str as $key => $val){
				$str[$key] = html_entities($val);
			}
		} else {
			$str = htmlentities($str, ENT_QUOTES | ENT_IGNORE, "UTF-8");
		}
		
		return $str;
	}

	function html_entities_decode($str){
		if (is_array($str)){
			foreach ($str as $key => $val){
				$str[$key] = html_entities_decode($val);
			}
		} else {
			$str = html_entity_decode($str, ENT_QUOTES | ENT_IGNORE, "UTF-8");
		}
		
		return $str;
	}
	
	function picThumbnail($pic = '', $width = 100, $height = 100, $class = '', $admin = false){
		$picSrc = $pic;
		if($admin) $picSrc = "../".$pic;
		if($pic == "" || !file_exists($picSrc)) {
			$pics = abspath."asset/upload/default.jpg";
		} else {
			$pics = abspath.$pic;
		}
		echo '<img src="'.abspath.'timthumb.php?src='.urlencode($pics).'&w='.$width.'&h='.$height.'&q=90" class="'.$class.'">';
	}
	
	function showDateTime($date){
		if($date == "0000-00-00 00:00:00" || $date == "") return "0000-00-00 00:00:00";
		return date("d M y, H:i:s", strtotime($date));
	}
	
	function showDate($date){
		if($date == "0000-00-00" || $date == "") return "0000-00-00";
		return date("d M y", strtotime($date));
	}
	
	
	function getOrderNumber(){
		$q = mysql_query("SELECT id FROM `order` ORDER BY id DESC LIMIT 1");
		$r = mysql_fetch_array($q);
		if($r['id']==''){
			return 'INV000001';
		} else {
			$idc = $r['id']+1;
			return 'INV'.substr('00000'.$idc, -6);
		}
	}
	
	function getProductNumber(){
		$q = mysql_query("SELECT id FROM `produk` ORDER BY id DESC LIMIT 1");
		$r = mysql_fetch_array($q);
		if($r['id']==''){
			return 'P000001';
		} else {
			$idc = $r['id']+1;
			return 'P'.substr('00000'.$idc, -6);
		}
	}
	
	function paging($total, $limit =  20, $page= 1, $targetpage, $sp = "&"){
		
		$adjacents = 3;
		
		if($page){ 
			$start = ($page - 1) * $limit; //first item to display on this page
		}else{
			$start = 0;
		}
		
		/* Setup page vars for display. */
		$prev = $page - 1; //previous page is current page - 1
		$next = $page + 1; //next page is current page + 1
		$lastpage = ceil($total/$limit); //lastpage.
		$lpm1 = $lastpage - 1; //last page minus 1
		
		/* CREATE THE PAGINATION */		
		$pagination = "";
		if($lastpage > 1)
		{ 
			$pagination .= "<div class='pagination'> <ul>";
			
			if ($page > $counter+1) {
				$pagination.= "<li><a href=\"$targetpage".$sp."h=$prev\">prev</a></li>"; 
			}
		
			if ($lastpage < 7 + ($adjacents * 2)) 
			{ 
				for ($counter = 1; $counter <= $lastpage; $counter++)
				{
					if ($counter == $page)
						$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
					else
						$pagination.= "<li><a href=\"$targetpage".$sp."h=$counter\">$counter</a></li>"; 
				}
			}
			elseif($lastpage > 5 + ($adjacents * 2)) //enough pages to hide some
			{
			//close to beginning; only hide later pages
				if($page < 1 + ($adjacents * 2)) 
				{
					for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
					{
						if ($counter == $page)
							$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
						else
							$pagination.= "<li><a href=\"$targetpage".$sp."h=$counter\">$counter</a></li>"; 
					}
					$pagination.= "<li>...</li>";
					$pagination.= "<li><a href=\"$targetpage".$sp."h=$lpm1\">$lpm1</a></li>";
					$pagination.= "<li><a href=\"$targetpage".$sp."h=$lastpage\">$lastpage</a></li>"; 
				}
				//in middle; hide some front and some back
				elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
				{
					$pagination.= "<li><a href=\"$targetpage".$sp."h=1\">1</a></li>";
					$pagination.= "<li><a href=\"$targetpage".$sp."h=2\">2</a></li>";
					$pagination.= "<li>...</li>";
					
					for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
					{
						if ($counter == $page)
							$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
						else
							$pagination.= "<li><a href=\"$targetpage".$sp."h=$counter\">$counter</a></li>"; 
					}
					
					$pagination.= "<li>...</li>";
					$pagination.= "<li><a href=\"$targetpage".$sp."h=$lpm1\">$lpm1</a></li>";
					$pagination.= "<li><a href=\"$targetpage".$sp."h=$lastpage\">$lastpage</a></li>"; 
				}
				//close to end; only hide early pages
				else
				{
					$pagination.= "<li><a href=\"$targetpage".$sp."h=1\">1</a></li>";
					$pagination.= "<li><a href=\"$targetpage".$sp."h=2\">2</a></li>";
					$pagination.= "<li>...</li>";
					
					for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++)
					{
						if ($counter == $page)
							$pagination.= "<li><a href='#' class='active'>$counter</a></li>";
						else
							$pagination.= "<li><a href=\"$targetpage".$sp."h=$counter\">$counter</a></li>"; 	
					}
				}
			}
		
			//next button
			if ($page < $counter - 1) 
				$pagination.= "<li><a href=\"$targetpage".$sp."h=$next\">next</a></li>";
			else
				$pagination.= "";
		
			$pagination.= "</ul></div>\n"; 
		}
		
		return $pagination;
	}
	
?>