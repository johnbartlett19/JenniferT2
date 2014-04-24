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
    this.index = index;
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
    new Crow('#crow', 0, 13, crow_images[0], "Crow and the Thirteen Moons", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 1, 13, crow_images[1], "Crow Carries the Sun", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 2, 13, crow_images[2], "Crow Carries the Waterlily", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 3, 13, crow_images[3], "Crow Moon Rising", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 4, 13, crow_images[4], "Which Way Crow?", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 5, 13, crow_images[5], "Crow Casts a Glance", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 6, 13, crow_images[6], "Crazy Old Crow", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 7, 13, crow_images[7], "Crow in the Clouds", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 8, 13, crow_images[8], "Crow Greets the Saffron Goddess", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 9, 13, crow_images[9], "Crow Calls the Directions", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 10, 13, crow_images[10], "Counting Crows", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale"),
    new Crow('#crow', 11, 13, crow_images[11], "Crow and the Bone of Contention", "Mixed Media", '26" w x 35" h x 2" d', '2006', "For Sale")
];

var crow_template;
$.get("html/one_crow.htm").done(function (data) {
    crow_template = _.template(data);
});

var gwquilt_template;
$.get("html/one_gwquilt.htm").done(function (data) {
    gwquilt_template = _.template(data);
});

var gw_quilt_images = [
    "img/gw_quilts/Good-Will-Ninepatch-Quilt.jpg",
    "img/gw_quilts/Good-Will-Quilt-from-Ohio.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Button.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Four-Log-Cabins.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Three-Log-Cabins.jpg"
]

var gw_quilt_details = [
    "img/gw_quilts/Good-Will-Ninepatch-Quilt-Detail.jpg",
    "img/gw_quilts/Good-Will-Quilt-from-Ohio-Detail.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Button-Detail.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Four-Log-Cabins-Detail.jpg",
    "img/gw_quilts/Good-Will-Quilt-with-Three-Log-Cabins-Detail.jpg"
]

var Quilt = function (group, index, length, img, detail, name, madeOf, size, year, status) {
    this.group = group;
    this.index = index;
    this.prev = (length + index - 1) % length;
    this.next = (index + 1) % length;
    this.img = img;
    this.detail = detail,
        this.name = name;
    this.madeOf = madeOf;
    this.size = size;
    this.year = year;
    this.status = status;
    return this
}
var gw_quilts = [
    new Quilt('#gw_quilt', 0, 5, gw_quilt_images[0], gw_quilt_details[0], "Good Will Ninepatch Quilt", 'Cotton Cloth', '50" w x 46" h', 'year', "status00"),
    new Quilt('#gw_quilt', 1, 5, gw_quilt_images[1], gw_quilt_details[1], "Good Will Quilt from Ohio", 'Cotton Cloth', '33" w x 35" h', 'year', "status01"),
    new Quilt('#gw_quilt', 2, 5, gw_quilt_images[2], gw_quilt_details[2], "Good Will Quilt with Button", 'Cotton Cloth', '19" w x 24" h', 'year', "status02"),
    new Quilt('#gw_quilt', 3, 5, gw_quilt_images[3], gw_quilt_details[3], "Good Will Quilt with Four Log Cabins", 'Cotton Cloth', '35" w x 37" h', 'year', "status03"),
    new Quilt('#gw_quilt', 4, 5, gw_quilt_images[4], gw_quilt_details[4], "Good Will Quilt with Three Log Cabins", 'Cotton Cloth', '37" w x 40" h', 'year', "status04")
]

var postage_images = [
    "img/collage/FauxPostageConsider.jpg",
    "img/collage/FauxPostageInterstitial.jpg",
    "img/collage/FauxPostageMending01.jpg",
    "img/collage/FauxPostageMending02.jpg"
]

var post = [
    new Crow('#postage', 0, 4, postage_images[0], "Faux Postage Consider ", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#postage', 1, 4, postage_images[1], "Faux Postage Interstitial Spaces ", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#postage', 2, 4, postage_images[2], "Faux Postage Mending #1 ", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#postage', 3, 4, postage_images[3], "Faux Postage Mending #2 ", "Mixed Media", '8.5" w x 11" h', '2013', "")
];

var collage_images = [
    "img/collage/BlueHydrangeaDrummer.jpg",
    "img/collage/BlueMoonBear.jpg",
    "img/collage/BlueRiverBear.jpg",
    "img/collage/bunny_flower.jpg",
    "img/collage/GreenBirdandLabyrinth.jpg",
    "img/collage/GreenBirdRedHeart.jpg",
    "img/collage/LavenderMoonBear.jpg",
    "img/collage/OrangeSkyBear.jpg",
    "img/collage/PinkMoonBear.jpg",
    "img/collage/RedSkyBear.jpg",
    "img/collage/RedSkyDrummerBear.jpg",
    "img/collage/RiverRabbit.jpg",
    "img/collage/WithinWithout.jpg"
]

var collage = [
    new Crow('#collage', 0, 13, collage_images[0], "Blue Hydrangea Drummer", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 1, 13, collage_images[1], "Blue Moon Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 2, 13, collage_images[2], "Blue River Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 3, 13, collage_images[3], "Bunny Flower", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 4, 13, collage_images[4], "Green Bird and Labyrinth", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 5, 13, collage_images[5], "Green Bird Red Heart", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 6, 13, collage_images[6], "Lavender Moon Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 7, 13, collage_images[7], "Orange Sky Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 8, 13, collage_images[8], "Pink Moon Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 9, 13, collage_images[9], "Red Sky Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 10, 13, collage_images[10], "Red Sky Drummer Bear", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 11, 13, collage_images[11], "River Rabbit", "Mixed Media", '8.5" w x 11" h', '2013', ""),
    new Crow('#collage', 12, 13, collage_images[12], "Within Without", "Mixed Media", '8.5" w x 11" h', '2013', "")
];

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