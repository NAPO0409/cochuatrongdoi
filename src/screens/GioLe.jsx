import { useState, useMemo } from 'react'
import { Clock, MapPin, Phone, Search, Info, ChevronDown } from 'lucide-react'
import { MASS_TIMES, DEANERIES } from './data.js'

export default function GioLe() {
  const [selectedDeanery, setSelectedDeanery] = useState('Tất cả')
  const [query, setQuery] = useState('')

  const filteredChurches = useMemo(() => {
    return MASS_TIMES.filter((item) => {
      const matchDeanery =
        selectedDeanery === 'Tất cả' || item.deanery === selectedDeanery
      const matchQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.address.toLowerCase().includes(query.toLowerCase()) ||
        (item.deanery && item.deanery.toLowerCase().includes(query.toLowerCase())) ||
        (item.note && item.note.toLowerCase().includes(query.toLowerCase()))
      return matchDeanery && matchQuery
    })
  }, [selectedDeanery, query])

  return (
    <div className="px-4 pt-4 pb-6 space-y-5">
      {/* Tiêu đề trang */}
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Clock size={14} />
          <span>MỤC VỤ GIÁO XỨ</span>
        </div>
        <h1 className="mt-2 font-serif text-2xl font-bold text-ink">
          Tra Cứu Giờ Lễ Sài Gòn
        </h1>
        <p className="text-sm text-muted">
          Giờ thánh lễ ngày thường & Chúa Nhật tại các giáo xứ TGP Sài Gòn
        </p>

        {/* Ô tìm kiếm */}
        <div className="mt-3 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm tên giáo xứ, giáo hạt, tên đường..."
            className="w-full min-h-[46px] rounded-xl border border-black/10 bg-card pl-10 pr-4 text-base text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
          />
        </div>
      </div>

      {/* Bộ Lọc Giáo Hạt: Dạng danh sách thả xuống (Dropdown Select) - không vuốt ngang */}
      <div className="rounded-2xl border border-black/10 bg-card p-3.5 shadow-2xs space-y-2.5">
        <label
          htmlFor="deanery-select"
          className="block text-xs font-bold uppercase tracking-wider text-primary"
        >
          ⛪ Chọn Giáo Hạt ({DEANERIES.length - 1} hạt):
        </label>
        <div className="relative">
          <select
            id="deanery-select"
            value={selectedDeanery}
            onChange={(e) => setSelectedDeanery(e.target.value)}
            className="w-full min-h-[48px] appearance-none rounded-xl border border-black/15 bg-surface px-3.5 pr-10 text-[16px] font-semibold text-ink focus:border-primary focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-2xs cursor-pointer"
          >
            <option value="Tất cả">Tất cả giáo hạt ({MASS_TIMES.length} giáo xứ)</option>
            {DEANERIES.filter((d) => d !== 'Tất cả').map((deanery) => {
              const count = MASS_TIMES.filter((m) => m.deanery === deanery).length
              return (
                <option key={deanery} value={deanery}>
                  {deanery} ({count} giáo xứ)
                </option>
              )
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted">
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Trạng thái bộ lọc hiện tại & Nút đặt lại */}
        {(selectedDeanery !== 'Tất cả' || query.trim() !== '') && (
          <div className="flex items-center justify-between border-t border-black/5 pt-2 text-xs">
            <span className="text-muted">
              Đang xem: <strong className="text-primary">{selectedDeanery}</strong> ({filteredChurches.length} giáo xứ)
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedDeanery('Tất cả')
                setQuery('')
              }}
              className="text-xs font-semibold text-primary hover:underline min-h-[36px] inline-flex items-center"
            >
              Xem tất cả giáo hạt
            </button>
          </div>
        )}
      </div>

      {/* Danh sách nhà thờ theo giáo hạt */}
      <div className="space-y-4">
        {filteredChurches.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-black/15 bg-card p-8 text-center text-muted">
            <p className="font-medium">Chưa tìm thấy giáo xứ phù hợp.</p>
            <p className="mt-1 text-sm">Xin thử chọn lại giáo hạt hoặc xóa bớt từ khóa tìm kiếm.</p>
          </div>
        ) : (
          filteredChurches.map((church) => (
            <div
              key={church.id}
              className="rounded-2xl border border-black/5 bg-card p-4 shadow-xs space-y-3"
            >
              {/* Tên và Giáo Hạt */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-serif text-[19px] font-bold text-ink leading-snug">
                    {church.name}
                  </h2>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>{church.address}</span>
                  </p>
                </div>
                <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary shrink-0">
                  {church.deanery || church.district}
                </span>
              </div>

              {/* Lịch lễ */}
              <div className="rounded-xl bg-surface p-3.5 space-y-2.5 border border-black/5">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    Thánh lễ Chúa Nhật:
                  </span>
                  <p className="text-[17px] font-bold text-ink mt-0.5 leading-relaxed">
                    {church.sunday}
                  </p>
                </div>

                <div className="border-t border-black/5 pt-2">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wide">
                    Thánh lễ ngày thường:
                  </span>
                  <p className="text-[17px] font-medium text-ink mt-0.5 leading-relaxed">
                    {church.weekday}
                  </p>
                </div>
              </div>

              {/* Ghi chú mục vụ */}
              {church.note && (
                <div className="flex items-start gap-1.5 text-sm text-amber-950 font-medium bg-amber-50 rounded-lg p-2.5 border border-amber-200/50">
                  <Info size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{church.note}</span>
                </div>
              )}

              {/* Số điện thoại liên hệ */}
              {church.phone && (
                <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs text-muted">Văn phòng giáo xứ:</span>
                  <a
                    href={`tel:${church.phone.replace(/\s+/g, '')}`}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    <Phone size={14} />
                    <span>{church.phone}</span>
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="rounded-2xl bg-surface p-4 text-xs text-muted space-y-1 border border-black/5">
        <p className="font-semibold text-ink">Lưu ý phụng vụ:</p>
        <p>• Vào các ngày lễ trọng, lễ buộc hoặc Tết, giờ lễ có thể được điều chỉnh theo thông báo của từng giáo xứ.</p>
        <p>• Quý cộng đoàn xin liên hệ văn phòng giáo xứ để biết thêm chi tiết các giờ giải tội.</p>
      </div>
    </div>
  )
}
