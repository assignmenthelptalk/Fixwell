"""Generate a branded 1200x630 social card for every built page.

Usage (from the project root, after `npx astro build`):
    python scripts/generate_og_images.py

Reads each page's <h1> from .vercel/output/static and writes public/og/<slug>.jpg
(home is home.jpg, plus a shared default.jpg). BaseLayout.astro picks the card up
by URL, so re-run this after adding a page or changing its H1, then rebuild.
Requires Pillow (pip install pillow).
"""
import html
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
STATIC = ROOT / ".vercel" / "output" / "static"
OUT = ROOT / "public" / "og"

WIDTH, HEIGHT = 1200, 630
NAVY_TOP, NAVY_BOTTOM = (27, 58, 107), (42, 82, 152)
ORANGE = (212, 101, 12)
WHITE = (255, 255, 255)
SOFT = (210, 220, 238)
MARGIN = 80
MAX_TEXT_WIDTH = WIDTH - 2 * MARGIN

FONT_BOLD_CANDIDATES = ["segoeuib.ttf", "arialbd.ttf", "DejaVuSans-Bold.ttf"]
FONT_REGULAR_CANDIDATES = ["segoeui.ttf", "arial.ttf", "DejaVuSans.ttf"]

FOOTER_TEXT = "Salisbury, Wiltshire  |  +44 7391 599 078"


def load_font(candidates, size):
    for name in candidates:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    raise SystemExit(f"None of the fonts {candidates} could be loaded; install one or edit this script.")


def wrap(draw, text, font):
    lines, current = [], ""
    for word in text.split():
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=font) <= MAX_TEXT_WIDTH:
            current = trial
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


HEADLINE_TOP = 180
HEADLINE_BOTTOM = HEIGHT - 120
LINE_HEIGHT = 1.2


def fit_headline(draw, text):
    """Largest size whose wrapped lines fit between the label and the footer rule."""
    for size in (72, 64, 56, 50, 44, 40, 36):
        font = load_font(FONT_BOLD_CANDIDATES, size)
        lines = wrap(draw, text, font)
        if len(lines) * size * LINE_HEIGHT <= HEADLINE_BOTTOM - HEADLINE_TOP:
            return font, lines
    return font, lines


def gradient():
    img = Image.new("RGB", (WIDTH, HEIGHT), NAVY_TOP)
    px = img.load()
    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        row = tuple(round(a + (b - a) * t) for a, b in zip(NAVY_TOP, NAVY_BOTTOM))
        for x in range(WIDTH):
            px[x, y] = row
    return img


def render(headline, label, target):
    img = gradient()
    draw = ImageDraw.Draw(img)
    brand_font = load_font(FONT_BOLD_CANDIDATES, 34)
    label_font = load_font(FONT_BOLD_CANDIDATES, 26)
    footer_font = load_font(FONT_REGULAR_CANDIDATES, 28)

    draw.rectangle([0, 0, 14, HEIGHT], fill=ORANGE)
    draw.text((MARGIN, 56), "FixWell Services", font=brand_font, fill=WHITE)
    draw.text((MARGIN, 108), label.upper(), font=label_font, fill=ORANGE)

    font, lines = fit_headline(draw, headline)
    y = HEADLINE_TOP
    for line in lines:
        draw.text((MARGIN, y), line, font=font, fill=WHITE)
        y += int(font.size * LINE_HEIGHT)

    draw.line([(MARGIN, HEIGHT - 96), (WIDTH - MARGIN, HEIGHT - 96)], fill=(110, 140, 190), width=2)
    draw.text((MARGIN, HEIGHT - 70), FOOTER_TEXT, font=footer_font, fill=SOFT)
    target.parent.mkdir(parents=True, exist_ok=True)
    img.save(target, "JPEG", quality=88, optimize=True)


def page_label(slug):
    if slug.startswith("handyman-") and slug.count("-") == 1:
        return "Local handyman"
    return "Handyman services" if slug.endswith("-salisbury") else "Advice"


def main():
    if not STATIC.exists():
        sys.exit(f"{STATIC} not found. Run `npx astro build` first.")
    count = 0
    for index in sorted(STATIC.rglob("index.html")):
        slug = index.parent.relative_to(STATIC).as_posix()
        slug = "home" if slug == "." else slug
        if slug.startswith(("_astro", "keystatic", "api")):
            continue
        source = index.read_text(encoding="utf-8")
        match = re.search(r"<h1[^>]*>(.*?)</h1>", source, re.S)
        if not match:
            continue
        headline = html.unescape(re.sub(r"<[^>]+>", "", match.group(1))).strip()
        label = "Handyman in Salisbury" if slug == "home" else page_label(slug)
        render(headline, label, OUT / f"{slug}.jpg")
        count += 1
    render("Handyman services in Salisbury & Wiltshire", "Well fixed. Well done.", OUT / "default.jpg")
    print(f"wrote {count} page cards and default.jpg to {OUT}")


if __name__ == "__main__":
    main()
