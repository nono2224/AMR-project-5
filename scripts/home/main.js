$(".header-button").on("click", header_open_close);

var header_open_close_check = 0;

function header_open_close() {
    if (header_open_close_check == 0) {
        $("header").css("left", "calc(40vw - 100vw)");
        $(".header-content").css("opacity", "1");
        $(".header-button-content-border-one").css("opacity", "0");
        $(".header-button-content-border-two-one").css("transform", "translate(-50%,-50%) rotateZ(45deg)");
        $(".header-button-content-border-two-two").css("transform", "translate(-50%,-50%) rotateZ(-45deg)");
        $(".header-button-content-border-three").css("opacity", "0");
        header_open_close_check = 1;
    } else {
        $("header").css("left", "calc(50px - 100vw)");
        $(".header-content").css("opacity", "0");
        $(".header-button-content-border-one").css("opacity", "1");
        $(".header-button-content-border-two-one").css("transform", "translate(-50%,-50%)");
        $(".header-button-content-border-two-two").css("transform", "translate(-50%,-50%)");
        $(".header-button-content-border-three").css("opacity", "1");
        header_open_close_check = 0;
    }
}