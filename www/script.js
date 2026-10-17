/* =========================================================
   መሃናይም ቅኔ — CHOIR WEBSITE JAVASCRIPT
   =========================================================

   This file controls:

   ✓ Dark / Light mode
   ✓ Mobile navigation
   ✓ Scroll animations
   ✓ Active navigation links
   ✓ Songs
   ✓ Audio player
   ✓ Lyrics
   ✓ Song search
   ✓ Song categories
   ✓ Members
   ✓ Photo gallery
   ✓ Gallery filters
   ✓ Gallery lightbox
   ✓ Events
   ✓ Contact form demo

   ========================================================= */

/* =========================================================
   APP LOADER
   ========================================================= */

const appLoader = document.getElementById("appLoader");

window.addEventListener("load", () => {
    setTimeout(() => {
        if (appLoader) {
            appLoader.classList.add("hidden");
        }
    }, 700);
});

/* =========================================================
   1. WEBSITE SETTINGS
   ========================================================= */

const SITE_SETTINGS = {
    choirName: "መሃናይም ቅኔ መዘምራን"
};


/* =========================================================
   2. SONG DATA
   =========================================================

   IMPORTANT:

   To add a real song later, copy one of these objects and
   change:

   titleAm
   titleEn
   category
   audio
   cover
   year
   lyrics

   Example:

   {
       titleAm: "የእኔ መድኃኒት",
       titleEn: "My Savior",
       category: "ታላቅነቱ",
       audio: "assets/audio/my-savior.mp3",
       cover: "assets/photos/mehanayim-1.webp",
       year: "2026",
       lyrics: `የመዝሙሩ ግጥም...`
   }

   ========================================================= */

const songs = [

    {
        id: 5,
        titleAm: "ክብር ክብር",
        titleEn: "Mehanayim qine",
        category: "ታላቅነቱ",
        audio: "assets/audio/ታላቅነቱ/ክብር ክብር.opus",
        cover: "assets/photos/mehanayim-36.webp",
        year: "2018",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

1 እግዚአብሔር ታላቅ ነው ክብሩ ከፍ ከፍ ያለ
በሰማይ በምድር ዝናው ያየለ
ስሙም ኤልሻዳይ እግዚአብሔር ሁሉን ቻይ
ሳያረጅ ሳይደክም ዘላለም የሚኖር

አዝ:- ክብር ምስጋና ይሁን ለሆነው ገናና
አዶናይ ኤሎሄም ዛሬም እንደሱ የለም፣
ይክበር ዘላለም

2 ጌታችን ታላቅ ነው ግርማውም አስፈሪ
ዘመን ሳይለውጠው ለዘለዓለም ነዋሪ
ሁን ሲል ሚሆንለት ግዑዝ ሚታዘዘው
በሰማይ በምድር እንደሱ ያለ ማንነው

አዝ:-...

3 ሃያል አምላክ ስሙ እግዚአብሔር
ዘላለም የከበረ በሰማይ በምድር
አዶናይ እሱ ኤልሻዳይ
ኤሎሄም ይክበር ለዘለዓለም

አዝ:-....`
    },

    {
        id: 2,
        titleAm: "ትልቅ ነህ",
        titleEn: "Mehanayim qine",
        category: "ታላቅነቱ",
        audio: "assets/audio/ታላቅነቱ/ትልቅ ነህ.opus",
        cover: "assets/photos/mehanayim-205.webp",
        year: "2018",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

የእግዚአብሔርን ጥልቅ ሚስጥር ማን ያውቃል 
ታላቅነቱ ከምድር ይሰፋል 
ከባህር ይረዝማል 
ድንቅ እፅብ ሃያል እርሱም ማን ይእመስላል
 
ትልቅ ነህ      ትልቅ 
 ማንም የማደርስ ትልቅ 
   ተከታይ የሌለህ ትልቅ 
      ከሁሉ የበላይ  ትልቅ 
  
እርሱ ያበጃቸው  በእጁ ላይ ያሉ 
የሰማይ ክዋክብት በዚ ልክ ከፍ ካሉ 
ለዚ ጠቢብ አምላክ ምን ይመጥነዋል 
ከእኛ ጋር ሁሉም ትልቅ ነህ ይለዋል

ትልቅ ነህ.....

የእጅ ስራዎች ድንቅ ፍጥረት ናቸው
የሰው ልጅ በአቅሙ መርምሮ አይደርሳቸው
ምጡቅ ነው ብቻውን ማን ልርዳህ ብሎ  ያውቃል
ክብር ታላቅ መባል ለርሱ ያንስበታል 

ትልቅ ነህ.......

የምድር መሰረት አዋቂ
ለባህር ልብስን ያረገ
ብርሃንን  ስፍራ ያስያዘ
ለዝናብ መውረጃን ያበጀ

እግ/ር ትልቅ ነው ማንም የማይደርሰው
ሁላችን በአንድ ድምፅ ትልቅ ነህ እንበለው(2*)

ትልቅ ነህ...`
    },


    {
        id: 3,
        titleAm: "አቤቱ ጌታችን",
        titleEn: "Mehanayim qine",
        category: "ታላቅነቱ",
        audio: "assets/audio/ታላቅነቱ/Mehanayim abetu getachin.mp3",
        cover: "assets/photos/mehanayim-200.webp",
        year: "2018",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

አዝ፦ አቤቱ ጌታችን፤ ስምህ ከአማልክት በላይ ነዉ
         ምስጋናህ በሰማያት ላይ፤ ከፍከፍ ያለ ነዉ
         አቤቱ ንጉሳችን፤ ሃይልህ ከሃያላን በላይ ነዉ
         ምስጋናህ በሰማያት ላይ፤ ከፍከፍ ያለ ነዉ

1.በግርማህ ዙፋንህ ላይ ልቀህ የከበረከዉ
    አምሳያ የሌለህ ዝናህ የገነነዉ
    አዎ ለአንተ ይሁን ክብር ምስጋና
    በሁሉ የተፈራህ ድንቅ አምላክ ነህና
አዝ፦........... 

2.ዛሬም ሃያል ነህ ክንድህ አልደከመም
    የህያዋን አምላክ ከቶ አታረጅም
    ከቶ የማትዝል ዘላለም ነዋሪ
    እግዚአብሄር አንተ ነህ የአለማት መሪ
አዝ፦....

3. በምስጋና ፊትህ እንቀርባለን
    ቅዱስ አምላክ ሆይ ክብርህን እያየን
    በዝማሬ ወደ መቅደስህ
    ገናና ለሆንከዉ ለእስራኤል ቅዱስ`
    },

    {
        id: 4,
        titleAm: "የግብፅዊያን ፈረስ ከባህሩ ቀሩ",
        titleEn: "Mehanayim qine",
        category: "ታላቅነቱ",
        audio: "assets/audio/ታላቅነቱ/yegibtsawiyan feres.opus",
        cover: "assets/photos/mehanayim-28.webp",
        year: "2018",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

የግብፅዊያን ፈረስ ከባህሩ ቀሩ 
ቀላያት በላያቸው ተከደኑ 
በክብሩ ብዛት የተነሱበት ወዲያ ማዶ ቀሩ
ልጆቹ በየብስ በድል ተሻገሩ 

እደ እግዚአብሔር ያለ የለም 
ዘለዓለም አይገኝም 
አርጎልናል ድንቅ ተአምር
ለዚ ጌታ...ምስጋናውን አምልኮውን እናበዛለን እንጨምራለን

በአፍጫው አስትንፍስ ውሆች ተከመሩ 
ቀኙንም ዘረጋ ምድር ዋጠቻቸው 
በቸርነቱ ህዝብን መራ
በሀይሉ ወደ መቅደሱ ማደሪያአገባ

እደ እግዚአብሔር .... 


ክብርህ አልቀነሰም ክድህም አልዛለም
ዛሬም በኛ ዘመን ትመለካለህ
እካ ምስጋናህን እኛም አለን ብዙ
ያሳለፍከን ወጀብ ከእስራኤል መች አንሶ

ዘፀዓት 15`
    },

    {
        id: 1,
        titleAm: "እንግባ ወደ አደባባዮቹ",
        titleEn: "Mehanayim qine",
        category: "የምስጋና",
        audio: "assets/audio/የምስጋና/Engba.opus",
        cover: "assets/photos/mehanayim-103.webp",
        year: "2015",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

የእውነተኛውን የመዝሙር ግጥም
እዚህ ላይ ይጻፉ።`
    },

    {
        id: 6,
        titleAm: "ይመጣል እንደሄደው ይመጣል",
        titleEn: "Mehanayim qine",
        category: "ማራናታ",
        audio: "assets/audio/ማራናታ/Yimetal.mp3",
        cover: "assets/photos/mehanayim-205.webp",
        year: "2026",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

ይመጣል እንደሄደው ይመጣል
ይመጣል እዛው አይቀርም እርሱ ይመለሳል(2×)
የቅድሳንን መንጋ ሰብስቦ ይሄዳል
የዘመናት እንባ ከአይናችን ያብሳል(2×)


የጊዜያት መርዘም ተስፍ ቢያስቆርጠን 
ችግር ተደራርቦ የለም ቢያስብለን
ተስፍችን እርሱ ነው ሌላ ተስፍ የለን 
አይቀርም ይመጣል በአይናችን እናያለን(2×)

ይመጣል እንደሄደው.......

ቅድስ ቅድስ እያልን በፊቱ ልንዘምር 
ደስታችን ሞልቶ በእጥፍ ሊጨምር
የናፈቅነውን እርሱን ፊት ለፊት ልናው
አይቀርም ይመጣል ቀኑ ቅርብ ነው(2×)

ይመጣል እንደሄደው ........


የክብርን አክሊል በራሱ ጭኖ
በክብር ደመና በአለም ፊት ገኖ 
ልናየው ጎግተናል ልናየው ናፍቀናል 
ሁላችን በአንድ ድምፅ ማራናታ ብለናል(2×)።`
    },

    {
        id: 7,
        titleAm: "ይመጣል ጌታማ",
        titleEn: "Mehanayim qine",
        category: "ማራናታ",
        audio: "assets/audio/ማራናታ/Voice 096.mp3",
        cover: "assets/photos/mehanayim-4.webp",
        year: "2026",
        lyrics: `ይህ የመዝሙሩ ግጥም ነው።

ይመጣል እንደሄደው ይመጣል
ይመጣል እዛው አይቀርም እርሱ ይመለሳል(2×)
የቅድሳንን መንጋ ሰብስቦ ይሄዳል
የዘመናት እንባ ከአይናችን ያብሳል(2×)


የጊዜያት መርዘም ተስፍ ቢያስቆርጠን 
ችግር ተደራርቦ የለም ቢያስብለን
ተስፍችን እርሱ ነው ሌላ ተስፍ የለን 
አይቀርም ይመጣል በአይናችን እናያለን(2×)

ይመጣል እንደሄደው.......

ቅድስ ቅድስ እያልን በፊቱ ልንዘምር 
ደስታችን ሞልቶ በእጥፍ ሊጨምር
የናፈቅነውን እርሱን ፊት ለፊት ልናው
አይቀርም ይመጣል ቀኑ ቅርብ ነው(2×)

ይመጣል እንደሄደው ........


የክብርን አክሊል በራሱ ጭኖ
በክብር ደመና በአለም ፊት ገኖ 
ልናየው ጎግተናል ልናየው ናፍቀናል 
ሁላችን በአንድ ድምፅ ማራናታ ብለናል(2×)።`
    },

    {
        id: 8,
        titleAm: "ታላቅ እልልታ",
        titleEn: "Mehanayim qine",
        category: "የበዓል",
        audio: "assets/audio/ታላቅ እልልታ.mp3",
        cover: "assets/photos/mehanayim-145.webp",
        year: "2026",
        lyrics: `የበዓል መዝሙር ናሙና ግጥም።

የእውነተኛውን የመዝሙር ግጥም
እዚህ ያስገቡ።`
    }

];

/* =========================================================
   4. GALLERY DATA
   ========================================================= */

const galleryAlbums = {

    worship: {
        title: "የአምልኮ ጊዜ",
        photos: [
            "assets/photos/mehanayim-2.webp",
            "assets/photos/mehanayim-3.webp",
            "assets/photos/mehanayim-4.webp",
            "assets/photos/mehanayim-5.webp",
            "assets/photos/mehanayim-6.webp",
            "assets/photos/mehanayim-7.webp",
            "assets/photos/mehanayim-8.webp",
            "assets/photos/mehanayim-9.webp",
            "assets/photos/mehanayim-10.webp",
            "assets/photos/mehanayim-11.webp",
            "assets/photos/mehanayim-12.webp",
            "assets/photos/mehanayim-13.webp",
            "assets/photos/mehanayim-14.webp",
            "assets/photos/mehanayim-15.webp",
            "assets/photos/mehanayim-16.webp",
            "assets/photos/mehanayim-17.webp",
            "assets/photos/mehanayim-18.webp",
            "assets/photos/mehanayim-19.webp",
            "assets/photos/mehanayim-20.webp",
            "assets/photos/mehanayim-21.webp",
            "assets/photos/mehanayim-22.webp",
            "assets/photos/mehanayim-23.webp",
            "assets/photos/mehanayim-24.webp",
            "assets/photos/mehanayim-25.webp",
            "assets/photos/mehanayim-26.webp",
            "assets/photos/mehanayim-27.webp",
            "assets/photos/mehanayim-28.webp",
            "assets/photos/mehanayim-29.webp",
            "assets/photos/mehanayim-30.webp",
            "assets/photos/mehanayim-31.webp",
            "assets/photos/mehanayim-32.webp",
            "assets/photos/mehanayim-33.webp",
            "assets/photos/mehanayim-34.webp",
            "assets/photos/mehanayim-35.webp",
            "assets/photos/mehanayim-36.webp",
            "assets/photos/mehanayim-37.webp",
            "assets/photos/mehanayim-38.webp",
            "assets/photos/mehanayim-39.webp",
            "assets/photos/mehanayim-40.webp",
            "assets/photos/mehanayim-90.webp",
            "assets/photos/mehanayim-91.webp",
            "assets/photos/mehanayim-102.webp",
            "assets/photos/mehanayim-103.webp",
            "assets/photos/mehanayim-107.webp",
            "assets/photos/mehanayim-108.webp",
            "assets/photos/mehanayim-109.webp",
            "assets/photos/mehanayim-110.webp",
            "assets/photos/mehanayim-117.webp",
            "assets/photos/mehanayim-144.webp",
            "assets/photos/mehanayim-145.webp",
            "assets/photos/mehanayim-146.webp",
            "assets/photos/mehanayim-147.webp",
            "assets/photos/mehanayim-148.webp",


        ]
    },

choir: {
    title: "የመዘምራን ሕይወት",
        photos: [

            "assets/photos/mehanayim-41.webp",
            "assets/photos/mehanayim-42.webp",
            "assets/photos/mehanayim-43.webp",
            "assets/photos/mehanayim-44.webp",
            "assets/photos/mehanayim-45.webp",
            "assets/photos/mehanayim-46.webp",
            "assets/photos/mehanayim-47.webp",
            "assets/photos/mehanayim-48.webp",
            "assets/photos/mehanayim-49.webp",
            "assets/photos/mehanayim-50.webp",
            "assets/photos/mehanayim-51.webp",
            "assets/photos/mehanayim-52.webp",
            "assets/photos/mehanayim-53.webp",
            "assets/photos/mehanayim-54.webp",
            "assets/photos/mehanayim-55.webp",
            "assets/photos/mehanayim-56.webp",
            "assets/photos/mehanayim-57.webp",
            "assets/photos/mehanayim-58.webp",
            "assets/photos/mehanayim-59.webp",
            "assets/photos/mehanayim-60.webp",
            "assets/photos/mehanayim-61.webp",
            "assets/photos/mehanayim-62.webp",
            "assets/photos/mehanayim-63.webp",
            "assets/photos/mehanayim-64.webp",
            "assets/photos/mehanayim-65.webp",
            "assets/photos/mehanayim-66.webp",
            "assets/photos/mehanayim-67.webp",        
            "assets/photos/mehanayim-68.webp",
            "assets/photos/mehanayim-69.webp",
            "assets/photos/mehanayim-70.webp",
            "assets/photos/mehanayim-71.webp",
            "assets/photos/mehanayim-72.webp",
            "assets/photos/mehanayim-73.webp",
            "assets/photos/mehanayim-74.webp",
            "assets/photos/mehanayim-75.webp",
            "assets/photos/mehanayim-76.webp",
            "assets/photos/mehanayim-77.webp",
            "assets/photos/mehanayim-78.webp",
            "assets/photos/mehanayim-79.webp",
            "assets/photos/mehanayim-68.webp",
            "assets/photos/mehanayim-80.webp",
            "assets/photos/mehanayim-81.webp",
            "assets/photos/mehanayim-82.webp",
            "assets/photos/mehanayim-83.webp",
            "assets/photos/mehanayim-84.webp",
            "assets/photos/mehanayim-85.webp",
            "assets/photos/mehanayim-86.webp",
            "assets/photos/mehanayim-87.webp",
            "assets/photos/mehanayim-88.webp",
            "assets/photos/mehanayim-89.webp",
            "assets/photos/mehanayim-92.webp",
            "assets/photos/mehanayim-93.webp",
            "assets/photos/mehanayim-94.webp",
            "assets/photos/mehanayim-95.webp",
            "assets/photos/mehanayim-96.webp",
            "assets/photos/mehanayim-97.webp",
            "assets/photos/mehanayim-98.webp",
            "assets/photos/mehanayim-99.webp",
            "assets/photos/mehanayim-104.webp",
            "assets/photos/mehanayim-105.webp",
            "assets/photos/mehanayim-106.webp",
            "assets/photos/mehanayim-111.webp",
            "assets/photos/mehanayim-112.webp",
            "assets/photos/mehanayim-112.webp",
            "assets/photos/mehanayim-113.webp",
            
        ]
    },


};

const galleryAlbumsElements =
    document.querySelectorAll(".gallery-album");

const galleryViewer =
    document.getElementById("galleryViewer");

const galleryViewerImage =
    document.getElementById("galleryViewerImage");

const galleryViewerTitle =
    document.getElementById("galleryViewerTitle");

const galleryViewerCounter =
    document.getElementById("galleryViewerCounter");

const galleryViewerPrev =
    document.getElementById("galleryViewerPrev");

const galleryViewerNext =
    document.getElementById("galleryViewerNext");

const galleryViewerClose =
    document.getElementById("galleryViewerClose");


const galleryViewerStage =
    document.getElementById("galleryViewerStage");

const galleryViewerImageWrap =
    document.getElementById("galleryViewerImageWrap");

const galleryViewerLoading =
    document.getElementById("galleryViewerLoading");

const galleryViewerZoomOut =
    document.getElementById("galleryViewerZoomOut");

const galleryViewerZoomIn =
    document.getElementById("galleryViewerZoomIn");

const galleryViewerZoomReset =
    document.getElementById("galleryViewerZoomReset");

const galleryViewerRotateLeft =
    document.getElementById("galleryViewerRotateLeft");

const galleryViewerRotateRight =
    document.getElementById("galleryViewerRotateRight");

const galleryViewerSlideshow =
    document.getElementById("galleryViewerSlideshow");

const galleryViewerReset =
    document.getElementById("galleryViewerReset");

const galleryViewerThumbnails =
    document.getElementById("galleryViewerThumbnails");


/* =========================================================
   4. GALLERY PHOTO VIEWER
   Touch-first / Android-friendly advanced viewer
   ========================================================= */

let currentGalleryAlbum = null;
let currentGalleryIndex = 0;

let galleryZoom = 1;
let galleryRotation = 0;
let galleryPanX = 0;
let galleryPanY = 0;

let galleryControlsTimer = null;
let gallerySlideshowTimer = null;

let galleryIsDragging = false;
let galleryDragStartX = 0;
let galleryDragStartY = 0;
let galleryDragStartPanX = 0;
let galleryDragStartPanY = 0;

let galleryTouchStartX = 0;
let galleryTouchStartY = 0;
let galleryTouchStartTime = 0;

let galleryPinchStartDistance = 0;
let galleryPinchStartZoom = 1;

let galleryLastTapTime = 0;


/* =========================================================
   GALLERY VIEWER HELPERS
   ========================================================= */

function clampGalleryZoom(value) {
    return Math.max(1, Math.min(5, value));
}


function getGalleryTouchDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;

    return Math.sqrt((dx * dx) + (dy * dy));
}


function applyGalleryTransform() {

    if (!galleryViewerImage) {
        return;
    }

    galleryViewerImage.style.transform =
        `translate3d(${galleryPanX}px, ${galleryPanY}px, 0) ` +
        `scale(${galleryZoom}) ` +
        `rotate(${galleryRotation}deg)`;

    /*
     * Update the visible zoom percentage.
     * galleryZoom = 1 means 100%.
     * galleryZoom = 2 means 200%, etc.
     */

    if (galleryViewerZoomReset) {
        galleryViewerZoomReset.textContent =
            `${Math.round(galleryZoom * 100)}%`;
    }

    if (galleryViewerStage) {
        galleryViewerStage.classList.toggle(
            "zoomed",
            galleryZoom > 1
        );
    }
}


function resetGalleryTransform() {

    galleryZoom = 1;
    galleryRotation = 0;
    galleryPanX = 0;
    galleryPanY = 0;

    applyGalleryTransform();
}


function setGalleryZoom(newZoom) {

    const oldZoom = galleryZoom;

    galleryZoom = clampGalleryZoom(newZoom);

    /*
     * When returning to 1x, remove any leftover pan.
     * This prevents the next image from appearing off-screen.
     */
    if (galleryZoom === 1) {
        galleryPanX = 0;
        galleryPanY = 0;
    } else if (oldZoom === 1 && galleryZoom > 1) {
        /*
         * Start zoomed images from the center.
         */
        galleryPanX = 0;
        galleryPanY = 0;
    }

    applyGalleryTransform();
}


function showGalleryControls() {

    if (!galleryViewer) {
        return;
    }

    galleryViewer.classList.remove("controls-hidden");

    clearTimeout(galleryControlsTimer);

    /*
     * Keep controls visible while zoomed.
     * This makes Android touch interaction easier.
     */
    if (galleryZoom > 1) {
        return;
    }

    galleryControlsTimer = setTimeout(() => {

        if (
            galleryViewer.classList.contains("active") &&
            galleryZoom <= 1
        ) {
            galleryViewer.classList.add("controls-hidden");
        }

    }, 3500);
}


function toggleGalleryControls() {

    if (!galleryViewer) {
        return;
    }

    if (
        galleryViewer.classList.contains("controls-hidden")
    ) {
        showGalleryControls();
    } else {

        clearTimeout(galleryControlsTimer);

        galleryViewer.classList.add("controls-hidden");
    }
}


/* =========================================================
   GALLERY THUMBNAILS
   ========================================================= */

function buildGalleryThumbnails() {

    if (!galleryViewerThumbnails) {
        return;
    }

    galleryViewerThumbnails.innerHTML = "";

    if (!currentGalleryAlbum) {
        return;
    }

    currentGalleryAlbum.photos.forEach((photo, index) => {

        const thumbnail = document.createElement("button");

        thumbnail.type = "button";
        thumbnail.className = "gallery-viewer-thumbnail";

        thumbnail.setAttribute(
            "aria-label",
            `Photo ${index + 1}`
        );

        const image = document.createElement("img");

        image.src = photo;
        image.alt = "";

        image.loading = "lazy";
        image.draggable = false;

        thumbnail.appendChild(image);

        thumbnail.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            currentGalleryIndex = index;

            updateGalleryViewer();
            showGalleryControls();
        });

        galleryViewerThumbnails.appendChild(thumbnail);
    });
}


function updateGalleryThumbnails() {

    if (!galleryViewerThumbnails) {
        return;
    }

    const thumbnails =
        galleryViewerThumbnails.querySelectorAll(
            ".gallery-viewer-thumbnail"
        );

    thumbnails.forEach((thumbnail, index) => {

        thumbnail.classList.toggle(
            "active",
            index === currentGalleryIndex
        );

        if (index === currentGalleryIndex) {

            thumbnail.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

        }

    });
}


/* =========================================================
   OPEN GALLERY
   ========================================================= */

function openGalleryAlbum(category) {

    const album = galleryAlbums[category];

    if (!album || !album.photos || !album.photos.length) {
        return;
    }

    currentGalleryAlbum = album;
    currentGalleryIndex = 0;

    resetGalleryTransform();

    buildGalleryThumbnails();
    updateGalleryViewer();

    galleryViewer.classList.add("active");

    galleryViewer.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "gallery-viewer-open"
    );

    showGalleryControls();

    /*
     * Put a history entry behind the viewer.
     *
     * This is important for Android WebView:
     * pressing Back closes the viewer first.
     */
    if (
        !history.state ||
        history.state.galleryViewer !== true
    ) {

        history.pushState(
            {
                ...(history.state || {}),
                galleryViewer: true
            },
            "",
            window.location.href
        );
    }
}


/* =========================================================
   UPDATE CURRENT PHOTO
   ========================================================= */

function updateGalleryViewer() {

    if (!currentGalleryAlbum) {
        return;
    }

    const photos =
        currentGalleryAlbum.photos;

    if (!photos.length) {
        return;
    }

    const photo =
        photos[currentGalleryIndex];

    /*
     * Reset transform before changing images.
     * This prevents the new image inheriting the old
     * image's zoom/rotation/pan.
     */
    resetGalleryTransform();

    if (galleryViewerLoading) {
        galleryViewerLoading.hidden = false;
    }

    galleryViewerImage.classList.add(
        "gallery-image-loading"
    );

    galleryViewerImage.onload = () => {

        if (galleryViewerLoading) {
            galleryViewerLoading.hidden = true;
        }

        galleryViewerImage.classList.remove(
            "gallery-image-loading"
        );

        applyGalleryTransform();
    };

    galleryViewerImage.onerror = () => {

        if (galleryViewerLoading) {
            galleryViewerLoading.hidden = true;
        }

        galleryViewerImage.classList.remove(
            "gallery-image-loading"
        );
    };

    /*
     * Set metadata before source so the UI updates
     * immediately.
     */
    galleryViewerImage.alt =
        currentGalleryAlbum.title;

    galleryViewerTitle.textContent =
        currentGalleryAlbum.title;

    galleryViewerCounter.textContent =
        `${currentGalleryIndex + 1} / ${photos.length}`;

    galleryViewerImage.src = photo;

    updateGalleryThumbnails();

    /*
     * Preload the next image for smoother swiping.
     */
    const nextIndex =
        (currentGalleryIndex + 1) %
        photos.length;

    if (photos[nextIndex]) {

        const preload =
            new Image();

        preload.src =
            photos[nextIndex];
    }

    /*
     * Preload previous image as well.
     */
    const previousIndex =
        (
            currentGalleryIndex - 1 +
            photos.length
        ) % photos.length;

    if (photos[previousIndex]) {

        const preload =
            new Image();

        preload.src =
            photos[previousIndex];
    }
}


/* =========================================================
   CLOSE GALLERY
   ========================================================= */

function stopGallerySlideshow() {

    if (gallerySlideshowTimer) {

        clearInterval(
            gallerySlideshowTimer
        );

        gallerySlideshowTimer = null;
    }

    if (galleryViewerSlideshow) {

        galleryViewerSlideshow.classList.remove(
            "active"
        );

        galleryViewerSlideshow.setAttribute(
            "aria-label",
            "Start slideshow"
        );
    }
}


function closeGalleryViewer(fromHistory = false) {

    stopGallerySlideshow();

    clearTimeout(galleryControlsTimer);

    galleryViewer.classList.remove("active");

    galleryViewer.classList.remove(
        "controls-hidden"
    );

    galleryViewer.classList.remove(
        "zoomed"
    );

    galleryViewer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "gallery-viewer-open"
    );

    resetGalleryTransform();

    currentGalleryAlbum = null;
    currentGalleryIndex = 0;

    if (galleryViewerThumbnails) {
        galleryViewerThumbnails.innerHTML = "";
    }

    /*
     * If the close button was pressed, remove the
     * history state. If Android/browser Back caused
     * the close, don't call history.back() again.
     */
    if (
        !fromHistory &&
        history.state &&
        history.state.galleryViewer === true
    ) {

        history.back();
    }
}


/* =========================================================
   ANDROID / BROWSER BACK
   ========================================================= */

window.addEventListener("popstate", () => {

    if (
        galleryViewer &&
        galleryViewer.classList.contains("active")
    ) {

        closeGalleryViewer(true);
    }

});


/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

function nextGalleryPhoto() {

    if (
        !currentGalleryAlbum ||
        !currentGalleryAlbum.photos.length
    ) {
        return;
    }

    currentGalleryIndex++;

    if (
        currentGalleryIndex >=
        currentGalleryAlbum.photos.length
    ) {

        currentGalleryIndex = 0;
    }

    updateGalleryViewer();
}


function previousGalleryPhoto() {

    if (
        !currentGalleryAlbum ||
        !currentGalleryAlbum.photos.length
    ) {
        return;
    }

    currentGalleryIndex--;

    if (currentGalleryIndex < 0) {

        currentGalleryIndex =
            currentGalleryAlbum.photos.length - 1;
    }

    updateGalleryViewer();
}


/* =========================================================
   ZOOM CONTROLS
   ========================================================= */

function zoomGalleryIn() {

    setGalleryZoom(
        galleryZoom + 0.5
    );

    showGalleryControls();
}


function zoomGalleryOut() {

    setGalleryZoom(
        galleryZoom - 0.5
    );

    showGalleryControls();
}


function resetGalleryZoom() {

    galleryZoom = 1;
    galleryPanX = 0;
    galleryPanY = 0;

    applyGalleryTransform();

    showGalleryControls();
}


/* =========================================================
   ROTATION
   ========================================================= */

function rotateGalleryLeft() {

    galleryRotation -= 90;

    applyGalleryTransform();
    showGalleryControls();
}


function rotateGalleryRight() {

    galleryRotation += 90;

    applyGalleryTransform();
    showGalleryControls();
}


/* =========================================================
   DOWNLOAD
   ========================================================= */

function downloadCurrentGalleryPhoto() {

    if (
        !currentGalleryAlbum ||
        !currentGalleryAlbum.photos.length
    ) {
        return;
    }

    const photo =
        currentGalleryAlbum.photos[
            currentGalleryIndex
        ];

    if (!photo) {
        return;
    }

    /*
     * Normal browser download.
     *
     * If the image server prevents cross-origin downloads,
     * Android/browser security may open the image instead.
     */
    const link =
        document.createElement("a");

    link.href = photo;

    link.download =
        `mehanayim-${currentGalleryIndex + 1}.webp`;

    link.target = "_blank";
    link.rel = "noopener";

    document.body.appendChild(link);

    link.click();

    link.remove();
}


/* =========================================================
   FULLSCREEN
   ========================================================= */

async function toggleGalleryFullscreen() {

    try {

        if (!document.fullscreenElement) {

            if (
                galleryViewer.requestFullscreen
            ) {

                await galleryViewer.requestFullscreen();

            } else if (
                galleryViewer.webkitRequestFullscreen
            ) {

                galleryViewer.webkitRequestFullscreen();
            }

        } else {

            if (
                document.exitFullscreen
            ) {

                await document.exitFullscreen();

            } else if (
                document.webkitExitFullscreen
            ) {

                document.webkitExitFullscreen();
            }
        }

    } catch (error) {

        /*
         * Fullscreen is not supported by every Android
         * WebView. Failing silently keeps the viewer working.
         */
        console.warn(
            "Gallery fullscreen is unavailable.",
            error
        );
    }

    showGalleryControls();
}


/* =========================================================
   SLIDESHOW
   ========================================================= */

function toggleGallerySlideshow() {

    if (
        !currentGalleryAlbum ||
        currentGalleryAlbum.photos.length < 2
    ) {
        return;
    }

    if (gallerySlideshowTimer) {

        stopGallerySlideshow();

        showGalleryControls();

        return;
    }

    gallerySlideshowTimer =
        setInterval(() => {

            if (
                !galleryViewer.classList.contains(
                    "active"
                )
            ) {

                stopGallerySlideshow();
                return;
            }

            nextGalleryPhoto();

        }, 3000);

    if (galleryViewerSlideshow) {

        galleryViewerSlideshow.classList.add(
            "active"
        );

        galleryViewerSlideshow.setAttribute(
            "aria-label",
            "Stop slideshow"
        );
    }

    showGalleryControls();
}


/* =========================================================
   RESET EVERYTHING
   ========================================================= */

function resetGalleryViewer() {

    stopGallerySlideshow();

    resetGalleryTransform();

    showGalleryControls();
}


/* =========================================================
   TOUCH / SWIPE / PINCH / PAN
   ========================================================= */

if (galleryViewerImageWrap) {

    galleryViewerImageWrap.addEventListener(
        "touchstart",
        event => {

            if (
                !galleryViewer.classList.contains(
                    "active"
                )
            ) {
                return;
            }

            showGalleryControls();

            /*
             * Two fingers = pinch zoom.
             */
            if (event.touches.length === 2) {

                galleryPinchStartDistance =
                    getGalleryTouchDistance(
                        event.touches[0],
                        event.touches[1]
                    );

                galleryPinchStartZoom =
                    galleryZoom;

                return;
            }

            if (event.touches.length !== 1) {
                return;
            }

            const touch =
                event.touches[0];

            galleryTouchStartX =
                touch.clientX;

            galleryTouchStartY =
                touch.clientY;

            galleryTouchStartTime =
                Date.now();

            /*
             * If already zoomed, one finger pans.
             * Otherwise one finger is used for swipe.
             */
            if (galleryZoom > 1) {

                galleryIsDragging = true;

                galleryDragStartX =
                    touch.clientX;

                galleryDragStartY =
                    touch.clientY;

                galleryDragStartPanX =
                    galleryPanX;

                galleryDragStartPanY =
                    galleryPanY;
            }

        },
        {
            passive: false
        }
    );


    galleryViewerImageWrap.addEventListener(
        "touchmove",
        event => {

            if (
                !galleryViewer.classList.contains(
                    "active"
                )
            ) {
                return;
            }

            /*
             * PINCH ZOOM
             */
            if (event.touches.length === 2) {

                event.preventDefault();

                const currentDistance =
                    getGalleryTouchDistance(
                        event.touches[0],
                        event.touches[1]
                    );

                if (
                    galleryPinchStartDistance > 0
                ) {

                    const scale =
                        currentDistance /
                        galleryPinchStartDistance;

                    setGalleryZoom(
                        galleryPinchStartZoom *
                        scale
                    );
                }

                return;
            }

            /*
             * ONE-FINGER PAN
             */
            if (
                event.touches.length === 1 &&
                galleryZoom > 1 &&
                galleryIsDragging
            ) {

                event.preventDefault();

                const touch =
                    event.touches[0];

                const deltaX =
                    touch.clientX -
                    galleryDragStartX;

                const deltaY =
                    touch.clientY -
                    galleryDragStartY;

                galleryPanX =
                    galleryDragStartPanX +
                    deltaX;

                galleryPanY =
                    galleryDragStartPanY +
                    deltaY;

                applyGalleryTransform();
            }

        },
        {
            passive: false
        }
    );


    galleryViewerImageWrap.addEventListener(
        "touchend",
        event => {

            if (
                !galleryViewer.classList.contains(
                    "active"
                )
            ) {
                return;
            }

            /*
             * After a pinch, don't interpret the gesture
             * as a swipe.
             */
            if (galleryPinchStartDistance > 0) {

                galleryPinchStartDistance = 0;

                return;
            }

            if (event.changedTouches.length !== 1) {
                return;
            }

            const touch =
                event.changedTouches[0];

            const endX =
                touch.clientX;

            const endY =
                touch.clientY;

            const deltaX =
                endX -
                galleryTouchStartX;

            const deltaY =
                endY -
                galleryTouchStartY;

            const elapsed =
                Date.now() -
                galleryTouchStartTime;

            const absX =
                Math.abs(deltaX);

            const absY =
                Math.abs(deltaY);

            /*
             * When zoomed, one finger is pan, not navigation.
             */
            if (galleryZoom > 1) {

                galleryIsDragging = false;

                /*
                 * A short vertical movement while zoomed
                 * is not allowed to accidentally close.
                 */
                return;
            }

            /*
             * SWIPE DOWN TO CLOSE
             */
            if (
                absY > 100 &&
                absY > absX &&
                deltaY > 0 &&
                elapsed < 800
            ) {

                closeGalleryViewer();

                return;
            }

            /*
             * SWIPE LEFT / RIGHT
             */
            if (
                absX > 60 &&
                absX > absY &&
                elapsed < 800
            ) {

                if (deltaX < 0) {
                    nextGalleryPhoto();
                } else {
                    previousGalleryPhoto();
                }

                galleryIsDragging = false;

                return;
            }

            galleryIsDragging = false;

            /*
             * DOUBLE TAP
             */
            const now =
                Date.now();

            if (
                now -
                galleryLastTapTime <
                320
            ) {

                if (galleryZoom > 1) {

                    resetGalleryZoom();

                } else {

                    setGalleryZoom(2.5);
                }

                galleryLastTapTime = 0;

                return;
            }

            galleryLastTapTime = now;

        },
        {
            passive: false
        }
    );


    galleryViewerImageWrap.addEventListener(
        "touchcancel",
        () => {

            galleryIsDragging = false;
            galleryPinchStartDistance = 0;

        },
        {
            passive: true
        }
    );
}


/* =========================================================
   DESKTOP MOUSE PAN
   ========================================================= */

if (galleryViewerImageWrap) {

    galleryViewerImageWrap.addEventListener(
        "mousedown",
        event => {

            if (
                galleryZoom <= 1 ||
                event.button !== 0
            ) {
                return;
            }

            galleryIsDragging = true;

            galleryDragStartX =
                event.clientX;

            galleryDragStartY =
                event.clientY;

            galleryDragStartPanX =
                galleryPanX;

            galleryDragStartPanY =
                galleryPanY;

            galleryViewerImageWrap.classList.add(
                  "is-dragging"
            );

            event.preventDefault();
        }
    );


    window.addEventListener(
        "mousemove",
        event => {

            if (
                !galleryIsDragging ||
                galleryZoom <= 1
            ) {
                return;
            }

            galleryPanX =
                galleryDragStartPanX +
                (
                    event.clientX -
                    galleryDragStartX
                );

            galleryPanY =
                galleryDragStartPanY +
                (
                    event.clientY -
                    galleryDragStartY
                );

            applyGalleryTransform();
        }
    );


    window.addEventListener(
        "mouseup",
        () => {

            galleryIsDragging = false;

            galleryViewerImageWrap.classList.remove(
            "is-dragging"
            );
        }
    );
}


/* =========================================================
   TAP STAGE TO SHOW / HIDE CONTROLS
   ========================================================= */

if (galleryViewerStage) {

    galleryViewerStage.addEventListener(
        "click",
        event => {

            /*
             * Don't toggle controls when clicking actual
             * controls, navigation buttons, thumbnails,
             * or the image.
             */
            if (
                event.target.closest(
                    "button"
                ) ||
                event.target.closest(
                    ".gallery-viewer-thumbnail"
                ) ||
                event.target === galleryViewerImage
            ) {
                return;
            }

            toggleGalleryControls();
        }
    );
}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

galleryViewerNext.addEventListener(
    "click",
    event => {

        event.preventDefault();

        nextGalleryPhoto();
        showGalleryControls();
    }
);


galleryViewerPrev.addEventListener(
    "click",
    event => {

        event.preventDefault();

        previousGalleryPhoto();
        showGalleryControls();
    }
);


galleryViewerClose.addEventListener(
    "click",
    event => {

        event.preventDefault();

        closeGalleryViewer();
    }
);


if (galleryViewerZoomOut) {

    galleryViewerZoomOut.addEventListener(
        "click",
        event => {

            event.preventDefault();

            zoomGalleryOut();
        }
    );
}


if (galleryViewerZoomIn) {

    galleryViewerZoomIn.addEventListener(
        "click",
        event => {

            event.preventDefault();

            zoomGalleryIn();
        }
    );
}


if (galleryViewerZoomReset) {

    galleryViewerZoomReset.addEventListener(
        "click",
        event => {

            event.preventDefault();

            resetGalleryZoom();
        }
    );
}


if (galleryViewerRotateLeft) {

    galleryViewerRotateLeft.addEventListener(
        "click",
        event => {

            event.preventDefault();

            rotateGalleryLeft();
        }
    );
}


if (galleryViewerRotateRight) {

    galleryViewerRotateRight.addEventListener(
        "click",
        event => {

            event.preventDefault();

            rotateGalleryRight();
        }
    );
}


if (galleryViewerSlideshow) {

    galleryViewerSlideshow.addEventListener(
        "click",
        event => {

            event.preventDefault();

            toggleGallerySlideshow();
        }
    );
}


if (galleryViewerReset) {

    galleryViewerReset.addEventListener(
        "click",
        event => {

            event.preventDefault();

            resetGalleryViewer();
        }
    );
}


/* =========================================================
   GALLERY CATEGORY FILTERS
   ========================================================= */

// Build the gallery category filters from the available albums.
const galleryFilters =
    document.getElementById("galleryFilters");

if (galleryFilters) {

    Object.entries(galleryAlbums).forEach(
        ([category, album]) => {

            const button =
                document.createElement("button");

            button.className = "chip";
            button.type = "button";
            button.dataset.gcat = category;
            button.textContent = album.title;

            galleryFilters.appendChild(button);
        }
    );


    galleryFilters.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(".chip");

            if (!button) {
                return;
            }

            const selected =
                button.dataset.gcat;

            galleryFilters
                .querySelectorAll(".chip")
                .forEach(chip => {

                    chip.classList.toggle(
                        "active",
                        chip === button
                    );
                });


            galleryAlbumsElements.forEach(
                album => {

                    const visible =
                        selected === "ሁሉም" ||
                        album.dataset.galleryCategory ===
                        selected;

                    album.hidden =
                        !visible;
                }
            );

        }
    );
}


/* =========================================================
   GALLERY ALBUM OPENING
   ========================================================= */

galleryAlbumsElements.forEach(
    album => {

        album.addEventListener(
            "click",
            () => {

                const category =
                    album.dataset.galleryCategory;

                openGalleryAlbum(category);
            }
        );

    }
);


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !galleryViewer.classList.contains(
                "active"
            )
        ) {
            return;
        }

        /*
         * Don't interfere with typing into another
         * input or textarea elsewhere on the page.
         */
        const tag =
            event.target.tagName;

        if (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            tag === "SELECT"
        ) {
            return;
        }


        if (event.key === "ArrowRight") {

            event.preventDefault();

            nextGalleryPhoto();

            return;
        }


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            previousGalleryPhoto();

            return;
        }


        if (event.key === "Escape") {

            event.preventDefault();

            closeGalleryViewer();

            return;
        }


        if (event.key === "+" || event.key === "=") {

            event.preventDefault();

            zoomGalleryIn();

            return;
        }


        if (event.key === "-") {

            event.preventDefault();

            zoomGalleryOut();

            return;
        }


        if (event.key === "0") {

            event.preventDefault();

            resetGalleryViewer();

            return;
        }


        if (event.key === " ") {

            event.preventDefault();

            toggleGallerySlideshow();

            return;
        }

    }
);

/* =========================================================
   5. EVENTS DATA
   ========================================================= */

const events = [

    {
        day: "15",
        month: "AUG",
        name: "የምስጋና የአምልኮ መርሃ ግብር",
        description: "የመዘምራኑ ልዩ የአምልኮ እና የምስጋና መርሃ ግብር።",
        time: "10:00 ጥዋት",
        location: "ሀዋሳ ታቦር ቃለ ሕይወት ቤተክርስቲያን"
    },

    {
        day: "22",
        month: "AUG",
        name: "የመዝሙር አገልግሎት",
        description: "በመዝሙር እና በአምልኮ የምናገለግልበት ልዩ መርሃ ግብር።",
        time: "4:00 ከሰዓት",
        location: "ሀዋሳ ታቦር ቃለ ሕይወት ቤተክርስቲያን"
    },

    {
        day: "05",
        month: "SEP",
        name: "ልዩ የአምልኮ ምሽት",
        description: "ለጸሎት፣ ምስጋና እና አምልኮ የተዘጋጀ ምሽት።",
        time: "6:00 ማታ",
        location: "ሀዋሳ ታቦር ቃለ ሕይወት ቤተክርስቲያን"
    }

];


/* =========================================================
   6. HELPER FUNCTION
   ========================================================= */

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   7. DARK / LIGHT MODE
   ========================================================= */

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {

    const normalizedTheme = theme === "dark" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", normalizedTheme);

    localStorage.setItem("choir-theme", normalizedTheme);

    if (themeToggle) {
        const isDark = normalizedTheme === "dark";
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "ወደ ብርሃን ሁነታ ቀይር" : "ወደ ጨለማ ሁነታ ቀይር"
        );
        themeToggle.setAttribute(
            "title",
            isDark ? "ብርሃን ሁነታ" : "ጨለማ ሁነታ"
        );
    }
}

const savedTheme = localStorage.getItem("choir-theme");

if (savedTheme) {
    setTheme(savedTheme);
} else {

    const prefersDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(prefersDark ? "dark" : "light");
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        setTheme(currentTheme === "dark" ? "light" : "dark");

    });

}


/* =========================================================
   8. MOBILE NAVIGATION
   ========================================================= */

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerClose = document.getElementById("drawerClose");
const drawerBackdrop = document.getElementById("drawerBackdrop");


function openMobileMenu() {

    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");

    hamburgerBtn.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {

    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");

    hamburgerBtn.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openMobileMenu);
}

if (drawerClose) {
    drawerClose.addEventListener("click", closeMobileMenu);
}

if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeMobileMenu);
}


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".mobile-drawer .nav-link").forEach(link => {

    link.addEventListener("click", () => {
        closeMobileMenu();
    });

});


/* =========================================================
   9. HEADER SCROLL EFFECT
   ========================================================= */

const siteHeader = document.getElementById("siteHeader");

function handleHeaderScroll() {

    if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();

/* =========================================================
   10. BACK TO TOP BUTTON
   ========================================================= */

const backToTop = document.getElementById("backToTop");
const heroSection = document.getElementById("home");

let backToTopTimer;

if (backToTop && heroSection) {

    function updateBackToTop() {

        clearTimeout(backToTopTimer);

        /*
         * Hide immediately while the user is scrolling.
         */
        backToTop.classList.remove("show");


        /*
         * Wait until scrolling has stopped.
         */
        backToTopTimer = setTimeout(() => {

            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

            /*
             * Only show the button after the hero section.
             */
            if (window.scrollY >= heroBottom - 100) {
                backToTop.classList.add("show");
            }

        }, 200);

    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    /*
     * Scroll smoothly to the top when clicked.
     */
    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* =========================================================
   10. REVEAL ON SCROLL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("in-view");
    });

}


/* =========================================================
   11. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".main-nav .nav-link");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id = entry.target.id;

                    navLinks.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${id}`
                        );

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}


/* =========================================================
   12. SONG SYSTEM
   ========================================================= */

const songsGrid = document.getElementById("songsGrid");
const noSongsMsg = document.getElementById("noSongsMsg");
const songSearch = document.getElementById("songSearch");
const categoryFilters = document.getElementById("categoryFilters");

const mainAudio = document.getElementById("mainAudio");

const NativeMedia =
    window.Capacitor &&
    window.Capacitor.Plugins &&
    window.Capacitor.Plugins.Media
        ? window.Capacitor.Plugins.Media
        : null;

let currentSong = null;
let currentSongIndex = -1;
let currentCategory = "ሁሉም";

/* ---------------------------------------------------------
   Liked songs
   --------------------------------------------------------- */

let likedSongs = new Set(
    JSON.parse(
        localStorage.getItem("mehanayim-liked-songs") || "[]"
    )
);

/* ---------------------------------------------------------
   Format time
   --------------------------------------------------------- */

function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
}


/* ---------------------------------------------------------
   Render songs
   --------------------------------------------------------- */

function renderSongs() {

    if (!songsGrid) return;

    const searchTerm =
        songSearch ?
        songSearch.value.trim().toLowerCase() :
        "";

const filteredSongs = songs.filter(song => {

    let matchesCategory;


    /*
     * Favorite = liked songs
     */

    if (currentCategory === "Favorite") {

        matchesCategory =
            likedSongs.has(song.id);

    } else {

        matchesCategory =
            currentCategory === "ሁሉም" ||
            song.category === currentCategory;

    }


    const searchableText =
        `${song.titleAm} ${song.titleEn} ${song.category}`
            .toLowerCase();


    const matchesSearch =
        searchableText.includes(searchTerm);


    return (
        matchesCategory &&
        matchesSearch
    );

});


    songsGrid.innerHTML = "";


    if (filteredSongs.length === 0) {

        noSongsMsg.hidden = false;
        return;

    }

    noSongsMsg.hidden = true;


    filteredSongs.forEach(song => {

        const card = document.createElement("article");

        card.className = "song-card";

        card.dataset.songId = song.id;


        card.innerHTML = `

            <div class="song-cover-wrap">

                <img
                    src="${escapeHTML(song.cover)}"
                    alt="${escapeHTML(song.titleAm)}"
                    class="song-cover"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >

                <div class="song-cover-fallback" style="display:none;">
                    <svg class="icon">
                        <use href="#icon-note"></use>
                    </svg>
                </div>

                <span class="song-category-badge">
                    ${escapeHTML(song.category)}
                </span>

                <div class="song-play-overlay">

                    <button
                        class="song-play-btn"
                        data-action="play"
                        data-song-id="${song.id}"
                        aria-label="አጫውት"
                    >
                        <svg class="icon">
                            <use href="#icon-play"></use>
                        </svg>
                    </button>

                </div>

            </div>


            <div class="song-body">

                <h3 class="song-title-am">
                    ${escapeHTML(song.titleAm)}
                </h3>

                <p class="song-title-en">
                    ${escapeHTML(song.titleEn)}
                </p>

                <p class="song-meta">
                    ${escapeHTML(song.category)} · ${escapeHTML(song.year)}
                </p>


                <div class="song-progress-row">

                    <div
                        class="song-progress-track"
                        data-action="seek"
                        data-song-id="${song.id}"
                    >
                        <div class="song-progress-fill"></div>
                    </div>

                    <span class="song-time">
                        0:00
                    </span>

                </div>


                <div class="song-actions-row">

                    <button
                        class="song-action-btn lyrics-btn"
                        data-action="lyrics"
                        data-song-id="${song.id}"
                    >
                        <svg class="icon icon-sm">
                            <use href="#icon-note"></use>
                        </svg>

                        ግጥሙን ይመልከቱ
                    </button>



                </div>

            </div>
        `;


        songsGrid.appendChild(card);

    });

}


/* Initial songs */

renderSongs();


/* ---------------------------------------------------------
   Song search
   --------------------------------------------------------- */

if (songSearch) {

    songSearch.addEventListener("input", renderSongs);

}


/* ---------------------------------------------------------
   Song category filter
   --------------------------------------------------------- */

if (categoryFilters) {

    categoryFilters.addEventListener("click", event => {

        const button =
            event.target.closest(".chip");

        if (!button) return;

        currentCategory =
            button.dataset.category;

        categoryFilters
            .querySelectorAll(".chip")
            .forEach(chip => {
                chip.classList.toggle(
                    "active",
                    chip === button
                );
            });

        renderSongs();

    });

}


/* =========================================================
   13. FULL MUSIC PLAYER
   ========================================================= */

const musicPlayer =
    document.getElementById("musicPlayer");

const musicPlayerBack =
    document.getElementById("musicPlayerBack");

const musicPlayerMore =
    document.getElementById("musicPlayerMore");

const musicPlayerArt =
    document.getElementById("musicPlayerArt");

const musicPlayerTitle =
    document.getElementById("musicPlayerTitle");

const musicPlayerArtist =
    document.getElementById("musicPlayerArtist");

const musicPlayerLike =
    document.getElementById("musicPlayerLike");

const musicPlayerProgress =
    document.getElementById("musicPlayerProgress");

const musicPlayerProgressFill =
    document.getElementById("musicPlayerProgressFill");

const musicPlayerCurrentTime =
    document.getElementById("musicPlayerCurrentTime");

const musicPlayerDuration =
    document.getElementById("musicPlayerDuration");

const musicPlayerPrevious =
    document.getElementById("musicPlayerPrevious");

const musicPlayerPlay =
    document.getElementById("musicPlayerPlay");

const musicPlayerNext =
    document.getElementById("musicPlayerNext");

const musicPlayerBackward =
    document.getElementById("musicPlayerBackward");

const musicPlayerForward =
    document.getElementById("musicPlayerForward");

const musicPlayerLyrics =
    document.getElementById("musicPlayerLyrics");

const musicPlayerRepeat =
    document.getElementById("musicPlayerRepeat");

const musicPlayerQueue =
    document.getElementById("musicPlayerQueue");

/* =========================================================
   MUSIC QUEUE / SONG LIST
   ========================================================= */

let musicQueuePanel = null;

function createMusicQueue() {

    if (musicQueuePanel) {
        return musicQueuePanel;
    }

    musicQueuePanel =
        document.createElement("div");

    musicQueuePanel.id =
        "musicQueuePanel";

    musicQueuePanel.className =
        "music-queue-panel";

    musicQueuePanel.innerHTML = `
        <div class="music-queue-backdrop"></div>

        <div class="music-queue-box">

            <div class="music-queue-header">

                <div>
                    <span class="music-queue-eyebrow">
                        መሃናይም ቅኔ
                    </span>

                    <h3>
                        የመዝሙር ዝርዝር
                    </h3>

                    <p>
                        ሁሉንም መዝሙሮች ይምረጡ
                    </p>
                </div>

                <button
                    class="music-queue-close"
                    type="button"
                    aria-label="ዝጋ"
                >
                    ×
                </button>

            </div>

            <div
                class="music-queue-list"
                id="musicQueueList"
            ></div>

        </div>
    `;

    document.body.appendChild(
        musicQueuePanel
    );

    musicQueuePanel
        .querySelector(".music-queue-backdrop")
        .addEventListener(
            "click",
            closeMusicQueue
        );

    musicQueuePanel
        .querySelector(".music-queue-close")
        .addEventListener(
            "click",
            closeMusicQueue
        );

    return musicQueuePanel;
}


function openMusicQueue() {

    const panel =
        createMusicQueue();

    const list =
        panel.querySelector(
            "#musicQueueList"
        );

    list.innerHTML = "";

    songs.forEach(
        (song, index) => {

            const item =
                document.createElement("button");

            item.type = "button";

            item.className =
                "music-queue-item";

            if (
                currentSong &&
                currentSong.id === song.id
            ) {
                item.classList.add("is-playing");
            }

            item.innerHTML = `
                <span class="music-queue-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <img
                    src="${song.cover}"
                    alt="${song.titleAm}"
                >

                <span class="music-queue-details">

                    <strong>
                        ${song.titleAm}
                    </strong>

                    <small>
                        ${song.titleEn || "መሃናይም ቅኔ"}
                    </small>

                </span>

                <span class="music-queue-play">
                    ${
                        currentSong &&
                        currentSong.id === song.id &&
                        !mainAudio.paused
                            ? "❚❚"
                            : "▶"
                    }
                </span>
            `;

            item.addEventListener(
                "click",
                () => {

                    playSong(song);

                    closeMusicQueue();

                }
            );

            list.appendChild(item);

        }
    );

    panel.classList.add("visible");

    document.body.classList.add(
        "music-queue-open"
    );
}


function closeMusicQueue() {

    if (!musicQueuePanel) {
        return;
    }

    musicQueuePanel.classList.remove(
        "visible"
    );

    document.body.classList.remove(
        "music-queue-open"
    );
}

/* ---------------------------------------------------------
   Open song list
   --------------------------------------------------------- */

if (musicPlayerQueue) {

    musicPlayerQueue.addEventListener(
        "click",
        openMusicQueue
    );

}

let repeatEnabled = false;

const audioController =
    document.getElementById("audioController");

const audioControllerCover =
    document.getElementById("audioControllerCover");

const audioControllerTitle =
    document.getElementById("audioControllerTitle");

const audioControllerProgress =
    document.getElementById("audioControllerProgress");

const audioControllerProgressBar =
    document.querySelector(
        ".audio-controller-progress"
    );

const audioControllerPlay =
    document.getElementById("audioControllerPlay");

const audioControllerOpen =
    document.getElementById("audioControllerOpen");

    /* =========================================================
   SMALL AUDIO CONTROLLER
   ========================================================= */

function updateAudioController(song) {

    if (!song || !audioController) return;


    audioControllerCover.src =
        song.cover;

    audioControllerCover.alt =
        song.titleAm;

    audioControllerTitle.textContent =
        song.titleAm;


    audioController.classList.add(
        "visible"
    );

    audioController.setAttribute(
        "aria-hidden",
        "false"
    );


    updateAudioControllerPlayButton(
        !mainAudio.paused
    );
}


function updateAudioControllerPlayButton(
    isPlaying
) {

    if (!audioControllerPlay) return;

    audioControllerPlay.innerHTML = `
        <svg class="icon">
            <use href="${
                isPlaying
                    ? "#icon-pause"
                    : "#icon-play"
            }"></use>
        </svg>
    `;
}

/* ---------------------------------------------------------
   Open full music player
   --------------------------------------------------------- */

function showMusicPlayer(song) {

    musicPlayerArt.src = song.cover;
    musicPlayerArt.alt = song.titleAm;

    musicPlayerTitle.textContent =
        song.titleAm;

    musicPlayerArtist.textContent =
        song.titleEn || "መሃናይም ቅኔ";

    const isLiked =
    likedSongs.has(song.id);


musicPlayerLike.textContent =
    isLiked ? "♥" : "♡";


musicPlayerLike.dataset.liked =
    String(isLiked);

    musicPlayerCurrentTime.textContent =
        formatTime(mainAudio.currentTime);

    musicPlayerDuration.textContent =
        formatTime(mainAudio.duration);

    musicPlayerProgressFill.style.width = "0%";

    musicPlayer.classList.add("visible");

    musicPlayer.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    updateMusicPlayerPlayButton(
        !mainAudio.paused
    );
}


/* ---------------------------------------------------------
   Close / minimize player
   --------------------------------------------------------- */

function hideMusicPlayer() {

    musicPlayer.classList.remove("visible");

    musicPlayer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* ---------------------------------------------------------
   Play / pause icon
   --------------------------------------------------------- */

function updateMusicPlayerPlayButton(isPlaying) {

    if (!musicPlayerPlay) return;

    musicPlayerPlay.innerHTML = `
        <svg class="icon">
            <use href="${isPlaying
                ? "#icon-pause"
                : "#icon-play"}"></use>
        </svg>
    `;
}


/* ---------------------------------------------------------
   Play a song
   --------------------------------------------------------- */

async function playSong(song) {

    const songIndex =
        songs.findIndex(
            item => item.id === song.id
        );

    currentSong = song;
    currentSongIndex = songIndex;

    updateAudioController(song);
    showMusicPlayer(song);

    if (NativeMedia) {

        try {

            await NativeMedia.play({
                audio: song.audio,
                title:
                    song.titleAm ||
                    "መዝሙር",
                artist:
                    song.titleEn ||
                    "መሃናይም ቅኔ",
                cover:
                    song.cover || ""
            });

            updateMusicPlayerPlayButton(true);
            updateAudioControllerPlayButton(true);
            updatePlayingCard();

            return;

        } catch (error) {

            console.warn(
                "Native Android playback failed:",
                error
            );

        }
    }

    /*
     * Browser fallback
     */
    mainAudio.src = song.audio;

    mainAudio.load();

    mainAudio.play()
        .then(() => {

            updateMusicPlayerPlayButton(true);
            updateAudioControllerPlayButton(true);
            updatePlayingCard();

        })
        .catch(error => {

            console.warn(
                "Audio could not start:",
                error
            );

            updateMusicPlayerPlayButton(false);
            updateAudioControllerPlayButton(false);

        });
}


/* ---------------------------------------------------------
   Pause song
   --------------------------------------------------------- */

function pauseSong() {

    mainAudio.pause();

    updateMusicPlayerPlayButton(false);

    updatePlayingCard();
}


/* ---------------------------------------------------------
   Update song cards
   --------------------------------------------------------- */

function updatePlayingCard() {

    document
        .querySelectorAll(".song-card")
        .forEach(card => {

            const cardId =
                Number(card.dataset.songId);

            const isCurrent =
                currentSong &&
                cardId === currentSong.id;

            card.classList.toggle(
                "playing",
                isCurrent &&
                !mainAudio.paused
            );


            const playIcon =
                card.querySelector(
                    ".song-play-btn use"
                );

            if (playIcon && isCurrent) {

                playIcon.setAttribute(
                    "href",
                    mainAudio.paused
                        ? "#icon-play"
                        : "#icon-pause"
                );

            }

        });

}


/* =========================================================
   14. SONG CARD CLICK HANDLER
   ========================================================= */

if (songsGrid) {

    songsGrid.addEventListener("click", event => {

        const card =
            event.target.closest(".song-card");

        if (!card) return;


        const songId =
            Number(card.dataset.songId);

        const song =
            songs.find(
                item => item.id === songId
            );

        if (!song) return;


        const button =
            event.target.closest("[data-action]");


        /* -------------------------------------------------
           Play button
           ------------------------------------------------- */

        if (
            button &&
            button.dataset.action === "play"
        ) {

            /*
             * If this is already the current song:
             *
             * - player hidden → open it
             * - player visible → play / pause
             */

            if (
                currentSong &&
                currentSong.id === song.id
            ) {

                if (
                    !musicPlayer.classList.contains("visible")
                ) {

                    showMusicPlayer(song);

                    return;

                }


                if (mainAudio.paused) {

                    mainAudio.play();

                } else {

                    mainAudio.pause();

                }

            } else {

                playSong(song);

            }

            return;
        }


        /* -------------------------------------------------
           Progress bar
           ------------------------------------------------- */

        if (
            button &&
            button.dataset.action === "seek"
        ) {

            if (
                currentSong &&
                currentSong.id === song.id &&
                mainAudio.duration
            ) {

                const rect =
                    button.getBoundingClientRect();

                const clickPosition =
                    event.clientX -
                    rect.left;

                const percentage =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            clickPosition /
                            rect.width
                        )
                    );

                mainAudio.currentTime =
                    mainAudio.duration *
                    percentage;

            }

            return;
        }


        /* -------------------------------------------------
           Lyrics button
           ------------------------------------------------- */

        if (
            button &&
            button.dataset.action === "lyrics"
        ) {

            openLyrics(song);

            return;
        }


        /* -------------------------------------------------
           Any other part of the card
           → open full music player
           ------------------------------------------------- */

        playSong(song);

    });

}


/* =========================================================
   ANDROID MEDIA SESSION
   ========================================================= */

function updateMediaSession() {

    if (
        !("mediaSession" in navigator) ||
        !currentSong
    ) {
        return;
    }

    try {

        navigator.mediaSession.metadata =
            new MediaMetadata({

                title:
                    currentSong.titleAm ||
                    "መዝሙር",

                artist:
                    currentSong.titleEn ||
                    "መሃናይም ቅኔ",

                album:
                    "መሃናይም ቅኔ",

                artwork: [
                    {
                        src: currentSong.cover,
                        sizes: "512x512",
                        type: "image/webp"
                    }
                ]

            });

    } catch (error) {

        console.warn(
            "Media Session metadata error:",
            error
        );

    }
}


/* ---------------------------------------------------------
   Media Session actions
   --------------------------------------------------------- */

function setupMediaSession() {

    if (!("mediaSession" in navigator)) {
        return;
    }

    try {

        navigator.mediaSession.setActionHandler(
    "play",
    () => {

        if (NativeMedia) {

            NativeMedia.resume().catch(error => {
                console.warn(
                    "Native media resume failed:",
                    error
                );
            });

        } else {

            mainAudio.play().catch(error => {
                console.warn(
                    "Media Session play failed:",
                    error
                );
            });

        }

    }
);


        navigator.mediaSession.setActionHandler(
    "pause",
    () => {

        if (NativeMedia) {

            NativeMedia.pause().catch(error => {
                console.warn(
                    "Native media pause failed:",
                    error
                );
            });

        } else {

            mainAudio.pause();

        }

    }
);


        navigator.mediaSession.setActionHandler(
            "previoustrack",
            () => {

                if (musicPlayerPrevious) {
                    musicPlayerPrevious.click();
                }

            }
        );


        navigator.mediaSession.setActionHandler(
            "nexttrack",
            () => {

                if (musicPlayerNext) {
                    musicPlayerNext.click();
                }

            }
        );


        navigator.mediaSession.setActionHandler(
            "seekbackward",
            () => {

                mainAudio.currentTime =
                    Math.max(
                        0,
                        mainAudio.currentTime - 10
                    );

            }
        );


        navigator.mediaSession.setActionHandler(
            "seekforward",
            () => {

                mainAudio.currentTime =
                    Math.min(
                        mainAudio.duration || Infinity,
                        mainAudio.currentTime + 10
                    );

            }
        );

    } catch (error) {

        console.warn(
            "Media Session setup error:",
            error
        );

    }
}


/* ---------------------------------------------------------
   Initialize Media Session
   --------------------------------------------------------- */

setupMediaSession();


/* =========================================================
   15. AUDIO EVENTS
   ========================================================= */


/* ---------------------------------------------------------
   Time update
   --------------------------------------------------------- */

mainAudio.addEventListener(
    "timeupdate",
    () => {

        if (!currentSong) return;


        const percentage =
            mainAudio.duration
                ? (
                    mainAudio.currentTime /
                    mainAudio.duration
                ) * 100
                : 0;
if (audioControllerProgress) {

    audioControllerProgress.style.width =
        `${percentage}%`;

}

/* =========================================================
   MINI PLAYER CONTROLS
   ========================================================= */

if (audioControllerPlay) {

    audioControllerPlay.addEventListener(
        "click",
        () => {

            if (!currentSong) {
                return;
            }

            if (mainAudio.paused) {

                mainAudio.play();

            } else {

                mainAudio.pause();

            }

        }
    );

}


if (audioControllerOpen) {

    audioControllerOpen.addEventListener(
        "click",
        () => {

            if (!currentSong) {
                return;
            }

            showMusicPlayer(
                currentSong
            );

        }
    );

}


/* ---------------------------------------------------------
   Mini player seeking
   --------------------------------------------------------- */

if (audioControllerProgressBar) {

    audioControllerProgressBar.addEventListener(
        "click",
        event => {

            if (
                !currentSong ||
                !Number.isFinite(
                    mainAudio.duration
                )
            ) {
                return;
            }

            const rect =
                audioControllerProgressBar
                    .getBoundingClientRect();

            const position =
                event.clientX -
                rect.left;

            const percentage =
                Math.max(
                    0,
                    Math.min(
                        1,
                        position / rect.width
                    )
                );

            mainAudio.currentTime =
                mainAudio.duration *
                percentage;

        }
    );

}

        /* Full player progress */

        if (musicPlayerProgressFill) {

            musicPlayerProgressFill.style.width =
                `${percentage}%`;

        }


        if (musicPlayerCurrentTime) {

            musicPlayerCurrentTime.textContent =
                formatTime(
                    mainAudio.currentTime
                );

        }


        if (musicPlayerDuration) {

            musicPlayerDuration.textContent =
                formatTime(
                    mainAudio.duration
                );

        }


        /* Song card progress */

        const card =
            document.querySelector(
                `.song-card[data-song-id="${currentSong.id}"]`
            );


        if (card) {

            const fill =
                card.querySelector(
                    ".song-progress-fill"
                );

            const time =
                card.querySelector(
                    ".song-time"
                );


            if (fill) {

                fill.style.width =
                    `${percentage}%`;

            }


            if (time) {

                time.textContent =
                    formatTime(
                        mainAudio.currentTime
                    );

            }

        }

    }
);


/* ---------------------------------------------------------
   Metadata loaded
   --------------------------------------------------------- */

mainAudio.addEventListener(
    "loadedmetadata",
    () => {

        if (!musicPlayerDuration) return;

        musicPlayerDuration.textContent =
            formatTime(
                mainAudio.duration
            );

    }
);


/* ---------------------------------------------------------
   Play
   --------------------------------------------------------- */

mainAudio.addEventListener(
    "play",
    () => {

        if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = "playing";
}
        updateMusicPlayerPlayButton(true);

        updateAudioControllerPlayButton(true);

        updatePlayingCard();

    }
);


/* ---------------------------------------------------------
   Pause
   --------------------------------------------------------- */

mainAudio.addEventListener(
    "pause",
    () => {

        if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = "paused";
}
        updateMusicPlayerPlayButton(false);

        updateAudioControllerPlayButton(false);

        updatePlayingCard();

    }
);


mainAudio.addEventListener(
    "ended",
    () => {

        updateMusicPlayerPlayButton(false);
        updatePlayingCard();

        /*
         * Repeat current song
         */
        if (repeatEnabled && currentSong) {

            mainAudio.currentTime = 0;

            mainAudio.play().catch(error => {
                console.warn(
                    "Repeat playback failed:",
                    error
                );
            });

            return;
        }

        const categorySongs =
            getCurrentCategorySongs();

        if (categorySongs.length <= 1) {
            return;
        }

        const currentIndex =
            categorySongs.findIndex(
                song =>
                    song.id === currentSong.id
            );

        /*
         * Normal next song
         */

        let nextIndex =
            currentIndex + 1;

        if (
            nextIndex >=
            categorySongs.length
        ) {
            nextIndex = 0;
        }

        playSong(
            categorySongs[nextIndex]
        );
    }
);


/* =========================================================
   16. FULL PLAYER CONTROLS
   ========================================================= */


/* ---------------------------------------------------------
   Play / Pause
   --------------------------------------------------------- */

if (musicPlayerPlay) {

    musicPlayerPlay.addEventListener(
        "click",
        () => {

            if (!currentSong) return;


            if (mainAudio.paused) {

                mainAudio.play();

            } else {

                mainAudio.pause();

            }

        }
    );

}

/* ---------------------------------------------------------
   Get songs from the current song's category
   --------------------------------------------------------- */

function getCurrentCategorySongs() {

    if (!currentSong) {
        return [];
    }

    return songs.filter(
        song =>
            song.category === currentSong.category
    );

}

/* ---------------------------------------------------------
   Previous song
   --------------------------------------------------------- */

if (musicPlayerPrevious) {

    musicPlayerPrevious.addEventListener(
        "click",
        () => {

            if (!currentSong) return;


            /*
             * If the song has played for more than
             * 3 seconds, restart it first.
             */

            if (
                mainAudio.currentTime > 3
            ) {

                mainAudio.currentTime = 0;

                return;

            }


            const categorySongs =
                getCurrentCategorySongs();


            if (categorySongs.length <= 1) {
                return;
            }


            const currentIndex =
                categorySongs.findIndex(
                    song =>
                        song.id === currentSong.id
                );


            let previousIndex =
                currentIndex - 1;


            /*
             * Wrap around to the last song.
             */

            if (previousIndex < 0) {

                previousIndex =
                    categorySongs.length - 1;

            }


            playSong(
                categorySongs[previousIndex]
            );

        }
    );

}

/* ---------------------------------------------------------
   Next song
   --------------------------------------------------------- */

if (musicPlayerNext) {

    musicPlayerNext.addEventListener(
        "click",
        () => {

            if (!currentSong) return;


            const categorySongs =
                getCurrentCategorySongs();


            if (categorySongs.length <= 1) {
                return;
            }


            const currentIndex =
                categorySongs.findIndex(
                    song =>
                        song.id === currentSong.id
                );


            let nextIndex =
                currentIndex + 1;


            /*
             * Wrap around to the first song.
             */

            if (
                nextIndex >=
                categorySongs.length
            ) {

                nextIndex = 0;

            }


            playSong(
                categorySongs[nextIndex]
            );

        }
    );

}

/* ---------------------------------------------------------
   10 seconds backward
   --------------------------------------------------------- */

if (musicPlayerBackward) {

    musicPlayerBackward.addEventListener(
        "click",
        () => {

            if (!currentSong) return;

            mainAudio.currentTime =
                Math.max(
                    0,
                    mainAudio.currentTime - 10
                );

        }
    );

}


/* ---------------------------------------------------------
   10 seconds forward
   --------------------------------------------------------- */

if (musicPlayerForward) {

    musicPlayerForward.addEventListener(
        "click",
        () => {

            if (!currentSong) return;


            const duration =
                mainAudio.duration;


            if (!Number.isFinite(duration)) {
                return;
            }


            mainAudio.currentTime =
                Math.min(
                    duration,
                    mainAudio.currentTime + 10
                );

        }
    );

}

/* ---------------------------------------------------------
   Progress bar seeking
   --------------------------------------------------------- */

if (musicPlayerProgress) {

    musicPlayerProgress.addEventListener(
        "click",
        event => {

            if (
                !currentSong ||
                !mainAudio.duration
            ) {
                return;
            }


            const rect =
                musicPlayerProgress
                    .getBoundingClientRect();


            const clickPosition =
                event.clientX -
                rect.left;


            const percentage =
                Math.max(
                    0,
                    Math.min(
                        1,
                        clickPosition /
                        rect.width
                    )
                );


            mainAudio.currentTime =
                mainAudio.duration *
                percentage;

        }
    );

}


/* ---------------------------------------------------------
   Player back button
   --------------------------------------------------------- */

if (musicPlayerBack) {

    musicPlayerBack.addEventListener(
        "click",
        hideMusicPlayer
    );

}


/* ---------------------------------------------------------
   Lyrics
   --------------------------------------------------------- */

if (musicPlayerLyrics) {

    musicPlayerLyrics.addEventListener(
        "click",
        () => {

            if (!currentSong) return;

            openLyrics(currentSong);

        }
    );

}


/* ---------------------------------------------------------
   Repeat
   --------------------------------------------------------- */

if (musicPlayerRepeat) {

    musicPlayerRepeat.addEventListener(
        "click",
        () => {

            repeatEnabled =
                !repeatEnabled;


            musicPlayerRepeat.classList.toggle(
                "active",
                repeatEnabled
            );

        }
    );

}


/* ---------------------------------------------------------
   Favorite button
   --------------------------------------------------------- */

if (musicPlayerLike) {

    musicPlayerLike.addEventListener(
        "click",
        () => {

            if (!currentSong) return;


            const songId =
                currentSong.id;


            if (
                likedSongs.has(songId)
            ) {

                /*
                 * Unlike
                 */

                likedSongs.delete(songId);

            } else {

                /*
                 * Like
                 */

                likedSongs.add(songId);

            }


            /*
             * Save liked songs permanently
             */

            localStorage.setItem(
                "mehanayim-liked-songs",
                JSON.stringify(
                    [...likedSongs]
                )
            );


            /*
             * Update heart
             */

            const isLiked =
                likedSongs.has(songId);


            musicPlayerLike.textContent =
                isLiked ? "♥" : "♡";


            musicPlayerLike.dataset.liked =
                String(isLiked);


            /*
             * Refresh the song list.
             *
             * This is especially important when
             * the user is currently viewing Favorite.
             */

            renderSongs();

        }
    );

}

/* =========================================================
   17. LYRICS MODAL
   ========================================================= */

const lyricsModal = document.getElementById("lyricsModal");
const lyricsBackdrop = document.getElementById("lyricsBackdrop");
const lyricsClose = document.getElementById("lyricsClose");
const lyricsTitle = document.getElementById("lyricsTitle");
const lyricsBody = document.getElementById("lyricsBody");
const copyLyricsBtn = document.getElementById("copyLyricsBtn");
const fontDecrease = document.getElementById("fontDecrease");
const fontIncrease = document.getElementById("fontIncrease");

let currentLyrics = "";

let lyricsFontSize = 19;


function openLyrics(song) {

    currentLyrics = song.lyrics;

    lyricsTitle.textContent =
        song.titleAm;

    lyricsBody.textContent =
        song.lyrics;

    lyricsBody.style.fontSize =
        `${lyricsFontSize}px`;

    lyricsModal.classList.add("open");

    lyricsModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeLyrics() {

    lyricsModal.classList.remove("open");

    lyricsModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


if (lyricsClose) {
    lyricsClose.addEventListener(
        "click",
        closeLyrics
    );
}


if (lyricsBackdrop) {
    lyricsBackdrop.addEventListener(
        "click",
        closeLyrics
    );
}


/* Font size decrease */

if (fontDecrease) {

    fontDecrease.addEventListener("click", () => {

        lyricsFontSize =
            Math.max(
                14,
                lyricsFontSize - 2
            );

        lyricsBody.style.fontSize =
            `${lyricsFontSize}px`;

    });

}


/* Font size increase */

if (fontIncrease) {

    fontIncrease.addEventListener("click", () => {

        lyricsFontSize =
            Math.min(
                32,
                lyricsFontSize + 2
            );

        lyricsBody.style.fontSize =
            `${lyricsFontSize}px`;

    });

}


/* Copy lyrics */

if (copyLyricsBtn) {

    copyLyricsBtn.addEventListener(
        "click",
        async () => {

            if (!currentLyrics) return;

            try {

                await navigator.clipboard.writeText(
                    currentLyrics
                );

                copyLyricsBtn.classList.add("copied");

                const originalText =
                    copyLyricsBtn.innerHTML;

                copyLyricsBtn.innerHTML =
                    "✓ ተቀድቷል";

                setTimeout(() => {

                    copyLyricsBtn.classList.remove(
                        "copied"
                    );

                    copyLyricsBtn.innerHTML =
                        originalText;

                }, 1800);

            } catch (error) {

                console.warn(
                    "Copy failed:",
                    error
                );

            }

        }
    );

}


/* =========================================================
   18. ESC KEY
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    closeMobileMenu();

    closeLyrics();

    closeGalleryViewer();

});


/* =========================================================
   19. MEMBERS
   ========================================================= */

const membersGrid =
    document.getElementById("membersGrid");

// The current HTML does not include a members section, so keep the
// renderer safe until member data/markup is added.
const members = [];


function renderMembers() {

    if (!membersGrid) return;

    membersGrid.innerHTML = "";


    members.forEach(member => {

        const card =
            document.createElement("article");

        card.className =
            "member-card";


        const initials =
            member.name
                .replace(/[^\u1200-\u137F\u0020]/g, "")
                .trim()
                .slice(0, 2);


        card.innerHTML = `

            <div class="member-photo-wrap">

                <img
                    src="${escapeHTML(member.image)}"
                    alt="${escapeHTML(member.name)}"
                    class="member-photo"
                    loading="lazy"
                >

                <div
                    class="member-photo-fallback"
                    style="display:none;"
                >
                    ${escapeHTML(initials || "01")}
                </div>

            </div>

            <div class="member-info">

                <h3 class="member-name">
                    ${escapeHTML(member.name)}
                </h3>

                <p class="member-role">
                    ${escapeHTML(member.role)}
                </p>

                <p class="member-voice">
                    ${escapeHTML(member.voice)}
                </p>

            </div>
        `;


        const image =
            card.querySelector(".member-photo");

        const fallback =
            card.querySelector(
                ".member-photo-fallback"
            );


        image.addEventListener("error", () => {

            image.style.display = "none";

            fallback.style.display = "flex";

        });


        membersGrid.appendChild(card);

    });

}


renderMembers();


/* =========================================================
   23. EVENTS
   ========================================================= */

const eventsList =
    document.getElementById("eventsList");


function renderEvents() {

    if (!eventsList) return;

    eventsList.innerHTML = "";


    events.forEach(eventItem => {

        const card =
            document.createElement("article");

        card.className =
            "event-card";


        card.innerHTML = `

            <div class="event-date-block">

                <span class="day">
                    ${escapeHTML(eventItem.day)}
                </span>

                <span class="month">
                    ${escapeHTML(eventItem.month)}
                </span>

            </div>


            <div>

                <h3 class="event-name">
                    ${escapeHTML(eventItem.name)}
                </h3>

                <p class="event-desc">
                    ${escapeHTML(eventItem.description)}
                </p>

                <div class="event-meta">

                    <span>
                        <svg class="icon icon-sm">
                            <use href="#icon-clock"></use>
                        </svg>

                        ${escapeHTML(eventItem.time)}
                    </span>


                    <span>
                        <svg class="icon icon-sm">
                            <use href="#icon-pin"></use>
                        </svg>

                        ${escapeHTML(eventItem.location)}
                    </span>

                </div>

            </div>

        `;


        eventsList.appendChild(card);

    });

}


renderEvents();


/* =========================================================
   24. CONTACT FORM
   =========================================================

   This is ONLY a front-end demo for now.

   Later, you can connect it to your backend.

   ========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formNote =
    document.getElementById("formNote");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            formNote.hidden = false;


            contactForm.reset();


            setTimeout(() => {

                formNote.hidden = true;

            }, 5000);

        }
    );

}


/* =========================================================
   25. SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (!target) return;


            event.preventDefault();

/* Keep Rules navigation inside the Rules panel */
const rulesContent = document.querySelector(".rules-content");

if (
    rulesContent &&
    target.classList.contains("rule-block")
) {
    rulesContent.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
} else {
    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

        }
    );

});


/* =========================================================
   26. IMAGE FALLBACKS
   ========================================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        /*
         * Do not break the layout when an image is missing.
         * Individual generated components have their own
         * fallback behavior.
         */

        img.setAttribute(
            "data-image-error",
            "true"
        );

    });

});


/* =========================================================
   27. INITIAL AUDIO VOLUME
   ========================================================= */

mainAudio.volume = 1;


/* =========================================================
   28. FINISHED
   ========================================================= */

console.log(
    "መሃናይም ቅኔ website JavaScript loaded successfully."
);

/* =========================================================
   ANDROID BACK BUTTON + EXIT CONFIRMATION
   ========================================================= */

const exitDialog = document.getElementById("exitDialog");
const exitCancel = document.getElementById("exitCancel");
const exitConfirm = document.getElementById("exitConfirm");


function showExitDialog() {

    if (!exitDialog) return;

    exitDialog.classList.add("open");

    exitDialog.setAttribute(
        "aria-hidden",
        "false"
    );
}


function hideExitDialog() {

    if (!exitDialog) return;

    exitDialog.classList.remove("open");

    exitDialog.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* No */

if (exitCancel) {

    exitCancel.addEventListener(
        "click",
        hideExitDialog
    );

}


/* Yes */

if (exitConfirm) {

    exitConfirm.addEventListener(
        "click",
        async () => {

            try {

                if (
                    window.App &&
                    typeof window.App.exitApp === "function"
                ) {

                    await window.App.exitApp();

                }

            } catch (error) {

                console.warn(
                    "Could not exit app:",
                    error
                );

            }

        }
    );

}


/* =========================================================
   ANDROID HARDWARE BACK BUTTON
   ========================================================= */

if (
    window.App &&
    typeof window.App.addListener === "function"
) {

   window.App.addListener(
    "backButton",
    () => {

        /*
         * 1. Exit confirmation is already open.
         *    Back closes the confirmation.
         */

        if (
            exitDialog &&
            exitDialog.classList.contains("open")
        ) {

            hideExitDialog();

            return;

        }


        /*
         * 2. Photo / gallery viewer is open.
         *    Close the viewer instead of exiting.
         */

        if (
            galleryViewer &&
            galleryViewer.classList.contains("active")
        ) {

            closeGalleryViewer();

            return;

        }


        /*
         * 3. Full music player is open.
         *    Minimize it instead of exiting.
         *
         *    The song keeps playing and the small
         *    audio controller remains available.
         */

        if (
            musicPlayer &&
            musicPlayer.classList.contains("visible")
        ) {

            hideMusicPlayer();

            return;

        }


        /*
         * 4. Music queue is open.
         *    Close the queue first.
         */

        if (
            musicQueuePanel &&
            musicQueuePanel.classList.contains("visible")
        ) {

            closeMusicQueue();

            return;

        }


        /*
         * 5. Lyrics are open.
         */

        if (
            lyricsModal &&
            lyricsModal.classList.contains("open")
        ) {

            closeLyrics();

            return;

        }


        /*
         * 6. Mobile menu is open.
         */

        if (
            mobileDrawer &&
            mobileDrawer.classList.contains("open")
        ) {

            closeMobileMenu();

            return;

        }


        /*
         * 7. Nothing is open.
         *    Ask before exiting the app.
         */

        showExitDialog();

    }
);

}

/* =========================================================
   RULES INTERNAL SCROLL → PAGE SCROLL CHAIN
   ========================================================= */

const rulesContent = document.querySelector(".rules-content");

if (rulesContent) {

    rulesContent.addEventListener("wheel", event => {

        const atTop = rulesContent.scrollTop <= 0;
        const atBottom =
            rulesContent.scrollTop + rulesContent.clientHeight >=
            rulesContent.scrollHeight - 1;

        /* Scrolling down at the bottom */
        if (atBottom && event.deltaY > 0) {
            window.scrollBy({
                top: event.deltaY,
                behavior: "auto"
            });
        }

        /* Scrolling up at the top */
        if (atTop && event.deltaY < 0) {
            window.scrollBy({
                top: event.deltaY,
                behavior: "auto"
            });
        }

    }, { passive: true });

}
