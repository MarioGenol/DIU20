/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Julio Ortega",
				Photo: "persona1.jpg",
				Quote: "Amor omnia vincit",
				Age: 26,
				Occupation: "Camarero",
				Family: "Tiene 2 hermanas mayores.",
				Location: "Lugo",
				Character: "Le gusta disfrutar de sus amistades.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5},
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar.", "Buscar un trabajo mejor."],
				Frustrations: ["no le gusta la tecnología, por lo que siempre recurre a sus amigos", "Le gustaría tener más tiempo libre y desarrollarse más personalmente."],
				Bio: "Es de Zaragoza y vino a Lugo por trabajo. LLeva 5 años trabajando en un bar. Aqui ha hecho buenos amigos en la ciudad y normalmente ser reunen para fiestas, a veces organizan viajes. Ahora mismo está viviendo en un piso compartido a las afueras de la ciudad.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 0 }	
				], 
                Contextos: "LLeva un tiempo pensando en cambiarse de piso y quiere hacerlo cuanto antes. Le gustaría vivir en el centro de la ciudad y no tener que perder tanto tiempo en el transporte.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Juan Manuel Hernández Hernández",
				Photo: "hernandez.jpg",
				Quote: "No dejes para mañana lo que puedas hacer hoy.",
				Age: 49,
				Occupation: "Oficinista en una empresa de construcción",
				Family: "Ambos padres, mujer y sin hijos",
				Location: "Adv. del Prado, Nº4 S/N",
				Character: "Atento, divertido y práctico",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Cuando llegue la vejez, solo nos quedarán las experiencias vividas, por ello quiero conocer y estar en contacto con multitud de culturas"],
				Frustrations: ["Me gustaría disfrutar la vida mucho más. Estoy cansado de ir de casa a la oficina y de la oficina a casa"],
				Bio: "Me encanta leer novelas gráficas para desconectar del trabajo y la rutina. Siempre he tenido un espíritu joven y siempre lo tendré. Adoro pasar el tiempo con gente amable y educada.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Me encantaría dar un buen uso a las 2 habitaciones de mi casa que están llenas de trastos." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
