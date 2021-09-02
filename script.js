$.ajax({
    url: "http://www.omdbapi.com/?apikey=c5302d86&s=doraemon",
    success: results => {
        const movie = results.Search;
        let cards = '';
        movie.forEach(m => {
            cards += `<div class="col-md-4 my-3">
                            <div class="card">
                                <img src="${m.Poster}" class="card-img-top">
                                <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#detail" data-movieid="${m.imdbID}">Lihat</a>
                                </div>
                            </div>
                        </div>`
            
        });

        $('.movie-container').html(cards);

        // Ketika tombol Lihat di klik
        $('.detail-button').on('click', function(){
            console.log($(this).data('movieid'))
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=c5302d86&i=' + $(this).data('movieid'),
                success: m => {
                    const movieDetail = `<div class="container-fluid">
                                            <div class="row">
                                            <div class="col-md-3">
                                                <img src="${m.Poster}" class="img-fluid">
                                            </div>
                                            <div class="col-md">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><strong>Judul: </strong> ${m.Title} ${m.Year}</li>
                                                    <li class="list-group-item"><strong>Released: </strong>${m.Released}</li>
                                                    <li class="list-group-item"><strong>Genre: </strong>${m.Genre}</li>
                                                    <li class="list-group-item"><strong>Actors: </strong> ${m.Actors}</li>
                                                    <li class="list-group-item"><strong>Plot: </strong> <br> ${m.Plot}</li>
                                                    </ul>
                                            </div>
                                            </div>
                                        </div>`;
                    $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            })
        })
    },
    error: (e) => {
        console.log(e.responseText);
    }
})