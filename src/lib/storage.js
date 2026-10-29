// Ghi nhớ ngay trên máy người dùng (bộ nhớ trình duyệt).
// Không cần đăng nhập, không gửi dữ liệu đi đâu.
const PREFIX = 'mini-app:'

export function load(key, fallback) {
  try {
    const raw = window.localStorage.getItem(PREFIX + key)
    return raw === null ? fallback : JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function save(key, value) {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    // Một số trình duyệt chặn bộ nhớ — app vẫn chạy, chỉ là không nhớ được.
  }
}
