---
name: kiem-tra-dien-thoai
description: Kiểm tra mini-app trên khổ điện thoại theo bảy điểm và cho người lớn tuổi; mở bản xem thử trên điện thoại thật. Dùng khi người dùng nói "kiểm tra điện thoại", "kiem tra dien thoai", "xem trên điện thoại", "trên điện thoại có ổn không".
---

# Kiểm tra trên điện thoại

## A. Xem trên điện thoại thật (khi người dùng muốn)
1. Chạy `npm run dev -- --host`. Báo địa chỉ dạng `http://192.168.x.x:5173` để gõ vào trình duyệt điện thoại.
2. Nhắc: điện thoại và máy tính phải **cùng một mạng Wi-Fi**. Windows hỏi tường lửa thì chọn mạng riêng (Private) và cho phép.
3. Không mở được (mạng nơi học thường chặn): hướng dẫn xem khổ điện thoại trên máy tính — Windows: F12 rồi Ctrl+Shift+M; Mac: Cmd+Option+I rồi Cmd+Shift+M; hoặc kéo hẹp cửa sổ trình duyệt.

## B. Bảy điểm kiểm tra
Với **từng màn hình**, ở bề ngang 360px (mở trình duyệt nếu bạn có, nếu không thì đọc code):

1. Không phải kéo ngang
2. Chữ thân bài đọc được ngay (≥ 17px)
3. Nút dễ bấm (cao ≥ 44px, không sát nhau)
4. Thanh tab không che dòng cuối
5. Chữ nổi trên nền (không xám nhạt trên nền nhạt)
6. Mọi tab, mọi nút, nút quay lại đều đi đúng chỗ
7. Giống wireframe: đúng thứ tự, đúng việc chính

Thêm cho người lớn tuổi: nút có chữ kèm biểu tượng; tối đa hai hiệu ứng; không nhấp nháy.

## C. Báo cáo
- Một bảng: màn hình · điểm chưa đạt · cách sửa đề nghị (một câu).
- **Chưa sửa** cho tới khi người dùng đồng ý. Đồng ý thì sửa từng điểm, ghi `NHAT-KY.md`.
