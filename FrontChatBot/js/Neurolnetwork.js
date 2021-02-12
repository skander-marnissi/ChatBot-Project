

//*********** Partie Machine learning **************
		/*
		//Initialisation du resaux de neurones et des hyperparametes
		var net = new brain.NeuralNetwork();
		var trainData = [];
		var maxLength = 0;
		var remainingLength = 0;
		var newInput;
		var commands = 7;

		//Reponse Initiale du modele convertit en binaires	
			//Salutation
			trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,0,0,0], output: {[1]: 1} }); //HI
			trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0], output: {[1]: 1} }); //HEY
			trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0], output: {[1]: 1} }); //HELLO
			trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0], output: {[1]: 1} }); //Yo 
																																 
			//Comment vas-tu?
			trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[2]: 1} }); //Comment vas-tu?

			trainData.push({ input: [1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1], output: {[2]: 1} }); //Tout vas bien?

			//Quel est ton nom?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Quel est ton nom?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Quel est ton nom?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Comment tu t'appelles ??
			trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Ton nom?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Qui es-tu?
			trainData.push({ input: [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Nom?
																																																											   
			//Sense de la vie?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[4]: 1} }); //Quel est le sense de la vie?
			trainData.push({ input: [1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[4]: 1} }); //Sense de la vie?

			//Quel age as-tu?
			trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[5]: 1} }); //Quel age as-tu?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[5]: 1} }); //Quel es ton age?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[5]: 1} }); //C'est quoi ton age?
			trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[5]: 1} }); //Whats ur age?
																																																												 
			//Es-tu humain ?
			trainData.push({ input: [1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1], output: {[6]: 1} }); //Es-tu humain?
			trainData.push({ input: [1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1], output: {[6]: 1} }); //humain?

		//Ajustement des dimension en remplissant les case manquant avec des 0
		for (j=0;j<trainData.length;j++){
			if (trainData[j].input.length > maxLength){
				maxLength = trainData[j].input.length;
			}
		}
		for (q=0;q<trainData.length;q++){
			if (trainData[q].input.length < maxLength){
				remainingLength = maxLength - trainData[q].input.length;
				zeroArray = Array(remainingLength).fill(0);
				trainData[q].input = trainData[q].input.concat(zeroArray);
			}
		}

		//Entrainement du Bot
		net.train(trainData, {
			log: false,
			logPeriod: 10,
			errorThresh: 0.0005,
		}); 

		//Exportation du reseau de neurones
		const json = net.toJSON();

		console.log(JSON.stringify(json));




	 //Debut fonction de conversion Caractere -> Binaire

		function textToBinary(text){

			//Transformation des caractére du text donnée en binaire pour l'IA

		    text = text.toUpperCase();
			var data = [];
			
			for (i=0;i<text.length;i++){
				
				if ( text[i]=="A"){
					data = data.concat([1,0,0,0,0,0,0]);
				}
				else if (text[i]=="B"){
					data = data.concat([1,0,0,0,0,0,1]);
				}
				else if (text[i]=="C"){
					data = data.concat([1,0,0,0,0,1,0]);
				}
				else if (text[i]=="D"){
					data = data.concat([1,0,0,0,0,1,1]);
				}
				else if (text[i]=="E"){
					data = data.concat([1,0,0,0,1,0,0]);
				}
				else if (text[i]=="F"){
					data = data.concat([1,0,0,0,1,0,1]);
				}
				else if (text[i]=="G"){
					data = data.concat([1,0,0,0,1,1,0]);
				}
				else if (text[i]=="H"){
					data = data.concat([1,0,0,0,1,1,1]);
				}
				else if (text[i]=="I"){
					data = data.concat([1,0,0,1,0,0,0]);
				}
				else if (text[i]=="J"){
					data = data.concat([1,0,0,1,0,0,1]);
				}
				else if (text[i]=="K"){
					data = data.concat([1,0,0,1,0,1,0]);
				}
				else if (text[i]=="L"){
					data = data.concat([1,0,0,1,0,1,1]);
				}
				else if (text[i]=="M"){
					data = data.concat([1,0,0,1,1,0,0]);
				}
				else if (text[i]=="N"){
					data = data.concat([1,0,0,1,1,0,1]);
				}
				else if (text[i]=="O"){
					data = data.concat([1,0,0,1,1,1,0]);
				}
				else if (text[i]=="P"){
					data = data.concat([1,0,0,1,1,1,1]);
				}
				else if (text[i]=="Q"){
					data = data.concat([1,0,1,0,0,0,0]);
				}
				else if (text[i]=="R"){
					data = data.concat([1,0,1,0,0,0,1]);
				}
				else if (text[i]=="S"){
					data = data.concat([1,0,1,0,0,1,0]);
				}
				else if (text[i]=="T"){
					data = data.concat([1,0,1,0,0,1,1]);
				}
				else if (text[i]=="U"){
					data = data.concat([1,0,1,0,1,0,0]);
				}
				else if (text[i]=="V"){
					data = data.concat([1,0,1,0,1,0,1]);
				}
				else if (text[i]=="W"){
					data = data.concat([1,0,1,0,1,1,0]);
				}
				else if (text[i]=="X"){
					data = data.concat([1,0,1,0,1,1,1]);
				}
				else if (text[i]=="Y"){
					data = data.concat([1,0,1,1,0,0,0]);
				}
				else if (text[i]=="Z"){
					data = data.concat([1,0,1,1,0,0,1]);
				}
				else if (text[i]=="?"){
					data = data.concat([1,1,1,1,1,1,1]);
				}
			}
			

			//Ajustement des dimension en remplissant les case manquant avec des 0
			if (data.length < maxLength){
				remainingLength = maxLength - data.length;
				zeroArray = Array(remainingLength).fill(0);
				data = data.concat(zeroArray);
			}
			return data;
		}

		//Fin fonction de conversion Caractere -> Binaire


});

//Fin Event Chargement de la fenetre 
*/
//Tests
/*
  recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};*/
