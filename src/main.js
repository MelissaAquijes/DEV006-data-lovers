import { filterAZ,filterZA,arrayDirectores,filterDataDirector,arrayProductores,filterDataProducer,filterDataYearAsc,filterDataYearDesc} from './data.js';

const postersContainer = document.querySelector('.postersContainer');
const portadaVideo = document.querySelector('.portadaVideo');
const titleLogoContainer = document.querySelector('.titleLogoContainer');
const parrafoContainer = document.querySelector('.parrafoContainer');
const buttonContainer = document.querySelector('.buttonContainer');

const newImagenDescriptionContainer = document.querySelector('.newImagenDescriptionContainer');
const newTitleContainer = document.querySelector('.newTitleContainer');
const newDescriptionContainer = document.querySelector('.newDescriptionContainer');
const newScoreContainer = document.querySelector('.newScoreContainer');
const newCreatorsContainer = document.querySelector('.newCreatorsContainer');
const newTitle1Container = document.querySelector('.newTitle1Container');
const newContadorContainer = document.querySelector('.newContadorContainer');
const newCardsContainer = document.querySelector('.newCardsContainer');
const newTitle2Container = document.querySelector('.newTitle2Container');
const newCardsContainer2 = document.querySelector('.newCardsContainer2');
const newTitle3Container = document.querySelector('.newTitle3Container');
const newCardsContainer3 = document.querySelector('.newCardsContainer3');

const filterAlphabet = document.getElementById('filterAlphabet');
const filterDirector = document.getElementById('filterDirector');
const filterProducer = document.getElementById('filterProducer');
const filterYear = document.getElementById('filterYear');



fetch('./data/ghibli/ghibli.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const dataStudioGhibli = data.films;


    const postersGhibli = (ghibliData) => {

      postersContainer.innerHTML = "";
      document.getElementById('contadorMovies').innerHTML = `<span class="letterPink">You are watching:</span> ${ghibliData.length} movies`;

      ghibliData.forEach((e) => {
        const poster= document.createElement('img');
        poster.setAttribute('src', e.poster)
        poster.setAttribute('class', 'poster')
  
        postersContainer.appendChild(poster)
  
        poster.addEventListener('click', () => {
          const video = `<video src= ${e.info[0].video} loop autoplay>`
          const parrafo = `<p class='parrafo'>${e.info[0].texto}</p>`
          const titleLogo = `<img class= 'imgTitle' src= ${e.info[0].logoTitleUrl} />`
          const button = `<button class="buttonReadMore" id="buttonReadMore"></button>`
  
          portadaVideo.innerHTML = video;
          parrafoContainer.innerHTML = parrafo;
          titleLogoContainer.innerHTML = titleLogo;
          buttonContainer.innerHTML = button;
          
          const boton = document.getElementById('buttonReadMore');
          boton.addEventListener('click', nextPage);

          //OCULTAR PAGINA DE POSTERS Y MOSTRAR PÁGINA DE INFORMACION DE CADA PELICULA
          function nextPage() {
            document.getElementById('sectionPage-One').style.display = 'none';
            document.getElementById('sectionPage-Two').style.display = 'grid';
            portadaVideo.innerHTML=""
          }

          const newPoster = `<img class= 'newImagenDescription' src= ${e.info[0].imageDescription} />`
          newImagenDescriptionContainer.innerHTML = newPoster;

          const newTitle = `<p class="newTitle">${e.title}<span class="newTitleSpan"> (${e.release_date})</span></p>`
          newTitleContainer.innerHTML = newTitle

          const newDescription = `<p class="newDescription">${e.description}</p>`
          newDescriptionContainer.innerHTML = newDescription

          const newScore = 
            `<p class="titleScore">Score</p>
            <img class='iconStar' src= ${e.info[0].iconStar}>
            <p class="numberScore">${e.rt_score}/100</p>`
          newScoreContainer.innerHTML = newScore

          const newCreators = 
              `<p><span class="letterPink">Director: </span>${e.director}</p>
              <p><span class="letterPink">Producer: </span>${e.producer}</p>`
          newCreatorsContainer.innerHTML = newCreators

          const newTitleCharacters = `<h2 class="titlePeliculas">Characters</h2>`
          newTitle1Container.innerHTML = newTitleCharacters

          const newContadorCharacters = `<p class="contadorParrafo"><span class="letterPink">You are watching:</span> ${e.people.length} personajes</p>`
          newContadorContainer.innerHTML = newContadorCharacters

          //Creación de cards de personajes
          e.people.forEach(element => {
            const card = document.createElement('article');
            card.setAttribute('class', 'cardArticle')
            card.innerHTML += 
              `<h2 class="namePersonaje">${element.name}</h2>
              <img class="cardImage" src="${element.img}" alt="Personaje de la película">
              <p class="infoPersonajes"><span class="letterPink">Gender:</span> ${element.gender}</p>
              <p class="infoPersonajes"><span class="letterPink">Age:</span> ${element.age}</p>
              <p class="infoPersonajes"><span class="letterPink">Eye Color:</span> ${element.eye_color}</p>
              <p class="infoPersonajes"><span class="letterPink">Specie:</span> ${element.specie}</p>`

            newCardsContainer.appendChild(card)
          });

          //Creación de cards de locaciones
          const newTitle2Locations = `<h2 class="titlePeliculas">Locations</h2>`
          newTitle2Container.innerHTML = newTitle2Locations
  
          if (e.locations.length === 0) {
            newCardsContainer2.innerHTML = `<p class="noInformation">There is no information :(</p>`
          } else {
            e.locations.forEach( place => {
              const card2 = document.createElement('article');
              card2.setAttribute('class', 'cardArticle')
              card2.innerHTML += 
                `<h2 class="namePersonaje">${place.name}</h2>
                <img class="cardImage" src="${place.img}" alt="Personaje de la película">
                <p class="infoPersonajes"><span class="letterPink">Climate: </span>${place.climate}</p>
                <p class="infoPersonajes"><span class="letterPink">Terrain: </span>${place.terrain}</p>
                <p class="infoPersonajes"><span class="letterPink">Surface Water: </span>${place.surface_water}</p>
                <p class="infoPersonajes"><span class="letterPink">Residents: </span>${place.residents}</p>`
  
              newCardsContainer2.appendChild(card2);
                    
            });
          }

          //Creación de cards de vehiculos
          const newTitle3Vehicles = `<h2 class="titlePeliculas">Vehicles</h2>`
          newTitle3Container.innerHTML = newTitle3Vehicles

          if (e.vehicles.length === 0) {
            newCardsContainer3.innerHTML = `<p class="noInformation">There is no information :(</p>`
          } else {
            e.vehicles.forEach( mobility => {
              const card3 = document.createElement('article');
              card3.setAttribute('class', 'cardArticleVehicles')
              card3.innerHTML += 
                `<h2 class="namePersonaje">${mobility.name}</h2>
                <img class="cardImageVehicle" src="${mobility.img}" alt="Personaje de la película">
                <p class="infoPersonajes descripcion">${mobility.description}</p>
                <p class="infoPersonajes"><span class="letterPink">Vehicle Class: </span>${mobility.vehicle_class}</p>
                <p class="infoPersonajes"><span class="letterPink">Length: </span>${mobility.length}</p>
                <p class="infoPersonajes"><span class="letterPink">Pilot: </span>${mobility.pilot.name}</p>`

              newCardsContainer3.appendChild(card3);
            });
          } 

        });
      })
    }; 
    postersGhibli(dataStudioGhibli);

    // Filtrar de la A-Z y de la Z-A
    const createAlfabetoFilter = () => {
      const opcionAZ = document.createElement('option');
      opcionAZ.value = 'A-Z';
      opcionAZ.textContent = 'A-Z';
      filterAlphabet.add(opcionAZ);

      const opcionZA = document.createElement('option');
      opcionZA.value = 'Z-A';
      opcionZA.textContent = 'Z-A';
      filterAlphabet.add(opcionZA);
    };
    createAlfabetoFilter();

    filterAlphabet.addEventListener('change', () => {
      if (filterAlphabet.value === 'A-Z') {
        const filterLetterAZ = filterAZ(dataStudioGhibli);
        postersGhibli(filterLetterAZ);
      }
      if (filterAlphabet.value === 'Z-A') {
        const filterLetterZA = filterZA(dataStudioGhibli);
        postersGhibli(filterLetterZA);
      }
    });

    //Filtrar por Director
    const createDirectorList = (ghibliData) => {
      arrayDirectores(ghibliData).forEach((director) => {
        const opcionDirector = document.createElement ('option');
        opcionDirector.value = director;
        opcionDirector.textContent = director;
        filterDirector.add(opcionDirector);
      });
    };
    createDirectorList(dataStudioGhibli);

    filterDirector.addEventListener('change', () => {
      switch (filterDirector.value) {
      case 'all':
        postersGhibli(dataStudioGhibli);
        break;
      case 'Hayao Miyazaki':
        postersGhibli(filterDataDirector(dataStudioGhibli, 'Hayao Miyazaki'));
        break;
      case 'Isao Takahata':
        postersGhibli(filterDataDirector(dataStudioGhibli, 'Isao Takahata'));
        break;
      case 'Yoshifumi Kondō':
        postersGhibli(filterDataDirector(dataStudioGhibli, 'Yoshifumi Kondō'));
        break;
      case 'Hiroyuki Morita':
        postersGhibli(filterDataDirector(dataStudioGhibli, 'Hiroyuki Morita'));
        break;
      case 'Gorō Miyazaki':
        postersGhibli(filterDataDirector(dataStudioGhibli, 'Gorō Miyazaki'));
        break;
      case 'Hiromasa Yonebayashi':
        postersGhibli(filterDataDirector(dataStudioGhibli, 'Hiromasa Yonebayashi'));
        break;
      }
    });

    //Filtrar por Productor
    const createProducerList = (ghibliData) => {
      arrayProductores(ghibliData).forEach((producer) => {
        const opcionProductor = document.createElement('option');
        opcionProductor.value = producer;
        opcionProductor.textContent = producer;
        filterProducer.add(opcionProductor);
      });
    };
    createProducerList(dataStudioGhibli);

    filterProducer.addEventListener('change', () => {
      switch (filterProducer.value) {
      case 'Isao Takahata':
        postersGhibli(filterDataProducer(dataStudioGhibli, 'Isao Takahata'));
        break;
      case 'Hayao Miyazaki':
        postersGhibli(filterDataProducer(dataStudioGhibli, 'Hayao Miyazaki'));
        break;
      case 'Toru Hara':
        postersGhibli(filterDataProducer(dataStudioGhibli, 'Toru Hara'));
        break;
      case 'Toshio Suzuki':
        postersGhibli(filterDataProducer(dataStudioGhibli, 'Toshio Suzuki'));
        break;
      case 'Yoshiaki Nishimura':
        postersGhibli(filterDataProducer(dataStudioGhibli, 'Yoshiaki Nishimura'));
        break;
      }
    });

    //Ordenar las peliculas de manera Ascendente y Descendente
    const createYearList = () => {
      const upYear = document.createElement('option');
      upYear.value = 'Ascendente';
      upYear.textContent = 'Ascendente';
      filterYear.add(upYear);

      const downYear = document.createElement('option');
      downYear.value = 'Descendente';
      downYear.textContent = 'Descendente';
      filterYear.add(downYear);
    };
    createYearList();

    filterYear.addEventListener('change', () => {
      if (filterYear.value === 'Ascendente') {
        const filterAyear = filterDataYearAsc(dataStudioGhibli)
        postersGhibli(filterAyear)
      }
      if (filterYear.value === 'Descendente') {
        const filterDyear = filterDataYearDesc(dataStudioGhibli)
        postersGhibli(filterDyear)
      }
    });
  });
