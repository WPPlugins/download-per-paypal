<?php

class dpp_paypal_class {
    
   var $last_error;                 // der letzte Error
   
   var $ipn_log;                    // hier wird die IPN gelogged
   
   var $ipn_log_file;               // 
   var $ipn_response;               // Antwort des IPN von Paypal
   var $ipn_data = array();         // POST daten von der IPN
   
   var $fields = array();           // felder, die an Paypal übergeben werden

   
   
   function check_email($email) {
	   if(!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {
		   return false;
	   }
	   $email_array = explode("@", $email);
	   $local_array = explode(".", $email_array[0]);
	   for ($i = 0; $i < sizeof($local_array); $i++) {
		   if(!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$", $local_array[$i])) {
			   return false;
		   }
	   }
	   if(!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) {
		   $domain_array = explode(".", $email_array[1]);
		   if(sizeof($domain_array) < 2) {
			   return false;
		   }
		   for($i = 0; $i < sizeof($domain_array); $i++) {
			   if(!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|([A-Za-z0-9]+))$", $domain_array[$i])) {
				   return false;
			   }
		   }
	   }
		return true;
	} 
   
   function dpp_paypal_class() {
       
      // Konstruktor. Wenn die Klasse instanziert wird, wird dieser gleich aufgerufen
      // Legt die Paypalurl standardmäßig auf die normale URL
      $this->paypal_url = 'https://www.paypal.com/cgi-bin/webscr';
      
      $this->last_error = '';
      //Der Ort der logdatei
      $this->ipn_log_file = '.ipn_results.log';
      //Logging standardmäßig eingeschaltet
	  $this->ipn_log = true;
	  //IPN antwort zurücksetzen
      $this->ipn_response = '';
      
      // Standardmäßig werden diese 2 Felder schon einmal besetzt. Kann überschrieben werden

      $this->add_field('rm','2');           // POST als return Methode
      $this->add_field('cmd','_xclick'); 
      
   }
   
   function add_field($field, $value) {
      
      // Funktion die Felder hinzufügt
            
      $this->fields["$field"] = $value;
   }
	//Funktion die die kreierten Felder an Paypal schickt, indem ein erneutes Form erzeugt und angezeigt wird und dieses dann automatisch abgeschickt wird nach 3 Sekunden
	// Das Ganze in Englisch und Deutsch
   function submit_paypal_post($lang) {
 
	if($lang=='de_DE'){
		echo '<div class="downloadPerPaypal-msgform" style="width: 400px; padding: 5px; margin: 0 auto; margin-bottom: 5px; font-weight: bold; background: none repeat scroll 0 0 #D3FFA8; border: 1px dotted #009900; color: #009900; ">';

		echo "<center><h3>Bitte warten Sie, w&auml;hrend die Bestellung bearbeitet wird.";
		echo "Sie werden nun zur Paypalseite weitergeleitet.</h3></center>\n";
		echo "<form method=\"post\" name=\"dpp_process_form\" ";
		echo "action=\"".$this->paypal_url."\">\n";

		foreach ($this->fields as $name => $value) {
		 echo "<input type=\"hidden\" name=\"$name\" value=\"$value\"/>\n";
		}
		echo "<center><br/><br/>Wenn Sie nicht automatisch binnen 5 Sekunden weitergeleitet werden, dann klicken Sie bitte:<br/><br/>\n";
		echo "<input type=\"submit\" value=\"Hier klicken\"></center>\n";

		echo "</form>\n";
		
		echo '
		
		<script type="text/javascript">
		function dppFormSubmit(){
			document.forms["dpp_process_form"].submit();
		}
		window.setTimeout("dppFormSubmit()", 3000);
		</script>';

		echo '<br><br></div>';
	} else {
		echo '<div class="downloadPerPaypal-msgform" style="width: 400px; padding: 5px; margin: 0 auto; margin-bottom: 5px; font-weight: bold; background: none repeat scroll 0 0 #D3FFA8; border: 1px dotted #009900; color: #009900; ">';

		echo "<center><h3>Please wait while your order is beeing processed";
		echo "You will be forwarded to the Paypal-Website.</h3></center>\n";
		echo "<form method=\"post\" name=\"dpp_process_form\" ";
		echo "action=\"".$this->paypal_url."\">\n";

		foreach ($this->fields as $name => $value) {
		 echo "<input type=\"hidden\" name=\"$name\" value=\"$value\"/>\n";
		}
		echo "<center><br/><br/>If you wait longer than 5 seconds please<br/><br/>\n";
		echo "<input type=\"submit\" value=\"Click here\"></center>\n";

		echo "</form>\n";
		
		echo '
		
		<script type="text/javascript">
		function dppFormSubmit(){
			document.forms["dpp_process_form"].submit();
		}
		window.setTimeout("dppFormSubmit()", 3000);
		</script>';

		echo '<br><br></div>';
	}
   }
   // Funktion die aufgerufen wird, wenn ein IPN ankommt
   function validate_ipn() {

      // Paypalurl wird verarbeitet
      $url_parsed=parse_url($this->paypal_url);        

      // Post String zusammenbauen
      $post_string = '';    
      foreach ($_POST as $field=>$value) { 
         $this->ipn_data["$field"] = $value;
         $post_string .= $field.'='.urlencode(stripslashes($value)).'&'; 
      }
      $post_string.="cmd=_notify-validate"; 

      // Verbindung mit Paypal herstellen
      $fp = fsockopen($url_parsed[host],"80",$err_num,$err_str,30); 
      if(!$fp) {
          
         // wenns nicht funktioniert hat wird der Error gelogged, falls Logging aktiviert ist
         $this->last_error = "fsockopen error no. $errnum: $errstr";
         $this->log_ipn_results(false);       
         return false;
         
      } else { 
 
         // ansonsten werden die Daten zu Paypal geschickt
         fputs($fp, "POST $url_parsed[path] HTTP/1.1\r\n"); 
         fputs($fp, "Host: $url_parsed[host]\r\n"); 
         fputs($fp, "Content-type: application/x-www-form-urlencoded\r\n"); 
         fputs($fp, "Content-length: ".strlen($post_string)."\r\n"); 
         fputs($fp, "Connection: close\r\n\r\n"); 
         fputs($fp, $post_string . "\r\n\r\n"); 

         // die Antwort wird in ipn_response gespeichert
         while(!feof($fp)) { 
            $this->ipn_response .= fgets($fp, 1024); 
         } 

         fclose($fp); // Verbindung schließen

      }
      //Wenn VERIFIED zurückkommt isses gelungen
      if (eregi("VERIFIED",$this->ipn_response)) {
  

         $this->log_ipn_results(true);
         return true;       
         
      } else {
  
         // Wenns nicht geklappt hat
         $this->last_error = 'IPN Validation Failed.';
         $this->log_ipn_results(false);   
         return false;
         
      }
      
   }
   
   function log_ipn_results($success) {
       
      if (!$this->ipn_log) return;  // loggin aus?
      
      // Zeitstempel
      $text = '['.date('m/d/Y g:i A').'] - '; 
      

      if ($success) $text .= "SUCCESS!\n";
      else $text .= 'FAIL: '.$this->last_error."\n";

      $text .= "IPN POST Vars from Paypal:\n";
      foreach ($this->ipn_data as $key=>$value) {
         $text .= "$key=$value, ";
      }
 

      $text .= "\nIPN Response from Paypal Server:\n ".$this->ipn_response;
      

      $fp=fopen($this->ipn_log_file,'a');
      fwrite($fp, $text . "\n\n"); 

      fclose($fp);
   }

}         


 