var Crow = function (img, name, status) {
    this.img = img;
    this.name = name;
    this.status = status;
    return this
}

var crows = [
    new Crow("img/crow_banners/IMG_5180_a.jpg", "Crow and the Thirteen Moons", "status00"),
    new Crow("img/crow_banners/IMG_5185_a.jpg", "Crow Carries the Sun", "status01"),
    new Crow("img/crow_banners/IMG_5187_a.jpg", "Crow Carries the Waterlily", "status02"),
    new Crow("img/crow_banners/IMG_5194_a.jpg", "Crow Moon Rising", "status03"),
    new Crow("img/crow_banners/IMG_5198_a.jpg", "Which Way Crow?", "status04"),
    new Crow("img/crow_banners/IMG_5204_a.jpg", "Crow Casts a Glance", "status05"),
    new Crow("img/crow_banners/IMG_5211_a.jpg", "Crazy Old Crow", "status06"),
    new Crow("img/crow_banners/IMG_5216_a.jpg", "Crow in the Clouds", "status07"),
    new Crow("img/crow_banners/IMG_5226_a.jpg", "Crow Greets the Saffron Goddess", "status08"),
    new Crow("img/crow_banners/IMG_5231_a.jpg", "Crow Calls the Directions", "status09"),
    new Crow("img/crow_banners/IMG_5247_a.jpg", "Counting Crows", "status10"),
    new Crow("img/crow_banners/IMG_5250_a.jpg", "Crow and the Bone of Contention", "status11")
]

var crow_template;
$.get("html/crows/crow_one.htm").done(function (data) {
    crow_template = _.template(data);
});
