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
	</style>
</head>
<body>

	<div class="container">

		<textarea class="finalCommand" cols="80" rows="5"></textarea><br>
		<button onclick="makeCommand()">Generate</button>
		<button onclick="copyToClipboard()">Copy</button><br><br>

		<div class="options">


		</div><!-- .option -->

	</div><!-- .container -->

</body>
</html>
