import { filterAZ, filterZA, arrayDirectores, filterDataDirector, arrayProductores, filterDataProducer, filterDataYearAsc, filterDataYearDesc} from '../src/data.js';

const dataStudioGhibli = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"

  },
  {
    "title": "From Up on Poppy Hill",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2011",
    "rt_score": "83"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93"
  },
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "release_date": "2001",
    "rt_score": "97"
  }
]

// Test de A-Z
describe('filterAZ ordena todas las peliculas en orden de la A a la Z', () => {
  it('Debería retornar una función', () => {
    expect(typeof filterAZ).toBe('function');
  });

  it('Debería retornar las peliculas en orden asc [Castle in the Sky],[From Up on Poppy Hill],[My Neighbor Totoro],[Spirited Away]', () => {
    const dataAscendente = filterAZ(dataStudioGhibli);
    expect(dataAscendente[0].title).toEqual('Castle in the Sky');
    expect(dataAscendente[1].title).toEqual('From Up on Poppy Hill');
    expect(dataAscendente[2].title).toEqual('My Neighbor Totoro');
    expect(dataAscendente[3].title).toEqual('Spirited Away');
  });
});

// Test de Z-A
describe('filterZA ordena todas las peliculas en orden de la Z a la A', () => {
  it('Debería retornar una función', () => {
    expect(typeof filterZA).toBe('function');
  });

  it('Debería retornar todas las peliculas en forma descendente [Spirited Away],[My Neighbor Totoro],[From Up on Poppy Hill],[Castle in the Sky]', () => {
    const dataDescendente = filterZA(dataStudioGhibli);
    expect(dataDescendente[3].title).toEqual('Castle in the Sky');
    expect(dataDescendente[2].title).toEqual('From Up on Poppy Hill');
    expect(dataDescendente[1].title).toEqual('My Neighbor Totoro');
    expect(dataDescendente[0].title).toEqual('Spirited Away');
  });
});

// Test de Director
// verificar queque devuelve un array de directores sin duplicado
describe('arrayDirectores', () => {
  it('debería devolver un array de directores sin duplicados', () => {
    const dataDirector = [
      { director: 'Hayao Miyazaki' },
      { director: 'Gorō Miyazaki' },
      { director: 'Hayao Miyazaki' },
    ];

    // el resultado de la funcion de almacena en la variable resultado
    const resultado = arrayDirectores(dataDirector);
    //comprobar si el resultado coincide con el array esperado de directores sin duplicados
    expect(resultado).toEqual(['Hayao Miyazaki', 'Gorō Miyazaki']);
  });
});

describe('filterDataDirector', () => {
  //verificar
  it('debería devolver un nuevo array con las películas del director especificado', () => {
    const data2Director = [
      { title: 'Castle in the Sky', director: 'Hayao Miyazaki' },
      { title: 'From Up on Poppy Hill', director: 'Gorō Miyazaki' },
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki' },
    ];

    //llamamos a la funcion filterDataDirector y damos de argumento la data y el nombre de un director y se almacena en la variable resultado.
    const resultado = filterDataDirector(data2Director, 'Hayao Miyazaki');
    // comprobar si el resultado coincide con el nuevo array esperado que contiene las películas del director especificado
    //peliculas que se esperan obtener
    expect(resultado).toEqual([
      { title: 'Castle in the Sky', director: 'Hayao Miyazaki' },
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki' },
    ]);
  });
});

// Test de Productor
describe('arrayProductores', () => {
  it('Debería devolver un array de productores sin duplicados', () => {
    const dataProductor = [
      { producer: 'Toshio Suzuki' },
      { producer: 'Isao Takahata' },
      { producer: 'Toshio Suzuki' },
    ];

    const resultado = arrayProductores(dataProductor);
    expect(resultado).toEqual(['Toshio Suzuki', 'Isao Takahata']);
  });
});

describe('filterDataProducer', () => {
  it('Debería devolver un nuevo array con las películas del productor especificado', () => {
    const data2Productor = [
      { title: 'From Up on Poppy Hill', producer: 'Toshio Suzuki' },
      { title: 'Castle in the Sky', producer: 'Isao Takahata' },
      { title: 'Spirited Away', producer: 'Toshio Suzuki' },
    ];

    const resultado = filterDataProducer(data2Productor, 'Toshio Suzuki');
    expect(resultado).toEqual([
      { title: 'From Up on Poppy Hill', producer: 'Toshio Suzuki' },
      { title: 'Spirited Away', producer: 'Toshio Suzuki' },
    ]);
  });
});

// Test orden de año Ascendente
describe('filterDataYearAsc retorna las peliculas ordenadas según año Ascendente', () => {
  it('Debería retornar una función', () => {
    expect(typeof filterDataYearAsc).toBe('function');
  });

  it('Debería retornar peliculas en orden [Castle in the Sky],[My Neighbor Totoro],[Spirited Away],[From Up on Poppy Hill] ', () => {

    const dataYear = filterDataYearAsc(dataStudioGhibli);

    expect(dataYear[0].title).toEqual('Castle in the Sky');
    expect(dataYear[1].title).toEqual('My Neighbor Totoro');
    expect(dataYear[2].title).toEqual('Spirited Away');
    expect(dataYear[3].title).toEqual('From Up on Poppy Hill');
  });
});

// Test orden de año Descendente.
describe('filterDataYearDesc retorna las peliculas ordenadas según año Descendente', () => {
  it('Debería retornar una función', () => {
    expect(typeof filterDataYearDesc).toBe('function');
  });

  it('Debería retornar las peliculas en orden [From Up on Poppy Hill],[Spirited Away], [My Neighbor Totoro], [Castle in the Sky]', () => {
    const dataYear = filterDataYearDesc(dataStudioGhibli);

    expect(dataYear[0].title).toEqual('From Up on Poppy Hill');
    expect(dataYear[1].title).toEqual('Spirited Away');
    expect(dataYear[2].title).toEqual('My Neighbor Totoro');
    expect(dataYear[3].title).toEqual('Castle in the Sky');


  });
});