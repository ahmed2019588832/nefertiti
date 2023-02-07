var images = [
    'projects/1.jpg',
    'projects/2.jpg',
    'projects/3.jpg',
    'projects/4.jpg',
    'projects/5.jpg',
    'projects/6.jpg',
    'projects/7.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById( "slider" );
    num++;
    if ( num >= images.length ) {
        num = 0;
    }
    slider.src = images[ num ];
}
function prev() {
    var slider = document.getElementById( "slider" );
    num--;
    if ( num < 0 ) {
        num = images.length - 1;
    }
    slider.src = images[ num ];
}
var dimages = [
    '3d/1.jpg',
    '3d/2.jpg',
    '3d/3.jpg',
    '3d/4.png',
    '3d/5.jpg',
    '3d/6.jpg',
    '3d/7.jpg',
    '3d/8.jpg',
    '3d/9.jpg',
    '3d/10.jpg',
    '3d/11.jpg',
    '3d/12.jpg',
    '3d/13.jpg',
    '3d/14.jpg',
    '3d/15.jpg',
    '3d/16.jpg',
    '3d/17.jpg',
    '3d/18.jpg',

];
var num3d = 0;
function dnext() {
    var dslider = document.getElementById( "dslider" );
    num3d++;
    if ( num3d >= dimages.length ) {
        num3d = 0;
    }
    dslider.src = dimages[ num3d ];
}
function dprev() {
    var dslider = document.getElementById( "dslider" );
    num3d--;
    if ( num3d < 0 ) {
        num3d = dimages.length - 1;
    }
    dslider.src = dimages[ num3d ];
};

function menu() {
    var hb = document.getElementById( "hide" );
    var vb = document.getElementById( "view" );
    hb.style.display = "none"
    vb.style.display = "block"
        document.getElementById('i1').style.display = 'none'
        document.getElementById('i2').style.display = 'none'
        document.getElementById('i3').style.display = 'none'
        document.getElementById('i4').style.display = 'none'
        document.getElementById('i5').style.display = 'none'
        document.getElementById('i6').style.display = 'none'
    };
function menuh() {
    var hb = document.getElementById( "hide" );
    var vb = document.getElementById( "view" );
    hb.style.display = "block"
    vb.style.display = "none"
    document.getElementById( 'i1' ).style.display = 'block'
    document.getElementById( 'i2' ).style.display = 'block'
    document.getElementById( 'i3' ).style.display = 'block'
    document.getElementById( 'i4' ).style.display = 'block'
    document.getElementById( 'i5' ).style.display = 'block'
    document.getElementById( 'i6' ).style.display = 'block'
}