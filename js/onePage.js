var Crow = function (group, prev, next, img, name, status) {
    this.img = img;
    this.name = name;
    this.status = status;
    this.group = group;
    this.prev = prev;
    this.next = next;
    return this
}

var crows = [
    new Crow('#crows', 11, 1, "img/crow_banners/IMG_5180_a.jpg", "Crow and the Thirteen Moons", "status00"),
    new Crow('#crows', 0, 2, "img/crow_banners/IMG_5185_a.jpg", "Crow Carries the Sun", "status01"),
    new Crow('#crows', 1, 3, "img/crow_banners/IMG_5187_a.jpg", "Crow Carries the Waterlily", "status02"),
    new Crow('#crows', 2, 4, "img/crow_banners/IMG_5194_a.jpg", "Crow Moon Rising", "status03"),
    new Crow('#crows', 3, 5, "img/crow_banners/IMG_5198_a.jpg", "Which Way Crow?", "status04"),
    new Crow('#crows', 4, 6, "img/crow_banners/IMG_5204_a.jpg", "Crow Casts a Glance", "status05"),
    new Crow('#crows', 5, 7, "img/crow_banners/IMG_5211_a.jpg", "Crazy Old Crow", "status06"),
    new Crow('#crows', 6, 8, "img/crow_banners/IMG_5216_a.jpg", "Crow in the Clouds", "status07"),
    new Crow('#crows', 7, 9, "img/crow_banners/IMG_5226_a.jpg", "Crow Greets the Saffron Goddess", "status08"),
    new Crow('#crows', 8, 10, "img/crow_banners/IMG_5231_a.jpg", "Crow Calls the Directions", "status09"),
    new Crow('#crows', 9, 11, "img/crow_banners/IMG_5247_a.jpg", "Counting Crows", "status10"),
    new Crow('#crows', 10, 0, "img/crow_banners/IMG_5250_a.jpg", "Crow and the Bone of Contention", "status11")
]

var crow_template;
$.get("html/one_img.htm").done(function (data) {
    crow_template = _.template(data);
});


var gw_quilts = [
    new Crow('#gw_quilt', 4, 1, "img/gw_quilts/Good-Will-Ninepatch-Quilt.jpg", "Good Will Ninepatch Quilt", "status00"),
    new Crow('#gw_quilt', 0, 2, "img/gw_quilts/Good-Will-Quilt-from-Ohio.jpg", "Good Will Quilt from Ohio", "status01"),
    new Crow('#gw_quilt', 1, 3, "img/gw_quilts/Good-Will-Quilt-with-Button.jpg", "Good Will Quilt with Button", "status02"),
    new Crow('#gw_quilt', 2, 4, "img/gw_quilts/Good-Will-Quilt-with-Four-Log-Cabins.jpg", "Good Will Quilt with Four Log Cabins", "status03"),
    new Crow('#gw_quilt', 3, 0, "img/gw_quilts/Good-Will-Quilt-with-Three-Log-Cabins.jpg", "Good Will Quilt with Three Log Cabins", "status04")
]