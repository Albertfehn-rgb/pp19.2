const TEXTURES = {"white": {"label": "Weiß", "data": "assets/embedded/batch-01/2f81b29ac781.webp"}, "black": {"label": "Schwarz", "data": "assets/embedded/batch-01/3efe1d54445b.jpg"}, "natural": {"label": "Natur", "data": "assets/embedded/batch-03/f445fb2527c0.webp"}, "cream": {"label": "Creme", "data": "assets/embedded/batch-01/19197f7591bd.webp"}, "beige": {"label": "Beige", "data": "assets/embedded/batch-01/4c8e6235da59.webp"}, "grey": {"label": "Grau", "data": "assets/embedded/batch-03/f28823b6c67c.webp"}, "brown": {"label": "Braun", "data": "assets/embedded/batch-02/cd4e0618f181.webp"}, "red": {"label": "Rot", "data": "assets/embedded/batch-03/e68c8aec13e5.webp"}, "orange": {"label": "Orange", "data": "assets/embedded/batch-02/895c64147518.webp"}, "yellow": {"label": "Gelb", "data": "assets/embedded/batch-01/55876ba2fe0a.webp"}, "green": {"label": "Grün", "data": "assets/embedded/batch-02/a2e76c22f5fc.webp"}, "olive": {"label": "Oliv", "data": "assets/embedded/batch-03/fd4286bfe01e.webp"}, "mint": {"label": "Mint", "data": "assets/embedded/batch-01/3a8e6d932ace.webp"}, "turquoise": {"label": "Türkis", "data": "assets/embedded/batch-01/576abe46a7d6.webp"}, "blue": {"label": "Blau", "data": "assets/embedded/batch-02/72d40729e613.webp"}, "purple": {"label": "Lila", "data": "assets/embedded/batch-02/68988e044404.webp"}, "lavender": {"label": "Lavendel", "data": "assets/embedded/batch-01/1ccfa0411859.webp"}, "pink": {"label": "Pink", "data": "assets/embedded/batch-02/80e8e2d918a7.webp"}};
const cordSrc = "assets/embedded/batch-03/da5190ea16cb.webp";
const ringSrc = "assets/embedded/batch-02/6522784d70e0.webp";
const clipImgSrc = "assets/embedded/batch-02/a5cb381d960c.webp";
const carabinerImgSrc = "assets/embedded/batch-03/ecd637b4d035.webp";
const labelImgSrc = "assets/img/labels/pictureplush-label-cropped.webp";
const SHIPPING_DE = 4.99;
const HANGER_LABELS = Object.freeze({ cord:"Kordel", ring:"Schlüsselring", clip:"Clip", carabiner:"Karabiner + Kordel", none:"Ohne Aufhängung" });
const TYPE_LABELS = Object.freeze({ printed:"Gedruckt", stitched:"Gestickt" });
const SIDE_LABELS = Object.freeze({ single:"Einseitig", double:"Beidseitig" });
const BASE_TEXTURES = JSON.parse(JSON.stringify(TEXTURES));
TEXTURES["cloud-white"] = { label: "Cloud White", data: BASE_TEXTURES.white.data };
TEXTURES["midnight-black"] = { label: "Midnight Black", data: BASE_TEXTURES.black.data };
TEXTURES["vanilla-pop"] = { label: "Vanilla Pop", data: BASE_TEXTURES.cream.data };
TEXTURES["oat-club"] = { label: "Oat Club", data: BASE_TEXTURES.natural.data };
TEXTURES["pebble-grey"] = { label: "Pebble Grey", data: BASE_TEXTURES.grey.data };
TEXTURES["cocoa-beat"] = { label: "Cocoa Beat", data: BASE_TEXTURES.brown.data };
TEXTURES["cherry-bomb"] = { label: "Cherry Bomb", data: BASE_TEXTURES.red.data };
TEXTURES["sunset-punch"] = { label: "Sunset Punch", data: BASE_TEXTURES.orange.data };
TEXTURES["lemon-zing"] = { label: "Lemon Zing", data: BASE_TEXTURES.yellow.data };
TEXTURES["matcha-mood"] = { label: "Matcha Mood", data: BASE_TEXTURES.green.data };
TEXTURES["olive-groove"] = { label: "Olive Groove", data: BASE_TEXTURES.olive.data };
TEXTURES["mint-fizz"] = { label: "Mint Fizz", data: BASE_TEXTURES.mint.data };
TEXTURES["pool-party"] = { label: "Pool Party", data: BASE_TEXTURES.turquoise.data };
TEXTURES["electric-sky"] = { label: "Electric Sky", data: BASE_TEXTURES.blue.data };
TEXTURES["raw-denim"] = { label: "Raw Denim", data: BASE_TEXTURES.blue.data };
TEXTURES["grape-jam"] = { label: "Grape Jam", data: BASE_TEXTURES.purple.data };
TEXTURES["lilac-dream"] = { label: "Lilac Dream", data: BASE_TEXTURES.lavender.data };
TEXTURES["bubblegum-flash"] = { label: "Bubblegum Flash", data: BASE_TEXTURES.pink.data };
TEXTURES["black-leather"] = { label: "Black Leather", data: "assets/img/materials/fabrics/black-leather.webp" };
TEXTURES["night-linen"] = { label: "Night Linen", data: "assets/img/materials/fabrics/night-linen.webp" };
TEXTURES["pink-leopard"] = { label: "Pink Leopard", data: "assets/img/materials/fabrics/pink-leopard.webp" };
TEXTURES["wild-leopard"] = { label: "Wild Leopard", data: "assets/img/materials/fabrics/wild-leopard.webp" };
TEXTURES["emerald-teddy"] = { label: "Emerald Teddy", data: "assets/img/materials/fabrics/emerald-teddy.webp" };
TEXTURES["bubblegum-teddy"] = { label: "Bubblegum Teddy", data: "assets/img/materials/fabrics/bubblegum-teddy.webp" };
TEXTURES["black-plush"] = { label: "Black Plush", data: "assets/img/materials/fabrics/black-plush.webp" };
TEXTURES["sunshine-plush"] = { label: "Sunshine Plush", data: "assets/img/materials/fabrics/sunshine-plush.webp" };
TEXTURES["cherry-cotton"] = { label: "Cherry Cotton", data: "assets/img/materials/fabrics/cherry-cotton.jpg" };


const fileInput = document.getElementById("fileInput");
const bgSelect = document.getElementById("bgSelect");
const renderBtn = document.getElementById("renderBtn");
const renderStatus = document.getElementById("renderStatus");
const orderBtn = document.getElementById("orderBtn");
const rightsConfirm = document.getElementById("rightsConfirm");
const downloadBtn = document.getElementById("downloadBtn");
const previewCanvas = document.getElementById("previewCanvas");
const preview360Canvas = document.getElementById("preview360Canvas");
const normalPreviewMode = document.getElementById("normalPreviewMode");
const view360PreviewMode = document.getElementById("view360PreviewMode");
const view360Controls = document.getElementById("view360Controls");

const view360Angle = document.getElementById("view360Angle");
const view360AngleOutput = document.getElementById("view360AngleOutput");
const view360Depth = document.getElementById("view360Depth");
const view360DepthOutput = document.getElementById("view360DepthOutput");
const view360Auto = document.getElementById("view360Auto");
const previewStage = document.getElementById("previewStage");
const previewViewport = document.getElementById("previewViewport");
const previewInner = document.getElementById("previewInner");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");
const maximizeBtn = document.getElementById("maximizeBtn");
const zoomLevel = document.getElementById("zoomLevel");
const sizeRange = document.getElementById("sizeRange");
const borderRange = document.getElementById("borderRange");

const qtyInput = document.getElementById("qtyInput");
const sizeValue = document.getElementById("sizeValue");
const borderValue = document.getElementById("borderValue");
const priceValue = document.getElementById("priceValue");
const unitPriceText = document.getElementById("unitPriceText");
const totalText = document.getElementById("totalText");
const summaryPill = document.getElementById("summaryPill");
const fabricGrid = document.getElementById("fabricGrid");
const hangerCards = Array.from(document.querySelectorAll(".hanger-card[data-hanger]"));
const typeCards = Array.from(document.querySelectorAll(".type-card[data-type]"));
const sideCards = Array.from(document.querySelectorAll(".side-card[data-sides]"));

let selectedFabric = "cloud-white";
let selectedType = "printed";
let selectedHanger = "cord";
let selectedSides = "single";
let lastRendered = false;
let lastOrderData = null;
let currentZoom = 1;
let previewMode = "normal";
let view360Model = null;
let view360AngleValue = 0;
let view360DepthCm = 2.2;
let view360Dragging = false;
let view360LastX = 0;
let view360Raf = null;
let view360LastTime = performance.now();

function unitPrice() {
  const size = Number(sizeRange.value);
  const executionPrice = selectedType === "printed" ? size : size + 5;
  return executionPrice + (selectedSides === "double" ? 5 : 0);
}
function currentPrice() {
  return +(unitPrice() * Number(qtyInput.value || 1)).toFixed(2);
}
function currentTotal() {
  return (currentPrice() + SHIPPING_DE).toFixed(2).replace(".", ",");
}

function buildFabricGrid() {
  const order = ["cloud-white","midnight-black","black-leather","night-linen","black-plush","vanilla-pop","oat-club","pebble-grey","cocoa-beat","cherry-bomb","cherry-cotton","sunset-punch","lemon-zing","sunshine-plush","matcha-mood","emerald-teddy","olive-groove","mint-fizz","pool-party","electric-sky","raw-denim","grape-jam","lilac-dream","bubblegum-flash","bubblegum-teddy","pink-leopard","wild-leopard"];
  fabricGrid.replaceChildren();
  order.forEach((key) => {
    const tex = TEXTURES[key];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fabric-card" + (key === selectedFabric ? " active" : "");
    const thumb = document.createElement("div");
    thumb.className = "fabric-thumb";
    thumb.style.backgroundImage = `url("${tex.data}")`;
    const label = document.createElement("div");
    label.className = "fabric-label";
    label.textContent = tex.label;
    btn.append(thumb, label);
    btn.addEventListener("click", () => {
      selectedFabric = key;
      buildFabricGrid();
      updateLabels();
      rerenderIfPossible();
    });
    fabricGrid.appendChild(btn);
  });
}

let rerenderTimer=null;
function rerenderIfPossible() {
  if (!(lastRendered && fileInput.files && fileInput.files[0])) return;
  clearTimeout(rerenderTimer);
  setRenderStatus("Vorschau wird live aktualisiert …");
  rerenderTimer=setTimeout(()=>{
    runPreview(fileInput.files[0])
      .then(()=>{setRenderStatus("");setTimeout(fitPreviewToViewport,30);})
      .catch(err=>{console.error(err);setRenderStatus(err?.message||"Vorschau konnte nicht aktualisiert werden.");});
  },90);
}

typeCards.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedType = btn.dataset.type;
    typeCards.forEach((x) => x.classList.toggle("active", x.dataset.type === selectedType));
    updateLabels();
    rerenderIfPossible();
  });
});

sideCards.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedSides = btn.dataset.sides;
    sideCards.forEach((x) => x.classList.toggle("active", x.dataset.sides === selectedSides));
    updateLabels();
    rerenderIfPossible();
  });
});

hangerCards.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedHanger = btn.dataset.hanger;
    hangerCards.forEach((x) => x.classList.toggle("active", x.dataset.hanger === selectedHanger));
    updateLabels();
    rerenderIfPossible();
  });
});

function getBorderSettings() {
  const displayValue = Math.min(15, Math.max(0, Number(borderRange.value || 0)));
  const percent = 5 + displayValue; // UI 0–15 entspricht intern 5–20 %
  const size = Number(sizeRange.value);
  const cm = size * percent / 100;
  return { displayValue, percent, cm };
}

function updateLabels() {
  const size = Number(sizeRange.value);
  const border = getBorderSettings();
  const qty = Number(qtyInput.value || 1);
  sizeValue.textContent = `Aktuell: ${size} × ${size} cm`;
  borderValue.textContent = `Aktuell: ${border.displayValue.toFixed(1).replace(".",",")} · ${border.percent.toFixed(1).replace(".",",")} % = ${border.cm.toFixed(2).replace(".",",")} cm`;
  priceValue.textContent = `${currentPrice().toFixed(2).replace(".",",")} €`;
  unitPriceText.textContent = `Einzelpreis: ${unitPrice().toFixed(2).replace(".",",")} €`;
  totalText.textContent = `Gesamt: ${currentTotal()} €`;
  summaryPill.textContent = `${TYPE_LABELS[selectedType]} · ${SIDE_LABELS[selectedSides]} · ${size} × ${size} cm · ${TEXTURES[selectedFabric].label} · ${HANGER_LABELS[selectedHanger]} · Menge: ${qty}`;
}

function getActivePreviewCanvas(){ return previewMode === "360" ? preview360Canvas : previewCanvas; }
function applyZoom() {
  const activeCanvas = getActivePreviewCanvas();
  const displayW = Math.max(1, Math.round(activeCanvas.width * currentZoom));
  const displayH = Math.max(1, Math.round(activeCanvas.height * currentZoom));
  previewInner.style.width = `${displayW}px`;
  previewInner.style.height = `${displayH}px`;
  [previewCanvas, preview360Canvas].forEach((canvas) => { canvas.style.width = `${displayW}px`; canvas.style.height = `${displayH}px`; });
  zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
}
function fitPreviewToViewport() {
  const activeCanvas = getActivePreviewCanvas();
  const targetW = Math.max(120, previewViewport.clientWidth * 0.82);
  const targetH = Math.max(120, previewViewport.clientHeight * 0.82);
  const scaleX = targetW / activeCanvas.width;
  const scaleY = targetH / activeCanvas.height;
  currentZoom = Math.min(scaleX, scaleY);
  if (!isFinite(currentZoom) || currentZoom <= 0) currentZoom = 1;
  currentZoom = Math.max(0.08, Math.min(2.5, currentZoom));
  applyZoom();
  previewViewport.scrollTop = Math.max(0, (previewViewport.scrollHeight - previewViewport.clientHeight) / 2);
  previewViewport.scrollLeft = Math.max(0, (previewViewport.scrollWidth - previewViewport.clientWidth) / 2);
}
function adjustZoom(delta) {
  currentZoom = Math.max(0.08, Math.min(4, currentZoom + delta));
  applyZoom();
}
function setFullscreenPreview(enabled) {
  previewStage.classList.toggle("is-maximized", enabled);
  document.body.classList.toggle("preview-fullscreen", enabled);
  maximizeBtn.textContent = enabled ? "Fensteransicht" : "Vollbild";
  setTimeout(fitPreviewToViewport, 70);
}
zoomInBtn.addEventListener("click", () => adjustZoom(0.12));
zoomOutBtn.addEventListener("click", () => adjustZoom(-0.12));
zoomResetBtn.addEventListener("click", fitPreviewToViewport);
maximizeBtn.addEventListener("click", () => setFullscreenPreview(!previewStage.classList.contains("is-maximized")));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && previewStage.classList.contains("is-maximized")) setFullscreenPreview(false);
  if ((event.key === "+" || event.key === "=") && document.activeElement?.tagName !== "INPUT") adjustZoom(0.12);
  if (event.key === "-" && document.activeElement?.tagName !== "INPUT") adjustZoom(-0.12);
});
previewViewport.addEventListener("dblclick", fitPreviewToViewport);
previewViewport.addEventListener("wheel", (e) => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  adjustZoom(e.deltaY < 0 ? 0.1 : -0.1);
}, { passive: false });
window.addEventListener("resize", () => setTimeout(fitPreviewToViewport, 50));

[sizeRange, borderRange, qtyInput].forEach((el) => el.addEventListener("input", () => { if(el===sizeRange) updateDepthFromControl(); updateLabels(); rerenderIfPossible(); }));
bgSelect.addEventListener("change", rerenderIfPossible);

function triggerDownload(dataUrl, filename) {
  const a = document.createElement("a");
  a.href = dataUrl; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
}
function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
function dataUrlToBlob(dataUrl) {
  const [meta, data] = dataUrl.split(",");
  const mime = meta.match(/data:(.*?);base64/)[1];
  const bin = atob(data);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: mime });
}
async function saveFileToDir(dirHandle, filename, blob) {
  const fileHandle = await dirHandle.getFileHandle(filename, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
}
function buildBaseName() {
  return "pictureplush_" + new Date().toISOString().replace(/[:.]/g, "-");
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
function loadFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}
function removeSolidBackground(ctx, w, h, mode) {
  // Entfernt NUR Hintergrund, der mit dem Bildrand verbunden ist.
  // Dadurch bleiben weiße/schwarze Flächen IM Motiv erhalten und werden nicht mehr zu Löchern.
  const imgData = ctx.getImageData(0, 0, w, h);
  const d = imgData.data;
  const seen = new Uint8Array(w*h);
  const queue = new Int32Array(w*h);
  let qh = 0, qt = 0;

  function isBackgroundPixel(i) {
    const a = d[i*4+3];
    if (a < 8) return true;
    const r = d[i*4], g = d[i*4+1], b = d[i*4+2];
    if (mode === "white") return r > 235 && g > 235 && b > 235;
    if (mode === "black") return r < 20 && g < 20 && b < 20;
    return false;
  }
  function push(x,y) {
    if (x<0||x>=w||y<0||y>=h) return;
    const i=y*w+x;
    if (seen[i] || !isBackgroundPixel(i)) return;
    seen[i]=1; queue[qt++]=i;
  }

  // Nur vom Außenrand aus fluten: Innenflächen derselben Farbe bleiben geschützt.
  for(let x=0;x<w;x++){ push(x,0); push(x,h-1); }
  for(let y=1;y<h-1;y++){ push(0,y); push(w-1,y); }

  while(qh<qt){
    const i=queue[qh++], x=i%w, y=(i/w)|0;
    d[i*4+3]=0;
    push(x-1,y); push(x+1,y); push(x,y-1); push(x,y+1);
  }
  ctx.putImageData(imgData, 0, 0);
}

function buildFilledOuterSilhouette(sourceCanvas) {
  // Baut für Polster/3D eine geschlossene Außenform aus der Alpha-Kontur.
  // Transparente Inseln/Löcher innerhalb der Figur beeinflussen die Körperhöhe NICHT.
  const w=sourceCanvas.width, h=sourceCanvas.height;
  const src=sourceCanvas.getContext("2d",{willReadFrequently:true}).getImageData(0,0,w,h).data;
  const outside=new Uint8Array(w*h);
  const queue=new Int32Array(w*h);
  let qh=0,qt=0;
  const isTransparent=i=>src[i*4+3] <= 10;
  function push(x,y){
    if(x<0||x>=w||y<0||y>=h) return;
    const i=y*w+x;
    if(outside[i] || !isTransparent(i)) return;
    outside[i]=1; queue[qt++]=i;
  }
  for(let x=0;x<w;x++){push(x,0);push(x,h-1);}
  for(let y=1;y<h-1;y++){push(0,y);push(w-1,y);}
  while(qh<qt){
    const i=queue[qh++],x=i%w,y=(i/w)|0;
    push(x-1,y);push(x+1,y);push(x,y-1);push(x,y+1);
  }
  const out=document.createElement("canvas"); out.width=w; out.height=h;
  const octx=out.getContext("2d"); const img=octx.createImageData(w,h); const od=img.data;
  for(let i=0;i<w*h;i++){
    // Alles außer dem von außen erreichbaren transparenten Bereich gehört zum Körper.
    if(!outside[i]){od[i*4]=255;od[i*4+1]=255;od[i*4+2]=255;od[i*4+3]=255;}
  }
  octx.putImageData(img,0,0);
  return out;
}
function getAlphaBoundingBox(ctx, w, h) {
  const d = ctx.getImageData(0, 0, w, h).data;
  let minx = w, miny = h, maxx = -1, maxy = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (d[(y*w + x) * 4 + 3] > 10) {
        if (x < minx) minx = x;
        if (y < miny) miny = y;
        if (x > maxx) maxx = x;
        if (y > maxy) maxy = y;
      }
    }
  }
  if (maxx < 0) return null;
  return { x:minx, y:miny, width:maxx-minx+1, height:maxy-miny+1 };
}
function dilate(src, b) {
  const c = document.createElement("canvas");
  c.width = src.width + 2*b;
  c.height = src.height + 2*b;
  const ctx = c.getContext("2d");
  const step = Math.max(1, Math.floor(b / 18));
  for (let a = 0; a < 360; a += 5) {
    const r = a * Math.PI / 180;
    for (let n = 0; n <= b; n += step) ctx.drawImage(src, b + Math.cos(r) * n, b + Math.sin(r) * n);
  }
  const imgData = ctx.getImageData(0,0,c.width,c.height);
  const d = imgData.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i+3] > 0) { d[i] = 255; d[i+1] = 255; d[i+2] = 255; d[i+3] = 255; }
  }
  ctx.putImageData(imgData,0,0);
  return c;
}
function fillMaskWithTexture(ctx, mask, x, y, tex) {
  const t = document.createElement("canvas");
  t.width = mask.width; t.height = mask.height;
  const c = t.getContext("2d");
  const p = c.createPattern(tex, "repeat");
  c.fillStyle = p;
  c.fillRect(0,0,t.width,t.height);
  c.globalCompositeOperation = "destination-in";
  c.drawImage(mask, 0, 0);
  ctx.drawImage(t, x, y);
}
function firstTopHitOnCenterAxis(mask) {
  const ctx = mask.getContext("2d", {willReadFrequently:true});
  const d = ctx.getImageData(0,0,mask.width,mask.height).data;
  const cx = Math.floor(mask.width / 2);
  for (let y=0; y<mask.height; y++) {
    if (d[(y*mask.width + cx)*4 + 3] > 10) return {x:cx,y};
  }
  for (let spread=1; spread<mask.width/2; spread++) {
    for (const x of [cx-spread,cx+spread]) {
      if(x<0||x>=mask.width) continue;
      for(let y=0;y<mask.height;y++) if(d[(y*mask.width+x)*4+3]>10) return {x:cx,y};
    }
  }
  return {x:cx,y:0};
}
function applyPrintedEffect(ctx, motifCanvas, x, y) {
  const overlay = document.createElement("canvas");
  overlay.width = motifCanvas.width; overlay.height = motifCanvas.height;
  const octx = overlay.getContext("2d");
  octx.drawImage(motifCanvas,0,0);
  octx.globalCompositeOperation = "source-in";
  const grad = octx.createLinearGradient(0,0,motifCanvas.width,motifCanvas.height);
  grad.addColorStop(0,"rgba(255,255,255,0.16)");
  grad.addColorStop(0.45,"rgba(255,255,255,0.03)");
  grad.addColorStop(1,"rgba(0,0,0,0.03)");
  octx.fillStyle = grad;
  octx.fillRect(0,0,overlay.width,overlay.height);
  octx.strokeStyle = "rgba(255,255,255,0.05)";
  octx.lineWidth = 1;
  for (let y2 = 0; y2 < overlay.height; y2 += 12) {
    octx.beginPath();
    octx.moveTo(0, y2);
    octx.lineTo(overlay.width, y2);
    octx.stroke();
  }
  ctx.drawImage(overlay,x,y);
}
function applyEmbroideryEffect(ctx,motifCanvas,x,y){
  const overlay=document.createElement("canvas");
  overlay.width=motifCanvas.width; overlay.height=motifCanvas.height;
  const octx=overlay.getContext("2d");
  octx.drawImage(motifCanvas,0,0);
  octx.globalCompositeOperation="source-in";
  const step=Math.max(4,Math.round(Math.min(overlay.width,overlay.height)/65));
  octx.lineWidth=.75;
  octx.strokeStyle="rgba(0,0,0,.28)";
  for(let i=-overlay.height;i<overlay.width+overlay.height;i+=step){octx.beginPath();octx.moveTo(i,0);octx.lineTo(i-overlay.height,overlay.height);octx.stroke();}
  octx.strokeStyle="rgba(0,0,0,.16)";
  for(let i=0;i<overlay.width+overlay.height;i+=step+2){octx.beginPath();octx.moveTo(i,0);octx.lineTo(i+overlay.height,overlay.height);octx.stroke();}
  ctx.drawImage(overlay,x,y);
}
function drawCarabinerWithCord(ctx, carabinerImg, anchorX, anchorY, factor, dropPx) {
  const h = Math.round(220 * factor);
  const w = Math.round(carabinerImg.width / carabinerImg.height * h);
  const x = Math.round(anchorX - w / 2);
  const y = Math.round(anchorY - h) + dropPx;
  ctx.drawImage(carabinerImg, x, y, w, h);
}
function maskCentroid(maskCanvas) {
  const ctx = maskCanvas.getContext("2d", {willReadFrequently:true});
  const {width:w,height:h}=maskCanvas;
  const d=ctx.getImageData(0,0,w,h).data;
  let sx=0,sy=0,n=0;
  for(let y=0;y<h;y+=2) for(let x=0;x<w;x+=2){
    if(d[(y*w+x)*4+3]>20){sx+=x;sy+=y;n++;}
  }
  return n ? {x:sx/n,y:sy/n} : {x:w/2,y:h/2};
}
function boundaryPointOnRay(maskCanvas, cx, cy, angle) {
  const ctx=maskCanvas.getContext("2d",{willReadFrequently:true});
  const {width:w,height:h}=maskCanvas;
  const d=ctx.getImageData(0,0,w,h).data;
  const dx=Math.cos(angle),dy=Math.sin(angle);
  const maxR=Math.hypot(w,h);
  let lastInside=null;
  for(let r=0;r<=maxR;r+=1.5){
    const x=Math.round(cx+dx*r),y=Math.round(cy+dy*r);
    if(x<0||x>=w||y<0||y>=h) break;
    const inside=d[(y*w+x)*4+3]>20;
    if(inside) lastInside={x,y};
    else if(lastInside) break;
  }
  return lastInside;
}
function findStraightLabelSegment(maskCanvas, targetLengthPx) {
  const c=maskCentroid(maskCanvas);
  const pts=[];
  const samples=180;
  for(let i=0;i<samples;i++){
    const a=i/samples*Math.PI*2;
    const p=boundaryPointOnRay(maskCanvas,c.x,c.y,a);
    if(p) pts.push({...p,a});
  }
  if(pts.length<24) return null;
  let best=null;
  // Ein Fenster von ca. 20°–32° bildet eine lokale Konturstrecke ab.
  for(const win of [9,11,13,15]){
    const half=Math.floor(win/2);
    for(let i=0;i<pts.length;i++){
      const group=[];
      for(let k=-half;k<=half;k++) group.push(pts[(i+k+pts.length)%pts.length]);
      const a=group[0], b=group[group.length-1];
      const vx=b.x-a.x, vy=b.y-a.y;
      const span=Math.hypot(vx,vy);
      if(span<Math.max(targetLengthPx*.72,24)) continue;
      const denom=Math.max(1,span);
      let err=0;
      for(const q of group){err+=Math.abs(vy*q.x-vx*q.y+b.x*a.y-b.y*a.x)/denom;}
      err/=group.length;
      const mid=group[half];
      // Bevorzugt lange, gerade Abschnitte; Top-Mitte wird wegen Aufhängung abgewertet.
      const topPenalty=(mid.y<maskCanvas.height*.28 && Math.abs(mid.x-maskCanvas.width/2)<maskCanvas.width*.25)?80:0;
      const rightBonus=mid.x>maskCanvas.width*.52?70:0;
      const bottomBonus=mid.y>maskCanvas.height*.58?4:0;
      const score=span*1.35-err*22-topPenalty+rightBonus+bottomBonus;
      if(!best||score>best.score){
        let angle=Math.atan2(vy,vx);
        // Schrift nie kopfüber anzeigen.
        if(angle>Math.PI/2) angle-=Math.PI;
        if(angle<-Math.PI/2) angle+=Math.PI;
        best={x:mid.x,y:mid.y,angle,span,error:err,score};
      }
    }
  }
  return best;
}
function findPreferredLabelAnchor(maskCanvas, targetLengthPx) {
  // Kein ausreichend gerader Abschnitt = Label in der Vorschau lieber weglassen,
  // statt es sichtbar schief oder mitten durch eine Kurve zu setzen.
  return findStraightLabelSegment(maskCanvas,targetLengthPx);
}
function drawSideLabel(ctx, labelImg, maskCanvas, outlineX, outlineY, pxPerCm, canvasW, canvasH, bodyPadding) {
  if (!labelImg || !maskCanvas) return;
  const targetW=Math.round(2.1*pxPerCm);
  const targetH=Math.max(1,Math.round(targetW*(labelImg.height/labelImg.width)));
  const point=findPreferredLabelAnchor(maskCanvas,targetW);
  if(!point) return;
  const c=maskCentroid(maskCanvas);
  const cx=outlineX+point.x;
  const cy=outlineY+point.y;
  // Das kurze Einnähende liegt auf einer möglichst geraden Konturstrecke.
  // Die lange Labelachse zeigt von der Figur weg – wie bei einem echten Seitenlabel.
  let ox=point.x-c.x, oy=point.y-c.y;
  const olen=Math.max(1,Math.hypot(ox,oy)); ox/=olen; oy/=olen;
  const outwardAngle=Math.atan2(oy,ox);
  const overlap=targetW*.14;
  const center={x:cx+ox*(targetW*.5-overlap),y:cy+oy*(targetW*.5-overlap)};
  ctx.save();
  ctx.translate(center.x,center.y);
  ctx.rotate(outwardAngle);
  ctx.shadowColor="rgba(0,0,0,.14)";
  ctx.shadowBlur=Math.max(2,Math.round(pxPerCm*.025));
  ctx.shadowOffsetY=Math.max(1,Math.round(pxPerCm*.01));
  ctx.drawImage(labelImg,-targetW/2,-targetH/2,targetW,targetH);
  ctx.restore();
}
function drawAdaptiveScale(ctx, x, y, w, h, sizeCm, limitedBy, canvasW, canvasH) {
  ctx.save();
  ctx.strokeStyle = "rgba(0,0,0,0.15)";
  ctx.fillStyle = "rgba(0,0,0,0.38)";
  ctx.lineWidth = 1;
  ctx.font = "11px Arial";
  if (limitedBy === "width") {
    const bottomY = Math.min(canvasH - 16, y + h + 20);
    const pxPerCm = w / sizeCm;
    ctx.beginPath(); ctx.moveTo(x,bottomY); ctx.lineTo(x+w,bottomY); ctx.stroke();
    for (let i=0; i<=sizeCm*10; i++) {
      const px = x + (i/10)*pxPerCm, len = i%10===0 ? 9 : (i%5===0 ? 6 : 3);
      ctx.beginPath(); ctx.moveTo(px,bottomY); ctx.lineTo(px,bottomY-len); ctx.stroke();
    }
    ctx.fillText(`${sizeCm} cm`, x+w+6, bottomY+4);
  } else {
    const leftX = Math.max(16, x-28);
    const pxPerCm = h / sizeCm;
    ctx.beginPath(); ctx.moveTo(leftX,y); ctx.lineTo(leftX,y+h); ctx.stroke();
    for (let i=0; i<=sizeCm*10; i++) {
      const py = y+h-(i/10)*pxPerCm, len = i%10===0 ? 9 : (i%5===0 ? 6 : 3);
      ctx.beginPath(); ctx.moveTo(leftX,py); ctx.lineTo(leftX+len,py); ctx.stroke();
    }
    ctx.save(); ctx.translate(leftX-6, y+h/2); ctx.rotate(-Math.PI/2); ctx.fillText(`${sizeCm} cm`, 0, 0); ctx.restore();
  }
  ctx.restore();
}
async function buildProductionSheetDataUrl(order) {
  const sheet = document.createElement("canvas");
  sheet.width = 1400; sheet.height = 1800;
  const ctx = sheet.getContext("2d");
  ctx.fillStyle = "#fff"; ctx.fillRect(0,0,sheet.width,sheet.height);
  ctx.fillStyle = "#111"; ctx.font = "bold 48px Arial";
  ctx.fillText("PicturePlush Produktionsblatt", 70, 80);
  ctx.font = "24px Arial";
  const lines = [
    `Zeitstempel: ${order.timestamp}`,
    `Größe: ${order.sizeCm} x ${order.sizeCm} cm`,
    `Randabstand: ${String(order.borderDisplay ?? "-").replace(".", ",")} · ${String(order.borderPercent ?? "-").replace(".", ",")} % · ${String(order.borderCm).replace(".", ",")} cm`,
    `Ausführung: ${order.type}`,
    `Füllung: ${order.fill}`,
    `Aufhängung: ${order.hanger}`,
    `Motivseiten: ${order.sides || "Einseitig"}`,
    `Produktpreis: ${order.price} €`,
    `Versand: ${order.shipping.toFixed(2).replace(".", ",")} €`,
    `Gesamt: ${order.total.toFixed(2).replace(".", ",")} €`
  ];
  let yy = 150;
  for (const line of lines) { ctx.fillText(line, 70, yy); yy += 42; }
  ctx.strokeStyle = "#ddd"; ctx.lineWidth = 2;
  ctx.strokeRect(70,470,1260,1180);
  ctx.drawImage(previewCanvas,100,500,1200,1100);
  return sheet.toDataURL("image/png");
}

function view360Label(deg) {
  const a = ((deg % 360) + 360) % 360;
  if (a < 22.5 || a >= 337.5) return "Vorne";
  if (a < 67.5) return "Vorne rechts";
  if (a < 112.5) return "Rechte Seite";
  if (a < 157.5) return "Hinten rechts";
  if (a < 202.5) return "Hinten";
  if (a < 247.5) return "Hinten links";
  if (a < 292.5) return "Linke Seite";
  return "Vorne links";
}
function scaleCanvas(source, maxSide = 520) {
  const scale = Math.min(1, maxSide / Math.max(source.width, source.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.width * scale));
  canvas.height = Math.max(1, Math.round(source.height * scale));
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}
function mirroredCanvas(source) {
  const canvas = document.createElement("canvas");
  canvas.width = source.width; canvas.height = source.height;
  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width, 0); ctx.scale(-1, 1); ctx.drawImage(source, 0, 0);
  return canvas;
}
function buildDistanceField(maskCanvas) {
  const w = maskCanvas.width, h = maskCanvas.height;
  const data = maskCanvas.getContext("2d", {willReadFrequently:true}).getImageData(0,0,w,h).data;
  const inside = new Uint8Array(w*h);
  const dist = new Float32Array(w*h);
  const INF = 1e7;
  for (let i=0;i<w*h;i++) {
    inside[i] = data[i*4+3] > 24 ? 1 : 0;
    dist[i] = inside[i] ? INF : 0;
  }
  const d1=1, d2=Math.SQRT2;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++) {
    const i=y*w+x; if(!inside[i]) continue;
    let v=dist[i];
    if(x>0) v=Math.min(v,dist[i-1]+d1);
    if(y>0) v=Math.min(v,dist[i-w]+d1);
    if(x>0&&y>0) v=Math.min(v,dist[i-w-1]+d2);
    if(x+1<w&&y>0) v=Math.min(v,dist[i-w+1]+d2);
    dist[i]=v;
  }
  for(let y=h-1;y>=0;y--) for(let x=w-1;x>=0;x--) {
    const i=y*w+x; if(!inside[i]) continue;
    let v=dist[i];
    if(x+1<w) v=Math.min(v,dist[i+1]+d1);
    if(y+1<h) v=Math.min(v,dist[i+w]+d1);
    if(x+1<w&&y+1<h) v=Math.min(v,dist[i+w+1]+d2);
    if(x>0&&y+1<h) v=Math.min(v,dist[i+w-1]+d2);
    dist[i]=v;
  }
  let max=1;
  for(let i=0;i<dist.length;i++) if(inside[i]&&dist[i]<INF) max=Math.max(max,dist[i]);
  const normalized=new Float32Array(w*h);
  const denom=Math.max(1,max-1);
  // V18: bewährtes, natürliches V15-Profil wiederhergestellt.
  // Die Wölbung folgt der Entfernung zur äußeren Kontur; Innenflächen erzeugen keine Löcher.
  for(let i=0;i<normalized.length;i++) {
    if(!inside[i]) { normalized[i]=0; continue; }
    const edgeZero=Math.max(0,(dist[i]-1)/denom);
    normalized[i]=Math.pow(Math.min(1,edgeZero),0.68);
  }
  return {w,h,inside,normalized,max};
}
function textureMaskedCanvas(textureImg, maskCanvas) {
  const canvas=document.createElement("canvas"); canvas.width=maskCanvas.width; canvas.height=maskCanvas.height;
  const ctx=canvas.getContext("2d");
  const pattern=ctx.createPattern(textureImg,"repeat");
  ctx.fillStyle=pattern || "#fff"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.globalCompositeOperation="destination-in"; ctx.drawImage(maskCanvas,0,0); ctx.globalCompositeOperation="source-over";
  return canvas;
}
function createBinaryMask(field, test) {
  const canvas=document.createElement("canvas"); canvas.width=field.w; canvas.height=field.h;
  const ctx=canvas.getContext("2d"); const image=ctx.createImageData(field.w,field.h); const d=image.data;
  for(let i=0;i<field.inside.length;i++) {
    if(!field.inside[i] || !test(field.normalized[i])) continue;
    d[i*4]=255; d[i*4+1]=255; d[i*4+2]=255; d[i*4+3]=255;
  }
  ctx.putImageData(image,0,0); return canvas;
}
function applyMaskToSource(source, mask) {
  const canvas=document.createElement("canvas"); canvas.width=source.width; canvas.height=source.height;
  const ctx=canvas.getContext("2d"); ctx.drawImage(source,0,0);
  ctx.globalCompositeOperation="destination-in"; ctx.drawImage(mask,0,0); ctx.globalCompositeOperation="source-over";
  return canvas;
}
function buildBulgeLayers(frontCanvas, maskCanvas, textureImg, count=22) {
  const field=buildDistanceField(maskCanvas);
  const texture=textureMaskedCanvas(textureImg,maskCanvas);
  const crossSections=[];
  const frontBands=[];
  for(let i=0;i<count;i++) {
    const low=i/count, high=(i+1)/count;
    const sectionMask=createBinaryMask(field,v=>v+0.0001>=low);
    const section=applyMaskToSource(texture,sectionMask);
    const sectionCtx=section.getContext("2d");
    sectionCtx.globalCompositeOperation="source-atop";
    sectionCtx.fillStyle=`rgba(0,0,0,${(0.035 + (1-low)*0.065).toFixed(3)})`;
    sectionCtx.fillRect(0,0,section.width,section.height);
    sectionCtx.globalCompositeOperation="source-over";
    crossSections.push(section);
    const bandMask=createBinaryMask(field,v=>v+0.0001>=low && (i===count-1 || v<high));
    frontBands.push(applyMaskToSource(frontCanvas,bandMask));
  }
  return {field,crossSections,frontBands,backBands:frontBands.map(mirroredCanvas)};
}
function buildHanger360(selected, assets, factor) {
  const canvas=document.createElement("canvas");
  if(selected==="none") {canvas.width=1;canvas.height=1;return canvas;}
  let w=180,h=220;
  if(selected==="cord") { h=Math.round(170*factor); w=Math.max(20,Math.round(assets.cord.width/assets.cord.height*h)); }
  if(selected==="ring") { h=Math.round(160*factor); w=Math.round(assets.ring.width/assets.ring.height*h); }
  if(selected==="clip") { h=Math.round(180*factor); w=Math.round(assets.clip.width/assets.clip.height*h); }
  if(selected==="carabiner") { h=Math.round(225*factor); w=Math.round(160*factor); }
  canvas.width=Math.max(1,w+30);canvas.height=Math.max(1,h+20);const ctx=canvas.getContext("2d");
  if(selected==="cord") ctx.drawImage(assets.cord,15,10,w,h);
  else if(selected==="ring") ctx.drawImage(assets.ring,15,10,w,h);
  else if(selected==="clip") ctx.drawImage(assets.clip,15,10,w,h);
  else drawCarabinerWithCord(ctx,assets.carabiner,canvas.width/2,canvas.height-12,factor,0);
  return canvas;
}
function prepare360Model(frontSource, maskSource, textureImg, hangerCanvas) {
  const front=scaleCanvas(frontSource,520);
  const mask=scaleCanvas(maskSource,520);
  const layers=buildBulgeLayers(front,mask,textureImg,22);
  // Rückansicht ist geometrisch und bildlich gespiegelt. Das ist wichtig bei asymmetrischen Motiven.
  const backMask = mirroredCanvas(mask);
  const plainBack = textureMaskedCanvas(textureImg, backMask);
  const backSource = selectedSides === "double" ? mirroredCanvas(front) : plainBack;
  const backLayers = buildBulgeLayers(backSource, backMask, textureImg, 22);
  view360Model={
    front,
    back:backSource,
    mask,
    backMask,
    crossSections:layers.crossSections,
    frontBands:layers.frontBands,
    backBands:backLayers.frontBands,
    hanger:hangerCanvas
  };
  render360Preview();
}
function draw360Projected(ctx,image,cx,cy,w,h) {
  if(!image || w<0.35 || h<0.35) return;
  ctx.drawImage(image,cx-w/2,cy-h/2,w,h);
}
function draw360Shadow(ctx,cx,cy,w,h) {
  ctx.save();ctx.translate(cx,cy+h*.51);ctx.scale(1,.20);
  const radius=Math.max(32,Math.max(w,24)*.52);
  const g=ctx.createRadialGradient(0,0,4,0,0,radius);
  g.addColorStop(0,"rgba(0,0,0,.16)");g.addColorStop(1,"rgba(0,0,0,0)");
  ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2);ctx.fill();ctx.restore();
}
function render360Preview() {
  if(!view360Model) return;
  const canvas=preview360Canvas,ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="#fff";ctx.fillRect(0,0,canvas.width,canvas.height);
  const theta=view360AngleValue*Math.PI/180;
  const cos=Math.cos(theta),sin=Math.sin(theta),cosAbs=Math.max(.006,Math.abs(cos));
  const sideVisibility=Math.min(1,Math.abs(sin)*1.1);
  const m=view360Model;
  const scale=Math.min(canvas.width*.62/m.front.width,canvas.height*.64/m.front.height);
  const bodyW=m.front.width*scale,bodyH=m.front.height*scale;
  const selectedSize=Math.max(5,Number(sizeRange.value));
  const maxDepthPx=Math.max(8,view360DepthCm*bodyW/selectedSize*.50);
  const projectedFaceW=Math.max(1.3,bodyW*cosAbs);
  const cx=canvas.width/2,cy=canvas.height*.61;
  draw360Shadow(ctx,cx,cy,Math.max(projectedFaceW,2*maxDepthPx*sideVisibility),bodyH);
  if(m.hanger&&m.hanger.width>1){const hw=Math.max(4,m.hanger.width*scale*.76*cosAbs+m.hanger.width*scale*.12*Math.abs(sin));const hh=m.hanger.height*scale*.76;const bodyTop=cy-bodyH/2;const overlap=Math.max(5,bodyH*.018);const hangerCy=bodyTop-hh/2+overlap;draw360Projected(ctx,m.hanger,cx,hangerCy,hw,hh);}
  if(sideVisibility>.03){
    const volume=[];
    for(let i=0;i<31;i++){const q=i/30*2-1,z=q*maxDepthPx,level=Math.min(m.crossSections.length-1,Math.round(Math.abs(q)*(m.crossSections.length-1)));volume.push({z,screen:z*cos,shift:z*sin,level});}
    volume.sort((a,b)=>a.screen-b.screen);
    ctx.save();
    for(const layer of volume){
      // Seiten werden mit dem gewählten Stoffmuster nahezu deckend aufgebaut statt als transparente „Scheiben“.
      const centerWeight=1-Math.abs(layer.z/maxDepthPx);
      ctx.globalAlpha=(.58+.36*centerWeight)*sideVisibility;
      draw360Projected(ctx,m.crossSections[layer.level],cx+layer.shift,cy,projectedFaceW,bodyH);
    }
    ctx.restore();
  }
  const frontVisible=cos>=0;
  const bands=frontVisible?m.frontBands:m.backBands;
  const faceSign=frontVisible?1:-1;
  ctx.save();
  for(let i=0;i<bands.length;i++){const localDepth=((i+.5)/bands.length)*maxDepthPx*faceSign;ctx.globalAlpha=.96+.04*((i+.5)/bands.length);draw360Projected(ctx,bands[i],cx+localDepth*sin,cy,projectedFaceW,bodyH);}
  ctx.restore();
  view360AngleOutput.value=`${Math.round(view360AngleValue)}° · ${view360Label(view360AngleValue)}`;
}
function setPreviewMode(mode) {
  previewMode=mode;const is360=mode==="360";
  normalPreviewMode.classList.toggle("active",!is360);view360PreviewMode.classList.toggle("active",is360);
  previewCanvas.hidden=is360;preview360Canvas.hidden=!is360;view360Controls.hidden=!is360;previewViewport.classList.toggle("is-360",is360);
  if(is360)render360Preview();setTimeout(fitPreviewToViewport,30);
}
normalPreviewMode.addEventListener("click",()=>setPreviewMode("normal"));
view360PreviewMode.addEventListener("click",()=>{if(view360Model)setPreviewMode("360")});
view360Angle.addEventListener("input",()=>{view360AngleValue=Number(view360Angle.value);render360Preview()});
function clampDepth(v,min,max){return Math.max(min,Math.min(max,v));}
function depthRangeForSize(sizeCm){
  // Größenabhängige sinnvolle Vorschauwerte: kleine Anhänger bleiben schlank, große dürfen voller wirken.
  const min=clampDepth(sizeCm*0.12,0.9,1.8);
  const mid=clampDepth(sizeCm*0.22,1.5,3.0);
  const max=clampDepth(sizeCm*0.32,2.0,4.5);
  return {min,mid,max};
}
function updateDepthFromControl(){
  const size=Math.max(5,Number(sizeRange.value));
  const r=depthRangeForSize(size);
  const t=Math.max(0,Math.min(100,Number(view360Depth.value||50)));
  view360DepthCm=t<=50 ? r.min+(r.mid-r.min)*(t/50) : r.mid+(r.max-r.mid)*((t-50)/50);
  const fmt=v=>v.toFixed(1).replace(".",",")+" cm";
  const minLabel=document.getElementById("depthMinLabel"),midLabel=document.getElementById("depthMidLabel"),maxLabel=document.getElementById("depthMaxLabel");
  if(minLabel)minLabel.textContent=`Flach · ${fmt(r.min)}`;
  if(midLabel)midLabel.textContent=`Mittel · ${fmt(r.mid)}`;
  if(maxLabel)maxLabel.textContent=`Maximal · ${fmt(r.max)}`;
  view360DepthOutput.value=`Aktuell: ${fmt(view360DepthCm)}`;
}
view360Depth.addEventListener("input",()=>{updateDepthFromControl();render360Preview()});
previewViewport.addEventListener("pointerdown",e=>{if(previewMode!=="360")return;view360Dragging=true;view360LastX=e.clientX;previewViewport.setPointerCapture(e.pointerId);view360Auto.checked=false});
previewViewport.addEventListener("pointermove",e=>{if(!view360Dragging||previewMode!=="360")return;const dx=e.clientX-view360LastX;view360LastX=e.clientX;view360AngleValue=(view360AngleValue+dx*.72+360)%360;view360Angle.value=String(Math.round(view360AngleValue));render360Preview()});
previewViewport.addEventListener("pointerup",e=>{view360Dragging=false;try{previewViewport.releasePointerCapture(e.pointerId)}catch{}});previewViewport.addEventListener("pointercancel",()=>view360Dragging=false);
function animate360(now){const dt=Math.min(50,now-view360LastTime);view360LastTime=now;if(previewMode==="360"&&view360Auto.checked&&!view360Dragging){view360AngleValue=(view360AngleValue+dt*.028)%360;view360Angle.value=String(Math.round(view360AngleValue));render360Preview()}requestAnimationFrame(animate360)}
requestAnimationFrame(animate360);
updateDepthFromControl();
setPreviewMode("normal");

const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;
const MAX_IMAGE_SIDE = 8000;
const MAX_IMAGE_PIXELS = 40_000_000;
const ALLOWED_UPLOAD_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);

async function validateUploadFile(file) {
  if (!(file instanceof File)) throw new Error("Bitte wähle eine Bilddatei aus.");
  if (!ALLOWED_UPLOAD_TYPES.has(file.type)) {
    throw new Error("Erlaubt sind nur PNG, JPG/JPEG und WebP.");
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new Error("Die Datei ist zu groß. Maximal 20 MB sind erlaubt.");
  }
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Die Bilddatei konnte nicht gelesen werden."));
      image.src = url;
    });
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (!w || !h) throw new Error("Ungültige Bildabmessungen.");
    if (w > MAX_IMAGE_SIDE || h > MAX_IMAGE_SIDE || w * h > MAX_IMAGE_PIXELS) {
      throw new Error("Das Bild ist für die Vorschau zu groß. Maximal 8000 px Kantenlänge bzw. 40 Megapixel.");
    }
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function runPreview(file) {
  await validateUploadFile(file);
  const requestedPreviewMode = lastRendered ? previewMode : "360";
  const shouldAutoRotate = !lastRendered ? true : view360Auto.checked;
  view360PreviewMode.disabled = true;
  view360Model = null;
  const PX_PER_CM = 100;
  const sizeCm = Number(sizeRange.value);
  const borderSettings = getBorderSettings();
  const borderCm = borderSettings.cm;
  const borderPercent = borderSettings.percent;
  const borderDisplay = borderSettings.displayValue;
  const maxBodyPx = sizeCm * PX_PER_CM;
  const borderPx = Math.max(10, Math.round(borderCm * PX_PER_CM * 0.85));
  // Konstante reale Konturbreite: ca. 0,8 mm. So verschwindet die dunkle Kontur bei großen Größen nicht.
  const outlineCm = 0.08;
  const outlinePx = Math.max(5, Math.round(outlineCm * PX_PER_CM));
  const innerMaxPx = Math.max(20, maxBodyPx - 2 * borderPx);
  if (innerMaxPx <= 0) throw new Error("Rand ist zu groß für diese Größe.");

  const img = await loadFile(file);
  const src = document.createElement("canvas");
  src.width = img.width; src.height = img.height;
  const sctx = src.getContext("2d");
  sctx.drawImage(img,0,0);
  removeSolidBackground(sctx, src.width, src.height, bgSelect.value);

  const box = getAlphaBoundingBox(sctx, src.width, src.height);
  if (!box) throw new Error("Kein Motiv erkannt.");

  const crop = document.createElement("canvas");
  crop.width = box.width; crop.height = box.height;
  crop.getContext("2d").drawImage(src, box.x, box.y, box.width, box.height, 0,0, box.width, box.height);

  const scaleX = innerMaxPx / box.width;
  const scaleY = innerMaxPx / box.height;
  const limitedBy = scaleX < scaleY ? "width" : "height";
  const scale = Math.min(scaleX, scaleY);
  const w = Math.max(1, Math.round(box.width * scale));
  const h = Math.max(1, Math.round(box.height * scale));

  const motif = document.createElement("canvas");
  motif.width = w; motif.height = h;
  motif.getContext("2d").drawImage(crop,0,0,w,h);

  // Für Kontur und 3D-Volumen zählt ausschließlich die ÄUSSERE Silhouette.
  // Innenliegende weiße Flächen oder transparente Inseln erzeugen keine Löcher mehr.
  const solidMotifMask = buildFilledOuterSilhouette(motif);
  const sil = dilate(solidMotifMask, borderPx);
  const outl = dilate(solidMotifMask, borderPx + outlinePx);

  const fillTex = await loadImage(TEXTURES[selectedFabric].data);
  const outlineTex = await loadImage(TEXTURES["black"].data);
  const cord = await loadImage(cordSrc);
  const ring = await loadImage(ringSrc);
  const clipImg = await loadImage(clipImgSrc);
  const carabinerImg = await loadImage(carabinerImgSrc);
  const labelImg = await loadImage(labelImgSrc);

  const bodyFront360 = document.createElement("canvas");
  bodyFront360.width = outl.width; bodyFront360.height = outl.height;
  const body360ctx = bodyFront360.getContext("2d");
  fillMaskWithTexture(body360ctx, outl, 0, 0, outlineTex);
  fillMaskWithTexture(body360ctx, sil, outlinePx, outlinePx, fillTex);
  body360ctx.drawImage(motif, outlinePx + borderPx, outlinePx + borderPx);
  if (selectedType === "stitched") applyEmbroideryEffect(body360ctx, motif, outlinePx + borderPx, outlinePx + borderPx);
  else applyPrintedEffect(body360ctx, motif, outlinePx + borderPx, outlinePx + borderPx);
  const bodyMask360 = document.createElement("canvas"); bodyMask360.width=outl.width;bodyMask360.height=outl.height;
  const bodyMaskCtx=bodyMask360.getContext("2d");bodyMaskCtx.drawImage(outl,0,0);bodyMaskCtx.globalCompositeOperation="source-in";bodyMaskCtx.fillStyle="#fff";bodyMaskCtx.fillRect(0,0,bodyMask360.width,bodyMask360.height);bodyMaskCtx.globalCompositeOperation="source-over";

  const cordFactor = 1 + ((sizeCm - 5) / 5);
  const baseCordH = 170;
  const cordH = Math.round(baseCordH * cordFactor);
  const cordW = Math.round((cord.width / cord.height) * cordH);
  const anchor = firstTopHitOnCenterAxis(outl);
  const hangerDrop = 30;

  let hangerExtra = cordH;
  if (selectedHanger === "ring") hangerExtra = Math.round(110 * cordFactor);
  if (selectedHanger === "clip") hangerExtra = Math.round(110 * cordFactor);
  if (selectedHanger === "carabiner") hangerExtra = Math.round(150 * cordFactor);
  if (selectedHanger === "none") hangerExtra = 0;

  const labelTargetW = Math.round(2.2 * PX_PER_CM);
  const bodyPadding = Math.max(70, Math.round(Math.max(outl.width, outl.height) * 0.10));
  const labelReserveRight = Math.round(labelTargetW * 1.05);
  const labelReserveLeft = Math.round(labelTargetW * 0.08);
  const canvasW = Math.max(520, outl.width + bodyPadding * 2 + labelReserveLeft + labelReserveRight);
  const canvasH = Math.max(520, hangerExtra + outl.height + bodyPadding * 2);
  previewCanvas.width = canvasW; previewCanvas.height = canvasH;

  const ctx = previewCanvas.getContext("2d");
  ctx.clearRect(0,0,canvasW,canvasH);
  ctx.fillStyle = "#fff"; ctx.fillRect(0,0,canvasW,canvasH);

  const outlineX = Math.round(bodyPadding + labelReserveLeft);
  const anchorX = outlineX + anchor.x;
  const anchorY = bodyPadding + hangerExtra;
  const outlineY = anchorY - anchor.y;
  const silX = outlineX + outlinePx;
  const silY = outlineY + outlinePx;
  const motifX = silX + borderPx;
  const motifY = silY + borderPx;

  drawAdaptiveScale(ctx, outlineX, outlineY, outl.width, outl.height, sizeCm, limitedBy, canvasW, canvasH);

  if (selectedHanger === "cord") {
    const cordX = Math.round(anchorX - cordW/2);
    const cordY = Math.round(anchorY - cordH) + hangerDrop;
    ctx.drawImage(cord, cordX, cordY, cordW, cordH);
  } else if (selectedHanger === "ring") {
    const factor = 1 + ((sizeCm - 5) / 5);
    const rH = Math.round(160 * factor);
    const rW = Math.round(ring.width / ring.height * rH);
    const ringX = Math.round(anchorX - rW/2);
    const ringY = Math.round(anchorY - rH) + hangerDrop;
    ctx.drawImage(ring, ringX, ringY, rW, rH);
  } else if (selectedHanger === "clip") {
    const factor = 1 + ((sizeCm - 5) / 5);
    const cH = Math.round(180 * factor);
    const cW = Math.round(clipImg.width / clipImg.height * cH);
    const clipX = Math.round(anchorX - cW/2);
    const clipY = Math.round(anchorY - cH) + hangerDrop;
    ctx.drawImage(clipImg, clipX, clipY, cW, cH);
  } else if (selectedHanger === "carabiner") {
    drawCarabinerWithCord(ctx, carabinerImg, anchorX, anchorY, cordFactor, hangerDrop);
  }

  fillMaskWithTexture(ctx, outl, outlineX, outlineY, outlineTex);
  fillMaskWithTexture(ctx, sil, silX, silY, fillTex);
  ctx.drawImage(motif, motifX, motifY);

  if (selectedType === "stitched") {
    applyEmbroideryEffect(ctx, motif, motifX, motifY);
  } else {
    applyPrintedEffect(ctx, motif, motifX, motifY);
  }

  drawSideLabel(ctx, labelImg, outl, outlineX, outlineY, PX_PER_CM, canvasW, canvasH, bodyPadding);

  const hanger360 = buildHanger360(selectedHanger, {cord,ring,clip:clipImg,carabiner:carabinerImg}, cordFactor);
  prepare360Model(bodyFront360, bodyMask360, fillTex, hanger360);
  if (previewMode === "360") render360Preview();

  lastOrderData = {
    timestamp: new Date().toLocaleString("de-DE"),
    sizeCm,
    borderCm: Number(borderCm.toFixed(2)),
    borderPercent: Number(borderPercent.toFixed(1)),
    borderDisplay: Number(borderDisplay.toFixed(1)),
    type: TYPE_LABELS[selectedType],
    sides: SIDE_LABELS[selectedSides],
    fill: TEXTURES[selectedFabric].label,
    hanger: HANGER_LABELS[selectedHanger] || "Kordel",
    price: currentPrice(),
    shipping: SHIPPING_DE,
    total: currentPrice() + SHIPPING_DE
  };
  view360PreviewMode.disabled = false;
  view360Auto.checked = shouldAutoRotate;
  setPreviewMode(requestedPreviewMode);
  render360Preview();
}

function setRenderStatus(message = "") {
  if (!renderStatus) return;
  renderStatus.textContent = message;
  renderStatus.hidden = !message;
}

fileInput.addEventListener("change", async () => { setRenderStatus(""); if(fileInput.files && fileInput.files[0]) { try { await runPreview(fileInput.files[0]); lastRendered=true; updateLabels(); setTimeout(fitPreviewToViewport,30); } catch(e) { setRenderStatus(e.message || "Vorschau konnte nicht erstellt werden."); } } });

renderBtn.addEventListener("click", async () => {
  if (!fileInput.files || !fileInput.files[0]) {
    setRenderStatus("");
    fileInput.click();
    return;
  }
  setRenderStatus("");
  renderBtn.disabled = true;
  renderBtn.textContent = "Rendern...";
  try {
    await runPreview(fileInput.files[0]);
    lastRendered = true;
    setPreviewMode("normal");
    setTimeout(fitPreviewToViewport, 30);
  } catch (e) {
    console.error(e);
    view360Model = null;
    view360PreviewMode.disabled = true;
    if (previewMode === "360") setPreviewMode("normal");
    setRenderStatus("Die Vorschau konnte nicht erstellt werden. Bitte prüfe die Bilddatei und versuche es erneut.");
  } finally {
    renderBtn.disabled = false;
    renderBtn.textContent = "Vorschau erstellen";
  }
});
downloadBtn.addEventListener("click", () => {
  if (!lastRendered) { alert("Bitte erst eine Vorschau erstellen."); return; }
  triggerDownload(previewCanvas.toDataURL("image/png"), buildBaseName() + "_preview.png");
});
orderBtn.addEventListener("click", async () => {
  if (!rightsConfirm.checked) { alert("Bitte bestätige zuerst, dass du über die erforderlichen Rechte am Motiv verfügst."); rightsConfirm.focus(); return; }
  if (!lastRendered || !lastOrderData) {
    alert("Bitte zuerst ein Bild hochladen und die Vorschau erstellen.");
    return;
  }
  orderBtn.disabled = true;
  const oldText = orderBtn.textContent;
  orderBtn.textContent = "Bestellung wird vorbereitet...";
  try {
    const sheetData = await buildProductionSheetDataUrl(lastOrderData);
    const base = buildBaseName();
    triggerDownload(sheetData, base + "_produktionsblatt.png");
    const size = Number(sizeRange.value);
    const borderSettings = getBorderSettings();
    const border = borderSettings.cm.toFixed(2).replace(".", ",");
    const borderScale = borderSettings.displayValue.toFixed(1).replace(".", ",");
    const borderPercent = borderSettings.percent.toFixed(1).replace(".", ",");
    const qty = qtyInput.value;
    alert(`Bestellung vorbereitet. Das Produktionsblatt wurde automatisch erzeugt.

Ausführung: ${TYPE_LABELS[selectedType]}
Motivseiten: ${SIDE_LABELS[selectedSides]}
Größe: ${size} × ${size} cm
Randabstand: ${borderScale} · ${borderPercent} % · ${border} cm
Füllung: ${TEXTURES[selectedFabric].label}
Aufhängung: ${HANGER_LABELS[selectedHanger]}
Einzelpreis: ${unitPrice()} €
Produktpreis: ${currentPrice()} €
Versand: 4,99 €
Menge: ${qty}
Gesamt: ${currentTotal()} €`);
  } catch (e) {
    console.error(e);
    alert("Das Produktionsblatt konnte nicht erzeugt werden.");
  } finally {
    orderBtn.disabled = false;
    orderBtn.textContent = oldText;
  }
});

buildFabricGrid();
updateLabels();
setTimeout(fitPreviewToViewport, 80);
