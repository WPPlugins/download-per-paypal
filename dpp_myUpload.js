jQuery(document).ready(function() { 
	var formfield;
	jQuery('#downloadPerPaypal-uploader').click(function() {
	formfield = jQuery('#downloadPerPaypal_datei').attr('name');
	tb_show('', 'media-upload.php?amp;TB_iframe=true');
	return false;
	});
	 
	 
	window.original_send_to_editor = window.send_to_editor;
	window.send_to_editor = function(html){
		if (formfield) {
			imgurl = jQuery(html).attr('href');
			jQuery('#downloadPerPaypal_datei').val(imgurl);
			tb_remove();
		} else {
			window.original_send_to_editor(html);
		}
	};
});