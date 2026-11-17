from PIL import Image, ImageEnhance, ImageFilter, ImageOps
import os
import shutil

SRC = r'c:\Users\admin\Desktop\taksówka strona\public\realizacje'
OUT = r'c:\Users\admin\Desktop\taksówka strona\public\hero'

if os.path.isdir(OUT):
    shutil.rmtree(OUT)
os.makedirs(OUT, exist_ok=True)


def mild(im: Image.Image) -> Image.Image:
    """Delikatna korekta — bez agresywnego ostrzenia i bez upscale."""
    im = ImageOps.autocontrast(im, cutoff=0.5)
    im = ImageEnhance.Color(im).enhance(1.06)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    im = ImageEnhance.Brightness(im).enhance(1.02)
    im = ImageEnhance.Sharpness(im).enhance(1.12)
    return im


def save(im: Image.Image, name: str):
    im = mild(im.convert('RGB'))
    jpg = os.path.join(OUT, f'{name}.jpg')
    webp = os.path.join(OUT, f'{name}.webp')
    im.save(jpg, 'JPEG', quality=93, optimize=True, progressive=True)
    im.save(webp, 'WEBP', quality=90, method=6)
    print(f'{name}: {im.size[0]}x{im.size[1]}  {os.path.getsize(jpg)//1024}KB')


# 1) Yaris Cross — jedyne pełne auto w landscape (oryginał)
yaris = Image.open(os.path.join(SRC, 'lakier.jpg')).convert('RGB')
w, h = yaris.size
# lekki crop brzegów, bez powiększania
yaris = yaris.crop((int(w * 0.01), int(h * 0.04), int(w * 0.99), int(h * 0.96)))
save(yaris, '01-yaris')

# 2) Volvo XC90 bok — tylko dolna połowa = PO
volvo = Image.open(os.path.join(SRC, 'volvo-bok.jpg')).convert('RGB')
w, h = volvo.size
volvo = volvo.crop((0, int(h * 0.50), w, h))
save(volvo, '02-volvo')

# 3) Lampy — tylko prawa strona = PO (czysta lampa)
lampy = Image.open(os.path.join(SRC, 'lampy.jpg')).convert('RGB')
w, h = lampy.size
lampy = lampy.crop((int(w * 0.505), 0, w, h))
save(lampy, '03-lampa')

# 4) Dywaniki — tylko PO (prawa)
dyw = Image.open(os.path.join(SRC, 'dywaniki.png')).convert('RGB')
w, h = dyw.size
dyw = dyw.crop((int(w * 0.505), int(h * 0.02), w, int(h * 0.98)))
save(dyw, '04-wnetrze')

# 5) Bagażnik — tylko PO (prawa)
bag = Image.open(os.path.join(SRC, 'bagaznik.jpg')).convert('RGB')
w, h = bag.size
bag = bag.crop((int(w * 0.505), int(h * 0.08), w, int(h * 0.95)))
save(bag, '05-bagaznik')

print('done')
