// ─────────────────────────────────────────────────────────────
// SAO LƯU — nén cả dự án thành một tệp ZIP, đặt ở thư mục cha.
// Bỏ qua: node_modules, dist, .git và các tệp .zip.
// Chạy: npm run sao-luu      (chạy được trên Windows và Mac, không cần cài thêm gì)
// ─────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import zlib from 'node:zlib'

const goc = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const BO_QUA = new Set(['node_modules', 'dist', '.git', '.DS_Store'])
const tenDuAn = path.basename(goc)

function duyet(thuMuc, ketQua = []) {
  for (const ten of fs.readdirSync(thuMuc)) {
    if (BO_QUA.has(ten) || ten.endsWith('.zip')) continue
    const p = path.join(thuMuc, ten)
    const st = fs.statSync(p)
    if (st.isDirectory()) duyet(p, ketQua)
    else ketQua.push({ p, st })
  }
  return ketQua
}

const now = new Date()
const hai = (n) => String(n).padStart(2, '0')
const tenTep = `sao-luu-${tenDuAn}-${hai(now.getDate())}-${hai(now.getMonth() + 1)}-${hai(now.getHours())}h${hai(now.getMinutes())}.zip`
const dich = path.join(goc, '..', tenTep)

const dosTime = (d) => ((d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1)) & 0xffff
const dosDate = (d) => (((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate()) & 0xffff

const phan = [], trungTam = []
let viTri = 0
for (const { p, st } of duyet(goc)) {
  const ten = Buffer.from(path.join(tenDuAn, path.relative(goc, p)).split(path.sep).join('/'), 'utf8')
  const goc_ = fs.readFileSync(p)
  const nen = zlib.deflateRawSync(goc_, { level: 9 })
  const crc = zlib.crc32(goc_) >>> 0
  const t = dosTime(st.mtime), d = dosDate(st.mtime)
  const dau = Buffer.alloc(30)
  dau.writeUInt32LE(0x04034b50, 0); dau.writeUInt16LE(20, 4); dau.writeUInt16LE(0x0800, 6); dau.writeUInt16LE(8, 8)
  dau.writeUInt16LE(t, 10); dau.writeUInt16LE(d, 12); dau.writeUInt32LE(crc, 14)
  dau.writeUInt32LE(nen.length, 18); dau.writeUInt32LE(goc_.length, 22); dau.writeUInt16LE(ten.length, 26)
  phan.push(dau, ten, nen)
  const tt = Buffer.alloc(46)
  tt.writeUInt32LE(0x02014b50, 0); tt.writeUInt16LE(20, 4); tt.writeUInt16LE(20, 6); tt.writeUInt16LE(0x0800, 8); tt.writeUInt16LE(8, 10)
  tt.writeUInt16LE(t, 12); tt.writeUInt16LE(d, 14); tt.writeUInt32LE(crc, 16); tt.writeUInt32LE(nen.length, 20)
  tt.writeUInt32LE(goc_.length, 24); tt.writeUInt16LE(ten.length, 28); tt.writeUInt32LE(viTri, 42)
  trungTam.push(tt, ten)
  viTri += dau.length + ten.length + nen.length
}
const cd = Buffer.concat(trungTam)
const ket = Buffer.alloc(22)
ket.writeUInt32LE(0x06054b50, 0); ket.writeUInt16LE(trungTam.length / 2, 8); ket.writeUInt16LE(trungTam.length / 2, 10)
ket.writeUInt32LE(cd.length, 12); ket.writeUInt32LE(viTri, 16)
fs.writeFileSync(dich, Buffer.concat([...phan, cd, ket]))
console.log(`Đã sao lưu ${trungTam.length / 2} tệp → ${dich} (${Math.round(fs.statSync(dich).size / 1024)} KB)`)
