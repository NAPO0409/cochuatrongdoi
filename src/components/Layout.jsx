import { Outlet } from '@tanstack/react-router'
import TabBar from './TabBar.jsx'
import { APP } from '../app.config.js'

// Khung chung cho mọi màn hình: nội dung ở trên, thanh tab ở dưới.
export default function Layout() {
  return (
    <div className="min-h-dvh mx-auto max-w-[520px] bg-surface">
      <main className="pb-tabbar">
        <Outlet />
        {APP.usesAiImages && (
          <p className="px-5 pt-6 text-center text-sm text-muted">Hình ảnh tạo bằng AI</p>
        )}
      </main>
      <TabBar />
    </div>
  )
}
