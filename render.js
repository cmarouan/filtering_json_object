/*
    All about rendering to dom
    params : 
        allMovies : object of movies
*/

const render_to_dom = (allMovies) => {
    let dom = allMovies.map(movie => {
        let card = `
            <div class="movie_card">
                <div class="header_card">
                    <div class="img_card">
                        <img class="logo_top" src="${movie.pics}" alt="images_header">
                    </div>
                    <div class="name_date">
                        <div>
                            <span class="top_tit">${movie.user_name}</span>
                            <span class="date_movie">${movie.created_time} YEARS AGO</span>
                        </div>
                        <div class="movie_name">
                            ${movie.name}
                        </div>
                    </div>
                </div>
                <div class="content_card">
                    <div class="description_card">
                        ${movie.description}
                    </div>
                    <div class="video_card">
                        ${movie.embed}
                    </div>
                </div>
                <div class="footer_card">
                    <div class="view">
                        <div>${movie.views}</div>
                        <div><img class="icon" src="./images/eye.png" alt="likes"/></div>
                    </div>
                    <div class="likes">
                        <div>${movie.likes}</div>
                        <div><img class="icon" src="./images/heart.png" alt="likes"/></div>
                    </div>
                    <div class="comments">
                        <div>${movie.comments}</div>
                        <div><img class="icon" src="./images/comment.png" alt="likes"/></div>
                    </div>
                </div>
            </div>
        `
        return card;
    });
    document.getElementById('all_movies').innerHTML = dom.join('');
}
