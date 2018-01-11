var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumSalvador = {
     title: 'The Tall Elephants',
     artist: 'Salvador Dali',
     label: 'Surrealism',
     year: '1946',
     albumArtUrl: 'assets/images/album_covers/09.png',
     songs: [
         { title: 'Intro', duration: '0:12' },
         { title: 'One', duration: '1:00' },
         { title: 'Two Three', duration: '2:03' },
         { title: 'Three', duration: '3:00'},
         { title: 'Two One', duration: '2:01' },
         { title: 'Emcees on the Mic', duration: '3:33'},
         { title: 'DJ\'s on the Drums', duration: '5:45'},
         { title: 'Outro', duration: '12:00'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
   var template =
    '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

      var $row = $(template);

      var clickHandler = function() {
        var songNumber = $(this).attr('data-song-number');

        if (currentlyPlayingSong !== null) {
      		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
      		currentlyPlayingCell.html(currentlyPlayingSong);
      	}
      	if (currentlyPlayingSong !== songNumber) {
      		// Switch from Play -> Pause button to indicate new song is playing.
      		$(this).html(pauseButtonTemplate);
      		currentlyPlayingSong = songNumber;
      	} else if (currentlyPlayingSong === songNumber) {
      		// Switch from Pause -> Play button to pause currently playing song.
      		$(this).html(playButtonTemplate);
      		currentlyPlayingSong = null;
      	}
      };

      var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
      };

      var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
               var songNumber = songNumberCell.attr('data-song-number');

               if (songNumber !== currentlyPlayingSong) {
                   songNumberCell.html(songNumber);
               }
      };

      $row.find('.song-item-number').click(clickHandler);
      $row.hover(onHover, offHover);
      return $row;

 };

 // Accessible Objects - placed in global scope
 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


 var setCurrentAlbum = function(album) {
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

     // #3
     albumSongList.innerHTML = '';

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing song
var currentlyPlayingSong = null;

$(document).ready(function() {
    setCurrentAlbum(albumPicasso);

});
