# Bộ khung mini-app — Khóa Mục vụ Trí Tuệ Nhân Tạo

Bộ khung này giống một **ngôi nhà tiền chế**: móng, khung, cửa đã có sẵn. Anh chị em chỉ cần nói với AI muốn sơn màu gì, bày biện ra sao.

## Bắt đầu (4 bước)

1. **Giải nén** tệp ZIP vào một thư mục có tên **không dấu, không khoảng trắng**, ví dụ `Documents/canh-cua-mua-vong`.
2. Mở **Antigravity** → **File** → **Open Folder** → chọn thư mục vừa giải nén.
3. Dán vào khung chat: **"Đọc AGENTS.md, cài đặt và chạy bản xem thử cho tôi."**
4. Khi bản xem thử hiện lên, nói **"bắt đầu"** rồi dán **Design Brief** của nhóm.

## Lệnh ngắn AI đã hiểu sẵn

| Nói với AI | AI sẽ làm |
|---|---|
| bắt đầu | Đọc Design Brief, hỏi chỗ còn thiếu, trình kế hoạch rồi dựng app |
| thêm màn hình … | Thêm một màn hình mới, có tab hoặc mở từ màn hình khác |
| làm đẹp màn hình … | Sắp xếp lại cho rõ, dễ đọc, đúng Design Brief |
| thêm ảnh | Nén ảnh, đổi tên không dấu, gắn vào màn hình |
| kiểm tra điện thoại | Soát bảy điểm trên khổ điện thoại; chỉ cách xem trên điện thoại thật |
| kiểm tra trước khi gửi | Soát theo bộ lọc Buổi 2: dữ liệu cá nhân, Lời Chúa, ảnh, nhãn còn sót |
| sao lưu | Tạo tệp ZIP nhỏ để kéo lên Google Drive của nhóm |
| quay lại như trước | Hoàn tác lần sửa gần nhất |
| app đang có gì | Tóm tắt các màn hình và những lần sửa gần đây |
| chạy lại bản xem thử | Khi trình duyệt báo không kết nối được |
| đưa lên mạng | Đưa app lên Firebase Hosting (từ Buổi 7) |

## Bên trong

- `AGENTS.md` — lời dặn cho AI, Antigravity tự đọc mỗi lần trò chuyện
- `.agents/skills/` — các quy trình cho lệnh ngắn ở trên
- `NHAT-KY.md` — AI ghi lại mỗi lần sửa
- `scripts/` — công cụ sao lưu và nén ảnh

**Đừng xóa** `AGENTS.md`, thư mục `.agents/`, `scripts/` và `public/`.
Thư mục `.agents` bắt đầu bằng dấu chấm nên có thể bị ẩn trên máy — vẫn có ở đó.
