---
name: sao-luu
description: Sao lưu dự án thành một tệp ZIP nhỏ để kéo lên Google Drive của nhóm, hoặc mở lại từ bản sao lưu. Dùng khi người dùng nói "sao lưu", "sao luu", "backup", "lưu lại", hoặc "mở bản sao lưu".
---

# Sao lưu

## Tạo bản sao lưu
1. Chạy `npm run sao-luu`.
2. Tệp ZIP nằm ở **thư mục cha** của dự án, tên dạng `sao-luu-TEN-DU-AN-NGAY-THANG-GIOhPHUT.zip`. Bản sao lưu bỏ `node_modules`, `dist` nên chỉ vài trăm KB.
3. Báo đường dẫn đầy đủ của tệp, rồi nhắc: "Mở drive.google.com, vào thư mục chung của nhóm, kéo tệp này vào."
4. Ghi một dòng vào `NHAT-KY.md`.

## Mở lại từ bản sao lưu (khi app hỏng nặng hoặc đổi máy)
1. Giải nén tệp ZIP vào một thư mục **mới** (không đè lên thư mục đang dùng).
2. Mở thư mục mới trong Antigravity, chạy `npm install` rồi `npm run dev`.
3. Đọc `NHAT-KY.md` của bản sao lưu để biết app đang ở bước nào.
