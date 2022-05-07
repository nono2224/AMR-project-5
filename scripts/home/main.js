$(".header-button").on("click", header_open_close);

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