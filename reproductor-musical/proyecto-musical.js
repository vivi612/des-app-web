let canciones = [
    {
        nombre: "Hard Times",
        album: "After Laughter",
        artista: "Paramore",
        duracion: "3:02",
        imagen: "https://m.media-amazon.com/images/I/71NEqnKS2dL._UF1000,1000_QL80_.jpg",
    },
    {
        nombre: "Inner Gold",
        album: "Inner Gold",
        artista: "Lindsey Stirling, Royal & the Serpent",
        duracion: "3:56",
        imagen: "https://i1.sndcdn.com/artworks-k7AWEBCuYqC6-0-t500x500.jpg",
    },
    {
        nombre: "Espresso",
        album: "Espresso",
        artista: "Sabrina Carpenter",
        duracion: "2:55",
        imagen: "https://www.universalmusic.ca/files/2024/04/ESPRESSO.jpg",
    },
    {
        nombre: "BAMBOLEO",
        album: "'The ReVe Festival 2022' - Feel My Rhythm",
        artista: "Red Velvet",
        duracion: "3:28",
        imagen: "https://cdns-images.dzcdn.net/images/cover/05555a792b23e273b65aaf5d8c3abf3a/500x500.jpg",
    },
    {
        nombre: "Sugarcoat (NATTY Solo)",
        album: "KISS OF LIFE",
        artista: "KISS OF LIFE",
        duracion: "2:59",
        imagen: "https://image.kpopmap.com/2023/07/kiss-of-life-3-scaled.jpg",
    },
    {
        nombre: "Ditto",
        album: "Ditto",
        artista: "NewJeans",
        duracion: "3:05",
        imagen: "https://images.genius.com/081066ab40bbaf5b1eddcfaa7b5b4dd2.1000x1000x1.jpg",
    },
    {
        nombre: "Let The Light In",
        album: "Connect The Dots",
        artista: "MisterWives",
        duracion: "5:08",
        imagen: "https://upload.wikimedia.org/wikipedia/en/b/bb/Connectthedots.jpg",
    },
    {
        nombre: "Bam Yang Gang",
        album: "Bam Yang Gang",
        artista: "BIBI",
        duracion: "2:26",
        imagen: "https://cdns-images.dzcdn.net/images/cover/c352355cb0779679600d9eb81d91edfb/500x500.jpg",
    },
    {
        nombre: "Rest",
        album: "Now, Not Yet",
        artista: "half•alive, Samm Henshaw",
        duracion: "3:29",
        imagen: "https://images.genius.com/024425b1a9cd97a94ca44950e780c138.1000x1000x1.jpg",
    },
    {
        nombre: "Tiptoeing",
        album: "Tiptoeing",
        artista: "Hope Tala",
        duracion: "2:35",
        imagen: "https://cdns-images.dzcdn.net/images/cover/7150b5b599abaae88bdb220f543951cc/500x500.jpg",
    },
    {
        nombre: "Cuando me amabas",
        album: "Cuando me amabas",
        artista: "Juanpalitoschinos",
        duracion: "3:10",
        imagen: "https://bananamedia.com.mx/wp-content/uploads/2023/12/unnamed-46.jpg",
    },
    {
        nombre: "Moonlight",
        album: "Red Moon In Venus",
        artista: "Kali Uchis",
        duracion: "3:07",
        imagen: "https://m.media-amazon.com/images/I/81ov5ONwPeL._UF1000,1000_QL80_.jpg",
    },
    {
        nombre: "Bad Boy, Sad Girl",
        album: "28 Reasons - The 1st Mini Album",
        artista: "SEULGI, BE'O",
        duracion: "2:57",
        imagen: "https://lastfm.freetls.fastly.net/i/u/ar0/a3892e6075242643afe473aa7e9a6e24.jpg",
    },
    {
        nombre: "Fortnight",
        album: "The Tortured Poets Department",
        artista: "Taylor Swift, Post Malone",
        duracion: "3:48",
        imagen: "https://linkstorage.linkfire.com/medialinks/images/433c5464-2a6f-49bb-9d93-2872144eb1c6/artwork-440x440.jpg",
    },
    {
        nombre: "LEFT RIGHT",
        album: "SHOOTING STAR",
        artista: "XG",
        duracion: "3:28",
        imagen: "https://i1.sndcdn.com/artworks-SobXoROZAE1nWuHB-vzebgw-t500x500.jpg",
    },
];

//Reproducir o pausar la música
const playPause = (estado, cancion) => {
    if (estado.enReproduccion) {
        console.log("Haz pausado la reproducción");
        estado.enReproduccion = false;
    } else {
        console.log("Ahora suena: ", cancion.nombre);
        estado.enReproduccion = true;
    }
    };

    //Reproducir aleatoriamente
    const shuffle = (estado) => {
        estado.ahoraSuena = Math.floor(Math.random() * estado.canciones.lenght);
    };

    //Canción siguiente
    const next = (estado) => {
        if (estado.ahoraSuena < estado.canciones.lenght -1) {
            estado.ahoraSuena++;
        }
    };
    
    //Canción anterior
    const prev = (estado) => {
        if (estado.ahoraSuena > 0) {
            estado .ahoraSuena--;
        }
    };

    //Detener la reproducción
    const stop = (estado) => {
        console.log ("Haz detenido la reproducción");
        estado.ahoraSuena = -1;
    };
    
    //Reproducir canción especifíca
    const playSong = (estado, song) => {
        if (typeof song === "number") {
            estado.ahoraSuena = song;
        } else if (typeof song === "string") {
            const index = estado.canciones.findIndex((c) => c.nombre === song);
            if (index !== -1) {
                estado.ahoraSuena = index;
            } else {
                console.log ("Canción no encontrada");
            }
        }
    };

    //
    const songListHTML = (canciones) => {
        let html = "<ul>";
        canciones.forEach((cancion, index) => {
            html += `<li><a href="#" onclick="playSong(reproductor, '${cancion.nombre}')">${cancion.nombre}</a></li>`;
        });
        html += "</ul>";
        return html;
    };

    //Mostrar la canción
    const showSongInSite = (estado) => {
        if (estado.ahoraSuena === -1){
            return "";
        }
        const cancionActual = estado.canciones[estado.ahoraSuena];
        return `Now Playing: ${cancionActual.nombre}`;
    };

    //Incializar el reproductor
    const initReproductor = (canciones) => {
        let estado = {
            canciones: canciones,
            enReproduccion: false,
            ahoraSuena: 0,
        };

        return {
            playPause: () => playPause(estado, estado.canciones[estado.ahoraSuena]),
            shuffle: () => shuffle (estado),
            next: () => next (estado),
            prev: () => prev (estado),
            stop: () => stop (estado),
            play: () => playSong (estado, song),
            songList: () => songListHTML (estado.canciones),
            showSong: () => showSongInSite (estado),
        };
    };

    //instancia para el reproductor
    const reproductor = initReproductor(canciones);