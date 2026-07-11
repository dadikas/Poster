# Image Prompts For Poster JSON

Tai lieu nay chua prompt theo dung tung field image trong JSON cua app poster.

## Cach dung

- Copy prompt theo dung field ban can.
- Neu can, thay ten nganh hoac mo ta cong viec cu the.
- Nen them anh theo ty le goi y de len poster dep hon.
- Luon uu tien anh sach, ro chu the, khong co chu tren anh.

## Quy tac chung

Them cuoi prompt:

```text
realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

Negative prompt goi y:

```text
text, watermark, logo, blurry, low resolution, extra fingers, deformed hands, distorted tools, messy background, cropped face
```

## Kich thuoc goi y

- `hero.image`: `1200x900` hoac `1080x1350`
- `companySection.image`: `900x700`
- `jobSection.image`: `900x700`
- `environmentSection.cards[].image`: `800x600`
- `growthSection.steps[].image`: `512x512`
- `majorSection.image`: `900x700`

---

## `hero.image`

### `automation`

```text
A Vietnamese technical worker and a Japanese engineer inspecting an automated production line with robotic arms and control panels, modern factory, clean industrial lighting, clear main subject, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `construction`

```text
A construction site team wearing helmets and safety gear reviewing plans near a structural work area, modern Japanese construction environment, bold perspective, clean background, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `electrical`

```text
A technician installing and checking an industrial electrical control cabinet with cables and measuring tools, Japanese workplace, bright and sharp, clean composition, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `electronics`

```text
An electronics technician assembling and inspecting precision components and circuit boards in a clean factory environment, modern Japanese manufacturing setting, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `hvac`

```text
A skilled technician servicing air conditioning and ventilation equipment in a clean mechanical room, organized pipes and units, cool lighting, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `it`

```text
A professional IT support engineer monitoring multiple screens in a modern office or server environment, clean digital workspace, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `chemistry`

```text
A chemical process technician working carefully with lab-scale industrial materials and quality inspection tools in a clean production environment, neat and precise, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

### `other`

```text
A versatile industrial workplace scene with a professional worker in uniform standing confidently in a clean factory or logistics environment, simple and flexible composition, suitable for poster hero image, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

---

## `companySection.image`

Prompt chung:

```text
Exterior and interior impression of a professional Japanese company workplace, clean factory or office setting, trustworthy atmosphere, suitable for company introduction section in a recruitment poster, realistic photography, Japanese industrial recruitment poster style, clean composition, strong central focus, sharp detail, no text, no watermark, no logo, no cluttered background
```

Bien the theo nganh:

- `automation`: add `factory with automated line and robotic equipment`
- `construction`: add `construction office and site coordination area`
- `electrical`: add `electrical workshop with switchboards and cable systems`
- `electronics`: add `clean electronics production floor`
- `hvac`: add `mechanical room and organized maintenance area`
- `it`: add `modern IT office with monitoring screens`
- `chemistry`: add `clean materials lab and quality control area`

---

## `jobSection.image`

### `automation`

```text
A worker wiring sensors and checking PLC-related equipment on an automation line, realistic close-up action shot, clean industrial background, suitable for job section image, no text, no watermark
```

### `construction`

```text
A construction staff member measuring, checking, and coordinating work on site, realistic action photo, safety gear visible, suitable for job section image, no text, no watermark
```

### `electrical`

```text
A technician using tools to inspect electrical panels and industrial wiring, realistic close-up, organized background, suitable for job section image, no text, no watermark
```

### `electronics`

```text
An electronics worker carefully assembling or inspecting components at a workstation, realistic close-up, precise and clean, suitable for job section image, no text, no watermark
```

### `hvac`

```text
A technician checking air conditioning units and ventilation systems with tools, realistic maintenance scene, suitable for job section image, no text, no watermark
```

### `it`

```text
An IT support engineer troubleshooting systems on a laptop and multiple monitors, realistic office scene, suitable for job section image, no text, no watermark
```

### `chemistry`

```text
A chemical production technician checking process values and handling materials carefully, realistic clean environment, suitable for job section image, no text, no watermark
```

### `other`

```text
A staff member performing general workplace duties in a clean industrial or logistics setting, suitable for job section image, realistic photography, no text, no watermark
```

---

## `environmentSection.cards[].image`

Prompt chung:

```text
A clean and organized professional workplace in Japan, simple composition, clear subject, suitable for small poster card image, realistic photography, no text, no watermark, no logo
```

Neu card noi ve:

- `khong gian`: them mo ta nha may, van phong, hien truong
- `dao tao`: them senior guiding junior worker
- `dong doi`: them small team discussion in workplace

---

## `growthSection.steps[0].image`

Field:

```json
"growthSection": {
  "steps": [
    {
      "title": "Lam quen",
      "description": "Hoc quy trinh",
      "image": { "url": "" }
    }
  ]
}
```

Prompt:

```text
A simple square recruitment image representing onboarding and learning process, a worker receiving guidance from a senior colleague in a clean industrial environment, centered composition, suitable for small poster step image, realistic photography, no text, no watermark
```

## `growthSection.steps[1].image`

Field:

```json
"growthSection": {
  "steps": [
    {},
    {
      "title": "Thuc hanh",
      "description": "Tich luy tay nghe",
      "image": { "url": "" }
    }
  ]
}
```

Prompt:

```text
A simple square recruitment image representing hands-on practice, a technician actively working with tools or equipment, centered composition, suitable for small poster step image, realistic photography, no text, no watermark
```

## `growthSection.steps[2].image`

Field:

```json
"growthSection": {
  "steps": [
    {},
    {},
    {
      "title": "Nang bac",
      "description": "Nhan viec kho hon",
      "image": { "url": "" }
    }
  ]
}
```

Prompt:

```text
A simple square recruitment image representing skill growth and higher responsibility, a confident worker reviewing technical work at a higher level, centered composition, suitable for small poster step image, realistic photography, no text, no watermark
```

## `growthSection.steps[3].image`

Field:

```json
"growthSection": {
  "steps": [
    {},
    {},
    {},
    {
      "title": "Dan dat",
      "description": "Ho tro nhom",
      "image": { "url": "" }
    }
  ]
}
```

Prompt:

```text
A simple square recruitment image representing leadership and team support, a skilled worker guiding teammates in a workplace, centered composition, suitable for small poster step image, realistic photography, no text, no watermark
```

---

## `majorSection.image`

### `automation`

```text
Industrial robot arm, PLC control panel, and smart production equipment, realistic product-style industrial image, clean background, suitable for major section poster image, no text
```

### `construction`

```text
Construction helmet, blueprint, and structural work tools in a professional arrangement, realistic industrial image, clean background, suitable for major section poster image, no text
```

### `electrical`

```text
Electrical tools, wiring, control cabinet, and measurement instruments in a clean technical composition, realistic image, suitable for major section poster image, no text
```

### `electronics`

```text
Circuit boards, precision components, and inspection tools in a clean modern composition, realistic image, suitable for major section poster image, no text
```

### `hvac`

```text
Air conditioning unit, ventilation duct, gauges, and maintenance tools in a clean technical composition, realistic image, suitable for major section poster image, no text
```

### `it`

```text
Laptop, server rack, code screens, and digital support tools in a clean professional composition, realistic image, suitable for major section poster image, no text
```

### `chemistry`

```text
Lab containers, material samples, industrial chemistry tools, and quality inspection setup in a clean professional composition, realistic image, suitable for major section poster image, no text
```

### `other`

```text
General professional work tools and workplace elements in a clean arranged composition, realistic image, suitable for major section poster image, no text
```

---

## Mau JSON nhanh

```json
{
  "hero": {
    "image": {
      "url": "https://example.com/hero.jpg",
      "alt": "Hero image"
    }
  },
  "companySection": {
    "image": {
      "url": "https://example.com/company.jpg",
      "alt": "Company image"
    }
  },
  "jobSection": {
    "image": {
      "url": "https://example.com/job.jpg",
      "alt": "Job image"
    }
  },
  "growthSection": {
    "steps": [
      {
        "title": "Lam quen",
        "description": "Hoc quy trinh",
        "image": {
          "url": "https://example.com/step-1.jpg",
          "alt": "Lam quen image"
        }
      }
    ]
  },
  "majorSection": {
    "image": {
      "url": "https://example.com/major.jpg",
      "alt": "Major image"
    }
  }
}
```
