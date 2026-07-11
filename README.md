# Poster Studio

Ung dung Next.js tao poster tu JSON bang tieng Viet, mau tu dong theo nganh, va nhieu form hien thi cho dien thoai.

## Chay local

```bash
npm install
npm run dev
```

Mo `http://localhost:3000`.

## Deploy len GitHub Pages

Repo nay da duoc doi sang static export de chay thang tren GitHub Pages.

Trang thai hien tai:

- khong con API route noi bo
- khong con webhook `/api/webhooks/poster`
- anh noi bo duoc phuc vu tu `public/poster-assets/`
- khi build tren GitHub, app tu dung base path `/Poster/` cho repo `dadikas/Poster`

Workflow deploy:

- `.github/workflows/pages.yml`

De bat GitHub Pages:

1. Vao `Settings > Pages`
2. Chon `Source = GitHub Actions`
3. Push code len `main`

URL du kien:

- `https://dadikas.github.io/Poster/`

## Chay tren GitHub Actions

Repo van giu workflow CI rieng de kiem tra code:

- `.github/workflows/ci.yml`

Workflow nay chay:

- `npm ci`
- `npm run lint`
- `npm run type-check`
- `npm run build`

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

## Gioi han cua ban GitHub Pages

- Khong co webhook render PNG tren server
- Khong co route doc file qua API
- Export PNG chi thuc hien trong trinh duyet tu man hinh editor
