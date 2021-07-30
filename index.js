// getting all the query

let toggle = document.getElementById('toggle');
let labelToggle = document.querySelector('.toggleLabel')
let options = document.querySelector('.month')
let price = document.querySelector('.priceContainer .priceValue')
let slider = document.querySelector('.slider')

let pageViews = document.querySelector('.pageView span')

// toggling price between month/year

labelToggle.onclick = function() {
    if(toggle.checked == true) {
        // change the textContent into number
        let priceContent = parseInt(price.textContent);
        // calculate annual price
        price.textContent = `${(priceContent - (priceContent * .25)) * 12}`
        // overwrite month to year
        options.textContent = '/year'
    } else {
        monthlyPrice();
        options.textContent = '/month'
    }
}

// getting the monthly prices 
slider.addEventListener('input', monthlyPrice)

function monthlyPrice() {
    if(slider.value == 1) {
        if(toggle.checked == true) {
            price.textContent = 72
            console.log(price.textContent)
        } else {
            price.textContent = 8
        }
        pageViews.textContent = '10k'
    }
    if(slider.value == 2) {
        if(toggle.checked == true) {
            price.textContent = 108
        } else {
            price.textContent = 12
        }
        pageViews.textContent = '50k'
    }
    if(slider.value == 3) {
        if(toggle.checked == true) {
            price.textContent = 144
        } else {
            price.textContent = 16
        }
        pageViews.textContent = '100k'
    }
    if(slider.value == 4) {
        if(toggle.checked == true) {
            price.textContent = 216
        } else {
            price.textContent = 24
        }
        pageViews.textContent = '500k'
    }
    if(slider.value == 5) {
        if(toggle.checked == true) {
            price.textContent = 324
        } else {
            price.textContent = 36
        }
        pageViews.textContent = '1M'
    }
}

