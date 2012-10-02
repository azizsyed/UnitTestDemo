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
    <title>Unit Testing</title>
    
    <link href='http://fonts.googleapis.com/css?family=Advent+Pro:400,100,200,300,500,600,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link href="css/impress-demo.css" rel="stylesheet" />
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
                <li>Couping/Decoupling</li>
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
            <h1>About JasmineJS</h1>
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
            	<li>Matchers (for asserts/expectations)</li>
            	<li>Setup/Teardown</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Matchers</h1>
            <ul>
            	<li>toEqual (value)</li>
            	<li>toBe (another object)</li>
            	<li>toMatch (pattern)</li>
            	<li>toBeDefined</li>
            	<li>toBeUndefined</li>
            	<li>toBeNull</li>
            	<li>toBeTruthy (boolean)</li>
            	<li>toBeFalsy (boolean)</li>
            	<li>toContain (inside array/string)</li>
            	<li>toBeLessThan (value)</li>
            	<li>toBeGreatherThan (value)</li>
            	<li>toThrow (exception)</li>
            	<li>.not. (negate matcher)</li>
            	<li>- custom -</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Matchers Examples</h1>
            <ul>
            	<li>expect(value).toEqual("some value")</li>
            	<li>expect(user).not.toBeNull()</li>
            	<li>expect(options).toBeDefined()</li>
            	<li>expect(cities).toInclude("New York")</li>
            	<li>expect(cities.length).toEqual(5)</li>
            	<li>expect(isLoggedIn).toBeTruthy()</li>
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
            	<li>Can be used as a stub/mock function</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Spy Matchers</h1>
			<p>Matchers</p>
            <ul>
            	<li>toHaveBeenCalled</li>
            	<li>toHaveBeenCalledWith</li>
				<li>.not. (to negate the match)
			</ul>
			<p>Properties</p>
            	<li>callCount</li>
            	<li>arguments</li>
            </ul>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Spy Example</h1>
			<textarea disabled="disabled" style="height:513px;">
describe("A sample spy", function() {
  var foo = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it("tracks its number of calls", function() {
    expect(foo.setBar.calls.length).toEqual(2);
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
  });
});
            </textarea>
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
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Async Unit Test Example</h1>
			<textarea disabled="disabled" style="height:513px;">
beforeEach(function(){
	//Add a fake user in the DB with the email: someone@gmail.com
});
afterEach(function() {
	//Remove fake user from db with the email: someone@gmail.com
});  
it("should return a failure for a duplicate email registration check", function(){
	runs(function(){
		var self = this;
		self.isUnique = null;
		$.ajax({
			url: "verify-email.php", //return JSON response
			data: {
				user : "someone@gmail.com"
			},
		})
		.done(function(response) { 
			self.isUnique = response.isUnique
		});
	});
	
	waitsFor(function(){
		return this.isUnique != null;
	}, "The email should be unique", 10000);
	
	runs(function(){
		expect(this.isUnique).toBeFalsy();
	});			
});
            </textarea>
        </div>
<?
	$data->offset(-1,1000,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Other Libraries</h1>
            <ul>
            	<li>qUnit</li>
            	<li>Mocha</li>
            	<li>YUI Test</li>
            	<li>Sinon JS</li>
            </ul>
        </div>
        
		
		
		
		
		
		
		
		
		
<?
	$data->offset(-1,1000,-1,-1,-1,90,-1);
?>                
        <div id="project" class="step" <?=$data->output()?>>
            <h1>Writing Unit Testable Code</h1>
        </div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Coupled code</h1>
			<ul>
				<li>When 2 or more pieces of code have to know how each works in order to function</li>
				<li>Can be one-way or two-way</li>
				<li>Short answer: when 2 or more pieces of code have direct dependencies</li>
			</ul>
			<p>Decoupling is the opposite of coupling, where dependencies are reduced as much as possible</p>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #1</h1>
			<textarea disabled="disabled" style="height:500px;">
(function($){ 
	$(function(){
		$("#my-form").submit(function(){
			//handle form validation here
		});
	});
})(jQuery);
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #1: Improved</h1>
			<textarea disabled="disabled" style="height:500px;">
var validateForm = function(){
	//handle form validation here
};
			
(function($){ 
	$(function(){
		$("#my-form").submit(validateForm);
	});
})(jQuery);
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #2</h1>
			<textarea disabled="disabled" style="height:500px;">
$("#some-selector").click(function(e){
	var value = this.val();
	var hasError = false;
	if (value.length==0){
		hasError = true;
	}
	if (value.indexOf("@")==-1){
		hasError = true;
	}
	//continue validation logic
});
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #2: Improved</h1>
			<textarea disabled="disabled" style="height:500px;">
var validate = function(value){
	var hasError = false;
	if (value.length==0){
		hasError = true;
	}
	if (value.indexOf("@")==-1){
		hasError = true;
	}
	//continue validation logic
};

$("#some-selector").click(function(e){
	var value = this.val();
	validate(value);
	...
});
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #3</h1>
			<textarea disabled="disabled" style="height:500px;">
function validateEmail(){
	var value = $("#email").val();
	
	var hasError = false;
	if (value.length==0){
		hasError = true;
	}
	//continue with validation logic
}
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #4: Improved</h1>
			<textarea disabled="disabled" style="height:500px;">
function validate(value){
	var hasError = false;
	if (value.length==0){
		hasError = true;
	}
	//continue with validation logic
}
			
function validateEmail(){
	var value = $("#email").val();
	
	var hasError = validate(value);
	...
}
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #5</h1>
			<textarea disabled="disabled" style="height:500px;">
public class City
{
    public string Name;
    public long Population;
}

public class Cities
{
    public City[] cities;
}

public class State
{
    private string name;
    private Cities cities;

    public State(string name, Cities cities)
    {
        ...
    }

    public long TotalPopulation()
    {
        float totalPopulation = 0;
        for (int i = 0; i < cities.length; i++)
        {
            totalPopulation += cities[i].Population;
        }
        return totalPopulation;
    }
}			
			</textarea>
		</div>
<?
	$data->offset(-1000,-1,-1,-1,-1,-1,-1);
?>                
        <div class="step slide" <?=$data->output()?>>
            <h1>Decoupling Example #5: Improved</h1>
			<textarea disabled="disabled" style="height:500px;">
public class City
{
    public string Name;
    public long Population;
}

public class Cities
{
    public City[] cities;
    public long GetTotalPopulation(){
        float totalPopulation = 0;
        for (int i = 0; i < cities.Length; i++)
        {
            totalPopulation += cities[i].Population;
        }
        return totalPopulation;
    }
}

public class State
{
    private string name;
    private Cities cities;

    public State(string name, Cities cities)
    {
        ...
    }

    public long TotalPopulation()
    {
        return cities.GetTotalPopulation();
    }
}			
			</textarea>
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
            <h1>Demo</h1>
            <p>A simple registration form requiring first name, last name, and email.</p>
            <ul>
            	<li>Walk through several iterations on improving the code to make it unit test friendly</li>
            	<li>Show initial take on writing unit tests</li>
            	<li>Show the full unit test suite</li>
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
