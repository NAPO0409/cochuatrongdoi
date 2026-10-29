// ─────────────────────────────────────────────────────────────
// THÔNG TIN CHUNG CỦA APP — sửa ở đây là đổi trên mọi màn hình
// ─────────────────────────────────────────────────────────────
import { Newspaper, BookOpen, Flame, Clock } from 'lucide-react'

export const APP = {
  name: 'Có Chúa Trong Đời',
  tagline: 'Cổng thông tin & suy tư Công giáo - TGP Sài Gòn',
  community: 'Tổng Giáo Phận Sài Gòn',
  // Bật lên (true) nếu app có dùng hình ảnh tạo bằng AI
  usesAiImages: false,
}

// Thanh tab dưới cùng — tối đa 4 tab.
// path phải trùng với một màn hình đã khai báo trong src/router.jsx
export const TABS = [
  { path: '/', label: 'Bản Tin', icon: Newspaper },
  { path: '/loi-chua', label: 'Lời Chúa', icon: BookOpen },
  { path: '/cau-nguyen', label: 'Cầu Nguyện', icon: Flame },
  { path: '/gio-le', label: 'Giờ Lễ', icon: Clock },
]
