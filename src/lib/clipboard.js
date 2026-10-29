// ─────────────────────────────────────────────────────────────
// TIỆN ÍCH SAO CHÉP VÀ CHIA SẺ MẠNG XÃ HỘI
// Đảm bảo hoạt động tin cậy trên cả máy tính lẫn điện thoại
// ─────────────────────────────────────────────────────────────

/**
 * Sao chép văn bản vào bộ nhớ tạm (Clipboard) một cách đồng bộ & chắc chắn.
 * Sử dụng document.execCommand('copy') trước để bắt kịp sự kiện click của người dùng
 * mà không bị các trình duyệt chặn do mất focus khi mở tab mới.
 */
export function copyText(text) {
  if (!text) return false
  let successful = false

  // Cách 1: Tạo phần tử textarea ẩn và sao chép đồng bộ (bắt buộc chạy trước khi mở tab)
  try {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = '0'
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'
    textArea.style.opacity = '0'
    textArea.setAttribute('readonly', '')
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    textArea.setSelectionRange(0, text.length)
    successful = document.execCommand('copy')
    document.body.removeChild(textArea)
  } catch (err) {
    console.warn('execCommand copy fallback error:', err)
  }

  // Cách 2: Gọi đồng thời Clipboard API hiện đại nếu môi trường hỗ trợ
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      successful = true
    }).catch(() => {
      // Đã có cách 1 dự phòng
    })
  }

  return successful
}

/**
 * Soạn nội dung trọn gói để chia sẻ
 */
export function formatShareContent({ title, scriptureVerse, scripture, summary, reflection, originalUrl, sourceUrl }) {
  const finalTitle = title || 'Có Chúa Trong Đời - TGP Sài Gòn'
  const finalVerse = scriptureVerse || scripture || ''
  const finalSummary = summary || reflection || ''
  const finalUrl = originalUrl || sourceUrl || 'https://tgpsaigon.net'

  let text = `📖 ${finalTitle}`
  if (finalVerse) {
    text += `\n\n✨ Lời Chúa soi đường:\n"${finalVerse}"`
  }
  if (finalSummary) {
    text += `\n\n${finalSummary}`
  }
  text += `\n\nXem tại: ${finalUrl}`

  return {
    title: finalTitle,
    verse: finalVerse,
    summary: finalSummary,
    url: finalUrl,
    fullText: text,
  }
}

/**
 * Xử lý chia sẻ lên các mạng xã hội kèm tự động sao chép nội dung
 */
export function shareToSocial(platform, data) {
  const { title, verse, summary, url, fullText } = formatShareContent(data)

  // 1. Sao chép nội dung vào bộ nhớ tạm TRƯỚC KHI mở cửa sổ mới
  copyText(fullText)

  // 2. Mở đường link chia sẻ tương ứng
  const encodedUrl = encodeURIComponent(url)
  const encodedFullText = encodeURIComponent(fullText)
  const encodedQuote = encodeURIComponent(verse ? `"${verse}" - ${title}` : title)

  let shareLink = ''

  if (platform === 'facebook') {
    // Facebook: truyền cả link bài viết và quote trích dẫn
    shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedQuote}`
  } else if (platform === 'zalo') {
    shareLink = `https://sp.zalo.me/plugins/share?url=${encodedUrl}`
  } else if (platform === 'telegram') {
    shareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedFullText}`
  } else if (platform === 'twitter') {
    shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedFullText}`
  }

  if (shareLink) {
    window.open(shareLink, '_blank', 'noopener,noreferrer,width=600,height=550')
  }

  return fullText
}
