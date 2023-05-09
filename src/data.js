

// Ordenar las películas de la A a las Z y de la Z a la A.
export const filterAZ = (data) => {
  const sortLettersAZ = data.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return sortLettersAZ;
  
}
export const filterZA = (data) => {
  const sortLetterZA = data.sort((a, b) => {
    return b.title.localeCompare(a.title);
  });
  return sortLetterZA;
}

//Filtrar por Director
export function arrayDirectores (data) {
  return data.map((peliculas) => {
    return peliculas.director;
  }).filter((director, index, arrayDirectores) => {
    return arrayDirectores.indexOf(director) === index;
  })
}

export const filterDataDirector = (data, nameDirector) => {
  const newDataDirector = data.filter(movie => movie.director === nameDirector);
  return newDataDirector;
}

//filtro por productor
export function arrayProductores (data) {
  return data.map((peliculas) => {
    return peliculas.producer;
  }).filter((productor, index, arrayProductores) => {
    return arrayProductores.indexOf(productor) === index;
  })
}
export const filterDataProducer = (data, nameProducer) => {
  const newDataProducer = data.filter(movie => movie.producer === nameProducer);
  return newDataProducer;
}

//Filtrar por Año Ascendente
export const filterDataYearAsc = (data) => {
  const filterYearAsc = data.sort((a, b) => {
    return a.release_date - b.release_date;
  });
  return filterYearAsc;
}
//Filtrar por Año Descendente
export const filterDataYearDesc = (data) => {
  const filterYearDesc = data.sort ((a, b) => {
    return b.release_date - a.release_date;
  });
  return filterYearDesc;
}




