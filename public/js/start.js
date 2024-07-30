let webframe = document.getElementById('web');
let searchbar = document.getElementById('search');
webframe.src = "https://minecraftgoldfish3.github.io"; 
webframe.setAttribute("open", "true");
let done = 0;

function redirect(href) {
    search.value = 'local://' + href;
}

if (done == 0) {
    if (true /* searchbar.value.includes('local://welcome') */) {
        webframe.src = "/html/welcome.html"; 
	done = 1;
	searchbar.value = "";
    }
}

var newValue = '';
searchbar.addEventListener("keydown", async function (e) {
    newValue = searchbar.value;
    console.log(newValue);
    if (e.key == "Enter" && window.chemicalLoaded && e.target.value) {
	console.log(newValue);
	if (newValue == 'local://welcome') {
	    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
            webframe.src = "/html/welcome.html"; 
	} else if (newValue == 'local://home') {
	    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
            webframe.src = "/html/home.html"; 
	} else if (newValue == 'local://games') {
	    var wait = await window.chemicalEncode('https://assets.illuminating.us/minecraftgoldfish3/projects/projects.html');
            webframe.src = wait; 
	} else if (newValue == 'local://apps') {
	    var wait = await window.chemicalEncode('https://assets.illuminating.us/minecraftgoldfish3/projects/apps.html');
            webframe.src = wait; 
	} else if (newValue == 'local://cheats') {
	    var wait = await window.chemicalEncode('https://assets.illuminating.us/minecraftgoldfish3/projects/cheats.html');
            webframe.src = wait; 
	} else if (newValue == 'local://credits') {
	    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
            webframe.src = "/html/credits.html"; 
	} else if (newValue == 'local://updates' || newValue == 'local://changelog') {
	    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
            webframe.src = "/html/updates.html"; 
	} else if (newValue == 'local://settings') {
	    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
            webframe.src = "/html/settings.html"; 
	} else if (newValue == 'local://review') {
	    var wait = await window.chemicalEncode('https://projects.illuminating.us/review.html');
            webframe.src = wait; 
	} else if (newValue == 'local://list') {
	    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
            webframe.src = "/html/list.html"; 
	} else if (newValue.includes('https://')) {
	    var wait = await window.chemicalEncode(newValue);
	    webframe.src = wait;
	} else {
	    var wait = await window.chemicalEncode(`https://www.google.com/search?q=${newValue}`);
	    console.log(wait);
	    webframe.src = wait;
	}
    }
})

async function home() {
    searchbar.value = 'local://home';
    var wait = await window.chemicalEncode('https://minecraftgoldfish3.github.io');
    webframe.src = "/html/home.html";
    console.log('home');
}


