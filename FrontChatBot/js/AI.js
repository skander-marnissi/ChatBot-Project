/* 

*/

//Debut Event Chargement de la fenetre 
	window.addEventListener('load', function(){

	// Debut Block d'inistialisation 
		//Liaison des composants de la page 

		const voice = document.getElementById("voice");

		const voice2text = document.querySelector(".voice2text");

		var chat = document.getElementById("chatButton");

		var txt = document.getElementById("textarea");

		const element = document.getElementById('container');

		//Reponse predefinies 
		var botTalk = ["Salut, j'espere que vous passez une agreable journee!","Je vais bien merci!","je n'ai pas de nom mais mon auteur est Souhir Arous!","22","J'ai été cree en fevrier, 2020.","Je ne suis pas humain, Je ne suis qu'un simple Bot."];

		//Tableau contenant Tous les blocks de chat du chatbot
		var divArr=[];

		//Indexeur du tableau contenant tous les blocks de chat du chatbot
		var delayVar=0;

		//Instanciation de la voix du chatbot
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

		//const recorder = new SpeechRecognition();

		

		

		//Premierre Bulle de dialog
			setTimeout(function(){
			element.appendChild(addBotText("Hi I'm your assistant, my name is 'Marnix' I was designed to help any customers, How can I help you?" ));
			},1000);


	// Fin Block d'inistialisation 


	//Debut Block creation des bulles de dialog 
	 //Debut Bulle utilisateur

		function addHumanText(text) {

		//1. Construction du block <div class = "d-flex justify-content-end mb-4">	
		  const bigchatContainer = document.createElement("div");
		  bigchatContainer.classList.add("d-flex");
		  bigchatContainer.classList.add("justify-content-end");
		  bigchatContainer.classList.add("mb-4");

		//2. Construction du block <div class = "msg_cotainer_send">	  
		  const chatContainer = document.createElement("div");
		  chatContainer.classList.add("msg_cotainer_send");

		//3. Construction du block <div class = "img_cont_msg">	
		  const botImageContainer1 = document.createElement("div");
		  botImageContainer1.classList.add("img_cont_msg");

		//4. Construction du block <img class = "rounded-circle user_img_msg" src="src/userPicture.png">	
		  const botImage1 = document.createElement("img");
		  botImage1.classList.add("rounded-circle");
		  botImage1.classList.add("user_img_msg");
		  botImage1.setAttribute("src","src/userPicture.png");

		//5. Construction du block <p class = "voice2text">
		  const chatBox = document.createElement("p");
		  chatBox.classList.add("voice2text");
		 
		//6. Construction du text a ajouter  
		  const chatText = document.createTextNode(text);

		//Ajout du block 4. dans 3.
		  botImageContainer1.appendChild(botImage1);

		//Ajout du block 6. dans 5.
		 chatBox.appendChild(chatText);

		//Ajout du block 5. dans 2. 
		 chatContainer.appendChild(chatBox);

		//Ajout des block 3. et 2. dans 1.  
		 bigchatContainer.appendChild(chatContainer);
		 bigchatContainer.appendChild(botImageContainer1);

		//Ajustement des tailles des bulles de dialog	
				 divArr.push(bigchatContainer);

					for (y=0;y<divArr.length-1;y++){
						if (divArr[y].style.bottom=="15%"){
						divArr[y].style.bottom="28%";
					}
					else if (divArr[y].style.bottom=="28%"){
						divArr[y].style.bottom="41%";
					}
					else if (divArr[y].style.bottom=="41%"){
						divArr[y].style.bottom="54%";
					}
					else if (divArr[y].style.bottom=="54%"){
						divArr[y].style.bottom="67%";
					}
					else if (divArr[y].style.bottom=="67%"){
						divArr[y].style.bottom="80%";
					}
					else if (divArr[y].style.bottom=="80%"){
						divArr[y].style.bottom="93%";
					}
					else if (divArr[y].style.bottom=="93%"){
						divArr[y].style.bottom="106%";
					}
					else if(divArr[y].style.bottom=="106%"){
						divArr[y].style.display="none";
					}
												}

				  return bigchatContainer;
				}
		//Fin Bulle utilisateur



		//Debut Bulle ChatBot

		function addBotText(text) {

		 //1. Construction du block <div class = "d-flex justify-content-start mb-4">	
		  const bigchatContainer1 = document.createElement("div");
		  bigchatContainer1.classList.add("d-flex");
		  bigchatContainer1.classList.add("justify-content-start");
		  bigchatContainer1.classList.add("mb-4");

		 //2. Construction du block <div class = "msg_cotainer">
		  const botImageContainer = document.createElement("div");
		  botImageContainer.classList.add("img_cont_msg");

		 //3. Construction du block <div class = "img_cont_msg">
		  const chatContainer1 = document.createElement("div");
		  chatContainer1.classList.add("msg_cotainer");


		 //4. Construction du block <img class = "rounded-circle user_img_msg" src="src/ChatBotPicture.png">	
		  const botImage = document.createElement("img");
		  botImage.classList.add("rounded-circle");
		  botImage.classList.add("user_img_msg");
		  botImage.setAttribute("src","src/ChatBotPicture.png");

		 //5. Construction du block <p class = "voice2text">
		  const chatBox1 = document.createElement("p");
		  chatBox1.classList.add("voice2text");

		 //6. Construction du text a ajouter 
		 const chatText1 = document.createTextNode(text);

		 //Ajout du block 4. dans 3. 
		  botImageContainer.appendChild(botImage);

		 //Ajout du block 6. dans 5.
		  chatBox1.appendChild(chatText1);

		 //Ajout du block 5. dans 2. 
		  chatContainer1.appendChild(chatBox1);

		 //Ajout des block 3. et 2. dans 1.
		  bigchatContainer1.appendChild(botImageContainer);
		  bigchatContainer1.appendChild(chatContainer1);


		 //Ajustement des tailles des bulles de dialog	
		 		divArr.push(bigchatContainer1);

						for (y=0;y<divArr.length-1;y++){
							if (divArr[y].style.bottom=="15%"){
							divArr[y].style.bottom="28%";
						}
						else if (divArr[y].style.bottom=="28%"){
							divArr[y].style.bottom="41%";
						}
						else if (divArr[y].style.bottom=="41%"){
							divArr[y].style.bottom="54%";
						}
						else if (divArr[y].style.bottom=="54%"){
							divArr[y].style.bottom="67%";
						}
						else if (divArr[y].style.bottom=="67%"){
							divArr[y].style.bottom="80%";
						}
						else if (divArr[y].style.bottom=="80%"){
							divArr[y].style.bottom="93%";
						}
						else if (divArr[y].style.bottom=="93%"){
							divArr[y].style.bottom="106%";
						}
						else if(divArr[y].style.bottom=="106%"){
							divArr[y].style.display="none";
						}

													}

			  return bigchatContainer1;
			}

		//Fin Bulle ChatBot	
		//Fin Block creation des bulles de dialog 


	//Debut Fonction d'auto ajustement de la fenetre de chat
		
		function scrollToBottom() {
		  element.scrollTop = element.scrollHeight;
		}

		//Fin Fonction d'auto ajustement de la fenetre de chat	



	//Debut block bouton de chat apres "Click" 
		
		voice.addEventListener("click",function(){

			if (txt.value != ""){
			
			//Recuperation et Renitialisation de la zone du text de chat
			var input = txt.value;
			txt.value="";

			//Verification de la position de cadrage de la fenetre de chat 
			var shouldScroll = element.scrollTop + element.clientHeight <= element.scrollHeight;
			  
			//Ajout de la bulle de chat utilisateur dans le chat
			element.appendChild(addHumanText(input));

			//Ajustement automatique du cadrage 
			 if (!shouldScroll) {
				    scrollToBottom();
				  }

				  

			//1. Traitement ML(Machine learning)	  
			//var data = textToBinary(input);

			

			//2. Traitement ML(Machine learning)
			//var result = brain.likely(data, net);


			//3. Debut Block de la Voix du chatBot
			//const speech = new SpeechSynthesisUtterance();
			//speech.volume = 1;
			//speech.rate = 1;
			//speech.pitch = 1;

			//4. Encapsulation du Json
			var mess = {
							flag:0,
							message:input
			}
			var send = JSON.stringify(mess);
			console.log("this is mess : "+mess);
			console.log("this is send : "+send);
			
			//Fin Block de la Voix du chatBot



					

						//Delait de reponse 1 seconde	
						setTimeout(function(){
								
							
							
							$.ajax({
								url : 'http://127.0.0.1:5000/chatbot',
								type : 'POST',
								dataType : 'json',
								data: send,
								xhrFields: {
									withCredentials: true
								 },
								 crossDomain: true,
								 contentType: 'application/json; charset=utf-8',
								
								 success : function(result, statut){
									
									//speech.text=result.message;
									element.appendChild(addBotText(result.message));
									var shouldScroll = element.scrollTop + element.clientHeight === element.scrollHeight;
									//window.speechSynthesis.speak(speech);

									//Ajustement automatique du cadrage 
									if (!shouldScroll) {
					   				 scrollToBottom();
					  					}
								},
						 
								error : function(result, statut, erreur){
									element.appendChild(addBotText("Une erreur c'est produite .. :x "));
								},
						 
								complete : function(result, statut){
									//chargement
						 
								}
						 
							 });

							//Verification de la position de cadrage de la fenetre de chat 
						/*	var shouldScroll = element.scrollTop + element.clientHeight === element.scrollHeight;
				 
							
							element.appendChild(addBotText(input)); */
										
						},1000);

						
					}
				

		});
	});	
