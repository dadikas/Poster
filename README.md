# Poster Studio

Ung dung Next.js tao poster tu JSON bang tieng Viet, mau tu dong theo nganh, va nhieu form hien thi cho dien thoai.

## Tai lieu kien truc

- `docs/poster-automation-architecture.md`: thiet ke he thong tu ban studio hien tai den full automation pipeline

## Chay local

```bash
npm install
npm run dev
```

Mo [http://localhost:3000](http://localhost:3000).

## Chay tren GitHub

Repo da duoc chuan bi de GitHub Actions co the tu dong kiem tra moi lan `push` hoac tao `pull request`.

Workflow:

- cai dependencies bang `npm ci`
- chay `npm run lint`
- chay `npm run type-check`
- chay `npm run build`

File workflow nam tai:

- `.github/workflows/ci.yml`

Luu y:

- GitHub Actions co the build va kiem tra app nay.
- GitHub Pages khong phu hop de deploy truc tiep vi du an co API routes nhu `/api/webhooks/poster` va `/api/poster-assets/[file]`.
- Neu muon host ban chay that, nen deploy len nen tang ho tro Next.js server nhu Vercel, Netlify, hoac may chu Node rieng.

## Deploy len Vercel

Du an nay phu hop de deploy len Vercel vi day la app Next.js co API routes.

Trang thai hien tai:

- khong can them bien moi truong bat buoc de app chay co ban
- route `/api/poster-assets/[file]` da duoc cau hinh de Vercel mang theo thu muc `image/`
- webhook `/api/webhooks/poster` co the chay online sau khi deploy

Quy trinh deploy:

1. Day code len GitHub repository `dadikas/Poster`
2. Dang nhap Vercel va chon `Add New Project`
3. Import repo `dadikas/Poster`
4. Framework Preset: `Next.js`
5. Root Directory: de mac dinh la root cua repo nay
6. Build Command: de mac dinh `next build`
7. Output Directory: de mac dinh, khong nhap `out`
8. Nhan `Deploy`

Sau khi deploy:

- trang chinh se co URL dang `https://<project>.vercel.app`
- webhook se la `https://<project>.vercel.app/api/webhooks/poster`
- route anh hero se la `https://<project>.vercel.app/api/poster-assets/<ten-file>`

Luu y van hanh:

- Thu muc `image/` phai duoc commit len GitHub neu ban muon Vercel phuc vu cac anh hero noi bo.
- Route `/api/poster-assets/[file]` chi phu hop de doc file da nam san trong repo, khong phai noi upload dong tren production.
- Moi lan push len nhanh da ket noi, Vercel se tu dong tao deployment moi.

## Cach dung

1. Sua JSON trong khung editor.
2. Bam `Apply JSON` de cap nhat preview.
3. Chon `Style bold`, `Style clean` hoac `Style split`.
4. Chon `Poster day du`, `Mobile truot` hoac `Chia 4 anh`.
5. Bam `Export PNG` de tai anh tu poster hien tai.
6. Neu `image.url` de rong, app se hien placeholder.

## Cau truc du lieu chinh

- `industry`: Tu dong doi mau theo nganh
- `style`: Lua chon style poster
- `brand`: Thuong hieu, ten cong ty, tieu de
- `hero`: Anh cover va thong diep chinh
- `companySection`: Ten cong ty
- `jobSection`: Noi dung cong viec
- `environmentSection`: Moi truong lam viec
- `growthSection`: Dinh huong phat trien sau khi vao cong ty
- `majorSection`: Chuyen nganh tuyen dung

## Ghi chu

- Moi text hien tai dung dang chuoi don gian:

```json
"Noi dung tieng Viet"
```

- Khi them nhieu phan tu vao `bullets`, app se tu hien thi them dau dong trong khung.
- Mau nganh mac dinh:
  - `automation`: xanh la bien
  - `construction`: xam
  - `electrical`: cam
  - `electronics`: xanh duong
  - `hvac`: xanh da troi
  - `it`: xanh la
  - `chemistry`: tim
  - `other`: hong

## Mau JSON tung nganh

- `samples/automation.json`
- `samples/construction.json`
- `samples/electrical.json`
- `samples/electronics.json`
- `samples/hvac.json`
- `samples/it.json`
- `samples/chemistry.json`
- `samples/other-haken.json`

Ban co the mo mot file trong thu muc `samples`, copy vao editor JSON trong app, sau do bam `Apply JSON`.

## Thu muc form de design

Neu can luu cac form de thiet ke bang Figma hoac app design khac, dung thu muc:

- `design-forms/`

Trong do:

- `design-forms/README.md`: quy uoc cho form design
- `design-forms/poster-request-form/hardcoded-data.json`: du lieu cung cho mock layout
- `design-forms/poster-request-form/figma-brief.md`: brief de team design dung truc tiep

Muc nay tach rieng khoi `samples/` vi `samples/` la du lieu poster co the render ngay, con `design-forms/` la nguon mock/spec cho UI form.

## Ket noi n8n bang webhook

App hien da co webhook:

```bash
POST /api/webhooks/poster
```

Mac dinh webhook tra ve `image/png`.

Webhook nhan 1 trong 2 dang payload:

```json
{
  "industry": "electrical",
  "style": "bold",
  "brand": {
    "logoText": "ESUTECH",
    "companyName": "OKADEN",
    "campaign": "Tuyen dung ky su thi cong dien",
    "role": "Thi cong - lap dat - dieu khien",
    "tagline": "Form lon, ro, de doc tren dien thoai"
  },
  "hero": {
    "headline": "Thong diep chinh"
  },
  "companySection": {
    "title": "01. Ten cong ty",
    "intro": "Gioi thieu cong ty",
    "bullets": ["Y 1"]
  },
  "jobSection": {
    "title": "02. Noi dung cong viec",
    "bullets": ["Cong viec 1"]
  },
  "environmentSection": {
    "title": "03. Moi truong lam viec",
    "cards": [{ "title": "Khong gian" }]
  },
  "growthSection": {
    "title": "04. Dinh huong phat trien",
    "steps": [{ "title": "Lam quen" }]
  },
  "majorSection": {
    "title": "05. Chuyen nganh tuyen dung",
    "majors": ["Dien cong nghiep"]
  }
}
```

Hoac:

```json
{
  "requestId": "req-001",
  "source": "n8n",
  "poster": { "...": "PosterDocument" }
}
```

Neu muon debug du lieu va lay link preview thay vi anh, them `?response=json`.
Khi do response se tra ve `studioUrl` de mo poster da nap san du lieu tren giao dien:

```json
{
  "ok": true,
  "studioUrl": "http://localhost:3000/?data=..."
}
```

### Test nhanh voi n8n hoac curl

```bash
curl -X POST http://localhost:3000/api/webhooks/poster ^
  -H "Content-Type: application/json" ^
  -o poster.png ^
  -d @samples/electrical.json
```

Trong n8n, ban co the dung `HTTP Request` node:

- Method: `POST`
- URL: `http://your-host/api/webhooks/poster`
- Send Body: `JSON`
- Body: map du lieu poster tu cac step truoc do
- Response Format: `File`

Neu muon lay JSON thay vi file anh:

```bash
curl -X POST "http://localhost:3000/api/webhooks/poster?response=json" ^
  -H "Content-Type: application/json" ^
  -d @samples/electrical.json
```

Neu can xem webhook da san sang chua:

```bash
GET /api/webhooks/poster
```
