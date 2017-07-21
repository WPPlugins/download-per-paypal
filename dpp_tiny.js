tinyMCE.init({
theme : "advanced",
theme_advanced_font_sizes : "1,2,3,4,5,6,7",
theme_advanced_fonts : "Andale Mono=andale mono,times;"+
		"Arial=arial,helvetica,sans-serif;"+
		"Arial Black=arial black,avant garde;"+
		"Book Antiqua=book antiqua,palatino;"+
		"Comic Sans MS=comic sans ms,sans-serif;"+
		"Courier New=courier new,courier;"+
		"Georgia=georgia,palatino;"+
		"Helvetica=helvetica;"+
		"Impact=impact,chicago;"+
		"Symbol=symbol;"+
		"Tahoma=tahoma,arial,helvetica,sans-serif;"+
		"Terminal=terminal,monaco;"+
		"Times New Roman=times new roman,times;"+
		"Trebuchet MS=trebuchet ms,geneva;"+
		"Verdana=verdana,geneva;"+
		"Webdings=webdings;"+
		"Wingdings=wingdings,zapf dingbats",
mode : "exact",
plugins : "safari,media,paste,fullscreen,inlinepopups,directionality,spellchecker,tabfocus,wordpress,wpeditimage,wpgallery",
theme_advanced_buttons1 : "bold,italic,underline,strikethrough,justifyleft,justifycenter,justifyright,justifyfull,formatselect,fontselect,fontsizeselect,forecolor,backcolor",
theme_advanced_buttons2 : "hr",
theme_advanced_buttons3 : "cut,copy,paste,pastetext,pasteword,bullist,numlist,outdent,indent,undo,redo,link,unlink,anchor,image,cleanup,help,code,fullscreen",
theme_advanced_buttons4 : "hr,removeformat,visualaid,sub,sup,charmap,media,spellchecker",
theme_advanced_toolbar_location : "external",
theme_advanced_toolbar_align : "left",
theme_advanced_resizing : true,
elements : "downloadPerPaypal_text",
width : "95%",
height : "400",
language : "de",
gecko_spellcheck : true,
skin : "o2k7",
skin_variant : "black"
});

tinyMCE.addI18n({de:{
common:{
edit_confirm:"M�chtest Du den WYSIWYG-Modus f�r diese Textarea benutzen?",
apply:"�bernehmen",
insert:"Einf�gen",
update:"Aktualisieren",
cancel:"Abbrechen",
close:"Schlie�en",
browse:"Durchsuchen",
class_name:"Klasse",
not_set:"-- Leer --",
clipboard_msg:"Kopieren, Ausschneiden und Einf�gen ist in Mozilla und Firefox nicht verf�gbar.",
clipboard_no_support:"Wird zur Zeit von deinem Browser nicht unterst�tzt, benutze stattdessen Tastenk�rzel.",
popup_blocked:"Dein Popup-Blocker hat leider ein Fenster mit wichtigen Programmfunktionen gesperrt. Um diese Seite vollumf�nglich nutzen zu k�nnen, musst du das Blockieren von Popups unterbinden.",
invalid_data:"Fehler: ung�ltige Werte eingegeben, sie sind rot markiert.",
more_colors:"Weitere Farbe"
},
contextmenu:{
align:"Ausrichtung",
left:"Links",
center:"Center",
right:"Rechts",
full:"Blocksatz"
},
insertdatetime:{
date_fmt:"%Y-%m-%d",
time_fmt:"%H:%M:%S",
insertdate_desc:"Datum einf�gen",
inserttime_desc:"Zeit einf�gen",
months_long:"Januar,Februar,M�rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",
months_short:"Jan_Januar_abbreviation,Feb_Februar_abbreviation,Mrz_M�rz_abbreviation,Apr_April_abbreviation,Mai_Mai_abbreviation,Jun_Juni_abbreviation,Jul_Juli_abbreviation,Aug_August_abbreviation,Sep_September_abbreviation,Okt_Oktober_abbreviation,Nov_November_abbreviation,Dez_Dezember_abbreviation",
day_long:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",
day_short:"So,Mo,Di,Mi,Do,Fr,Sa"
},
print:{
print_desc:"Drucken"
},
preview:{
preview_desc:"Vorschau"
},
directionality:{
ltr_desc:"Von links nach rechts",
rtl_desc:"Von rechts nach links"
},
layer:{
insertlayer_desc:"Neue Ebene einf�gen",
forward_desc:"Vorw�rts gehen",
backward_desc:"R�ckw�rts gehen",
absolute_desc:"Absolute Platzierung ein/aus",
content:"Neue Ebene..."
},
save:{
save_desc:"Speichern",
cancel_desc:"Alle �nderungen verwerfen"
},
nonbreaking:{
nonbreaking_desc:"Gesch�tztes Leerzeichen einf�gen"
},
iespell:{
iespell_desc:"Rechtschreibpr�fung durchf�hren",
download:"ieSpell nicht gefunden. Jetzt installieren?"
},
advhr:{
advhr_desc:"Waagerechtes Lineal"
},
emotions:{
emotions_desc:"Gef�hle"
},
searchreplace:{
search_desc:"Suchen",
replace_desc:"Suchen/Ersetzen"
},
advimage:{
image_desc:"Bild einf�gen/�ndern"
},
advlink:{
link_desc:"Link einf�gen/�ndern"
},
xhtmlxtras:{
cite_desc:"Zitat",
abbr_desc:"Abk�rzung",
acronym_desc:"Akronym",
del_desc:"L�schung",
ins_desc:"Einf�gung",
attribs_desc:"Attribute einf�gen/�ndern"
},
style:{
desc:"Stylesheet bearbeiten"
},
paste:{
paste_text_desc:"Als unformatierten Text einf�gen",
paste_word_desc:"Aus Word einf�gen",
selectall_desc:"Alle ausw�hlen"
},
paste_dlg:{
text_title:"STRG+V dr�cken, um den Text in das Fenster einzuf�gen",
text_linebreaks:"Zeilenumbr�che erhalten",
word_title:"STRG+V dr�cken, um den Text in das Fenster einzuf�gen"
},
table:{
desc:"Neue Tabelle einf�gen",
row_before_desc:"Zeile einf�gen",
row_after_desc:"Zeile einf�gen",
delete_row_desc:"Zeile l�schen",
col_before_desc:"Spalte einf�gen",
col_after_desc:"Spalte einf�gen",
delete_col_desc:"Spalte entfernen",
split_cells_desc:"Verbundene Zellen wieder teilen",
merge_cells_desc:"Zellen vergleichen",
row_desc:"Zeileneigenschaften",
cell_desc:"Zelleneigenschaften",
props_desc:"Tabelleneigenschaften",
paste_row_before_desc:"Zeile mit Inhalt davor einf�gen",
paste_row_after_desc:"Zeile mit Inhalt danach einf�gen",
cut_row_desc:"Zeile ausschneiden",
copy_row_desc:"Zeile kopieren",
del:"Tabelle l�schen",
row:"Zeile",
col:"Spalte",
cell:"Zelle"
},
autosave:{
unload_msg:"Beim Verlassen der Seite werden deine �nderungen verworfen."
},
fullscreen:{
desc:"Vollbildmodus ein/aus (Alt+Shift+G)"
},
media:{
desc:"Medien einbetten/bearbeiten",
delta_width:"0",
delta_height:"0",
edit:"Eingebettete Medien bearbeiten"
},
fullpage:{
desc:"Dokumenteigenschaften"
},
template:{
desc:"Vordefinierten Template-Inhalt einf�gen"
},
visualchars:{
desc:"Sichtbare Steuerzeichen ein/aus."
},
spellchecker:{
desc:"Sprache f�r die Rechtschreibpr�fung �ndern (Alt+Shift+N)",
menu:"Einstellungen f�r die Rechtschreibpr�fung",
ignore_word:"Wort ignorieren",
ignore_words:"Alles ignorieren",
langs:"Sprachen",
wait:"Bitte warten...",
sug:"Vorschl�ge",
no_sug:"Keine Vorschl�ge",
no_mpell:"Es wurden keine Rechtschreibfehler gefunden."
},
pagebreak:{
desc:"Seitenumbruch einf�gen"
}}});

tinyMCE.addI18n("de.advanced",{
style_select:"Stylesheets",
font_size:"Schriftgr��e",
fontdefault:"Schriftname",
block:"Format",
paragraph:"Absatz",
div:"Div",
address:"Adresse",
pre:"Monospace",
h1:"�berschrift 1",
h2:"�berschrift 2",
h3:"�berschrift 3",
h4:"�berschrift 4",
h5:"�berschrift 5",
h6:"�berschrift 6",
blockquote:"Zitat",
code:"Code",
samp:"Codebeispiel",
dt:"Definitionsbegriff",
dd:"Beschreibung der Definition",
bold_desc:"Fett (Ctrl / Alt+Shift + B)",
italic_desc:"Kursiv (Ctrl / Alt+Shift + I)",
underline_desc:"Unterstreichen",
striketrough_desc:"Durchgestrichen (Alt+Shift+D)",
justifyleft_desc:"Linksb�ndig (Alt+Shift+L)",
justifycenter_desc:"Zentriert (Alt+Shift+C)",
justifyright_desc:"Rechtsb�ndig (Alt+Shift+R)",
justifyfull_desc:"Blocksatz (Alt+Shift+J)",
bullist_desc:"Liste (Alt+Shift+U)",
numlist_desc:"Nummerierte Liste (Alt+Shift+O)",
outdent_desc:"Ausr�cken",
indent_desc:"Einr�cken",
undo_desc:"Widerrufen (Ctrl+Z)",
redo_desc:"Wiederholen (Ctrl+Y)",
link_desc:"Link einf�gen/�ndern (Alt+Shift+A)",
link_delta_width:"0",
link_delta_height:"0",
unlink_desc:"Link entfernen (Alt+Shift+S)",
image_desc:"Bild einf�gen/�ndern (Alt+Shift+M)",
image_delta_width:"0",
image_delta_height:"0",
cleanup_desc:"Code bereinigen",
code_desc:"HTML bearbeiten",
sub_desc:"Tiefgestellt",
sup_desc:"Hochgestellt",
hr_desc:"Horizontales Lineal einf�gen",
removeformat_desc:"Formatierung entfernen",
forecolor_desc:"Textfarbe ausw�hlen",
backcolor_desc:"Hintergrundfarbe ausw�hlen",
charmap_desc:"Sonderzeichen einf�gen",
visualaid_desc:"Zwischen Vorgaben und unsichtbaren Elementen umschalten",
anchor_desc:"Anker einf�gen/�ndern",
cut_desc:"Ausschneiden",
copy_desc:"Kopieren",
paste_desc:"Einf�gen",
image_props_desc:"Bildeigenschaften",
newdocument_desc:"Neues Dokument",
help_desc:"Hilfe",
blockquote_desc:"Zitat (Alt+Shift+Q)",
clipboard_msg:"Kopieren, Ausschneiden und Einf�gen ist in Mozilla und Firefox nicht verf�gbar.",
path:"Pfad",
newdocument:"Bist du sicher, dass du den gesamten Inhalt entfernen m�chtest?",
toolbar_focus:"Zu Werkzeugbuttons wechseln - Alt+Q, Zum Editor wechseln - Alt+Z, Zum Elementpfad wechseln - Alt+X",
more_colors:"Weitere Farbe",
colorpicker_delta_width:"0",
colorpicker_delta_height:"0"
});

tinyMCE.addI18n("de.advanced_dlg",{
about_title:"�ber TinyMCE",
about_general:"Eine Seite",
about_help:"Hilfe",
about_license:"Lizenz",
about_plugins:"Plugins",
about_plugin:"Plugin",
about_author:"Autor",
about_version:"Version",
about_loaded:"Geladene Plugins",
anchor_title:"Anker einf�gen/�ndern",
anchor_name:"Ankerbezeichnung",
code_title:"HTML-Quelltext-Editor",
code_wordwrap:"Zeilenumbruch",
colorpicker_title:"Textfarbe ausw�hlen",
colorpicker_picker_tab:"Picker",
colorpicker_picker_title:"Pipette-Werkzeug",
colorpicker_palette_tab:"Palette",
colorpicker_palette_title:"Farbpalette",
colorpicker_named_tab:"Benannt",
colorpicker_named_title:"Farbnamen",
colorpicker_color:"Schriftfarbe:",
colorpicker_name:"Name:",
charmap_title:"Sonderzeichen ausw�hlen",
image_title:"Bild einf�gen/�ndern",
image_src:"Bild-URL",
image_alt:"Bildbeschreibung",
image_list:"Bildliste",
image_border:"Rand",
image_dimensions:"Abmessungen",
image_vspace:"Vertikaler Abstand",
image_hspace:"Horizontaler Abstand",
image_align:"Ausrichtung",
image_align_baseline:"Grundlinie",
image_align_top:"Oben",
image_align_middle:"Mitte",
image_align_bottom:"Unten",
image_align_texttop:"Textb�ndig oben",
image_align_textbottom:"Textb�ndig unten",
image_align_left:"Links",
image_align_right:"Rechts",
link_title:"Link einf�gen/�ndern",
link_url:"URL",
link_target:"Target",
link_target_same:"Link in diesem Fenster �ffnen",
link_target_blank:"Link in neuem Fenster �ffnen",
link_titlefield:"Titel",
link_is_email:"Die eingegebene URL scheint eine E-Mail-Adresse zu sein. Soll &quot;mailto:&quot; vorangestellt werden?",
link_is_external:"Die eingegebene URL scheint ein externer Link zu sein. Soll &quot;http://&quot; vorangestellt werden?",
link_list:"Linkliste"
});

tinyMCE.addI18n("de.media_dlg",{
title:"Medien einbetten/bearbeiten",
general:"Allgemein",
advanced:"Erweitert",
file:"Datei/URL",
list:"Liste",
size:"Abmessungen",
preview:"Vorschau",
constrain_proportions:"Proportionen beschr�nken",
type:"Typ",
id:"ID",
name:"Name",
class_name:"Klasse",
vspace:"Vertikaler Abstand",
hspace:"Horizontaler Abstand",
play:"Automatische Wiedergabe",
loop:"Schleife",
menu:"Men� anzeigen",
quality:"Qualit�t",
scale:"Skalierung",
align:"Ausrichtung",
salign:"S-Ausrichtung",
wmode:"W-Modus",
bgcolor:"Hintergrund",
base:"Basis",
flashvars:"Flash-Variablen",
liveconnect:"SWLiveConnect",
autohref:"Automatischer Hyperlink",
cache:"Cache",
hidden:"Versteckt",
controller:"Controller",
kioskmode:"Kiosk-Modus",
playeveryframe:"Jeden Frame abspielen",
targetcache:"Target-Cache",
correction:"Keine Korrektur",
enablejavascript:"Erlaube JavaScript",
starttime:"Startzeit",
endtime:"Endzeit",
href:"Href",
qtsrcchokespeed:"Geschwindigkeit drosseln",
target:"Target",
volume:"Lautst�rke",
autostart:"Automatisch starten",
enabled:"Erlaubt",
fullscreen:"Vollbild",
invokeurls:"URLs aufrufen",
mute:"Stumm",
stretchtofit:"An Fenster anpassen",
windowlessvideo:"Video ohne Fenster",
balance:"Balance",
baseurl:"Basis-URL",
captioningid:"Untertitelkennung",
currentmarker:"Aktuelle Marke",
currentposition:"Aktuelle Position",
defaultframe:"Standard-Frame",
playcount:"Wiedergabez�hler",
rate:"Frequenz",
uimode:"UI-Modus",
flash_options:"Flash-Einstellungen",
qt_options:"Quicktime-Einstellungen",
wmp_options:"Einstellungen f�r Windows-Media-Player",
rmp_options:"Einstellungen f�r Real-Media-Player",
shockwave_options:"Shockwave-Einstellungen",
autogotourl:"Gehe automatisch zu URL",
center:"Center",
imagestatus:"Bildstatus",
maintainaspect:"Seitenverh�ltnis beibehalten",
nojava:"Kein Java",
prefetch:"Vorhalten",
shuffle:"Mischen",
console:"Konsole",
numloop:"Anzahl Wiederholungen",
controls:"Steuerelemente",
scriptcallbacks:"Skript-Callbacks",
swstretchstyle:"Strecken",
swstretchhalign:"Beim Strecken horizontal ausrichten",
swstretchvalign:"Beim Strecken vertikal ausrichten",
sound:"Ton",
progress:"Fortschritt",
qtsrc:"QuickTime-Quelle",
qt_stream_warn:"RTSP-Streaming-Ressourcen bitte in das QT-Src-Feld eintragen (Karte: Erweitert)",
align_top:"Oben",
align_right:"Rechts",
align_bottom:"Unten",
align_left:"Links",
align_center:"Center",
align_top_left:"Oben links",
align_top_right:"Oben rechts",
align_bottom_left:"Unten links",
align_bottom_right:"Unten rechts",
flv_options:"Flash Video Einstellungen",
flv_scalemode:"Skalierungsmodus",
flv_buffer:"Buffer",
flv_startimage:"Bild starten",
flv_starttime:"Startzeit",
flv_defaultvolume:"Standardlautst�rke",
flv_hiddengui:"GUI verstecken",
flv_autostart:"Automatisch starten",
flv_loop:"Schleife",
flv_showscalemodes:"Zeige Skalierungsmodi",
flv_smoothvideo:"Ruckelfreies Video",
flv_jscallback:"JS-Callback"
});

tinyMCE.addI18n("de.wordpress",{
wp_adv_desc:"Werkzeugleiste anzeigen/verstecken (Alt+Shift+Z)",
wp_more_desc:"more-Tag einf�gen (Alt+Shift+T)",
wp_page_desc:"Seitenumbruch einf�gen (Alt+Shift+P)",
wp_help_desc:"Hilfe (Alt+Shift+H)",
wp_more_alt:"Weiterlesen...",
wp_page_alt:"N�chste Seite...",
add_media:"Dateien hinzuf�gen",
add_image:"Bild hinzuf�gen",
add_video:"Video hinzuf�gen",
add_audio:"Audio hinzuf�gen",
editgallery:"Galerie bearbeiten",
delgallery:"Galerie l�schen"
});

tinyMCE.addI18n("de.wpeditimage",{
edit_img:"Bild bearbeiten",
del_img:"Bild l�schen",
adv_settings:"Erweiterte Einstellungen",
none:"Keine",
size:"Gr��e",
thumbnail:"Vorschaubild",
medium:"Mittelgro�",
full_size:"Vollst�ndige Gr��e",
current_link:"Aktueller Link",
link_to_img:"Mit Bild verlinken",
link_help:"Gib eine URL ein oder klicke oben f�r eine der Vorgaben.",
adv_img_settings:"Erweiterte Bildeinstellungen",
source:"Quelle",
width:"Breite",
height:"H�he",
orig_size:"Originalgr��e",
css:"CSS Klasse",
adv_link_settings:"Erweiterte Linkeinstellungen",
link_rel:"Link-Beziehung",
height:"H�he",
orig_size:"Originalgr��e",
css:"CSS Klasse",
s60:"60%",
s70:"70%",
s80:"80%",
s90:"90%",
s100:"100%",
s110:"110%",
s120:"120%",
s130:"130%",
img_title:"Bildtitel bearbeiten",
caption:"Bildbeschreibung bearbeiten",
alt:"Beschreibung bearbeiten."
});