describe('Song', function() {
	var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  beforeEach(function() {
  	song = new Song('Love Song', 'Destiny Album', 'Michael Jackson');
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

})