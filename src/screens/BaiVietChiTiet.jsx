import { useState } from 'react'
import { useParams, Link } from '@tanstack/react-router'
import { ArrowLeft, Bookmark, BookmarkCheck, Share2, Check, ExternalLink, Type } from 'lucide-react'
import { ARTICLES } from './data.js'
import { load, save } from '../lib/storage.js'
import { copyText, shareToSocial } from '../lib/clipboard.js'
import ShareDialog from '../components/ShareDialog.jsx'

export default function BaiVietChiTiet() {
  const { id } = useParams({ strict: false })
  const article = ARTICLES.find((item) => String(item.id) === String(id)) || ARTICLES[0]

  const [fontSize, setFontSize] = useState(18) // cỡ chữ mặc định 18px dễ đọc
  const [savedIds, setSavedIds] = useState(() => load('saved_articles', []))
  const [isCopied, setIsCopied] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  const isSaved = savedIds.includes(article.id)

  const toggleSave = () => {
    const next = isSaved
      ? savedIds.filter((item) => item !== article.id)
      : [...savedIds, article.id]
    setSavedIds(next)
    save('saved_articles', next)
  }

  const getFullShareText = () => {
    return `📖 ${article.title}\n\n✨ Lời Chúa soi đường:\n"${article.scriptureVerse}"\n\n${article.summary}\n\nXem bài gốc tại: ${article.originalUrl}`
  }

  const copyToClipboard = () => {
    copyText(getFullShareText())
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 4000)
  }

  const handleShareTo = (platform) => {
    shareToSocial(platform, article)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 5000)
  }

  return (
    <div className="px-4 pt-4 pb-8 space-y-5">
      {/* Thanh điều hướng quay lại & Tiện ích đọc */}
      <div className="flex items-center justify-between border-b border-black/5 pb-3">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft size={18} />
          <span>Quay lại Bản Tin</span>
        </Link>

        {/* Cụm công cụ chỉnh cỡ chữ cho người lớn tuổi */}
        <div className="flex items-center gap-1 bg-card rounded-xl p-1 border border-black/10">
          <span className="px-1.5 text-xs text-muted flex items-center gap-0.5">
            <Type size={16} />
          </span>
          <button
            type="button"
            onClick={() => setFontSize((f) => Math.max(16, f - 2))}
            className="min-h-[44px] min-w-[44px] rounded-lg text-sm font-bold text-ink hover:bg-black/5 flex items-center justify-center transition-colors"
            title="Giảm cỡ chữ"
            aria-label="Giảm cỡ chữ"
          >
            A-
          </button>
          <button
            type="button"
            onClick={() => setFontSize((f) => Math.min(26, f + 2))}
            className="min-h-[44px] min-w-[44px] rounded-lg text-base font-bold text-ink hover:bg-black/5 flex items-center justify-center transition-colors"
            title="Tăng cỡ chữ"
            aria-label="Tăng cỡ chữ"
          >
            A+
          </button>
        </div>
      </div>

      {/* Thông tin đầu bài */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {article.category}
          </span>
          <span className="text-xs text-muted">{article.dateDisplay || article.dateStr || article.date}</span>
        </div>

        <h1 className="font-serif text-2xl font-bold leading-tight text-ink">
          {article.title}
        </h1>

        <p className="text-xs text-muted">
          Tác giả / Nguồn: <strong className="text-ink">{article.author}</strong>
        </p>
      </div>

      {/* Khung trích dẫn Lời Chúa soi đường */}
      <div className="rounded-2xl border-l-4 border-accent bg-surface p-4 shadow-xs">
        <span className="text-xs font-bold text-accent uppercase tracking-wide">
          Lời Chúa Soi Đường
        </span>
        <blockquote className="mt-1 font-serif text-[17px] font-semibold italic text-ink/90 leading-relaxed">
          "{article.scriptureVerse}"
        </blockquote>
      </div>

      {/* Toàn văn nội dung bài viết */}
      <div
        className="rounded-2xl border border-black/5 bg-card p-5 shadow-xs space-y-4"
        style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
      >
        <p className="font-medium text-ink italic border-b border-black/5 pb-3">
          {article.summary}
        </p>

        {article.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="text-ink/90">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Khung chia sẻ thông minh & Lưu bài */}
      <div className="rounded-2xl border border-black/5 bg-card p-4 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-ink uppercase tracking-wide">
            Lan Tỏa Lên Mạng Xã Hội
          </h2>
          <span className="text-xs text-muted">Tự động sao chép Lời Chúa</span>
        </div>

        {isCopied && (
          <div className="rounded-xl bg-[#235937] text-white p-3 text-xs flex items-center gap-2 shadow-xs">
            <Check size={16} className="shrink-0" />
            <span>Đã sao chép trọn bộ (Tiêu đề, Lời Chúa, Tóm tắt và Link gốc)! Bạn có thể dán vào Zalo/Facebook.</span>
          </div>
        )}

        {/* Các nút bấm chia sẻ trực tiếp lên mạng xã hội */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Nút Zalo */}
          <button
            type="button"
            onClick={() => handleShareTo('zalo')}
            className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl bg-[#0068FF] text-white font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-2xs"
            title="Chia sẻ lên Zalo"
          >
            <span className="font-black text-sm tracking-tighter">Zalo</span>
            <span>Chia sẻ</span>
          </button>

          {/* Nút Facebook */}
          <button
            type="button"
            onClick={() => handleShareTo('facebook')}
            className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl bg-[#1877F2] text-white font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-2xs"
            title="Chia sẻ lên Facebook"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>

          {/* Nút Telegram */}
          <button
            type="button"
            onClick={() => handleShareTo('telegram')}
            className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl bg-[#2AABEE] text-white font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-2xs"
            title="Chia sẻ lên Telegram"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.536-.196 1.006.128.832.943z"/>
            </svg>
            <span>Telegram</span>
          </button>

          {/* Nút X */}
          <button
            type="button"
            onClick={() => handleShareTo('twitter')}
            className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl bg-[#0f1419] text-white font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-2xs"
            title="Chia sẻ lên X (Twitter)"
          >
            <span className="font-black text-sm">𝕏</span>
            <span>Chia sẻ</span>
          </button>
        </div>

        {/* Nút Sao chép & Lưu bài */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => setIsShareOpen(true)}
            className="flex-1 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-accent px-4 font-semibold text-primary shadow-xs hover:opacity-95 active:scale-[0.98] transition-all"
          >
            <Share2 size={18} />
            <span>Tùy chọn chia sẻ khác</span>
          </button>

          <button
            type="button"
            onClick={toggleSave}
            className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border px-4 font-semibold transition-all active:scale-[0.98] ${
              isSaved
                ? 'border-accent bg-accent/15 text-accent'
                : 'border-black/10 bg-surface text-ink hover:bg-black/5'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck size={18} />
                <span>Đã lưu vào máy</span>
              </>
            ) : (
              <>
                <Bookmark size={18} />
                <span>Lưu bài viết này</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs text-muted">
          <span>Xem bài gốc trên trang chủ:</span>
          <a
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-primary hover:underline"
          >
            <span>TGPsaigon.net</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Hộp thoại chia sẻ thông minh */}
      <ShareDialog
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        data={article}
      />
    </div>
  )
}
