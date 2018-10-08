var flower = document.getElementById('flower');
var money = document.getElementById('money');
var consultation = document.getElementById('consultation');
var delivery = document.getElementById('delivery');

flower.addEventListener('mouseover', function(e) {
	this.style.backgroundSize = '70px';
});



flower.addEventListener('mouseleave', function(e) {
	this.style.backgroundSize = '50px';
});


money.addEventListener('mouseover', function(e) {
	this.style.backgroundSize = '70px';
});



money.addEventListener('mouseleave', function(e) {
	this.style.backgroundSize = '50px';
});


consultation.addEventListener('mouseover', function(e) {
	this.style.backgroundSize = '70px';
});



consultation.addEventListener('mouseleave', function(e) {
	this.style.backgroundSize = '50px';
});


delivery.addEventListener('mouseover', function(e) {
	this.style.backgroundSize = '70px';
});



delivery.addEventListener('mouseleave', function(e) {
	this.style.backgroundSize = '50px';
});

var learn = document.getElementById('learn');
var main_title = document.getElementById('main_title');
learn.addEventListener('click', function(e) {
	main_title.textContent = 'Welcome to my flowershop';
	main_title.style.color = 'blue';
	this.style.color = 'white';
	this.style.backgroundColor = 'red';
	this.textContent = ' Buy Now'
});	
