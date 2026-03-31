// import cesiumExamples from './cesium-examples.js'
import threeCesiumLinks from "./links.js";   // 链接
import threeExamples from './three-examples.js' // 案例
import threeCesiumAuthors from './author.js'
import { HOST, FILE_HOST } from "./host.js";



// 链接
window.THREE_CESIUM_LINKS = threeCesiumLinks;


// 导航
window.THREE_CESIUM_NAVIGATION = [
  { name: '案例', label: "案例", examples: threeExamples },
  // { name: 'Cesium.js案例[1.119]', examples: cesiumExamples },

]


// 作者
window.THREE_CESIUM_AUTHORS = threeCesiumAuthors

/* 依赖注入 */
window.GET_SCRIPT = (v, t) => (t === 'Cesium.js案例[1.119]' ?

  `<link rel="stylesheet" href="${HOST}js/cesium/style.css">
 <script type="importmap">
    {
        "imports": {
            "cesium": "${HOST}js/cesium/Cesium.js",
            "dat.gui": "${HOST}js/dat.gui.module.js"
        }
    }
 <\/script>`
  :
  `
  <script src="${HOST}js/proj4/proj4.js"></script>
  <script src="${HOST}js/Cesium1.102/Cesium.js"></script>

<script type="importmap">
    {
        "imports": { 
            "three": "${HOST}js/three/three.module.min.js",
            "three/examples/jsm/": "${HOST}js/three/addons/",
            "postprocessing": "${HOST}js/postprocessing.js",
            "gsap": "${HOST}js/gsap/index.js",
            "dat.gui": "${HOST}js/dat.gui.module.js"  
        }
    }
<\/script>`) +

  ` 
    <link rel="stylesheet" type="text/css" href="${HOST}css/ui.css" />
  <link rel="stylesheet" type="text/css" href="${HOST}js/Cesium1.102/Widgets/widgets.css" />
 
    ${t === 'Cesium.js案例' ? 'window.CESIUM_BASE_URL = "${HOST}cesium"' : ''}
    ${v} `
