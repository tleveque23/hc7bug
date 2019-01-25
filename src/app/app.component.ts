import { Component, OnInit } from '@angular/core';
// noinspection TypeScriptCheckImport
import * as Highcharts from 'highcharts/highstock';
// noinspection TypeScriptCheckImport
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  // noinspection JSUnusedGlobalSymbols
  Highcharts = Highcharts;
  trendChartOptions: any;
  trendUpdate: boolean;

  public ngOnInit(): void {
    this.trendChartOptions = {
      "colors": [
        "#98CB56",
        "#E33C4A",
        "#D1D2D1",
        "#0093B7"
      ],
      "chart": {
        "type": "spline",
        "renderTo": "trendchartContainer",
        "borderWidth": 0,
        "borderRadius": 15,
        "plotBackgroundColor": null,
        "plotShadow": false,
        "plotBorderWidth": 0,
        "marginLeft": 100,
        "marginRight": 100,
        "spacingRight": 100
      },
      "yAxis": {
        "opposite": true,
        "title": {
          "text": "Résultats (%)",
          "margin": 30,
          "style": {
            "color": "#AAA",
            "font": "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
          }
        },
        "tickInterval": 10,
        "min": 0,
        "max": 110,
        "plotLines": [
          {
            "value": 0,
            "width": 1,
            "color": "#808080"
          }
        ],
        "offset": 10,
        "crosshair": false,
        "alternateGridColor": null,
        "minorTickInterval": null,
        "gridLineColor": "#808080",
        "minorGridLineColor": "#808080",
        "lineWidth": 0,
        "tickWidth": 0,
        "labels": {
          "enable": false,
          "align": "right",
          "style": {
            "color": "#999",
            "fontWeight": "bold"
          }
        }
      },
      "time": {
        "useUTC": false
      },
      "xAxis": {
        "type": "datetime",
        "ordinal": false,
        "dateTimeLabelFormats": {
          "millisecond": "%H:%M:%S",
          "second": "%H:%M:%S",
          "minute": "%H:%M",
          "hour": "%H:%M",
          "day": "%d. %b",
          "week": "%d. %b",
          "month": "%b %y",
          "year": "%Y"
        },
        "minRange": 3600,
        "title": {
          "text": "Temps",
          "style": {
            "color": "#AAA",
            "font": "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
          }
        },
        "plotLines": [
          {
            "value": 0,
            "width": 1,
            "color": "#808080"
          }
        ],
        "gridLineWidth": 0,
        "lineColor": "#999",
        "tickColor": "#999",
        "labels": {
          "enable": false,
          "style": {
            "color": "#999",
            "fontWeight": "bold"
          }
        }
      },
      "exporting": {
        "enabled": true,
        "buttons": {
          "contextButton": {
            "enabled": true,
            "menuItems": [
              "downloadPNG",
              "downloadJPEG",
              "downloadPDF",
              "downloadSVG"
            ],
            "x": 26
          }
        },
        "filename": "Dollarama AQ - 01-DWS (Desktop Product Catalog Chrome EN) 2018-03-07 10:14",
        "scale": 1.5,
        "sourceWidth": 1200,
        "sourceHeight": 400,
        "chartOptions": {
          "chart": {
            "events": {},
            "marginLeft": 115,
            "marginRight": 115,
            "marginTop": 60
          },
          "title": {
            "text": "Dollarama AQ - 01-DWS (Desktop Product Catalog Chrome EN) 2018-03-07 10:14",
            "useHTML": true,
            "style": {
              "color": "#464646",
              "fontWeight": "bold",
              "paddingTop": "30px",
              "fontSize": "14px"
            },
            "widthAdjust": 0
          },
          "credits": {
            "enabled": true,
            "text": "Généré le 2019-01-23 ~ AskidaCT.com"
          },
          "navigator": {
            "outlineColor": "#8b8b8b",
            "maskFill": "rgba(255,255,255,0.1)",
            "series": {
              "lineWidth": 2,
              "lineColor": "rgb(152, 203, 86)",
              "color": "rgb(249,251,252)",
              "fillOpacity": 0.5,
              "dataGrouping": {
                "smoothed": true
              },
              "marker": {
                "enabled": false
              }
            }
          },
          "legend": {
            "x": -10
          },
          "yAxis": {
            "gridLineColor": "#e2e2e2",
            "minorGridLineColor": "rgba(0,255,0,0)",
            "lineWidth": 0,
            "tickWidth": 0
          },
          "rangeSelector": {
            "enabled": true,
            "buttons": [],
            "buttonPosition": {
              "y": -200
            },
            "floating": true,
            "inputPosition": {
              "y": -60,
              "x": 39
            }
          }
        }
      },
      "tooltip": {
        "useHTML": true,
        "shared": true,
        "split": false,
        "borderWidth": 1,
        "style": {
          "color": "#000000"
        },
        "hideDelay": 100,
        "followPointer": true
      },
      "plotOptions": {
        "spline": {
          "lineWidth": 2,
          "states": {
            "hover": {
              "lineWidthPlus": 5
            }
          },
          "marker": {
            "lineColor": "#333",
            "states": {
              "hover": {
                "lineColor": "#333"
              }
            }
          }
        },
        "series": {
          "stickyTracking": true,
          "dateGrouping": {
            "forced": true,
            "smoothed": true
          },
          "point": {
            "events": {}
          },
          "states": {
            "hover": {
              "enabled": true,
              "halo": false,
              "lineWidthPlus": 6
            }
          }
        },
        "line": {
          "dataLabels": {
            "color": "#CCC"
          },
          "marker": {
            "lineColor": "#333"
          }
        },
        "scatter": {
          "marker": {
            "lineColor": "#333"
          }
        },
        "candlestick": {
          "lineColor": "white"
        }
      },
      "legend": {
        "enabled": true,
        "layout": "vertical",
        "align": "left",
        "verticalAlign": "middle",
        "borderWidth": 0,
        "rtl": true,
        "x": -20,
        "itemStyle": {
          "color": "#b3b3b3"
        },
        "itemHoverStyle": {
          "color": "#000000"
        },
        "itemHiddenStyle": {
          "color": "#333"
        }
      },
      "series": [
        {
          "name": "Succès",
          "showInNavigator": true,
          "data": [
            {
              "x": 1520003567642,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 37290,
              "selected": false
            },
            {
              "x": 1520003748457,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 37853,
              "selected": false
            },
            {
              "x": 1520003919746,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 38416,
              "selected": false
            },
            {
              "x": 1520004174684,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 38979,
              "selected": false
            },
            {
              "x": 1520004571289,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 39542,
              "selected": false
            },
            {
              "x": 1520005029398,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 40105,
              "selected": false
            },
            {
              "x": 1520005247531,
              "y": 56.25,
              "name": "Success",
              "total": 16,
              "id": 40668,
              "selected": false
            },
            {
              "x": 1520012958373,
              "y": 56.25,
              "name": "Success",
              "total": 16,
              "id": 41599,
              "selected": false
            },
            {
              "x": 1520016739383,
              "y": 56.25,
              "name": "Success",
              "total": 16,
              "id": 41927,
              "selected": false
            },
            {
              "x": 1520252933896,
              "y": 37.5,
              "name": "Success",
              "total": 16,
              "id": 44702,
              "selected": false
            },
            {
              "x": 1520253403972,
              "y": 37.5,
              "name": "Success",
              "total": 16,
              "id": 45117,
              "selected": false
            },
            {
              "x": 1520254108900,
              "y": 37.5,
              "name": "Success",
              "total": 16,
              "id": 45536,
              "selected": false
            },
            {
              "x": 1520262809622,
              "y": 37.5,
              "name": "Success",
              "total": 16,
              "id": 46494,
              "selected": false
            },
            {
              "x": 1520263790226,
              "y": 37.5,
              "name": "Success",
              "total": 16,
              "id": 46984,
              "selected": false
            },
            {
              "x": 1520264104266,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 47535,
              "selected": false
            },
            {
              "x": 1520345750453,
              "y": 31.25,
              "name": "Success",
              "total": 16,
              "id": 56338,
              "selected": false
            },
            {
              "x": 1520347926509,
              "y": 25,
              "name": "Success",
              "total": 16,
              "id": 57480,
              "selected": false
            },
            {
              "x": 1520348126906,
              "y": 31.25,
              "name": "Success",
              "total": 16,
              "id": 58041,
              "selected": false
            },
            {
              "x": 1520349027823,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 59123,
              "selected": false
            },
            {
              "x": 1520349393201,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 59601,
              "selected": false
            },
            {
              "x": 1520349627005,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 60136,
              "selected": false
            },
            {
              "x": 1520349755119,
              "y": 31.25,
              "name": "Success",
              "total": 16,
              "id": 60675,
              "selected": false
            },
            {
              "x": 1520349835657,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 61272,
              "selected": false
            },
            {
              "x": 1520349997699,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 61810,
              "selected": false
            },
            {
              "x": 1520350232964,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 62414,
              "selected": false
            },
            {
              "x": 1520350350551,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 63385,
              "selected": false
            },
            {
              "x": 1520350790673,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 64609,
              "selected": false
            },
            {
              "x": 1520351536700,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 66313,
              "selected": false
            },
            {
              "x": 1520352031974,
              "y": 31.25,
              "name": "Success",
              "total": 16,
              "id": 66909,
              "selected": false
            },
            {
              "x": 1520352156775,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 67550,
              "selected": false
            },
            {
              "x": 1520352651669,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 68156,
              "selected": false
            },
            {
              "x": 1520353182355,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 68831,
              "selected": false
            },
            {
              "x": 1520353881783,
              "y": 43.75,
              "name": "Success",
              "total": 16,
              "id": 69770,
              "selected": false
            },
            {
              "x": 1520354150853,
              "y": 56.25,
              "name": "Success",
              "total": 16,
              "id": 70308,
              "selected": false
            },
            {
              "x": 1520356345932,
              "y": 56.25,
              "name": "Success",
              "total": 16,
              "id": 70935,
              "selected": false
            },
            {
              "x": 1520357064124,
              "y": 56.25,
              "name": "Success",
              "total": 16,
              "id": 71515,
              "selected": false
            },
            {
              "x": 1520359774576,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 74892,
              "selected": false
            },
            {
              "x": 1520360348076,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 75472,
              "selected": false
            },
            {
              "x": 1520361628857,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 77406,
              "selected": false
            },
            {
              "x": 1520361961354,
              "y": 50,
              "name": "Success",
              "total": 16,
              "id": 78261,
              "selected": false
            },
            {
              "x": 1520363354587,
              "y": 62.5,
              "name": "Success",
              "total": 16,
              "id": 78849,
              "selected": false
            },
            {
              "x": 1520374509023,
              "y": 12.5,
              "name": "Success",
              "total": 16,
              "id": 83467,
              "selected": false
            },
            {
              "x": 1520374707490,
              "y": 62.5,
              "name": "Success",
              "total": 16,
              "id": 83684,
              "selected": false
            },
            {
              "x": 1520376153650,
              "y": 68.75,
              "name": "Success",
              "total": 16,
              "id": 84384,
              "selected": false
            },
            {
              "x": 1520376959628,
              "y": 81.25,
              "name": "Success",
              "total": 16,
              "id": 85148,
              "selected": false
            },
            {
              "x": 1520380754938,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 85938,
              "selected": false
            },
            {
              "x": 1520381684804,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 86716,
              "selected": false
            },
            {
              "x": 1520383070653,
              "y": 12.5,
              "name": "Success",
              "total": 16,
              "id": 87494,
              "selected": false
            },
            {
              "x": 1520383796222,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 87711,
              "selected": false
            },
            {
              "x": 1520384886384,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 88467,
              "selected": false
            },
            {
              "x": 1520385890521,
              "y": 68.75,
              "name": "Success",
              "total": 16,
              "id": 89437,
              "selected": false
            },
            {
              "x": 1520386115360,
              "y": 12.5,
              "name": "Success",
              "total": 16,
              "id": 89223,
              "selected": false
            },
            {
              "x": 1520386737107,
              "y": 68.75,
              "name": "Success",
              "total": 16,
              "id": 90203,
              "selected": false
            },
            {
              "x": 1520387419915,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 90969,
              "selected": false
            },
            {
              "x": 1520387814230,
              "y": 68.75,
              "name": "Success",
              "total": 16,
              "id": 91956,
              "selected": false
            },
            {
              "x": 1520387969148,
              "y": 12.5,
              "name": "Success",
              "total": 16,
              "id": 91742,
              "selected": false
            },
            {
              "x": 1520388421862,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 92742,
              "selected": false
            },
            {
              "x": 1520435670349,
              "y": 75,
              "name": "Success",
              "total": 16,
              "id": 97912,
              "selected": false
            }
          ],
          "marker": {
            "enabled": "enabled",
            "radius": 4,
            "states": {
              "select": {
                "hover": "true",
                "lineWidth": 1,
                "fillColor": "#98CB56",
                "radius": 7
              }
            }
          }
        },
        {
          "showInNavigator": false,
          "data": [
            {
              "x": 1520003567642,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 37290,
              "selected": false
            },
            {
              "x": 1520003748457,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 37853,
              "selected": false
            },
            {
              "x": 1520003919746,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 38416,
              "selected": false
            },
            {
              "x": 1520004174684,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 38979,
              "selected": false
            },
            {
              "x": 1520004571289,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 39542,
              "selected": false
            },
            {
              "x": 1520005029398,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 40105,
              "selected": false
            },
            {
              "x": 1520005247531,
              "y": 43.75,
              "name": "Failed",
              "total": 16,
              "id": 40668,
              "selected": false
            },
            {
              "x": 1520012958373,
              "y": 43.75,
              "name": "Failed",
              "total": 16,
              "id": 41599,
              "selected": false
            },
            {
              "x": 1520016739383,
              "y": 43.75,
              "name": "Failed",
              "total": 16,
              "id": 41927,
              "selected": false
            },
            {
              "x": 1520252933896,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 44702,
              "selected": false
            },
            {
              "x": 1520253403972,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 45117,
              "selected": false
            },
            {
              "x": 1520254108900,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 45536,
              "selected": false
            },
            {
              "x": 1520262809622,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 46494,
              "selected": false
            },
            {
              "x": 1520263790226,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 46984,
              "selected": false
            },
            {
              "x": 1520264104266,
              "y": 0,
              "name": "Failed",
              "total": 16,
              "id": 47535,
              "selected": false
            },
            {
              "x": 1520345750453,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 56338,
              "selected": false
            },
            {
              "x": 1520347926509,
              "y": 18.75,
              "name": "Failed",
              "total": 16,
              "id": 57480,
              "selected": false
            },
            {
              "x": 1520348126906,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 58041,
              "selected": false
            },
            {
              "x": 1520349027823,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 59123,
              "selected": false
            },
            {
              "x": 1520349393201,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 59601,
              "selected": false
            },
            {
              "x": 1520349627005,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 60136,
              "selected": false
            },
            {
              "x": 1520349755119,
              "y": 25,
              "name": "Failed",
              "total": 16,
              "id": 60675,
              "selected": false
            },
            {
              "x": 1520349835657,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 61272,
              "selected": false
            },
            {
              "x": 1520349997699,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 61810,
              "selected": false
            },
            {
              "x": 1520350232964,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 62414,
              "selected": false
            },
            {
              "x": 1520350350551,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 63385,
              "selected": false
            },
            {
              "x": 1520350790673,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 64609,
              "selected": false
            },
            {
              "x": 1520351536700,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 66313,
              "selected": false
            },
            {
              "x": 1520352031974,
              "y": 25,
              "name": "Failed",
              "total": 16,
              "id": 66909,
              "selected": false
            },
            {
              "x": 1520352156775,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 67550,
              "selected": false
            },
            {
              "x": 1520352651669,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 68156,
              "selected": false
            },
            {
              "x": 1520353182355,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 68831,
              "selected": false
            },
            {
              "x": 1520353881783,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 69770,
              "selected": false
            },
            {
              "x": 1520354150853,
              "y": 0,
              "name": "Failed",
              "total": 16,
              "id": 70308,
              "selected": false
            },
            {
              "x": 1520356345932,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 70935,
              "selected": false
            },
            {
              "x": 1520357064124,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 71515,
              "selected": false
            },
            {
              "x": 1520359774576,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 74892,
              "selected": false
            },
            {
              "x": 1520360348076,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 75472,
              "selected": false
            },
            {
              "x": 1520361628857,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 77406,
              "selected": false
            },
            {
              "x": 1520361961354,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 78261,
              "selected": false
            },
            {
              "x": 1520363354587,
              "y": 25,
              "name": "Failed",
              "total": 16,
              "id": 78849,
              "selected": false
            },
            {
              "x": 1520374509023,
              "y": 75,
              "name": "Failed",
              "total": 16,
              "id": 83467,
              "selected": false
            },
            {
              "x": 1520374707490,
              "y": 25,
              "name": "Failed",
              "total": 16,
              "id": 83684,
              "selected": false
            },
            {
              "x": 1520376153650,
              "y": 18.75,
              "name": "Failed",
              "total": 16,
              "id": 84384,
              "selected": false
            },
            {
              "x": 1520376959628,
              "y": 6.25,
              "name": "Failed",
              "total": 16,
              "id": 85148,
              "selected": false
            },
            {
              "x": 1520380754938,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 85938,
              "selected": false
            },
            {
              "x": 1520381684804,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 86716,
              "selected": false
            },
            {
              "x": 1520383070653,
              "y": 75,
              "name": "Failed",
              "total": 16,
              "id": 87494,
              "selected": false
            },
            {
              "x": 1520383796222,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 87711,
              "selected": false
            },
            {
              "x": 1520384886384,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 88467,
              "selected": false
            },
            {
              "x": 1520385890521,
              "y": 18.75,
              "name": "Failed",
              "total": 16,
              "id": 89437,
              "selected": false
            },
            {
              "x": 1520386115360,
              "y": 75,
              "name": "Failed",
              "total": 16,
              "id": 89223,
              "selected": false
            },
            {
              "x": 1520386737107,
              "y": 18.75,
              "name": "Failed",
              "total": 16,
              "id": 90203,
              "selected": false
            },
            {
              "x": 1520387419915,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 90969,
              "selected": false
            },
            {
              "x": 1520387814230,
              "y": 18.75,
              "name": "Failed",
              "total": 16,
              "id": 91956,
              "selected": false
            },
            {
              "x": 1520387969148,
              "y": 75,
              "name": "Failed",
              "total": 16,
              "id": 91742,
              "selected": false
            },
            {
              "x": 1520388421862,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 92742,
              "selected": false
            },
            {
              "x": 1520435670349,
              "y": 12.5,
              "name": "Failed",
              "total": 16,
              "id": 97912,
              "selected": false
            }
          ],
          "allowPointSelect": "true",
          "marker": {
            "enabled": "enabled",
            "symbol": "square",
            "radius": 4,
            "states": {
              "select": {
                "hover": "true",
                "lineWidth": 1,
                "fillColor": "#E33C4A",
                "radius": 7
              }
            }
          },
          "name": "Échec"
        },
        {
          "showInNavigator": false,
          "data": [
            {
              "x": 1520003567642,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 37290,
              "selected": false
            },
            {
              "x": 1520003748457,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 37853,
              "selected": false
            },
            {
              "x": 1520003919746,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 38416,
              "selected": false
            },
            {
              "x": 1520004174684,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 38979,
              "selected": false
            },
            {
              "x": 1520004571289,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 39542,
              "selected": false
            },
            {
              "x": 1520005029398,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 40105,
              "selected": false
            },
            {
              "x": 1520005247531,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 40668,
              "selected": false
            },
            {
              "x": 1520012958373,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 41599,
              "selected": false
            },
            {
              "x": 1520016739383,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 41927,
              "selected": false
            },
            {
              "x": 1520252933896,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 44702,
              "selected": false
            },
            {
              "x": 1520253403972,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 45117,
              "selected": false
            },
            {
              "x": 1520254108900,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 45536,
              "selected": false
            },
            {
              "x": 1520262809622,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 46494,
              "selected": false
            },
            {
              "x": 1520263790226,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 46984,
              "selected": false
            },
            {
              "x": 1520264104266,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 47535,
              "selected": false
            },
            {
              "x": 1520345750453,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 56338,
              "selected": false
            },
            {
              "x": 1520347926509,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 57480,
              "selected": false
            },
            {
              "x": 1520348126906,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 58041,
              "selected": false
            },
            {
              "x": 1520349027823,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 59123,
              "selected": false
            },
            {
              "x": 1520349393201,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 59601,
              "selected": false
            },
            {
              "x": 1520349627005,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 60136,
              "selected": false
            },
            {
              "x": 1520349755119,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 60675,
              "selected": false
            },
            {
              "x": 1520349835657,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 61272,
              "selected": false
            },
            {
              "x": 1520349997699,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 61810,
              "selected": false
            },
            {
              "x": 1520350232964,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 62414,
              "selected": false
            },
            {
              "x": 1520350350551,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 63385,
              "selected": false
            },
            {
              "x": 1520350790673,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 64609,
              "selected": false
            },
            {
              "x": 1520351536700,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 66313,
              "selected": false
            },
            {
              "x": 1520352031974,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 66909,
              "selected": false
            },
            {
              "x": 1520352156775,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 67550,
              "selected": false
            },
            {
              "x": 1520352651669,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 68156,
              "selected": false
            },
            {
              "x": 1520353182355,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 68831,
              "selected": false
            },
            {
              "x": 1520353881783,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 69770,
              "selected": false
            },
            {
              "x": 1520354150853,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 70308,
              "selected": false
            },
            {
              "x": 1520356345932,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 70935,
              "selected": false
            },
            {
              "x": 1520357064124,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 71515,
              "selected": false
            },
            {
              "x": 1520359774576,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 74892,
              "selected": false
            },
            {
              "x": 1520360348076,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 75472,
              "selected": false
            },
            {
              "x": 1520361628857,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 77406,
              "selected": false
            },
            {
              "x": 1520361961354,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 78261,
              "selected": false
            },
            {
              "x": 1520363354587,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 78849,
              "selected": false
            },
            {
              "x": 1520374509023,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 83467,
              "selected": false
            },
            {
              "x": 1520374707490,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 83684,
              "selected": false
            },
            {
              "x": 1520376153650,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 84384,
              "selected": false
            },
            {
              "x": 1520376959628,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 85148,
              "selected": false
            },
            {
              "x": 1520380754938,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 85938,
              "selected": false
            },
            {
              "x": 1520381684804,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 86716,
              "selected": false
            },
            {
              "x": 1520383070653,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 87494,
              "selected": false
            },
            {
              "x": 1520383796222,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 87711,
              "selected": false
            },
            {
              "x": 1520384886384,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 88467,
              "selected": false
            },
            {
              "x": 1520385890521,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 89437,
              "selected": false
            },
            {
              "x": 1520386115360,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 89223,
              "selected": false
            },
            {
              "x": 1520386737107,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 90203,
              "selected": false
            },
            {
              "x": 1520387419915,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 90969,
              "selected": false
            },
            {
              "x": 1520387814230,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 91956,
              "selected": false
            },
            {
              "x": 1520387969148,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 91742,
              "selected": false
            },
            {
              "x": 1520388421862,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 92742,
              "selected": false
            },
            {
              "x": 1520435670349,
              "y": 0,
              "name": "Unscripted",
              "total": 16,
              "id": 97912,
              "selected": false
            }
          ],
          "allowPointSelect": "true",
          "marker": {
            "enabled": "enabled",
            "symbol": "triangle",
            "radius": 4,
            "states": {
              "select": {
                "hover": "true",
                "lineWidth": 1,
                "fillColor": "#D1D2D1",
                "radius": 7
              }
            }
          },
          "name": "Non scripté"
        },
        {
          "showInNavigator": false,
          "data": [
            {
              "x": 1520003567642,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 37290,
              "selected": false
            },
            {
              "x": 1520003748457,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 37853,
              "selected": false
            },
            {
              "x": 1520003919746,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 38416,
              "selected": false
            },
            {
              "x": 1520004174684,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 38979,
              "selected": false
            },
            {
              "x": 1520004571289,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 39542,
              "selected": false
            },
            {
              "x": 1520005029398,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 40105,
              "selected": false
            },
            {
              "x": 1520005247531,
              "y": 0,
              "name": "Skipped",
              "total": 16,
              "id": 40668,
              "selected": false
            },
            {
              "x": 1520012958373,
              "y": 0,
              "name": "Skipped",
              "total": 16,
              "id": 41599,
              "selected": false
            },
            {
              "x": 1520016739383,
              "y": 0,
              "name": "Skipped",
              "total": 16,
              "id": 41927,
              "selected": false
            },
            {
              "x": 1520252933896,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 44702,
              "selected": false
            },
            {
              "x": 1520253403972,
              "y": 50,
              "name": "Skipped",
              "total": 16,
              "id": 45117,
              "selected": false
            },
            {
              "x": 1520254108900,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 45536,
              "selected": false
            },
            {
              "x": 1520262809622,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 46494,
              "selected": false
            },
            {
              "x": 1520263790226,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 46984,
              "selected": false
            },
            {
              "x": 1520264104266,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 47535,
              "selected": false
            },
            {
              "x": 1520345750453,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 56338,
              "selected": false
            },
            {
              "x": 1520347926509,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 57480,
              "selected": false
            },
            {
              "x": 1520348126906,
              "y": 56.25,
              "name": "Skipped",
              "total": 16,
              "id": 58041,
              "selected": false
            },
            {
              "x": 1520349027823,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 59123,
              "selected": false
            },
            {
              "x": 1520349393201,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 59601,
              "selected": false
            },
            {
              "x": 1520349627005,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 60136,
              "selected": false
            },
            {
              "x": 1520349755119,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 60675,
              "selected": false
            },
            {
              "x": 1520349835657,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 61272,
              "selected": false
            },
            {
              "x": 1520349997699,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 61810,
              "selected": false
            },
            {
              "x": 1520350232964,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 62414,
              "selected": false
            },
            {
              "x": 1520350350551,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 63385,
              "selected": false
            },
            {
              "x": 1520350790673,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 64609,
              "selected": false
            },
            {
              "x": 1520351536700,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 66313,
              "selected": false
            },
            {
              "x": 1520352031974,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 66909,
              "selected": false
            },
            {
              "x": 1520352156775,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 67550,
              "selected": false
            },
            {
              "x": 1520352651669,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 68156,
              "selected": false
            },
            {
              "x": 1520353182355,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 68831,
              "selected": false
            },
            {
              "x": 1520353881783,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 69770,
              "selected": false
            },
            {
              "x": 1520354150853,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 70308,
              "selected": false
            },
            {
              "x": 1520356345932,
              "y": 37.5,
              "name": "Skipped",
              "total": 16,
              "id": 70935,
              "selected": false
            },
            {
              "x": 1520357064124,
              "y": 37.5,
              "name": "Skipped",
              "total": 16,
              "id": 71515,
              "selected": false
            },
            {
              "x": 1520359774576,
              "y": 37.5,
              "name": "Skipped",
              "total": 16,
              "id": 74892,
              "selected": false
            },
            {
              "x": 1520360348076,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 75472,
              "selected": false
            },
            {
              "x": 1520361628857,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 77406,
              "selected": false
            },
            {
              "x": 1520361961354,
              "y": 43.75,
              "name": "Skipped",
              "total": 16,
              "id": 78261,
              "selected": false
            },
            {
              "x": 1520363354587,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 78849,
              "selected": false
            },
            {
              "x": 1520374509023,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 83467,
              "selected": false
            },
            {
              "x": 1520374707490,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 83684,
              "selected": false
            },
            {
              "x": 1520376153650,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 84384,
              "selected": false
            },
            {
              "x": 1520376959628,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 85148,
              "selected": false
            },
            {
              "x": 1520380754938,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 85938,
              "selected": false
            },
            {
              "x": 1520381684804,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 86716,
              "selected": false
            },
            {
              "x": 1520383070653,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 87494,
              "selected": false
            },
            {
              "x": 1520383796222,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 87711,
              "selected": false
            },
            {
              "x": 1520384886384,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 88467,
              "selected": false
            },
            {
              "x": 1520385890521,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 89437,
              "selected": false
            },
            {
              "x": 1520386115360,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 89223,
              "selected": false
            },
            {
              "x": 1520386737107,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 90203,
              "selected": false
            },
            {
              "x": 1520387419915,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 90969,
              "selected": false
            },
            {
              "x": 1520387814230,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 91956,
              "selected": false
            },
            {
              "x": 1520387969148,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 91742,
              "selected": false
            },
            {
              "x": 1520388421862,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 92742,
              "selected": false
            },
            {
              "x": 1520435670349,
              "y": 12.5,
              "name": "Skipped",
              "total": 16,
              "id": 97912,
              "selected": false
            }
          ],
          "allowPointSelect": "true",
          "marker": {
            "enabled": "enabled",
            "symbol": "triangle-down",
            "radius": 4,
            "states": {
              "select": {
                "hover": "true",
                "lineWidth": 1,
                "fillColor": "#0093B7",
                "radius": 7
              }
            }
          },
          "name": "Ignoré"
        }
      ],
      "rangeSelector": {
        "buttons": [
          {
            "type": "month",
            "count": 1,
            "text": "1m"
          },
          {
            "type": "month",
            "count": 3,
            "text": "3m"
          },
          {
            "type": "month",
            "count": 6,
            "text": "6m"
          },
          {
            "type": "ytd",
            "text": "AC"
          },
          {
            "type": "year",
            "count": 1,
            "text": "1an"
          },
          {
            "type": "all",
            "text": "Tous"
          }
        ],
        "buttonTheme": {
          "fill": "#eaeaea",
          "stroke": "#000000",
          "style": {
            "color": "#000"
          },
          "states": {
            "hover": {
              "stroke": "#000000",
              "style": {
                "color": "white"
              }
            },
            "select": {
              "stroke": "#000000",
              "style": {
                "color": "#000"
              }
            }
          }
        },
        "inputStyle": {
          "color": "#000"
        },
        "labelStyle": {
          "color": "#000"
        },
        "inputBoxWidth": 100,
        "inputPosition": {
          "x": 53
        },
        "selected": 0,
        "inputDateFormat": "%Y-%m-%d",
        "inputEditDateFormat": "%Y-%m-%d"
      },
      "navigator": {
        "xAxis": {
          "type": "datetime",
          "dateTimeLabelFormats": {
            "millisecond": "%H:%M:%S",
            "second": "%H:%M:%S",
            "minute": "%H:%M",
            "hour": "%H:%M"
          }
        },
        "height": 35,
        "handles": {
          "borderColor": "#AAA"
        },
        "outlineColor": "#8b8b8b",
        "maskFill": "rgba(0,255,255,0.1)",
        "series": {
          "fillOpacity": 0.5,
          "dataGrouping": {
            "smoothed": true
          },
          "marker": {
            "enabled": false
          }
        }
      },
      "scrollbar": {
        "barBorderColor": "#808080",
        "buttonArrowColor": "#5b5b5b",
        "buttonBorderColor": "#b7b7b7",
        "barBackgroundColor": "#eaeaea"
      },
      "legendBackgroundColor": "rgba(48, 48, 48, 0.8)",
      "legendBackgroundColorSolid": "rgb(70, 70, 70)",
      "dataLabelsColor": "#444",
      "textColor": "#E0E0E0",
      "maskColor": "rgba(255,255,255,0.3)",
      "credits": {
        "enabled": false
      }
    };

    this.trendUpdate = true;
  }
}
