'use strict';

//The array of songs is quite large, so it's broken into another file: utils.js so that if anyone needs to update utils.js or main.js, they can do so without throwing off the other file.
(function() {

  document.addEventListener('DOMContentLoaded', function() {

    var personNames = [];
    var targetDiv = document.getElementById('pce100');

    var initURL = document.URL;
    var pmgURL = initURL.split("#_");

    var target = pmgURL[1];

    var instancesOfTarget = 0;

    var dropdown = document.getElementById('dropdown');

    var nameText, socialHolder, Facebook, FacebookImg, Twitter, TwitterImg, TwitterURL;


    if (target === undefined) {
      target = "eachofyoufinefolks";
    }

    target = target.toLowerCase();

    //This populates a playlist based on which name is in the URL or in the dropdown.
    function createPlaylist(targetName) {

      //Whatever name in that div is cleared out.
      targetDiv.innerHTML = "";

      //What ever name is passed through the argument is converted to lowercase, in case the name at the end of the URL is typed in a weird way: pAtriCk GaRvIn, etc.
      targetName = targetName.toLowerCase();

      //This sorts the setlists array by the "Number." This number refers to which song this was in the series. Our first song — "Tears Of A Clown" — will be 1 under "Number." The 100th post, "Thank You For Being A Friend," will be 100 under "Number."
      setlists.sort(function(a, b) {

        var aConcat = Number(a["Number"]);
        var bConcat = Number(b["Number"]);

        if (aConcat > bConcat) {
          return 1;
        } else if (aConcat < bConcat) {
          return -1;
        } else {
          return 0;
        }
      });

      for (var i in setlists) {


        //For each song in the list, there might be multiple names in the Person field. We separate those by splitting with a ", ".
        var names = setlists[i].Person.split(", ");

        //The Javascript then checks to see if the name is a proper match with what's in the array.
        for (var j in names) {
          var match = names[j];
          var matchName = "" + names[j] + ""
          match = match.split(" ").join("").split(".").join("").split("-").join("");
          match = match.toLowerCase();

          if (personNames.indexOf(matchName) < 0) {
            if (matchName !== "XXXXXXX" && matchName !== "" && matchName !== "each of you fine folks") {
              personNames.push(matchName);
            }

          }

          //The JavaScript then creates divs of the songs based picked for that person.
          if (targetName === match) {
            var holder, songinfo, bandName, bandNameText, songName, songNameText, songLink, songLinkDiv, songLinkDivText, audioLinks;
            instancesOfTarget++;
            document.getElementById('name').innerHTML = '';

            document.getElementById('name').innerHTML = 'Cover songs picked especially for ' + matchName + ' to <a href="https://popcultureexperiment.com/2018/04/02/thank-you-for-being-a-friend-cover-songs-uncovered/" target="_blank">thank you for being a friend</a> and thank you for supporting the <a href="https://popcultureexperiment.com/cover-songs-uncovered/" target="_blank">first 100 Cover Songs Uncovered</a> posts';

            //This makes the holder.
            holder = document.createElement('div');
            holder.classList.add('holder');
            holder.classList.add('clearboth');
            targetDiv.appendChild(holder);

            //This makes the elements with the band name.
            songinfo = document.createElement('div');
            songinfo.setAttribute('class', 'songinfo');
            holder.appendChild(songinfo);
            bandName = document.createElement('div');
            bandName.setAttribute('class', 'bandname');
            bandNameText = document.createTextNode(setlists[i].Band);
            bandName.appendChild(bandNameText);
            songinfo.appendChild(bandName)

            //This makes the elements with the song name.	
            songName = document.createElement('div');
            songName.setAttribute('class', 'songname');
            songNameText = document.createTextNode(setlists[i].Song);
            songName.appendChild(songNameText);
            songinfo.appendChild(songName);

            //This makes the elements with the link to the post.	
            songLink = document.createElement('a');
            songLink.href = setlists[i].Link;
            songLink.setAttribute('target', '_blank');
            songLinkDiv = document.createElement('div');
            songLinkDiv.setAttribute('class', 'visitPost');
            songLinkDivText = document.createTextNode('VIEW POST');
            songLinkDiv.appendChild(songLinkDivText);
            songLink.appendChild(songLinkDiv);
            songinfo.appendChild(songLink);

            //This makes the div for the audio links.
            audioLinks = document.createElement('div');
            audioLinks.setAttribute('class', 'audiolinks');
            holder.appendChild(audioLinks);

            //If the song has a YouTube link, this creates a div for the link with an image of the YouTube logo.	
            if (setlists[i].Youtube !== "" && setlists[i].Youtube !== 0) {
              var Youtube, YoutubeImg;

              Youtube = document.createElement('a');
              Youtube.href = setlists[i].Youtube;
              Youtube.setAttribute("target", "_blank");

              YoutubeImg = document.createElement("img");
              YoutubeImg.src = "http://patrickgarvin.com/images/youtubelogo.jpg"
              YoutubeImg.setAttribute('class', 'buttons');

              Youtube.appendChild(YoutubeImg);
              audioLinks.appendChild(Youtube);

            }

            //If the song has a Spotify link, this creates a div for the link with an image of the Spotify logo.

            if (setlists[i].Spotify !== "" && setlists[i].Spotify !== 0) {
              var Spotify, SpotifyImg;

              Spotify = document.createElement('a');
              Spotify.href = setlists[i].Spotify;
              Spotify.setAttribute("target", "_blank");

              SpotifyImg = document.createElement("img");
              SpotifyImg.src = "http://patrickgarvin.com/images/spotify.png"
              SpotifyImg.setAttribute('class', 'buttons');

              Spotify.appendChild(SpotifyImg);
              audioLinks.appendChild(Spotify);

            }

            //If the song has an Apple link, this creates a div for the link with an image of the Apple logo.
            if (setlists[i].AppleMusic !== "" && setlists[i].AppleMusic !== 0) {
              var appleMusic, appleMusicImg;

              appleMusic = document.createElement('a');
              appleMusic.href = setlists[i].AppleMusic;
              appleMusic.setAttribute("target", "_blank");

              appleMusicImg = document.createElement("img");
              appleMusicImg.src = "http://patrickgarvin.com/images/appleMusic.png"
              appleMusicImg.setAttribute('class', 'buttons');

              appleMusic.appendChild(appleMusicImg);
              audioLinks.appendChild(appleMusic);

            }



          }
        }
      }

      socialHolder = document.createElement('div');
      socialHolder.setAttribute('class', 'socialHolder');
      targetDiv.appendChild(socialHolder);

      Facebook = document.createElement('a');
      Facebook.href = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fpatrickgarvin.com%2Fcsu100%2F%23_' + targetName + '&amp;src=sdkpreparse'
      Facebook.setAttribute("target", "_blank");
      FacebookImg = document.createElement("img");
      FacebookImg.src = "http://patrickgarvin.com/images/facebook.jpg"
      FacebookImg.setAttribute('class', 'buttons');
      Facebook.appendChild(FacebookImg);
      socialHolder.appendChild(Facebook);
      FacebookImg.style.margin = "20px";


      TwitterURL = "%23_" + targetName
      Twitter = document.createElement('a');
      Twitter.href = 'http://twitter.com/share?text=To mark 100 Cover Songs Uncovered posts, @popexperiment made a special best-of playlist http://patrickgarvin.com/csu100/' + TwitterURL;
      Twitter.setAttribute("target", "_blank");
      TwitterImg = document.createElement("img");
      TwitterImg.src = "http://patrickgarvin.com/images/twitter.jpg"
      TwitterImg.setAttribute('class', 'buttons');
      Twitter.appendChild(TwitterImg);
      socialHolder.appendChild(Twitter);
      TwitterImg.style.margin = "20px";

    }



    createPlaylist(target);

    //console.log("instancesOfTarget is "+instancesOfTarget);



    personNames.sort(function(a, b) {

      var aConcat = a;
      var bConcat = b;

      if (aConcat > bConcat) {
        return 1;
      } else if (aConcat < bConcat) {
        return -1;
      } else {
        return 0;
      }
    });


    for (var k = 0; k < personNames.length; k++) {
      var optionItem = document.createElement('option');
      optionItem.value = personNames[k].split(" ").join("").split(".").join("").split("-").join("").toLowerCase();
      optionItem.text = personNames[k];
      dropdown.appendChild(optionItem);
    }

    dropdown.value = target;

    dropdown.addEventListener('change', function() {
      window.location.replace(pmgURL[0] + "#_" + dropdown.value);
      createPlaylist(dropdown.value);
    });

    if (instancesOfTarget === 0) {

      target = "eachofyoufinefolks";
      createPlaylist("eachofyoufinefolks");

      dropdown.value = target;


    }

  });


})();