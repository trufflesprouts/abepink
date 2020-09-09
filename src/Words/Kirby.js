import React from "react";
import Code from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PostStyle from "./PostStyle";

export default () => {
	return (
		<PostStyle>
			<h1 style={{ color: "#cca000" }}>The Perfect Kirby Development Setup</h1>

			<p>
				If you already know what Kirby is, <a href="#setup">click</a> here to
				skip the introduction.
			</p>

			<p>
				If you plan on building websites for clients, chances are they will ask
				for a way to add/administer content, i.e., a content management system.
				Problem is, most CMSs are just plain terrible for either the developer
				or the client, most times they give clients either too much freedom to
				screwup everything (Wordpress), or they don’t give enough (Siteleaf,
				Cloudcannon).
			</p>

			<p>
				<a href="https://getkirby.com/">Kirby</a> to the rescue!, it is similar
				to Jekyll (what I’m using for this lovely blog) in that it is a static
				site generator and does not require a database, it is also super
				developer friendly and gives you full control without making a lot of
				assumptions and forcing you to deal with them.
			</p>

			<p>
				The best part about Kirby is that it takes all the developer
				friendliness from Jekyll and adds a simple CMS on top of it. Put it
				simply, it has the best CMS, you can easily give just the right amount
				of control to the client, its “Panel” is logical, straightforward and
				does not have much of a learning curve.
			</p>

			<p>
				Learn more about Kirby <a href="https://getkirby.com/">here</a>.
			</p>

			<p>
				<a name="setup"></a>
				In this guide we will use Gulp to serve our Kirby site locally, use
				SASS, autoprefixer, uglifycss, and deploy the site to Heroku.
			</p>

			<hr></hr>

			<h2 id="1-serving-kirby-locally">1. Serving Kirby Locally</h2>

			<p>
				In order to start developing you’ll need to serve the site locally using
				a PHP server. Most people use MAMP (even in the docs), which I think is
				too big and bloaty since you won’t be needing a MySQL database with
				Kirby.
			</p>

			<p>
				What I use instead is{" "}
				<Code className="inline-code" style={xcode}>
					gulp-connect-php
				</Code>{" "}
				with Gulp (obviously). This means we’ll need to setup Gulp first. To
				setup Gulp, we’ll need Node and NPM if you don’t have that already
				download it <a href="https://nodejs.org/en/">here</a>.
			</p>

			<p>
				Now that you have Node and NPM, initiate NPM in your project folder from
				the terminal:
			</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ cd path/to/project
$ npm init`}
			</Code>
			<p>
				Fill in the package details when asked, or you can just press enter
				since it is not really that important. Then, install Gulp globally with
				NPM:
			</p>
			<Code language="bash" style={xcode} showLineNumbers>
				{`$ npm install gulp-cli -g`}
			</Code>
			<p>And locally:</p>
			<Code language="bash" style={xcode} showLineNumbers>
				{`$ npm install gulp`}
			</Code>
			<p>
				Then, install{" "}
				<Code className="inline-code" style={xcode}>
					gulp-connect-php
				</Code>
				:
			</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ npm install gulp-connect-php`}
			</Code>
			<p>Make a gulp configuration file:</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ touch gulpfile.js`}
			</Code>
			<p>
				We’ll need to configure Gulp to serve PHP using{" "}
				<Code className="inline-code" style={xcode}>
					gulp-connect-php
				</Code>
				, in{" "}
				<Code className="inline-code" style={xcode}>
					gulpfile.js
				</Code>
				:
			</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`// First, include gulp and gulp-connect-php
var gulp          = require('gulp');
    connect       = require('gulp-connect-php'),

// Second, create a task to start a PHP server
gulp.task('serve', function() {
  connect.server();
});

// Third, set the 'serve' task to be the default task
gulp.task('default', ['serve']);s`}
			</Code>
			<p>
				Now, in your project directory just use{" "}
				<Code className="inline-code" style={xcode}>
					gulp
				</Code>
				, it will automatically use our default task:
			</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ gulp
#[00:00:00] Using gulpfile ~/path/to/project/gulpfile.js
#[00:00:00] Starting 'serve'...
#[00:00:00] Finished 'serve' after 7.82 ms
#[00:00:00] Starting 'default'...
#[00:00:00] Finished 'default' after 103 μs
#PHP 5.6.30 Development Server started at date, time
#Listening on http://127.0.0.1:8000
#Press Ctrl-C to quit.`}
			</Code>
			<p>
				Go to <a href="http://127.0.0.1:8000">127.0.0.1:8000</a> and voilà!,
				site served.
			</p>
			<hr />
			<h2 id="2-using-sass-and-compiling-css">
				2. Using SASS and Compiling CSS
			</h2>

			<p>
				If you’re working on any reasonably sized project, you’ll want to use
				SASS instead of CSS, otherwise, you’ll keep repeating yourself and end
				up with large CSS files that are hard to change.
			</p>

			<p>
				The way Kirby deals with CSS is that you have all your styles in{" "}
				<Code className="inline-code" style={xcode}>
					assets/css/templates/
				</Code>{" "}
				for each template you have a CSS file name after the template, e.g. for
				a template named{" "}
				<Code className="inline-code" style={xcode}>
					post
				</Code>{" "}
				you need a file{" "}
				<Code className="inline-code" style={xcode}>
					assets/css/templates/post.css
				</Code>{" "}
				and you load this file by using{" "}
				<Code className="inline-code" style={xcode}>
					&lt;?php echo css('@auto') ?&gt;
				</Code>{" "}
				in your template.
			</p>

			<p>
				To use SASS, we need to mirror the CSS file structure, so make a folder
				next to{" "}
				<Code className="inline-code" style={xcode}>
					assets/css/
				</Code>{" "}
				named{" "}
				<Code className="inline-code" style={xcode}>
					sass
				</Code>{" "}
				and make a folder named{" "}
				<Code className="inline-code" style={xcode}>
					templates
				</Code>{" "}
				inside the{" "}
				<Code className="inline-code" style={xcode}>
					sass
				</Code>{" "}
				folder. Now we have:
			</p>

			<Code language="plaintext" style={xcode} showLineNumbers>
				{`
                Project
|-- assets
|   |-- css
|   |   --- templates
|   |       |-- home.css
|   |       |-- post.css
|   |       --- ...
|   |-- sass
|   |   --- templates
|   |       |-- home.scss
|   |       |-- post.scss
|   |       --- ...
|   --- ...
|-- index.php
|-- gulpfile.js
--- ...`}
			</Code>
			<p>
				Next up, we need to compile{" "}
				<Code className="inline-code" style={xcode}>
					.scss
				</Code>{" "}
				files inside the{" "}
				<Code className="inline-code" style={xcode}>
					sass
				</Code>{" "}
				folder automatically while also keeping the same file structure because
				Kirby relies on that structure to autoload styles.
			</p>

			<p>Since we are already using Gulp, we’ll setup SASS with Gulp:</p>
			<Code language="bash" style={xcode} showLineNumbers>
				{`$ npm install gulp-sass`}
			</Code>
			<p>
				In{" "}
				<Code className="inline-code" style={xcode}>
					gulpfile.js
				</Code>
				, require{" "}
				<Code className="inline-code" style={xcode}>
					gulp-sass
				</Code>{" "}
				and watch/compile{" "}
				<Code className="inline-code" style={xcode}>
					.scss
				</Code>{" "}
				files:
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`var gulp          = require('gulp');
    connect       = require('gulp-connect-php'),
+   sass          = require('gulp-sass'); // Require gulp-sass

gulp.task('serve', function() {
    connect.server();
    // Watch .scss files
+   gulp.watch("assets/sass/**/*.scss", ['sass']);
});

// A task that compiles sass to css
+ gulp.task('sass', function() {
+     return gulp.src("assets/sass/**/*.scss")
+         .pipe(sass())
+         // Put compiled files in "assets/css"
+         .pipe(gulp.dest("assets/css"));
+ });

gulp.task('default', ['serve']);`}
			</Code>
			<p>To make sure everything works:</p>

			<ol>
				<li>
					Move any{" "}
					<Code className="inline-code" style={xcode}>
						.css
					</Code>{" "}
					file to{" "}
					<Code className="inline-code" style={xcode}>
						assets/sass
					</Code>{" "}
					and change its type to{" "}
					<Code className="inline-code" style={xcode}>
						.scss
					</Code>
				</li>
				<li>
					Run{" "}
					<Code className="inline-code" style={xcode}>
						gulp
					</Code>
				</li>
				<li>
					In your text editor make a small change to any{" "}
					<Code className="inline-code" style={xcode}>
						.scss
					</Code>{" "}
					file and save to trigger a build, otherwise Gulp won’t build your SASS
					files
				</li>
				<li>
					Go to <a href="http://127.0.0.1:8000">127.0.0.1:8000</a> and make sure
					everything works as before
				</li>
			</ol>

			<p>
				If everything goes according to plan, Gulp will compile SASS and mirror{" "}
				<Code className="inline-code" style={xcode}>
					assets/sass
				</Code>{" "}
				to{" "}
				<Code className="inline-code" style={xcode}>
					assets/css
				</Code>
				.
			</p>

			<p>
				Now that we setup our styles with Gulp, we can use all the wonderful
				plugins it has to offer. For example, I use{" "}
				<Code className="inline-code" style={xcode}>
					autoprefixer
				</Code>{" "}
				to automatically prefix CSS and take care of some browser compatibly
				issues. I also use{" "}
				<Code className="inline-code" style={xcode}>
					uglifycss
				</Code>{" "}
				to minify CSS.
			</p>

			<p>Install plugins:</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{"$ npm install gulp-autoprefixer gulp-uglifycss"}
			</Code>
			<p>
				In{" "}
				<Code className="inline-code" style={xcode}>
					gulpfile.js
				</Code>
				:
			</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`var gulp          = require('gulp');
    connect       = require('gulp-connect-php'),
    sass          = require('gulp-sass');
+   autoprefixer  = require('gulp-autoprefixer'); // Require autoprefixer
+   uglifycss     = require('gulp-uglifycss'); // Require uglifycss

...

gulp.task('sass', function() {
    return gulp.src("assets/sass/**/*.scss")
        .pipe(sass())
+       .pipe(autoprefixer()) // Use autoprefixer
+       .pipe(uglifycss()) // Use uglifycss
        .pipe(gulp.dest("assets/css"));
});

...`}
			</Code>
			<p>Okay, that’s it with CSS.</p>
			<hr />
			<h2 id="3-auto-refresh-the-browser">3. Auto Refresh the Browser</h2>

			<p>
				To speed up the development process we’ll use{" "}
				<Code className="inline-code" style={xcode}>
					browser-sync
				</Code>{" "}
				to sync, auto reload and auto inject styles. So, you won’t need to
				reload the page again every time and you’ll see your changes
				immediately.
			</p>

			<p>
				Install{" "}
				<Code className="inline-code" style={xcode}>
					browser-sync
				</Code>
				:
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`$ npm install browser-sync`}
			</Code>
			<p>
				In{" "}
				<Code className="inline-code" style={xcode}>
					gulpfile.js
				</Code>
				:
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`var gulp          = require('gulp');
    connect       = require('gulp-connect-php'),
+   browserSync   = require('browser-sync'); // Require browser-sync
    sass          = require('gulp-sass');
    autoprefixer  = require('gulp-autoprefixer');
    uglifycss     = require('gulp-uglifycss');

gulp.task('serve', function() {
    // Initiate browserSync
+   connect.server({}, function (){
+       browserSync({
+           proxy: '127.0.0.1:8000'
+       });
+   });

    gulp.watch("assets/sass/**/*.scss", ['sass']);

    // Watch for changes in PHP files and reload the browser
+   gulp.watch('**/*.php').on('change', function () {
+       browserSync.reload();
+   });
});

gulp.task('sass', function() {
    return gulp.src("assets/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifycss())
        .pipe(gulp.dest("assets/css"))
        // Inject css when changes occur
+       .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);`}
			</Code>
			<p>
				Now any time you make a change to a{" "}
				<Code className="inline-code" style={xcode}>
					.php
				</Code>{" "}
				or{" "}
				<Code className="inline-code" style={xcode}>
					.scss
				</Code>{" "}
				file the browser will auto reload.
			</p>
			<hr />
			<h2 id="4-showing-your-work-to-others">4. Showing Your Work to Others</h2>

			<p>
				Now that you’re proud of what you’ve accomplished, you want to showcase
				your work to others but you don’t have a PHP server laying around and
				you can’t use GitHub Pages or other free static hosting services because
				Kirby does not generate static files (sad!). You could use{" "}
				<Code className="inline-code" style={xcode}>
					ngrok
				</Code>{" "}
				while your computer is online which isn’t ideal unless you don’t turn
				off your computer.
			</p>

			<p>
				Heroku to the rescue! it is an amazing platform as a service which
				supports all popular languages out of the box, and it has a free tier.
			</p>

			<p>Note: because of Heroku permissions, the panel will not work.</p>

			<p>
				First,{" "}
				<a href="https://signup.heroku.com/php?c=70130000001xncDAAQ">Sign up</a>{" "}
				for a free Heroku account.
			</p>

			<p>
				Then,{" "}
				<a href="https://devcenter.heroku.com/articles/getting-started-with-php#set-up">
					download
				</a>{" "}
				the Heroku CLI and log in from the terminal:
			</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ heroku login
#Enter your Heroku credentials.
#Email: your@email.com
#Password:`}
			</Code>
			<p>Initiate a git repository if you don’t already have one:</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ git init`}
			</Code>
			<p>
				Commit all your code to git, don’t forget to add{" "}
				<Code className="inline-code" style={xcode}>
					node_modules
				</Code>{" "}
				to your{" "}
				<Code className="inline-code" style={xcode}>
					.gitignore
				</Code>
				.
			</p>

			<p>Create an app on Heroku:</p>
			<Code language="bash" style={xcode} showLineNumbers>
				{`$ heroku create PROJECT-NAME
#Creating ⬢ PROJECT-NAME... done
#https://PROJECT-NAME.herokuapp.com/ | https://git.heroku.com/PROJECT-NAME.git`}
			</Code>
			<p>Push your code to Heroku:</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ git push heroku master`}
			</Code>
			<p>
				Heroku will auto detect PHP and will serve your website. Go to the url
				that you got when you created the app, if you can’t find it, go to your{" "}
				<a href="dashboard.heroku.com/apps">Heroku dashboard</a>, click on the
				app name, on the top right corner click{" "}
				<Code className="inline-code" style={xcode}>
					Open app
				</Code>
				.
			</p>

			<p>That’s it!</p>
		</PostStyle>
	);
};

{
	/* <Code className="inline-code" style={xcode}>
					ExternalImageId
				</Code> */
}
