var Crow = function (group, prev, next, img, name, madeOf, size, year, status) {
    this.group = group;
    this.prev = prev;
    this.next = next;
    this.img = img;
    this.name = name;
    this.madeOf = madeOf;
    this.size = size;
    this.year = year;
    this.status = status;

    return this
}

var crows = [
    new Crow('#crows', 11, 1, "img/crow_banners/IMG_5180_a.jpg", "Crow and the Thirteen Moons", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 0, 2, "img/crow_banners/IMG_5185_a.jpg", "Crow Carries the Sun", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 1, 3, "img/crow_banners/IMG_5187_a.jpg", "Crow Carries the Waterlily", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 2, 4, "img/crow_banners/IMG_5194_a.jpg", "Crow Moon Rising", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 3, 5, "img/crow_banners/IMG_5198_a.jpg", "Which Way Crow?", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 4, 6, "img/crow_banners/IMG_5204_a.jpg", "Crow Casts a Glance", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 5, 7, "img/crow_banners/IMG_5211_a.jpg", "Crazy Old Crow", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 6, 8, "img/crow_banners/IMG_5216_a.jpg", "Crow in the Clouds", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 7, 9, "img/crow_banners/IMG_5226_a.jpg", "Crow Greets the Saffron Goddess", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 8, 10, "img/crow_banners/IMG_5231_a.jpg", "Crow Calls the Directions", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 9, 11, "img/crow_banners/IMG_5247_a.jpg", "Counting Crows", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crows', 10, 0, "img/crow_banners/IMG_5250_a.jpg", "Crow and the Bone of Contention", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale")
];

var crow_template;
$.get("html/one_img.htm").done(function (data) {
    crow_template = _.template(data);
});

var gw_quilt_images = [
    "img/gw_quilts/Good-Will-Ninepatch-Quilt.jpg",
    "img/gw_quilts/Good-Will-Quilt-from-Ohio.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Button.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Four-Log-Cabins.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Three-Log-Cabins.jpg"
]

var gw_quilts = [
    new Crow('#gw_quilt', 4, 1, gw_quilt_images[0], "Good Will Ninepatch Quilt", 'Cotton Cloth', '50" w x 46" h', 'year', "status00"),
    new Crow('#gw_quilt', 0, 2, gw_quilt_images[1], "Good Will Quilt from Ohio", 'Cotton Cloth', '33" w x 35" h', 'year', "status01"),
    new Crow('#gw_quilt', 1, 3, gw_quilt_images[2], "Good Will Quilt with Button", 'Cotton Cloth', '19" w x 24" h', 'year', "status02"),
    new Crow('#gw_quilt', 2, 4, gw_quilt_images[3], "Good Will Quilt with Four Log Cabins", 'Cotton Cloth', '35" w x 37" h', 'year', "status03"),
    new Crow('#gw_quilt', 3, 0, gw_quilt_images[4], "Good Will Quilt with Three Log Cabins", 'Cotton Cloth', '37" w x 40" h', 'year', "status04")
]