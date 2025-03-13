const food = [
    {
        name: "Pizza",
        images: "media/pizza.jpg",
        rating: 1000,
    },

    {
        name: "Burger",
        images: "media/burger.jpg",
        rating: 1000,
    },

    {
        name: "Hotdog",
        images: "media/hotdog.jpg",
        rating: 1000,
    },

    {
        name: "Rullekebab",
        images: "media/rullekebab.jpg",
        rating: 1000,
    },

    {
        name: "Sandwich",
        images: "media/sandwich.jpg",
        rating: 1000,
    },
    
    {
        name: "Taco",
        images: "media/taco.jpg",
        rating: 1000,
    },

    {
        name: "Pita",
        images: "media/pita.jpg",
        rating: 1000,
    },
    {
        name: "Sushi",
        images: "media/sushi.jpg",
        rating: 1000,
    },
    {
        name: "Fried Chicken",
        images: "media/friedchicken.jpg",
        rating: 1000,
    },
    {
        name: "Hot Wings",
        images: "media/hotwings.webp",
        rating: 1000,
    },
    {
        name: "Pommes Frites",
        images: "media/fries.jpg",
        rating: 1000,
    },
    {
        name: "Burrito",
        images: "media/burrito.jpg",
        rating: 1000,
    },
    {
        name: "Stir Fry",
        images: "media/stirfry.jpg",
        rating: 1000,
    },
    {
        name: "Carbonara",
        images: "media/carbonara.jpg",
        rating: 1000,
    },
    {
        name: "Steak",
        images: "media/steak.jpeg",
        rating: 1000,
    },
]


const scoreboard = document.getElementById("scoreboard");
const toggleScoreboardBtn = document.getElementById("toggleScoreboard");
const scoreboardContainer = document.getElementById("scoreboardOpen");

function updateScoreboard() {
    // Sorter listen baseret på rating
    let sortedFood = [...food].sort((a, b) => b.rating - a.rating);
    
    // Opdater scoreboard HTML
    scoreboard.innerHTML = `<section class="scoreboard__header">
                                <h2 class="scoreboard__title">Rankering</h2>
                                <button class="closeScoreboard" onclick="toggleScoreboard()">
                                    X
                                </button>
                            <section>`;
    sortedFood.forEach((item, index) => {
        scoreboard.innerHTML += `   <section class="scoreboard__item">
                                        <section class="scoreboard__id">
                                            <p class="scoreboard__rank">${index + 1}.</p>
                                            <p class="scoreboard__name">${item.name}</p>
                                        </section>
                                        <p> ${item.rating} points</p>
                                    </section`;
    });
}

// Funktion til at vise/skjule scoreboard
function toggleScoreboard() {
    if (scoreboard.style.display === "none") {
        scoreboard.style.display = "block";
        toggleScoreboardBtn.innerText = "Skjul Rankering";
        scoreboardContainer.classList.add("scoreboard--open");
        toggleScoreboardBtn.classList.add("scoreboard__button--open");
        updateScoreboard(); // Opdater når det vises
    } else {
        scoreboard.style.display = "none";
        toggleScoreboardBtn.innerText = "Vis Rankering";
        scoreboardContainer.classList.remove("scoreboard--open");
        toggleScoreboardBtn.classList.remove("scoreboard__button--open");
    }
}

// Event listener til knappen
toggleScoreboardBtn.addEventListener("click", toggleScoreboard);


const leftVote = document.getElementById("leftVote")
const rightVote = document.getElementById("rightVote")


const leftImage = document.getElementById("leftImage")
const rightImage = document.getElementById("rightImage")

const leftTitle = document.getElementById("leftTitle")
const rightTitle = document.getElementById("rightTitle")

let itemIndexLeft = 2
let itemIndexRight = 1

function nextCompare(direction) {
    
    /* Opdaterer rating større rating gevinst til underdog */
    if (direction === "left") 
        {
        if (food[itemIndexLeft].rating < food[itemIndexRight].rating - 500)   
            {
                food[itemIndexLeft].rating = food[itemIndexLeft].rating + 200
                food[itemIndexRight].rating = food[itemIndexRight].rating - 200
            }
        else    
            {
                food[itemIndexLeft].rating = food[itemIndexLeft].rating + 100
                food[itemIndexRight].rating = food[itemIndexRight].rating - 100
            }
    }
    else    
        {
        if (food[itemIndexRight].rating < food[itemIndexLeft].rating - 500)   
            {
                food[itemIndexRight].rating = food[itemIndexRight].rating + 200
                food[itemIndexLeft].rating = food[itemIndexLeft].rating - 200
            }
        else    
            {
                food[itemIndexRight].rating = food[itemIndexRight].rating + 100
                food[itemIndexLeft].rating = food[itemIndexLeft].rating - 100
            }
    }

    /* vælger tilfældige nye madvarer at sammenligne*/

    itemIndexLeft = Math.floor(Math.random()*food.length)
    itemIndexRight = Math.floor(Math.random()*food.length)
    if (itemIndexLeft === itemIndexRight) {
        nextCompare(direction)
    }
    else    {
        leftImage.src = food[itemIndexLeft].images;
        rightImage.src = food[itemIndexRight].images;
    }
    leftTitle.innerText = food[itemIndexLeft].name
    rightTitle.innerText = food[itemIndexRight].name

    updateScoreboard();

    }

    nextCompare()

    console.log(Math.abs(food[itemIndexLeft].rating - food[itemIndexRight].rating))
    

