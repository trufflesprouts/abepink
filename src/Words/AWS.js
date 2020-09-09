import React from "react";
import Code from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import PostStyle from "./PostStyle";

const htmlstring1 = `<!-- Supports getUserMedia -->
<button id="take-photo" type="button" name="take-photo">
  Take Picture
</button>
<div class="camera-container">
  <video id="camera-stream"></video>
  <img id="snap">
  <canvas></canvas>
</div>

<!-- Does Not Support getUserMedia -->
<form method="post"enctype="multipart/form-data" action="/auth">
  <label for="auth-pic">Authenticate</label>
  <input
    id="auth-pic"
    type="file"
    style="display:none;"
    name="file"
    onchange="this.form.submit();"
  >
</form>`;

export default () => {
	return (
		<PostStyle>
			<h1 style={{ color: "#5f00ba" }}>
				Node User Login With AWS’ Face Recognition
			</h1>
			<p>
				So the other day I wanted to make a Node app just for practice, and I
				thought wouldn’t be cool if there’s a dead simple app that stores your
				secrets and can only be accessed by you? it should be absolutely
				seamless, like talking to a confidant, once it sees who you are it knows
				what to show. The app we will be building is a note taking app. There
				are no ‘accounts’, each time you start the the app it asks you to
				authenticate with your face, if it is your first time you’ll have a
				blank page where you can add notes, else if you already have notes
				previously added you’ll be able to see/edit them.
			</p>
			<p>
				To see the end result click{" "}
				<a href="https://morning-island-23195.herokuapp.com">here</a>.
			</p>
			<p>
				For the face recognition, I will use Amazon Rekognition, which is their
				deep learning-based image recognition API. I would also like to add that
				this idea is a complete disaster when it comes to security, since anyone
				with a picture of the user can access their notes 🤣, maybe it can be
				used as a second factor for authentication.
			</p>
			<p>Anyway, let’s get to it.</p>
			<hr />
			<h2>First, Getting That Sexy Image</h2>
			<p>
				Here we bump into the limitations of the web since not all browsers
				support accessing the device’s camera using{" "}
				<Code language="htmlbars" style={xcode} className="inline-code">
					navigator.getUserMedia
				</Code>{" "}
				(looking at you Safari), we will have to fall back to{" "}
				<Code language="htmlbars" style={xcode} className="inline-code">
					&lt;input type="file"&gt;
				</Code>
				.
			</p>
			<p>
				If the browser supports{" "}
				<Code language="htmlbars" style={xcode} className="inline-code">
					navigator.getUserMedia
				</Code>{" "}
				we will:
			</p>
			<ol>
				<li>Access the camera and get a video stream using getUserMedia.</li>
				<li>Play the stream on a video element.</li>
				<li>
					When the user takes the picture, we draw the current frame on a canvas
					element.
				</li>
				<li>
					Transform the canvas into an image dataURL then send it to the server.
				</li>
			</ol>

			<p>Else:</p>
			<ol>
				<li>Display an input of type file</li>
				<li>When the user submits the input, upload the file to the server.</li>
			</ol>

			<p>The HTML markup will look like this:</p>
			<Code language="htmlbars" style={xcode} showLineNumbers>
				{htmlstring1}
			</Code>
			<p>And the JS for accessing the camera will look like this:</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`if(!navigator.getUserMedia){
  // When not supported, switch to 'input type file'
  switchImageInput();
} else {
  // Request the camera.
  navigator.getMedia({video: true},
    // Success Callback
    function(stream){
      // Create an object URL for the video stream and
      // set it as src of our HTLM video element.
      video.src = window.URL.createObjectURL(stream);
      video.play();
      video.onplay = function() {
        showVideo();
      };
    },
    // Error Callback
    function(err){
      switchImageInput();
    }
  );
}`}
			</Code>
			<p>
				Now that we have a video stream, we will make a function that takes a
				snapshot of the video.
			</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`function takeSnapshot(){
  var hidden_canvas = document.querySelector('canvas'),
      context = hidden_canvas.getContext('2d');
  var width = video.videoWidth,
      height = video.videoHeight;
  if (width && height) {
    hidden_canvas.width = width;
    hidden_canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    return hidden_canvas.toDataURL('image/jpeg');
  }
}`}
			</Code>
			<p>
				Now we tie the function to our button, and send the image to the server.
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`take_photo_btn.addEventListener("click", function(event){
  event.preventDefault();
  var snap = takeSnapshot();
  sendImageToServer(snap);
  // Show image.
  image.setAttribute('src', snap);
  image.classList.add("visible");
  video.pause();
});

function sendImageToServer(imageData) {
  var method = 'post';
  var path = '/auth';
  var data = JSON.stringify({image: imageData});

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  var hiddenField = document.createElement("input");
  hiddenField.setAttribute("type", "hidden");
  hiddenField.setAttribute("name", "image");
  hiddenField.setAttribute("value", imageData);

  form.appendChild(hiddenField);

  document.body.appendChild(form);
  form.submit();
};`}
			</Code>
			<p>
				You can see the full{" "}
				<a href="https://github.com/trufflesprouts/secretly/blob/master/views/login.ejs">
					HTML
				</a>
				,{" "}
				<a href="https://github.com/trufflesprouts/secretly/blob/master/public/login.css">
					CSS
				</a>{" "}
				and{" "}
				<a href="https://github.com/trufflesprouts/secretly/blob/master/public/login.js">
					JS
				</a>
				.
			</p>

			<p>
				Now that the user POSTed their picture, we’ll need to handle that POST
				request in Node. I’m using{" "}
				<Code className="inline-code" style={xcode}>
					express
				</Code>{" "}
				with{" "}
				<Code className="inline-code" style={xcode}>
					multer
				</Code>{" "}
				to handle the file uploading from the form input.
			</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`const express = require('express');
const multer  = require('multer');
const bodyParser = require('body-parser');

const authController = require('./controllers/auth');

const app = express();

const upload = multer({
  dest: 'uploads/',
  fileFilter: function(req, file, cb) {
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: File upload only supports the following filetypes - " + filetypes);
  }
});

app.use(bodyParser.urlencoded({limit: '5mb'}));

app.post('/auth', upload.single('file'), authController.index);`}
			</Code>
			<p>Our authController:</p>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`const path = require('path');
const sharp = require('sharp');
const appDir = path.dirname(require.main.filename);

/**
 * POST /auth
 * Authentication Page.
 */

exports.index = (req, res) => {
  if (req.file) {
    const fileName = appDir + '/' + req.file.path;
    // Use sharp to resize the image
    sharp(fileName).resize(null, 700).toBuffer(function (err, buf) {
      // TODO: Authenticate using the image buffer
    });
  } else {
    const imageBuffer = getBase64Buffer(req.body.image);
    // TODO: Authenticate using the image buffer
  }
};

function getBase64Buffer(dataString) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}`}
			</Code>
			<p>
				After getting the image buffer, we will pass it to our authentication
				function.
			</p>

			<hr />

			<h2 id="second-user-authentication">Second, User Authentication</h2>

			<p>
				Since we are using AWS you’ll need to set up an AWS account and create
				an administrator user, for more info click{" "}
				<a href="http://docs.aws.amazon.com/rekognition/latest/dg/setting-up.html">
					here
				</a>
				.
			</p>

			<p>
				Then install the{" "}
				<a href="http://docs.aws.amazon.com/cli/latest/userguide/installing.html">
					AWS CLI
				</a>
				.
			</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ pip install --upgrade --user awscli`}
			</Code>
			<p>Configure it:</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ aws configure
# AWS Access Key ID: YOUR ACCESS ID
# AWS Secret Access Key:  YOUR SECRET KEY
# Default region name:  YOUR REGION
# Default output format: json`}
			</Code>
			<p>
				In order to use the Rekognition service to register our users and then
				look them up when trying to log in again, we’ll have to store their
				images somehow. Thankfully that won’t be necessary since AWS Rekognition
				offers a storage-based API, using the IndexFaces operation we can store
				the important facial information of our users without storing the actual
				image bytes.
			</p>

			<p>
				To do this we’ll first need to create a face collection, which is a
				container for persisting faces detected by the IndexFaces API. Using the
				AWS CLI provide a collection-id (string) which will use in the future to
				store our users’ facial information.
			</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ aws rekognition create-collection --collection-id "YOUR-COLLECTION-ID"`}
			</Code>
			<p>Make sure it was successfully created:</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ aws rekognition list-collections
#{
#    "CollectionIds": [
#        "YOUR-COLLECTION-ID"
#    ]
#}`}
			</Code>
			<p>Here’s how you delete a collection:</p>

			<Code language="bash" style={xcode} showLineNumbers>
				{`$ aws rekognition delete-collection --collection-id "YOUR-COLLECTION-ID"`}
			</Code>
			<p>
				Now that we have our collection we can use{" "}
				<Code className="inline-code" style={xcode}>
					indexFaces
				</Code>{" "}
				to add faces to the collection, and use{" "}
				<Code className="inline-code" style={xcode}>
					searchFacesByImage
				</Code>{" "}
				to search the collection for a face supplied by an image.
			</p>

			<p>
				First we need to configure AWS in our app, add a{" "}
				<Code className="inline-code" style={xcode}>
					aws-config.json
				</Code>{" "}
				file like this one:
			</p>

			<Code language="json" style={xcode} showLineNumbers>
				{`{
  "accessKeyId": "YOUR-ACCESS-KEY-ID",
  "secretAccessKey": "YOUR-SECRET-ACCESS-KEY",
  "region": "YOUR-REGION"
}`}
			</Code>
			<p>
				Then we’ll create a{" "}
				<Code className="inline-code" style={xcode}>
					faceAuth
				</Code>{" "}
				function that takes an image buffer and callback, which will call the
				callback indicating whether there’s a face in the image and if there is,
				return the data.
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`const AWS = require('aws-sdk');
const uuid = require('node-uuid');

AWS.config.loadFromPath(__dirname +'/aws-config.json');
const rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});


exports.faceAuth = function (imageBuffer, cb) {
  var params = {
    CollectionId: 'YOUR-COLLECTION-ID',
    Image: {
      Bytes: imageBuffer
    },
    FaceMatchThreshold: 90,
    MaxFaces: 1 // We only need the face with the most resemblance
  };
  rekognition.searchFacesByImage(params, function(err, data) {
    if (data && !err) {
      // If there's a face in the image
      cb(true, data, imageBuffer);
    } else {
      // If there's no face in the image
      cb(false, {});
    }
  });
}`}
			</Code>
			<p>
				Returning to the{" "}
				<Code className="inline-code" style={xcode}>
					authControlle
				</Code>{" "}
				we’ll use our{" "}
				<Code className="inline-code" style={xcode}>
					faceAuth
				</Code>{" "}
				function and proivde a callback:
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`const path = require('path');
const sharp = require('sharp');
const appDir = path.dirname(require.main.filename);

/**
 * POST /auth
 * Authentication Page.
 */

exports.index = (req, res) => {
+ const authCallback = function(faceFound, data, imageBuffer) {
+   if (faceFound) {
+     if (userExsits(data).status) {
+       renderUserPage(userExsits(data).userId, res);
+     } else {
+       createUser(imageBuffer, function(userId) {
+         renderUserPage(userId, res);
+       });
+     }
+   } else {
+     res.redirect('/error-no-face-found');
+   }
+ }

  if (req.file) {
    const fileName = appDir + '/' + req.file.path;
    sharp(fileName).resize(null, 700).toBuffer(function (err, buf) {
+     faceAuth(buf, authCallback);
    });
  } else {
    const imageBuffer = getBase64Buffer(req.body.image);
+   faceAuth(imageBuffer.data, authCallback);
  }
};`}
			</Code>
			<p>
				Above I used two functions{" "}
				<Code className="inline-code" style={xcode}>
					userExsits
				</Code>{" "}
				and{" "}
				<Code className="inline-code" style={xcode}>
					createUser
				</Code>
				, the former checks if AWS returned a{" "}
				<Code className="inline-code" style={xcode}>
					FaceMatches
				</Code>{" "}
				object, if it hasn’t that means this a new user and we have to index him
				in our collection. This is where{" "}
				<Code className="inline-code" style={xcode}>
					createUser
				</Code>{" "}
				comes in, it takes an image buffer and callback, it uses the{" "}
				<Code className="inline-code" style={xcode}>
					indexFaces
				</Code>{" "}
				operation to index the face to our collection and create a user in our
				database for storing notes, which I won’t be getting into here.
			</p>

			<Code language="javascript" style={xcode} showLineNumbers>
				{`const userExsits = function(data) {
  if (data.FaceMatches.length === 0) {
    return {
      status:false,
      userId:null
    };
  } else if (data.FaceMatches.length > 0) {
    return {
      status:true,
      userId:data.FaceMatches[0].Face.ExternalImageId
    };
  }
}

module.exports = userExsits;`}
			</Code>
			<Code language="javascript" style={xcode} showLineNumbers>
				{`exports.createUser = function(imageBuffer, cb) {
  const newUserId = uuid.v4();

  // Add user to the database with newUserId.

  ...

  // Index the user's face with their unique ID,
  // which is the same for database

  const params = {
    CollectionId: "secretsUsers",
    DetectionAttributes: [
    ],
    ExternalImageId: newUserId,
    Image: {
     Bytes: imageBuffer
    }
   };

  rekognition.indexFaces(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      cb(newUserId);
    }
  });
}`}
			</Code>
			<p>
				Now that we the user ID we can query the database for their data and
				render it. I skipped the database and user data management part because
				it is pretty straight forward. Just create a database (firebase if
				you’re lazy), and create a user with the same ID as the{" "}
				<Code className="inline-code" style={xcode}>
					ExternalImageId
				</Code>{" "}
				in your Rekognition collection. When the user comes back again, request
				the data using the{" "}
				<Code className="inline-code" style={xcode}>
					ExternalImageId
				</Code>
				.
			</p>
		</PostStyle>
	);
};
