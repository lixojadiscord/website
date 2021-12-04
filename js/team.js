/*
THIS CODE BY LWJerri#3290
*/
const boxOwners = document.getElementById("owners_list");
const boxStaff = document.getElementById("staff_list")
/*
you can use this api but if you need to create custome api check:
 https://github.com/Hadi-Koubeissi/discord-web-api
*/
const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
    {
        "id": "814233207515643974",
        "post": "Developer & Owner",
        "GHURL": "https://github.com/invalidlenni",
        "TURL": "https://twitter.com/invalidlenni"
    },
    {
        "id": "601336963424845832",
        "post": "Developer & Owner",
        "GHURL": "https://github.com/benzyYT",
        "TURL": "https://twitter.com/benzyyoutube"
    },
]

const staff = [
    {
        "id": "590423866434650113",
        "post": "Trial Staff",
        "GHURL": "https://github.com/2Lost4Github",
        "TURL": "https://twitter.com/2Lost4This1"
    }
]


for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementOwners.TURL + "' target='_blank'><button style='color: #000000;'>Twitter</button></a></div></div></div>"
            boxOwners.innerHTML += ownerList;
        });
}

for (let indexOne = 0; indexOne < staff.length; indexOne++) {
    const elementStaffs = staff[indexOne];

    $.getJSON(API + elementStaffs.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const staffList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementStaffs.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementStaffs.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementStaffs.TURL + "' target='_blank'><button style='color: #000000;'>Twitter</button></a></div></div></div>"
            boxStaff.innerHTML += staffList;
        });
}