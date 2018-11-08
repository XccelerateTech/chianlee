describe('Song', function() {
  var fng = require('../helpers/jasmine_examples/AlbumHelper');
	var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;


  beforeEach(function() {
  	song = new Song('Love Song', 'Destiny Album', 'Michael Jackson');
    this.song1 = new Song('same song', 'same album', 'same author');
    this.song2 = new Song('same song', 'same album', 'same author');
  });

  it('should return correct name', function() {
  	expect(song.name).toBe('Love Song');
  });

  it('should return correct album', function() {
  	expect(song.album).toBe('Destiny Album');
  });

  it('should return correct author', function() {
  	expect(song.author).toBe('Michael Jackson');
  });

  it('should generate correct description', function() {
  	expect(song.getDescription()).toBe('The name of this song is Love Song and it is from the album Destiny Album. It is written by Michael Jackson');
  });

  it('should check if two album is the same', function() {
    var song2 = new Song('Cry Song', 'Destiny Album', 'Michael Jackson');
    expect(song.isInSameAlbum(song2)).toBe(true);
  });

  it('should return false because it is not the same object', function() {
    expect(this.song1).not.toBe(this.song2);
  });

  it('should return true because it has the same information', function() {
    expect(this.song1).toEqual(this.song2);
  });

  it('should return true because two songs are in the same album', function() {
    expect(this.song1).toBeInTheSameAlbumAs(this.song2);
  });

})