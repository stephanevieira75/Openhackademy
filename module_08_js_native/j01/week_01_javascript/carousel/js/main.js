// SlideElements object
var SlideElements = {
    elementsContainer: [
        // 0
        {
            title: "Hello",
            image: 'https://i.picsum.photos/id/200/900/500.jpg'
        },
        // 1
        {
            title: "Salut",
            image: 'https://i.picsum.photos/id/210/900/500.jpg'
        },
        // 2
        {
            title: "Buenos dias",
            image: 'https://i.picsum.photos/id/215/900/500.jpg'
        },
        // 3
        {
            title: "Ahi",
            image: 'https://i.picsum.photos/id/220/900/500.jpg'
        },
        // 4
        {
            title: "Erzegzeg",
            image: 'https://i.picsum.photos/id/225/900/500.jpg'
        },
        // 5
        {
            title: "Euuuh",
            image: 'https://i.picsum.photos/id/230/900/500.jpg'
        },
        // 6
        {
            title: "okay",
            image: 'https://i.picsum.photos/id/235/900/500.jpg'
        },
        // 7
        {
            title: "dump",
            image: 'https://i.picsum.photos/id/240/900/500.jpg'
        }
    ]
}

// Array object getters
var EleContainer = SlideElements.elementsContainer;

// Html getters
var carouselContainer = document.getElementById('carousel-container');
var div = document.getElementById('carousel-item');
var h1 = document.getElementById('title');
var img = document.getElementById('img');

// Counter
var i = 0;

// If it's the first element of eleContainer[0]
if(i === 0)
{
    h1.innerHTML = EleContainer[0].title;
    img.src = EleContainer[0].image;
    console.log("EleContainer[" + i + "]")
    i++;
}

function previousImage()
{
    if(i > 0)
    {
        i--;
        h1.innerHTML = (EleContainer[i].title);
        img.src = EleContainer[i].image;
        //console.log("EleContainer[" + i + "] ")

    }
    else
        return i = EleContainer.length;
}

function nextImage()
{
    if(i < EleContainer.length)
    {
        i++;
        h1.innerHTML = (EleContainer[i].title);
        img.src = EleContainer[i].image;
        //console.log("EleContainer[" + i + "] ")
    }
    else
        return i = 0;
}