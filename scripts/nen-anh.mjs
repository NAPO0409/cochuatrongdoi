// ─────────────────────────────────────────────────────────────
// NÉN ẢNH — thu nhỏ và đổi sang .webp, lưu vào public/images/
// Chạy: npm run nen-anh -- "đường/dẫn/ảnh.jpg"            (một ảnh)
//       npm run nen-anh -- "thư/mục/ảnh" --rong 1000      (cả thư mục)
// Tên tệp mới: không dấu, không khoảng trắng. Ảnh gốc giữ nguyên.
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const args = process.argv.slice(2)
const i = args.indexOf('--rong')
const rong = i >= 0 ? Number(args[i + 1]) : 1200
const nguon = args.filter((a, k) => i < 0 || (k !== i && k !== i + 1))[0]
if (!nguon) { console.error('Cần đường dẫn tới ảnh hoặc thư mục ảnh.'); process.exit(1) }

const goc = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dichDir = path.join(goc, 'public', 'images')
fs.mkdirSync(dichDir, { recursive: true })

const khongDau = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const LA_ANH = /\.(jpe?g|png|webp|heic|heif|tiff?|gif|avif)$/i

const ds = fs.statSync(nguon).isDirectory()
  ? fs.readdirSync(nguon).filter((f) => LA_ANH.test(f)).map((f) => path.join(nguon, f))
  : [nguon]

for (const f of ds) {
  const ten = khongDau(path.basename(f).replace(/\.\w+$/, '')) + '.webp'
  const ra = path.join(dichDir, ten)
  try {
    await sharp(f).rotate().resize({ width: rong, withoutEnlargement: true }).webp({ quality: 78 }).toFile(ra)
    console.log(`✓ ${path.basename(f)} → public/images/${ten} (${Math.round(fs.statSync(ra).size / 1024)} KB)`)
  } catch (e) {
    console.log(`✗ ${path.basename(f)}: không đọc được ảnh (${e.message})`)
  }
}
