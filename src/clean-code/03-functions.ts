;(() => {
	// función para obtener información de una película por Id
	// function getAllMovies( movieId: string ) {
	function getMovieById(movieId: string) {
		console.log({ movieId })
	}

	// función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
	// function getAllMovieActors( id: string ) {
	function getMovieCastById(movieId: string) {
		console.log({ movieId })
	}

	// funcion para obtener el bio del actor por el id
	// function getUsuario( ActorId: string ) {
	function getActorBioById(ActorId: string) {
		console.log({ ActorId })
	}

	// Crear una película
	interface Movie {
		cast: string[]
		description: string
		rating: number
		title: string
	}

	function createMovie({ cast, description, rating, title }: Movie) {
		console.log({ title, description, rating, cast })
	}

	// Crea un nuevo actor
	function checkFullName(fullName: string) {
		console.log({ fullName })
		return true
	}

	// function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
	function createActor(fullName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..

		if (checkFullName(fullName)) return false

		console.log('Crear actor', birthdate)
		return true
	}

	// Continuar
	// const getPayAmount = ({isDead = false, isSeparated = true, isRetired = false,}) => {
	//   let result;
	//   if (isDead) {
	//     result = 1500;
	//   } else {
	//     if (isSeparated) {
	//       result = 2500;
	//     } else {
	//       if (isRetired) {
	//         result = 3000;
	//       } else {
	//         result = 4000;
	//       }
	//     }
	//   }

	//   return result;
	// };
	const getPayAmount = ({
		isDead = false,
		isSeparated = true,
		isRetired = false,
	}): number => {
		if (isDead) return 1500

		if (isSeparated) return 2500

		return isRetired ? 3000 : 4000
	}
})()
