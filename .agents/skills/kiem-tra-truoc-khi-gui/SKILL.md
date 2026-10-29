---
name: kiem-tra-truoc-khi-gui
description: Soát mini-app theo bộ lọc đạo đức Buổi 2 trước khi gửi cho người khác xem hoặc đưa lên mạng. Dùng khi người dùng nói "kiểm tra trước khi gửi", "kiem tra truoc khi gui", "soát lại", "sẵn sàng gửi chưa", và luôn chạy trước skill dua-len-firebase.
---

# Kiểm tra trước khi gửi

## Soát toàn bộ `src/`, `public/`, `index.html`
1. **Dữ liệu cá nhân:** tìm số điện thoại (chuỗi 9–11 chữ số, có thể có dấu cách hoặc chấm), email cá nhân, địa chỉ nhà, ngày sinh, danh sách tên người kèm thông tin liên lạc. Kênh liên hệ chung của cộng đoàn thì được.
2. **Lời Chúa và trích dẫn:** mọi câu Kinh Thánh, trích dẫn Giáo hội phải do người dùng dán vào. Hỏi lại những câu không rõ nguồn.
3. **Nhãn còn sót:** tìm `[CẦN DUYỆT]`, `[Dán`, `…`, "Cộng đoàn …", "Mục mẫu", "nội dung mẫu", "Lorem".
4. **Ảnh:** ảnh người thật đã xin phép; ảnh AI có ghi rõ "tạo bằng AI" (làm theo cách AGENTS.md dặn).
5. **Danh xưng:** không tự nhận là trang chính thức của giáo xứ, giáo phận.
6. **Khóa bí mật:** không có khóa API, mật khẩu, tệp `.env` trong dự án.
7. **Thông tin app:** tên, tagline, cộng đoàn, `<title>`, `manifest.json` đã điền đúng.

## Báo cáo
- Bảng: mục · Đạt / Chưa đạt · ở tệp nào, dòng nào · đề nghị.
- Cuối báo cáo nhắc câu hỏi của Buổi 2: **"App này làm con người lớn lên hay nhỏ đi?"** — để nhóm tự trả lời.
- Không tự sửa nội dung đức tin. Chỉ sửa khi người dùng đồng ý.
