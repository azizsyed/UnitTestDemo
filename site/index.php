<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>User Registration Demo</title>        
        <link href="css/site.css" rel="stylesheet" />
    </head>
    
    <body>
    	<header class="container">
        	<h1>User Registration Demo</h1>
        </header>
    	<div class="container">
            <section class="left main">
                <h2>Please enter all fields below:</h2>
                <form action="register-user.php" id="registration-form">
                    <fieldset>
                        <input type="text" name="firstname" id="first-name" placeholder="First Name" />
                    </fieldset>
                    <fieldset>
                        <input type="text" name="lastname" id="last-name" placeholder="Last Name" />
                    </fieldset>
                    <fieldset>
                        <input type="text" name="email" id="email" placeholder="Email Address" />
                    </fieldset>
                    <fieldset>
                        <input type="text" name="emailconfirm" id="email-confirm" placeholder="Confirm Email Address" />
                    </fieldset>
                    <fieldset>
                        <button class="button primary-button" type="submit">Submit</button>
                        <button class="button secondary-button" type="reset">Reset</button>
                    </fieldset>
                </form>
			</section>
            <section class="right info">
                <h2>Requirements</h2>
                <ul>
                    <li>
                        <span>First Name</span>
                        <ul>
                            <li>Required (i.e. not empty)</li>
                            <li>Minimum of 1 character</li>
                            <li>Maximum of 20 characters</li>
                            <li>Can contain spaces</li>
                            <li>Can contain apostrophy</li>
                            <li>Allowed characters: alphabetic</li>
                        </ul>
                    </li>
                    <li>
                        <span>Last Name</span>
                        <ul>
                            <li>Required (i.e. not empty)</li>
                            <li>Minimum of 2 characters</li>
                            <li>Maximum of 25 characters</li>
                            <li>Can contain spaces</li>
                            <li>Can contain apostrophy</li>
                            <li>Allowed characters: alphabetic</li>
                        </ul>
                    </li>
                    <li>
                        <span>Email</span>
                        <ul>
                            <li>Required (i.e. not empty)</li>
                            <li>Must be in proper format, i.e. name@domain.extension</li>
                            <li>Allowed characters: alphanumeric</li>
                            <li>Allowed special characters: @-.</li>
                            <li>Must start with alpha character</li>
                            <li>Must match the confirmation field entry</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section class="clearfix" />
        </div>
    </body>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <!--<script src="js/entities.js"></script>-->
    <script src="js/main.js"></script>
</html>
