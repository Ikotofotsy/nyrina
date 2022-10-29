$(function()
{
	let i = 0
	$(".barre").click(()=>{
		if (i==0)
		{
			$("nav div").css("display","flex");
			i = 1
		}
		else
		{
			$("nav div").css("display","none");
			i = 0
		}
		
	});
	/*
	$(".logo").click(()=>{
		$("body").css("background","whitesmoke");
		$("h1,h3").css("color","black");
		$("h1 span").css("-webkit-text-stroke","black");
		$(".barre").css("boxshadow","0 0 50px black");
	});*/

	$(".profil").mouseenter(()=>{
		$(".profil").css({
			"padding":"15px"
		})

	});

	$(".profil").mouseleave(()=>{
		$(".profil").css({
			"padding":"30px"
		})
	
	});

	$("#n1").mouseenter(()=>{
		$("#n1").attr('src','img/maisonb.png');
	});
	$("#n1").mouseleave(()=>{
		$("#n1").attr('src','img/maison.png');
	});
	$("#n2").mouseenter(()=>{
		$("#n2").attr('src','img/utilisateurb.png');
	});
	$("#n2").mouseleave(()=>{
		$("#n2").attr('src','img/utilisateur.png');
	});
	$("#n3").mouseenter(()=>{
		$("#n3").attr('src','img/marqueurb.png');
	});
	$("#n3").mouseleave(()=>{
		$("#n3").attr('src','img/marqueur.png');
	});
	$("#n4").mouseenter(()=>{
		$("#n4").attr('src','img/enveloppeb.png');
	});
	$("#n4").mouseleave(()=>{
		$("#n4").attr('src','img/enveloppe.png');
	});
	$("#n5").mouseenter(()=>{
		$("#n5").attr('src','img/appel-telephoniqueb.png');
	});
	$("#n5").mouseleave(()=>{
		$("#n5").attr('src','img/appel-telephonique.png');
	});


});
