import { useState } from 'react'
import { Flame, Send, Trash2, HeartHandshake, ShieldCheck } from 'lucide-react'
import { load, save } from '../lib/storage.js'

const COMMUNITY_INTENTIONS = [
  { id: 'c1', text: 'Cầu cho hòa bình thế giới và sự hiệp nhất trong Hội Thánh.', time: 'Ý chung' },
  { id: 'c2', text: 'Cầu bình an cho quý cha, quý tu sĩ và toàn thể cộng đoàn dân Chúa.', time: 'Ý chung' },
  { id: 'c3', text: 'Xin Chúa nâng đỡ và chữa lành các bệnh nhân và người cao tuổi.', time: 'Ý chung' },
]

export default function CauNguyen() {
  const [candleCount, setCandleCount] = useState(() => load('candle_count', 42))
  const [justLit, setJustLit] = useState(false)
  const [myIntentions, setMyIntentions] = useState(() => load('user_intentions', []))
  const [inputVal, setInputVal] = useState('')

  const handleLightCandle = () => {
    const next = candleCount + 1
    setCandleCount(next)
    save('candle_count', next)
    setJustLit(true)
    setTimeout(() => setJustLit(false), 3000)
  }

  const handleAddIntention = (e) => {
    e.preventDefault()
    if (!inputVal.trim()) return

    const newIntention = {
      id: Date.now(),
      text: inputVal.trim(),
      time: 'Vừa xong',
    }

    const next = [newIntention, ...myIntentions]
    setMyIntentions(next)
    save('user_intentions', next)
    setInputVal('')
  }

  const handleDeleteIntention = (id) => {
    const next = myIntentions.filter((item) => item.id !== id)
    setMyIntentions(next)
    save('user_intentions', next)
  }

  return (
    <div className="px-4 pt-4 pb-6 space-y-6">
      {/* Tiêu đề trang */}
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Flame size={14} />
          <span>SUY TƯ & KINH NGUYỆN</span>
        </div>
        <h1 className="mt-2 font-serif text-2xl font-bold text-ink">
          Thắp Nến & Ý Cầu Nguyện
        </h1>
        <p className="text-sm text-muted">
          Dâng trọn tâm tình lên Thiên Chúa trong thinh lặng và hiệp thông
        </p>
      </div>

      {/* KHỐI 1: THẮP NẾN BÌNH AN */}
      <section className="rounded-3xl border border-black/5 bg-gradient-to-b from-[#1a1c29] to-[#0e1017] p-6 text-white shadow-md text-center relative overflow-hidden">
        {/* Hình tượng ngọn nến lung linh */}
        <div className="relative mx-auto my-3 flex flex-col items-center justify-center">
          {/* Ngọn lửa */}
          <div
            className={`relative flex items-center justify-center transition-all duration-500 ${
              justLit ? 'scale-125' : 'scale-100'
            }`}
          >
            <div className="h-10 w-6 rounded-full bg-gradient-to-t from-[#ff4500] via-[#ffa500] to-[#ffff99] shadow-[0_0_24px_rgba(255,165,0,0.85)]" />
            <div className="absolute top-1 h-4 w-2.5 rounded-full bg-white/80 blur-[1px]" />
          </div>
          {/* Tim nến */}
          <div className="h-3 w-1 bg-neutral-600 rounded-xs" />
          {/* Thân nến */}
          <div className="h-16 w-10 rounded-t-sm bg-gradient-to-b from-[#f5efe6] to-[#d6c7b2] shadow-inner" />
        </div>

        <p className="font-serif text-lg font-semibold text-amber-200 mt-2">
          "Chúa là ánh sáng và là ơn cứu độ của tôi"
        </p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/90">
          <Flame size={14} className="text-amber-400" />
          <span>Đã có <strong>{candleCount}</strong> ngọn nến được thắp</span>
        </div>

        {justLit && (
          <p className="mt-3 text-xs text-amber-300 font-medium">
            🕊️ Nguyện xin bình an của Chúa ở cùng bạn và gia đình!
          </p>
        )}

        <div className="mt-5">
          <button
            type="button"
            onClick={handleLightCandle}
            className="w-full inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-accent px-6 font-semibold text-primary shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
          >
            <Flame size={20} />
            <span>Thắp một ngọn nến bình an</span>
          </button>
        </div>
      </section>

      {/* KHỐI 2: DÂNG Ý CẦU NGUYỆN */}
      <section className="rounded-3xl border border-black/5 bg-card p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <HeartHandshake className="text-primary" size={20} />
          <h2 className="font-serif text-lg font-bold text-ink">
            Dâng Ý Nguyện Lên Chúa
          </h2>
        </div>

        {/* Form nhập ý nguyện */}
        <form onSubmit={handleAddIntention} className="space-y-3">
          <textarea
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            rows={3}
            placeholder="Viết lời nguyện, xin ơn bình an, xin chữa lành, cầu cho người thân..."
            className="w-full rounded-2xl border border-black/10 bg-surface p-3.5 text-base text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />

          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="w-full inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-primary px-5 font-semibold text-white shadow-xs disabled:opacity-50 active:scale-[0.98] transition-all"
          >
            <Send size={18} />
            <span>Dâng Lời Nguyện Này</span>
          </button>
        </form>

        {/* Lưu ý riêng tư */}
        <div className="rounded-xl bg-surface p-3 text-xs text-muted flex items-start gap-2 border border-black/5">
          <ShieldCheck size={16} className="text-primary shrink-0 mt-0.5" />
          <span>
            <strong>An toàn & Riêng tư:</strong> Lời nguyện của bạn chỉ được lưu trên máy này, không gửi lên mạng để bảo đảm sự thanh tịnh và bảo mật.
          </span>
        </div>

        {/* Danh sách ý nguyện của bạn */}
        {myIntentions.length > 0 && (
          <div className="pt-2 border-t border-black/5 space-y-2.5">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wide">
              Ý nguyện của bạn ({myIntentions.length})
            </h3>
            <ul className="space-y-2.5">
              {myIntentions.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl bg-surface p-3.5 text-[17px] text-ink flex items-start justify-between gap-3 border border-black/5"
                >
                  <p className="leading-relaxed whitespace-pre-line">{item.text}</p>
                  <button
                    type="button"
                    onClick={() => handleDeleteIntention(item.id)}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-red-200 bg-red-50/60 px-3 text-xs font-semibold text-red-600 hover:bg-red-100 transition-colors shrink-0"
                    title="Xóa ý nguyện này"
                    aria-label="Xóa ý nguyện"
                  >
                    <Trash2 size={16} />
                    <span>Xóa</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ý cầu nguyện hiệp thông cộng đoàn */}
        <div className="pt-2 border-t border-black/5 space-y-2">
          <h3 className="text-xs font-bold text-muted uppercase tracking-wide">
            Ý nguyện hiệp thông cộng đoàn
          </h3>
          <ul className="space-y-2">
            {COMMUNITY_INTENTIONS.map((item) => (
              <li
                key={item.id}
                className="rounded-xl bg-surface/60 p-3.5 text-[17px] text-ink/85 border border-black/5"
              >
                <p className="leading-relaxed">🕊️ {item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
