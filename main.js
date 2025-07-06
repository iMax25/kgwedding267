function selectFamily(el) {
    // Bỏ chọn tất cả
    document.querySelectorAll(".family-option").forEach(opt => opt.classList.remove("selected"));
    // Gắn class đã chọn
    el.classList.add("selected");
    // Gán giá trị vào input ẩn để submit
    document.getElementById("familySide").value = el.dataset.value;
}

function toggleGuestCount(show) {
    document.getElementById("guestCountGroup").style.display = show ? "block" : "none";
}

function handleCustomSubmit(event) {
    event.preventDefault();

    // Bạn có thể xử lý dữ liệu tại đây hoặc gửi về Firebase/server tùy nhu cầu
    // Ví dụ đơn giản: chỉ ẩn form và hiện thông báo
    document.getElementById("guest-form").style.display = "none";
    document.getElementById("form-status").classList.remove("hidden");
}