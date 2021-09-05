///////////////////////////search,user menu///////////////////////////////////
////////////////////////////////start/////////////////////////////////////////
const h = $(".headerMenu").height()
$(".menu ._navMenu .navLi").css({
    height: h + "px"
})

$("#_times").click(function () {
    $("#_search").fadeOut("slow");
});
$("._srch").click(function () {
    $("#_search").fadeIn("slow");
});
$("._acc").click(function () {
    $("#_userAcc").fadeIn("slow");
    const ava = document.getElementById("_ava").offsetWidth;
    $("._avatar").css({ height: ava + "px" })
});
$("._sClose").click(function () {
    $("#_userAcc").fadeOut("slow");
});
$("#_info").click(function () {
    if ($(this).hasClass("_act")) {
        $(this).removeClass("_act")
        $(this).css({
            "border-bottom-left-radius": "5px",
            "border-bottom-right-radius": "5px"
        })
        $("._altInfo").fadeOut("slow")
    }
    else {
        $(this).addClass("_act")
        $(this).css({
            "border-bottom-left-radius": "0px",
            "border-bottom-right-radius": "0px"
        })
        $("._altInfo").fadeIn("slow")


    }
})
//////////////////////////////////end/////////////////////////////////////////
///////////////////////////search,user menu///////////////////////////////////
/****************************************************************************/
////////////////////////////responsive menu///////////////////////////////////
////////////////////////////////start/////////////////////////////////////////
var usrPanel = $("._mUsr").outerHeight()
$("._mUsr").css({
    height: "0px"
})

$("._mLeft").click(() => {
    closeCat(0);
    closeUsr(1);
})
$("._mRight").click(() => {
    closeCat(1);
    closeUsr(0);
})
function closeUsr(r) {
    if (r == 0) {
        if ($("._mUsr").height() == 0) {
            $("._mUsr").animate({
                height: usrPanel + "px"
            })
        }
        else {
            $("._mUsr").animate({
                height: "0px"
            })
        }
    }
    else {
        $("._mUsr").animate({
            height: "0px"
        })
    }
}
function closeCat(l) {
    if (l == 0) {
        if ($("._mCat").height() == 0) {
            $("._mCat").animate({
                height: $(".headerMenu").height() + "px"

            })
        }
        else {
            $("._mCat").animate({
                height: "0px"
            })
        }
    }
    else {
        $("._mCat").animate({
            height: "0px",
            "padding-top": "0px"
        })
    }
}
/////////////////////////////////end//////////////////////////////////////////
////////////////////////////responsive menu///////////////////////////////////
/****************************************************************************/
////////////////////////////select category///////////////////////////////////
/////////////////////////////////start////////////////////////////////////////
const altCat = document.querySelectorAll(".lic")
for (let i = 0; i < altCat.length; i++) {
    altCat[i].addEventListener("click", function () {
        if (this.classList.contains("actLi")) {

        }
        else {
            for (let l = 0; l < altCat.length; l++) {
                if (altCat[l] == this) {
                    this.classList.add("actLi")
                }
                else {
                    altCat[l].classList.remove("actLi")
                }
            }
        }
    })
}
/////////////////////////////////end//////////////////////////////////////////
////////////////////////////select category///////////////////////////////////
/****************************************************************************/
//////////////////////////////////slide///////////////////////////////////////
//////////////////////////////////start///////////////////////////////////////

const main = $(".topMain")
const sl = $(".slide")
const item = $("._article");

const intMainWidth = parseInt(main.width())             ///// main div width
const intNum = parseInt(intMainWidth / 250);            ///// bir sehifedeki item sayi
const totalMargin = intMainWidth - (intNum * 250);      ///// margin cemi
const margin = totalMargin / intNum;                    ///// bir dive gedecek margin

for (let i = 0; i < item.length; i++) {
    if (i != intNum - 1) {
        $(item).css({
            "margin-right": margin + "px"
        })
    }
    else {
        $(item).css({
            "margin-left": "1px"
        })
    }
}
var _p = 0;
var _n = 0;
var pos = sl.position().left;
var def = parseInt(item.length / intNum) * intNum
var duf = intNum - (item.length - (parseInt(item.length / intNum) * intNum))
var hvring = false;
main.hover(function () {
    hvring = true;
},
    function () {
        hvring = false;
    })
setInterval(() => {
    if (hvring == false) {
        if (_n < def - duf) {
            sl.css({
                left: pos - 250 - margin + "px"
            })
            pos = pos - 250 - margin
            _n++;
        }
        else {
            sl.css({
                left: "0px"
            })
            pos = 0;
            _n = 0;
        }
    }
}, 3000);
///////////////////////////////////end////////////////////////////////////////
//////////////////////////////////slide///////////////////////////////////////
/****************************************************************************/
const tc = $("#_tc").outerHeight()
$(".catTitle").css({
    height: tc + "px"
})
///////////////////
const _cl = $("#circleLogo");
const _cli = $("#circleImg").height() / 2;
const _ft = $(".footer");
const ww = $(window).width();

if (ww < 1325) {
    _ft.css({
        height: (1.4 * _cli) + "px"
    })
}
else {
    _ft.css({
        height: _cli + "px"
    })
}
if (ww > 0 && ww < 601) {
    _ft.css({
        height: "80px"
    })
}
else {
    _ft.css({
        height: "100px"
    })
}

////////////////////////////////
const mtc = $("#_mobileTc")
mtc.click(function () {
    if ($("._mobileAlt").css("opacity") == 0) {
        $("._mobileAlt").css({
            "opacity": "1",
            "visibility": "visible"
        })
    }
    else {
        $("._mobileAlt").css({
            "opacity": "0",
            "visibility": "hidden"
        })
    }
})


console.log()