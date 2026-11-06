const en={"promoVideoOver":"PROMOTIONAL VIDEO","promoVideoTitle":"Discover <span class=\"grad\">MEDORApro</span>","promoVideoDesc":"Watch our original promotional video.","promoOfferOver":"PROMOTIONAL OFFER","promoOfferTitle":"Free <span class=\"grad\">MEDORApro</span> licences","promoOfferDesc":"Offer announcement. Terms and registration dates will be published here after confirmation.","promoOfferNote":"Registrations are not currently open.","navFeatures": "Features", "navGallery": "Gallery", "navPrivacy": "Privacy", "navFamily": "Family", "navSoon": "Coming soon", "label": "PERSONAL HEALTH RECORD · IN DEVELOPMENT", "headline1": "Your health.", "headline2": "Your data.", "headline3": "Your control.", "heroText": "Health conditions, reports, therapies, measurements and appointments — organized in one personal health record.", "discover": "Explore MEDORApro ↗", "viewGallery": "View visuals", "beta": "MEDORApro 1.2.52 TEST · Development and security testing ongoing · Not for public use yet.", "heroTag": "Promotional concept · illustrative screens", "s1": "Personal record", "s2": "Local and private", "s3": "Export by choice", "s4": "Two languages", "overFeatures": "FEATURES", "featuresTitle": "One app. <span class=\"grad\">What matters.</span>", "featuresText": "Designed to organize personal health information clearly, without unnecessary complexity.", "f1": "Medical documents", "f1d": "Reports, referrals and records organized by categories, folders and subfolders.", "f2": "Measurements and conditions", "f2d": "Track measurements, blood pressure, glucose, weight and health conditions.", "f3": "Therapy and reminders", "f3d": "Medication logs and local reminders for therapy times.", "f4": "Medical calendar", "f4d": "Visits, follow-ups and planned appointments in one place.", "f5": "PDF and backups", "f5d": "Export reports and create separate password-encrypted backups.", "f6": "Doctors and contacts", "f6d": "Your doctor, specialists, pharmacy and emergency phone numbers.", "overGallery": "VISUAL OVERVIEW", "galleryTitle": "Discover <span class=\"grad\">MEDORApro</span>", "galleryDesc": "Promotional illustrations based on features in the test app. Individual screen designs and sample data may differ from the real version.", "g1": "Doctors and contacts", "g1d": "Doctor · pharmacy · emergency", "g2": "Documents and export", "g2d": "Archive · PDF · ZIP · backups", "g3": "Measurements and conditions", "g3d": "Glucose · blood pressure · weight", "g4": "Therapy and calendar", "g4d": "Reminders · visits · follow-ups", "overPrivacy": "YOUR DATA, YOUR DECISION", "privacyTitle": "Privacy is not an add-on. <span class=\"grad\">It is foundational.</span>", "privacyText": "MEDORApro is designed as a local personal health record without mandatory cloud storage. You decide when to export or share information.", "privacyCaption": "Local storage. Export control. Privacy by design.", "familyOver": "LOOKING AHEAD", "familyBadge": "Future product concept · not available", "familyText": "A separate family health record concept. The illustration represents a vision for future development, not an available functional application.", "launchTag": "COMING SOON", "launchTitle": "The beginning of <span class=\"grad\">a new chapter.</span>", "launchBody": "MEDORApro Personal is currently in development and testing. Google Play availability will be announced here after reviews are completed.", "playText": "Google Play · In preparation", "disclaimer": "MEDORApro does not replace medical professionals, diagnosis or emergency services.", "footerCaption": "Personal health record.", "credit": "Idea and concept: Miljenko Pušić"};const original={};document.querySelectorAll('[data-t]').forEach(el=>{original[el.dataset.t]=el.innerHTML});let lang='hr';document.getElementById('language').addEventListener('click',()=>{lang=lang==='hr'?'en':'hr';document.documentElement.lang=lang;document.querySelectorAll('[data-t]').forEach(el=>{const key=el.dataset.t;el.innerHTML=lang==='hr'?original[key]:(en[key]??original[key])});document.getElementById('language').textContent=lang==='hr'?'EN':'HR';document.title=lang==='hr'?'MEDORApro — Osobni zdravstveni karton':'MEDORApro — Personal health record'});document.getElementById('year').textContent=new Date().getFullYear();
 ;(()=>{
const viewer=document.getElementById('imageViewer');
if(!viewer)return;
const photo=document.getElementById('viewerImage');
const title=document.getElementById('viewerTitle');
const closeButton=document.getElementById('viewerClose');
const note=document.getElementById('viewerNote');
const items=[...document.querySelectorAll('[data-full-image]')];
let previousFocus=null,token=0;
const images=new Map();
function preload(src){
  if(!images.has(src)){
    const image=new Image();
    const ready=new Promise(resolve=>{
      image.onload=()=>resolve(true);
      image.onerror=()=>resolve(false);
    });
    image.src=src;
    images.set(src,ready.then(async ok=>{
      if(ok&&image.decode){try{await image.decode()}catch(e){}}
      return ok;
    }));
  }
  return images.get(src);
}
// Load the first image right away, then the others in the background.
const sources=[...new Set(items.map(x=>x.getAttribute('data-full-image')).filter(Boolean))];
if(sources.length){preload(sources[0]);setTimeout(()=>sources.slice(1).forEach(preload),200)}
function close(){
  token++;
  if(viewer.hidden)return;
  viewer.hidden=true;
  viewer.setAttribute('aria-hidden','true');
  document.body.classList.remove('viewer-open');
  photo.removeAttribute('src');
  if(previousFocus&&previousFocus.focus)previousFocus.focus();
}
async function open(item){
  const current=++token;
  previousFocus=document.activeElement;
  const src=item.getAttribute('data-full-image');
  // Keep the page visible until the image is fully loaded and decoded.
  if(!(await preload(src))||current!==token)return;
  let heading=item.querySelector('h3');
  title.textContent=heading?heading.textContent.trim():(document.documentElement.lang==='en'?'MEDORApro image':'MEDORApro prikaz');
  photo.alt=title.textContent;
  note.textContent=document.documentElement.lang==='en'?'Promotional illustration · example data':'Promotivna ilustracija · demonstracijski podaci';
  photo.src=src;
  viewer.hidden=false;
  viewer.setAttribute('aria-hidden','false');
  document.body.classList.add('viewer-open');
  closeButton.focus({preventScroll:true});
}
items.forEach(item=>{
 item.addEventListener('pointerdown',()=>preload(item.getAttribute('data-full-image')),{passive:true});
 item.addEventListener('click',()=>open(item));
 item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(item)}});
});
closeButton.addEventListener('click',close);
viewer.querySelector('[data-close-viewer]').addEventListener('click',close);
document.addEventListener('keydown',e=>{if(viewer.hidden)return;if(e.key==='Escape')close();else if(e.key==='Tab'){e.preventDefault();closeButton.focus()}});
})();

document.querySelectorAll(".medora-new-gallery img").forEach(img => {
 img.addEventListener("click", () => {
   const viewer = document.getElementById("imageViewer");
   const viewerImage = document.getElementById("viewerImage");
   const viewerTitle = document.getElementById("viewerTitle");
   if (!viewer || !viewerImage) return;
   viewerImage.src = img.src;
   viewerImage.alt = img.alt;
   if (viewerTitle) viewerTitle.textContent = img.alt;
   viewer.hidden = false;
   viewer.setAttribute("aria-hidden", "false");
   document.body.style.overflow = "hidden";
 });
});
