$(function() {
//_________________-activer menu__________________
	$(".icone-menu").click(function(){
		$("nav").toggleClass("active");
	})

//_______________________ANIMATE______________________________
	$("header nav a:not(header nav a:first-child)").click(function(){
		$(".home h3").removeClass("animation-from-left");
		$(".home h1,.home p").removeClass("animation-from-right");
	})
	$("header nav a:first-child").click(function(){
		$(".home h3").addClass("animation-from-left");
		$(".home h1,.home p").addClass("animation-from-right");
	})
	$(window).scroll(() => {
		$("nav").removeClass("active");
		const tolerance = window.innerHeight;
		let top = window.scrollY;
		//_______________HOME-ANIMATE__________________	
		
		let bottomHome = $(".home").height();
		if(top + tolerance >= bottomHome)
		{
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(1)").addClass("lien-active")
		}
		//_______________ABOUT-ANIMATE__________________	
		
		let topAbout = $(".about").offset().top;
		
		if(top + tolerance -50 >= topAbout && top - tolerance + 50 <= topAbout){
			$(".about .heading").addClass("animation-from-top");
			$(".about-img img").addClass("animation-about-img");
			$(".about h3,.about p,.about a").addClass("animation-from-right");
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(2)").addClass("lien-active")
		}
		else{
			$(".about .heading").removeClass("animation-from-top");
			$(".about-img img").removeClass("animation-about-img");
			$(".about h3,.about p,.about a").removeClass("animation-from-right");
		}

		//_______________SERVICES-ANIMATE__________________	
		
		let topservice = $(".services").offset().top;
		
		if(top + tolerance -50 >= topservice && top - tolerance + 50 <= topservice){
			$(".services .heading").addClass("animation-from-top");
			$(".services .services-content").addClass("animation-from-bottom");
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(3)").addClass("lien-active")
		}
		else{
			$(".services .services-content").removeClass("animation-from-bottom");
			$(".services .heading").removeClass("animation-from-top");
		}

		//_______________PORTFOLIO-ANIMATE__________________	
		
		let topPortfolio = $(".portfolio").offset().top;
		
		if(top + tolerance -50 >= topPortfolio && top - tolerance + 50 <= topPortfolio){
			$(".portfolio .heading").addClass("animation-from-top");
			$(".portfolio .portfolio-content").fadeIn(2000);
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(4)").addClass("lien-active")
		}
		else{
			$(".portfolio .portfolio-content").fadeOut();
			$(".portfolio .heading").removeClass("animation-from-top");
		}

		//_______________CONTACT-ANIMATE__________________	
		
		let topContact = $(".contact").offset().top;
		
		if(top + tolerance -50 >= topContact && top - tolerance + 50 <= topContact){
			$(".contact .heading").addClass("animation-from-top");
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(5)").addClass("lien-active")
		}
		else{
			$(".contact .heading").removeClass("animation-from-top");
		}
		
	});
	
	

	//________________________TEHMES________________________
	$(".themes .themes-DC .dark").click(function(){
		console.log("dark");
		$(".style-theme").attr("href","dark-theme.css");
	})

	$(".themes .themes-DC .clair").click(function(){
		console.log("clair");
		$(".style-theme").attr("href","clair-theme.css");
	})
	//________________________TEHMES-COLORS________________________
	$(".themes-colors .color-1").click(function(){
		console.log("color1")
		$(".style-color").attr("href","color-theme-1.css");
		
		$(".home .home-img img").attr("src","img/profil-53BF9D.png")
		
		$(".about .about-img img").attr("src","img/apropos-53BF9D.png")

		
		$(".services .services-box .balise-img").attr("src","img/icone/balise-html-53BF9D.png")
		$(".services .services-box .logiciel-img").attr("src","img/icone/logiciel-53BF9D.png")
		$(".services .services-box .mobile-img").attr("src","img/icone/developpement-mobile-53BF9D.png")

		$("footer .footer-iconTop img").attr("src","img/icone/arrowhead-up-53BF9D.png")
	})

	$(".themes-colors .color-2").click(function(){
		console.log("color2")
		$(".style-color").attr("href","color-theme-2.css");
		
		$(".home .home-img img").attr("src","img/profil-F94C66.png")
		
		$(".about .about-img img").attr("src","img/apropos-F94C66.png")

		$(".services .services-box .balise-img").attr("src","img/icone/balise-html-F94C66.png")
		$(".services .services-box .logiciel-img").attr("src","img/icone/logiciel-F94C66.png")
		$(".services .services-box .mobile-img").attr("src","img/icone/developpement-mobile-F94C66.png")

		$("footer .footer-iconTop img").attr("src","img/icone/arrowhead-up-F94C66.png")
	})

	
})

	




