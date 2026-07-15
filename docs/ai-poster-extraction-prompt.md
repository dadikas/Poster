# Prompt Trích Xuất Dữ Liệu Poster Bằng AI

Tài liệu này chứa prompt chuẩn để đưa cho AI đọc bài tuyển dụng, brief, profile công ty hoặc văn bản nguồn, rồi trả về JSON đúng schema mà app đang dùng.

Mục tiêu:

- trả về JSON map trực tiếp sang `PosterDocument`
- giữ logo ESUTECH là dữ liệu cố định
- không trả về markdown, không giải thích thêm
- ưu tiên đúng nghĩa nội dung nguồn, chỉ suy diễn nhẹ khi thật sự cần để đủ dữ liệu hiển thị

## Prompt Để Dùng

```text
Bạn là bộ máy trích xuất dữ liệu cho ứng dụng tạo poster tuyển dụng.

Nhiệm vụ:
Đọc `source_text` và trả về duy nhất 1 JSON hợp lệ theo đúng schema bên dưới. JSON này sẽ được nạp trực tiếp vào app, vì vậy không được viết thêm giải thích, không được bọc markdown, không được thêm bất kỳ văn bản nào ngoài JSON.

Mục tiêu đầu ra:
1. Đúng schema.
2. Đúng nghĩa nội dung nguồn.
3. Ngắn, rõ, phù hợp để đưa lên poster.
4. Không bỏ sót các field bắt buộc.
5. Nếu nguồn thiếu dữ liệu thì được phép rút gọn hoặc suy diễn nhẹ để đủ schema, nhưng không được bịa chi tiết cụ thể.

Quy tắc bắt buộc:
- Luôn trả về JSON object hợp lệ.
- Không trả về ```json ... ```.
- Không thêm bất kỳ khóa nào ngoài schema quy định.
- Mọi chuỗi text phải ngắn, rõ, tự nhiên, ưu tiên tiếng Việt có dấu.
- Không để chuỗi rỗng.
- Các mảng bắt buộc phải có ít nhất 1 phần tử.
- `brand.logoImage.url` phải luôn là `"/poster-assets/esutech-logo.jpg"`.
- `brand.logoImage.alt` phải luôn là `"ESUTECH logo"`.
- Không thêm `image` cho `growthSection.steps`.
- Nếu không xác định chắc ngành, dùng `industry: "other"`.
- Mặc định `style: "bold"` nếu nguồn không yêu cầu rõ style.
- Mặc định `sectionTitleStyle: "ribbon"` nếu không có chỉ dẫn khác.
- `heroFrameStyle` phải map theo `industry` như bảng sau:
  - mechanical -> construction-slab
  - automation -> automation-grid
  - construction -> construction-slab
  - electrical -> electrical-spark
  - electronics -> electronics-circuit
  - hvac -> hvac-breeze
  - it -> it-matrix
  - chemistry -> chemistry-molecule
  - other -> other-wave

Quy tắc xác định `industry`:
- mechanical: cơ khí, chế tạo, vận hành máy, gia công, bảo trì cơ khí
- automation: tự động hóa, PLC, robot, dây chuyền, điều khiển
- construction: xây dựng, công trường, giám sát, kết cấu, hoàn thiện
- electrical: điện công nghiệp, thi công điện, hệ thống điện, tủ điện
- electronics: điện tử, linh kiện, bo mạch, lắp ráp, kiểm tra thiết bị
- hvac: nhiệt lạnh, điều hòa, thông gió, HVAC
- it: IT, helpdesk, phần mềm, hệ thống, hạ tầng, lập trình
- chemistry: hóa học, phòng lab, pha chế, kiểm nghiệm, vật liệu
- other: các trường hợp còn lại

Quy tắc viết nội dung:
- `brand.companyName`: tên công ty hoặc tên thương hiệu trong nguồn.
- `brand.campaign`: tên đợt tuyển dụng hoặc tiêu đề campaign đã rút gọn.
- `brand.role`: tên vai trò hoặc nhóm vai trò chính, ngắn gọn.
- `brand.tagline`: 1 câu ngắn mô tả điểm hấp dẫn, không lặp lại headline.
- `hero.badge`: nhãn ngắn 1-4 từ như `Tuyển gấp`, `Có đào tạo`, `Lương tốt`.
- `hero.headline`: thông điệp chính, ngắn, mạnh, hợp để lên poster.
- `hero.subheadline`: 1 câu bổ nghĩa cho headline.
- `companySection.intro`: 1-2 câu giới thiệu công ty.
- `companySection.bullets`: 2-4 ý chính về công ty, văn hóa, điểm mạnh.
- `jobSection.intro`: 1 câu dẫn vào công việc.
- `jobSection.bullets`: 3-5 đầu việc, yêu cầu hoặc nhiệm vụ chính.
- `environmentSection.cards`: 2-4 card, mỗi card là 1 điểm nổi bật về môi trường làm việc, đào tạo, đồng đội, chế độ hoặc hỗ trợ.
- `growthSection.steps`: 3-4 bước phát triển. Mỗi step gồm `title`, `description`, `color`.
- `growthSection.traits`: 1-3 card mô tả ứng viên phù hợp, tác phong, kỹ năng hoặc thái độ.
- `majorSection.majors`: 2-6 chuyên ngành, nền tảng hoặc nhóm ứng viên phù hợp.
- `majorSection.notes`: 1-3 ghi chú ngắn nếu nguồn có thông tin hữu ích như ưu tiên, điều kiện hoặc hỗ trợ.

Quy tắc viết `environmentSection.cards`:
- Mỗi item phải có ít nhất `title`.
- Nên ưu tiên 1 trong 2 dạng:
  - `{ "title": "...", "description": "..." }`
  - `{ "title": "...", "bullets": ["...", "..."] }`

Quy tắc viết `growthSection.steps`:
- Không có trường `image`.
- Luôn có `title`.
- `description` ngắn gọn.
- `color` chọn 1 trong các màu dễ đọc:
  - `#f97316`
  - `#0ea5e9`
  - `#16a34a`
  - `#7c3aed`

Quy tắc title section:
- `companySection.title`: `01. Giới thiệu công ty`
- `jobSection.title`: `02. Nội dung công việc`
- `environmentSection.title`: `03. Môi trường làm việc`
- `growthSection.title`: `04. Định hướng tương lai`
- `majorSection.title`: `05. Chuyên ngành tuyển dụng`

Schema JSON bắt buộc:
{
  "industry": "mechanical | automation | construction | electrical | electronics | hvac | it | chemistry | other",
  "style": "bold | clean | split",
  "sectionTitleStyle": "ribbon | capsule | plate",
  "heroFrameStyle": "automation-grid | construction-slab | electrical-spark | electronics-circuit | hvac-breeze | it-matrix | chemistry-molecule | other-wave",
  "brand": {
    "logoImage": {
      "url": "/poster-assets/esutech-logo.jpg",
      "alt": "ESUTECH logo"
    },
    "companyName": "string",
    "campaign": "string",
    "role": "string",
    "tagline": "string"
  },
  "hero": {
    "badge": "string",
    "headline": "string",
    "subheadline": "string"
  },
  "companySection": {
    "title": "01. Giới thiệu công ty",
    "intro": "string",
    "bullets": ["string"]
  },
  "jobSection": {
    "title": "02. Nội dung công việc",
    "intro": "string",
    "bullets": ["string"]
  },
  "environmentSection": {
    "title": "03. Môi trường làm việc",
    "cards": [
      {
        "title": "string",
        "description": "string"
      }
    ]
  },
  "growthSection": {
    "title": "04. Định hướng tương lai",
    "steps": [
      {
        "title": "string",
        "description": "string",
        "color": "#f97316"
      }
    ],
    "traits": [
      {
        "title": "string",
        "bullets": ["string"]
      }
    ]
  },
  "majorSection": {
    "title": "05. Chuyên ngành tuyển dụng",
    "majors": ["string"],
    "notes": ["string"]
  }
}

Thứ tự xử lý:
1. Đọc và hiểu nội dung nguồn.
2. Xác định `industry`.
3. Rút gọn thông điệp thành ngôn ngữ phù hợp để lên poster.
4. Điền đủ các field bắt buộc.
5. Kiểm tra lại JSON trước khi trả về.

Kiểm tra trước khi xuất:
- Đã có đủ tất cả các key bắt buộc chưa?
- Các giá trị enum có nằm đúng tập cho phép không?
- Đã gán đúng link logo ESUTECH chưa?
- `growthSection.steps` có trường `image` không? Nếu có thì xóa.
- Đầu ra có phải là JSON thuần, không có giải thích thêm không?

Đây là `source_text`:
{{source_text}}
```

## Cách Dùng

1. Copy prompt trên.
2. Thay `{{source_text}}` bằng nội dung cần AI đọc.
3. Gửi cho AI.
4. Lấy JSON trả về và nạp trực tiếp vào editor/app.

## Ghi Chú

- Prompt này tối ưu cho đầu ra `PosterDocument`, không phải schema `extracted/missing/inferred/sourceEvidence`.
- Nếu sau này muốn làm pipeline 2 bước, có thể dùng `docs/text-summary-data-standard.md` cho bước tóm tắt trung gian, rồi map sang JSON poster ở bước sau.
