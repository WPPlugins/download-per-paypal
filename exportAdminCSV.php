<?php	header("Content-Length: $len");

	// Wir werden eine Datei ausgeben
	header("Content-type: text/csv");

	// Es wird downloaded.pdf benannt
	header('Content-Disposition: attachment; filename="mailadressen.csv"');
	header("Content-Transfer-Encoding: binary");	require( '../../../wp-blog-header.php' );	global $wpdb;		$prefix = $wpdb->prefix;	$result = $wpdb->get_results("SELECT id,email,filePath,timestamp FROM $prefix" . "downloadPerPaypal ORDER BY id ASC");	echo "id,email,Datei,Datum,Uhrzeit\r\n";	foreach ($result as $pointer) {		$id = $pointer->id;		$email = $pointer->email;		$path = $pointer->filePath;		$date = date("d.m.y",$pointer->timestamp);		$time = date("G:i:s",$pointer->timestamp);		echo "$id,$email,$path,$date,$time\r\n";					} 
?>