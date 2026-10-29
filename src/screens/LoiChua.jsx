import { useState } from 'react'
import { Sparkles, RefreshCw, Copy, Check, BookOpen, ExternalLink, Heart, Share2 } from 'lucide-react'
import { DAILY_GOSPEL, SCRIPTURES_POOL } from './data.js'
import { load, save } from '../lib/storage.js'
import { copyText } from '../lib/clipboard.js'
import ShareDialog from '../components/ShareDialog.jsx'

export default function LoiChua() {
  const [currentScripture, setCurrentScripture] = useState(() => {
    return load('drawn_scripture', SCRIPTURES_POOL[0])
  })
  const [isCopied, setIsCopied] = useState(false)
  const [isAnim, setIsAnim] = useState(false)
  const [shareData, setShareData] = useState(null)

  const drawNewScripture = () => {
    setIsAnim(true)
    setTimeout(() => {
      const remaining = SCRIPTURES_POOL.filter((s) => s.verse !== currentScripture.verse)
      const next = remaining[Math.floor(Math.random() * remaining.length)]
      setCurrentScripture(next)
      save('drawn_scripture', next)
      setIsAnim(false)
    }, 200)
  }

  const copyScripture = () => {
    const text = `✨ Lộc Lời Chúa Soi Đường:\n"${currentScripture.verse}"\n— ${currentScripture.reference}\n\nSuy tư: ${currentScripture.reflection}\n\n(Cổng thông tin Có Chúa Trong Đời - TGP Sài Gòn)`
    copyText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2500)
  }

  return (
    <div className="px-4 pt-4 pb-6 space-y-6">
      {/* Tiêu đề trang */}
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <BookOpen size={14} />
          <span>PHỤNG VỤ LỜI CHÚA</span>
        </div>
        <h1 className="mt-2 font-serif text-2xl font-bold text-ink">
          Tin Mừng & Lộc Lời Chúa
        </h1>
        <p className="text-sm text-muted">
          Lắng nghe Lời hằng sống soi chiếu đời sống mỗi ngày
        </p>
      </div>

      {/* KHỐI 1: BỐC LỘC LỜI CHÚA SOI ĐƯỜNG */}
      <section className="rounded-3xl border-2 border-accent/40 bg-gradient-to-b from-card to-surface p-5 shadow-sm relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-accent/20">
          <div className="flex items-center gap-1.5 text-accent font-semibold text-sm">
            <Sparkles size={16} />
            <span>LỘC LỜI CHÚA SOI ĐƯỜNG</span>
          </div>
          <span className="text-xs text-muted">Rút ngẫu nhiên</span>
        </div>

        {/* Nội dung câu lộc */}
        <div className={`mt-4 py-3 text-center transition-opacity duration-200 ${isAnim ? 'opacity-30' : 'opacity-100'}`}>
          <div className="mx-auto w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-3">
            <Heart size={20} />
          </div>
          <blockquote className="font-serif text-lg font-bold text-ink leading-relaxed px-2">
            "{currentScripture.verse}"
          </blockquote>
          <p className="mt-2 text-sm font-semibold text-primary">
            {currentScripture.reference}
          </p>
          <p className="mt-3 text-[17px] text-ink/85 italic bg-card/90 rounded-xl p-3.5 border border-black/5 leading-relaxed">
            💡 {currentScripture.reflection}
          </p>
        </div>

        {/* Cụm nút bấm tương tác */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={drawNewScripture}
            className="flex-1 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-accent px-4 font-semibold text-primary shadow-xs hover:opacity-95 active:scale-[0.98] transition-all"
          >
            <RefreshCw size={18} className={isAnim ? 'animate-spin' : ''} />
            <span>Rút Lộc Mới</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setShareData({
                title: 'Lộc Lời Chúa Soi Đường',
                scriptureVerse: currentScripture.verse,
                summary: `${currentScripture.reference} — ${currentScripture.reflection}`,
                originalUrl: 'https://tgpsaigon.net',
              })
            }}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-primary text-white px-4 font-semibold hover:opacity-95 active:scale-[0.98] transition-all"
          >
            <Share2 size={18} />
            <span>Chia sẻ Lời Chúa</span>
          </button>

          <button
            type="button"
            onClick={copyScripture}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-primary/20 bg-card px-4 font-semibold text-primary hover:bg-primary/5 active:scale-[0.98] transition-all"
            title="Sao chép câu Kinh Thánh"
          >
            {isCopied ? (
              <>
                <Check size={18} className="text-[#235937]" />
                <span className="text-[#235937]">Đã sao chép</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Sao chép</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* KHỐI 2: TIN MỪNG HÔM NAY */}
      <section className="rounded-3xl border border-black/5 bg-card p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            TIN MỪNG HÔM NAY
          </span>
          <span className="text-xs text-muted">{DAILY_GOSPEL.liturgicalColor}</span>
        </div>

        <h2 className="font-serif text-xl font-bold text-ink leading-snug">
          {DAILY_GOSPEL.reference}
        </h2>

        <div className="rounded-2xl bg-surface p-4 border-l-4 border-primary">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
            Chủ đề: {DAILY_GOSPEL.theme}
          </p>
          <p className="mt-2 font-serif text-[18px] italic leading-relaxed text-ink">
            "{DAILY_GOSPEL.verse}"
          </p>
        </div>

        {/* Khối Suy Niệm */}
        <div className="pt-2 border-t border-black/5 space-y-2">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-semibold text-primary">Gợi ý suy niệm</span>
            <span>{DAILY_GOSPEL.meditationAuthor}</span>
          </div>

          <h3 className="font-serif text-[18px] font-bold text-ink">
            {DAILY_GOSPEL.meditationTitle}
          </h3>

          <p className="text-[17px] leading-relaxed text-ink/90 whitespace-pre-line">
            {DAILY_GOSPEL.meditationText}
          </p>
        </div>

        {/* Liên kết nguồn chính thức & Nút chia sẻ */}
        <div className="pt-3 border-t border-black/5 flex items-center justify-between flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setShareData({
                title: `${DAILY_GOSPEL.reference} - ${DAILY_GOSPEL.meditationTitle}`,
                scriptureVerse: DAILY_GOSPEL.verse,
                summary: DAILY_GOSPEL.meditationText,
                originalUrl: DAILY_GOSPEL.sourceUrl,
              })
            }}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-accent/20 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-accent/30 transition-colors"
          >
            <Share2 size={14} />
            <span>Chia sẻ Tin Mừng & Suy Niệm</span>
          </button>

          <a
            href={DAILY_GOSPEL.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors"
          >
            <span>Nguồn: TGP Sài Gòn (tgpsaigon.net)</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Hộp thoại chia sẻ thông minh */}
      <ShareDialog
        isOpen={!!shareData}
        onClose={() => setShareData(null)}
        data={shareData}
      />
    </div>
  )
}
