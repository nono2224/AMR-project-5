$(".header-button").on("click", header_open_close);
$(".selector-top").on("click", home_top);
$(".selector-creator").on("click", home_creator);

var header_open_close_check = 0;

function header_open_close() {
    if (header_open_close_check == 0) {
        $("header").css("left", "calc(40vw - 100vw)");
        $(".header-content").css("opacity", "1");
        header_open_close_check = 1;
    } else {
        $("header").css("left", "calc(50px - 100vw)");
        $(".header-content").css("opacity", "0");
        header_open_close_check = 0;
    }
}

function home_top() {
    $(".home-top").css("opacity", "1");
    $(".home-creator").css("opacity", "0");

    $(".selector-top").css("border-left", "1px solid black");
    $(".selector-creator").css("border-left", "1px solid transparent");
}

function home_creator() {
    $(".home-top").css("opacity", "0");
    $(".home-creator").css("opacity", "1");

    $(".selector-top").css("border-left", "1px solid transparent");
    $(".selector-creator").css("border-left", "1px solid black");
}