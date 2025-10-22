# SymplyKB Skeleton

Minimal, ready-to-build MkDocs Material site. Drop into your repo root and deploy on Cloudflare Pages.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

## Cloudflare Pages build

- Build command: `pip install -r requirements.txt && mkdocs build`
- Output directory: `site`
