// ─────────────────────────────────────────────────────────────
// DANH SÁCH MÀN HÌNH — Cổng thông tin & suy tư TGP Sài Gòn
// ─────────────────────────────────────────────────────────────
import { createRootRoute, createRoute, createRouter, createHashHistory, Link } from '@tanstack/react-router'
import Layout from './components/Layout.jsx'
import BanTin from './screens/BanTin.jsx'
import LoiChua from './screens/LoiChua.jsx'
import CauNguyen from './screens/CauNguyen.jsx'
import GioLe from './screens/GioLe.jsx'
import BaiVietChiTiet from './screens/BaiVietChiTiet.jsx'

function NotFound() {
  return (
    <div className="px-5 py-12 text-center space-y-4">
      <h2 className="font-serif text-xl font-bold text-ink">Không tìm thấy trang</h2>
      <p className="text-muted text-sm">Trang này chưa có hoặc đã được chuyển sang mục khác.</p>
      <Link
        to="/"
        className="inline-flex min-h-[44px] items-center rounded-xl bg-primary px-5 text-sm font-semibold text-white"
      >
        Về Trang Bản Tin
      </Link>
    </div>
  )
}

const rootRoute = createRootRoute({ component: Layout, notFoundComponent: NotFound })

// 4 màn hình gắn với thanh tab dưới cùng:
const banTinRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: BanTin })
const loiChuaRoute = createRoute({ getParentRoute: () => rootRoute, path: '/loi-chua', component: LoiChua })
const cauNguyenRoute = createRoute({ getParentRoute: () => rootRoute, path: '/cau-nguyen', component: CauNguyen })
const gioLeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/gio-le', component: GioLe })

// Màn hình mở ra từ bài viết (không có tab): /bai-viet/1, /bai-viet/2...
export const baiVietChiTietRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bai-viet/$id',
  component: BaiVietChiTiet,
})

const routeTree = rootRoute.addChildren([
  banTinRoute,
  loiChuaRoute,
  cauNguyenRoute,
  gioLeRoute,
  baiVietChiTietRoute,
])

// Hash history (địa chỉ có dấu #): chạy được ở mọi nơi mà không cần cấu hình thêm. Đừng đổi.
export const router = createRouter({
  routeTree,
  history: createHashHistory(),
  scrollRestoration: true,
})
