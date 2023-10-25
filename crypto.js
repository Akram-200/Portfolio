const firstJS = document.querySelector(".first-js");
const finalBoss = document.querySelector(".final-boss")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const third = document.querySelector(".third")
const four = document.querySelector(".four")
const five = document.querySelector(".five")


fetch("https://api.coingecko.com/api/v3/coins/")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < 4; i++) {
      const classify = data[i];

      const oneImg = document.createElement("img");
      oneImg.className = "first-img";
      oneImg.src = classify.image.large;

      const aa = document.createElement("p");
      aa.className = "aa";
      aa.textContent = `${classify.name}`;

      const ab = document.createElement("p");
      ab.className = "ab";
      ab.textContent = `${classify.market_data.price_change_percentage_24h}`;

      const num = document.createElement("p");
      num.className = "num";
      num.textContent = `$ ${classify.market_data.current_price.usd}`;

      const aaab = document.createElement("div");
      aaab.className = "aaab";
    
      aaab.appendChild(aa);
      aaab.appendChild(ab);

      if (ab.textContent[0] === "-") {
        ab.style.color = "red";
      } else {
        ab.style.color = "#0ecb81";
      }

      let stockAB = "";

      for (let i = 0; i < ab.textContent.length; i++) {
        stockAB += ab.textContent[i];
        if (ab.textContent[i] === ".") {
          stockAB += ab.textContent[i + 1];
          stockAB += ab.textContent[i + 2];
          i = ab.textContent.length;
        }
      }

      ab.textContent = `${stockAB} %`;

      const coin = document.createElement("div");
      coin.className = "one";
      coin.appendChild(oneImg);
      coin.appendChild(aaab);
      coin.appendChild(num);
      firstJS.appendChild(coin);
    }


    function clearCoins() {
      const coins = document.querySelector(".theBoss");
      if (coins) {
        coins.innerHTML = "";
      }
      if (finalBoss) {
        finalBoss.innerHTML = "";
      }
    }

    buttons(0,10)
    function buttons(a, z){
      clearCoins();

      for (let i = a; i < z; i++) {
        const classify = data[i];
  
        const imgBoss = document.createElement("img");
        imgBoss.className = "imgBoss";
        imgBoss.src = classify.image.large;
  
        const nameBoss = document.createElement("p");
        nameBoss.className = "nameBoss";
        nameBoss.textContent = `${classify.name}`;
  
        const priceBoss = document.createElement("p");
        priceBoss.className = "priceBoss";
        priceBoss.textContent = `$ ${classify.market_data.current_price.usd}`;
  
        const h24 = document.createElement("p");
        h24.className = "h24";
        h24.textContent = `${classify.market_data.price_change_percentage_24h} %`;
  
        if (h24.textContent[0] === "-") {
          h24.style.color = "red";
        } else {
          h24.style.color = "#0ecb81";
        }
  
        const marketCup = document.createElement("p");
        marketCup.className = "marketCup";
        marketCup.textContent = `$ ${classify.market_data.market_cap.usd}`
        
        const coins = document.createElement("div");
        coins.className = "theBoss";

        const names = document.createElement("div");
        names.className = "names";

        names.appendChild(imgBoss);
        names.appendChild(nameBoss);
        coins.appendChild(names);
        coins.appendChild(priceBoss);
        coins.appendChild(h24);
        coins.appendChild(marketCup);
        finalBoss.appendChild(coins);
    }
    }

    first.addEventListener("click", () => {
      buttons(0,10)
    })
    
    second.addEventListener("click", () => {
      buttons(10,20)
    })

    third.addEventListener("click", () => {
      buttons(20,30)
    })

    four.addEventListener("click", () => {
      buttons(30,40)
    })

    five.addEventListener("click", () => {
      buttons(40,50)
    })
  });


  window.addEventListener('scroll', function () {
    const topBar = document.querySelector('.top-bar');
    const chooseUs = document.querySelector('.one');
    const topBarHeight = topBar.offsetHeight;
    const chooseUsTop = chooseUs.offsetTop; // Use offsetTop to get the top position of chooseUs
    const scrollY = window.scrollY || window.pageYOffset;
  
    // Check if the top of the chooseUs section is within the viewport
    if (scrollY >= chooseUsTop - topBarHeight) {
      topBar.style.backgroundColor = '#0f051d';
    } else {
      topBar.style.backgroundColor = '#130749'; // Restore the default background color
    }
  });
  
const firstBoss = document.querySelector(".first");
const secondBoss = document.querySelector(".second");
const thirdBoss = document.querySelector(".third");
const fourBoss = document.querySelector(".four");
const fiveBoss = document.querySelector(".five");

firstBoss.style.background = "linear-gradient(50deg,#2600fc,#ff00ea)";
firstBoss.style.color = "white";

firstBoss.addEventListener("click", () => {
  white()
  firstBoss.style.background = "linear-gradient(50deg,#2600fc,#ff00ea)";
  firstBoss.style.color = "white";
} )

secondBoss.addEventListener("click", () => {
  white()
  secondBoss.style.background = "linear-gradient(50deg,#2600fc,#ff00ea)";
  secondBoss.style.color = "white";
} )

thirdBoss.addEventListener("click", () => {
  white()
  thirdBoss.style.background = "linear-gradient(50deg,#2600fc,#ff00ea)";
  thirdBoss.style.color = "white";
} )

fourBoss.addEventListener("click", () => {
  white()
  fourBoss.style.background = "linear-gradient(50deg,#2600fc,#ff00ea)";
  fourBoss.style.color = "white";
} )


fiveBoss.addEventListener("click", () => {
  white()
  fiveBoss.style.background = "linear-gradient(50deg,#2600fc,#ff00ea)";
  fiveBoss.style.color = "white";
} )

function white(){
  firstBoss.style.background = "white";
  firstBoss.style.color = "black";
  secondBoss.style.background = "white";
  secondBoss.style.color = "black";
  thirdBoss.style.background = "white";
  thirdBoss.style.color = "black";
  fourBoss.style.background = "white";
  fourBoss.style.color = "black";
  fiveBoss.style.background = "white";
  fiveBoss.style.color = "black";
}

const cant = document.querySelector(".cant");
const didi = document.querySelector(".didi");
const brr = document.querySelector(".brr");
const br = document.querySelector(".br");
const brz = document.querySelector(".brz");
const bre = document.querySelector(".bre");
const fourt = document.querySelector(".fourt");

cant.addEventListener("click", () => {
  fourt.style.marginLeft = "0"
})

didi.addEventListener("click", () => {
  fourt.style.marginLeft = "100%"
})

brr.addEventListener("click", () => {
  fourt.style.marginLeft = "100%";
});

br.addEventListener("click", () => {
  fourt.style.marginLeft = "100%";
});

brz.addEventListener("click", () => {
  fourt.style.marginLeft = "100%";
});

bre.addEventListener("click", () => {
  fourt.style.marginLeft = "100%";
});
