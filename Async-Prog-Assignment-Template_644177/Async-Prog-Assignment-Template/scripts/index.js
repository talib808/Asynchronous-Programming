var images = ["https://i.pinimg.com/originals/4e/cb/bd/4ecbbdadc45ebd5686853e4ca41d59a3.jpg",
        "https://th.bing.com/th/id/OIP.WrXG9G0jfg0-XQBcCV02AAHaLH?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.gjIsgVxqtJgTrvpHvUMp_wHaK-?pid=ImgDet&rs=1",
        "https://i1.wp.com/cloutnews.com/wp-content/uploads/2020/02/Tiger-Shroff%E2%80%99s-%E2%80%98Heropanti-2%E2%80%99-First-poster-out-1.jpg?fit=1000%2C563&ssl=1"];

    var i = 0;
    function slide() {
        var image = document.getElementById("pic");

        image.src = images[i];
        i++;
        if (i >= images.length) {
            i = 0;
        }
    }
    setInterval("slide()", 1000);

    var movies = [{ name: "spider man", releaseDate: "2005", imdbRating: "7.5", imageLink: "https://th.bing.com/th/id/OIP.gjIsgVxqtJgTrvpHvUMp_wHaK-?pid=ImgDet&rs=1" },
    { name: "Venom", releaseDate: "2006", imdbRating: "7.8", imageLink: "https://th.bing.com/th/id/OIP.wHOhT1cDMvj6iEsOdCDI2gHaKl?pid=ImgDet&rs=1" },
    { name: "batman", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://th.bing.com/th/id/OIP.NXJnQoZRgycPS4BY_SElPQHaLH?pid=ImgDet&rs=1" },
    { name: "superman", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://i5.walmartimages.com/asr/fac07afc-6449-4e9d-869f-3d89287081b2_1.9eb79c8b641b1cdb360f941199dc6ca3.jpeg" },
    { name: "thor", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://th.bing.com/th/id/OIP.xs7pgHMFGybOHkOkZbsRAwHaK-?pid=ImgDet&rs=1" },
    { name: "ironman", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://th.bing.com/th/id/OIP.XzJG2z1CUWtOpIgR0uiJoAHaLc?pid=ImgDet&rs=1" },
    { name: "infinity war", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://th.bing.com/th/id/OIP.I5MSMxZqjAz1b6NXTEq97wHaKv?pid=ImgDet&rs=1" },
    { name: "sky fall", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://th.bing.com/th/id/OIP.GElUamRj9VzSv38pSGYkpgHaKe?pid=ImgDet&rs=1" },
    { name: "end game", releaseDate: "2007", imdbRating: "7.9", imageLink: "https://th.bing.com/th/id/OIP.YJmC1XDLcHfr_1bUATQqagHaKs?pid=ImgDet&rs=1" }]

     

    let display = document.getElementById("movieDisplay")

    movies.forEach((element) => {

        let div = document.createElement("div")
        div.setAttribute("id", "divison")

        let image = document.createElement("img")
        image.src = element.imageLink
        image.setAttribute("id", "images")
        console.log(image)

        let movieName = document.createElement("p")
        movieName.textContent = element.name;

        let releaseDate = document.createElement("p")
        releaseDate.textContent = element.releaseDate;

        let imdbRating = document.createElement("p")
        imdbRating.textContent = element.imdbRating;

        div.append(movieName, image, movieName)

        display.appendChild(div)

    });
