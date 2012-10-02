<?
class DataPoint
{
	public $x = 0;
	public $y = 0;
	public $z = 0;
	public $rotateX = 0;
	public $rotateY = 0;
	public $rotateZ = 0;
	public $scale = 0;
	
	function __construct() {
		$this->reset();
	}
	
	private function _set($x, $y, $z, $rotateX, $rotateY, $rotateZ, $scale)
	{
		$this->x = $x;
		$this->y = $y;
		$this->z = $z;
		$this->rotateX = $rotateX;
		$this->rotateY = $rotateY;
		$this->rotateZ = $rotateZ;
		$this->scale = $scale;
	}
	
	public function set($x, $y, $z, $rotateX, $rotateY, $rotateZ, $scale)
	{
		$this->_set(
			$x==-1?$this->x:$x,
			$y==-1?$this->y:$y,
			$z==-1?$this->z:$z,
			$rotateX==-1?$this->rotateX:$rotateX,
			$rotateY==-1?$this->rotateY:$rotateY,
			$rotateZ==-1?$this->rotateZ:$rotateZ,
			$scale==-1?$this->scale:$scale
		);
	}
	
	public function reset()
	{
		$this->_set(0,0,0,0,0,0,1);
	}
	
	public function offset($x, $y, $z, $rotateX, $rotateY, $rotateZ, $scale)
	{
		$this->_set(
			$x==-1?$this->x:$this->x+$x,
			$y==-1?$this->y:$this->y+$y,
			$z==-1?$this->z:$this->z+$z,
			$rotateX==-1?$this->rotateX:$this->rotateX+$rotateX,
			$rotateY==-1?$this->rotateY:$this->rotateY+$rotateY,
			$rotateZ==-1?$this->rotateZ:$this->rotateZ+$rotateZ,
			$scale==-1?$this->scale:$this->scale+$scale
		);
	}
	
	public function output()
	{
		return " data-x=\"".$this->x."\" data-y=\"".$this->y."\" data-z=\"".$this->z."\" data-rotate-x=\"".$this->rotateX."\" data-rotate-y=\"".$this->rotateY."\" data-rotate-z=\"".$this->rotateZ."\" data-scale=\"".$this->scale."\"";
	}
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1024" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>CRD Web Dev Meetings</title>
    
    <link href='http://fonts.googleapis.com/css?family=Advent+Pro:400,100,200,300,500,600,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Arbutus+Slab' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Source+Code+Pro:300,400' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Flamenco:300,400' rel='stylesheet' type='text/css'>
    <link href="css/impress-demo.css" rel="stylesheet" />
	<style>
		body{
			background-image:none;
			background-color:#888;
			font-family:'Flamenco', 'Source Code Pro','Arbutus Slab';
		}
		.slide h1{
			color:#105CA9;
		}
	</style>
    <!--<link href="/embedweb/assets/css/source/fonts.css" rel="stylesheet" />-->
</head>

<body>

    <div class="fallback-message">
    	<!--
        <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>
        <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
        -->
    </div>

    <div id="impress">
<?
	$data = new DataPoint();
	$data->reset();
?>
        <div id="start" class="step" <?=$data->output()?>>
            <h1>AKQA CRD:<br />Web Developer Meetings</h1>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div class="step slide" <?=$data->output()?>>
            <h1>What:</h1>
			<p>A platform to:</p>
			<ul>
				<li>Recurring meetings to discuss various CRD topics</li>
				<li>Go further into technical discussions</li>
				<li>Share ideas and experiences</li>
			</ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div class="step slide" <?=$data->output()?>>
            <h1>Who:</h1>
			<p>AKQA DC CRD Web Developers</p>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div class="step slide" <?=$data->output()?>>
            <h1>When:</h1>
			<p>Every ~3 weeks</p>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div class="step slide" <?=$data->output()?>>
            <h1>Topics:</h1>
			<ul>
				<li>
					Concepts
					<ul>
						<li>Best practices</li>
						<li>Design patterns</li>
					</ul>
				</li>
				<li>
					Frameworks
					<ul>
						<li>PhoneGap / Titanium</li>
						<li>SASS vs. LESS</li>
						<li>JS Frameworks (Knockout vs Backbone vs Angular vs...)</li>
					</ul>
				</li>
				<li>
					Projects
					<ul>
						<li>Current and past projects</li>
						<li>Demo the project and discuss the 'whys' of the technical architecture</li>
					</ul>
				</li>
			</ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div class="step slide" <?=$data->output()?>>
            <h1>More Details:</h1>
			<ul>
				<li>Rotate presenters</li>
				<li>Focus more on discussion, less on presentation</li>
				<li>Use JS based presentation tools &#9787;</li>
			</ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div class="step" <?=$data->output()?>>
            <h1>Now let's get started!</h1>
        </div>










    
    <script>
    if ("ontouchstart" in document.documentElement) { 
        document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
    }
    </script>
    
    <script src="js/impress.js"></script>
    <script src="/embedweb/assets/scripts/library/jquery-1.7.1.min.js"></script>
    <script>
		impress().init();
		
		var fullScreen = function(){
			var docElm = document.documentElement;
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			}
			else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			}
			else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			}
		};
		
		$(document).ready(function(){
			$("h1").click(fullScreen);
		});
    </script>
    
    </body>
</html>
