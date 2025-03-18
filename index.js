const { post } = require("server/router")

const ramenMenu = document.getElementById("ramen-menu")
const detailImage =document.getElementById("detail-image")
const ratingDisplay = document.getElementById('Rating-display')
const commentDisplay = document.getElementById('Comment-display')
const newRamenForm = document.getElementById('new-ramen-form')


    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
     ];
    post("/ramens"), async (req, res) => {
     const newRamen = req.body;
       newRamen.id = ramens
        .map((ramen) => ramen.id)
        .reduce((max, value) => (value > max ? value : max), 0) + 1;
        ramens.push(newRamen);
        res.json(newRamen);
    }
     const ramenData = {
        'gyukotsu': { rating: '7/10', comment: 'Rich beef broth, very satisfying' },
        'kojiro': { rating: '10/10', comment: 'Spicy and flavorful' },
        'naruto': { rating: '10/10', comment: 'My absolute favorite' },
        'nirvana': { rating: '5/10', comment: 'Unique taste, worth trying' },
        'shoyu': { rating: '6/10', comment: 'Classic soy sauce perfection' }
    };
    
    ramenMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const ramenName = e.target.alt.toLowerCase(); 
            const imageSrc = e.target.src;
            
            detailImage.src = imageSrc;
            detailImage.alt = e.target.alt;
    
            if (ramenData[ramenName]) {
                ratingDisplay.textContent = ramenData[ramenName].rating;
                commentDisplay.textContent = ramenData[ramenName].comment;
            } else {
                ratingDisplay.textContent = 'N/A';
                commentDisplay.textContent = 'No comment';
            }
        }
    });
    
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('new-name').value.toLowerCase();
        const restaurant = document.getElementById('new-restaurant').value;
        const rating = document.getElementById('new-rating').value + '/10';
        const comment = document.getElementById('new-comment').value;
        const imageUrl = document.getElementById('new-image').value;
        
        ramenData[name] = { rating, comment };
        
        const newRamenImg = document.createElement('img');
        newRamenImg.src = imageUrl; 
        newRamenImg.alt = `${name} ramen`;
        ramenMenu.appendChild(newRamenImg);
        
        newRamenForm.reset();
        
        alert(`Added ${name} ramen successfully!`);
    });
     