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
edit_confirm:"Möchtest Du den WYSIWYG-Modus für diese Textarea benutzen?",
apply:"Übernehmen",
insert:"Einfügen",
update:"Aktualisieren",
cancel:"Abbrechen",
close:"Schließen",
browse:"Durchsuchen",
class_name:"Klasse",
not_set:"-- Leer --",
clipboard_msg:"Kopieren, Ausschneiden und Einfügen ist in Mozilla und Firefox nicht verfügbar.",
clipboard_no_support:"Wird zur Zeit von deinem Browser nicht unterstützt, benutze stattdessen Tastenkürzel.",
popup_blocked:"Dein Popup-Blocker hat leider ein Fenster mit wichtigen Programmfunktionen gesperrt. Um diese Seite vollumfänglich nutzen zu können, musst du das Blockieren von Popups unterbinden.",
invalid_data:"Fehler: ungültige Werte eingegeben, sie sind rot markiert.",
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
insertdate_desc:"Datum einfügen",
inserttime_desc:"Zeit einfügen",
months_long:"Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",
months_short:"Jan_Januar_abbreviation,Feb_Februar_abbreviation,Mrz_März_abbreviation,Apr_April_abbreviation,Mai_Mai_abbreviation,Jun_Juni_abbreviation,Jul_Juli_abbreviation,Aug_August_abbreviation,Sep_September_abbreviation,Okt_Oktober_abbreviation,Nov_November_abbreviation,Dez_Dezember_abbreviation",
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
insertlayer_desc:"Neue Ebene einfügen",
forward_desc:"Vorwärts gehen",
backward_desc:"Rückwärts gehen",
absolute_desc:"Absolute Platzierung ein/aus",
content:"Neue Ebene..."
},
save:{
save_desc:"Speichern",
cancel_desc:"Alle Änderungen verwerfen"
},
nonbreaking:{
nonbreaking_desc:"Geschütztes Leerzeichen einfügen"
},
iespell:{
iespell_desc:"Rechtschreibprüfung durchführen",
download:"ieSpell nicht gefunden. Jetzt installieren?"
},
advhr:{
advhr_desc:"Waagerechtes Lineal"
},
emotions:{
emotions_desc:"Gefühle"
},
searchreplace:{
search_desc:"Suchen",
replace_desc:"Suchen/Ersetzen"
},
advimage:{
image_desc:"Bild einfügen/ändern"
},
advlink:{
link_desc:"Link einfügen/ändern"
},
xhtmlxtras:{
cite_desc:"Zitat",
abbr_desc:"Abkürzung",
acronym_desc:"Akronym",
del_desc:"Löschung",
ins_desc:"Einfügung",
attribs_desc:"Attribute einfügen/ändern"
},
style:{
desc:"Stylesheet bearbeiten"
},
paste:{
paste_text_desc:"Als unformatierten Text einfügen",
paste_word_desc:"Aus Word einfügen",
selectall_desc:"Alle auswählen"
},
paste_dlg:{
text_title:"STRG+V drücken, um den Text in das Fenster einzufügen",
text_linebreaks:"Zeilenumbrüche erhalten",
word_title:"STRG+V drücken, um den Text in das Fenster einzufügen"
},
table:{
desc:"Neue Tabelle einfügen",
row_before_desc:"Zeile einfügen",
row_after_desc:"Zeile einfügen",
delete_row_desc:"Zeile löschen",
col_before_desc:"Spalte einfügen",
col_after_desc:"Spalte einfügen",
delete_col_desc:"Spalte entfernen",
split_cells_desc:"Verbundene Zellen wieder teilen",
merge_cells_desc:"Zellen vergleichen",
row_desc:"Zeileneigenschaften",
cell_desc:"Zelleneigenschaften",
props_desc:"Tabelleneigenschaften",
paste_row_before_desc:"Zeile mit Inhalt davor einfügen",
paste_row_after_desc:"Zeile mit Inhalt danach einfügen",
cut_row_desc:"Zeile ausschneiden",
copy_row_desc:"Zeile kopieren",
del:"Tabelle löschen",
row:"Zeile",
col:"Spalte",
cell:"Zelle"
},
autosave:{
unload_msg:"Beim Verlassen der Seite werden deine Änderungen verworfen."
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
desc:"Vordefinierten Template-Inhalt einfügen"
},
visualchars:{
desc:"Sichtbare Steuerzeichen ein/aus."
},
spellchecker:{
desc:"Sprache für die Rechtschreibprüfung ändern (Alt+Shift+N)",
menu:"Einstellungen für die Rechtschreibprüfung",
ignore_word:"Wort ignorieren",
ignore_words:"Alles ignorieren",
langs:"Sprachen",
wait:"Bitte warten...",
sug:"Vorschläge",
no_sug:"Keine Vorschläge",
no_mpell:"Es wurden keine Rechtschreibfehler gefunden."
},
pagebreak:{
desc:"Seitenumbruch einfügen"
}}});

tinyMCE.addI18n("de.advanced",{
style_select:"Stylesheets",
font_size:"Schriftgröße",
fontdefault:"Schriftname",
block:"Format",
paragraph:"Absatz",
div:"Div",
address:"Adresse",
pre:"Monospace",
h1:"Überschrift 1",
h2:"Überschrift 2",
h3:"Überschrift 3",
h4:"Überschrift 4",
h5:"Überschrift 5",
h6:"Überschrift 6",
blockquote:"Zitat",
code:"Code",
samp:"Codebeispiel",
dt:"Definitionsbegriff",
dd:"Beschreibung der Definition",
bold_desc:"Fett (Ctrl / Alt+Shift + B)",
italic_desc:"Kursiv (Ctrl / Alt+Shift + I)",
underline_desc:"Unterstreichen",
striketrough_desc:"Durchgestrichen (Alt+Shift+D)",
justifyleft_desc:"Linksbündig (Alt+Shift+L)",
justifycenter_desc:"Zentriert (Alt+Shift+C)",
justifyright_desc:"Rechtsbündig (Alt+Shift+R)",
justifyfull_desc:"Blocksatz (Alt+Shift+J)",
bullist_desc:"Liste (Alt+Shift+U)",
numlist_desc:"Nummerierte Liste (Alt+Shift+O)",
outdent_desc:"Ausrücken",
indent_desc:"Einrücken",
undo_desc:"Widerrufen (Ctrl+Z)",
redo_desc:"Wiederholen (Ctrl+Y)",
link_desc:"Link einfügen/ändern (Alt+Shift+A)",
link_delta_width:"0",
link_delta_height:"0",
unlink_desc:"Link entfernen (Alt+Shift+S)",
image_desc:"Bild einfügen/ändern (Alt+Shift+M)",
image_delta_width:"0",
image_delta_height:"0",
cleanup_desc:"Code bereinigen",
code_desc:"HTML bearbeiten",
sub_desc:"Tiefgestellt",
sup_desc:"Hochgestellt",
hr_desc:"Horizontales Lineal einfügen",
removeformat_desc:"Formatierung entfernen",
forecolor_desc:"Textfarbe auswählen",
backcolor_desc:"Hintergrundfarbe auswählen",
charmap_desc:"Sonderzeichen einfügen",
visualaid_desc:"Zwischen Vorgaben und unsichtbaren Elementen umschalten",
anchor_desc:"Anker einfügen/ändern",
cut_desc:"Ausschneiden",
copy_desc:"Kopieren",
paste_desc:"Einfügen",
image_props_desc:"Bildeigenschaften",
newdocument_desc:"Neues Dokument",
help_desc:"Hilfe",
blockquote_desc:"Zitat (Alt+Shift+Q)",
clipboard_msg:"Kopieren, Ausschneiden und Einfügen ist in Mozilla und Firefox nicht verfügbar.",
path:"Pfad",
newdocument:"Bist du sicher, dass du den gesamten Inhalt entfernen möchtest?",
toolbar_focus:"Zu Werkzeugbuttons wechseln - Alt+Q, Zum Editor wechseln - Alt+Z, Zum Elementpfad wechseln - Alt+X",
more_colors:"Weitere Farbe",
colorpicker_delta_width:"0",
colorpicker_delta_height:"0"
});

tinyMCE.addI18n("de.advanced_dlg",{
about_title:"Über TinyMCE",
about_general:"Eine Seite",
about_help:"Hilfe",
about_license:"Lizenz",
about_plugins:"Plugins",
about_plugin:"Plugin",
about_author:"Autor",
about_version:"Version",
about_loaded:"Geladene Plugins",
anchor_title:"Anker einfügen/ändern",
anchor_name:"Ankerbezeichnung",
code_title:"HTML-Quelltext-Editor",
code_wordwrap:"Zeilenumbruch",
colorpicker_title:"Textfarbe auswählen",
colorpicker_picker_tab:"Picker",
colorpicker_picker_title:"Pipette-Werkzeug",
colorpicker_palette_tab:"Palette",
colorpicker_palette_title:"Farbpalette",
colorpicker_named_tab:"Benannt",
colorpicker_named_title:"Farbnamen",
colorpicker_color:"Schriftfarbe:",
colorpicker_name:"Name:",
charmap_title:"Sonderzeichen auswählen",
image_title:"Bild einfügen/ändern",
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
image_align_texttop:"Textbündig oben",
image_align_textbottom:"Textbündig unten",
image_align_left:"Links",
image_align_right:"Rechts",
link_title:"Link einfügen/ändern",
link_url:"URL",
link_target:"Target",
link_target_same:"Link in diesem Fenster öffnen",
link_target_blank:"Link in neuem Fenster öffnen",
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
constrain_proportions:"Proportionen beschränken",
type:"Typ",
id:"ID",
name:"Name",
class_name:"Klasse",
vspace:"Vertikaler Abstand",
hspace:"Horizontaler Abstand",
play:"Automatische Wiedergabe",
loop:"Schleife",
menu:"Menü anzeigen",
quality:"Qualität",
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
volume:"Lautstärke",
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
playcount:"Wiedergabezähler",
rate:"Frequenz",
uimode:"UI-Modus",
flash_options:"Flash-Einstellungen",
qt_options:"Quicktime-Einstellungen",
wmp_options:"Einstellungen für Windows-Media-Player",
rmp_options:"Einstellungen für Real-Media-Player",
shockwave_options:"Shockwave-Einstellungen",
autogotourl:"Gehe automatisch zu URL",
center:"Center",
imagestatus:"Bildstatus",
maintainaspect:"Seitenverhältnis beibehalten",
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
flv_defaultvolume:"Standardlautstärke",
flv_hiddengui:"GUI verstecken",
flv_autostart:"Automatisch starten",
flv_loop:"Schleife",
flv_showscalemodes:"Zeige Skalierungsmodi",
flv_smoothvideo:"Ruckelfreies Video",
flv_jscallback:"JS-Callback"
});

tinyMCE.addI18n("de.wordpress",{
wp_adv_desc:"Werkzeugleiste anzeigen/verstecken (Alt+Shift+Z)",
wp_more_desc:"more-Tag einfügen (Alt+Shift+T)",
wp_page_desc:"Seitenumbruch einfügen (Alt+Shift+P)",
wp_help_desc:"Hilfe (Alt+Shift+H)",
wp_more_alt:"Weiterlesen...",
wp_page_alt:"Nächste Seite...",
add_media:"Dateien hinzufügen",
add_image:"Bild hinzufügen",
add_video:"Video hinzufügen",
add_audio:"Audio hinzufügen",
editgallery:"Galerie bearbeiten",
delgallery:"Galerie löschen"
});

tinyMCE.addI18n("de.wpeditimage",{
edit_img:"Bild bearbeiten",
del_img:"Bild löschen",
adv_settings:"Erweiterte Einstellungen",
none:"Keine",
size:"Größe",
thumbnail:"Vorschaubild",
medium:"Mittelgroß",
full_size:"Vollständige Größe",
current_link:"Aktueller Link",
link_to_img:"Mit Bild verlinken",
link_help:"Gib eine URL ein oder klicke oben für eine der Vorgaben.",
adv_img_settings:"Erweiterte Bildeinstellungen",
source:"Quelle",
width:"Breite",
height:"Höhe",
orig_size:"Originalgröße",
css:"CSS Klasse",
adv_link_settings:"Erweiterte Linkeinstellungen",
link_rel:"Link-Beziehung",
height:"Höhe",
orig_size:"Originalgröße",
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