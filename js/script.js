$(document).ready(function(){

	// Progress Bar

	let containerA = document.getElementById("circleA");

	let circleA = new ProgressBar.Circle(containerA,{
		color: '#660066',
		strokeWidth:8,
		duration:1400,
		from:{color:'#AAA'},
		to:{color:'#64DAF9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() *60);
			circle.setText(value);
		}
	});


	let containerB = document.getElementById("circleB");

	let circleB = new ProgressBar.Circle(containerB,{
		color: '#64DAF9',
		strokeWidth:8,
		duration:1600,
		from:{color:'#AAA'},
		to:{color:'#64DAF9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 254);
			circle.setText(value);
		}
	});

	let containerC = document.getElementById("circleC");

	let circleC = new ProgressBar.Circle(containerC,{
		color: '#64DAF9',
		strokeWidth:8,
		duration:2000,
		from:{color:'#AAA'},
		to:{color:'#64DAF9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 32);
			circle.setText(value);
		}
	});

	let containerD = document.getElementById("circleD");

	let circleD = new ProgressBar.Circle(containerD,{
		color: '#64DAF9',
		strokeWidth:8,
		duration:2200,
		from:{color:'#AAA'},
		to:{color:'#64DAF9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 52);
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

	//Paralax

	setTimeout(function(){

		$('#data-area').parallax({imageSrc: 'img/servicos.jpg'});
		$('#company.img').parallax({imageSrc: '0.jpg'});

	},250);

	//Filtro do portifolio		

	$('.filter-btn').on('click', function(){
		let type = $(this).attr('id');
		let boxes = $('.project-box');

		$('.main-btn').removeClass('active');
		$(this).addClass('active');

		if (type == 'dsg-btn') {
			eachBoxes('dsg',boxes)
		}else if (type == 'dev-btn') {
			eachBoxes('dev',boxes)
		}else if (type == 'seo-btn') {
			eachBoxes('seo',boxes)
		}else{
			eachBoxes('all',boxes)
		}
	});

	function eachBoxes(type,boxes){
		if (type == 'all') {
			$(boxes).fadeIn();
		}else{
			$(boxes).each(function(){
				if(!$(this).hasClass(type)){
					$(this).fadeOut('slow');
				}else{
					$(this).fadeIn();
				}
			})
		}
	}

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
                items: 1,
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

