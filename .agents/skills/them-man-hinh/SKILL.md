---
name: them-man-hinh
description: Thêm một màn hình mới vào mini-app (có tab riêng hoặc mở từ màn hình khác). Dùng khi người dùng nói "thêm màn hình", "them man hinh", "thêm trang", "thêm mục".
---

# Thêm một màn hình

## Các bước
1. **Hỏi nếu chưa rõ:** tên màn hình; có tab riêng hay mở từ màn hình khác; trên màn hình có gì (wireframe nếu có).
2. **Kiểm tra tab:** đã đủ 4 tab thì không thêm tab thứ 5 — đề nghị mở màn hình này từ một màn hình khác, hoặc gộp bớt.
3. **Trình kế hoạch ngắn**, chờ đồng ý:
   - Tên tệp: `src/screens/TenManHinh.jsx`
   - Địa chỉ: `/ten-man-hinh` (không dấu). Màn hình chi tiết dùng tham số, ví dụ `/bai-hoc/$so`.
   - Có tab không; nút hoặc liên kết nào dẫn tới nó.
4. **Làm:**
   - Tạo tệp màn hình, dùng `ScreenTitle` (hoặc thanh tiêu đề sẵn có trong app) cho đồng bộ.
   - Đăng ký route trong `src/router.jsx` và thêm vào `routeTree`.
   - Có tab: thêm vào `TABS` trong `src/app.config.js` với một biểu tượng lucide-react hợp nghĩa.
   - Không tab: thêm liên kết từ màn hình gốc và nút "Quay lại".
   - Màn hình có tham số: xử lý trường hợp không tìm thấy (hiện câu nhắn nhẹ nhàng + nút quay lại).
5. **Kiểm tra:** bấm tới màn hình mới từ mọi lối vào; nút quay lại của điện thoại chạy đúng; tab mới được tô khi đang mở.
6. Ghi một dòng vào `NHAT-KY.md`.
