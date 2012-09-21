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
    <title>Fly Delta: Embedded Web</title>
    
    <link href='http://fonts.googleapis.com/css?family=Advent+Pro:400,100,200,300,500,600,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link href="css/impress-demo.css" rel="stylesheet" />
    <!--<link href="/embedweb/assets/css/source/fonts.css" rel="stylesheet" />-->
    
    <link rel="shortcut icon" href="http://images.delta.com.edgesuite.net/delta/misc/favicon.ico" />
    <link rel="apple-touch-icon" href="http://images.delta.com.edgesuite.net/delta/misc/favicon.ico" />
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
            <h1>AKQA CRD:<br />Unit Testing with JavaScript</h1>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>        
        <div id="agenda" class="step slide" <?=$data->output()?>>
            <h1>Agenda</h1>
            <ul>
                <li>Unit Testing 101</li>
                <li>Introduction to JasmineJS</li>
                <li>Other JS Unit Testing Libraries</li>
                <li>Demo Time!</li>
            </ul>
        </div>
<?
	$data->reset();
	$data->set(-1000,-1000,-1,-1,-1,-1,-1);
	$data->offset(0,0,-1,-1,-1,-1,-1);
?>        
        <div id="introduction" class="step" <?=$data->output()?>>
            <h1>Unit Testing 101</h1>
        </div>
<?
	$data->offset(1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>What are unit tests?</h1>
            <p>Simply put, unit tests verify that your code works</p>
			<p>Benefits:</p>
            <ul>
				<li>Enforces decoupled code</li>
            	<li>Help in early detection of flaws/issues</li>
            	<li>Aid in regression testing, to insure that additions/updates do not break existing functionality</li>
				<li>Done properly, it can save time</li>
            </ul>
        </div>
<?
	$data->offset(1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Unit Tests</h1>
            <p>A good unit test is:</p>
            <ul>
            	<li>Atomic (no dependencies, can be run in any order)</li>
            	<li>Repeatable</li>
            	<li>Focused (target a specific functional item)</li>
				<li>Understandable (readable to make it maintainable)
            </ul>
        </div>
<?
	$data->offset(1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Unit Test Components</h1>
            <ul>
            	<li>Test Case / Fixture / Suite</li>
            	<li>Setup</li>
            	<li>Test</li>
            	<li>Tear down</li>
            </ul>
        </div>
<?
	$data->offset(1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>TDD vs BDD</h1>
            <p><strong>TDD</strong> - Technical (qUnit)</p>
            <pre>
module("Delta UI");

test("checkbox unchecked", function() {
  equal($(checkbox).prop("checked"), false);
});
            </pre>
            <p><strong>BDD</strong> - Functional (JasmineJS)</p>
            <pre>
describe("Delta UI", function() {
    it('should not be checked by default',function(){
        expect($(checkbox).prop("checked")).toBe(false);
    });
});
            </pre>
        </div>
        

        
<?
	$data->offset(1000,-1,-1,-1,-1,90,-1);
?>                
        <div id="framework" class="step" <?=$data->output()?>>
            <h1>Introducing, JasmineJS</h1>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Unit Tests</h1>
            <ul>
                <li>BDD-style syntax</li>
                <li>Support for server side test execution</li>
                <li>Spy support</li>
                <li>Tests can be split into separate files</li>
                <li>Logical groupings for tests</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Components</h1>
            <ul>
            	<li>Suites (describe)</li>
            	<li>Matches (for asserts/expectations)</li>
            	<li>Setup/Teardown</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Spies</h1>
            <p>Tracks functions and its arguments</p>
            <ul>
            	<li>Detect if function has been called</li>
            	<li>Detect how many times a fn has been invoked</li>
            	<li>Verify if a method has been invoked with specific arguments</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>What About Asynchronous Calls?</h1>
            <p>Especially for AJAX calls</p>
            <ul>
            	<li>runs</li>
            	<li>waitsFor</li>
            </ul>
        </div>
        
		
		
		
		
		
		
		
		
		
<?
	$data->offset(-1,1000,-1,-1,-1,90,-1);
?>                
        <div id="project" class="step" <?=$data->output()?>>
            <h1>Other Libraries</h1>
        </div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Slide 1</h1>
            <p>Lorem Ipsum</p>
            <ul>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            </ul>
        </div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Slide 1</h1>
            <p>Lorem Ipsum</p>
            <ul>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            </ul>
        </div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Slide 1</h1>
            <p>Lorem Ipsum</p>
            <ul>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            </ul>
        </div>





<?
	$data->offset(-1000,-1,-1,-1,-1,90,-1);
?>                
        <div id="obstacles" class="step" <?=$data->output()?>>
            <h1>Demo Time!</h1>
        </div>
<?
	$data->offset(-1,-1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Slide 1</h1>
            <p>Lorem Ipsum</p>
            <ul>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            </ul>
        </div>
<?
	$data->offset(-1,-1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Slide 1</h1>
            <p>Lorem Ipsum</p>
            <ul>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            </ul>
        </div>
<?
	$data->offset(-1,-1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Slide 1</h1>
            <p>Lorem Ipsum</p>
            <ul>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            	<li>Lorem Ipsum</li>
            </ul>
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
