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
        })
    },
})