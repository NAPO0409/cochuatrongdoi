import { useState, useMemo, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Search, Bookmark, BookmarkCheck, Share2, Sparkles, ChevronRight, Check, Calendar, RotateCw, ChevronDown } from 'lucide-react'
import { ARTICLES, CATEGORIES, DAILY_GOSPEL, generateTimelineDays, formatDM, formatYMD } from './data.js'
import { load, save } from '../lib/storage.js'
import ShareDialog from '../components/ShareDialog.jsx'

export default function BanTin() {
  const [timelineDays, setTimelineDays] = useState(() => generateTimelineDays(new Date()))
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const [selectedDay, setSelectedDay] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [savedIds, setSavedIds] = useState(() => load('saved_articles', []))
  const [copiedId, setCopiedId] = useState(null)
  const [shareArticle, setShareArticle] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [refreshMsg, setRefreshMsg] = useState(null)

  // Cơ chế tự động đồng bộ khi sang ngày mới theo thời gian thực của thiết bị
  useEffect(() => {
    const todayStr = formatYMD(new Date())
    const lastActiveDay = load('last_active_day', null)
    if (lastActiveDay !== todayStr) {
      setTimelineDays(generateTimelineDays(new Date()))
      save('last_active_day', todayStr)
    }
  }, [])

  const handleRefreshDaily = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      const now = new Date()
      const nextDays = generateTimelineDays(now)
      setTimelineDays(nextDays)
      save('last_active_day', formatYMD(now))
      setIsRefreshing(false)
      setRefreshMsg(`Đã làm mới dữ liệu cho ngày hôm nay (${formatDM(now)}/${now.getFullYear()})!`)
      setTimeout(() => setRefreshMsg(null), 3000)
    }, 350)
  }

  const toggleSave = (id, e) => {
    e.preventDefault()
    e.stopPropagation()
    const next = savedIds.includes(id)
      ? savedIds.filter((item) => item !== id)
      : [...savedIds, id]
    setSavedIds(next)
    save('saved_articles', next)
  }

  const handleShare = (article, e) => {
    e.preventDefault()
    e.stopPropagation()
    setShareArticle(article)
  }

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchCategory =
        selectedCategory === 'Tất cả'
          ? true
          : selectedCategory === 'Đã Lưu'
            ? savedIds.includes(article.id)
            : article.category === selectedCategory

      const matchDay =
        selectedDay === 'all'
          ? true
          : article.dateStr === selectedDay

      return matchSearch && matchCategory && matchDay
    })
  }, [selectedCategory, selectedDay, searchQuery, savedIds])

  return (
    <div className="px-4 pt-4 pb-6 space-y-5">
      {/* Thanh Phụng Vụ Trên Cùng */}
      <div className="rounded-2xl bg-gradient-to-r from-primary to-[#6e1319] p-4 text-white shadow-sm">
        <div className="flex items-center justify-between text-xs opacity-90 pb-1 border-b border-white/15">
          <span className="font-semibold tracking-wide uppercase">TGP SÀI GÒN</span>
          <span>{DAILY_GOSPEL.liturgicalColor}</span>
        </div>
        <div className="mt-2.5">
          <div className="flex items-center gap-1.5 text-accent text-xs font-semibold">
            <Sparkles size={14} />
            <span>LỜI CHÚA HÔM NAY</span>
          </div>
          <p className="mt-1 font-serif text-[17px] italic leading-snug line-clamp-2">
            "{DAILY_GOSPEL.verse}"
          </p>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="opacity-80">{DAILY_GOSPEL.reference}</span>
            <Link
              to="/loi-chua"
              className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-accent hover:underline py-1"
            >
              Xem suy niệm <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tiêu đề trang, Nút Làm mới & Thanh Tìm Kiếm */}
      <div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="font-serif text-2xl font-bold text-ink tracking-tight">
              Bản Tin & Suy Tư
            </h1>
            <p className="text-sm text-muted mt-0.5">
              Cập nhật thông tin và nuôi dưỡng đời sống đức tin mỗi ngày
            </p>
          </div>

          <button
            type="button"
            onClick={handleRefreshDaily}
            disabled={isRefreshing}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-primary/20 bg-card px-3 text-xs font-semibold text-primary hover:bg-primary/5 active:scale-[0.98] transition-all shrink-0 shadow-2xs"
            title="Làm mới dữ liệu theo ngày hôm nay"
            aria-label="Làm mới dữ liệu ngày hôm nay"
          >
            <RotateCw size={15} className={isRefreshing ? 'animate-spin' : ''} />
            <span>Làm mới</span>
          </button>
        </div>

        {/* Thông báo làm mới ngày */}
        {refreshMsg && (
          <div className="mt-3 rounded-xl bg-[#235937] text-white px-4 py-2.5 text-sm flex items-center justify-between shadow-md transition-all">
            <span className="flex items-center gap-2">
              <Check size={16} /> {refreshMsg}
            </span>
          </div>
        )}

        <div className="mt-3 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm bài viết, suy tư, Lời Chúa..."
            className="w-full min-h-[46px] rounded-xl border border-black/10 bg-card pl-10 pr-4 text-base text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
          />
        </div>
      </div>

      {/* Bộ Lọc Lựa Chọn: Dạng danh sách thả xuống (Dropdown Select) tối ưu trên điện thoại */}
      <div className="rounded-2xl border border-black/10 bg-card p-3.5 shadow-2xs space-y-3">
        {/* Ô 1: Chọn Chuyên Mục */}
        <div className="space-y-1.5">
          <label htmlFor="category-select" className="block text-xs font-bold uppercase tracking-wider text-primary">
            📂 Chọn chuyên mục ({CATEGORIES.length - 1} mục):
          </label>
          <div className="relative">
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full min-h-[48px] appearance-none rounded-xl border border-black/15 bg-surface px-3.5 pr-10 text-[16px] font-semibold text-ink focus:border-primary focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-2xs"
            >
              <option value="Tất cả">Tất cả chuyên mục ({ARTICLES.length} bài)</option>
              <option value="Đã Lưu">🔖 Bài viết đã lưu ({savedIds.length} bài)</option>
              {CATEGORIES.filter((c) => c !== 'Tất cả').map((cat) => {
                const count = ARTICLES.filter((a) => a.category === cat).length
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count} bài)
                  </option>
                )
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Ô 2: Chọn Mốc Thời Gian (7 ngày qua) */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor="day-select" className="font-bold uppercase tracking-wider text-primary flex items-center gap-1">
              <Calendar size={14} /> Mốc ngày ({timelineDays[timelineDays.length - 1]?.dateStr ? formatDM(timelineDays[timelineDays.length - 1].dateStr) : '07/10'} – {formatDM(new Date())}/{new Date().getFullYear()}):
            </label>
            {selectedDay !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedDay('all')}
                className="text-xs font-semibold text-primary hover:underline min-h-[36px] inline-flex items-center"
              >
                Xem tất cả 7 ngày
              </button>
            )}
          </div>
          <div className="relative">
            <select
              id="day-select"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full min-h-[48px] appearance-none rounded-xl border border-black/15 bg-surface px-3.5 pr-10 text-[16px] font-semibold text-ink focus:border-primary focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-2xs"
            >
              <option value="all">Tất cả 7 ngày qua ({ARTICLES.length} bài)</option>
              {timelineDays
                .filter((d) => d.id !== 'all')
                .map((day) => {
                  const count = ARTICLES.filter((a) => a.dateStr === day.dateStr).length
                  return (
                    <option key={day.id} value={day.dateStr}>
                      {day.label} ({count} bài)
                    </option>
                  )
                })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Trạng thái bộ lọc hiện tại & Nút đặt lại */}
        {(selectedCategory !== 'Tất cả' || selectedDay !== 'all') && (
          <div className="flex items-center justify-between border-t border-black/5 pt-2.5 text-xs">
            <span className="text-muted">
              Đang xem: <strong className="text-primary">{selectedCategory}</strong>
              {selectedDay !== 'all' && (
                <span> · <strong>{timelineDays.find((d) => d.dateStr === selectedDay)?.label || selectedDay}</strong></span>
              )} ({filteredArticles.length} bài)
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Tất cả')
                setSelectedDay('all')
              }}
              className="text-xs font-semibold text-primary hover:underline min-h-[36px] inline-flex items-center"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}
      </div>

      {/* Thông báo sao chép */}
      {copiedId && (
        <div className="rounded-xl bg-[#235937] text-white px-4 py-2.5 text-sm flex items-center justify-between shadow-md">
          <span className="flex items-center gap-2">
            <Check size={16} /> Đã sao chép tóm tắt & Lời Chúa vào bộ nhớ tạm!
          </span>
          <span className="text-xs opacity-80 font-mono">Ctrl+V để dán</span>
        </div>
      )}

      {/* Danh Sách Bài Viết */}
      <div className="space-y-4">
        {filteredArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-black/15 bg-card p-8 text-center text-muted">
            <p className="font-medium">Không tìm thấy bài viết nào trong mốc ngày này.</p>
            <p className="mt-1 text-sm">Xin chọn mốc ngày khác hoặc bấm "Xem tất cả 7 ngày".</p>
          </div>
        ) : (
          filteredArticles.map((article) => {
            const isSaved = savedIds.includes(article.id)
            return (
              <article
                key={article.id}
                className="group rounded-2xl border border-black/5 bg-card p-4 shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between text-xs text-muted mb-2">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                    {article.category}
                  </span>
                  <span>{article.dateDisplay || article.dateStr} · {article.author}</span>
                </div>

                <Link
                  to="/bai-viet/$id"
                  params={{ id: String(article.id) }}
                  className="block group-hover:text-primary transition-colors"
                >
                  <h2 className="font-serif text-[19px] font-bold leading-snug text-ink group-hover:text-primary">
                    {article.title}
                  </h2>
                </Link>

                <p className="mt-2 text-[17px] text-ink/80 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>

                {/* Trích Lời Chúa đính kèm */}
                <div className="mt-3 rounded-xl bg-surface p-3.5 border-l-4 border-accent">
                  <p className="font-serif text-[17px] italic text-ink leading-relaxed">
                    "{article.scriptureVerse}"
                  </p>
                </div>

                {/* Chân thẻ: Các nút tương tác */}
                <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
                  <Link
                    to="/bai-viet/$id"
                    params={{ id: String(article.id) }}
                    className="inline-flex min-h-[44px] items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Đọc chi tiết <ChevronRight size={16} />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleShare(article, e)}
                      title="Chia sẻ Lời Chúa & bài viết"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-black/10 bg-surface/50 px-3 text-xs font-semibold text-ink hover:bg-black/5 hover:text-primary transition-colors"
                      aria-label="Chia sẻ bài viết"
                    >
                      <Share2 size={16} />
                      <span>Chia sẻ</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => toggleSave(article.id, e)}
                      title={isSaved ? 'Bỏ lưu' : 'Lưu đọc sau'}
                      className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border px-3 text-xs font-semibold transition-colors ${
                        isSaved
                          ? 'border-accent bg-accent/15 text-accent'
                          : 'border-black/10 bg-surface/50 text-ink hover:bg-black/5 hover:text-primary'
                      }`}
                      aria-label={isSaved ? 'Đã lưu' : 'Lưu bài viết'}
                    >
                      {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                      <span>{isSaved ? 'Đã lưu' : 'Lưu'}</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })
        )}
      </div>

      <div className="text-center text-xs text-muted pt-2">
        <p>Thông tin và bài viết tổng hợp từ TGP Sài Gòn (tgpsaigon.net)</p>
      </div>

      <ShareDialog
        isOpen={!!shareArticle}
        onClose={() => setShareArticle(null)}
        data={shareArticle}
      />
    </div>
  )
}
