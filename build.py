#!/usr/bin/env python3
"""Assemble the mindmap from src/ into index.html.

  python3 build.py                 -> writes index.html (open it in a browser)
  python3 build.py --bare OUT.html -> also writes a copy without <!doctype>/<meta> (for hosts that add their own)
"""
import json, sys, pathlib
here = pathlib.Path(__file__).parent
tpl = (here / "src/template.html").read_text()
content = (here / "src/content.js").read_text()
img = json.loads((here / "src/image-map.json").read_text())
caps = json.loads((here / "captions.json").read_text())
meta = {c["file"]: [c["w"], c["h"], c["caption"], c["credit"]] for c in caps}
missing = {f for v in img.values() for f in v} - set(meta)
assert not missing, f"image-map.json names files with no caption entry: {missing}"
dump = lambda o: json.dumps(o, ensure_ascii=False, separators=(",", ":"))
page = tpl.replace("/*__CONTENT__*/", content).replace("/*__IMG__*/", dump(img)).replace("/*__META__*/", dump(meta))
head = '<!doctype html>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
(here / "index.html").write_text(head + page)
if "--bare" in sys.argv:
    pathlib.Path(sys.argv[sys.argv.index("--bare") + 1]).write_text(page)
print("built", len(page) // 1024, "KB,", len(meta), "images")
