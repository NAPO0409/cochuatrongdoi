import { Link } from '@tanstack/react-router'
import { TABS } from '../app.config.js'

// Thanh tab dưới cùng. Danh sách tab sửa trong src/app.config.js
export default function TabBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-black/5 bg-card/95 backdrop-blur safe-bottom">
      <ul className="mx-auto flex max-w-[520px]">
        {TABS.map(({ path, label, icon: Icon }) => (
          <li key={path} className="flex-1">
            <Link
              to={path}
              activeOptions={{ exact: path === '/', includeSearch: false }}
              className="flex min-h-[64px] flex-col items-center justify-center gap-1 text-[13px] text-muted"
              activeProps={{ className: 'text-primary font-semibold' }}
            >
              <Icon size={24} strokeWidth={2} aria-hidden="true" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
