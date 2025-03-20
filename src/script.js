'use strict';

// Add target="_blank" to all anchor tags, v 2.1
for ( let x of document.links ) x.setAttribute( 'target', '_blank' );

function qs( cls )
{
	return document.querySelector( cls );
}

function makeCommand()
{
	let cmnd = 'yt-dlp ';

	// Get update status
	if ( qs( '#updateType' ).value === 'Release' )
	{
		cmnd += '-U';

		// Set command
		qs( '.finalCommand' ).value = cmnd;
		qs( '.finalCommand' ).focus();
		return;
	}
	else if ( qs( '#updateType' ).value === 'Specific' )
	{
		cmnd += '--update-to';

		if ( qs( '#updateChannel' ).value === 'none' )
		{
			if ( qs( '.updateTag' ).value !== '' )
			{
				cmnd += ' ' + qs( '.updateTag' ).value;
			}
			else
			{
				alert( 'Please specify at least a channel or a tag.' );
				qs( '.updateTag' ).focus();
				return;
			}
		}
		else if ( qs( '#updateChannel' ).value === 'stable' )
		{
			cmnd += ' stable';
			if ( qs( '.updateTag' ).value !== '' )
			{
				cmnd += '@' + qs( '.updateTag' ).value;
			}
		}
		else
		{
			cmnd += ' ' + qs( '#updateChannel' ).value;
		}

		// Set command
		qs( '.finalCommand' ).value = cmnd;
		qs( '.finalCommand' ).focus();
		return;
	}
	else if ( qs( '#updateType' ).value === 'Repository' )
	{
		cmnd += '--update-to';

		if ( qs( '.updateRepo' ).value !== '' )
		{
			cmnd += ' ' + qs( '.updateRepo' ).value;

			if ( qs( '.updateTag' ).value !== '' )
			{
				cmnd += '@' + qs( '.updateTag' ).value;
			}
		}
		else
		{
			alert( 'Please specify a repository.' );
			qs( '.updateRepo' ).focus();
			return;
		}

		// Set command
		qs( '.finalCommand' ).value = cmnd;
		qs( '.finalCommand' ).focus();
		return;
	}

	// Get help status
	if ( qs( '.generalHelp' ).checked === true )
	{
		cmnd += ' --help';

		// Set command
		qs( '.finalCommand' ).value = cmnd;
		qs( '.finalCommand' ).focus();
		return;
	}

	// Get version status
	if ( qs( '.generalVersion' ).checked === true )
	{
		cmnd += ' --version';

		// Set command
		qs( '.finalCommand' ).value = cmnd;
		qs( '.finalCommand' ).focus();
		return;
	}

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

	// Get ignore error status
	if ( qs( '.generalIgnoreErrors' ).checked === true )
	{
		cmnd += ' --ignore-errors';
	}

	// Get skip download status
	if ( qs( '.skipDownload' ).checked === true )
	{
		cmnd += ' --skip-download';
	}

	// Get subtitle type
	if ( qs( '#subtitleType' ).value === 'Normal' )
	{
		cmnd += ' --write-subs';
	}
	else if ( qs( '#subtitleType' ).value === 'Auto' )
	{
		cmnd += ' --write-auto-subs';
	}

	// Set command
	qs( '.finalCommand' ).value = cmnd;
	qs( '.finalCommand' ).focus();
}

function copyToClipboard()
{
	navigator.clipboard.writeText( qs( '.finalCommand' ).value );
}

async function pasteMe()
{
	qs( '.videoLink' ).value = await navigator.clipboard.readText();
	qs( '.videoLink' ).focus();
}

function updateFunc( val )
{
	if ( val === 'none' )
	{
		// Disable all 3
		qs( '#updateChannel' ).setAttribute( 'disabled', '' );
		qs( '.updateTag' ).setAttribute( 'disabled', '' );
		qs( '.updateRepo' ).setAttribute( 'disabled', '' );
	}
	else if ( val === 'Release' )
	{
		// Disable all 3
		qs( '#updateChannel' ).setAttribute( 'disabled', '' );
		qs( '.updateTag' ).setAttribute( 'disabled', '' );
		qs( '.updateRepo' ).setAttribute( 'disabled', '' );
	}
	else if ( val === 'Specific' )
	{
		// Disable 3, enable 1, conditional 2
		qs( '#updateChannel' ).removeAttribute( 'disabled' );
		if ( qs( '#updateChannel' ).value === 'none' || qs( '#updateChannel' ).value === 'stable' )
		{
			qs( '.updateTag' ).removeAttribute( 'disabled' );
		}
		else
		{
			qs( '.updateTag' ).setAttribute( 'disabled', '' );
		}
		qs( '.updateRepo' ).setAttribute( 'disabled', '' );
	}
	else if ( val === 'Repository' )
	{
		// Disable 1,2, enable 3
		qs( '#updateChannel' ).setAttribute( 'disabled', '' );
		qs( '.updateTag' ).removeAttribute( 'disabled' );
		qs( '.updateRepo' ).removeAttribute( 'disabled' );
	}
} // updateFunc() ends

function updateChannelFunc( val )
{
	// console.log( val );
	if ( val === 'none' )
	{
		qs( '.updateTag' ).removeAttribute( 'disabled' );
	}
	else if ( val === 'stable' )
	{
		qs( '.updateTag' ).removeAttribute( 'disabled' );
	}
	else if ( val === 'nightly' )
	{
		qs( '.updateTag' ).setAttribute( 'disabled', '' );
	}
	else if ( val === 'master' )
	{
		qs( '.updateTag' ).setAttribute( 'disabled', '' );
	}
} // updateChannelFunc() ends
