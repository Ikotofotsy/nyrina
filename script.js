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
		//console.log("Tolerance:",tolerance)
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
		//console.log("Top+tolrence",top+tolerance-50)
		//console.log("Top-tolrence",top-tolerance+50)
		//console.log("topAbout",topAbout)

		//console.log($(".about").height())
		const heigthAbout = $(".about").height();
		
		if(top + tolerance -50 >= topAbout && top - tolerance + 50 -heigthAbout <= topAbout){
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

		//_______________DIPLOME-ANIMATE__________________	
		
		let topDiplome = $(".diplome-formation").offset().top;
		
		if(top + tolerance -50 >= topDiplome && top - tolerance + 50 <= topDiplome){
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(3)").addClass("lien-active")
		}

		//_______________SERVICES-ANIMATE__________________	
		
		let topservice = $(".services").offset().top;
		
		if(top + tolerance -50 >= topservice && top - tolerance + 50 <= topservice){
			$(".services .heading").addClass("animation-from-top");
			$(".services .services-content").addClass("animation-from-bottom");
			$("nav a").removeClass("lien-active")
			$("nav a:nth-child(4)").addClass("lien-active")
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
			$("nav a:nth-child(5)").addClass("lien-active")
		}
		else{
			$(".portfolio .portfolio-content").fadeOut();
			$(".portfolio .heading").removeClass("animation-from-top");
		}
		
	});
	
	
	a=2;
	//________________________TEHMES________________________
	$(".themes .themes-DC img").click(function(){
		if(a%2==0)
		{
			//console.log("dark");
			$(".style-theme").attr("href","clair-theme.css");
			$(".themes-DC img").attr("src","img/icone/mode-clair.png");
			a=1;
		}
		else{
			//console.log("clair");
			$(".style-theme").attr("href","dark-theme.css");
			$(".themes-DC img").attr("src","img/icone/mode-sombre.png");
			a=2;
		}
		
	})

	b=2
	console.log(b);
	//________________________TEHMES-COLORS________________________
	$(".themes .themes-colors img").click(function(){
		if(b%2==0)
		{
			$(".select-color").removeClass("select-color-animation-1")
			$(".select-color").addClass("select-color-animation-0")
			b=1;
			//console.log(b);
		}
		else{
			$(".select-color").removeClass("select-color-animation-0")
			$(".select-color").addClass("select-color-animation-1")
			b=2;
			//console.log(b);
		}
	})
	$(".select-color .color-1").click(function(){
		//console.log("color1")
		$(".themes .themes-colors img").attr("src","img/icone/themes-53BF9D.png")

		$(".style-color").attr("href","color-theme-1.css");
		
		$(".home .home-img img").attr("src","img/profil-1-53BF9D.png")
		
		$(".about .about-img img").attr("src","img/apropos-53BF9D.png")

		
		$(".services .services-box .base-img").attr("src","img/icone/base-de-donne-53BF9D.png")
		$(".services .services-box .integration-img").attr("src","img/icone/balise-html-53BF9D.png")
		$(".services .services-box .web-img").attr("src","img/icone/logiciel-53BF9D.png")

		$("footer .footer-iconTop img").attr("src","img/icone/arrowhead-up-53BF9D.png")
	})

	$(".select-color .color-2").click(function(){
		//console.log("color2")
		$(".themes .themes-colors img").attr("src","img/icone/themes-F94C66.png")

		$(".style-color").attr("href","color-theme-2.css");
		
		$(".home .home-img img").attr("src","img/profil-1-FA5252.png")
		
		$(".about .about-img img").attr("src","img/apropos-F94C66.png")

		$(".services .services-box .base-img").attr("src","img/icone/base-de-donne-F94C66.png")
		$(".services .services-box .integration-img").attr("src","img/icone/balise-html-F94C66.png")
		$(".services .services-box .web-img").attr("src","img/icone/logiciel-F94C66.png")

		$("footer .footer-iconTop img").attr("src","img/icone/arrowhead-up-F94C66.png")
	})

	
})

	




