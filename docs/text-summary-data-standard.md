# Quy Tac Chuan Du Lieu Tom Tat Van Ban

Tai lieu nay dinh nghia cach chuan hoa du lieu khi mot nguoi hoac AI doc mot van ban dau vao va tom tat thanh dung thong tin can dung cho du an.

Muc tieu:

- khong tom tat chung chung
- khong bo sot thong tin quan trong
- tach ro `du lieu co trong nguon` va `noi dung suy dien`
- tra ve dang co cau truc de co the dung lai cho UI, workflow, hoac map sang payload render

## 1. Nguyen tac bat buoc

1. Chi lay noi dung phuc vu muc dich dau ra.
2. Uu tien trich xuat thong tin cu the, khong viet lai lang mang.
3. Neu nguon khong co du lieu, phai ghi ro `missing`, khong tu them.
4. Neu co suy dien, phai dat trong truong `inferred` va danh dau do tin cay.
5. Moi truong text phai ngan, ro, de map sang he thong.
6. Dau ra phai on dinh ve ten truong de de parse va xu ly tiep.

## 2. Dau vao can duoc hieu la gi

`source_text` co the la:

- bai viet gioi thieu cong ty
- mo ta tuyen dung
- brief campaign
- ghi chu noi bo
- noi dung copy tu PDF, website, form, CRM, Google Sheet

Truoc khi tom tat, can xac dinh:

- `summary_goal`: tom tat de lam gi
- `output_type`: can tra ve dang nao
- `target_fields`: nhung truong nao la bat buoc

## 3. Muc tieu tom tat chuan cho repo nay

Khi dung trong `CreatePoster`, ban tom tat phai huong den viec lay du lieu de tao noi dung poster, khong phai viet mot ban tom tat van hoc.

Dau ra can uu tien nhung nhom thong tin sau:

- thong tin thuong hieu
- thong diep chinh
- loi ich/chao moi
- noi dung cong viec hoac noi dung chinh
- moi truong / diem noi bat
- dinh huong phat trien
- nhom doi tuong / chuyen nganh / doi tuong can nham toi
- CTA

## 4. Cau truc dau ra chuan

Bat ky ban tom tat nao cung nen tra ve JSON theo cau truc nay:

```json
{
  "summaryGoal": "poster_content_extraction",
  "sourceType": "job_posting",
  "language": "vi",
  "confidence": 0.92,
  "extracted": {
    "brand": {
      "companyName": "",
      "campaign": "",
      "role": "",
      "tagline": ""
    },
    "hero": {
      "headline": "",
      "subheadline": "",
      "badge": "",
      "cta": ""
    },
    "companySection": {
      "intro": "",
      "bullets": []
    },
    "jobSection": {
      "intro": "",
      "bullets": []
    },
    "environmentSection": {
      "cards": []
    },
    "growthSection": {
      "steps": []
    },
    "majorSection": {
      "majors": [],
      "notes": []
    }
  },
  "missing": [],
  "inferred": [],
  "sourceEvidence": []
}
```

## 5. Y nghia tung nhom truong

### 5.1 `summaryGoal`

Gia tri co dinh mo ta ly do tom tat.

De xuat:

- `poster_content_extraction`
- `campaign_summary`
- `job_post_extraction`
- `company_profile_extraction`

### 5.2 `sourceType`

Loai nguon dau vao.

De xuat:

- `job_posting`
- `company_profile`
- `campaign_brief`
- `meeting_note`
- `mixed`

### 5.3 `confidence`

So tu `0` den `1`.

Quy uoc:

- `0.9 - 1.0`: nguon ro rang, field day du
- `0.7 - 0.89`: co the dung, nhung con vai cho thieu
- `< 0.7`: can nguoi kiem tra lai

### 5.4 `extracted`

Day la du lieu chinh duoc trich ra tu nguon. Chi duoc dat vao day neu co co so tu van ban.

### 5.5 `missing`

Danh sach truong quan trong nhung nguon khong co.

Vi du:

```json
["brand.tagline", "hero.cta", "growthSection.steps"]
```

### 5.6 `inferred`

Danh sach noi dung suy ra, khong xuat hien ro rang trong nguon.

Moi item nen theo cau truc:

```json
{
  "field": "hero.badge",
  "value": "Tuyen gap",
  "reason": "Nguon nhan manh can gap nhan su trong thang nay",
  "confidence": 0.63
}
```

### 5.7 `sourceEvidence`

Dung de truy vet nguon cho nhung field quan trong.

Moi item nen theo cau truc:

```json
{
  "field": "jobSection.bullets[0]",
  "quote": "Tham gia lap trinh va van hanh he thong tu dong hoa",
  "note": "Lay gan nhu nguyen van tu mo ta cong viec"
}
```

## 6. Quy tac dien du lieu theo tung field

### 6.1 `brand.companyName`

- La ten cong ty xuat hien ro rang trong nguon.
- Khong tu viet tat neu nguon khong co.

### 6.2 `brand.campaign`

- La ten chien dich hoac tieu de chinh.
- Neu nguon khong co ten chien dich, duoc phep dat bang muc tieu tuyen dung/ngan gon, nhung phai dua vao `inferred`.

### 6.3 `brand.role`

- La vai tro, nhom vai tro, hoac chu de chinh.
- Toi da nen giu trong 3-8 tu.

### 6.4 `brand.tagline`

- La cau mo ta ngan cho tone thuong hieu.
- Khong lap lai headline.

### 6.5 `hero.headline`

- La thong diep chinh de dua len poster.
- Uu tien 1 cau ngan, ro nghia, toi da de xuat 24-36 ky tu neu dung cho poster.
- Khong nhoi qua nhieu y.

### 6.6 `hero.subheadline`

- Bo nghia cho headline.
- Neu nguon dai, rut gon thanh 1 cau.

### 6.7 `hero.badge`

- La nhan ngan nhu `Tuyen gap`, `Co dao tao`, `Luong hap dan`.
- Chi dung khi nguon co co so.

### 6.8 `hero.cta`

- La hanh dong mong muon.
- Vi du: `Ung tuyen ngay`, `Lien he de biet them`.

### 6.9 `companySection.intro`

- 1-2 cau tom tat cong ty.
- Khong dua lich su dai dong.

### 6.10 `companySection.bullets`

- Moi bullet la 1 y tach biet.
- Moi bullet nen la 1 dong ngan, de doc nhanh.
- Khong gop 2-3 y vao 1 bullet.

### 6.11 `jobSection.bullets`

- Trich ra cac nhiem vu, yeu cau, hoac noi dung chinh.
- Uu tien dong tu hanh dong.

### 6.12 `environmentSection.cards`

- Moi card la 1 diem noi bat cua moi truong, van hoa, che do, ho tro.
- Moi card nen theo dang:

```json
{
  "title": "Dao tao bai ban",
  "description": "Co lo trinh huong dan cho nguoi moi"
}
```

### 6.13 `growthSection.steps`

- Dung khi nguon co lo trinh, cac giai doan phat trien, hoac cap bac.
- Moi step nen la 1 moc ro rang.

### 6.14 `majorSection.majors`

- La nhom chuyen nganh, doi tuong, background phu hop.
- Uu tien danh sach ngan va ro ten.

## 7. Quy tac rut gon van ban

Khi tom tat, phai ap dung cac quy tac sau:

1. Cat bo mo ta lap y.
2. Cat bo filler nhu `rat`, `vo cung`, `nhieu co hoi` neu khong them thong tin moi.
3. Chuyen cau dai thanh y ngan.
4. Giu lai tu khoa nghiep vu, ten vai tro, ten cong nghe, ten nganh.
5. Neu 1 doan co nhieu y, tach thanh nhieu bullet.
6. Neu nguon viet mo ho, uu tien giu dung nghia goc thay vi lam dep cau.

## 8. Quy tac phan biet `fact` va `rewrite`

Can tach ro 3 lop:

1. `raw fact`
- thong tin xuat hien ro trong nguon

2. `compressed rewrite`
- viet lai ngan hon nhung khong doi nghia

3. `inference`
- suy ra tu ngu canh

Nguyen tac:

- `extracted` chi chua `raw fact` hoac `compressed rewrite`
- `inferred` chua phan suy dien
- khong tron 2 loai vao cung mot field ma khong danh dau

## 9. Checklist danh gia mot ban tom tat dat chuan hay chua

Ban tom tat dat chuan khi:

- tra ve dung schema
- du cac truong bat buoc cho muc dich su dung
- moi field ngan, ro, dung nghia
- khong che du lieu khi nguon thieu
- co `missing` cho phan con thieu
- co `inferred` neu co suy dien
- co `sourceEvidence` cho cac y quan trong

## 10. Phien ban rut gon neu muon prompt cho AI

Co the dua cho AI quy tac ngan nay:

```text
Hay doc source_text va tra ve JSON co cau truc co dinh.
Chi trich xuat thong tin phuc vu viec tao noi dung poster.
Khong viet tom tat chung chung.
Neu thieu du lieu, dua ten truong vao mang missing.
Neu phai suy dien, dua vao mang inferred kem ly do va confidence.
Moi field can ngan, ro, dung nghia va de map sang poster content.
Khong them thong tin khong co trong nguon.
```

## 11. Mau dau ra tot

```json
{
  "summaryGoal": "poster_content_extraction",
  "sourceType": "job_posting",
  "language": "vi",
  "confidence": 0.9,
  "extracted": {
    "brand": {
      "companyName": "OKADEN",
      "campaign": "Tuyen dung ky su tu dong hoa",
      "role": "Ky su tu dong hoa",
      "tagline": "Moi truong hoc va lam ro rang"
    },
    "hero": {
      "headline": "Co hoi cho ky su tu dong hoa",
      "subheadline": "Tham gia van hanh va cai tien he thong san xuat",
      "badge": "Co dao tao",
      "cta": "Ung tuyen ngay"
    },
    "companySection": {
      "intro": "Cong ty hoat dong trong linh vuc ky thuat va san xuat cong nghiep.",
      "bullets": [
        "Lam viec voi he thong tu dong hoa thuc te",
        "Co doi ngu ho tro va huong dan"
      ]
    },
    "jobSection": {
      "intro": "Vi tri tap trung vao van hanh va cai tien he thong.",
      "bullets": [
        "Lap trinh va dieu chinh thiet bi",
        "Phoi hop xu ly van de tai hien truong"
      ]
    },
    "environmentSection": {
      "cards": [
        {
          "title": "Dao tao bai ban",
          "description": "Nguoi moi co the hoc theo lo trinh"
        }
      ]
    },
    "growthSection": {
      "steps": [
        {
          "title": "Lam quen cong viec",
          "description": "Nham quy trinh va cong cu can dung"
        }
      ]
    },
    "majorSection": {
      "majors": ["Tu dong hoa", "Dien - dien tu"],
      "notes": ["Phu hop voi ung vien moi ra truong"]
    }
  },
  "missing": [],
  "inferred": [
    {
      "field": "hero.badge",
      "value": "Co dao tao",
      "reason": "Nguon mo ta co huong dan cho nguoi moi",
      "confidence": 0.72
    }
  ],
  "sourceEvidence": [
    {
      "field": "jobSection.bullets[0]",
      "quote": "tham gia lap trinh va van hanh he thong tu dong hoa",
      "note": "rut gon nhe de dua len poster"
    }
  ]
}
```

## 12. Ket luan

Quy tac chuan nay nham dam bao rang viec tom tat van ban luon tra ve `dung du lieu can dung`, khong chi la `mot doan tom tat hay`. Trong repo nay, chuan tot nhat la:

- tom tat co muc tieu ro rang
- dau ra dang JSON on dinh
- tach `extracted`, `missing`, `inferred`, `sourceEvidence`
- toi uu cho viec map sang noi dung poster va workflow xu ly tiep theo

