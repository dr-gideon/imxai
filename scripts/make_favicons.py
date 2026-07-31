"""Generate raster favicons matching static/favicon.svg.

Run from the repo root:  python scripts/make_favicons.py
Requires: pillow
"""

from PIL import Image, ImageDraw

OUT = "static"
TOP = (139, 123, 255)     # #8b7bff
BOTTOM = (91, 75, 232)    # #5b4be8
WHITE = (255, 255, 255)
SS = 8                    # supersample factor for smooth edges


def make(size: int, padding: float = 0.0) -> Image.Image:
    """Draw the IM x AI mark: violet gradient rounded square with a white X."""
    n = size * SS
    img = Image.new("RGBA", (n, n), (0, 0, 0, 0))

    # vertical gradient
    grad = Image.new("RGB", (1, n))
    for y in range(n):
        t = y / max(n - 1, 1)
        grad.putpixel((0, y), tuple(
            round(TOP[i] + (BOTTOM[i] - TOP[i]) * t) for i in range(3)
        ))
    grad = grad.resize((n, n))

    # rounded-square mask
    mask = Image.new("L", (n, n), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, n - 1, n - 1], radius=round(n * 15 / 64), fill=255
    )
    img.paste(grad, (0, 0), mask)

    # white X, inset to match the SVG geometry (21..43 of 64)
    d = ImageDraw.Draw(img)
    inset = n * (21 / 64) + padding * n
    lo, hi = inset, n - inset
    width = round(n * 9 / 64)
    d.line([lo, lo, hi, hi], fill=WHITE, width=width)
    d.line([hi, lo, lo, hi], fill=WHITE, width=width)
    # round the stroke ends
    r = width / 2
    for x, y in ((lo, lo), (hi, hi), (hi, lo), (lo, hi)):
        d.ellipse([x - r, y - r, x + r, y + r], fill=WHITE)

    return img.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    make(180).save(f"{OUT}/apple-touch-icon.png")
    make(192).save(f"{OUT}/icon-192.png")
    make(512).save(f"{OUT}/icon-512.png")
    make(64).save(f"{OUT}/favicon-64.png")
    # multi-resolution .ico for legacy browsers
    make(64).save(
        f"{OUT}/favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )
    print("favicons written to", OUT)
