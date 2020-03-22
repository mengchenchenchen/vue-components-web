function mapFactory(list) {
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no, width=device-width"
        />
        <title>简单路径</title>
        <style>
          html,
          body,
          #container {
            width: 100%;
            height: 100%;
            margin: 0px;
          }
        </style>
      </head>
    
      <body>
        <div id="container"></div>
        <script src="https://webapi.amap.com/maps?v=1.4.15&key=855b40e3566cb2b1e84ba5d13d294920"></script>
        <script src="https://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
        <script type="text/javascript">
          //创建地图
          var map = new AMap.Map("container", {
            zoom: 4
          });
    
          AMapUI.load(["ui/misc/PathSimplifier", "lib/$"], function(
            PathSimplifier,
            $
          ) {
            if (!PathSimplifier.supportCanvas) {
              alert("当前环境不支持 Canvas！");
              return;
            }
    
            var pathSimplifierIns = new PathSimplifier({
              zIndex: 100,
              //autoSetFitView:false,
              map: map, //所属的地图实例
    
              getPath: function(pathData, pathIndex) {
                return pathData.path;
              },
              getHoverTitle: function(pathData, pathIndex, pointIndex) {
                if (pointIndex >= 0) {
                  //point
                  return (
                    pathData.name +
                    "，点：" +
                    pointIndex +
                    "/" +
                    pathData.path.length
                  );
                }
    
                return pathData.name + "，进度" + pathData.path.length;
              },
              renderOptions: {
                renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
              }
            });
    
            window.pathSimplifierIns = pathSimplifierIns;
    
            //设置数据
            pathSimplifierIns.setData([
              {
                name: "快递路线",
                path: ${list}
              }
            ]);
    
            //对第一条线路（即索引 0）创建一个巡航器
            var navg1 = pathSimplifierIns.createPathNavigator(0, {
              loop: true, //循环播放
              speed: 1000000 //巡航速度，单位千米/小时
            });
    
            navg1.start();
          });
        </script>
      </body>
    </html>
      `;
}
export default mapFactory;
