document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);

/*--CUBE--*/
var cubeRender = (function () {
    var $cube = null,
        $cubeBox = null,
        $cubBoxLis = null;

    //->滑动的处理
    function isSwipe(changeX, changeY) {
        return Math.abs(changeX) > 30 || Math.abs(changeY) > 0;
    }

    function start(ev) {
        var point = ev.touches[0];
        $(this).attr({
            strX: point.clientX,
            strY: point.clientY,
            changeX: 0,
            changeY: 0
        });
    }

    function move(ev) {
        var point = ev.touches[0];
        var changeX = point.clientX - $(this).attr('strX'),
            changeY = point.clientY - $(this).attr('strY');
        $(this).attr({
            changeX: changeX,
            changeY: changeY
        });
    }

    function end(ev) {
        var changeX = parseFloat($(this).attr('changeX')),
            changeY = parseFloat($(this).attr('changeY'));
        var rotateX = parseFloat($(this).attr('rotateX')),
            rotateY = parseFloat($(this).attr('rotateY'));
        if (isSwipe(changeX, changeY) === false) return;
        rotateX = rotateX - changeY / 3;
        rotateY = rotateY + changeX / 3;
        $(this).attr({
            rotateX: rotateX,
            rotateY: rotateY
        }).css('transform', 'scale(0.6) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
    }

    return {
        init: function (options) {
            $cube = $('#' + options.cube);
            $cubeBox = $cube.find('ul');
            $cubBoxLis = $cubeBox.find('li');

            $cube.css('display', 'block');
            $cubeBox.attr({
                rotateX: -35,
                rotateY: 45
            }).on('touchstart', start).on('touchmove', move).on('touchend', end);

            if (options.swipe) {
                $cubBoxLis.tap(function () {
                    var index = $(this).index();
                    $cube.css('display', 'none');
                    swipeRender.init(index, options);
                });
            }
        }
    }
})();

/*--SWIPER--*/
var swipeRender = (function () {
    var $swipe = null,
        $makisu = null,
        $makisuNum = 1,
        $return = null;

    function change(example) {
        var slidesAry = example.slides,
            activeIndex = example.activeIndex;
        $.each(slidesAry, function (index, item) {
            if (index === activeIndex) {
                item.id = 'page' + (activeIndex + 1);
                return;
            }
            item.id = null;
        });
        if ($makisu && $makisu.length > 0) {
            if (activeIndex === ($makisuNum - 1)) {
                $makisu.makisu({
                    selector: 'dd',
                    overlap: 0.6,
                    speed: 0.8
                });
                $makisu.makisu('open');
            } else {
                $makisu.makisu({
                    selector: 'dd',
                    overlap: 0.6,
                    speed: 0
                });
                $makisu.makisu('close');
            }
        }
    }

    return {
        init: function (index, options) {
            $swipe = $('#' + options.swipe);
            $swipe.css('display', 'block');

            //->3D
            $makisu = options.mak ? $('#' + options.mak) : null;
            $makisuNum = $makisu && $makisu.length > 0 ? parseInt($makisu.attr('data-page')) : 1;

            //->swipe
            var example = new Swiper('.swiper-container', {
                effect: 'coverflow',
                onTransitionEnd: change,
                onInit: change
            });
            example.slideTo(index, 0);

            //->return
            $return = $swipe.children('.return');
            if ($return.length > 0) {
                options.cube === null ? $return.css('display', 'none') : null;
                if (options.cube) {
                    $return.tap(function () {
                        $swipe.css('display', 'none');
                        $('#' + options.cube).css('display', 'block');
                    });
                }
            }
        }
    }
})();


/*--MUSIC--*/
var musicRender = (function () {
    var $music = null,
        $musicAudio = null;
    return {
        init: function (context) {
            $music = $("#" + context);
            $musicAudio = $music.find('audio');
            var music = $music[0],
                musicAudio = $musicAudio[0];

            $music.tap(function () {
                if (musicAudio.paused) {
                    musicAudio.play();
                    $music.addClass('move');
                    return;
                }
                musicAudio.pause();
                $music.removeClass('move');
            });

            window.setTimeout(function () {
                musicAudio.play();
                $musicAudio.on('canplay', function () {
                    $music.css('display', 'block');
                    $music.addClass('move');
                });
            }, 1000);
        }
    }
})();

/*--config--*/
var zhufengpeixun = (function () {
    return {
        config: function (options) {
            var _default = {
                cube: null,
                swipe: null,
                mak: null,
                music: null
            };
            for (var key in options) {
                if (options.hasOwnProperty(key)) {
                    _default[key] = options[key];
                }
            }
            //->set
            _default.music && musicRender.init(_default.music);

            _default.cube && cubeRender.init(_default);

            (_default.cube === null && _default.swipe) && swipeRender.init(0, _default);
        }
    }
})();