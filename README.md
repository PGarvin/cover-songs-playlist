# cover-songs-playlist
This project celebrates the first 100 cover songs posts on popcultureexperiment.com

## How to get the data ready
The data can come from a Google Sheet. Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

The data has columns for "Band, "Song," "Person," "Number," "Main," "Link," "Youtube," "Spotify," and "AppleMusic."

Each row is a song that was mentioned in a Cover Songs Uncovered post one Pop Culture Experiment:
https://popcultureexperiment.com

The items in the array contain the name of the song, the band, the link for the post, and associated links (Spotify, YouTube, Apple).

Because that data array is so big, it's in its own file: utils.js.

## How the code works
Because the array is so big, it's in its own file: utils.js. And thus the main.js file is where the playlists are made.

The main function at work here is createPlaylist. This function takes one argument: targetName. The targetName is the name of the person receiving this particular playlist.

There are two ways to trigger the createPlaylist function: loading the page or changing the selection of the dropdown.

When the page is loaded, the initial URL is logged and checked to see if there is a "#_" present. If so, that name is passed through the createPlaylist function, building a playlist for that person. Otherwise, the name given is "eachofyoufinefolks," functioning as a standalone for anyone who might happen upon this.

So the code cycles through the array of songs and if any song item includes the targetName in the Person field, the code makes a div for that song, including the links to the post, the YouTube link, the Spotify link, and the Apple link.

When the dropdown is changed, a new targetName is selected, and createPlaylist runs again, clearing out the divs and making new ones for the new targetName.