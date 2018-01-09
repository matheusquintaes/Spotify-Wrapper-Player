import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumsInfo from './AlbumInfo';

const albums = spotify.search.albums('Nirvana');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums
  .then(data => renderAlbums(data.albums.items, albumList));
album
  .then(data => renderAlbumsInfo(data, albumInfo));
