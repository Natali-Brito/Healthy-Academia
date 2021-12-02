$(document).ready(function(){

	// Progress Bar

	let containerA = document.getElementById("circleA");

	let circleA = new ProgressBar.Circle(containerA,{
		color: '#ffff00',
		strokeWidth:8,
		duration:1400,
		from:{color:'#AAA'},
		to:{color:'#ffff00'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() *5);
			circle.setText(value);
		}
	});


	let containerB = document.getElementById("circleB");

	let circleB = new ProgressBar.Circle(containerB,{
		color: '#ffff00',
		strokeWidth:8,
		duration:1600,
		from:{color:'#AAA'},
		to:{color:'#ffff00'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 285);
			circle.setText(value);
		}
	});

	let containerC = document.getElementById("circleC");

	let circleC = new ProgressBar.Circle(containerC,{
		color: '#ffff00',
		strokeWidth:8,
		duration:2000,
		from:{color:'#AAA'},
		to:{color:'#ffff00'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 6);
			circle.setText(value);
		}
	});

	let containerD = document.getElementById("circleD");

	let circleD = new ProgressBar.Circle(containerD,{
		color: '#ffff00',
		strokeWidth:8,
		duration:2200,
		from:{color:'#AAA'},
		to:{color:'#ffff00'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 3);
			circle.setText(value);
		}
	});

	let dataAreaOffset = $('#data-area').offset();
	// stop serve para a animação não carregar mais que uma vez
	let stop = 0;

	$(window).scroll(function (e) {

	let scroll = $(window).scrollTop();

		if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
		  circleA.animate(1.0);
		  circleB.animate(1.0);
		  circleC.animate(1.0);
		  circleD.animate(1.0);

		  stop = 1;
		}
	});

   //Carousel Cards with Owl Carousel- Area Time  
   
	$(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayhoverpause:true,
        autoplaytimeout:100,
        items:4,
        nav:true,
        loop:true,
        responsive:{
            0:{
                items: 2,
                dots: false
            },
            485:{
                items: 2,
                dots: false
            },
            728:{
                items: 3,
                dots: false
            },
            960:{
                items: 4,
                dots: false
            },
            1200:{
                items: 5,
                dots: true
            },
    	}
	});
});

