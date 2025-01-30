let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let month=["January","February","March","April","May","June","July","August","September","October","November","December"]
const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
let inputcountry = document.querySelector(".content-weather [type='text']");
inputcountry.value = "egypt";
let myfet = `https://api.weatherapi.com/v1/forecast.json?key=d500c688c631408eaa1144153252401&q=${sessionStorage.value}&days=3`;

function weather(url) {
fetch(url)
    .then((res) => {
        if (res.status !== 200) {
            let error = document.querySelector(".content-weather form .error");
            error.style.display = "flex";
            let out=document.querySelector(".content-weather form .error [alt='out']");
            out.addEventListener("click", function () {
                error.style.display = "none";
                
            })
        }
    return res.json()
    } 
    )
    .then((res) => {
        let location = res["location"]["localtime"];
        let hour = location.slice(11, 13);
        let time = location.slice(11);
        let secound = location.slice(14);
        let date =  res["forecast"]["forecastday"][0].date;
        let name = res["location"]["name"];
        let country = res["location"]["country"];
        let temp = res["current"]["temp_c"];
        let condition = res["current"]["condition"]["text"];
        let datetheday = new Date(date).getDate();
        let inxmonth = new Date(date).getMonth();
        let astro = res["forecast"]["forecastday"][0]["astro"];
        let dataastro=[astro["sunrise"],astro["sunset"],astro["moonrise"],astro["moonset"]]

        for (let i = 0; i < dataastro.length; i++){
            let elementastro = document.querySelector(".condition .astro");
            let keyastro = ["sunrise:", "sunset:", "moonrise:", "moonset:"];
            let div = document.createElement("div");
            
            let divtext=document.createTextNode(dataastro[i])
            let span = document.createElement("span");
            
            span.textContent = keyastro[i];
            // append data 
            div.appendChild(span);
            div.appendChild(divtext)
            elementastro.appendChild(div);
            
            
        }

        // append
        //date
        let thedate = document.querySelector(".head-part .date")
        thedate.textContent = `${datetheday} ${month[inxmonth]}`
        //country
        let thecountry = document.querySelector(".content-weather .country");
        thecountry.textContent = name;
        //temp
        let thetemp = document.querySelector(".content-weather .temp");
        thetemp.textContent = temp + String.fromCharCode(176);
        //condition weather
        let thecondition = document.querySelector(".content-weather .condition .text");
        thecondition.textContent = condition;
        // days in week
        let thedayinweek = document.querySelector(".head-part .dayinweek");
        thedayinweek.textContent = day[new Date(date).getDay()];
        
        ////img conditio and background
        let iconcondition = {
        "Sunny": "./img/sunny.png",
        "Overcast": "./img/Overcast.png",
        "Mist": "./img/mist.jpg",
        "Clear":"./img/clear2.png",
        "Light rain": "./img/Light rain1.png",
        "Partly cloudy": "./img/Partly cloudy.png",
            "Partly Cloudy": "./img/Partly cloudy.png",
        "Moderate rain": "./img/Moderate rain2.png",
            "Patchy rain nearby": "./img/Patchy rain nearby.jpg",
            "Patchy rain possible": "./img/Light\ rain.png",
        "anything":"./img/weath.png"
        }
        let keys = Object.keys(iconcondition);

        keys.forEach((ele) => {
            if (ele === condition) {
        let iconimg = document.querySelector(".condition img");
        iconimg.src = iconcondition[ele];
            } 
})
// change background
        let background = {
            "Sunny": "./img/sunny2.jpg",
            "Overcast": "./img/cloud.jpg",
            "Mist": "./img/mistback.avif",
        "Clear":"./img/clear.jpg",
        "Light rain": "./img/rann.jpg",
        "Partly cloudy": "./img/partly.jpg",
            "Partly Cloudy": "./img/partly.jpg",
        "Moderate rain": "./img/rann.jpg",
            "Patchy rain nearby": "./img/skyrain.jpg",
            "Patchy rain possible": "./img/ran.jpg",
        }
        let backkeys = Object.keys(background);
        backkeys.forEach((ele) => {
            if (ele === condition) {
                let backgroundweath = document.querySelector(".content-weather");
                backgroundweath.style.backgroundImage = `url(${background[ele]})`;
            }
        })

        let localtime = document.querySelector(".texttime");
        
        if (location.slice(11, 13) > 12) {
            localtime.textContent = `${+hour - 12}:${secound} PM`;//time>12 ==>pm
        } else if (hour == 00) {
            localtime.textContent = `${+hour + 12}:${+secound} AM`;//time == 24 ==>12 am
        } else if (hour == 12) {
            localtime.textContent = `${time} PM`; //time == 12 ==>pm
        } else {

            localtime.textContent = `${time} AM`;// time ==> < 12 am
        }
        return res
    }).then((res) => {
        let date = res["forecast"]["forecastday"];

        for (let i = 1; i < date.length; i++){
            let nextday = document.querySelector(".nextday");
            let nameday = document.createElement("h3");
            let tempone = document.createElement("div");
            let temptwo = document.createElement("div");
            let iconday = document.createElement("img");
            let conditionday = document.createElement("p");
            let temp = date[i]["day"];

            iconday.src = "./img/icon4.png";
            tempone.classList.add("tempone");
            temptwo.classList.add("temptwo");
            nameday.textContent = day[new Date(date[i].date).getDay()];
            conditionday.classList.add("conditionday");
            tempone.textContent = temp["maxtemp_c"] + String.fromCharCode(176);
            temptwo.textContent = temp["mintemp_c"] + String.fromCharCode(176);
            conditionday.textContent = temp["condition"]["text"];

            //append
            nextday.appendChild(nameday);
            nextday.appendChild(iconday);
            nextday.appendChild(tempone);
            nextday.appendChild(temptwo);
            nextday.appendChild(conditionday);
            inputcountry.value = "";
                        }
    }).catch((er) => {
        sessionStorage.fetch = "https://api.weatherapi.com/v1/forecast.json?key=d500c688c631408eaa1144153252401&q=egypt&days=3";

    });

}


window.onload = function () {
    if (sessionStorage.fetch === undefined || sessionStorage.length === 0) {
        weather("https://api.weatherapi.com/v1/forecast.json?key=d500c688c631408eaa1144153252401&q=egypt&days=3")
    } else {
        weather(sessionStorage.fetch)
    }
}



    //click list
let par =document.querySelector(".icon-par")
let list=document.querySelector(".list")
par.addEventListener("click", function () {
    list.classList.toggle("hidde");
    par.classList.toggle("hidde-border");
});

// // add list country
let pu = [];
let listcountry = document.querySelector(".listcountry");
inputcountry.addEventListener("input", function(){
    pu = [];
    listcountry.textContent = "";
    allCountries.forEach((ele) => {
        if (inputcountry.value !== "") {
            if (ele.startsWith(`${inputcountry.value[0].toUpperCase()}${inputcountry.value.slice(1)}`) || ele.startsWith(`${inputcountry.value[0].toLowerCase()}${inputcountry.value.slice(1)}`)) {
                pu.push(ele);
            }
        } else (
            listcountry.style.display = "none"
        )
    })

    for (let i = 0; i < pu.length; i++){
        let listcountry = document.querySelector(".listcountry");
    let thelist = document.createElement("div");
    thelist.classList.add("thelist");
    let text = document.createElement("div");
    text.classList.add("text")
        text.textContent = pu[i];
    let right = document.createElement("div");
    right.classList.add("right");
    //append
    listcountry.style.display = "block";
    thelist.appendChild(text);
    thelist.appendChild(right);
    listcountry.appendChild(thelist)
    }
    if(pu.length === 0){
        listcountry.innerHTML = "<div>not found country</div>";
    }
    let chooes = document.querySelectorAll(".thelist");
    if (document.querySelectorAll(".thelist")) {
        chooes.forEach((element) => {
            element.addEventListener("click", function (e) {
                inputcountry.value = e.target.textContent;
                sessionStorage.value = inputcountry.value;
                myfet = `https://api.weatherapi.com/v1/forecast.json?key=d500c688c631408eaa1144153252401&q=${sessionStorage.value}&days=3`;
                sessionStorage.fetch = myfet;
                let daynext = document.querySelector(".nextday");
                daynext.textContent = "";
                let astro = document.querySelector(".condition .astro");
                astro.textContent = "";
                weather(sessionStorage.fetch);
                
                let listcount = document.querySelector(".listcountry");
                listcount.style.display = "none";
                
            })
        })
    }
});


// click submit
let btn = document.querySelector(".content-weather form input[type='submit']");

btn.onclick = function (e) {
    e.preventDefault()
    if (inputcountry.value !== "") {
        sessionStorage.value = inputcountry.value;
        myfet = `https://api.weatherapi.com/v1/forecast.json?key=d500c688c631408eaa1144153252401&q=${sessionStorage.value}&days=3`;
                sessionStorage.fetch = myfet;
                let daynext = document.querySelector(".nextday");
                daynext.textContent = "";
                let astro = document.querySelector(".condition .astro");
                astro.textContent = "";
                weather(sessionStorage.fetch);
                
                let listcount = document.querySelector(".listcountry");
                listcount.style.display = "none";
        
    }
}






