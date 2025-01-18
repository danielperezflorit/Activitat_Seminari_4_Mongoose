import { Schema, model, connect } from 'mongoose';

// 1. Create interfaces representing documents in MongoDB.
interface IFilm {
  name: string;
  director: string;
  length: number;
}

interface IVideoclub{
    name: string;
    boss: string;
    address: string;
}

// 2. Create a Schema corresponding to the document interface.
const filmSchema = new Schema<IFilm>({
  name: { type: String, required: true },
  director: { type: String, required: true },
  length: {type: Number}
});

const videoclubSchema = new Schema<IVideoclub>({
    name: { type: String, required: true },
    boss: { type: String, required: true },
    address: {type: String, required: true }
  });

// 3. Create Models.
const Film = model<IFilm>('Film', filmSchema);
const Videoclub = model<IVideoclub>('Videoclub', videoclubSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017');

   // Create a new film
   
 /* await createFilm1({
    name: 'Medianoche en Paris',
    director: 'Woody Allen',
    length: 94
  });
  
  await createFilm2({
    name: 'El Gran Hotel Budapest',
    director: 'Wes Anderson',
    length: 99
  });

  // Create a new videoclub
  await createVideoclub({
    name: 'Videoclub Chaplin',
    boss: 'Carol',
    address: 'c/Rovellada de Dalt 42'
  });*/

  // Read films
  const films = await getFilms();
  console.log('Films:', films);

  // Update a film
  /*const updatedFilm = await updateFilm('6702fd363aac81372f7c49a1', { length: 180 });
  console.log('Updated Film:', updatedFilm);*/
  
  // Delete a film

  const deletedFilm = await deleteFilm('6702fd363aac81372f7c49a1');
  console.log('Deleted Film:', deletedFilm);

  const orden = await aggregateFilmsByDirector(95);
  console.log ('Ordenado:', orden)
}

// Example of aggregation pipeline
//const aggregationResult = await aggregateFilmsByDirector(90);
//console.log('Aggregation Result:', aggregationResult);

//CREATE
async function createFilm1(filmData: IFilm) {
  const film = new Film(filmData);
  return await film.save();
}
async function createFilm2(filmData: IFilm) {
    const film = new Film(filmData);
    return await film.save();
  }
async function createVideoclub(videoclubData: IVideoclub) {
    const videoclub = new Videoclub(videoclubData);
    return await videoclub.save();
  }

// READ: Get all films
async function getFilms() {
  return await Film.find(); // Return all films
}


// UPDATE: Update a film by NAME
async function updateFilm(id: string, updateData: Partial<IFilm>) {
  return await Film.findByIdAndUpdate(id, updateData, { new: true });
}

// DELETE: Delete a film by Name
async function deleteFilm(id: Object) {
  return await Film.findByIdAndDelete(id);
}

// Aggregation Pipeline: Aggregate films by director
async function aggregateFilmsByDirector(minLength: number) {
    return await Film.aggregate([
      {
        $match: { length: { $gte: minLength } }, // Filtra por longitud mínima
      },
      {
        $group: {
          _id: "$director", // Agrupa por director
          totalFilms: { $sum: 1 }, // Cuenta el número total de películas
          avgLength: { $avg: "$length" }, // Calcula la duración promedio de las películas
        },
      },
      {
        $sort: { totalFilms: -1 }, // Ordena por número de películas en orden descendente
      },
    ]);
  }