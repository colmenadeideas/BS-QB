<?php 

/*
function rudr_instagram_api_curl_connect( $api_url ){
	$connection_c = curl_init(); // initializing
	curl_setopt( $connection_c, CURLOPT_URL, $api_url ); // API URL to connect
	curl_setopt( $connection_c, CURLOPT_RETURNTRANSFER, 1 ); // return the result, do not print
	curl_setopt( $connection_c, CURLOPT_TIMEOUT, 20 );
	$json_return = curl_exec( $connection_c ); // connect and get json data
	curl_close( $connection_c ); // close connection
	return json_decode( $json_return ); // decode and return
}
$username="olbluerest";
$return  = rudr_instagram_api_curl_connect("https://www.instagram.com/".$username."/?__a=1");

$this->instagramPhotos = $return->user->media->nodes;
print_r($return);exit;*/
$limit		 = 6;
$randoms	 = [];
$arrayLength = sizeof($this->instagramPhotos);

while (sizeof($randoms) < $limit) {
	$random_number = rand(0,$arrayLength-1);
	if (!in_array($random_number,$randoms)){
		array_push($randoms,$random_number);
	}
}
 ?>

<style>
	

	#gallery {
		height: 85vw;
	}

	.absoluteImg{
	    position: absolute;
	    background-repeat: no-repeat;
	    background-size: cover;
	}

	.paralaxImg{
		background-position: center;
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-attachment: fixed;
	}

	#imgG1{
		<?php echo 'background-image: url("'.$this->instagramPhotos[$randoms[1]]['images']['standard_resolution']['url'].'");'?>
	    top: 11%;
	    left: 4.92%;
	    width: 38.09vw;
	    height: 24.08vw;
	}
	
	#imgG3{
		<?php echo 'background-image: url("'.$this->instagramPhotos[$randoms[0]]['images']['standard_resolution']['url'].'");'?>
	    top: 15%;
	    left: 40%;
	    height: 41.97%;
	    width: 35%;
	    z-index: 7;
	}

	#imgG2{
		<?php echo 'background-image: url("'.$this->instagramPhotos[$randoms[2]]['images']['standard_resolution']['url'].'");'?>
		top: 21.18%;
		left: 75.46%;
		width: 19.22vw;
		height: 25.35vw;
	}

	#imgG4{ 
		<?php echo 'background-image: url("'.$this->instagramPhotos[$randoms[3]]['images']['standard_resolution']['url'].'");'?>
		top: 43%;
		left: 6%;
		width: 33.09vw;
		height: 23.49vw;
	}

	#imgG5{
		<?php echo 'background-image: url("'.$this->instagramPhotos[$randoms[4]]['images']['standard_resolution']['url'].'");'?>
		top: 59%;
		left: 40%;
		width: 30.67vw;
		height: 30.28vw;
	}

	#imgG6{
		<?php echo 'background-image: url("'.$this->instagramPhotos[$randoms[5]]['images']['standard_resolution']['url'].'");'?>
		top: 53%;
		left: 67%;
		width: 29.78vw;
		height: 22.46vw;
	}

</style>
<section>
 <div class="container-fluid">

    <div class="row parallax-img-container" id="gallery" data-aos="fade-in">
    	
		<?php echo '<div class="absoluteImg" id="imgG1"> </div>' ?>
    	<?php echo '<div class="absoluteImg" id="imgG2"> </div>' ?> 
    	<?php echo '<div class="absoluteImg" id="imgG3"> </div>' ?>

    	<?php echo '<div class="absoluteImg" id="imgG4"> </div>' ?>
    	<?php echo '<div class="absoluteImg" id="imgG5"> </div>' ?>
    	<?php echo '<div class="absoluteImg" id="imgG6"> </div>' ?>	

    	
    </div>

</div>   
</section>

