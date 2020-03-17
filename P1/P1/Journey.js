/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Julio Ortega",
                Photo: "persona1.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere buscar un piso compartido en Lugo para mudarse de casa de su abuela",
                touch1: "móvil",
                feel1: "4",
                con1: " buscar ofertas de internet cerca del bar donde trabaja",
                ima1: "cartoon-phone.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas en su localización",
                touch2: "móvil",
                feel2: "2",
                con2: "hay demasiada información y pierde mucho tiempo, no hay precios 'baratos'",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "decide buscar alojamiento en piso de 4 estudiantes para ahorrar más dinero",
                touch3: "móvil",
                feel3: "3",
                con3: "Está preocupado ",
                ima3: "cartoon-thinking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos de la infancia le recomiendan una página para escoger alojamientos",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 5 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "5",
                con5: "Consulta con sus compañeros de trabajo si es buena la ubicación de los pisos encontrados.",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue un piso ideal calidad-precio.",
                touch6: "ordenador",
                feel6: "4",
                con6: "Aún no le han confirmado las condiciones contractuales y tampoco ha firmado.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Juan Manuel Hernández Hernández",
                Photo: "hernandez.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Tiene 2 habitaciones libres en casa y busca información acerca de cómo alquilarlas.",
                touch1: "agenda",
                feel1: "4",
                con1: "No quiere alquilar las habitaciones a cualquiera",
                ima1: "cartoon-phoningangry.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Se decide a buscar la página web que más se acerca a sus intereses.",
                touch2: "Ordenador",
                feel2: "2",
                con2: "La mayoría de webs son iguales y no se decide",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le llega un correo con publicidad de una web que se adapta a la perfección y le muestra tanto quiénes solicitan alojamiento como valoraciones de ellos",
                touch3: "Móvil (e-mail)",
                feel3: "5",
                con3: "Nunca ha tenido ninguna experiencia en una web similar",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Comienza con la creación del perfil, completando información y publicando fotos, fijándose en otros anuncios",
                touch4: "Móvil (webapp)",
                feel4: "3",
                con4: "Tardan dos semana en verificar el alojamiento",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Le llegan sus primeras peticiones de reserva",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Juan se muestra nervioso y un poco desconfiado",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Juan se muestra muy satisfecho tras la marcha de su primer cliente y revisa la valoración que éste ha dejado",
                touch6: "Ordenador",
                feel6: "4",
                con6: "No le parece justo que solo le diera 4 estrellas.",
                ima6: "cartoon-PCtyping.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



