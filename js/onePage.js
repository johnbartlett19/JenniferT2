var crow_images = [
    "img/crow_banners/IMG_5180_a.jpg",
    "img/crow_banners/IMG_5185_a.jpg",
    "img/crow_banners/IMG_5187_a.jpg",
    "img/crow_banners/IMG_5194_a.jpg",
    "img/crow_banners/IMG_5198_a.jpg",
    "img/crow_banners/IMG_5204_a.jpg",
    "img/crow_banners/IMG_5211_a.jpg",
    "img/crow_banners/IMG_5216_a.jpg",
    "img/crow_banners/IMG_5226_a.jpg",
    "img/crow_banners/IMG_5231_a.jpg",
    "img/crow_banners/IMG_5247_a.jpg",
    "img/crow_banners/IMG_5250_a.jpg"
];

var Crow = function (group, index, length, img, name, madeOf, size, year, status) {
    this.group = group;
    this.index = index
    this.prev = (length + index - 1) % length;
    this.next = (index + 1) % length;
    this.img = img;
    this.name = name;
    this.madeOf = madeOf;
    this.size = size;
    this.year = year;
    this.status = status;
    return this
}

var crows = [
    new Crow('#crow', 0, 12, crow_images[0], "Crow and the Thirteen Moons", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 1, 12, crow_images[1], "Crow Carries the Sun", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 2, 12, crow_images[2], "Crow Carries the Waterlily", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 3, 12, crow_images[3], "Crow Moon Rising", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 4, 12, crow_images[4], "Which Way Crow?", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 5, 12, crow_images[5], "Crow Casts a Glance", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 6, 12, crow_images[6], "Crazy Old Crow", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 7, 12, crow_images[7], "Crow in the Clouds", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 8, 12, crow_images[8], "Crow Greets the Saffron Goddess", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 9, 12, crow_images[9], "Crow Calls the Directions", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 10, 12, crow_images[10], "Counting Crows", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 11, 12, crow_images[11], "Crow and the Bone of Contention", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale")
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
    new Crow('#gw_quilt', 0, 5, gw_quilt_images[0], "Good Will Ninepatch Quilt", 'Cotton Cloth', '50" w x 46" h', 'year', "status00"),
    new Crow('#gw_quilt', 1, 5, gw_quilt_images[1], "Good Will Quilt from Ohio", 'Cotton Cloth', '33" w x 35" h', 'year', "status01"),
    new Crow('#gw_quilt', 2, 5, gw_quilt_images[2], "Good Will Quilt with Button", 'Cotton Cloth', '19" w x 24" h', 'year', "status02"),
    new Crow('#gw_quilt', 3, 5, gw_quilt_images[3], "Good Will Quilt with Four Log Cabins", 'Cotton Cloth', '35" w x 37" h', 'year', "status03"),
    new Crow('#gw_quilt', 4, 5, gw_quilt_images[4], "Good Will Quilt with Three Log Cabins", 'Cotton Cloth', '37" w x 40" h', 'year', "status04")
]

function preloader(images, index) {
    document.write(images + index)
    if (document.images) {
        prev_img = images[(index - 1) % crows.length];
        next_img = images[(index + 1) % crows.length];
    }
}

function loadPrevNext(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
//loadPrevNext(preloader);