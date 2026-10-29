---
name: dua-len-firebase
description: Đưa mini-app lên mạng bằng Firebase Hosting để có đường link gửi cộng đoàn. Dùng khi người dùng nói rõ "đưa lên mạng", "dua len mang", "đưa lên Firebase", "deploy", "cập nhật bản trên mạng".
---

# Đưa lên mạng (Firebase Hosting)

## Trước khi làm
1. Chạy skill `kiem-tra-truoc-khi-gui`. Còn mục chưa đạt thì dừng, hỏi người dùng.
2. Xác nhận lại một câu: "Sau bước này, ai có đường link cũng xem được app. Anh chị em đồng ý chứ?"

## Lần đầu
1. Đăng nhập: chạy `npx firebase-tools login`. Trình duyệt mở ra — **người dùng tự đăng nhập Gmail**. Không bao giờ hỏi hay gõ mật khẩu thay họ.
2. Dự án Firebase:
   - Đã có: chạy `npx firebase-tools projects:list`, hỏi người dùng chọn dự án nào.
   - Chưa có: đề nghị tên dự án không dấu, ví dụ `ten-app-gx-ten-giao-xu`, rồi `npx firebase-tools projects:create TEN`. Trùng tên thì thêm hậu tố.
   - Ghi vào `.firebaserc`: `{ "projects": { "default": "TEN" } }`
3. Chỉ dùng **Hosting**. Không bật Firestore, Authentication, Functions. Gói miễn phí (Spark) là đủ — **không** nâng lên gói trả phí (Blaze).

## Mỗi lần đưa lên
1. `npm run build`
2. `npx firebase-tools deploy --only hosting`
3. Báo đường link dạng `https://TEN.web.app`. Nhắc: mở thử trên điện thoại trước khi gửi vào nhóm Zalo.
4. Ghi một dòng vào `NHAT-KY.md` kèm đường link.

## Khi lỗi
- "not logged in" hoặc hết hạn: chạy lại `npx firebase-tools login --reauth`.
- Lỗi quyền hoặc dự án: nhờ chuyên viên — không tự đổi cài đặt tài khoản Google.
