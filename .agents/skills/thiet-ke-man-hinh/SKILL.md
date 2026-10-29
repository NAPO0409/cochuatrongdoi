---
name: thiet-ke-man-hinh
description: Nguyên tắc thiết kế giao diện cho mini-app mục vụ dùng trên điện thoại, cho người lớn tuổi. Dùng khi dựng hoặc sửa bố cục một màn hình, khi người dùng nói "làm đẹp", "lam dep", "sắp xếp lại", "trông chưa đẹp", "rối quá".
---

# Thiết kế một màn hình

## Mục tiêu
Màn hình rõ ràng, ấm áp, dễ dùng cho mọi lứa tuổi — đúng tinh thần Design Brief, không chạy theo hiệu ứng.

## Nguyên tắc
1. **Một việc chính mỗi màn hình.** Chỉ một nút nổi bật (màu `accent` hoặc `primary` đặc). Các nút khác dạng viền hoặc chữ.
2. **Thứ bậc rõ:** tiêu đề to nhất → thông tin chính → chi tiết. Thứ người dùng tìm trước tiên nằm cao nhất.
3. **Khoảng cách đều:** dùng bội số 4px (8, 12, 16, 24). Lề trái phải 16–20px. Nhóm thông tin liên quan vào thẻ (card).
4. **Chữ:** thân bài ≥ 17px, dòng cao khoảng 1.5 để dấu tiếng Việt không bị cắt. Tối đa 2 kiểu chữ trong app. Không viết hoa cả đoạn dài.
5. **Màu:** chỉ dùng màu trong `@theme`. Chữ trên nền phải đủ tương phản (tối thiểu 4.5:1); không chữ xám nhạt trên nền nhạt. Màu nhấn dùng tiết kiệm.
6. **Chạm:** nút cao ≥ 44px, cách nhau ≥ 8px. Cả thẻ bấm được thì cả thẻ là một liên kết.
7. **Biểu tượng:** lucide-react, luôn kèm chữ. Ảnh có `alt` mô tả ngắn.
8. **Trạng thái:** có câu nhắn khi danh sách trống, khi nội dung chưa có, khi không tìm thấy.
9. **Chuyển động:** cả app tối đa hai hiệu ứng, nhẹ, dưới 1 giây, phục vụ nội dung. Tôn trọng `prefers-reduced-motion`.
10. **Bo góc, đổ bóng:** bo nhẹ và thống nhất trong cả app; đổ bóng rất nhẹ hoặc không.

## Khi người dùng nói "làm đẹp"
- Hỏi lại một câu: muốn trang trọng hơn, ấm áp hơn, hay gọn hơn? Hoặc chỉ ra 2–3 điểm yếu cụ thể (theo nguyên tắc trên) và đề nghị sửa.
- Sửa từng điểm, không thay toàn bộ phong cách đã có trong Design Brief.

## Tránh
- Thêm thư viện hiệu ứng, chữ nhấp nháy, nền chuyển màu sặc sỡ, bố cục lạ khó đoán.
- Quá nhiều thẻ, quá nhiều màu, quá nhiều cỡ chữ trên một màn hình.
