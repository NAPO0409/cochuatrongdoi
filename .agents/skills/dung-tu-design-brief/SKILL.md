---
name: dung-tu-design-brief
description: Dựng mini-app từ Design Brief của nhóm. Dùng khi người dùng nói "bắt đầu", "bat dau", dán Design Brief hoặc wireframe, hoặc nhờ tạo app từ bản đặc tả.
---

# Dựng mini-app từ Design Brief

## Mục tiêu
Biến Design Brief và wireframe của nhóm thành các màn hình chạy được trên bộ khung, không dựng lại từ đầu.

## Các bước
1. **Chưa có Design Brief?** Hỏi người dùng dán vào. Nhắc rằng mẫu có 7 mục: tên–tagline–người dùng, màu, phong cách, font, tính năng, các màn hình, giới hạn.
2. **Đọc và soát.** Liệt kê mục nào còn thiếu hoặc chưa rõ (ví dụ: màu chưa có mã, màn hình chưa có wireframe). Hỏi gọn trong một tin nhắn, tối đa 3 câu hỏi.
3. **Trình kế hoạch, chờ đồng ý.** Một bảng ngắn:
   - Các màn hình sẽ làm: tên · địa chỉ (không dấu) · có tab hay mở từ màn hình khác.
   - Màu sẽ đặt trong `@theme`: primary, accent, surface, ink.
   - Font (Google Fonts, phải đủ dấu tiếng Việt).
   - Những gì **để sau** theo brief.
   Nếu người dùng nói "hôm nay chỉ làm N màn hình", chỉ làm đúng N màn hình đó.
4. **Làm theo thứ tự:**
   - `src/index.css` (`@theme`) và link font trong `index.html`.
   - `src/app.config.js`: tên, tagline, cộng đoàn, tab (tối đa 4).
   - Mỗi màn hình một tệp trong `src/screens/`, đăng ký ở `src/router.jsx`. Xóa các màn hình mẫu không dùng nữa (Trang chủ, Nội dung, Chi tiết, Giới thiệu, Liên hệ) và `src/screens/data.js` nếu không cần.
   - `index.html` `<title>` và `public/manifest.json` `name`, `description`.
5. **Nội dung:** dùng nội dung có trong brief. Thiếu thì để chỗ trống ghi rõ cần điền gì. Không bịa Lời Chúa, ngày lễ, giờ lễ, tên người.
6. **Kiểm tra:** chạy bản xem thử, bấm qua mọi tab. Chạy nhanh skill `kiem-tra-dien-thoai` cho các màn hình vừa làm.
7. **Báo lại:** 3 gạch đầu dòng + đề nghị bước tiếp theo. Ghi một dòng vào `NHAT-KY.md`.

## Giới hạn
- Không thêm thư viện, không đăng nhập, không cơ sở dữ liệu.
- Brief mâu thuẫn với `AGENTS.md` (ví dụ đòi danh sách thành viên có số điện thoại) thì giải thích và đề nghị cách khác, không làm.
