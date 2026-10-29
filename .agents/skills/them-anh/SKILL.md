---
name: them-anh
description: Thêm ảnh vào mini-app — nén, đổi tên không dấu, đặt vào public/images/ và gắn vào màn hình. Dùng khi người dùng nói "thêm ảnh", "them anh", "nén ảnh", "đổi ảnh", "chèn logo", hoặc kéo ảnh vào.
---

# Thêm ảnh

## Các bước
1. **Hỏi nếu chưa rõ:** ảnh nằm ở đâu trên máy; đặt ở màn hình nào, vị trí nào.
2. **Nguồn ảnh:** chỉ dùng ảnh của cộng đoàn, ảnh có quyền dùng, hoặc ảnh do AI tạo. Ảnh có **người thật nhìn rõ mặt**: hỏi lại đã xin phép chưa. Chưa chắc thì không dùng.
3. **Nén:** chạy
   `npm run nen-anh -- "đường/dẫn/ảnh-hoặc-thư-mục"`
   (thêm `--rong 800` cho ảnh nhỏ như ảnh trong thẻ). Ảnh mới nằm ở `public/images/`, tên không dấu, đuôi `.webp`. Ảnh gốc giữ nguyên.
4. **Gắn vào màn hình:** đường dẫn dạng `images/ten-anh.webp` (không có dấu `/` ở đầu). Luôn có `alt` mô tả ngắn bằng tiếng Việt. Ảnh lớn đầu trang dùng `object-cover` và chiều cao cố định để bố cục không nhảy.
5. **Logo:** thay `public/logo.png` (vuông, khoảng 512×512px).
6. **Ảnh do AI tạo:** ghi rõ "tạo bằng AI" theo cách AGENTS.md dặn.
7. Báo lại kích thước ảnh sau khi nén. Ghi một dòng vào `NHAT-KY.md`.
