<?php

// CHANGE EMAIL ADDRESS ON LINE 40.


if(!$_POST) exit;

// Email address verification, do not edit. 
function isEmail($email) {
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

//Sanitize input data using PHP filter_var().
	$name        = filter_var($_REQUEST["name"], FILTER_SANITIZE_STRING);
	$email       = filter_var($_REQUEST["email"], FILTER_SANITIZE_EMAIL);
	$tipo     = filter_var($_REQUEST["tipo"], FILTER_SANITIZE_STRING);
	$phone        = filter_var($_REQUEST["phone"], FILTER_SANITIZE_STRING);
	$gdpr = filter_var($_REQUEST["politica"], FILTER_SANITIZE_STRING); 
	$marketing = filter_var($_REQUEST["marketing"], FILTER_SANITIZE_STRING); 
	if(strcmp($gdpr,"false")==0){
		echo '<div class="error_message">Por favor, debe leer y aceptar nuestra política de privacidad.</div>';
		exit();	
	}
	if(strcmp($marketing,"true")==0){
		$marketing="MARKETING: ON";
	}else
	{
		$marketing="MARKETING: OFF";
	}
	
if(trim($name) == '') {
	echo '<div class="error_message">Por favor, introduzca el nombre.</div>';
	exit();
} else if(trim($email) == '') {
	echo '<div class="error_message">Por favor, introduzca el email.</div>';
	exit();
} else if(!isEmail($email)) {
	echo '<div class="error_message">Compruebe la dirección de correo electrónico.</div>';
	exit();
} 




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$body = [
    'Messages' => [
        [
        'From' => [
            'Email' => "comunicacion@esat.es",
            'Name' => "Landing ID3"
        ],
        'To' => [
	[
            'Email' => "wllop@esat.es",
            'Name' => "Walter"
	],[
		'Email' => "secretaria@esat.es",
		'Name' => "Secretaria"
	],[
		'Email' => "ansurias@esat.es",
		'Name' => "Alicia"
	],[
		'Email' => "dandres@esat.es",
		'Name' => "Diego"
	]
        ],
        'Subject' => "Información desde landing de ID3 v2  - ".$name ,
        'HTMLPart' => "<h3> Nueva información desde la landing de ID3<br><b>Nombre: </>".$name."<br><b>Email: </b>".$email."<br><b>Teléfono: </b>".$phone."<br>Marketing: ".$marketing."<br>"
        ]
    ]
];
 
$ch = curl_init();
 
curl_setopt($ch, CURLOPT_URL, "https://api.mailjet.com/v3.1/send");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json')
);
curl_setopt($ch, CURLOPT_USERPWD, "cd151594ad9e63c5000a0a682e5c18a6:da98e08b84addcad742e81f6a9c06d6b");
$server_output = curl_exec($ch);
curl_close ($ch);
$response = json_decode($server_output);
if ($response->Messages[0]->Status == 'success') {
//Mail OKI!








	// Email has sent successfully, echo a success page.
	echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<p>Muchas gracias. En breve nos pondremos en contacto contigo.</p>";
	echo "</div>";
	echo "</fieldset>";

} else {

	echo 'ERROR!';

}
?>
