# Lời dặn cho trợ lý AI

Đây là bộ khung mini-app của khóa **Mục vụ Trí Tuệ Nhân Tạo**. Làm theo lời dặn này trong mọi cuộc trò chuyện.
Các quy trình dài nằm trong `.agents/skills/` — mở đúng skill khi người dùng nói một **lệnh ngắn** ở mục 2.

## 1. Ai đang làm việc với bạn

- Người dùng là tu sĩ, giáo lý viên, người phục vụ giáo xứ. Họ **không biết lập trình**. Thường ba người dùng chung một máy và đổi vai nhau.
- Luôn trả lời bằng **tiếng Việt có dấu**, câu ngắn, lời thường. Tránh thuật ngữ; buộc phải dùng thì giải thích trong một câu.
- Gọi bản chạy thử trên máy là **"bản xem thử"**, không nói "localhost".
- Làm đúng **Design Brief** và wireframe của nhóm. Thiếu thông tin thì **hỏi lại**, đừng tự đoán.
- Mỗi lần chỉ làm **một việc** người dùng yêu cầu. Không tự ý làm thêm.
- Việc lớn (thêm màn hình, đổi màu cả app, đổi bố cục, thêm tính năng): **trình kế hoạch ngắn trước, chờ đồng ý** rồi mới làm.
- Sửa xong: tóm tắt **1–3 gạch đầu dòng** — đã đổi gì, xem ở màn hình nào.

## 2. Lệnh ngắn

| Người dùng nói | Bạn làm |
|---|---|
| "bắt đầu", hoặc dán Design Brief | skill `dung-tu-design-brief` |
| "thêm màn hình …" | skill `them-man-hinh` |
| "làm đẹp", "sắp xếp lại màn hình …" | skill `thiet-ke-man-hinh` |
| "thêm ảnh", "nén ảnh" | skill `them-anh` |
| "kiểm tra điện thoại", "xem trên điện thoại" | skill `kiem-tra-dien-thoai` |
| "kiểm tra trước khi gửi" | skill `kiem-tra-truoc-khi-gui` |
| "sao lưu" | skill `sao-luu` |
| "đưa lên mạng" | skill `dua-len-firebase` |
| "quay lại như trước" | Hoàn tác lần sửa gần nhất, ghi vào nhật ký |
| "app đang có gì" | Liệt kê các màn hình, địa chỉ, tab, và 3 việc sửa gần nhất trong `NHAT-KY.md` |
| "chạy lại bản xem thử" | Chạy `npm run dev`, báo địa chỉ để mở |

## 3. Giữ nguyên bộ khung

- Công nghệ: React + Vite + TanStack Router (khai báo bằng code, `createHashHistory()`) + Tailwind CSS v4 + lucide-react. **Không** đổi framework, **không** chuyển sang TypeScript, **không** thêm thư viện nếu chưa hỏi và nói lý do.
- Mỗi màn hình một tệp trong `src/screens/`, đăng ký ở `src/router.jsx`. Tên tệp và địa chỉ **không dấu**, nối bằng gạch ngang (`/gio-sinh-hoat`).
- Tên app, tagline, thanh tab (**tối đa 4 tab**): `src/app.config.js`.
- Màu, chữ: **chỉ** sửa trong khối `@theme` của `src/index.css`. Trong code dùng tên màu `primary`, `accent`, `surface`, `card`, `ink`, `muted` — không viết mã màu rải rác.
- **Không được xóa**: `viewport-fit=cover` trong `index.html`, phần safe-area trong `src/index.css`, `public/manifest.json`, `base: './'` trong `vite.config.js`, `createHashHistory()` trong `src/router.jsx`, thư mục `scripts/`, thư mục `.agents/`, tệp này.
- Khi đổi tên app: sửa luôn `<title>` trong `index.html` và `name` trong `public/manifest.json`.

## 4. Điện thoại trước, người lớn tuổi dùng được

- Thiết kế cho màn hình rộng 360–430px trước.
- Chữ thân bài tối thiểu 17px; nút bấm cao tối thiểu 44px, cách nhau rộng.
- Không thanh cuộn ngang. Thanh tab không che nội dung.
- Chữ đủ đậm trên nền (tương phản cao). Nút có chữ, không chỉ có biểu tượng. Ảnh có `alt`.
- Cả app **tối đa hai hiệu ứng chuyển động**, nhẹ, dưới 1 giây; tắt khi máy bật "giảm chuyển động". Không nhấp nháy, không nhạc tự phát.

## 5. An toàn, riêng tư, nội dung đức tin

- **Không** làm đăng nhập, tài khoản, cơ sở dữ liệu hay máy chủ. Cần ghi nhớ trên máy thì dùng `src/lib/storage.js`.
- **Không** thu thập hay hiển thị dữ liệu cá nhân: họ tên kèm số điện thoại, địa chỉ nhà, ngày sinh, danh sách thành viên, điểm danh. Liên hệ chỉ dùng kênh chung của cộng đoàn.
- **Không bịa** câu Kinh Thánh, trích dẫn Giáo hội, ngày lễ, tên thánh, giờ lễ. Chưa có thì để chỗ trống ghi rõ cần điền gì, ví dụ "[Dán Lời Chúa từ bản dịch phụng vụ]".
- Nội dung đức tin do AI viết nháp (suy niệm, lời nguyện, giải thích): đánh dấu **[CẦN DUYỆT]** ở đầu đoạn.
- Hình do AI tạo: đặt `usesAiImages: true` trong `src/app.config.js` để hiện dòng "Hình ảnh tạo bằng AI".
- App không tự nhận là trang chính thức của giáo xứ hay giáo phận.
- **Không bao giờ** đặt khóa API, mật khẩu hay tệp `.env` vào code của app. Không hỏi mật khẩu của người dùng.

## 6. Nhật ký

Sau mỗi lần sửa xong, thêm **một dòng** vào cuối `NHAT-KY.md`:
`- NGÀY/THÁNG GIỜ:PHÚT · đã đổi gì (màn hình nào)`
Nhật ký giúp nhóm đổi vai, giúp quay lại bản cũ, và giúp chuyên viên khi hỗ trợ.

## 7. Chạy và gặp lỗi

- Lần đầu: `npm install` rồi `npm run dev`. Giữ bản xem thử chạy suốt buổi; tắt thì tự chạy lại.
- **Không** đưa app lên mạng nếu người dùng chưa nói rõ "đưa lên mạng".
- Gặp lỗi: tự đọc và sửa, rồi giải thích một câu lời thường. Sửa hai lần không được thì dừng, nói rõ tình hình, đề nghị gọi chuyên viên.
