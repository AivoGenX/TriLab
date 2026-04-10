import { HOST, FILE_HOST } from "./host.js";
export default [
  {
    pid: "application",
    name: "应用场景",
    children: [
      {
        id: "coffeeMug",
        name: "咖啡",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/application/coffeeMug.html",
        image: HOST + "/threeExamples/application/coffeeMug.png",
        meta: {
          title: "咖啡",
          keywords: "three.js,咖啡",
          description: "咖啡",
        },
      },
      {
        id: "modelGLTF2",
        name: "模型效果",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/application/modelGLTF2.html",
        image: HOST + "/threeExamples/application/modelGLTF2.png",
      },
      {
        id: "threeMap",
        name: "地图模型效果",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/application/threeMap.html",
        image: HOST + "/threeExamples/application/threeMap.png",
      },
      {
        id: "earthMask",
        name: "地球过滤效果",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/application/earthMask.html",
        image: HOST + "/threeExamples/application/earthMask.png",
        meta: {
          title: "地球过滤效果",
          keywords: "three.js,地球过滤,EarthMask,球体效果",
          description: "高德影像球体过滤效果示例",
        },
      },
      {
        id: "Loadpointcloud",
        name: "海量点云展示",
        author: "giser2017",
        tag: "热门", // 标签
        bgcolor: "rgb(181, 28, 34)", // 背景颜色
        // 打开连接
        openUrl:
          "https://www.bilibili.com/video/BV1saSgYiE45/?spm_id_from=333.1387.upload.video_card.click&vd_source=c4f59845a24d1be736e894aa163e7d5d",
        image: HOST + "/threeExamples/image/points.png",
        meta: {
          title: "海量点云",
          keywords: "海量点云",
          description: "加载海量点云",
        },
      },
    ],
  },
  //影像地图
  {
    pid: "imageMap",
    name: "影像地图",
    children: [
      {
        id: "gaodeVector",
        name: "高德矢量",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeLayer.png",
        meta: {
          title: "高德矢量",
          keywords: "高德地图,GaodeLayer,矢量地图",
          description: "高德矢量地图图层示例",
        },
      },
      {
        id: "gaodeSatellite",
        name: "高德影像",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeSatelliteLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeSatelliteLayer.png",
        meta: {
          title: "高德影像",
          keywords: "高德地图,GaodeSatelliteLayer,卫星影像",
          description: "高德卫星影像地图图层示例",
        },
      },
      {
        id: "gaodeWater",
        name: "海洋效果",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeWaterLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeWaterLayer.png",
        meta: {
          title: "海洋效果",
          keywords: "高德地图,海洋效果,GaodeWaterLayer,水效果",
          description: "高德水效果地图图层示例，展示海洋效果",
        },
      },
      {
        id: "gaodeBlack",
        name: "高德黑色地图",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeBlackLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeBlackLayer.png",
        meta: {
          title: "高德黑色地图",
          keywords: "高德地图,黑色地图,GaodeBlackLayer,暗色主题",
          description: "高德黑色地图图层示例，展示暗色主题效果",
        },
      },
      {
        id: "gaodeBlue",
        name: "高德蓝色地图",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeBlueLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeBlueLayer.png",
        meta: {
          title: "高德蓝色地图",
          keywords: "高德地图,蓝色地图,GaodeBlueLayer,蓝色主题",
          description: "高德蓝色地图图层示例，展示蓝色主题效果",
        },
      },
      {
        id: "gaodeGray",
        name: "高德灰色地图",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeGrayLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeGrayLayer.png",
        meta: {
          title: "高德灰色地图",
          keywords: "高德地图,灰色地图,GaodeGrayLayer,灰色主题",
          description: "高德灰色地图图层示例，展示灰色主题效果",
        },
      },
      //GaodeStylesLayer
      {
        id: "gaodeStyles",
        name: "地图样式切换",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/TileMap/GaodeStylesLayer.html",
        image: HOST + "/threeExamples/TileMap/GaodeStylesLayer.png",
        meta: {
          title: "地图样式切换",
          keywords: "高德地图,样式切换,GaodeLayer,地图样式",
          description: "高德地图多种样式切换示例，支持默认、蓝色、灰色等样式",
        },
      },
    ],
  },
  {
    pid: "sceneControl",
    name: "场景设置",
    children: [
      {
        id: "gaodeVectorDebug",
        name: "地图体积光和体积云",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/sceneControl/GaodeLayerGUI.html",
        image: HOST + "/threeExamples/sceneControl/GaodeLayerGUI.png",
        meta: {
          title: "地图体积光和体积云",
          keywords: "高德地图,GaodeLayer,地图,调试",
          description: "高德地图图层调试示例，支持GUI面板参数调整",
        },
      },
      {
        id: "skyBoxLayer",
        name: "天空盒效果",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/sceneControl/SkyBoxLayer.html",
        image: HOST + "/threeExamples/sceneControl/SkyBoxLayer.png",
        meta: {
          title: "天空盒效果",
          keywords: "天空盒,环境效果,SkyBox,场景设置",
          description: "天空盒效果示例，支持晴天和黄昏天空盒切换",
        },
      },
    ],
  },

  {
    pid: "terrain",
    name: "地形影像",
    children: [
      {
        id: "mapboxTerrain",
        name: "MapBox地形",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/Terrain/MapBoxTerrain.html",
        image: HOST + "/threeExamples/Terrain/MapBoxTerrain.png",
        meta: {
          title: "MapBox地形",
          keywords: "MapBox,地形高程,卫星影像,地形地图",
          description: "MapBox地形地图示例，结合卫星影像和地形高程数据",
        },
      },
      {
        id: "mapboxTerrainDebug",
        name: "地形和体积云调试",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/Terrain/MapBoxTerrainLayer.html",
        image: HOST + "/threeExamples/Terrain/MapBoxTerrainLayer.png",
        meta: {
          title: "地形和体积云调试",
          keywords: "MapBox,地形,体积云,调试,GUI控制",
          description: "MapBox地形与体积云调试示例，支持GUI面板参数调整",
        },
      },
    ],
  },
  {
    gid: "",
    gname: "",
    pid: "building",
    name: "建筑物图层",
    children: [
      {
        id: "buildcolor",
        name: "基础颜色",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/building/buildingColor.html",
        image: HOST + "/threeExamples/building/buildingColor.png",
      },
      {
        id: "buildingGradient",
        name: "渐变颜色",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/building/buildingGradient.html",
        image: HOST + "/threeExamples/building/buildingGradient.png",
      },
      {
        id: "buildingTopColor",
        name: "顶部和周围颜色",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/building/buildingTopColor.html",
        image: HOST + "/threeExamples/building/buildingTopColor.png",
      },
      {
        id: "buildingTopMap",
        name: "顶部颜色和材质",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/building/buildingTopMap.html",
        image: HOST + "/threeExamples/building/buildingTopMap.png",
      },
      {
        id: "buildingMap",
        name: "材质",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/building/buildingMap.html",
        image: HOST + "/threeExamples/building/buildingMap.png",
      },
      {
        id: "buildingTopMapColor",
        name: "材质和颜色叠加",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/building/buildingTopMapColor.html",
        image: HOST + "/threeExamples/building/buildingTopMapColor.png",
      },
    ],
  },
  {
    gid: "measure",
    gname: "测量工具",
    pid: "measure",
    name: "测量工具",
    children: [
      {
        id: "measureLine",
        name: "测量工具",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/measure/measureLine.html",
        image: HOST + "/threeExamples/measure/measureLine.png",
        meta: {
          title: "测量工具",
          keywords: "测量工具,点云测量,长度测量,面积测量",
          description:
            "点云测量工具示例，支持点、线、面、角度、高度等多种测量功能",
        },
      },
    ],
  },
  {
    pid: "draw",
    name: "绘制工具",
    children: [
      {
        id: "drawLine",
        name: "绘制工具",
        author: "giser2017",
        tag: "更新中",
        bgcolor: "#ff0000",
        codeUrl: HOST + "",
        image: HOST + "",
        meta: {
          title: "绘制工具",
          keywords: "绘制工具,点云绘制",
          description: "绘制工具示例，结合卫星影像和地形高程数据",
        },
      },
    ],
  },
  // 点要素
  {
    pid: "point",
    name: "点要素",
    children: [
      {
        id: "PointGraphic",
        name: "点要素",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/point/PointGraphic.html",
        image: HOST + "/threeExamples/point/PointGraphic.png",
        meta: {
          title: "点要素",
          keywords: "点要素",
          description: "点要素",
        },
      },
      {
        id: "PointGraphicImg",
        name: "点图片",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/point/PointGraphicImg.html",
        image: HOST + "/threeExamples/point/PointGraphicImg.png",
        meta: {
          title: "点图片",
          keywords: "点图片",
          description: "点图片",
        },
      },
      // PointTextGraphic
      {
        id: "PointTextGraphic",
        name: "点文本",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/point/PointTextGraphic.html",
        image: HOST + "/threeExamples/point/PointTextGraphic.png",
        meta: {
          title: "点文本",
          keywords: "点文本",
          description: "点文本",
        },
      },
    ],
  },

  {
    pid: "polyline",
    name: "线图层",
    children: [
      {
        id: "PolylineGraphic",
        name: "线要素",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polyline/PolylineGraphic.html",
        image: HOST + "/threeExamples/polyline/PolylineGraphic.png",
        meta: {
          title: "线要素",
          keywords: "线要素",
          description: "线要素",
        },
      },
      // PolylineGraphicGUI
      {
        id: "PolylineGraphicGUI",
        name: "线要素GUI",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polyline/PolylineGraphicGUI.html",
        image: HOST + "/threeExamples/polyline/PolylineGraphicGUI.png",
        meta: {
          title: "线要素GUI",
          keywords: "线要素GUI",
          description: "线要素GUI",
        },
      },
      {
        id: "bloomline",
        name: "辉光线",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polyline/bloomline.html",
        image: HOST + "/threeExamples/polyline/bloomline.png",
        meta: {
          title: "辉光线",
          keywords: "辉光线,线图层,发光效果",
          description: "辉光线图层示例，展示发光线条效果",
        },
      },
      {
        id: "bloomline2",
        name: "辉光线+深色地图",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polyline/bloomline2.html",
        image: HOST + "/threeExamples/polyline/bloomline2.png",
        meta: {
          title: "辉光线+深色地图",
          keywords: "辉光线,深色地图,线图层,GUI控制",
          description: "辉光线与深色地图结合示例，支持GUI参数调整",
        },
      },
      {
        id: "extrudeline",
        name: "宽线",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polyline/extrudeline.html",
        image: HOST + "/threeExamples/polyline/extrudeline.png",
        meta: {
          title: "宽线",
          keywords: "宽线,线图层,立体效果",
          description: "宽线图层示例，展示立体线条效果",
        },
      },
      {
        id: "tripline",
        name: "流动线",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polyline/tripline.html",
        image: HOST + "/threeExamples/polyline/tripline.png",
        meta: {
          title: "流动线",
          keywords: "流动线,线图层,动画效果,重庆数据",
          description: "流动线图层示例，展示动态流动线条效果，使用重庆线路数据",
        },
      },
    ],
  },
  // 面要素
  {
    pid: "polygon",
    name: "面要素",
    children: [
      {
        id: "PolygonGraphic",
        name: "面要素",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/polygon/PolygonGraphic.html",
        image: HOST + "/threeExamples/polygon/PolygonGraphic.png",
        meta: {
          title: "面要素",
          keywords: "面要素",
          description: "面要素",
        },
      },
    ],
  },
  // 增加图层分类
  // 地理图层
  {
    pid: "geolayer",
    name: "地理图层",
    children: [
      {
        id: "geolayer",
        name: "GeoLayer基础",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/layer/geolayer.html",
        image: HOST + "/threeExamples/layer/geolayer.png",
        meta: {
          title: "GeoLayer基础",
          keywords: "GeoLayer,地理图层,GeoJSON",
          description: "GeoLayer基础示例，自动加载GeoJSON数据，支持点、线、面几何类型",
        },
      },
      {
        id: "GeoLayerLoad",
        name: "GeoLayer加载",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/layer/GeoLayerLoad.html",
        image: HOST + "/threeExamples/layer/GeoLayerLoad.png",
        meta: {
          title: "GeoLayer加载",
          keywords: "GeoLayer,数据加载,按钮控制",
          description: "GeoLayer数据加载示例，支持按钮控制加载和清除GeoJSON数据",
        },
      },
      {
        id: "GeoLayerPopup",
        name: "GeoLayer弹窗",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/layer/GeoLayerPopup.html",
        image: HOST + "/threeExamples/layer/GeoLayerPopup.png",
        meta: {
          title: "GeoLayer弹窗",
          keywords: "GeoLayer,弹窗,点击事件,特征信息",
          description: "GeoLayer弹窗示例，支持点击事件和特征信息展示，包含丰富的交互功能",
        },
      },
      {
        id: "GraphicLayerBtn",
        name: "图形图层弹窗",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/layer/GraphicLayerBtn.html",
        image: HOST + "/threeExamples/layer/GraphicLayerBtn.png",
        meta: {
          title: "图形图层弹窗",
          keywords: "GraphicLayer,弹窗控制,GeoJSON加载",
          description: "图形图层弹窗示例，支持GeoJSON数据加载和图形管理",
        },
      },
    ],
  },
  {
    gid: "Point_cloud",
    gname: "点云和全景图",
    pid: "Point_cloud",
    name: "点云与全景图",
    children: [
      {
        id: "PointCloudLayer",
        name: "点云加载",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/PointCloud/PointCloudLayer.html",
        image: HOST + "/threeExamples/PointCloud/PointCloudLayer.png",
        meta: {
          title: "点云加载",
          keywords: "点云加载,场景设置",
          description: "点云加载示例，支持场景设置",
        },
      },
      {
        pid: "pointcloud_filter",
        name: "点云过滤分类",
        children: [
          {
            id: "DrawBoxFilter",
            name: "立方体过滤",
            author: "giser2017",
            codeUrl: HOST + "/threeExamples/PointCloud/DrawBoxFilter.html",
            image: HOST + "/threeExamples/PointCloud/DrawBoxFilter.png",
            meta: {
              title: "立方体过滤",
              keywords: "点云过滤,立方体过滤,DrawBoxFilter,空间过滤",
              description: "点云立方体过滤示例，支持空间区域过滤功能",
            },
          },
        ],
      },
    ],
  },
  {
    gid: "effect",
    gname: "效果",
    pid: "effect",
    name: "效果",
    children: [
      {
        id: "bloom",
        name: "辉光和描边效果",
        author: "giser2017",
        codeUrl: HOST + "/threeExamples/effect/bloom.html",
        image: HOST + "/threeExamples/effect/bloom.png",
        meta: {
          title: "辉光和描边效果",
          keywords: "辉光和描边效果,环境效果,Bloom,场景设置",
          description: "辉光和描边效果示例，支持场景设置",
        },
      },
      {
        id: "bloom",
        name: "点云全景图融合",
        tag: "更新中",
        bgcolor: "#ff0000",
        author: "giser2017",
        codeUrl: HOST + "",
        image: HOST + "",
        meta: {
          title: "点云全景图融合",
          keywords: "点云全景图融合,场景设置",
          description: "点云全景图融合示例，支持场景设置",
        },
      },
    ],
  },
  {
    gid: "cesium",
    gname: "Cesium融合",
    pid: "cesium",
    name: "Cesium融合",
    children: [
      {
        id: "cesium",
        name: "Cesium.js融合",
        author: "giser2017",
        codeUrl: HOST + "/",
        image: HOST + "/",
        tag: "更新中",
        bgcolor: "#ff0000",
        meta: {
          title: "Cesium.js融合",
          keywords: "Cesium.js融合,场景设置",
          description: "Cesium.js融合示例，支持场景设置",
        },
      },
    ],
  },
  {
    gid: "three",
    gname: "Three.js融合",
    pid: "three",
    name: "Three.js融合",
    children: [
      {
        id: "three",
        name: "Three.js融合",
        author: "giser2017",
        codeUrl: HOST + "/",
        image: HOST + "/",
        tag: "更新中",
        bgcolor: "#ff0000",
        meta: {
          title: "Cesium.js融合",
          keywords: "Cesium.js融合,场景设置",
          description: "Cesium.js融合示例，支持场景设置",
        },
      },
    ],
  },
];
