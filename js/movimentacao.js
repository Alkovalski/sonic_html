var seta, w, a, s, d, vel, pul, pulo, loopp;
var corrd, corre;
var a = [0,8];
var e, n, m, div, texto, div2;
seta = "<img src='sonic/PARADO.png'>"
n = 1;
m = -1;
e = 2;
d = 2;
corr = 0;
pulo = 1;
pul = 0;
setInterval(function(){
div2 = document.getElementById('vare');
div2.innerHTML = e;
div2 = document.getElementById('varore');
div2.innerHTML = corrd;}, 1)
loopp = setInterval(function(){
		texto = document.getElementById("txt_texto").value; <!--	             ->//Obtendo o texto digitado pelo usuário:
		document.getElementById("txt_texto").value = ""; //limpa a caixa de texto
		div = document.getElementById(a);	//pega o ultimo quadro
		div.innerHTML = ""; //limpa o quadro anterior
			switch(texto){
				case ('s'):
				case ('S'):
					if (a[1]>=10){
						seta = "<img src='sonic/ABAIXA.png'>"; //https://stackoverflow.com/questions/9029392/setinterval-again-in-5-seconds-after-clearinterval-button
					}else
						seta = "<img src='sonic/ABAIXA.png'>";
				break;
				case ('a'):
				case ('A'):
					if (a[0]<=0){
						a[0] = 50;
					}else
						a[0] = a[0] - n;
						
						if (corre ==3){
							corre = corre + n;
						}else if (corre ==4){
							corre = corre + n;	
						}else if(corre == 6){
							corre = corre + n;
						}else if(corre == 7){
							corre = corre + n;
						}else if(corre == 9){
							corre = corre + n;
						}else if(corre == 10){
							corre = corre + n;
						}
						d = 0;
							
							if (corre ==2){
								seta = "<img src='sonic/CORRENDO_1R.png'>";
								corre = corre + 1;
							}else
							if (corre == 5){
								seta = "<img src='sonic/CORRENDO_2R.png'>";
								corre = corre + 1;
							}else
							if (corre == 8){
								seta = "<img src='sonic/CORRENDO_3R.png'>";
								corre = corre + 1;
							}else
							if (corre == 11){
								seta = "<img src='sonic/CORRENDO_4R.png'>";
								corre= 2;
							}else
						if (e==1){
							corrd = 0;
							seta = "<img src='sonic/CORRE_1R.png'>";
						}
						else if (e==2){
							seta = "<img src='sonic/CORRE_2R.png'>";
						}					
						else if (e==4){
							seta = "<img src='sonic/CORRE_3R.png'>";
						}
						else if (e==5){
							seta = "<img src='sonic/CORRE_4R.png'>";
						}
						else if (e==7){
							seta = "<img src='sonic/CORRE_5R.png'>";
						}
						else if (e==8){
							seta = "<img src='sonic/CORRE_6R.png'>";
							corre = 2;
						}						
					e = e + n;
				break;
				case ('w'):
				case ('W'):
					if (a[1]<=0){
						a[1] = 0;
						seta = "<img src='sonic/SPRITE_08.png'>";
					}else
						seta = "<img src='sonic/SPRITE_08.png'>";
				break;
				case ('d'):
				case ('D'):
					if (a[0]>=50){
						a[0] = 0
					}else
						a[0] = a[0] + n;
						
						if (corrd ==3){
							corrd = corrd + n;
						}else if (corrd ==4){
							corrd = corrd + n;	
						}else if(corrd == 6){
							corrd = corrd + n;
						}else if(corrd == 7){
							corrd = corrd + n;
						}else if(corrd == 9){
							corrd = corrd + n;
						}else if(corrd == 10){
							corrd = corrd + n;
						}
						e = 0;
							
							if (corrd ==2){
								seta = "<img src='sonic/CORRENDO_1.png'>";
								corrd = corrd + 1;
							}else
							if (corrd == 5){
								seta = "<img src='sonic/CORRENDO_2.png'>";
								corrd = corrd + 1;
							}else
							if (corrd == 8){
								seta = "<img src='sonic/CORRENDO_3.png'>";
								corrd = corrd + 1;
							}else
							if (corrd == 11){
								seta = "<img src='sonic/CORRENDO_4.png'>";
								corrd= 2;
							}else
						if (d==2){ //1
							corre = 0;
							seta = "<img src='sonic/CORRE_1.png'>";
						}
						else if (d==3){ //2
							seta = "<img src='sonic/CORRE_2.png'>";
						}					
						else if (d==5){ //4
							seta = "<img src='sonic/CORRE_3.png'>";
						}
						else if (d==6){ //5
							seta = "<img src='sonic/CORRE_4.png'>";
						}
						else if (d==8){ //7
							seta = "<img src='sonic/CORRE_5.png'>";
						}
						else if (d==9){ //8
							seta = "<img src='sonic/CORRE_6.png'>";
							corrd = 2;
						}						
					d = d + n;
				break;
				case (" "):
					pulo = 4;
					clearInterval(loopp);
				break;
			}
		//Limpando a caixa de texto:
		document.getElementById("txt_texto").value = "";
		//Focando a caixa de texto:
		document.getElementById("txt_texto").focus(); 
		div = document.getElementById(a);
		
		div.innerHTML = seta;
		//Inserindo o texto dentro da Div:
		//div.innerHTML = seta; 
		
		
		//Limpando a caixa de texto:
		document.getElementById("txt_texto").value = "";
		//Focando a caixa de texto:
		document.getElementById("txt_texto").focus();
}, 0.1);
	pul = setInterval(function(){
		if(pulo = 0){
		div.innerHTML = "";
		a[1] = a[1] - n;
		seta = "<img src='sonic/BOLINHA_21.png'>";
		div = document.getElementById(a);	
		div.innerHTML = seta;
		seta = "<img src='sonic/BOLINHA_22.png'>";
		seta = "<img src='sonic/BOLINHA_24.png'>";
		seta = "<img src='sonic/BOLINHA_23.png'>";
		}else
		clearInterval(pul);
	}, 600)