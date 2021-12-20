var item_amount = 1;
var max_item = 0;

function addToCart() {
    $("#item-amount").html("1");
    $(".btn-size-active").removeClass("btn-size-active");
    $("#item-left").html(max_item);
    $.bootstrapGrowl(
        "<p>Đã thêm sản phẩm vào giỏ hàng! </p>" +
          "<a href='#' class='font-weight-bold'>Xem giỏ hàng</a>",
        {
          type: "success",
          width: 400,
        }
    );
    $(".item-count-bg").addClass("invisible");
}

function addToFav() {
    $.bootstrapGrowl(
        "<p>Đã thêm sản phẩm vào danh sách yêu thích! </p>" +
          "<a href='#' class='font-weight-bold'>Xem chi tiết</a>",
        {
          type: "success",
          width: 400,
        }
      );
}

function sendRating() {
    Swal.fire("Thành công!", "Đánh giá của bạn đã được gửi đi!", "success");
}

function sizeIncrease() {
    var amount = parseInt($("#item-amount").html());
    var item_left = parseInt($("#item-left").html());
    amount++;
    item_left--;
    if (amount > max_item) {
        Swal.fire("Thất bại", "Sản phẩm đã đạt tới giới hạn mua", "warning");
    } else {
        $("#item-amount").html(amount);
        $(".item-count").html(amount);
    }
    if (item_left <= 0) {
        item_left = 0;
    }
    $("#item-left").html(item_left);
}

function sizeDecrease () {
    var amount = parseInt($("#item-amount").html());
    var item_left = parseInt($("#item-left").html());
    item_left++;
    if (amount == 1) {
        amount = 1;
    } else {
        amount--;
        $("#item-amount").html(amount);
        $(".item-count").html(amount);
    }
    if (item_left > max_item) {
        item_left = max_item;
    }
    $("#item-left").html(item_left);
}

function sizeClick(size) {
    if ($('.size-amount').hasClass('invisible')) {
        $('.size-amount').removeClass('invisible')
    }
    max_item = Math.floor(Math.random() * 20) + 1;
    $(".btn-size-active").removeClass("btn-size-active");
    size.addClass("btn-size-active");
    $("#item-amount").html("1");
    $("#item-left").html(max_item);
    $(".item-count-bg").removeClass("invisible");
}

