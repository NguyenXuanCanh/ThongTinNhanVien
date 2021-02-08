let nhanVien = {};
document.getElementById("btnXuatTT").onclick = function () {
    let arrInput = document.querySelectorAll("#form input, #form select");
    for (let i = 0; i < arrInput.length; i++) {
        let tagInput = arrInput[i];
        let id = tagInput.id;
        let value = tagInput.value;
        nhanVien = { ...nhanVien };
        nhanVien[id] = value;
    }
    console.log(nhanVien);
    let printHere = document.getElementById("printHere");
    let content = `
        <div class="mb-5">
        <div>
            Mã nhân viên: ${nhanVien['maNV']}
        </div>
        <div>
            Tên nhân viên: ${nhanVien['tenNV']}
        </div>
        <div>
            Chức vụ: ${nhanVien['chucVu']}
        </div>
        <div>
            Tổng lương: ${nhanVien['heSoLuong'] * nhanVien['luongCB']}
        </div>
        </div>
    `;
    console.log(content);
    printHere.innerHTML = content;
}