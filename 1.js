(function() {
    function f(a, b, d, f) {
        for (var g = h = 0; g < a; g++) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            isFirefox ? mainSVG.appendChild(c) : b.appendChild(c);
            g > h * p && h++;
            c.setAttributeNS(null, "fill", maskValueArr[h]);
            c.setAttributeNS(null, "width", 16);
            c.setAttributeNS(null, "rx", 16);
            c.setAttributeNS(null, "ry", 16);
            c.setAttributeNS(null, "height", 16);
            TweenMax.set(c, {
                transformOrigin: "50% 50%",
                scaleY: 1 - g / 100
            });
            var e = new TimelineMax;
            e.to(c, 1.52, {
                bezier: {
                    type: "cubic",
                    values: d,
                    autoRotate: !0
                },
                ease: Linear.easeNone
            }).to(c, .1, {
                alpha: 0
            }, "-=0.1");
            f.add(e, g / 200);
            isFirefox && b.appendChild(c)
        }
    }
    function d(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    select = function(a) {
        return document.querySelector(a)
    }
    ;
    selectAll = function(a) {
        return document.querySelectorAll(a)
    }
    ;
    container = select(".container");
    mainSVG = select(".mainSVG");
    merryGroup = select("#merryGroup");
    springStroke1 = select("#springStroke1");
    springStroke2 = select("#springStroke2");
    springStroke3 = select("#springStroke3");
    particleContainer = select("#particleContainer");
    strokeMask1 = select("#strokeMask1");
    strokeMask2 = select("#strokeMask2");
    strokeMask3 = select("#strokeMask3");
    allTextMasks = selectAll(".textMask *");
    maskValueArr = "#111 #222 #333 #444 #555 #666 #777 #888 #999 #aaa #bbb #ccc #ddd #eee #FFF".split(" ").reverse();
    particleColorArray = ["#F3F1E2"];
    particleTypeArray = ["#flake1", "#flake2", "#flake3", "#star", "#heart"];
    particlePool = [];
    particleCount = 0;
    numParticles = 512;
    isFirefox = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
    TweenMax.set(container, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50
    });
    TweenMax.set("svg", {
        visibility: "visible"
    });
    TweenMax.set(particleContainer, {
        x: 0,
        y: 0
    });
    var k = new TimelineMax({
        paused: !0
    }), l = new TimelineMax({
        paused: !0
    }), m = new TimelineMax({
        paused: !0
    }), h, p = Math.round(100 / maskValueArr.length), q = MorphSVGPlugin.pathDataToBezier(springStroke1.getAttribute("d"), {
        offsetX: -8,
        offsetY: -8
    }), n = MorphSVGPlugin.pathDataToBezier(springStroke2.getAttribute("d"), {
        offsetX: -8,
        offsetY: -8
    }), r = MorphSVGPlugin.pathDataToBezier(springStroke3.getAttribute("d"), {
        offsetX: -8,
        offsetY: -8
    }), e = new TimelineMax({
        repeat: -1,
        paused: !0
    });
    e.to("#dot", .4, {
        attr: {
            cy: 200,
            rx: 12,
            ry: 12
        },
        ease: Power2.easeOut
    }).to("#dot", .3, {
        attr: {
            cy: 300
        },
        ease: Power2.easeIn
    }).set("#splashRing", {
        alpha: 1
    }).to("#dot", 1.2, {
        attr: {
            rx: 76,
            ry: 76
        },
        alpha: 0,
        ease: Power1.easeOut
    }).to("#splashRing", 1.2, {
        attr: {
            r: 50
        },
        strokeWidth: 0,
        ease: Power1.easeOut
    }, "-=1.2").to(k, 3, {
        time: 2.33,
        ease: Power2.easeOut
    }, "-=1.2").to(l, 3.9, {
        time: 2.33,
        ease: Power2.easeOut
    }, "-=2.9").staggerFrom("#merryGroup path", .9, {
        rotation: -95,
        alpha: 0,
        transformOrigin: "50% 150%",
        ease: Elastic.easeOut.config(2, .8)
    }, .036, "-=3.3").to(m, 1, {
        time: 2.1,
        ease: SlowMo.ease.config(.1, .86, !1)
    }, "-=2.9").to(particleContainer, 1.4, {
        bezier: {
            type: "cubic",
            values: n,
            autoRotate: !1
        },
        onUpdate: function(a) {
            a = particlePool[particleCount];
            TweenMax.set(a, {
                x: particleContainer._gsTransform.x,
                y: particleContainer._gsTransform.y,
                scale: d(1, 15) / 10,
                transformOrigin: "50% 50%"
            });
            (new TimelineMax).to(a, d(3, 6), {
                physics2D: {
                    velocity: d(5, 10),
                    angle: 0,
                    gravity: d(23, 577)
                },
                scale: 0,
                rotation: d(180, 780),
                onStart: function(a) {
                    TweenMax.killTweensOf(a, {
                        opacity: !0
                    });
                    TweenMax.fromTo(a, .7, {
                        alpha: 1
                    }, {
                        alpha: Math.random(),
                        ease: RoughEase.ease.config({
                            template: Power0.easeNone,
                            strength: 3,
                            points: 6,
                            taper: "both",
                            randomize: !0,
                            clamp: !1
                        }),
                        repeat: -1
                    })
                },
                onStartParams: [a]
            });
            particleCount++;
            particleCount = particleCount >= numParticles ? 0 : particleCount
        },
        ease: Linear.easeNone
    }, "-=4").from("#letterI", .76, {
        y: -200,
        alpha: 0,
        ease: Power4.easeIn
    }, "-=2.7").from("#letterI", 1, {
        rotation: 23,
        transformOrigin: "50% 100%",
        ease: Elastic.easeOut.config(1, .3)
    }, "-=2.2").staggerTo(selectAll(".endFlake"), .6, {
        cycle: {
            x: [-10, 0, 10],
            y: [200, 100, 300],
            transformOrigin: ["50% 50%", "50% 150%"]
        },
        alpha: 0,
        rotation: d(200, 360),
        ease: SlowMo.ease.config(.1, .4, !1)
    }, .02, "-=1.95").staggerTo("#merryGroup *", .6, {
        alpha: 0
    }, .05).to("#letterI", .6, {
        alpha: 0
    }, "-=0.6");
    (function() {
        for (var a = numParticles, b; -1 < --a; )
            b = document.createElementNS("http://www.w3.org/2000/svg", "use"),
            b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", particleTypeArray[a % particleTypeArray.length]),
            mainSVG.appendChild(b),
            b.setAttributeNS(null, "fill", particleColorArray[a % particleColorArray.length]),
            b.setAttributeNS(null, "opacity", 0),
            b.setAttribute("class", "particle"),
            particlePool.push(b)
    }
    )();
    f(100, strokeMask1, q, k);
    f(100, strokeMask2, n, l);
    f(100, strokeMask3, r, m);
    e.timeScale(.8);
    TweenMax.delayedCall(2, function() {
        e.play()
    })
}
)();

document.addEventListener('DOMContentLoaded', function() {

    // Obtener el nombre del parámetro en la URL
    const nombre = 'Алтынай';

    // Insertar el nombre en la página
    document.querySelector('.container').insertAdjacentHTML('afterbegin', `<strong>${nombre} ❤️</strong>`);

    // Agregar un párrafo bonito debajo
    const parrafo = document.createElement('p');
    parrafo.textContent = "Поздравляю тебя с этим замечательным праздником! Ты – невероятно умный, добрый и светлый человек, который дарит радость окружающим. Пусть счастье, удача и тепло всегда будут рядом, а жизнь преподносит только приятные сюрпризы! 💖";
    parrafo.classList.add('mensaje-navidad');

    // Insertar el párrafo debajo del contenedor
    document.querySelector('.container').appendChild(parrafo);
});
