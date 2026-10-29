// Tiêu đề đầu mỗi màn hình
export default function ScreenTitle({ children, sub }) {
  return (
    <header className="px-5 pt-6 pb-3">
      <h1 className="text-[26px] font-bold leading-tight text-primary">{children}</h1>
      {sub && <p className="mt-1 text-muted">{sub}</p>}
    </header>
  )
}
