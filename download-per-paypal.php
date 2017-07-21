<?php
/*
Plugin Name: Download per Paypal
Version: 0.2
Plugin URI: http://www.wordpressworkshop.de/
Author: Fabian Renner
Author URI: http://www.vionic.de/
Description: A WordPress PayPal Digital Goods Plugin to download files per payment
Text Domain: download-per-paypal
*/

/**

 * Changelog:

 * 05/27/2010: 0.1

 * 	- Original first Version

 * 05/27/2010: 0.2

 * 	- NEW: Languages English and German. Hybrid. If you have a German Blog its german. If english -> english. That easy!
 */

/*  Copyright 2010  Fabian Renner  (email : renner@vionic.de)

    This program is free software; you can redistribute it and/or modify

    it under the terms of the GNU General Public License as published by

    the Free Software Foundation; either version 2 of the License, or

    (at your option) any later version.

    This program is distributed in the hope that it will be useful,

    but WITHOUT ANY WARRANTY; without even the implied warranty of

    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the

    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License

    along with this program; if not, write to the Free Software

    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

*/

add_shortcode('downloadPerPaypal', 'dpp_shortcodes');

$langAct = get_locale();
function dpp_initLanguage(){
	$currentLocale = get_locale();
	if(!empty($currentLocale)) {
		$moFile = dirname(__FILE__) . "/language/" . $currentLocale . ".mo";
		if(@file_exists($moFile) && is_readable($moFile)) load_textdomain('download-per-paypal', $moFile);
	}
}
function dpp_shortcodes($atts){
	dpp_display();
}

function dpp_adminMenu()
    {
		add_menu_page('DP Paypal', 'DP Paypal','manage_options','DownloadPerPaypal', 'dpp_configPage','div');
    }
	
function dpp_configPage() {
		
		$_Yes='Yes';
		$_No='No';
		
		
		
		
		//W&auml;hrungen
		$Currencies['AUD']='$';
		$Currencies['CAD']='$';
		$Currencies['EUR']='&#128;';
		$Currencies['GBP']='&#163;';
		$Currencies['JPY']='&#165;';
		$Currencies['USD']='$';
		
		
        $title = __('Download per Paypal Configuration', 'download-per-paypal');
		$message = __('Update successful!', 'download-per-paypal');
        if ($_GET['updated']) { ?>
			
            <div id="message" class="updated fade"><p><?php echo $message; ?></p></div>
<?php } ?>
			
            <div class="wrap">
				<div id="icon-downloadPerPaypal" class="icon32"><br /></div>
                <h2><?php echo $title; ?></h2>
                <form action="options.php" method="post">
                    <?php wp_nonce_field('update-options'); ?>
                    <p><?php _e('Set up your <strong>Download per Paypal Plugin</strong> with these parameters.', 'download-per-paypal');?></p>
					<p><?php _e('Put in your file, which you want to sell.', 'download-per-paypal');?></p>
					<p><?php _e('But first of all you have to set up the parameters to start.', 'download-per-paypal');?></p>
					<br />
					<p><?php _e('To show the plugin in the frontend and the download-button to sell your file just insert <strong style=\"color: red;\">[downloadPerPaypal]</strong> in any post or page of your blog.', 'download-per-paypal');?></p>
					<p><?php _e('Please insert \"<strong>###LINK###</strong>\" into the text of your mail which the customer gets to download the file. Where the shortcut stands, later it is replaced by the original link in the mail.', 'download-per-paypal');?></p>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr valign="top">
								<th scope="row"><b><?php _e('Your Paypal E-Mail-Add', 'download-per-paypal'); ?></b></th>
								<td>
									<input type="text" size="40" style="width:200px;" name="downloadPerPaypal_mail" id="downloadPerPaypal_mail" value="<?php echo get_option('downloadPerPaypal_mail'); ?>" />
								</td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('Your E-Mail-Adress of your Paypalaccount where you want to receive the payments', 'download-per-paypal'); ?>
								</td>
							</tr>
						</table>
							<?php
								unset($Yes,$No);
								if(get_option('downloadPerPaypal_testmodus')=='No'){
									$No=' SELECTED';
								}else{
									$Yes=' SELECTED';
								}
							?>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><b><?php _e('Testmode', 'download-per-paypal'); ?></b></th>
								<td>
									<p><select name="downloadPerPaypal_testmodus" id="downloadPerPaypal_testmodus"><option value="Yes" <?php echo $Yes; ?>><?php echo $_Yes; ?></option><option value="No" <?php echo $No; ?>><?php echo $_No; ?></option></select> <?php _e('Please choose if you want to use your Plugin with the Sandboxfeature of the Paypal API.', 'download-per-paypal'); ?></p>
								</td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('If you want to test your plugin first you can set up a Paypal Developer Account. Then you have access to the Sandbox. You can set up fake-users and test your plugin. Its only ment for developers.', 'download-per-paypal'); ?>
								</td>
							</tr>
						</table>
							<?php
								unset($Yes,$No);
								if(get_option('downloadPerPaypal_ipncheck')=='No'){
									$No=' SELECTED';
								}else{
									$Yes=' SELECTED';
								}
							?>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><b><?php _e('Set up IPN?', 'download-per-paypal'); ?></b></th>
								<td>
									<p><select name="downloadPerPaypal_ipncheck" id="downloadPerPaypal_ipncheck"><option value="Yes" <?php echo $Yes; ?>><?php echo $_Yes; ?></option><option value="No" <?php echo $No; ?>><?php echo $_No; ?></option></select> <?php _e('Please choose here if you already have set up your IPN in your Paypal account. If not, note the notice above.', 'download-per-paypal');?></p>
								</td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('Set up your IPN on <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_profile-ipn-notify\" style=\"color:red;\">https://www.paypal.com/cgi-bin/webscr?cmd=_profile-ipn-notify</a>. Insert there into the form the URI where you have inserted [downloadPerPaypal].', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><b><?php _e('Standardcurrency', 'download-per-paypal'); ?></b></th>
								<td>
									<select name="downloadPerPaypal_currency" id="downloadPerPaypal_currency">
										<?php
											$Currency=get_option('downloadPerPaypal_currency');
											foreach($Currencies as $Value => $Display){
												echo '<option value="'.$Value.'"'.($Currency==$Value ? ' SELECTED' : '').'>'.$Display.$Value.'</option>';
											}
										?>
									</select>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><b><?php _e('Price', 'download-per-paypal'); ?></b></th>
								<td>
									 <input type="text" size="40" style="width:60px;" name="downloadPerPaypal_preis" id="downloadPerPaypal_preis" value="<?php echo get_option('downloadPerPaypal_preis'); ?>" />
								</td>
							</tr>
							<tr style="background: #F6CECE; color: red;">
								<th scope="row"></th>
								<td>
									<?php _e('Please insert only prices seperated with <b>dots</b>.', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><b><?php _e('Shipping (also seperated with dots):', 'download-per-paypal'); ?></b></th>
								<td>
									 <input type="text" size="40" style="width:60px;" name="downloadPerPaypal_versand" id="downloadPerPaypal_versand" value="<?php echo get_option('downloadPerPaypal_versand'); ?>" />
								</td>
							</tr>
							<tr style="background: #F6CECE; color: red;">
								<th scope="row"></th>
								<td>
									<?php _e('Please insert only prices seperated with <b>dots</b>.', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><?php _e('Upload your file:', 'download-per-paypal'); ?></th>
								<td><input id="downloadPerPaypal-uploader" type="button" value="Upload Datei" /></td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('Click here to upload a file or use one that you have yet uploaded. In the following small window please click  \Insert into post\". The path is then shown in the next inputfield.', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><?php _e('Path and filename:', 'download-per-paypal'); ?></th>
								<td>
									<input type="text" size="40" style="width:95%;" name="downloadPerPaypal_datei" id="downloadPerPaypal_datei" value="<?php echo get_option('downloadPerPaypal_datei'); ?>" readonly/>
								</td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('You cannot fill this field.', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><?php _e('Filename (without the ending (such as \".pdf\"))', 'download-per-paypal'); ?></th>
								<td>
									<input type="text" size="40" style="width:200px;" name="downloadPerPaypal_dateiName" id="downloadPerPaypal_dateiName" value="<?php echo get_option('downloadPerPaypal_dateiName'); ?>" />
								</td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('The name of the file, which the user can download.', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr>
								<th scope="row"><?php _e('Mail with link (Subject):', 'download-per-paypal'); ?></th>
								<td>
									<input type="text" size="40" style="width:400px;" name="downloadPerPaypal_betreff" id="downloadPerPaypal_betreff" value="<?php echo get_option('downloadPerPaypal_betreff'); ?>"/>
								</td>
							</tr>
							<tr style="background: #ddd;">
								<th scope="row"></th>
								<td>
									<?php _e('The subject for the mail in which the user gets his downloadlink.', 'download-per-paypal');?>
								</td>
							</tr>
						</table>
						<table style="border: 2px solid #aaa; margin: 0 0 20px 0" class="form-table">
							<tr style="background: #F6CECE; color: red;">
								<th scope="row"></th>
								<td>
									<?php _e('Please insert here the text for the mail which the user receives.<br>Insert <b>###LINK###</b> at the position, where the download link should be placed.', 'download-per-paypal');?>
								</td>
							</tr>
							<tr>
								<th scope="row"><?php _e('Mailtext with link:', 'download-per-paypal'); ?></th>
								<td>
									<textarea rows="10" cols="30" style="width:95%;" name="downloadPerPaypal_text" id="downloadPerPaypal_text" value=""><?php echo get_option('downloadPerPaypal_text'); ?></textarea>
								</td>
							</tr>
							
						</table>
                    <p class="submit">
                        <input type="submit" name="Submit" value="<?php _e('Save &raquo;', 'download-per-paypal'); ?>" />
                    </p>
					<input type="hidden" name="action" value="update" />
                    <input type="hidden" name="page_options" value="downloadPerPaypal_versand,downloadPerPaypal_betreff,downloadPerPaypal_text,downloadPerPaypal_ipncheck,downloadPerPaypal_mail,downloadPerPaypal_testmodus,downloadPerPaypal_currency,downloadPerPaypal_preis,downloadPerPaypal_datei,downloadPerPaypal_dateiName" />
                </form>
			<br/>
			
			<div id="emailAdressen">

			

			<h2><?php _e('List of the 20 last buyers E-Mail adresses:', 'download-per-paypal');?></h2>

<?php

				

			// Daten aus der Datenbank lesen und anzeigen

			global $wpdb;

			$prefix = $wpdb->prefix;

			$result = $wpdb->get_results("SELECT id,email,filePath,timestamp FROM $prefix" . "downloadPerPaypal ORDER BY id DESC");

			$outputCounter = 0;

			foreach ($result as $pointer) {

				$id = $pointer->id;

				$email = $pointer->email;

				$path = $pointer->filePath;

				$stampDate = date("d.m.y",$pointer->timestamp);
				$stampTime = date("G:i:s",$pointer->timestamp);

				echo "<p>$email ";
				_e(' date:', 'download-per-paypal');
				echo "$stampDate ";
				_e(' time:', 'download-per-paypal');
				echo "$stampTime ";
				_e(' o&apos;clock</p>', 'download-per-paypal');
				

				if($outputCounter == 19){

					break;

				}

				$outputCounter++;

				

			} 

?>
			
			<form action="../wp-content/plugins/download-per-paypal/exportAdminCSV.php">

				<input type="submit" name="Submit" value="<?php _e('Export adresses as CSV', 'download-per-paypal');?>">

			</form>

			<form action="../wp-content/plugins/download-per-paypal/deleteDb.php">

				<input type="submit" name="Submit" value="<?php _e('Erase data from database', 'download-per-paypal');?>">

			</form>
			</div>
<?php
}
	
function dpp_display(){
	global $langAct;
	global $wpdb;
	$prefix = $wpdb->prefix;

	$Email=get_option('downloadPerPaypal_mail');
	$TestMode=get_option('downloadPerPaypal_testmodus');
	$itemName=get_option('downloadPerPaypal_dateiName');
	$itemPreis=get_option('downloadPerPaypal_preis');
	$itemCurrency=get_option('downloadPerPaypal_currency');
	$adminMail = get_option('admin_email');
	$itemVersand=  get_option('downloadPerPaypal_versand');
	
	$timeStamp = time();

	$Currencies=array('AUD'=>'$','CAD'=>'$','EUR'=>'&#128;','GBP'=>'&#163;','JPY'=>'&#165;','USD'=>'$');

	// Setup class
	require_once('dpp.class.php');  // Klasse einbinden
	$dpp_p = new dpp_paypal_class; // Klasse instanzieren

	if($TestMode=='Yes'){
		$dpp_p->paypal_url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';   // die Test Url für die Sandbox
	}else{
		$dpp_p->paypal_url = 'https://www.paypal.com/cgi-bin/webscr';
	}
	
	if(empty($_GET)){
		$addParamsign = '?';
	}
	else {
		$addParamsign = '&';
	}

	$this_script = get_option('siteurl').$_SERVER['REQUEST_URI'];
	$siteUrl = get_option('siteurl');

	switch ($_GET['dpp_action']) {
	
	case 'process':

		$dpp_p->add_field('on0', $_POST['downloader_mail']);
		$dpp_p->add_field('business', $Email);
		$dpp_p->add_field('return', 'http://'.$_SERVER['HTTP_HOST'].$_POST['strip_url'].'dpp_action=success');
		$dpp_p->add_field('cancel_return', 'http://'.$_SERVER['HTTP_HOST'].$_POST['strip_url'].'dpp_action=cancel');
		$dpp_p->add_field('notify_url', 'http://'.$_SERVER['HTTP_HOST'].$_POST['strip_url'].'dpp_action=ipn');
		$dpp_p->add_field('lc', $_POST['lc']);
		$dpp_p->add_field('item_name', $_POST['item_name']);
		$dpp_p->add_field('shipping', $_POST['shipping']);
		$dpp_p->add_field('currency_code', $_POST['currency_code']);
		$dpp_p->add_field('amount', $_POST['amount']);
		
		$dpp_p->submit_paypal_post($langAct); // Paypal die Felder übergeben
	break;

	case 'success':// Erfolg :-)

		

			_e('<div class=\"downloadPerPaypal-msgform\" style=\"padding: 5px; margin-bottom: 5px; font-weight: bold; background: none repeat scroll 0 0 #D3FFA8; border: 1px dotted #009900; color: #009900; \"><h3>Thank you for the payment!</h3>You received a mail with the downloadlink. Have fun.<br><br></div>', 'download-per-paypal');
		
		break;

	case 'cancel': // Wenn die Bezahlung abgebrochen wurde


		break;

	case 'ipn':    // hier wird Paypal zur IPN-Validierung anfragen

		if ($dpp_p->validate_ipn()) {
			// für HTML-E-Mails muss der 'Content-type'-Header gesetzt werden
			

			// zusätzliche Header
			$header .= 'From: ' . get_option('blogname') . ' <' . $adminMail . '>' . "\n";
			$to = $adminMail; //  your email
			$body =  "Sie haben eine IPN bekommen. Zahlung \n";
			$body .= "von ".$dpp_p->ipn_data['payer_email']." am ".date('d.m.Y')." wurde korrekt überbermittelt.\n";
			$body .= "Uhrzeit: ".date('G:i')."\n\nDetails dazu:\n";
			$now=time();
			
			
			//Check ob die ins Form eingegebene Mailadresse richtig ist, wenn ja dann wird die Datei dorthin versandt , wenn nicht dann an die in Paypal hinterlegte Mailadresse
			if($dpp_p->check_email($dpp_p->ipn_data['option_name1'])){
				$customerEmail = $dpp_p->ipn_data['option_name1'];
			} else {
				$customerEmail = $dpp_p->ipn_data['payer_email'];
			}
			$encryptedMail = md5($customerEmail . 'md5hashsalt');
			
			// check ob schon eintrag vorhanden, wenn nicht füge einen neuen ein
			$result = $wpdb->get_results("SELECT id,email FROM $prefix" . "downloadPerPaypal");
			
			$falseflag = 0;
			if(!empty($result)){
				$num_rows = count($result);
				foreach ($result as $pointer) {
					$SQLid = $pointer->id;
					$SQLmail = $pointer->email;
					if($customerEmail == $SQLmail){
						$falseflag = $SQLid;
					} else {
						
					}
				}
			}
			
			$getFile = get_option('downloadPerPaypal_datei');
			$getFileRelative = str_replace(get_option('siteurl'),"",$getFile);
			if ($falseflag == 0){
				$wpdb->insert( $prefix . "downloadPerPaypal", array( 'email' => $customerEmail, 'filePath' => $getFileRelative, 'timestamp' => $timeStamp) );
				//get results nach dem Eintragen // Zahl der Einträge
				$resultDanach = $wpdb->get_results("SELECT id,email FROM $prefix" . "downloadPerPaypal");
			
				$num_rows = count($resultDanach);
				
				$mailLink = '<a href="' . get_option('siteurl') . '/wp-content/plugins/download-per-paypal/download.php?ident=' . $encryptedMail . '&fileID=' . ceil((($num_rows)*300/17)) . '">' . __('Download with this link</a>', 'download-per-paypal');
			} else {
				$mailLink = '<a href="' . get_option('siteurl') . '/wp-content/plugins/download-per-paypal/download.php?ident=' . $encryptedMail . '&fileID=' . ceil((($falseflag)*300/17)) . '">'  . __('Download with this link</a>', 'download-per-paypal');
				$wpdb->update( $prefix . "downloadPerPaypal", array( 'timestamp' => $timeStamp, 'filePath' => $getFileRelative ), array( 'id' => $falseflag ));
			}

			foreach ($dpp_p->ipn_data as $key => $value) { $body .= "\n$key: $value"; }
			
			mail($to, printf(__("Product <<<%d>>> bought", 'download-per-paypal'), $itemName), $body, $header);
			
			//mail mit Downloadlink an Besteller
			$headerRec  = 'MIME-Version: 1.0' . "\n";
			$headerRec .= 'Content-type: text/html; charset=UTF-8' . "\n";

			// zusätzliche Header
			$headerRec .= 'From: ' . get_option('blogname') . ' <' . $adminMail . '>' . "\n";
			
			
			
			
			$mailTextRoh = utf8_encode(get_option('downloadPerPaypal_text'));
			$recipient = $customerEmail; //recipient
			$mail_body = utf8_decode(str_replace("\r\n","\n",str_replace('###LINK###',$mailLink,$mailTextRoh))); //mail body zusammensetzen // Link ersetzen \r\n ersetzen durch \n und dann utf-8 dekodieren
			$subjectRec = utf8_decode(get_option('downloadPerPaypal_betreff')); //subj
			mail($recipient, $subjectRec, $mail_body, $headerRec); //mail command :)
			
			
		}
		break;
	}

	// checken ob das Formular vorherige Parameter enthält. Wenn ja,dann entferne alle
	
	$requestUrl = $_SERVER['REQUEST_URI'];
	if(strpos($requestUrl, '?dpp_action=process')!==false){
		$requestUrl = str_replace('?dpp_action=process','',$requestUrl);
		$addParamsign = '?';
		$stripUrl = $requestUrl.'?';
	}
	elseif(strpos($requestUrl, '?dpp_action=cancel')!==false){
		$requestUrl = str_replace('?dpp_action=cancel','',$requestUrl);
		$addParamsign = '?';
		$stripUrl = $requestUrl.'?';
	}
	elseif(strpos($requestUrl, '?dpp_action=success')!==false){
		$requestUrl = str_replace('?dpp_action=success','',$requestUrl);
		$addParamsign = '?';
		$stripUrl = $requestUrl.'?';	
	}
	elseif(strpos($requestUrl, '&dpp_action=process')!==false){
		$requestUrl = str_replace('&dpp_action=process','',$requestUrl);
		$addParamsign = '&';
		$stripUrl = $requestUrl.$addParamsign;
	}
	elseif(strpos($requestUrl, '&dpp_action=cancel')!==false){
		$requestUrl = str_replace('&dpp_action=cancel','',$requestUrl);
		$addParamsign = '&';
		$stripUrl = $_SERVER['QUERY_STRING'].$addParamsign;
	}
	elseif(strpos($requestUrl, '&dpp_action=success')!==false){
		$requestUrl = str_replace('&dpp_action=success','',$requestUrl);
		$addParamsign = '&';
		$stripUrl = $requestUrl.$addParamsign;
	}else {
		$stripUrl = $requestUrl.$addParamsign;
	}
	
	
	
	
	
	
	echo '<div id="downloadPerPaypal_htmlform" style="padding: 5px; margin-bottom: 5px; font-weight: bold; background: none repeat scroll 0 0 white; border: 1px solid black; color: black;"><form action="'.$requestUrl.$addParamsign.'dpp_action=process" method="post" target="_blank">
	<table style="text-align:left; margin: 0 auto;">';	
	echo '
	<tr>
		<td>' . __('E-Mail adress', 'download-per-paypal') .'</td>
	</tr>
	<tr>
		<td><input type="text" name="downloader_mail" value=""></td>
	</tr>
	<tr>
	<td colspan="2" align="right">
		<input type="hidden" name="cmd" value="_xclick">
		<input type="hidden" name="business" value="' . $Email . '">
		<input type="hidden" name="lc" value="DE">
		<input type="hidden" name="item_name" value="' . $itemName . '">
		<input type="hidden" name="amount" value="' . $itemPreis . '">
		<input type="hidden" name="currency_code" value="' . $itemCurrency . '">
		<input type="hidden" name="button_subtype" value="services">
		<input type="hidden" name="no_note" value="0">
		<input type="hidden" name="shipping" value="' . $itemVersand . '">
		<input type="hidden" name="strip_url" value="'. $stripUrl .'">
		<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">';
	if(get_locale()=='de_DE'){
		echo '<input type="image" src="https://www.paypal.com/de_DE/DE/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal.">';
	} else {
		echo '<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">';
	}
		
	echo '<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
	</form>
	</td></tr>
	</table>
	</form><br/></div>';

}
	
	
function dpp_my_admin_scripts() {

wp_enqueue_script('media-upload');

wp_enqueue_script('thickbox');

wp_register_script('dpp_my-upload', WP_PLUGIN_URL.'/download-per-paypal/dpp_myUpload.js', array('jquery','media-upload','thickbox'));

wp_enqueue_script('dpp_my-upload');

wp_enqueue_script('tiny_mce', get_settings('siteurl') . '/wp-includes/js/tinymce/tiny_mce.js'); 

wp_enqueue_script('dpp_myscript', WP_PLUGIN_URL.'/download-per-paypal/dpp_tiny.js'); 

} 

function dpp_my_admin_styles() {
wp_enqueue_style('thickbox');

wp_register_style('dpp_adminstyle', WP_PLUGIN_URL.'/download-per-paypal/adminDpp.css');
wp_enqueue_style( 'dpp_adminstyle');

}



function dpp_ipnWarnung() {

	echo "<div id='downloadPerMail_warning' class='updated fade-ff0000'><p><strong>"

		.__('Please activate the IPN in your Paypal Sellingaccount and insert the URI to your IPN-responding file (the URI where you have inserted [downloadPerPaypal]).', 'download-per-paypal')."</strong> "

		.sprintf(__('It is important to setup <a href=\"%1$s\">here your IPN</a>', 'download-per-paypal'), "plugins.php?page=DownloadPerPaypal")

		."</p></div>";

}


/**

 * Add filters and actions

 */

if (get_option('downloadPerPaypal_ipncheck') == 'No' && $_GET['page'] == 'DownloadPerPaypal') {

    add_action('admin_notices', 'dpp_ipnWarnung');

}

add_action('admin_menu', 'dpp_adminMenu');

add_action('admin_print_scripts', 'dpp_my_admin_scripts');

add_action('admin_print_styles', 'dpp_my_admin_styles');

add_action('init','dpp_initLanguage');

function dpp_options_install() {

	add_option('downloadPerPaypal_mail', __('yourmail@adress.com', 'download-per-paypal'));

	add_option('downloadPerPaypal_ipncheck', 'No');

	add_option('downloadPerPaypal_testmodus', 'No');
	
	add_option('downloadPerPaypal_currency', 'EUR');
	
	add_option('downloadPerPaypal_preis','1');

	add_option('downloadPerPaypal_datei',__('Not yet set up!', 'download-per-paypal'));
	
	add_option('downloadPerPaypal_dateiName', __('testfile', 'download-per-paypal'));
	
	add_option('downloadPerPaypal_betreff', __('Subject', 'download-per-paypal'));
	
	add_option('downloadPerPaypal_text', __('Text body <br> ###LINK###', 'download-per-paypal'));
	
	add_option('downloadPerPaypal_versand','1');
	
	global $wpdb;

	$prefix = $wpdb->prefix;

	$table_name_dpp = $prefix . "downloadPerPaypal";

	if($wpdb->get_var("show tables like '$table_name_dpp'") != $table_name_dpp) {

      

	$sql = "CREATE TABLE " . $table_name_dpp . " (

	  id mediumint(9) NOT NULL AUTO_INCREMENT,

	  email VARCHAR(55) NOT NULL,

	  filePath VARCHAR(255) NULL,

	  timestamp bigint(11) DEFAULT '0' NOT NULL,

	  UNIQUE KEY id (id)

	);";
	

	  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

	  dbDelta($sql);
	  
	}
}

function dpp_options_uninstall(){

	delete_option('downloadPerPaypal_mail');

	delete_option('downloadPerPaypal_ipncheck');

	delete_option('downloadPerPaypal_testmodus');
	
	delete_option('downloadPerPaypal_currency');
	
	delete_option('downloadPerPaypal_preis');

	delete_option('downloadPerPaypal_datei');
	
	delete_option('downloadPerPaypal_dateiName');
	
	delete_option('downloadPerPaypal_betreff');
	
	delete_option('downloadPerPaypal_text');
	
	delete_option('downloadPerPaypal_versand');
	
	global $wpdb;

	$prefix = $wpdb->prefix;

	$table_name_dpp = $prefix . "downloadPerPaypal";


	$wpdb->query("DROP TABLE IF EXISTS $table_name_dpp");

}


register_activation_hook(__FILE__, 'dpp_options_install' );


if (function_exists('register_uninstall_hook')){

	register_uninstall_hook(__FILE__, 'dpp_options_uninstall');

 }

 else 

 {

	register_deactivation_hook(__FILE__, 'dpp_options_uninstall');

 }

?>