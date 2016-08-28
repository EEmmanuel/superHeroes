
//var md5 = require('md5');
let Crypto = require('crypto-js');
let Constants = require('superHeroes/components_app/componentes/Constantes');
    var superHeroesAPI ={


        /*Hacemos la llamada a la API de marvel*/
        getSuperHeroes(searchQuery){

        searchQuery = searchQuery.toLowerCase().trim();
        var ts=parseInt(Date.now()/1000,10);
        var tsk =ts+Constants.MARVEL_PR_KEY+Constants.MARVEL_PU_KEY;
        var hash= Crypto.MD5(tsk);

        var url=`${Constants.MARVEL_API}${Constants.MARVEL_API_CHARACTERS}?nameStartsWith=${searchQuery}&apikey=${Constants.MARVEL_PU_KEY}&ts=${ts}&hash=${hash}`;
        console.log("url getSuperHeroes: "+url);
        return fetch(url).then((res)=>res.json())
        },

        /*Conseguimos las notas del super Heroe por el id*/
        getSuperHeroesNotes(superHeroId){
            var url=`https://superhero-project.firebaseio.com/${superHeroId}.json`;
            console.log("url getSuperHeroesNotes: "+url);
            console.log("params getSuperHeroesNotes superHeroeId: "+superHeroId);
            return fetch(url).then((res) =>res.json())
        },

        /*Guardamos las notas en la BD mandamos id de super heroe y la nota*/
        createSuperHeroeNotes(superHeroeId, superNote){
            var url=`https://superhero-project.firebaseio.com/${superHeroeId}.json`;
            console.log("url createSuperHeroeNotes: "+url);
            console.log("params createSuperHeroeNotes superHeroeId: "+superHeroeId+" supernote"+superNote);
            return fetch(url , {
                method:'post',
                body: JSON.stringify(superNote)
            }).then((res)=>res.json());
        }
    }


module.exports= superHeroesAPI;