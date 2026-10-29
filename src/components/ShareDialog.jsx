import { useState } from 'react'
import { X, Check, Copy, Share2 } from 'lucide-react'
import { copyText, formatShareContent, shareToSocial } from '../lib/clipboard.js'

export default function ShareDialog({ isOpen, onClose, data }) {
  const [copiedMessage, setCopiedMessage] = useState('')

  if (!isOpen || !data) return null

  const { title, verse, summary, url, fullText } = formatShareContent(data)

  const handleCopyOnly = () => {
    copyText(fullText)
    setCopiedMessage('Đã sao chép toàn bộ nội dung & link vào bộ nhớ tạm!')
    setTimeout(() => setCopiedMessage(''), 3500)
  }

  const handlePlatformShare = (platform) => {
    // Tự động sao chép đồng bộ và mở cửa sổ mạng xã hội
    shareToSocial(platform, data)
    setCopiedMessage('Đã sao chép sẵn vào bộ nhớ tạm! Bạn chỉ cần bấm "Dán" (Ctrl+V) vào bài viết.')
    setTimeout(() => setCopiedMessage(''), 4000)
  }

  const shareNative = async () => {
    copyText(fullText)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: fullText,
          url,
        })
      } catch {
        // Người dùng hủy chia sẻ
      }
    } else {
      setCopiedMessage('Đã sao chép toàn bộ nội dung vào bộ nhớ tạm!')
      setTimeout(() => setCopiedMessage(''), 3500)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 backdrop-blur-xs">
      <div className="w-full max-w-[500px] rounded-t-3xl sm:rounded-3xl bg-card p-5 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        {/* Tiêu đề hộp thoại */}
        <div className="flex items-center justify-between pb-2 border-b border-black/5">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Share2 size={20} />
            <h3 className="font-serif text-lg">Chia Sẻ Lên Mạng Xã Hội</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-muted hover:bg-black/5 hover:text-ink"
            aria-label="Đóng hộp thoại"
          >
            <X size={20} />
          </button>
        </div>

        {/* Thông báo đã sao chép nổi bật */}
        {copiedMessage ? (
          <div className="rounded-xl bg-[#235937] text-white p-3 text-xs flex items-center gap-2 shadow-xs transition-all">
            <Check size={18} className="shrink-0 text-white" />
            <span className="font-medium">{copiedMessage}</span>
          </div>
        ) : (
          <div className="rounded-xl bg-amber-50 p-3 text-xs text-amber-900 border border-amber-200 space-y-1">
            <p className="font-semibold">💡 Cơ chế chia sẻ thông minh:</p>
            <p>
              Khi bạn bấm nút mạng xã hội, hệ thống sẽ <strong>tự động sao chép</strong> Lời Chúa & nội dung. Khi cửa sổ mở ra, bạn chỉ cần bấm <strong>Dán (Ctrl+V)</strong> là xong!
            </p>
          </div>
        )}

        {/* Xem trước nội dung chia sẻ */}
        <div className="rounded-xl bg-surface p-3 text-xs space-y-1.5 border border-black/5">
          <p className="font-bold text-ink line-clamp-1">{title}</p>
          {verse && (
            <p className="font-serif italic text-primary line-clamp-2">
              "{verse}"
            </p>
          )}
          <p className="text-muted line-clamp-1">Nguồn: {url}</p>
        </div>

        {/* Các nút bấm mạng xã hội */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* Nút Facebook */}
          <button
            type="button"
            onClick={() => handlePlatformShare('facebook')}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#1877F2] text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>

          {/* Nút Zalo */}
          <button
            type="button"
            onClick={() => handlePlatformShare('zalo')}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0068FF] text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <span className="font-black text-sm tracking-tighter">Zalo</span>
            <span>Chia sẻ</span>
          </button>

          {/* Nút Telegram */}
          <button
            type="button"
            onClick={() => handlePlatformShare('telegram')}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#2AABEE] text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.536-.196 1.006.128.832.943z"/>
            </svg>
            <span>Telegram</span>
          </button>

          {/* Nút X (Twitter) */}
          <button
            type="button"
            onClick={() => handlePlatformShare('twitter')}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#0f1419] text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <span className="font-black text-sm">𝕏</span>
            <span>Chia sẻ</span>
          </button>
        </div>

        {/* Nút Chia sẻ mặc định của điện thoại (nếu có) */}
        {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
          <button
            type="button"
            onClick={shareNative}
            className="w-full flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-primary bg-primary/5 text-primary font-semibold text-sm hover:bg-primary/10 active:scale-[0.98] transition-all"
          >
            <Share2 size={18} />
            <span>Mở bảng chia sẻ của điện thoại</span>
          </button>
        )}

        {/* Nút Sao chép nội dung */}
        <button
          type="button"
          onClick={handleCopyOnly}
          className="w-full flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-black/10 bg-surface text-ink font-semibold text-sm hover:bg-black/5 active:scale-[0.98] transition-all"
        >
          {copiedMessage ? (
            <>
              <Check size={18} className="text-[#235937]" />
              <span className="text-[#235937] font-semibold">Đã lưu vào bộ nhớ tạm!</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Sao chép toàn bộ nội dung & link gốc</span>
            </>
          )}
        </button>

        {/* Nút đóng */}
        <button
          type="button"
          onClick={onClose}
          className="w-full min-h-[44px] text-sm text-muted hover:text-ink transition-colors font-medium"
        >
          Đóng lại
        </button>
      </div>
    </div>
  )
}
