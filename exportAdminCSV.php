<?php

	// Wir werden eine Datei ausgeben
	header("Content-type: text/csv");

	// Es wird downloaded.pdf benannt
	header('Content-Disposition: attachment; filename="mailadressen.csv"');
	header("Content-Transfer-Encoding: binary");
?>