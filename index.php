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

			<label for="skipDownload">
				<input type="checkbox" class="skipDownload" id="skipDownload" checked> Skip Download
			</label><br>

			<h3>Subtitle Type</h3>

			<label for="subTypeNormal">
				<input type="radio" id="subTypeNormal" name="subtitleType" value="Normal"> Normal
			</label><br>

			<label for="subTypeAuto">
				<input type="radio" id="subTypeAuto" name="subtitleType" value="Auto" checked> Auto
			</label><br>

		</div><!-- .option -->

	</div><!-- .container -->

<script>

	function qs( cls )
	{
		return document.querySelector( cls );
	}

	function makeCommand()
	{
		let cmnd = 'yt-dlp ';

		// Get link
		if ( qs( '.videoLink' ).value === '' )
		{
			alert( 'Please enter a video URL.' );
			qs( '.videoLink' ).focus();
			return;
		}
		else
		{
			cmnd += qs( '.videoLink' ).value;
		}

		// Get skip download status
		if ( qs( '.skipDownload' ).checked === true )
		{
			cmnd += ' --skip-download';
		}

		// Get subtitle type
		if ( qs( 'input[name="subtitleType"]:checked' ).value === 'Normal' )
		{
			cmnd += ' --write-subs';
		}
		else
		{
			cmnd += ' --write-auto-subs';
		}

		// Set command
		qs( '.finalCommand' ).value = cmnd;
	}

	function copyToClipboard()
	{
		navigator.clipboard.writeText( qs( '.finalCommand' ).value );
	}

	async function pasteMe()
	{
		qs( '.videoLink' ).value = await navigator.clipboard.readText();
	}

</script>
</body>
</html>
