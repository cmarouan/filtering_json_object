/*
    we get vimeo from /data/feed.js
*/
const data = vimeo.data; 

const calculDate = (date) => { 
    let DifMs = Date.now() - date;
    let newDate = new Date(DifMs);
    return Math.abs(newDate.getUTCFullYear() - 1970);
}
/*
    Creating a new object contain only valid data
*/
let movies = data.map(d => {
    const movieData = {
        name: d.name,
        description: d.description,
        created_time: calculDate(new Date(d.created_time)),
        user_name: d.user.name,
        likes: d.metadata.connections.likes.total,
        comments: d.metadata.connections.comments.total,
        views: d.stats.plays,
        embed: d.embed.html,
        pics: 
            d.user.pictures ? 
                d.user.pictures.sizes[0].link :
                'https://i.picsum.photos/id/432/200/200.jpg'
    }
    return movieData;
});
render_to_dom(movies); //imported from ./render.js
const backup = movies;


const filter_by_desc = (desc) => {
    if (desc.length > 0) 
        movies = movies.filter(mv => 
                mv.description && mv.description.includes(desc) 
                ? true  : false
        );
}

const filter_by_likes = (checkBox, e) => {
    if (checkBox.checked) {
        let likes = e.options[e.selectedIndex].value;
        movies = movies.filter(movie => movie.likes >= likes);
    }
}

/*
    Filtering
    Rendering
*/
const apply_filters = () => {
    let input_text = document.getElementById("desc_content").value;
    let e = document.getElementById("likes_nb");
    let checkBox = document.getElementById("active_likes");

    movies = backup;
    filter_by_desc(input_text);
    filter_by_likes(checkBox, e);
    render_to_dom(movies); //imported from ./render.js
}

const change_value = () => {
    let e = document.getElementById("likes_nb");
    let checkBox = document.getElementById("active_likes");
    document.getElementById('tools_header').innerHTML = `USERS THAT HAVE MORE THAN ${e.options[e.selectedIndex].value} LIKES`;
    if (checkBox.checked)
        apply_filters();
}
