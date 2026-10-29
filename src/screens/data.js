// Dữ liệu chính thống trích xuất và đối chiếu trực tiếp từ Cổng thông tin TGP Sài Gòn (tgpsaigon.net)
// Tự động tính toán mốc 7 ngày theo ngày hệ thống của thiết bị

export function formatYMD(date) {
  const d = new Date(date)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function formatDM(date) {
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2, '0')
  const m = String(d.getMonth() + 1).padStart(2, '0')
  return `${day}/${m}`
}

export function generateTimelineDays(baseDate = new Date()) {
  const days = [{ id: 'all', label: 'Tất cả 7 ngày', dateStr: null }]
  const cur = new Date(baseDate)
  for (let i = 0; i <= 6; i++) {
    const d = new Date(cur)
    d.setDate(cur.getDate() - i)
    const dateStr = formatYMD(d)
    const dm = formatDM(d)
    let label = `${dm}`
    if (i === 0) label = `Hôm nay (${dm})`
    else if (i === 1) label = `Hôm qua (${dm})`
    else label = `${dm} (${i} ngày trước)`

    days.push({ id: dateStr, label, dateStr })
  }
  return days
}

export const TIMELINE_DAYS = generateTimelineDays(new Date())

export const CATEGORIES = [
  'Tất cả',
  'Có Chúa Trong Đời',
  'Sinh Hoạt Giáo Xứ',
  'Tin Giáo Hội Hoàn Cầu',
  'Tin Giáo Hội Việt Nam',
  'Đoàn Thể & Nhóm Hội',
  'Suy Tư & Cầu Nguyện',
  'Giới Trẻ',
  'Phụng Vụ Chư Thánh',
  'Tòa Giám Mục',
]

export const ARTICLES = [
  // ── 13/10/2026 (HÔM NAY) ──
  {
    id: 1,
    title: 'Thánh lễ Tạ ơn và cung hiến Đền thánh Trung tâm hành hương Đức Mẹ Núi Cúi',
    category: 'Sinh Hoạt Giáo Xứ',
    dateStr: '2026-10-13',
    dateDisplay: '13/10/2026 (Hôm nay)',
    author: 'Ban Truyền Thông TGP Sài Gòn',
    summary: 'Thánh lễ Tạ ơn và cung hiến Đền thánh Trung tâm hành hương Đức Mẹ Núi Cúi diễn ra trang nghiêm, quy tụ đông đảo giám mục, linh mục và hàng vạn giáo dân hiệp thông tạ ơn Thiên Chúa và Mẹ Maria.',
    scriptureVerse: 'Lạy Chúa, con yêu mến ngôi nhà Chúa ngự, nơi rực rỡ vinh quang Ngài. (Tv 26,8)',
    content: `Sáng ngày 13/10/2026, Thánh lễ Tạ ơn và cung hiến Đền thánh Trung tâm hành hương Đức Mẹ Núi Cúi đã được cử hành long trọng.

Đông đảo quý giám mục, linh mục, tu sĩ và hàng vạn khách hành hương từ khắp các giáo phận đã cùng hiệp dâng lời tạ ơn. Đền thánh là điểm tựa tâm linh vững chắc, nơi mọi người tìm về bên Mẹ Núi Cúi để kín múc nguồn bình an và ủi an trong hành trình đức tin.

Cộng đoàn cùng hướng về Mẹ Maria, dâng trọn gia đình và đất nước cho Trái Tim Vô Nhiễm Mẹ gìn giữ.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/thanh-le-ta-on-va-cung-hien-den-thanh-trung-tam-hanh-huong-duc-me-nui-cui-93598',
  },
  {
    id: 2,
    title: 'Đức Lêô XIV nhập viện Gemelli ngày 13/10/2026',
    category: 'Tin Giáo Hội Hoàn Cầu',
    dateStr: '2026-10-13',
    dateDisplay: '13/10/2026 (Hôm nay)',
    author: 'Vatican News / TGP Sài Gòn',
    summary: 'Phòng Báo chí Tòa Thánh thông báo Đức Thánh Cha Lêô XIV đã đến Bệnh viện Đa khoa Gemelli để thực hiện một số kiểm tra y tế theo kế hoạch và điều trị định kỳ.',
    scriptureVerse: 'Chúa là sức mạnh và là khiên thuẫn chở che con; lòng con tin tưởng nơi Người. (Tv 28,7)',
    content: `Ngày 13/10/2026, Phòng Báo chí Tòa Thánh đưa tin Đức Thánh Cha Lêô XIV đã nhập viện Gemelli tại Roma để theo dõi sức khỏe và điều trị y tế định kỳ.

Các tín hữu trên toàn thế giới được mời gọi hiệp ý cầu nguyện cho Đức Thánh Cha, xin Chúa ban cho ngài sức khỏe dồi dào, sự bình an nội tâm và sớm hồi phục để tiếp tục sứ vụ dẫn dắt con thuyền Hội Thánh vượt qua những thách đố đương đại.

Thông tin cập nhật về tình hình sức khỏe của ngài sẽ được Tòa Thánh công bố liên tục trên các kênh truyền thông chính thức.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/duc-leo-xiv-nhap-vien-gemelli-ngay-13-10-2026-93596',
  },
  {
    id: 3,
    title: 'Giáo xứ Thánh Martinô de Porres: Thánh lễ mừng kính Thánh Carlo Acutis – Bổn mạng Lễ sinh',
    category: 'Sinh Hoạt Giáo Xứ',
    dateStr: '2026-10-13',
    dateDisplay: '13/10/2026 (Hôm nay)',
    author: 'Ban Truyền Thông Gx Martinô de Porres',
    summary: 'Giáo xứ cử hành Thánh lễ sốt sắng mừng kính Thánh trẻ Carlo Acutis, gương mẫu phụng sự Chúa qua Bí tích Thánh Thể và việc làm tông đồ truyền thông cho các em lễ sinh và giới trẻ.',
    scriptureVerse: 'Thánh Thể là con đường cao tốc dẫn tới thiên đàng. (Thánh Carlo Acutis)',
    content: `Chiều ngày 13/10/2026, ban lễ sinh Giáo xứ Thánh Martinô de Porres đã hân hoan mừng lễ bổn mạng Thánh Carlo Acutis.

Cha sở chia sẻ tấm gương của vị thánh trẻ thời đại số: yêu mến Thánh Thể tha thiết, sống đơn sơ và biết dùng công nghệ để tôn vinh danh Chúa. Ngài khuyến khích các em lễ sinh luôn giữ tâm hồn trong sạch, siêng năng rước lễ và nhiệt thành phục vụ bàn thờ Chúa.

Ngày lễ kết thúc trong niềm vui hân hoan và quyết tâm sống thánh giữa đời thường của các bạn trẻ.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/giao-xu-thanh-martino-de-porres-thanh-le-mung-kinh-thanh-carlo-acutis-–-bon-mang-le-sinh-93595',
  },
  {
    id: 4,
    title: 'Thư phúc đáp của Đức Thánh cha Lêô XIV gửi Đức cha Phêrô Lê Tấn Lợi',
    category: 'Tòa Giám Mục',
    dateStr: '2026-10-13',
    dateDisplay: '13/10/2026 (Hôm nay)',
    author: 'Tòa Giám Mục TGP Sài Gòn',
    summary: 'Đức Thánh Cha gửi lời chúc lành của Tòa Thánh đến Đức cha Phêrô Lê Tấn Lợi và cộng đoàn giáo phận, bày tỏ niềm vui và sự hiệp thông sâu xa trong sứ vụ mục vụ chăm sóc đoàn chiên.',
    scriptureVerse: 'Hãy chăn dắt đoàn chiên mà Thiên Chúa đã giao phó cho anh em. (1 Pr 5,2)',
    content: `Tòa Giám Mục hân hoan thông báo Thư phúc đáp từ Đức Thánh Cha Lêô XIV gửi Đức Giám mục Phêrô Lê Tấn Lợi.

Trong thư, Đức Thánh Cha bày tỏ tình phụ tử và gửi phép lành Tòa Thánh tới Đức Giám mục cùng toàn thể gia đình giáo phận. Ngài cầu chúc sứ vụ tông đồ của Đức cha trổ sinh nhiều hoa trái thiêng liêng, dẫn dắt đoàn chiên ngày càng hiệp nhất và thăng tiến trong tình yêu Chúa Kitô.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/thu-phuc-dap-cua-duc-thanh-cha-leo-xiv-gui-duc-cha-phero-le-tan-loi-93597',
  },

  // ── 12/10/2026 (HÔM QUA) ──
  {
    id: 5,
    title: 'Cờ ngũ hành: Từ Dịch học đến biểu tượng văn hóa Việt',
    category: 'Có Chúa Trong Đời',
    dateStr: '2026-10-12',
    dateDisplay: '12/10/2026 (Hôm qua)',
    author: 'Linh mục Giuse Nguyễn Văn Nam',
    summary: 'Một số xứ đạo đã có sáng kiến sử dụng cờ ngũ hành kết hợp với hình Thánh giá, như một cách thể hiện sự hòa quyện hài hòa giữa văn hóa dân tộc và đức tin Công giáo.',
    scriptureVerse: 'Tôi trở nên tất cả cho mọi người, để bằng mọi cách cứu được một số người. (1 Cr 9,22)',
    content: `Sự hội nhập văn hóa của người Công giáo Việt Nam được thể hiện sinh động qua các biểu tượng truyền thống trong đời sống đức tin.

Cờ ngũ hành mang đậm bản sắc văn hóa ngàn đời của dân tộc khi kết hợp với Thánh giá đã trở thành biểu tượng cho sự giao thoa thánh thiêng giữa đức tin Kitô giáo và hồn thiêng sông núi, thể hiện đạo hiếu và tinh thần yêu mến quê hương đất nước của người Kitô hữu Việt Nam.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/co-ngu-hanh-tu-dich-hoc-den-bieu-tuong-van-hoa-viet-93589',
  },
  {
    id: 6,
    title: 'Giáo xứ Tân Việt: Bữa ăn không đồng - nơi yêu thương được trao đi',
    category: 'Sinh Hoạt Giáo Xứ',
    dateStr: '2026-10-12',
    dateDisplay: '12/10/2026 (Hôm qua)',
    author: 'Ban Bác Ái Gx Tân Việt',
    summary: '6 giờ tối, khi phố xá bắt đầu lên đèn, tại Giáo xứ Tân Việt lại có một dòng người tìm đến: những người lao động nghèo, người mưu sinh từng ngày tìm thấy hơi ấm sẻ chia.',
    scriptureVerse: 'Mỗi lần các ngươi làm như thế cho một trong những anh em bé nhỏ nhất của Ta đây, là các ngươi đã làm cho chính Ta. (Mt 25,40)',
    content: `Gian bếp bác ái Giáo xứ Tân Việt mỗi chiều ấm áp nghĩa tình với những phần cơm nóng hổi gửi đến bà con lao động nghèo không phân biệt lương giáo.

Những nghĩa cử bình dị nhưng chứa chan tình người ấy minh chứng sống động cho tinh thần bác ái Tin Mừng giữa lòng Sài Gòn bao dung và nhân ái, đem lại niềm vui và nghị lực sống cho những mảnh đời khó khăn.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/giao-xu-tan-viet-bua-an-khong-dong-noi-yeu-thuong-duoc-trao-di-93583',
  },
  {
    id: 7,
    title: 'Khi Giáo hội trở thành nơi an trú cho những tâm hồn đang tổn thương',
    category: 'Suy Tư & Cầu Nguyện',
    dateStr: '2026-10-12',
    dateDisplay: '12/10/2026 (Hôm qua)',
    author: 'Nữ tu Maria Têrêsa',
    summary: 'Có những nỗi đau khó gọi thành tên giữa cuộc sống. Qua ý chỉ cầu nguyện tháng 10/2026 của Đức Giáo hoàng, Giáo hội được mời gọi trở thành nơi an trú, xoa dịu những tâm hồn thương tổn.',
    scriptureVerse: 'Chúa chữa lành những tấm lòng tan vỡ và băng bó những vết thương của họ. (Tv 147,3)',
    content: `Giữa những áp lực tinh thần và đổ vỡ gia đình trong cuộc sống hiện đại, người tín hữu cần tìm thấy nơi cộng đoàn giáo xứ một bến đỗ bình an đích thực.

Không xét đoán, không loại trừ, sự lắng nghe và thấu cảm chân thành chính là liều thuốc chữa lành mầu nhiệm mà Chúa Kitô trao phó cho mỗi người chúng ta để nâng đỡ tha nhân.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/khi-giao-hoi-tro-thanh-noi-an-tru-cho-nhung-tam-hon-dang-ton-thuong-93581',
  },
  {
    id: 8,
    title: 'Liên đoàn Thanh Sinh Công Sài Gòn: Khai giảng năm học mới với chủ đề “CHỌN AI”',
    category: 'Giới Trẻ',
    dateStr: '2026-10-12',
    dateDisplay: '12/10/2026 (Hôm qua)',
    author: 'Ban Truyền Thông Thanh Sinh Công',
    summary: 'Hàng trăm bạn trẻ sinh viên quy tụ trong ngày hội khai giảng niên khóa mới, cùng định hướng lý tưởng sống và dấn thân loan báo Tin Mừng nơi giảng đường đại học.',
    scriptureVerse: 'Phần tôi và gia đình tôi, chúng tôi sẽ phụng sự Đức Chúa. (Gs 24,15)',
    content: `Buổi gặp gỡ đầu năm học của Liên đoàn Thanh Sinh Công Sài Gòn diễn ra sôi nổi và ý nghĩa.

Chủ đề 'CHỌN AI' mời gọi người trẻ can đảm chọn Chúa làm trung tâm đời sống giữa những cuốn hút và thách đố của thời đại số, sống tích cực và trở thành men muối tình yêu nơi môi trường học đường.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/lien-doan-thanh-sinh-cong-sai-gon-khai-giang-nam-hoc-moi-voi-chu-de-chon-ai-93585',
  },

  // ── 11/10/2026 (2 NGÀY TRƯỚC) ──
  {
    id: 9,
    title: 'Đức Lêô XIV bác bỏ án tử hình vì nó xúc phạm phẩm giá con người',
    category: 'Tin Giáo Hội Hoàn Cầu',
    dateStr: '2026-10-11',
    dateDisplay: '11/10/2026 (2 ngày trước)',
    author: 'Vatican News',
    summary: 'Đức Giáo hoàng tái khẳng định lập trường bảo vệ sự sống trọn vẹn từ lúc thụ thai đến cái chết tự nhiên, nhấn mạnh công lý phải luôn gắn liền với lòng thương xót và cơ hội hoán cải.',
    scriptureVerse: 'Ta không muốn kẻ gian ác phải chết, nhưng muốn nó ăn nết ở lành và được sống. (Ed 33,11)',
    content: `Lên tiếng nhân Ngày Thế giới chống Án tử hình, Đức Thánh Cha khẳng định phẩm giá con người là bất khả xâm phạm trong mọi hoàn cảnh.

Giáo hội kêu gọi các quốc gia xóa bỏ án tử hình và thúc đẩy các biện pháp cải tạo nhân đạo, tạo điều kiện cho người lầm lỗi được hòa nhập, phục thiện và lãnh nhận ơn tha thứ.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/duc-leo-xiv-bac-bo-an-tu-hinh-vi-no-xuc-pham-pham-gia-con-nguoi-93575',
  },
  {
    id: 10,
    title: 'Giáo xứ Tân Phú: Thánh lễ Ban Bí Tích Thêm Sức ngày 11-10-2026',
    category: 'Sinh Hoạt Giáo Xứ',
    dateStr: '2026-10-11',
    dateDisplay: '11/10/2026 (2 ngày trước)',
    author: 'Ban Truyền Thông Gx Tân Phú',
    summary: 'Hơn 200 em thiếu nhi và thiếu niên hân hoan lãnh nhận bảy ơn Chúa Thánh Thần trong Thánh lễ trang nghiêm do Đức Giám mục cử hành.',
    scriptureVerse: 'Thánh Thần Chúa ngự trên tôi, sai tôi đi loan báo Tin Mừng cho người nghèo khó. (Lc 4,18)',
    content: `Thánh lễ Thêm Sức tại Giáo xứ Tân Phú là ngày hội đức tin tràn ngập niềm vui của các gia đình và cộng đoàn xứ đạo.

Đức Giám mục nhắn nhủ các em gìn giữ ngọn lửa Thánh Thần trong tim, siêng năng cầu nguyện, vâng lời cha mẹ và can đảm làm chứng cho Chúa nơi trường lớp và đời sống hằng ngày.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/giao-xu-tan-phu-thanh-le-ban-bi-tich-them-suc-ngay-11-10-2026-93592',
  },
  {
    id: 11,
    title: 'Giáo xứ Xóm Chiếu: Thánh lễ mừng kính Thánh Carlo Acutis bổn mạng giới trẻ',
    category: 'Giới Trẻ',
    dateStr: '2026-10-11',
    dateDisplay: '11/10/2026 (2 ngày trước)',
    author: 'Ban Giới Trẻ Gx Xóm Chiếu',
    summary: 'Các bạn trẻ Xóm Chiếu cùng nhau dâng Thánh lễ tạ ơn, tìm hiểu gương sáng của vị thánh bảo trợ công nghệ và cam kết sống tích cực trên mạng xã hội.',
    scriptureVerse: 'Tất cả mọi người đều sinh ra như những bản gốc, nhưng nhiều người lại chết đi như những bản sao. (Thánh Carlo Acutis)',
    content: `Đêm cầu nguyện và Thánh lễ bổn mạng của giới trẻ Xóm Chiếu mang lại nhiều cảm xúc thiêng liêng và lòng nhiệt huyết tông đồ.

Các bạn trẻ cùng học hỏi cách dùng mạng xã hội để lan tỏa điều tử tế, sống đẹp và đưa Chúa đến với bạn bè xung quanh.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/giao-xu-xom-chieu-thanh-le-mung-kinh-thanh-carlo-acutis-bon-mang-gioi-tre-93590',
  },
  {
    id: 12,
    title: 'Tâm tình tri ân của Đức cha Đaminh Nguyễn Chu Trinh',
    category: 'Tin Giáo Hội Việt Nam',
    dateStr: '2026-10-11',
    dateDisplay: '11/10/2026 (2 ngày trước)',
    author: 'Ban Truyền Thông TGP Sài Gòn',
    summary: 'Tâm tình tạ ơn Thiên Chúa và tri ân cộng đoàn dân Chúa nhân dịp hoàn tất công trình Đền thánh Trung tâm Hành hương Đức Mẹ Núi Cúi.',
    scriptureVerse: 'Hãy tạ ơn Chúa vì Chúa nhân từ, muôn ngàn đời Chúa vẫn trọn tình thương. (Tv 118,1)',
    content: `Đức cha Đaminh bày tỏ lòng biết ơn sâu sắc đến quý ân nhân, thợ thuyền và toàn thể cộng đoàn đã luôn hy sinh, cầu nguyện cho công trình Đền thánh sớm hoàn thành tốt đẹp.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/tam-tinh-tri-an-cua-duc-cha-daminh-nguyen-chu-trinh-93579',
  },

  // ── 10/10/2026 (3 NGÀY TRƯỚC) ──
  {
    id: 13,
    title: 'Kinh Mân Côi – lời kinh đi cùng cuộc đời',
    category: 'Có Chúa Trong Đời',
    dateStr: '2026-10-10',
    dateDisplay: '10/10/2026 (3 ngày trước)',
    author: 'Têrêsa Mai Lan',
    summary: 'Tâm tình sâu lắng về chuỗi hạt Mân Côi của người bà truyền lại cho cháu, lời kinh đơn sơ nâng đỡ con người qua những thăng trầm bão giông của kiếp nhân sinh.',
    scriptureVerse: 'Linh hồn tôi ngợi khen Đức Chúa, thần trí tôi hớn hở vui mừng trong Thiên Chúa, Đấng cứu độ tôi. (Lc 1,46-47)',
    content: `Tràng hạt Mân Côi là sợi dây êm đềm kết nối bao thế hệ gia đình Công giáo.

Những hạt kinh bình dị vang lên mỗi tối trong gia đình mang lại sự che chở, bình an và nhắc nhớ tình mẫu tử dịu hiền của Mẹ Maria luôn đồng hành cùng chúng ta qua mọi cảnh đời.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/kinh-man-coi-–-loi-kinh-di-cung-cuoc-doi-93564',
  },
  {
    id: 14,
    title: 'Hoa trái của tình yêu gia đình',
    category: 'Có Chúa Trong Đời',
    dateStr: '2026-10-10',
    dateDisplay: '10/10/2026 (3 ngày trước)',
    author: 'Gia đình Antôn - Maria',
    summary: 'Chia sẻ kinh nghiệm xây dựng mái ấm bình yên nhờ nền tảng cầu nguyện chung mỗi ngày và tinh thần lắng nghe, tha thứ lẫn nhau trong hôn nhân.',
    scriptureVerse: 'Tình yêu thương tha thứ tất cả, tin tưởng tất cả, hy vọng tất cả, chịu đựng tất cả. (1 Cr 13,7)',
    content: `Gia đình là Hội Thánh tại gia, nơi vun trồng đức tin và tình người.

Sự hiện diện của Chúa trong mỗi bữa ăn, giờ kinh gia đình chính là nguồn sức mạnh giúp các đôi vợ chồng vượt qua mọi khó khăn và nuôi dạy con cái nên người hữu ích cho Giáo hội và xã hội.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/hoa-trai-cua-tinh-yeu-gia-dinh-93557',
  },

  // ── 09/10/2026 (4 NGÀY TRƯỚC) ──
  {
    id: 15,
    title: 'Hiệp hội Con Đức Mẹ Vô Nhiễm giáo xứ Tân Phú mừng bổn mạng và mừng 20 năm thành lập',
    category: 'Đoàn Thể & Nhóm Hội',
    dateStr: '2026-10-09',
    dateDisplay: '09/10/2026 (4 ngày trước)',
    author: 'Ban Truyền Thông Gx Tân Phú',
    summary: 'Chặng đường 20 năm hiệp nhất trong lời kinh và các hoạt động bác ái âm thầm, phục vụ giáo xứ và chăm sóc người nghèo của các hội viên.',
    scriptureVerse: 'Này con xin đến để thực thi ý Chúa. (Dt 10,9)',
    content: `Dịp kỷ niệm 20 năm thành lập là mốc son tri ân của các hội viên Con Đức Mẹ Vô Nhiễm.

Noi gương Mẹ Maria, các chị em nguyện tiếp tục dấn thân trong các công tác bác ái, thăm viếng người già yếu và giữ vững đời sống kinh nguyện nhiệt thành phụng sự tha nhân.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/hiep-hoi-con-duc-me-vo-nhiem-giao-xu-tan-phu-mung-bon-mang-va-mung-20-nam-thanh-lap-93554',
  },
  {
    id: 16,
    title: 'Ngày 09/10: Thánh Điônysiô, Giám mục và các bạn tử đạo; Thánh Gioan Lêônarđô, linh mục',
    category: 'Phụng Vụ Chư Thánh',
    dateStr: '2026-10-09',
    dateDisplay: '09/10/2026 (4 ngày trước)',
    author: 'Ban Mục Vụ Phụng Vụ TGP Sài Gòn',
    summary: 'Chiêm ngắm gương sáng đức tin kiên trung của các vị thánh tử đạo và mục tử nhiệt thành, nhắc nhở người Kitô hữu can đảm sống chứng nhân giữa lòng đời.',
    scriptureVerse: 'Ai liều mất mạng sống mình vì Thầy và vì Tin Mừng, thì sẽ cứu được mạng sống ấy. (Mc 8,35)',
    content: `Gương mẫu của các vị thánh tử đạo nhắc nhở chúng ta lòng trung kiên với đức tin Kitô giáo trong mọi hoàn cảnh thử thách đời thường.`,
    originalUrl: 'https://tgpsaigon.net',
  },

  // ── 08/10/2026 (5 NGÀY TRƯỚC) ──
  {
    id: 17,
    title: 'Nhà Ứng sinh Chủng viện: Khai mạc tháng Mân Côi 2026 “Bên này của tình yêu”',
    category: 'Đoàn Thể & Nhóm Hội',
    dateStr: '2026-10-08',
    dateDisplay: '08/10/2026 (5 ngày trước)',
    author: 'Ban Ứng Sinh TGP Sài Gòn',
    summary: 'Các ứng sinh chủng viện bước vào tháng Mân Côi với những giờ canh thức sâu lắng, dâng trọn hành trình tìm hiểu ơn gọi dâng hiến dưới sự bảo trợ của Mẹ Maria.',
    scriptureVerse: 'Chúa đã đoái nhìn phận hèn nữ tỳ Người. (Lc 1,48)',
    content: `Tháng Mân Côi là thời gian đặc biệt để các ứng sinh hun đúc tình yêu mến Mẹ và rèn luyện đời sống nội tâm sốt sắng.

Ước mong mỗi bạn trẻ đáp lại tiếng gọi Chúa với tinh thần can đảm và phó thác như Mẹ Maria trong ngày Truyền tin.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/nha-ung-sinh-chung-vien-khai-mac-thang-man-coi-2026-ben-nay-cua-tinh-yeu-93552',
  },
  {
    id: 18,
    title: 'Anh vẫn như trẻ thơ',
    category: 'Có Chúa Trong Đời',
    dateStr: '2026-10-08',
    dateDisplay: '08/10/2026 (5 ngày trước)',
    author: 'Phanxicô Xavie Nguyễn Hữu Sang',
    summary: 'Câu chuyện cảm động về một người anh đặc biệt, tâm hồn mãi như một đứa trẻ thơ, nhắc nhở chúng ta bài học về sự hồn nhiên, đơn sơ và lòng phó thác trọn vẹn trong bàn tay Chúa.',
    scriptureVerse: 'Cứ để trẻ em đến với Thầy, đừng ngăn cấm chúng, vì Nước Thiên Chúa thuộc về những ai giống như chúng. (Mc 10,14)',
    content: `Trong gia đình, anh tôi sinh ra đã chịu nhiều thiệt thòi về trí tuệ. Nhưng tâm tính và nụ cười của anh vẫn vẹn nguyên như một đứa trẻ lên bảy.

Mỗi chiều nghe chuông nhà thờ đổ, anh luôn là người nhắc mẹ đi lễ trước tiên. Đôi mắt anh nhìn đời trong veo, không một chút vướng bận ưu tư trần thế. Chính người anh bất toàn này lại đang là bài học sống động về đức tin đơn sơ và tình yêu không tì vết cho cả gia đình tôi.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/anh-van-nhu-tre-tho-93547',
  },
  {
    id: 19,
    title: 'Cộng đoàn Lòng Chúa Thương xót giáo hạt Tân Sơn Nhì mừng Bổn mạng',
    category: 'Đoàn Thể & Nhóm Hội',
    dateStr: '2026-10-08',
    dateDisplay: '08/10/2026 (5 ngày trước)',
    author: 'Ban Truyền Thông Hạt Tân Sơn Nhì',
    summary: 'Các thành viên Cộng đoàn Lòng Chúa Thương Xót quy tụ tạ ơn Chúa, chia sẻ sứ vụ loan truyền lòng thương xót Chúa đến các bệnh nhân và gia đình nghèo khó.',
    scriptureVerse: 'Phúc thay ai xót thương người, vì họ sẽ được Thiên Chúa xót thương. (Mt 5,7)',
    content: `Sáng ngày 08/10/2026, tại giáo xứ Tân Phú, Cộng đoàn Lòng Chúa Thương Xót thuộc giáo hạt Tân Sơn Nhì đã tổ chức ngày họp mặt truyền thống và dâng Thánh lễ tạ ơn mừng kính Bổn mạng.

Buổi họp mặt là dịp để các hội viên cùng nhìn lại những công việc bác ái mục vụ trong năm qua: thăm viếng bệnh nhân liệt giường, hỗ trợ mai táng cho những người neo đơn và duy trì giờ kinh chung.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/cong-doan-long-chua-thuong-xot-giao-hat-tan-son-nhi-mung-bon-mang-93541',
  },

  // ── 07/10/2026 (6 NGÀY TRƯỚC) ──
  {
    id: 20,
    title: 'Mừng trọng thể lễ Đức Mẹ Mân Côi - Bổn mạng Giáo xứ Mai Khôi',
    category: 'Sinh Hoạt Giáo Xứ',
    dateStr: '2026-10-07',
    dateDisplay: '07/10/2026 (6 ngày trước)',
    author: 'Ban Truyền Thông Gx Mai Khôi',
    summary: 'Cộng đoàn Giáo xứ Mai Khôi long trọng mừng đại lễ bổn mạng, suy tôn mầu nhiệm Mân Côi và cùng nhau canh tân đời sống cầu nguyện trong từng mái ấm gia đình.',
    scriptureVerse: 'Bà được chúc phúc giữa các người phụ nữ, và con lòng bà được chúc phúc. (Lc 1,42)',
    content: `Tối ngày 07/10/2026, khuôn viên Giáo xứ Mai Khôi rực rỡ cờ hoa trong ngày hội ngộ mừng Bổn mạng. Thánh lễ đồng tế diễn ra trang nghiêm với sự tham dự của đông đảo tu sĩ và giáo dân.

Cha chủ tế kêu gọi cộng đoàn tiếp tục siêng năng lần hạt Mân Côi mỗi ngày, xin Mẹ gìn giữ sự bình an cho các gia đình trẻ và chữa lành những tâm hồn đang chịu thử thách.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/mung-trong-the-le-duc-me-man-coi-bon-mang-giao-xu-mai-khoi-93548',
  },
  {
    id: 21,
    title: 'Giáo xứ Môi Khôi: Thánh lễ kính Đức Mẹ Mân Côi, mừng bổn mạng giáo xứ',
    category: 'Sinh Hoạt Giáo Xứ',
    dateStr: '2026-10-07',
    dateDisplay: '07/10/2026 (6 ngày trước)',
    author: 'Ban Truyền Thông Giáo Xứ Môi Khôi',
    summary: 'Tại Giáo xứ Môi Khôi, cộng đoàn hiệp dâng Thánh lễ mừng bổn mạng sốt sắng trong tháng Mân Côi, tôn vinh Mẹ Maria và hiệp nhất trong lời kinh Mân Côi gia đình.',
    scriptureVerse: 'Vâng, tôi đây là nữ tỳ của Chúa, xin Chúa cứ làm cho tôi như lời sứ thần nói. (Lc 1,38)',
    content: `Trong bầu khí thánh thiêng của tháng Mân Côi, Giáo xứ Môi Khôi đã long trọng cử hành Thánh lễ kính Đức Mẹ Mân Côi - Bổn mạng giáo xứ.

Đông đảo bà con giáo dân trong và ngoài giáo xứ đã quy tụ sốt sắng từ sớm để cùng tham dự giờ cung nghinh và lần chuỗi Mân Côi chung. Tràng chuỗi Mân Côi là sợi dây tình yêu kết nối gia đình với Chúa và Mẹ Maria.`,
    originalUrl: 'https://tgpsaigon.net/bai-viet/giao-xu-moi-khoi-thanh-le-kinh-duc-me-man-coimung-bon-mang-giao-xu-93550',
  },
  {
    id: 22,
    title: 'Đức Tổng Giám Mục Giuse Nguyễn Năng: Sứ mạng loan báo Tin Mừng hôm nay',
    category: 'Tòa Giám Mục',
    dateStr: '2026-10-07',
    dateDisplay: '07/10/2026 (6 ngày trước)',
    author: 'Ban Truyền Thông TGP Sài Gòn',
    summary: 'Lời huấn từ của Đức Tổng Giám Mục mời gọi người Kitô hữu sống chứng tá đức tin bằng chính đời sống hiệp hành, lắng nghe và phục vụ tha nhân giữa xã hội hiện đại.',
    scriptureVerse: 'Chính anh em là muối cho đời, là ánh sáng cho trần gian. (Mt 5,13-14)',
    content: `Đức Tổng Giám Mục Giuse Nguyễn Năng nhấn mạnh rằng việc loan báo Tin Mừng hôm nay không chỉ dừng lại ở bài giảng nơi nhà thờ, mà cần được thể hiện bằng lối sống gương mẫu nơi gia đình, công sở và trường học.

Hãy để đời sống bác ái cụ thể trở thành lời loan báo Tin Mừng thuyết phục nhất cho thế giới hôm nay.`,
    originalUrl: 'https://tgpsaigon.net',
  },
]

export const DAILY_GOSPEL = {
  reference: 'Tin Mừng Chúa Giêsu Kitô theo Thánh Luca (Lc 11, 37-41)',
  liturgicalColor: 'Màu Xanh Phụng Vụ (Tuần 28 Thường Niên)',
  theme: 'Hãy bố thí những gì bên trong, thì mọi sự sẽ trở nên trong sạch cho các ngươi',
  verse: 'Bên ngoài chén đĩa thì các ngươi rửa sạch, nhưng bên trong các ngươi lại đầy chuyện cướp bóc gian tà.',
  meditationAuthor: 'Ban Mục Vụ Phụng Vụ TGP Sài Gòn',
  meditationTitle: 'Thanh tẩy tâm hồn từ bên trong: Sống chân thành trước mặt Chúa',
  meditationText: `Chúa Giêsu nhắc nhở mỗi người chúng ta đừng chỉ chú trọng đến vẻ hào nhoáng bên ngoài hay những nghi thức hình thức, mà điều cốt lõi Thiên Chúa tìm kiếm chính là một tấm lòng chân thật, khiêm nhu và giàu lòng bác ái.\n\nKhi biết mở rộng cõi lòng để chia sẻ, yêu thương và giúp đỡ tha nhân bằng cả sự chân thành, chính lúc ấy tâm hồn chúng ta được thanh tẩy và trở nên tinh tuyền trước nhan Thiên Chúa.`,
  sourceUrl: 'https://tgpsaigon.net/bai-viet/thu-tu-tuan-28-thuong-nien-nam-ii-song-dieu-minh-rao-giang-lc-11-42-46-64299',
}

export const SCRIPTURES_POOL = [
  {
    verse: 'Thầy ở cùng anh em mọi ngày cho đến tận thế.',
    reference: 'Phúc Âm theo Thánh Mát-thêu (Mt 28, 20)',
    reflection: 'Lời hứa vững chắc của Chúa ban cho ta niềm an ủi và cậy trông trong mọi chặng đường đời.',
  },
  {
    verse: 'Tất cả những ai đang vất vả mang gánh nặng nề, hãy đến cùng Ta, Ta sẽ cho nghỉ ngơi bồi dưỡng.',
    reference: 'Phúc Âm theo Thánh Mát-thêu (Mt 11, 28)',
    reflection: 'Hãy trao phó mọi ưu phiền vào tay Chúa, Người sẽ nâng đỡ và bổ sức cho bạn.',
  },
  {
    verse: 'Chúa là mục tử chăn dắt tôi, tôi chẳng thiếu thốn gì.',
    reference: 'Thánh Vịnh 23, 1',
    reflection: 'Dưới sự chăm sóc của Chúa, tâm hồn ta luôn tìm thấy sự no thỏa và an bình đích thực.',
  },
  {
    verse: 'Thầy để lại bình an cho anh em, Thầy ban bình an của Thầy cho anh em.',
    reference: 'Phúc Âm theo Thánh Gio-an (Ga 14, 27)',
    reflection: 'Bình an đích thực đến từ sự kết hiệp sâu xa và tín thác nơi Chúa Kitô phục sinh.',
  },
  {
    verse: 'Anh em hãy yêu thương nhau như Thầy đã yêu thương anh em.',
    reference: 'Phúc Âm theo Thánh Gio-an (Ga 15, 12)',
    reflection: 'Tình yêu thương vô vị lợi là dấu chỉ rõ ràng nhất của người môn đệ Chúa Kitô.',
  },
  {
    verse: 'Ơn của Thầy đã đủ cho con, vì sức mạnh của Thầy được biểu lộ trọn vẹn trong sự yếu đuối.',
    reference: 'Thư thứ hai gửi tín hữu Cô-rin-tô (2 Cr 12, 9)',
    reflection: 'Chính lúc ta cảm thấy bất toàn nhất lại là lúc ân sủng Chúa hoạt động mạnh mẽ nhất.',
  },
  {
    verse: 'Tôi làm được mọi sự nhờ Đấng ban sức mạnh cho tôi.',
    reference: 'Thư gửi tín hữu Phi-líp-phê (Pl 4, 13)',
    reflection: 'Với niềm tin sắt son, không thử thách nào có thể làm ta nao núng hay tuyệt vọng.',
  },
  {
    verse: 'Hãy phó thác đường đời cho Chúa, tin tưởng vào Người, Người sẽ ra tay.',
    reference: 'Thánh Vịnh 37, 5',
    reflection: 'Khi biết buông bỏ âu lo và cậy trông nơi Chúa, Người sẽ dẫn dắt ta qua mọi nẻo đường.',
  },
  {
    verse: 'Lòng nhân từ Chúa tồn tại muôn đời, đức thành tín của Người trải qua vạn thế.',
    reference: 'Thánh Vịnh 100, 5',
    reflection: 'Hãy luôn tạ ơn Chúa trong mọi hoàn cảnh, vì tình thương Người không bao giờ vơi cạn.',
  },
  {
    verse: 'Phúc thay ai có tâm hồn trong sạch, vì họ sẽ được nhìn thấy Thiên Chúa.',
    reference: 'Phúc Âm theo Thánh Mát-thêu (Mt 5, 8)',
    reflection: 'Tâm hồn đơn sơ, ngay lành sẽ luôn cảm nhận được sự hiện diện dịu dàng của Chúa.',
  },
  {
    verse: 'Lời Chúa là ngọn đèn soi cho con bước, là ánh sáng chỉ đường con đi.',
    reference: 'Thánh Vịnh 119, 105',
    reflection: 'Mỗi lời Kinh Thánh là ánh sáng dẫn lối tâm hồn vượt qua bóng tối trần gian.',
  },
  {
    verse: 'Đừng lo lắng về ngày mai: ngày mai, cứ để ngày mai lo.',
    reference: 'Phúc Âm theo Thánh Mát-thêu (Mt 6, 34)',
    reflection: 'Hãy sống trọn vẹn giây phút hiện tại trong sự phó thác vào bàn tay Cha nhân từ.',
  },
  {
    verse: 'Hãy vui mừng luôn mãi, cầu nguyện không ngừng và hãy tạ ơn trong mọi hoàn cảnh.',
    reference: 'Thư thứ nhất gửi tín hữu Thê-xa-lô-ni-ca (1 Tx 5, 16-18)',
    reflection: 'Cầu nguyện liên lỉ biến mọi công việc hằng ngày thành lời kinh tạ ơn Chúa.',
  },
  {
    verse: 'Chính Thầy là ánh sáng thế gian. Ai theo Thầy sẽ không phải đi trong bóng tối.',
    reference: 'Phúc Âm theo Thánh Gio-an (Ga 8, 12)',
    reflection: 'Bước đi theo Chúa Kitô, ta luôn tìm thấy hy vọng và phương hướng đúng đắn cho cuộc đời.',
  },
]

export const MASS_TIMES = [
  {
    id: 'duc-ba',
    name: 'Nhà thờ Chính Tòa Đức Bà Sài Gòn',
    address: '01 Công xã Paris, P. Bến Nghé, Quận 1',
    district: 'Quận 1',
    deanery: 'Hạt Sài Gòn',
    weekday: '05:30, 17:30',
    sunday: '05:30, 06:30, 08:00, 09:30, 16:00, 17:15, 18:30',
    phone: '028 3822 0477',
    note: 'Đang trùng tu — các thánh lễ cử hành tại nhà nguyện và khuôn viên',
  },
  {
    id: 'cau-kho',
    name: 'Nhà thờ Cầu Kho',
    address: '31 Trần Đình Xu, P. Cầu Kho, Quận 1',
    district: 'Quận 1',
    deanery: 'Hạt Sài Gòn',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:30, 08:00, 17:00, 19:00',
    phone: '028 3836 7183',
    note: 'Giáo xứ trung tâm hạt Sài Gòn',
  },
  {
    id: 'tan-dinh',
    name: 'Nhà thờ Tân Định (Thánh Tâm Chúa Giêsu)',
    address: '289 Hai Bà Trưng, Phường 8, Quận 3',
    district: 'Quận 3',
    deanery: 'Hạt Tân Định',
    weekday: '05:00, 06:15, 17:30, 19:00',
    sunday: '05:00, 06:15, 07:30, 09:00, 16:00, 17:30, 19:00',
    phone: '028 3829 0093',
    note: 'Kiến trúc màu hồng nổi tiếng, hạt Tân Định',
  },
  {
    id: 'ky-dong',
    name: 'Đền Đức Mẹ Hằng Cứu Giúp (Dòng Chúa Cứu Thế)',
    address: '38 Kỳ Đồng, Phường 9, Quận 3',
    district: 'Quận 3',
    deanery: 'Hạt Tân Định',
    weekday: '05:00, 06:00, 18:00',
    sunday: '05:00, 06:30, 08:00, 10:00, 15:30, 17:00, 18:30, 20:00',
    phone: '028 3931 1461',
    note: 'Thứ Bảy hằng tuần có các giờ hành hương kính Đức Mẹ',
  },
  {
    id: 'vuon-xoai',
    name: 'Nhà thờ Vườn Xoài',
    address: '413 Lê Văn Sỹ, Phường 12, Quận 3',
    district: 'Quận 3',
    deanery: 'Hạt Tân Định',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:15, 07:30, 16:30, 18:00, 19:30',
    phone: '028 3931 7578',
    note: 'Giáo xứ năng động với nhiều đoàn thể giới trẻ',
  },
  {
    id: 'cha-tam',
    name: 'Nhà thờ Cha Tam (Thánh Phanxicô Xaviê)',
    address: '25 Học Lạc, Phường 14, Quận 5',
    district: 'Quận 5',
    deanery: 'Hạt Chợ Quán',
    weekday: '05:30, 17:30',
    sunday: '05:30, 07:00 (tiếng Hoa), 08:30, 16:00, 17:30 (tiếng Hoa)',
    phone: '028 3855 2404',
    note: 'Có thánh lễ cộng đồng song ngữ Việt - Hoa',
  },
  {
    id: 'cho-quan',
    name: 'Nhà thờ Chợ Quán',
    address: '120 Trần Bình Trọng, Phường 2, Quận 5',
    district: 'Quận 5',
    deanery: 'Hạt Chợ Quán',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:30, 08:00, 16:30, 18:00',
    phone: '028 3923 4967',
    note: 'Giáo xứ cổ kính nhất Tổng Giáo Phận Sài Gòn (gần 300 năm lịch sử)',
  },
  {
    id: 'nga-sau',
    name: 'Nhà thờ Ngã Sáu (Thánh Jeanne d\'Arc)',
    address: '86 Hùng Vương, Phường 9, Quận 5',
    district: 'Quận 5',
    deanery: 'Hạt Chợ Quán',
    weekday: '05:00, 17:30',
    sunday: '05:00, 07:00, 09:00, 16:00, 18:00',
    phone: '028 3855 0663',
    note: 'Tọa lạc tại ngã sáu Chợ Lớn sầm uất',
  },
  {
    id: 'phu-nhuan',
    name: 'Nhà thờ Phú Nhuận',
    address: '130 Cô Giang, Phường 2, Quận Phú Nhuận',
    district: 'Phú Nhuận',
    deanery: 'Hạt Phú Nhuận',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:30, 08:00, 16:00, 17:30, 19:00',
    phone: '028 3844 5472',
    note: 'Trung tâm mục vụ hạt Phú Nhuận',
  },
  {
    id: 'ba-chuong',
    name: 'Nhà thờ Đa Minh Ba Chuông',
    address: '190 Lê Văn Sỹ, Phường 10, Quận Phú Nhuận',
    district: 'Phú Nhuận',
    deanery: 'Hạt Phú Nhuận',
    weekday: '05:00, 06:00, 17:30, 19:00',
    sunday: '05:00, 06:15, 07:30, 09:00, 16:00, 17:30, 19:00',
    phone: '028 3844 7179',
    note: 'Tu viện Dòng Đa Minh, kiến trúc mái cong độc đáo',
  },
  {
    id: 'hanh-thong-tay',
    name: 'Nhà thờ Hạnh Thông Tây',
    address: '53/7 Quang Trung, Phường 11, Quận Gò Vấp',
    district: 'Gò Vấp',
    deanery: 'Hạt Gò Vấp',
    weekday: '04:45, 17:30',
    sunday: '05:00, 06:30, 08:00, 16:30, 18:00, 19:30',
    phone: '028 3895 8696',
    note: 'Kiến trúc phong cách Byzantine độc nhất tại Sài Gòn',
  },
  {
    id: 'ha-dong',
    name: 'Nhà thờ Hà Đông',
    address: '38/7 Lê Đức Thọ, Phường 16, Quận Gò Vấp',
    district: 'Gò Vấp',
    deanery: 'Hạt Xóm Mới',
    weekday: '04:30, 17:30',
    sunday: '05:00, 06:30, 16:00, 17:30, 19:00',
    phone: '028 3894 1354',
    note: 'Thuộc giáo hạt Xóm Mới, cộng đoàn sốt sắng đông đúc',
  },
  {
    id: 'thai-binh',
    name: 'Nhà thờ Thái Bình',
    address: '563 Quang Trung, Phường 10, Quận Gò Vấp',
    district: 'Gò Vấp',
    deanery: 'Hạt Xóm Mới',
    weekday: '04:45, 17:30',
    sunday: '05:00, 06:30, 08:00, 16:00, 17:30, 19:00',
    phone: '028 3894 0307',
    note: 'Giáo xứ thuộc giáo hạt Xóm Mới trên trục đường Quang Trung',
  },
  {
    id: 'chi-hoa',
    name: 'Nhà thờ Chí Hòa',
    address: '149 Bành Văn Trân, Phường 7, Quận Tân Bình',
    district: 'Tân Bình',
    deanery: 'Hạt Chí Hòa',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:15, 07:30, 16:00, 17:30, 19:00',
    phone: '028 3864 1238',
    note: 'Trung tâm mục vụ hạt Chí Hòa',
  },
  {
    id: 'thi-nghe',
    name: 'Nhà thờ Thị Nghè',
    address: '22B Xô Viết Nghệ Tĩnh, Phường 19, Quận Bình Thạnh',
    district: 'Bình Thạnh',
    deanery: 'Hạt Gia Định',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:30, 08:00, 16:00, 17:30, 19:00',
    phone: '028 3840 4509',
    note: 'Giáo xứ hạt Gia Định, cạnh Thảo Cầm Viên',
  },
  {
    id: 'hang-xanh',
    name: 'Nhà thờ Hàng Xanh',
    address: '76 Bạch Đằng, Phường 24, Quận Bình Thạnh',
    district: 'Bình Thạnh',
    deanery: 'Hạt Gia Định',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:30, 08:00, 16:30, 18:00',
    phone: '028 3899 4444',
    note: 'Thuộc giáo hạt Gia Định, nằm gần ngã tư Hàng Xanh',
  },
  {
    id: 'xom-chieu',
    name: 'Nhà thờ Xóm Chiếu',
    address: '92B Lê Quốc Hưng, Phường 12, Quận 4',
    district: 'Quận 4',
    deanery: 'Hạt Xóm Chiếu',
    weekday: '05:00, 17:30',
    sunday: '05:00, 06:15, 07:30, 09:00, 16:00, 17:30, 19:00',
    phone: '028 3940 0013',
    note: 'Trung tâm mục vụ hạt Xóm Chiếu',
  },
]

export const DEANERIES = [
  'Tất cả',
  'Hạt Sài Gòn',
  'Hạt Tân Định',
  'Hạt Chợ Quán',
  'Hạt Phú Nhuận',
  'Hạt Gò Vấp',
  'Hạt Xóm Mới',
  'Hạt Chí Hòa',
  'Hạt Gia Định',
  'Hạt Xóm Chiếu',
]

// Giữ lại alias DISTRICTS để tương thích các phần khác nếu có
export const DISTRICTS = DEANERIES
