<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>yt-dlp Command Generator</title>
	<link rel="icon" href="src/youtube.svg" type="image/svg+xml">
	<style>
		body
		{
			font-family: 'Segoe UI', Verdana, Arial, Helvetica, sans-serif;
			line-height: 26px;
		}
		.container
		{
			width: 960px;
			margin: auto;
			margin-top: 20px;
		}
		textarea, input[type=url]
		{
			border: 1px solid #d9d9d9;
			font-size: 20px;
			padding: 9px;
		}
		textarea:focus, input[type=url]:focus
		{
			border-color: rgba( 82, 168, 236, 0.8 );
			box-shadow: 0 0 6px rgba( 102, 175, 233, .6 );
			outline: 0;
		}
	</style>
</head>
<body>

	<div class="container">

		<textarea class="finalCommand" cols="80" rows="5"></textarea><br>
		<button onclick="makeCommand()">Generate</button>
		<button onclick="copyToClipboard()">Copy</button><br><br>

		<div class="options">

			<h3>Video Link</h3>

			<input type="url" class="videoLink" size="80" placeholder="Enter video link">
			<button onclick="pasteMe()">Paste</button>
			<br><br>

		</div><!-- .option -->

	</div><!-- .container -->

</body>
</html>
