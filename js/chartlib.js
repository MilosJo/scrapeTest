var PhrasesSettings = {
    "Jan": "Jan",
    "Feb": "Feb",
    "Mar": "Mar",
    "Apr": "Apr",
    "May": "May",
    "Jun": "Jun",
    "Jul": "Jul",
    "Aug": "Aug",
    "Sep": "Sep",
    "Oct": "Oct",
    "Nov": "Nov",
    "Dec": "Dec",
    "LoadingText": "Loading"
}

var MarkerDisplay = { "Releases": "P", "Calendar": "E", "RNS": "N", "Dividend": "D", "Reports": "R" }
var AnalysisColor = {
    "MovingAverage": "",
    "Momentum": "",
    "TotalReturn": ""
}

var ChartData = {
    Loading: 0,
    Intraday: { MainData: null, VolumeData: null, NavigatorData: null, CloseValue: null, ComparisonsDatas: [] },
    History: { MainData: null, VolumeData: null, NavigatorData: null, DailyChangeData: null, CloseValue: null, MainFirstPrice: null, ComparisonsDatas: [], FirstLastData: [] },
    Analysis: { show_momentum: null, Momentum: null, MomentumPeriod: null, show_MACustomData: null, MACustomData: null, MACustomPeriod: null, show_totalreturn: null, TotalReturn_DividendData: null },
    Markers: { show_release: null, releases: null, show_calendars: null, calendars: null, show_dividends: null, dividends: null, show_rns: null, rns: null, show_reports: null, reports: null },
    hasCacheComparison: function (b, d, e, a) {
        var obj;
        if (tickerSettings.currentTab == 'today') {
            obj = this.Intraday;
        }
        else {
            obj = this.History;
        }
        if (a !== null && a !== undefined) {
            for (var c = 0; c < obj.ComparisonsDatas.length; c++) {
                var f = obj.ComparisonsDatas[c];
                if (f.did === b && f.cInstrumentId === a) {
                    return true
                }
            }
            return false
        } else {
            for (var c = 0; c < obj.ComparisonsDatas.length; c++) {
                var f = obj.ComparisonsDatas[c];
                if (f.did == b && f.isin == d && f.marketid == e) {
                    return true
                }
            }
            return false
        }
    },
    getCacheComparisonByName: function (ticker) {
        var obj;
        if (tickerSettings.currentTab == 'today') {
            obj = this.Intraday;
        }
        else {
            obj = this.History;
        }
        for (var b = 0; b < obj.ComparisonsDatas.length; b++) {
            var c = obj.ComparisonsDatas[b];
            if (c.name == ticker) {
                return c.data
            }
        }
        return null
    },
    addCacheComparison: function (ticker, compdata) {
        var obj;
        if (tickerSettings.currentTab == 'today') {
            obj = this.Intraday;
        }
        else {
            obj = this.History;
        }
        var f = {
            name: ticker,
            data: compdata
        };
        obj.ComparisonsDatas.push(f)
    },
    emptyData: function () {
        this.Intraday = null;
        this.Intraday = { MainData: null, VolumeData: null, NavigatorData: null, CloseValue: null, ComparisonsDatas: [] };
        this.History = null;
        this.History = { MainData: null, VolumeData: null, NavigatorData: null, CloseValue: null, DailyChangeData: null, MainFirstPrice: null, ComparisonsDatas: [], FirstLastData: [] };
        this.Analysis = null;
        this.Analysis = { show_momentum: null, Momentum: null, MomentumPeriod: null, show_MACustomData: null, MACustomData: null, MACustomPeriod: null, show_totalreturn: null, TotalReturn_DividendData: null };
        this.Markers = null;
        this.Markers = { show_release: null, releases: null, show_calendars: null, calendars: null, show_dividends: null, dividends: null, show_rns: null, rns: null, show_reports: null, reports: null };
    }
};

var tickerSettings = {
    currentTab: null,
    ticker: null,
    period: null,
    useIntradayTimezone: null
};
function isMobile() {
    try { document.createEvent("TouchEvent"); return true; }
    catch (e) { return false; }
}
function LoadSettings(MainTicker) {
    tickerSettings.currentTab = $j(".hdnSelectedTab").val(),
    tickerSettings.period = $j(".hdnSelected").val(),
    tickerSettings.ticker = MainTicker
    tickerSettings.useIntradayTimezone = UseTimezoneForIntraday;
}

function LoadChart() {
    if (term_TooltipTitle != "")
        MarkerDisplay = $j.parseJSON(term_TooltipTitle);
    LoadSettings($j("input[name='" + $j(".hdnSelectedShare").val() + "']").val());
    if (tickerSettings.currentTab != 'today') {
        //TODO: For HistoryData
        if (ChartData.History.MainData && ChartData.History.VolumeData && ChartData.History.NavigatorData) {
            //TODO: Get Data from Cache
            CallCreateChart();
        }
        else {
            GetDataAjax();
        }
    }
    else {
        //TODO: For IntradayData
        if (ChartData.Intraday.MainData && ChartData.Intraday.VolumeData && ChartData.Intraday.NavigatorData) {
            //TODO: Get Data from Cache
            CallCreateChart();
            doNavigatorAction(null, false);
            HighStockSetting_CommitChange();
            HighStockSetting_PeriodHighLow();
            HighStockSetting_CommitChange();
        }
        else {
            GetIntradayData();
        }
    }
}
function ChangeMainDataToTimezone(objReturn) {
    var objData = [];
    var objVolume = [];
    //TODO: MainChartTimeStamp
    if (!tickerSettings.useIntradayTimezone && objReturn.length > 0 && MainChartTimeStamp != "" && MainChartTimeStamp != "0") {
        var TimeStamp = Number(MainChartTimeStamp);
        var Time;
        for (var index = 0, num = objReturn.length; index < num; index++) {
            Time = objReturn[index][0] + TimeStamp;
            objData.push([Time, objReturn[index][1]]);
            objVolume.push([Time, objReturn[index][2]]);
        }
    }
    else if (objReturn.length > 0) {
        for (var index = 0, num = objReturn.length; index < num; index++) {
            objData.push([objReturn[index][0], objReturn[index][1]]);
            objVolume.push([objReturn[index][0], objReturn[index][2]]);
        }
    }
    return { Data: objData, Volume: objVolume };
}
function ChangeDataToTimezone(objReturn) {
    if (typeof objHighStockchart == 'undefined' || ChartData.Intraday.MainData == null)
        return objReturn;
    var extr = objHighStockchart.series[0].xAxis.getExtremes();
    var min = extr.min;
    var max = extr.max;
    var objData = [];
    if (!tickerSettings.useIntradayTimezone && ChartData.Intraday.MainData.length > 0 && MainChartTimeStamp != "" && MainChartTimeStamp != "0") {
        var TimeStamp = Number(MainChartTimeStamp);
        for (var index = 0, num = objReturn.length; index < num; index++) {
            var ts = objReturn[index][0] + TimeStamp;
            if (ts >= min && ts <= max)
                objData.push([ts, objReturn[index][1]]);
        }
    }
    else if (objReturn.length > 0) {
        for (var index = 0, num = objReturn.length; index < num; index++) {
            var ts = objReturn[index][0];
            if (ts >= min && ts <= max)
                objData.push([ts, objReturn[index][1]]);
        }
    }
    return objData;
}
function LoadShareTypeData(symbol) {
    LoadPeerData(symbol);
}
function LoadPeerData(symbol) {
    if (tickerSettings.currentTab == 'today') {
        var iData = [];
        iData = ChartData.getCacheComparisonByName(symbol);
        if (iData != null) {
            CreatePeerDataSeries(symbol, iData);
            doNavigatorAction(null, false);
        }
        else {
            iData = [];
            URL = ShortUrl + "IntradayDataForChart.ashx?symbol=" + symbol + "&WithVolume=true&IsMain=true&address=" + getUniqueClientURL();
            var nocache = getParameterByName('nocache');
            if (nocache != '')
                URL += "&nocache=" + nocache;
            $j.getJSON(URL, function (intraDayData) {
                var iData = intraDayData.Data;
                if (iData == "" || iData === null || iData === undefined) {
                    //TODO: show no Data
                }
                else {
                    iData = eval("(" + iData + ")");
                    var obj = ChangeDataToTimezone(iData);
                    ChartData.addCacheComparison(symbol, obj);
                    CreatePeerDataSeries(symbol, obj);
                    doNavigatorAction(null, true);
                }
            });

            //$j.ajax({
            //    cache: false,
            //    url: URL,
            //    data: "{}",
            //    type: "GET",
            //    async: false,
            //    contentType: "application/json",
            //    dataType: "json",
            //    error: function (request, error) {
            //        alert("GetData - " + error);
            //    },
            //    success: function (intraDayData) {
            //        var iData = intraDayData.Data;
            //        if (iData == "" || iData === null || iData === undefined) {
            //            //TODO: show no Data
            //        }
            //        else {
            //            iData = eval("(" + iData + ")");
            //            var obj = ChangeDataToTimezone(iData);
            //            ChartData.addCacheComparison(symbol, obj);
            //            CreatePeerDataSeries(symbol, obj);
            //            doNavigatorAction(null, true);
            //        }
            //    }
            //    , beforeSend: setHeader
            //});
        }
    }
    else {
        var hisData = [];
        hisData = ChartData.getCacheComparisonByName(symbol);
        if (hisData != null) {
            CreatePeerDataSeries(symbol, hisData);
            doNavigatorAction(null, false);
        }
        else {
            hisData = [];
            URL = ShortUrl + "HistoryDataForChart.ashx?symbol=" + symbol + "&WithVolume=false&IsMain=false&address=" + getUniqueClientURL();
            var nocache = getParameterByName('nocache');
            if (nocache != '')
                URL += "&nocache=" + nocache;
            $j.getJSON(URL, function (historyData) {
                var hData = historyData.Data;
                if (hData == "" || hData === null || hData === undefined) {
                    //TODO: show no Data
                }
                else {
                    hData = eval("(" + hData + ")");
                    $j.each(hData, function (key, value) {
                        var arr = value.toString().split(",");

                        if (arr[0] >= ChartData.History.MainData[0][0]) {
                            var dt = Number(arr[0]);
                            hisData.push([dt, parseFloat(arr[1])]);
                        }
                    });
                    ChartData.addCacheComparison(symbol, hisData);
                    //TODO: Store data to cache
                    CreatePeerDataSeries(symbol, hisData);
                    doNavigatorAction(null, true);
                }
            });
            //$j.ajax({
            //    cache: false,
            //    url: URL,
            //    data: "{}",
            //    type: "GET",
            //    async: false,
            //    contentType: "application/json",
            //    dataType: "json",
            //    error: function (request, error) {
            //        alert("GetData - " + error);
            //    },
            //    success: function (historyData) {
            //        var hData = historyData.Data;
            //        if (hData == "" || hData === null || hData === undefined) {
            //            //TODO: show no Data
            //        }
            //        else {
            //            hData = eval("(" + hData + ")");
            //            $j.each(hData, function (key, value) {
            //                var arr = value.toString().split(",");

            //                if (arr[0] >= ChartData.History.MainData[0][0]) {
            //                    var dt = Number(arr[0]);
            //                    hisData.push([dt, parseFloat(arr[1])]);
            //                }
            //            });

            //            ChartData.addCacheComparison(symbol, hisData);
            //            //TODO: Store data to cache
            //            CreatePeerDataSeries(symbol, hisData);
            //            doNavigatorAction(null, true);
            //        }
            //    }
            //, beforeSend: setHeader
            //});
        }
    }
}
function LoadIndicesData(symbol) {
    if (tickerSettings.currentTab == 'today') {
        var iData = [];
        iData = ChartData.getCacheComparisonByName(symbol);
        if (iData != null) {
            CreateIndicesDataSeries(symbol, iData);
            doNavigatorAction(null, false);
        }
        else {
            iData = [];
            URL = ShortUrl + "IntradayDataForChart.ashx?symbol=" + symbol + "&WithVolume=true&IsMain=true&address=" + getUniqueClientURL();
            var nocache = getParameterByName('nocache');
            if (nocache != '')
                URL += "&nocache=" + nocache;
            $j.getJSON(URL, function (intraDayData) {
                iData = intraDayData.Data;
                if (iData == "" || iData === null || iData === undefined) {
                    //TODO: show no Data
                }
                else {
                    iData = eval("(" + iData + ")");
                    var obj = ChangeDataToTimezone(iData);
                    ChartData.addCacheComparison(symbol, obj);
                    CreateIndicesDataSeries(symbol, obj);
                    doNavigatorAction(null, true);
                }
            });
            //$j.ajax({
            //    cache: false,
            //    url: URL,
            //    data: "{}",
            //    type: "GET",
            //    async: false,
            //    contentType: "application/json",
            //    dataType: "json",
            //    error: function (request, error) {
            //        alert("GetData - " + error);
            //    },
            //    success: function (intraDayData) {
            //        iData = intraDayData.Data;
            //        if (iData == "" || iData === null || iData === undefined) {
            //            //TODO: show no Data
            //        }
            //        else {
            //            iData = eval("(" + iData + ")");
            //            var obj = ChangeDataToTimezone(iData);
            //            ChartData.addCacheComparison(symbol, obj);
            //            CreateIndicesDataSeries(symbol, obj);
            //            doNavigatorAction(null, true);
            //        }
            //    }
            //, beforeSend: setHeader
            //});
        }
    }
    else {
        var hisData = [];
        hisData = ChartData.getCacheComparisonByName(symbol);
        if (hisData != null) {
            CreateIndicesDataSeries(symbol, hisData);
            doNavigatorAction(null, false);
        }
        else {
            hisData = [];
            URL = ShortUrl + "HistoryDataForChart.ashx?symbol=" + symbol + "&WithVolume=false&IsMain=false&address=" + getUniqueClientURL();
            var nocache = getParameterByName('nocache');
            if (nocache != '')
                URL += "&nocache=" + nocache;
            $j.getJSON(URL, function (historyData) {
                var hData = historyData.Data;
                if (hData == "" || hData === null || hData === undefined) {
                    //TODO: show no Data
                }
                else {
                    hData = eval("(" + hData + ")");
                    $j.each(hData, function (key, value) {
                        var arr = value.toString().split(",");

                        if (arr[0] >= ChartData.History.MainData[0][0]) {
                            var dt = Number(arr[0]);
                            hisData.push([dt, parseFloat(arr[1])]);
                        }
                    });
                    ChartData.addCacheComparison(symbol, hisData);
                    //TODO: Store data to cache
                    CreateIndicesDataSeries(symbol, hisData);
                    doNavigatorAction(null, true);
                }
            });
            //$j.ajax({
            //    cache: false,
            //    url: URL,
            //    data: "{}",
            //    type: "GET",
            //    async: false,
            //    contentType: "application/json",
            //    dataType: "json",
            //    error: function (request, error) {
            //        alert("GetData - " + error);
            //    },
            //    success: function (historyData) {
            //        var hData = historyData.Data;
            //        if (hData == "" || hData === null || hData === undefined) {
            //            //TODO: show no Data
            //        }
            //        else {
            //            hData = eval("(" + hData + ")");
            //            $j.each(hData, function (key, value) {
            //                var arr = value.toString().split(",");

            //                if (arr[0] >= ChartData.History.MainData[0][0]) {
            //                    var dt = Number(arr[0]);
            //                    hisData.push([dt, parseFloat(arr[1])]);
            //                }
            //            });
            //            ChartData.addCacheComparison(symbol, hisData);
            //            //TODO: Store data to cache
            //            CreateIndicesDataSeries(symbol, hisData);
            //            doNavigatorAction(null, true);
            //        }
            //    }
            //, beforeSend: setHeader
            //});
        }
    }
}
function getAppPath() {
    var URL = window.location.href;
    URL = (URL.indexOf("#") > -1) ? URL.replace("#", "") : URL;
    var QueryString = "";
    if (URL != "" && URL.indexOf("?") > -1) {
        var res = URL.split('?');
        URL = res[0];
        QueryString = res[1];
    }
    var subUrl = URL.toLowerCase().split('clients');
    return subUrl[1];
}

function getUniqueClientURL() {
    var Url = getAppPath();
    var Result = Url.split('/');
    var ReturnURL = 'clients/';
    $j.each(Result, function (key, value) {
        if (value != "" && value != null && !(value.indexOf("(") > -1 || value.indexOf(")") > -1)) {
            ReturnURL = ReturnURL + value;
            if (!(key == Result.length - 1))
                ReturnURL += "/";
        }
    });
    if (typeof ReturnURL == "undefined" || ReturnURL == "" || ReturnURL == null)
        ReturnURL = window.location.href;
    return ReturnURL;
}

function LoadDividendData(symbol, min, max) {
    URL = ShortUrl + "DividendData.aspx?appPath=/Clients" + getAppPath() + "&symbol=" + symbol + "&MarkerType=rss_dividends&address=" + getUniqueClientURL();

    $j.ajax({
        cache: false,
        url: URL,
        data: "{}",
        type: "GET",
        async: false,
        contentType: "application/json",
        dataType: "json",
        error: function (request, error) {
            //alert("GetData - " + error);
        },
        success: function (marker) {
            var arr = [];
            var markerData = [], pubDate;
            $j.each(marker.Data, function (key, value) {//s,t
                if (value == "") {
                    return false
                }
                arr.push({
                    x: value.date,
                    realX: value.date,
                    title: getMarkerDisplay('dividends'),
                    text: 'Dividends',
                    link: value.Link
                });
            });
            ChartData.Analysis.TotalReturn_DividendData = TotalReturn_Data(arr, min, max);
            CreateTotalReturnSeries(symbol, ChartData.Analysis.TotalReturn_DividendData);
            doNavigatorAction(null, false);
            HighStockSetting_CommitChange();
        }
        //, beforeSend: setHeader
    });
}
function RemoveShareData(Symbol) {
    if (Symbol == "momentum")
        ChartData.Analysis.show_momentum = false;
    if (objHighStockchart != null && objHighStockchart.series != null) {
        $j.each(objHighStockchart.series, function (index) {
            if (objHighStockchart.series[index] != null) {
                if (index != 0 && objHighStockchart.series[index].options.id == Symbol) {
                    objHighStockchart.series[index].remove(false);
                }
            }
        });
    }
}
function RemoveSeries(name) {
    if (objHighStockchart != null && objHighStockchart.series != null) {
        $j.each(objHighStockchart.series, function (index) {
            if (objHighStockchart.series[index] != null) {
                if (index != 0 && objHighStockchart.series[index].name == name) {
                    objHighStockchart.series[index].remove(false);
                }
            }
        });
    }
}
function CreateIndicesDataSeries(symbol, hisData) {
    var conf = GetChartData(symbol);
    if (tickerSettings.currentTab == 'history') {
        var objIndicesData = {
            type: "line", id: symbol + '_indices', name: conf.ShareName, color: conf.ShareColor, zIndex: 50, data: hisData, yAxis: 0, dataGrouping: {
                enabled: getEnabledDataGrouping(),
                units: getDataGrouping(),
                forced: getEnabledDataGrouping(),
                groupPixelWidth: 10,
                approximation: 'open'
            }
        };
    }
    else {
        var objIndicesData = {
            type: "line", id: symbol + '_indices', name: conf.ShareName, color: conf.ShareColor, zIndex: 50, data: hisData, yAxis: 0
        };
    }
    if (CheckSeletedState(symbol))
        objHighStockchart.addSeries(objIndicesData, false);
}
function CreatePeerDataSeries(symbol, hisData) {
    var conf = GetChartData(symbol);
    if (tickerSettings.currentTab == 'history') {
        var objPeerData = {
            type: "line", id: symbol + '_peer', name: conf.ShareName, color: conf.ShareColor, zIndex: 50, data: hisData, yAxis: 0, dataGrouping: {
                enabled: getEnabledDataGrouping(),
                units: getDataGrouping(),
                forced: getEnabledDataGrouping(),
                groupPixelWidth: 10,
                approximation: 'open'
            }
        };
    }
    else {
        var objPeerData = {
            type: "line", id: symbol + '_peer', name: conf.ShareName, color: conf.ShareColor, zIndex: 50, data: hisData, yAxis: 0
        };
    }

    if (CheckSeletedState(symbol)) {
        if (parseInt(objHighStockchart.series[0].points.length) > 0) {
            objHighStockchart.addSeries(objPeerData, false);
        }
    }
}
function GetIntradayData() {
    URL = ShortUrl + "IntradayDataForChart.ashx?symbol=" + tickerSettings.ticker + "&WithVolume=true&IsMain=true&address=" + getUniqueClientURL();
    var nocache = getParameterByName('nocache');
    if (nocache != '')
        URL += "&nocache=" + nocache;
    $j.ajax({
        cache: false,
        url: URL,
        data: "{}",
        type: "GET",
        async: false,
        contentType: "application/json",
        dataType: "json",
        error: function (request, error) {
            //alert("GetData - " + error);
        },
        success: function (intraDayData) {
            var iData = intraDayData.Data;
            ChartData.Intraday.CloseValue = intraDayData.CloseValue;
            if (iData == "" || iData === null || iData === undefined) {
                //TODO: show no Data
            }
            else {
                iData = eval("(" + iData + ")");
                var obj = ChangeMainDataToTimezone(iData);
                ChartData.Intraday.MainData = obj.Data;
                ChartData.Intraday.VolumeData = obj.Volume;
                ChartData.Intraday.NavigatorData = obj.Data;
                //TODO: Store data to cache
                CallCreateChart();
                doNavigatorAction(null, false);
                HighStockSetting_CommitChange();
                HighStockSetting_PeriodHighLow();
                HighStockSetting_CommitChange();
            }
        }
        //, beforeSend: setHeader
    });
}
function CreateIntradaySeries(symbol, objIntradayData, name) {
    var conf = GetChartData(symbol);
    var intradaySeries = {
        type: "line", id: name, name: name, color: conf.ShareColor, zIndex: 50, data: objIntradayData, yAxis: (name == 'Volume') ? 1 : 0
    };
}
function GetDataAjax() {
    URL = ShortUrl + "HistoryDataForChart.ashx?symbol=" + tickerSettings.ticker + "&WithVolume=true&IsMain=true&address=" + getUniqueClientURL();
    var nocache = getParameterByName('nocache');
    if (nocache != '')
        URL += "&nocache=" + nocache;
    $j.ajax({
        cache: false,
        url: URL,
        data: "{}",
        type: "GET",
        async: false,
        contentType: "application/json",
        dataType: "json",
        error: function (request, error) {
            //alert("GetData - " + error);
        },
        success: function (historyData) {
            if (historyData == "Session Expired") {
                //window.location.reload(true) the browser will skip the cache and reload the page from the server. window.location.reload(false) will do the opposite.The default is false
                //window.location.reload(true);
            }
            else {
                var hData = historyData.Data;
                ChartData.History.CloseValue = historyData.CloseValue;
                if (hData == "" || hData === null || hData === undefined) {
                    //TODO: show no Data
                }
                else {
                    hData = eval("(" + hData + ")");
                    var hisData = [],
                    volData = [],
                    navData = [];
                    $j.each(hData, function (key, value) {

                        var dt = Number(value[0]);
                        hisData.push([dt, parseFloat(value[1]), parseFloat(value[2]), parseFloat(value[3]), parseFloat(value[4])]);
                        volData.push([dt, parseFloat(value[2])]);
                        navData.push([dt, parseFloat(value[1])]);

                    });
                    ChartData.History.DailyChangeData = DailyChange_Data(hisData, 1);
                    ChartData.History.MainData = hisData.slice();
                    ChartData.History.VolumeData = volData.slice();
                    ChartData.History.NavigatorData = navData.slice();
                    //TODO: Store data to cache
                    CallCreateChart();
                }
            }
        }
        //, beforeSend: setHeader
    });
}
function CallCreateChart() {
    //TODO: Check device
    var conf = GetChartData(tickerSettings.ticker);
    Highcharts.setOptions({
        lang: {
            decimalPoint: term_decimalPoint,
            thousandsSep: term_thousandsSep,
            weekdays: term_weekDays,
            months: term_fullmonthName,
            shortMonths: term_monthName
        },
        symbols: ["circle", "circle", "circle", "circle", "circle"]
    });

    Highcharts.dateFormats = {
        '-m': function(timestamp) {
            return (new Date(timestamp)).getUTCMonth() + 1;
        }
    };

    objHighStockchart = new Highcharts.StockChart({
        chart: {
            backgroundColor: backgroundColor,
            plotBackgroundColor: plotBackgroundColor,
            renderTo: 'container', defaultSeriesType: 'spline',
            marginLeft: _marginLeft, marginTop: _marginTop, marginRight: _marginRight, marginBottom: _marginBottom,
            width: (typeof HighStockChartWidth != "undefined" && HighStockChartWidth != "") ? HighStockChartWidth : $j(window).width(),
            plotBorderColor: _plotBorderColor,
            plotBorderWidth: _plotBorderWidth,
            animation: true,
            height: ($j(".hdnSelectedTab").val() == "today") ? chartHeight - Navigator : (LargeChartConfig == true) ? upperChartHeight + lowerChartHeight + Navigator + Margin - ((typeof (ExtraMargin) == 'undefined') ? 25 : ExtraMargin) : chartHeight,
            lang:
          {
              loading: loadingMsg
          },
            loading:
            {
                style: _xaxis_label_style
            },
            title: { text: ' ', style: _chart_title_style },
            panning: false,
            pinchType: (isMobile()) ? 'x' : 'none',
            zoomType: (isMobile()) ? 'none' : 'none',
            selectionMarkerFill: "rgba(69, 114, 167, 0)",
            style: {
                cursor: "pointer"
            }
        },
        ignoreHiddenSeries: false,
        credits: {
            enabled: false
        },
        navigator: {
            height: ($j(".hdnSelectedTab").val() == "today" || LargeChartConfig == true) ? 0 : Navigator,
            enabled: ($j(".hdnSelectedTab").val() == "today" || LargeChartConfig == true) ? false : true,
            id: "navigator-series",
            adaptToUpdatedData: false,
            series: {
                connectNulls: true,
                color: conf.ShareColor,
                name: "navigator",
                data: GetNavigatorData(),
                canSetViewPercent: 0,
                setViewPercented: 0,
                fillOpacity: 0.8,
                lineWidth: 0
            }
        },
        scrollbar: {
            enabled: ($j(".hdnSelectedTab").val() == "today" || LargeChartConfig == true) ? false : true,
            liveRedraw: false
        },
        exporting: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        rangeSelector: {
            enabled: false
        },
        xAxis: {
            tickPixelInterval: 100,
            type: "datetime",
            dateTimeLabelFormats: dateformatlable,
            minRange: ($j(".hdnSelectedTab").val() == "today") ? null : 24 * 60 * 60 * 1000,
            title: {
                text: null,
                style: _xaxis_title_style
            },
            tickLength: 0,
            labels: {
                overflow: false,
                align: "center",
                style: _xaxis_label_style,
                step: _step,
                staggerLines: _staggerLines,
                x: 0
            },
            showLastLabel: (typeof ShowLastLabel != 'undefined') ? ShowLastLabel : true,
            events: {
                afterSetExtremes: function (e) {
                    ChangeExtremes(e);
                }
            },
            ordinal: false,
            gridLineColor: xaxisgridlinecolor,
            gridLineWidth: gridLinewidth,
            lineColor: (_xAxislinecolor == '#FFFFFF' ? '#C0D0E0' : _xAxislinecolor)
        },
        tooltip: {
            shadow: false,
            enabled: _tooltipEnable,
            shared: true,
            useHTML: true,
            borderWidth: 0,
            borderRadius: 0,
            xDateFormat: dateformatTooltip,
            formatter: function () {
                if (!this.points) {//for Markers
                    var s = "";
                    if (!isMobile()) {
                        if (cHighLowData.MinTime != this.point.x && cHighLowData.MaxTime != this.point.x) {
                            //toolTipTimeFormat = Highcharts.dateFormat(dateformatTooltip, Number(this.x));
                            //s = "<div id='htmlTooltip'><b>" + term_Date + "</b> " + toolTipTimeFormat + "<br/>" + this.point.text + "</div>";

                            s = "<div id='htmlTooltip'><b>" + GetMarkerTitle(this.point.type) + "</b><br/>" + this.point.text + "</div>";
                        }
                    }
                    return s;
                }
                else {
                    var FinalMarkertext = "";
                    if ($j(".hdnSelectedTab").val() == "today")
                        toolTipTimeFormat = Highcharts.dateFormat(dateformatTooltipIntraday, this.x);
                    else {
                        toolTipTimeFormat = Highcharts.dateFormat(dateformatTooltip, this.x);
                    }
                    var MainShareName = $j(".MainShare").text();
                    var MainShareSymbol = $j(".MainShare .ShareTypeCheckBox").val();
                    var MainShareCurrency = $j(".MainShare .ShareCurrency").val();
                    if (MainShareCurrency != "")
                        MainShareCurrency = ' (' + MainShareCurrency + ')';
                    var MainShareExist = $j.inArray(MainShareSymbol + $j(".hdnSelectedTab").val(), dataName);
                    var MainShareFirstPoint = 0;
                    var SelectedChartScale = $j(".SelectedChartScale").val().toLowerCase();
                    var SecondarySharePoint = 0;
                    var MainFirst = 1;
                    var secondaryShare = $j('.shareItem.checked').find('.shareItemLabel');
                    var toolTip = InitializeToolTipTemplate(toolTipTimeFormat);
                    var PrimaryFirstTime;
                    var PrimaryLastTime;
                    var MainFirstPoint = GetFirstPrice("main");
                    var DataValueofShare = $j.extend(true, [], dataValue[MainShareExist]);
                    DataValueofShare = ChangeDataToTimezone(DataValueofShare);


                    if ($j(".hdnSelectedTab").val() == "history") {
                        PrimaryFirstTime = $j(".hdnFromDate").val();
                        PrimaryLastTime = $j(".hdnToDate").val();
                    }
                    else if ($j(".hdnSelectedTab").val() == "today") {
                        PrimaryFirstTime = objHighStockchart.xAxis[0].min;
                        PrimaryLastTime = objHighStockchart.xAxis[0].max;
                    }
                    if (SelectedChartScale == "indexed") {
                        MainShareFirstPoint = 100;
                        MainFirst = MainFirstPoint;
                    }
                    else if (SelectedChartScale == "absolute") {
                        MainShareFirstPoint = 1;
                    }
                    else if (SelectedChartScale == "relative") {
                        MainShareFirstPoint = MainFirstPoint;
                        MainFirst = MainShareFirstPoint;
                    }

                    //Replace with actual values
                    toolTip += '<div class="tipshares">';
                    var IsMainAdded = false;
                    if (typeof this.points != 'undefined') {
                        $j.each(this.points, function (i, point) {
                            var arrName = point.series.name.split('|');
                            var seriesId = point.series.options.id;
                            var seriesName = $j.trim(arrName[0]);
                            var currencySymbol = $j.trim(arrName[1]);
                            var FinalPointValue = '-';
                            var SecondaryCurrency = "";
                            var ConvertedHighValue, ConvertedLowValue;
                            var ConvertedHighValueHistory = '-', ConvertedLowValueHistory = '-';
                            if ($j(".hdnSelectedTab").val() == "today") {
                                if (LowValue != "-")
                                    ConvertedLowValue = Highcharts.numberFormat(LowValue, decimalPlace);
                                if (HighValue != "-")
                                    ConvertedHighValue = Highcharts.numberFormat(HighValue, decimalPlace);
                                if (typeof ConvertedHighValueHistory != 'undefined')
                                    ConvertedHighValueHistory = ConvertedHighValue;
                                if (typeof ConvertedLowValue != 'undefined')
                                    ConvertedLowValueHistory = ConvertedLowValue;
                            }
                            else {
                                ConvertedHighValueHistory = Highcharts.numberFormat(CalculateHighForHistory(point.x, GetMainChartData()), decimalPlace);
                                ConvertedLowValueHistory = Highcharts.numberFormat(CalculateLowForHistory(point.x, GetMainChartData()), decimalPlace);
                            }
                            if (seriesName == "main") {
                                toolTip = toolTip.replace('<div class="tipmainchare">' + MainShareName + MainShareCurrency + '</div>' + '<div class="tiptime">' + toolTipTimeFormat + '</div><div class="tipprice"> - </div>', '<div class="tipmainchare">' + MainShareName + MainShareCurrency + '</div>' + '<div class="tiptime">' + toolTipTimeFormat + '</div><div class="tipprice">' + Highcharts.numberFormat(((point.y * MainFirst) / MainShareFirstPoint), decimalPlace) + '</div>');
                                IsMainAdded = true;
                            }
                            else if (seriesName == "Volume" || seriesName == "Daily Change") {
                                if (seriesName == "Volume") {
                                    toolTip = toolTip.replace('<div class="topd1"> - </div><div class="topd2"> - </div><div class="topd3"> - </div></div>', '<div class="topd1">' + ConvertedHighValueHistory + ' </div><div class="topd2">' + ConvertedLowValueHistory + '</div><div class="topd3">' + Highcharts.numberFormat(point.y, 0) + '</div></div>');
                                }
                                if (seriesName == "Daily Change") {
                                    var ValueToDisplay = Highcharts.numberFormat(point.y, decimalPlace) + '%';
                                    toolTip = toolTip.replace('<div class="topd1"> - </div><div class="topd2"> - </div><div class="topd3"> - </div></div>', '<div class="topd1">' + ConvertedHighValueHistory + ' </div><div class="topd2">' + ConvertedLowValueHistory + '</div><div class="topd3">' + ValueToDisplay + '</div></div>');
                                }

                            }
                            else if (seriesId == "totalreturn") {
                                var totalReturnValue = point.y;
                                if (SelectedChartScale != "absolute") {
                                    var SecondaryFirstValue = GetFirstPrice("totalreturn");
                                    totalReturnValue = (totalReturnValue * SecondaryFirstValue) / MainShareFirstPoint;
                                }
                                totalReturnValue = Highcharts.numberFormat(totalReturnValue, decimalPlace);
                                toolTip = toolTip.replace('<div>' + term_TotalReturn + MainShareCurrency + '  ' + "</div></div>", '<div>' + term_TotalReturn + MainShareCurrency + ' : ' + totalReturnValue + "</div></div>");
                            }
                            else if (seriesId == "movingaverage") {
                                FinalPointValue = point.y;
                                if (SelectedChartScale != "absolute")
                                    FinalPointValue = (point.y * MainFirst) / MainShareFirstPoint;
                                toolTip = toolTip.replace('<div>' + term_MovingAveragePeriod + ' (' + MovingAverage + ')' + "</div></div>", '<div>' + term_MovingAveragePeriod + ' (' + MovingAverage + ')' + ' : ' + Highcharts.numberFormat(FinalPointValue, decimalPlace) + "</div></div>");
                            }
                            else if (seriesId == "momentum") {
                                var momentumValue = point.y;
                                if (SelectedChartScale != "absolute") {
                                    var SecondaryFirstValue = GetFirstPrice("momentum");
                                    momentumValue = (momentumValue * SecondaryFirstValue) / MainShareFirstPoint;
                                }
                                momentumValue = Highcharts.numberFormat(momentumValue, decimalPlace) + '%';
                                toolTip = toolTip.replace('<div>' + term_Momentum_Period + ' (' + MomentumPeriod + ')' + "</div></div>", '<div>' + term_Momentum_Period + ' (' + MomentumPeriod + ')' + ' : ' + momentumValue + "</div></div>");
                            }
                            else {
                                if (seriesName != MainShareName && typeof seriesName != "undefined" && seriesName != null && seriesName.trim() != "") {
                                    $j.each(secondaryShare, function (key, value) {
                                        if ($j(this).text() == seriesName)
                                            SecondaryCurrency = $j(this).find(".ShareCurrency").val();
                                    });
                                    if (SecondaryCurrency != "")
                                        SecondaryCurrency = ' (' + SecondaryCurrency + ')';

                                    if (SelectedChartScale != "absolute") {
                                        var sym;
                                        if (seriesId.indexOf("_peer") > 0 || seriesId.indexOf("_indices") > 0) {
                                            var typ = ((seriesId.indexOf("_peer") > 0) ? "_peer" : (seriesId.indexOf("_indices") > 0) ? "_indices" : "")
                                            sym = seriesId.substring(0, seriesId.indexOf(typ));
                                        }
                                        var SecondaryFirstValue = GetFirstPrice(sym);
                                        FinalPointValue = (point.y * SecondaryFirstValue) / MainShareFirstPoint;
                                        toolTip = toolTip.replace(point.series.options.name + SecondaryCurrency + '  ', point.series.options.name + SecondaryCurrency + ' : ' + Highcharts.numberFormat(FinalPointValue, decimalPlace));
                                    }
                                    else {
                                        toolTip = toolTip.replace(point.series.options.name + SecondaryCurrency + '  ', point.series.options.name + SecondaryCurrency + ' : ' + Highcharts.numberFormat(point.y, decimalPlace));
                                    }
                                }
                            }
                        });
                    }

                    toolTip += '</div>';
                    return toolTip;
                }
            },
            valueDecimals: 2,
            style: { fontSize: '11px' },
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b><span style="color:{series.color}">{point.y}</span></b><br/>'
        },
        plotOptions: {
            series: {
                turboThreshold: 10,
                connectNulls: true,
                dataGrouping: {
                    enabled: getEnabledDataGrouping(),
                    units: getDataGrouping(),
                    forced: getEnabledDataGrouping(),
                    groupPixelWidth: 10
                }
            },
            ohlc: {
                lineWidth: 3
            },
            line: {
                zIndex: 1,
                lineWidth: (typeof chartLineWidth != 'undefined') ? chartLineWidth : 1,
                states: {
                    hover: {
                        lineWidth: (typeof chartLineHoverWidth != 'undefined') ? chartLineHoverWidth : 1
                    }
                },
                dataGrouping: {
                    approximation: "close"
                }
            }
        },
        yAxis: [{
            labels: {
                style: _yaxis_label_style,
                formatter: function () {
                    if ($j(".SelectedChartScale").val().toLowerCase() != "indexed") {
                        return Highcharts.numberFormat(this.value / ((typeof yAxisDivisor != "undefined" && yAxisDivisor != "") ? yAxisDivisor : 1), yaxisdecimalPlace) + ((typeof yAxisM != "undefined" && yAxisM != "") ? yAxisM : "")
                    }
                    else { return Highcharts.numberFormat(this.value, yaxisdecimalPlace) }
                },
                align: 'right',
                x: -5
            },
            height: upperChartHeight + Margin - Navigator,
            shadow: false,
            gridLineColor: yaxisgridlinecolor,
            allowDecimals: true,
            title: {
                text: chartCurrencylabel,
                style: _yaxis_title_style
            },
            lineWidth: 1
        }, {
            top: (typeof lowerChartTop != "undefined" && lowerChartTop != "") ? lowerChartTop : 270,
            height: ($j(".hdnSelectedTab").val() == "today") ? lowerChartHeight : lowerChartHeight - Margin,
            labels: {
                style: _y2axis_label_style,
                align: 'right',
                x: -5
            },
            tickPositioner: GetVolumeExtreme,
            opposite: false,
            shadow: false,
            gridLineColor: yaxisgridlinecolor,
            offset: 0,
            lineWidth: 1,
            //viyuta
            title: {
                text: ($j('input:radio[name="AnalysesGroup"]:checked').val().toLowerCase() == 'volume' ? ((typeof ShowVolumeLabel != "undefined" && ShowVolumeLabel == true) ? term_Volume : '') : '%'),
                style: _yaxis_title_style
            },
        }],
        series: [
           {
               type: "line", id: 'main', name: 'main', color: conf.ShareColor, zIndex: 100, data: GetMainChartData(), yAxis: 0
           },
           {
               type: "column", id: 'Volume', turboThreshold: 600000, name: ($j('input:radio[name="AnalysesGroup"]:checked').val().toLowerCase() == 'volume' ? 'Volume' : 'Daily Change'), color: conf.ShareColor, zIndex: 10,
               data: ($j('input:radio[name="AnalysesGroup"]:checked').val().toLowerCase() == 'volume' ? GetVolumeChartData() : GetDailyChangeChartData()), yAxis: 1
           },
           {
               type: "line", onSeries: 'main', id: 'high', name: 'high', yAxis: 0
           },
           {
               type: "line", onSeries: 'main', id: 'low', name: 'low', yAxis: 0
           }
        ]
    });
    if ($j(".hdnSelectedTab").val() == "history") {
        if ($j(".hdnToDate").val() > ChartData.History.MainData[ChartData.History.MainData.length - 1][0])
            $j(".hdnToDate").val(ChartData.History.MainData[ChartData.History.MainData.length - 1][0]);
        ChangePeriod($j(".hdnFromDate").val(), $j(".hdnToDate").val(), "");
    }
    if (LargeChartConfig)
        SetLargeChartTitle();
    if (ShowLoadingScreen == true)
        objHighStockchart.showLoading(loadingMsg);
    else
        objHighStockchart.hideLoading();
    CheckNoData();
}
function GetVolumeExtreme() {
    var positions;
    if ($j('input:radio[name="AnalysesGroup"]:checked').val().toLowerCase() == 'volume') {
        if (typeof this != "undefined" && typeof this.dataMax != "undefined" && this.dataMax != null) {
            var MidNum = Math.ceil((Number(this.dataMax.toString().substring(0, 1)) + 1) / 2);
            var Middle = Number(pad(MidNum, this.dataMax.toString().length));
            var Last = Middle * 2;
            //console.log(Middle + " " + Last);
            if (Last < 1000)
                positions = [0, 500, 1000];
            else
                positions = [0, Middle, Last];
        }
        else {
            positions = null;
        }
        return positions;
    }
}
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad(str + "0", max) : str;
}
function GetCloseValue() {
    if ($j(".hdnSelectedTab").val() == "history") {
        return ChartData.History.CloseValue;
    }
    else {
        return ChartData.Intraday.CloseValue;
    }
}
function GetNavigatorData() {
    if ($j(".hdnSelectedTab").val() == "history") {
        return ChartData.History.NavigatorData;
    }
    else {
        return ChartData.Intraday.NavigatorData;
    }
}
function GetMainChartData() {
    if ($j(".hdnSelectedTab").val() == "history") {
        return ChartData.History.MainData;
    }
    else {
        return ChartData.Intraday.MainData;
    }
}
function GetVolumeChartData() {
    if ($j(".hdnSelectedTab").val() == "history") {
        return ChartData.History.VolumeData;
    }
    else {
        return ChartData.Intraday.VolumeData;
    }
}
function GetDailyChangeChartData() {
    if ($j(".hdnSelectedTab").val() == "history") {
        return ChartData.History.DailyChangeData;
    }
    else {
        return ChartData.Intraday.VolumeData;
    }
}
function SetLargeChartTitle() {
    var From, To; var FromDate, ToDate;
    var Culture = getParameterByName("culture");
    if ($j(".hdnSelectedTab").val() == "history") {
        FromDate = $j("#from").val();
        ToDate = $j("#to").val();
    }
    else {
        From = parseInt(objHighStockchart.xAxis[0].min);
        To = parseInt(objHighStockchart.xAxis[0].max);
        var dtFromDate = new Date(From);
        var dtToDate = new Date(To);
        var FromDate, ToDate;

        var dateFormat = $j('#from').datepicker('option', 'dateFormat');

        $j("#from").datepicker("option", $j.datepicker.regional[Culture]);
        $j("#to").datepicker("option", $j.datepicker.regional[Culture]);
        $j("#from").datepicker("setDate", dtFromDate);
        $j("#to").datepicker("setDate", dtToDate);

        if (dateFormat.indexOf("MM") > -1)
            dateFormat = dateFormat.replace(/M/g, "MM");
        else if (dateFormat.indexOf("M") > -1)
            dateFormat = dateFormat.replace(/M/g, "MMM");
        dateFormat = dateFormat.replace(/m/g, "M");
        dateFormat = dateFormat.replace(/y/g, "yy");
        FromDate = $j("#from").val();
        ToDate = $j("#to").val();
    }

    if (typeof $j("#lblTitle") != "undefined") {
        var Title = $j("#lblTitle").text();
        Title = Title.replace("##FROMDATE##", FromDate).replace("##TODATE##", ToDate);
        $j("#lblTitle").text(Title);
    }
}
function InitializeToolTipTemplate(toolTipTimeFormat) {
    var toolTipTimeFormat;
    var MainShareName = $j(".MainShare").text();
    var MainShareSymbol = $j(".MainShare .ShareTypeCheckBox").val();
    var MainShareCurrency = $j(".MainShare .ShareCurrency").val();
    if (MainShareCurrency != "")
        MainShareCurrency = ' (' + MainShareCurrency + ')';
    var MainShareExist = $j.inArray(MainShareSymbol + $j(".hdnSelectedTab").val(), dataName);
    var MainShareFirstPoint = 0;
    var SelectedChartScale = $j(".SelectedChartScale").val().toLowerCase();
    var SecondarySharePoint = 0;
    var FinalPointValue = "-";
    var ConvertedHighValue, ConvertedLowValue;
    var secondaryShare = $j('.shareItem.checked').find('.shareItemLabel');
    if (LowValue != "-")
        ConvertedLowValue = Highcharts.numberFormat(LowValue, decimalPlace);
    if (HighValue != "-")
        ConvertedHighValue = Highcharts.numberFormat(HighValue, decimalPlace);
    var toolTip = '<div class="tooltip">';
    toolTip += '<div class="tipmainchare">' + MainShareName + MainShareCurrency + '</div>' + '<div class="tiptime">' + toolTipTimeFormat + '</div><div class="tipprice"> - </div>';

    if ($j(".hdnSelectedTab").val() == "history") {
        $j.each(secondaryShare, function (key, value) {

            if ($j(this).hasClass("lower")) {
                if ($j(this).find(".AnalyseCheckBox").val() == "change")
                    toolTip += '<div class="tipdata"><div class="topd1">' + term_High + '</div><div class="topd2">' + term_Low + '</div><div class="topd3">' + term_DailyChange + '</div><div class="topd1"> - </div><div class="topd2"> - </div><div class="topd3"> - </div></div>';
                if ($j(this).find(".AnalyseCheckBox").val() == "volume")
                    toolTip += '<div class="tipdata"><div class="topd1">' + term_High + '</div><div class="topd2">' + term_Low + '</div><div class="topd3">' + term_Volume + '</div><div class="topd1"> - </div><div class="topd2"> - </div><div class="topd3"> - </div></div>';
            }
        });
    }
    else {
        toolTip += '<div class="tipdata"><div class="topd1">' + term_High + '</div><div class="topd2">' + term_Low + '</div><div class="topd3">' + term_Volume + '</div><div class="topd1"> - </div><div class="topd2"> - </div><div class="topd3"> - </div></div>';
    }
    toolTip += '<div class="tipshares">';
    if (ShowClosePriceLine && ($j(".hdnSelectedTab").val() == "today" || (!ClosePriceIntraOnly && $j(".hdnSelectedTab").val() == "history"))) {
		var CloseValue = GetCloseValue();
        if (!isNaN(CloseValue))
            toolTip += '<div class="tipcon"><span style="background:' + ClosePriceLineColor + ';"></span><div>' + term_ClosePriceLine + MainShareCurrency + ' : ' + Highcharts.numberFormat(CloseValue, decimalPlace) + "  </div></div>";
    }
    $j.each(secondaryShare, function (key, value) {
        if (!$j(this).hasClass("lower")) {
            if (typeof $j(this).find(".ShareholderYieldCheckBox").val() != "undefined") {
                toolTip += '<div class="tipcon"><span style="background:' + $j(this).find(".ShareColor").val() + ';"></span><div>' + term_TotalReturn + MainShareCurrency + '  ' + "</div></div>";
            }
            else if (typeof $j(this).find(".TechnicalAnalysisCheckBox").val() != "undefined") {
                if ($j(this).find(".TechnicalAnalysisCheckBox").val() == "movingaverage") {
                    MovingAverage = MovingAverage == null || MovingAverage == 'undefined' || MovingAverage == 0 ? $j(this).find(".period").val() : MovingAverage;
                    toolTip += '<div class="tipcon"><span style="background:' + $j(this).find(".ShareColor").val() + ';"></span><div>' + term_MovingAveragePeriod + ' (' + MovingAverage + ')' + "</div></div>";
                }
                else if ($j(this).find(".TechnicalAnalysisCheckBox").val() == "momentum") {
                    MomentumPeriod = MomentumPeriod == null || MomentumPeriod == 'undefined' || MomentumPeriod == 0 ? $j(this).find(".period").val() : MomentumPeriod;
                    toolTip += '<div class="tipcon"><span style="background:' + $j(this).find(".ShareColor").val() + ';"></span><div>' + term_Momentum_Period + ' (' + MomentumPeriod + ')' + "</div></div>";
                }
            }
            else {
                var OtherShareCurrency = $j(this).find(".ShareCurrency").val();
                if (OtherShareCurrency != "")
                    OtherShareCurrency = ' (' + OtherShareCurrency + ')';
                if ($j(this).text() != MainShareName) {
                    toolTip += '<div class="tipcon"><span style="background:' + $j(this).find(".ShareColor").val() + ';"></span><div>' + $j(this).text() + OtherShareCurrency + '  ' + "</div></div>";
                }
            }
        }
    });
    toolTip += '</div>';
    return toolTip;
}

function getEnabledDataGrouping() {
    if (tickerSettings.currentTab == 'today') {
        return false;
    }
    else {
        var daysDiff = parseInt(days());
        var dataLen = parseInt(ChartData.History.MainData.length);
        if (ChartData.History.MainData === null || ChartData.History.MainData === undefined) {
            return false;
        }
        if (daysDiff <= 365) { //Less then 1 year
            return true;
        }
        else if (daysDiff <= 1095 && dataLen > 650) {//Less then 3 year
            return true;
        }
        else if (daysDiff < 1825 && dataLen > 1125) {//Less then 5 year
            return true;
        }
        else if (daysDiff < 3650 && dataLen > 2250) {//Less then 10 year
            return true;
        }
        else if (daysDiff < 3650 && dataLen > 3375) {//Less then 15 year
            return true;
        }
        else if (daysDiff >= 3650) { //more then 3 year
            return true;
        }
        return true;
    }

    return false
}
function days() {
    var sdate = $j("#from").datepicker('getDate');
    var edate = $j("#to").datepicker('getDate');
    if (sdate != null && edate != null) {
        var FromDate = Highcharts.dateFormat("%Y-%m-%d", Number(sdate) - 24 * 60 * 60);
        var from = sdate.getTime();

        var toDate = Highcharts.dateFormat("%Y-%m-%d", Number(edate) - 24 * 60 * 60);
        var to = edate.getTime();

        var diff = new Date(to - from);
        var days = diff / 1000 / 60 / 60 / 24;
        return days / 7 * 5;
    }
    //var c = (b - a) / 1000 / 60 / 60 / 24;
    return 250;
}
function getDataGrouping() {
    if (tickerSettings.currentTab == 'today') {

    }
    else {
        if (typeof objHighStockchart == 'undefined')
            return;
        var daysDiff = parseInt(days());
        var dataLen = parseInt(ChartData.History.MainData.length);
        if (daysDiff <= 365) { //Less then 1 year
            return [["day", [1]]];
        }
        else if (daysDiff <= 1095 && dataLen > 650) {//Less then 3 year
            return [["day", [3]]];
        }
        else if (daysDiff < 1825 && dataLen > 1125) {//Less then 5 year
            return [["day", [5]]];
        }
        else if (daysDiff < 3650 && dataLen > 2250) {//Less then 10 year
            return [["day", [7]]];
        }
        else if (daysDiff < 3650 && dataLen > 3375) {//Less then 15 year
            return [["day", [10]]];
        }
        else if (daysDiff >= 3650) { //more then 3 year
            return [["day", [20]]];
        }

    }
    return [["day", [1]]];
}
function SetTimeFrame(from, to, ctrl) {
    //ChartData.History.FirstLastData = null;
    //ChartData.History.FirstLastData = [],
    //ChangePeriod(from, to, ctrl);
    //var FromDate = Highcharts.dateFormat("%Y-%m-%d", $j(ctrl).prop("class") == 'all' ? ChartData.History.MainData[0][0] : from);
    //var ToDate = Highcharts.dateFormat("%Y-%m-%d", $j(ctrl).prop("class") == 'all' ? ChartData.History.MainData[ChartData.History.MainData.length - 1][0] : to);
    //UpdateConfig("SetTimezoneOption", "timeHorizons", $j(ctrl).prop("class") + "&FromDate=" + FromDate + "&ToDate=" + ToDate);

    //viyuta
    var FromDate = $j(ctrl).prop("class") == 'all' ? ChartData.History.MainData[0][0] : new Date(Number(from));
    var ToDate = $j(ctrl).prop("class") == 'all' ? ChartData.History.MainData[ChartData.History.MainData.length - 1][0] : new Date(Number(to));
    
    if (FromDate == ToDate) {
        var TempDate = ChartData.History.MainData[0][0] - 86400;
        FromDate = Highcharts.dateFormat("%Y-%m-%d", TempDate);
    }

    SetDate(FromDate, ToDate);
    UpdateChartData(ctrl);
}

function ChangePeriod(from, to, ctrl) {
    if (typeof hs != 'undefined')
        hs.close();
    //ShowLoader();
    if (ctrl != "" && ctrl.id != 'go') {
        $j("." + $j(".hdnSelected").val()).parent().removeClass("selected");
        $j(ctrl).parents("li").addClass("selected");
        $j(".hdnSelected").val($j(ctrl).prop("class"));
    }
    else if (ctrl.id == 'go') {
        //viyuta
        $j("." + $j(".hdnSelected").val()).parent().removeClass("selected");
        $j(".custom").parents("li").addClass("selected");
        $j(".hdnSelected").val("custom");
        $j(".hdnFromDate").val(FromDate);
        $j(".hdnToDate").val(ToDate);
    }
    if ($j(".PeerCheckBox") != null && $j(".PeerCheckBox").length > 0) {
        var PeerCheckBox = $j(".PeerCheckBox");
        PeerCheckBox.each(function () {
            var UseIntraday = $j(this).parents("div .shareItem").find(".ShareUseIntraday").val();
        });
    }
    if ($j(".IndiceCheckBox") != null && $j(".IndiceCheckBox").length > 0) {
        var IndiceCheckBox = $j(".IndiceCheckBox");
        IndiceCheckBox.each(function () {
            var UseIntraday = $j(this).parents("div .shareItem").find(".ShareUseIntraday").val();
        });
    }
    if (from == "all" && to == "all") {
        from = ChartData.History.MainData[0][0];
        to = ChartData.History.MainData[ChartData.History.MainData.length - 1][0];
        var FromDate = Highcharts.dateFormat("%Y-%m-%d", from);
        var ToDate = Highcharts.dateFormat("%Y-%m-%d", to);
        UpdateConfig("SetTimezoneOption", "timeHorizons", "all&FromDate=" + FromDate + "&ToDate=" + ToDate);
    }
    if (to > ChartData.History.MainData[ChartData.History.MainData.length - 1][0])
        to = ChartData.History.MainData[ChartData.History.MainData.length - 1][0];

    HighStockSetting_SetExtremes(from, to);
    if (ChartData.Markers.releases != null && ChartData.Markers.show_release)
        GetMarkerDataForChart(tickerSettings.ticker, "releases", getMarkerDisplay("releases"));
    if (ChartData.Markers.calendars != null && ChartData.Markers.show_calendars)
        GetMarkerDataForChart(tickerSettings.ticker, "calendars", getMarkerDisplay("calendars"));
    if (ChartData.Markers.rns != null && ChartData.Markers.show_rns)
        GetMarkerDataForChart(tickerSettings.ticker, "rns", getMarkerDisplay("rns"));
    if (ChartData.Markers.dividends != null && ChartData.Markers.show_dividends)
        GetMarkerDataForChart(tickerSettings.ticker, "dividends", getMarkerDisplay("dividends"));
    if (ChartData.Markers.reports != null && ChartData.Markers.show_reports)
        GetMarkerDataForChart(tickerSettings.ticker, "reports", getMarkerDisplay("reports"));
    if (ChartData.Analysis.Momentum != null && ChartData.Analysis.show_momentum)
        AddTechnicalAnalysis('momentum', AnalysisColor.Momentum, ChartData.Analysis.MomentumPeriod);
    if (ChartData.Analysis.MACustomData != null && ChartData.Analysis.show_MACustomData)
        AddTechnicalAnalysis('movingaverage', AnalysisColor.MovingAverage, ChartData.MACustomPeriod);
    if (ChartData.Analysis.TotalReturn_DividendData != null && ChartData.Analysis.show_totalreturn) {
        AddTechnicalAnalysis('totalreturn', AnalysisColor.TotalReturn, 1);
    }
    doNavigatorAction(null, false);
    HighStockSetting_CommitChange();
    HighStockSetting_PeriodHighLow();
    HighStockSetting_CommitChange();
}
function CustomPeriod(ctrl) {
    var from = $j("#from");
    var to = $j("#to");
    //alert(from + "-" + to);
    ChangePeriod(from, to, ctrl)
}
function HighStockSetting_SetExtremes(b, c) {
    if (typeof objHighStockchart != 'undefined')
        if (typeof objHighStockchart.xAxis[0] != 'undefined') {
            objHighStockchart.xAxis[0].setExtremes(b, c);
            //TODO:
            if (1 == 1) {
                //HighStockSetting_PeriodHighLow()
            }
        }
}
function IsIntradayGraph() {
    return tickerSettings.period == "1day";
}
function PlotClosePriceLine() {
    if (ShowClosePriceLine && ($j(".hdnSelectedTab").val() == "today" || (!ClosePriceIntraOnly && $j(".hdnSelectedTab").val() == "history"))) {
		RemoveSeries('CloseLine');
		var NewClosePrice = parseFloat(GetCloseValue());
		//Return if close price has no data
		if (isNaN(NewClosePrice)) return;
		
        var SelectedChartScale = $j(".SelectedChartScale").val().toLowerCase();
        if (SelectedChartScale == "indexed") {
            NewClosePrice = getLastClosePrice();
        }
        //else if (SelectedChartScale == "relative") {
        //    NewClosePrice = GetFirstPrice("main");
        //}
        	
		//Return if close price has no data
		if (isNaN(NewClosePrice)) return;
		
        var ext = objHighStockchart.xAxis[0].getExtremes();
        objHighStockchart.addSeries({
            type: 'line', id: 'CloseLine', name: "CloseLine", width: 5, dashStyle: 'dash', color: ClosePriceLineColor,
            data: [[Number(ext.min), NewClosePrice], [Number(ext.max), NewClosePrice]], yAxis: 0, enableMouseTracking: false
        }, false);
    }
}

function getLastClosePrice()
{
    var FirstVal = GetFirstPrice("main");
    var CloseValue = GetCloseValue();

    var newCloseValue = (((CloseValue * 100) / FirstVal));
    return newCloseValue;
}

function HighStockSetting_PeriodHighLow() {
    var MainFirstPoint = GetFirstPrice("main");
    if (typeof objHighStockchart.series[0].points != 'undefined' && objHighStockchart.series[0].points.length > 0) {
        cHighLowData = GetMaxMinDataPoint(objHighStockchart.series[0].points);
        if (typeof cHighLowData != "undefined" && cHighLowData.MaxValue != null && cHighLowData.MaxValue != -Infinity) {
            if ($j(".SelectedChartScale").val().toLowerCase() == "indexed")
                HighValue = (cHighLowData.MaxValue * MainFirstPoint) / 100;
            else
                HighValue = cHighLowData.MaxValue;
        }
        else {
            HighValue = "-";
        }
        if (typeof cHighLowData != "undefined" && cHighLowData.MinValue != null && cHighLowData.MinValue != Infinity) {
            if ($j(".SelectedChartScale").val().toLowerCase() == "indexed")
                LowValue = (cHighLowData.MinValue * MainFirstPoint) / 100;
            else
                LowValue = cHighLowData.MinValue;
        }
        else {
            LowValue = "-";
        }
        //Add Low Flag
        RemoveSeries('low');
        var objlow = {
            type: "scatter", onSeries: 'main', name: 'low', id: 'low', data: [{
                x: cHighLowData.MinTime, y: cHighLowData.MinValue, marker: {
                    enabled: true,
                    symbol: "url(" + LowFlagURL + ")"
                }
            }], yaxis: 0, zIndex: 700000, dataGrouping: { enabled: false, units: getDataGrouping(), forced: false }
        };
        objHighStockchart.addSeries(objlow, false);

        //Add High Flag
        RemoveSeries('high');
        var objhigh = {
            type: "scatter", onSeries: 'main', name: 'high', id: 'high', data: [{
                x: cHighLowData.MaxTime, y: cHighLowData.MaxValue, marker: {
                    enabled: true,
                    symbol: "url(" + HighFlagURL + ")"
                }
            }], yaxis: 0, zIndex: 700000, dataGrouping: { enabled: false, units: getDataGrouping(), forced: false }
        };
        objHighStockchart.addSeries(objhigh, false);
    }
}
function HighStockSetting_FormatNumber(value, decimal) {
    if (value != null)
        return value.toFixed(decimal);
}
function getMaxMin(a, g, b, c, h) {
    if (a == null)
        return;
    if (c === null || h === null) {
        if (b) {
            var e = null;
            for (var d = 0; d < a.length; d++) {
                if (e === null || a[d][g] > e) {
                    e = a[d][g]
                }
            }
            return e
        } else {
            var f = null;
            for (var d = 0; d < a.length; d++) {
                if (f === null || a[d][g] < f) {
                    f = a[d][g]
                }
            }
            return f
        }
    } else {
        if (b) {
            var e = null;
            for (var d = 0; d < a.length; d++) {
                if (a[d][0] >= c && a[d][0] <= h) {
                    if (e === null || a[d][g] > e) {
                        e = a[d][g]
                    }
                }
            }
            return e
        } else {
            var f = null;
            for (var d = 0; d < a.length; d++) {
                if (a[d][0] >= c && a[d][0] <= h) {
                    if (f === null || a[d][g] < f) {
                        f = a[d][g]
                    }
                }
            }
            return f
        }
    }
}
function ChangeExtremes(event) {
    if (tickerSettings.currentTab == "history") {
        var dtMinDate = new Date(Number(event.min));
        var dtMaxDate = new Date(Number(event.max));

        SetDate(dtMinDate, dtMaxDate);


        if (event.trigger == "navigator" || event.trigger == "pan") {
            var from = event.min;
            var to = event.max;
            if (from != null && from != "" && to != null && to != "") {
                $j(".hdnFromDate").val(from);
                $j(".hdnToDate").val(to);
                var FromDate = Highcharts.dateFormat("%Y-%m-%d", from);
                var ToDate = Highcharts.dateFormat("%Y-%m-%d", to);
                $j("." + $j(".hdnSelected").val()).parent().removeClass("selected");
                $j(".custom").parents("li").addClass("selected");
                $j(".hdnSelected").val("custom");
            }
            if (ChartData.Markers.releases != null && ChartData.Markers.show_release)
                GetMarkerDataForChart(tickerSettings.ticker, "releases", getMarkerDisplay("releases"));
            if (ChartData.Markers.calendars != null && ChartData.Markers.show_calendars)
                GetMarkerDataForChart(tickerSettings.ticker, "calendars", getMarkerDisplay("calendars"));
            if (ChartData.Markers.rns != null && ChartData.Markers.show_rns)
                GetMarkerDataForChart(tickerSettings.ticker, "rns", getMarkerDisplay("rns"));
            if (ChartData.Markers.dividends != null && ChartData.Markers.show_dividends)
                GetMarkerDataForChart(tickerSettings.ticker, "dividends", getMarkerDisplay("dividends"));
            if (ChartData.Markers.reports != null && ChartData.Markers.show_reports)
                GetMarkerDataForChart(tickerSettings.ticker, "reports", getMarkerDisplay("reports"));
            if (ChartData.Analysis.Momentum != null && ChartData.Analysis.show_momentum)
                AddTechnicalAnalysis('momentum', AnalysisColor.Momentum, ChartData.Analysis.MomentumPeriod);
            if (ChartData.Analysis.MACustomData != null && ChartData.Analysis.show_MACustomData)
                AddTechnicalAnalysis('movingaverage', AnalysisColor.MovingAverage, ChartData.MACustomPeriod);
            if (ChartData.Analysis.TotalReturn_DividendData != null && ChartData.Analysis.show_totalreturn)
                AddTechnicalAnalysis('totalreturn', AnalysisColor.TotalReturn, 1);

            doNavigatorAction(event, false);
            HighStockSetting_CommitChange();
            HighStockSetting_PeriodHighLow();
            HighStockSetting_CommitChange();
            if ($j(".hdnSelected").val().toLowerCase() == "custom")
                UpdateConfig("SetTimezoneOption", "timeHorizons", "custom&FromDate=" + FromDate + "&ToDate=" + ToDate);
            else
                UpdateConfig("SetTimezoneOption", "timeHorizons", $j(".hdnSelected").val() + "&FromDate=" + FromDate + "&ToDate=" + ToDate);
        }
    }
}

function doNavigatorAction(event, doRedraw) {
    if (typeof hs != 'undefined')
        hs.close();

    var scale = $j(".SelectedChartScale").val();
    var min;
    var max;
    if (event == null) {
        min = objHighStockchart.xAxis[0].min;
        max = objHighStockchart.xAxis[0].max;
    }
    else {
        min = event.min;
        max = event.max;
        min = new Date(parseFloat(min));
        max = new Date(parseFloat(max));
        min = Date.UTC(min.getFullYear(), min.getMonth(), min.getDate());
        max = Date.UTC(max.getFullYear(), max.getMonth(), max.getDate());
        if (max > ChartData.History.MainData[ChartData.History.MainData.length - 1][0])
            max = ChartData.History.MainData[ChartData.History.MainData.length - 1][0];
        HighStockSetting_SetExtremes(min, max);
    }

    if (tickerSettings.currentTab == "today") {
        for (var i = 0; i < objHighStockchart.series.length; i++) {
            if (objHighStockchart.series[i].name == "main") {
                var edata = PerformScaling("main", ChartData.Intraday.MainData, min, max, scale, true);
                objHighStockchart.series[i].update({ data: edata }, false);
                objHighStockchart.yAxis[0].update({ title: { text: scale != "indexed" ? chartCurrencylabel : chartCurrencylabel_percentage } });
            }
            else if (objHighStockchart.series[i].options.id.indexOf("_peer") > 0 || objHighStockchart.series[i].options.id.indexOf("_indices") > 0) {
                var typ = ((objHighStockchart.series[i].options.id.indexOf("_peer") > 0) ? "_peer" : (objHighStockchart.series[i].options.id.indexOf("_indices") > 0) ? "_indices" : "")
                var sym = objHighStockchart.series[i].options.id.substring(0, objHighStockchart.series[i].options.id.indexOf(typ));
                var edata = PerformScaling(sym, ChartData.getCacheComparisonByName(sym), min, max, scale, false);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({ data: edata }, false);
                }
            }
        }
    }
    else {
        for (var i = 0; i < objHighStockchart.series.length; i++) {
            if (typeof objHighStockchart.series[i].options.id == 'undefined')
                continue;

            if (objHighStockchart.series[i].name == "main") {
                var edata = PerformScaling("main", ChartData.History.MainData, min, max, scale, true);
                objHighStockchart.series[i].update({
                    data: edata, dataGrouping: {
                        enabled: getEnabledDataGrouping(),
                        units: getDataGrouping(),
                        forced: getEnabledDataGrouping(),
                        groupPixelWidth: 10,
                        approximation: 'open'
                    }
                }, false);

                if (LowerChartAnalyses_ShowVolume) {
                    edata = PerformScaling("volume", ChartData.History.VolumeData, min, max, scale, true);
                    objHighStockchart.series[1].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
                else {
                    edata = PerformScaling("Daily Change", ChartData.History.DailyChangeData, min, max, scale, true);
                    objHighStockchart.series[1].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
                objHighStockchart.yAxis[0].update({ title: { text: scale != "indexed" ? chartCurrencylabel : chartCurrencylabel_percentage } });
            }
            else if (objHighStockchart.series[i].options.id.indexOf("_peer") > 0 || objHighStockchart.series[i].options.id.indexOf("_indices") > 0) {
                var typ = ((objHighStockchart.series[i].options.id.indexOf("_peer") > 0) ? "_peer" : (objHighStockchart.series[i].options.id.indexOf("_indices") > 0) ? "_indices" : "")
                var sym = objHighStockchart.series[i].options.id.substring(0, objHighStockchart.series[i].options.id.indexOf(typ));
                var edata = PerformScaling(sym, ChartData.getCacheComparisonByName(sym), min, max, scale, false);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
            }
                ///*********** Not Required ******************/
            else if (objHighStockchart.series[i].options.id.indexOf("momentum") >= 0) {
                var edata = PerformScaling("momentum", ChartData.Analysis.Momentum, min, max, scale, false);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
            }
            else if (objHighStockchart.series[i].options.id.indexOf("totalreturn") >= 0) {
                var edata = PerformScaling("totalreturn", ChartData.Analysis.TotalReturn_DividendData, min, max, scale, false);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
            }
            //}
        }
    }
    PlotClosePriceLine();

    if (doRedraw)
        HighStockSetting_CommitChange();
}

function ShowMarker(MarkerType, ctrl) {

    if (typeof hs != 'undefined')
        hs.close();
    //edp & edpr marker in share holder yield
    if (typeof $j(ctrl).find("a") != "undefined" && $j(ctrl).find("a").length > 0) {
        ctrl = $j(ctrl).find("a");
        $j(ctrl).parents("div .markerItem").toggleClass("checked");
    }

    $j(ctrl).parents("li").toggleClass("active");
    if (!$j(ctrl).parents("li").hasClass("active")) {
        $j(ctrl).parents("li").addClass("inactive");
    } else {
        $j(ctrl).parents("li").removeClass("inactive");
    }
    var ShareTypeCheckBox = $j(".ShareTypeCheckBox");
    if ($j(ctrl).parents("li").hasClass("active")) {
        $j(ctrl).parents("li").find(".MarkerCheckBox").prop("checked", "checked");
        if (ShareTypeCheckBox != null && ShareTypeCheckBox.length > 0) {
            ShareTypeCheckBox.each(function (sindex) {
                if ($j(ShareTypeCheckBox[sindex]).prop("checked") == true) {
                    GetMarkerData($j(ShareTypeCheckBox[sindex]).val(), MarkerType, ctrl);
                }
            });
        }
        UpdateConfig("setselectedmarker", MarkerType, "true");
    }
    else {
        UpdateConfig("setselectedmarker", MarkerType, "false");
        $j(ctrl).parents("li").find(".MarkerCheckBox").removeProp("checked");
        var MarkersCount = 0;
        var MarkerCheckBox = $j(".MarkerCheckBox");
        if (MarkerCheckBox != null && MarkerCheckBox.length > 0) {
            MarkerCheckBox.each(function (mindex) {
                if ($j(MarkerCheckBox[mindex]).prop("checked") == true) {
                    MarkersCount++;
                }
            });
        }
        if (MarkersCount == 0) {
            if (ShareTypeCheckBox != null && ShareTypeCheckBox.length > 0) {
                ShareTypeCheckBox.each(function (sindex) {
                    if ($j(ShareTypeCheckBox[sindex]).prop("checked") == true) {
                        RemoveMarkerSeries(MarkerType);
                    }
                });
            }
        }
        else {
            if (ShareTypeCheckBox != null && ShareTypeCheckBox.length > 0) {
                ShareTypeCheckBox.each(function (sindex) {
                    if ($j(ShareTypeCheckBox[sindex]).prop("checked") == true) {
                        RemoveMarkerSeries(MarkerType);
                    }
                });
            }
        }

    }
}
function SortByName(a, b) {
    var aDate = Number(a.x);
    var bDate = Number(b.x);
    return ((aDate < bDate) ? -1 : ((aDate > bDate) ? 1 : 0));
}

function getMarkerData(type) {
    var D;
    switch (type.toLowerCase()) {
        case 'releases':
            D = ChartData.Markers.releases;
            break;
        case 'calendars':
            D = ChartData.Markers.calendars;
            break;
        case 'dividends':
            D = ChartData.Markers.dividends;
            break;
        case 'rns':
            D = ChartData.Markers.rns;
            break;
        case 'reports':
            D = ChartData.Markers.reports;
            break;
    }
    D = D.sort(SortByName);
    return D;
}
function getMarkerDisplay(type) {
    var D = "";
    switch (type.toLowerCase()) {
        case 'releases':
            D = MarkerDisplay.Releases;
            break;
        case 'calendars':
            D = MarkerDisplay.Calendar;
            break;
        case 'dividends':
            D = MarkerDisplay.Dividend;
            break;
        case 'rns':
            D = MarkerDisplay.RNS;
            break;
        case 'reports':
            D = MarkerDisplay.Reports;
            break;
    }
    return D;
}
//viyuta
function GetMarkerTitle(type) {
    var Title = "";
    switch (type) {
        case 'releases':
            Title = term_PressRelease;
            break;
        case 'dividends':
            Title = term_Dividend;
            break;
        case 'calendars':
            Title = term_Calendars;
            break;
        case 'rns':
            Title = term_RNS;
            break;
        case 'reports':
            Title = term_Reports;
            break;
    }
    return Title;
}
//viyuta
function RemoveMarkerSeries_old(type) {
    var D = getMarkerDisplay(type);
    for (var i = objHighStockchart.series.length - 1; i >= 0 ; i--) {
        if (objHighStockchart.series[i].options.id == D) {
            objHighStockchart.series[i].remove(false);
            switch (type.toLowerCase()) {
                case 'releases':
                    ChartData.Markers.show_release = false;
                    break;
                case 'calendars':
                    ChartData.Markers.show_calendars = false;
                    break;
                case 'dividends':
                    ChartData.Markers.show_dividends = false;
                    break;
                case 'rns':
                    ChartData.Markers.show_rns = false;
                    break;
                case 'reports':
                    ChartData.Markers.show_reports = false;
                    break;
            }
        }
    }
    HighStockSetting_CommitChange();
}
function RemoveMarkerSeries(type) {
    var D = getMarkerDisplay(type);

    var markerSeries = objHighStockchart.get('marker');
    if (markerSeries != null) {
        RemoveMarkerData(type);

        markerSeries.options.SelectedMarkerTypes.splice(markerSeries.options.SelectedMarkerTypes.indexOf(type), 1);

        HighStockSetting_CommitChange();

        switch (type.toLowerCase()) {
            case 'releases':
                ChartData.Markers.show_release = false;
                break;
            case 'calendars':
                ChartData.Markers.show_calendars = false;
                break;
            case 'dividends':
                ChartData.Markers.show_dividends = false;
                break;
            case 'rns':
                ChartData.Markers.show_rns = false;
                break;
            case 'reports':
                ChartData.Markers.show_reports = false;
                break;
        }
    }
}

function RemoveMarkerData(type) {
    var D = getMarkerDisplay(type);
    var markerSeries = objHighStockchart.get('marker');
    if (markerSeries != null) {
        for (var i = 0; i < markerSeries.data.length; i++) {
            if (markerSeries.data[i].type.toLowerCase() == type.toLowerCase()) {
                markerSeries.data[i].remove(false);
                i--;
            }
        }
    }
}
function GetMarkerData(symbol, type, ctrl) {
    type = type.toLowerCase();
    var D = getMarkerDisplay(type);
    var flgLoaded = false;
    var NoCache = getParameterByName("nocache");
    var Culture = getParameterByName("culture");
    if (NoCache == "1")
        NoCache = "true";
    else
        NoCache = "false";
    switch (type) {
        case 'releases':
            URL = ShortUrl + "MarkersData.aspx?appPath=/Clients" + getAppPath() + "&symbol=" + symbol + "&MarkerType=rss_releases&NoCache=" + NoCache + "&Culture=" + Culture;
            ChartData.Markers.show_release = true;
            if (ChartData.Markers.releases != null) {
                GetMarkerDataForChart(symbol, type, D);
                flgLoaded = true;
            }
            break;
        case 'calendars':
            URL = ShortUrl + "MarkersData.aspx?appPath=/Clients" + getAppPath() + "&symbol=" + symbol + "&MarkerType=rss_calendars&NoCache=" + NoCache + "&Culture=" + Culture;
            ChartData.Markers.show_calendars = true;
            if (ChartData.Markers.calendars != null) {
                GetMarkerDataForChart(symbol, type, D);
                flgLoaded = true;
            }
            break;
        case 'dividends':
            URL = ShortUrl + "DividendData.aspx?appPath=/Clients" + getAppPath() + "&symbol=" + symbol + "&MarkerType=rss_dividends&NoCache=" + NoCache;
            ChartData.Markers.show_dividends = true;
            if (ChartData.Markers.dividends != null) {
                GetMarkerDataForChart(symbol, type, D);
                flgLoaded = true;
            }
            break;
        case 'rns':
            URL = ShortUrl + "MarkersData.aspx?appPath=/Clients" + getAppPath() + "&symbol=" + symbol + "&MarkerType=rss_rns&NoCache=" + NoCache + "&Culture=" + Culture;
            ChartData.Markers.show_rns = true;
            if (ChartData.Markers.rns != null) {
                GetMarkerDataForChart(symbol, type, D);
                flgLoaded = true;
            }
            break;
        case 'reports':
            URL = ShortUrl + "MarkersData.aspx?appPath=/Clients" + getAppPath() + "&symbol=" + symbol + "&MarkerType=rss_reports&NoCache=" + NoCache + "&Culture=" + Culture;
            ChartData.Markers.show_reports = true;
            if (ChartData.Markers.reports != null) {
                GetMarkerDataForChart(symbol, type, D);
                flgLoaded = true;
            }
            break;
    }
    if (!flgLoaded) {
        URL = URL + "&address=" + getUniqueClientURL();
        $j.getJSON(URL, function (marker) {
            var arr = [];
            var markerData = [], pubDate;
            if ('dividends' == type) {
                $j.each(marker.Data, function (key, value) {//s,t
                    if (value == "") {
                        return false
                    }

                    arr.push({
                        x: value.date,
                        realX: value.date,
                        title: D,
                        text: term_Dividend + ' (' + $j(".MainShare .ShareCurrency").val() + ') : ' + Highcharts.numberFormat(value.Link),
                        link: value.Link
                    })
                });
            }
            else {
                if (marker.RNSItems.Item == null) {
                    alert(term_feed_no_data);
                    ChartData.Markers.rns = null;
                    ChartData.Markers.show_rns = false;
                    $j(ctrl).parents("li").toggleClass("active");
                    UpdateConfig("setselectedmarker", type, "false");
                    return false;
                }
                $j.each(marker.RNSItems.Item, function (key, value) {//s,t
                    if (value == "") {
                        return false
                    }

                    if (IsInMainData(value.date)) {
                        arr.push({
                            x: value.date,
                            realX: value.date,
                            title: D,
                            text: value.Title,
                            link: value.Link,
                            pressId: value.Link
                        })
                    }
                });
            }

            switch (type) {
                case 'releases':
                    ChartData.Markers.releases = arr;
                    break;
                case 'dividends':
                    ChartData.Markers.dividends = arr;
                    break;
                case 'calendars':
                    ChartData.Markers.calendars = arr;
                    break;
                case 'rns':
                    ChartData.Markers.rns = arr;
                    break;
                case 'reports':
                    ChartData.Markers.reports = arr;
                    break;
            }
            GetMarkerDataForChart(symbol, type, D);
        }).error(function () {
            alert(term_feed_error);
            $j(ctrl).parents("li").toggleClass("active");
        });
    }
}
function HighStockSetting_Return_SeriesExists(a) {
    for (var b = 0; b < objHighStockchart.series.length; b++) {
        if (objHighStockchart.series[b].options.id === a) {
            return objHighStockchart.series[b]
        }
    }
    return null;
}
function IsInMainData(c) {
    //if (ChartData.History.MainData) {
    //    for (var a = 0; a < ChartData.History.MainData.length; a++) {
    //        if (ChartData.History.MainData[a][0] == c) {
    //            return true;
    //        }
    //    }
    //}
    //return false;
    return true;
}
//viyuta
function GetMarkerDataForChart_old(symbol, type, Display) {
    var arr = getMarkerData(type);
    arr = TruncateIndicatorData(arr);
    arr = getAllDataIndicatorForWeeklyGroupingData(arr);
    var i = type[0].toUpperCase();
    var objMarker = {
        id: Display,
        name: i,
        type: (arr !== null && arr !== "" && arr !== undefined) ? "flags" : null,
        data: arr,
        shape: "circlepin",
        shadow: false,
        stickyTracking: false,
        width: 16,
        cursor: "pointer",
        canSetViewPercent: 0,
        setViewPercented: 0,
        turboThreshold: 6000,
        stackDistance: 15,
        onSeries: "main",
        dataGrouping: {
            enabled: false,
            units: getDataGrouping(),
            forced: false
        },
        style: {
            fontSize: "16px",
            color: 'Black',
            fontWeight: "normal",
            fontFamily: "Verdana",
            textAlign: "center"
        },
        color: 'Black',
        fillColor: 'white',
        zIndex: 600000,
        states: {
            hover: {
                color: 'Black',
                fillColor: '#F5F5F5'
            }
        }
    };
    objMarker.point = {
        events: {
            click: function (e) {
                if (this.series.name != 'D' || isMobile()) {
                    var s = ""
                    if (this.series.name == 'D') {
                        s = e.point.text;
                    }
                    else {
                        s = '<a target="_blank" href="' + e.point.pressId + '">' + e.point.text + '</a>';
                    }

                    if (hs.getExpander() != null) {
                        hs.close();
                    }
                    hs.htmlExpand(null, {
                        pageOrigin: {
                            x: e.point.pageX,
                            y: e.point.pageY
                        },
                        headingText: Highcharts.dateFormat(dateformatTooltip, this.x),
                        maincontentText: s,
                        width: 200
                    });
                }
            }
        }
    }
    objHighStockchart.addSeries(objMarker, false);
    HighStockSetting_CommitChange();
}

function GetMarkerDataForChart(symbol, type, Display) {
    var arr = getMarkerData(type);
    arr = TruncateIndicatorData(arr);
    arr = getAllDataIndicatorForWeeklyGroupingData(arr);
    var i = type[0].toUpperCase();

    arr = GetGroupedMarkers(arr, type);

    var markerSeries = objHighStockchart.get('marker');
    if (markerSeries != null) {

        if (markerSeries.options.SelectedMarkerTypes.indexOf(type) >= 0)
            RemoveMarkerData(type);
        else
            markerSeries.options.SelectedMarkerTypes.push(type);

        for (var i = 0; i < arr.length; i++) {
            markerSeries.addPoint(arr[i], false, false);
        }

        HighStockSetting_CommitChange();
    }
    else {
        var objMarker = {
            id: 'marker',
            name: 'marker',
            type: (arr !== null && arr !== "" && arr !== undefined) ? "flags" : null,
            data: arr,
            shape: "circlepin",
            shadow: false,
            stickyTracking: false,
            width: 16,
            cursor: "pointer",
            canSetViewPercent: 0,
            setViewPercented: 0,
            turboThreshold: 6000,
            stackDistance: 15,
            onSeries: "main",
            dataGrouping: {
                enabled: false,
                units: getDataGrouping(),
                forced: false
            },
            style: {
                fontSize: "16px",
                color: 'Black',
                fontWeight: "normal",
                fontFamily: "Verdana",
                textAlign: "center"
            },
            color: 'Black',
            fillColor: 'white',
            zIndex: 600000,
            states: {
                hover: {
                    color: 'Black',
                    fillColor: '#F5F5F5'
                }
            },
            seriesType: 'marker',
            SelectedMarkerTypes: [type]
        };
        objMarker.point = {
            events: {
                click: function (e) {
                    if (e.point.type != 'dividends' || isMobile()) {
                        if (hs.getExpander() != null) {
                            hs.close();
                        }
                        hs.htmlExpand(null, {
                            pageOrigin: {
                                x: e.point.pageX,
                                y: e.point.pageY
                            },
                            headingText: GetMarkerTitle(e.point.type),
                            maincontentText: e.point.text,
                            width: 200
                        });
                    }
                }
            }
        }

        objHighStockchart.addSeries(objMarker, false);
        HighStockSetting_CommitChange();
    }
}

function GetGroupedMarkers(arr, type) {
    if (arr.length == 0)
        return arr;

    if (getEnabledDataGrouping()) {
        var DataGrouping = getDataGrouping();

        var GroupInterval = DataGrouping[0][1];

        var StartDate = new Date(Number(arr[0].x));
        var FinishDate = new Date(Number(arr[arr.length - 1].x) + parseInt(GroupInterval));

        var EndDate = new Date(StartDate.getTime());
        //EndDate.addDays(GroupInterval);
        EndDate.setDate(EndDate.getDate() + parseInt(GroupInterval));

        var slicedData = [];
        var resultCount = 0;
        var i = 0;

        while (EndDate <= FinishDate || i <= 1) {
            var result = $j.grep(arr, function (v, i) {
                return (new Date(Number(v.x)) >= StartDate && new Date(Number(v.x)) < EndDate) || new Date(Number(v.x)) == FinishDate
            });

            resultCount += result.length;

            if (result.length > 0)
                slicedData.push({
                    StartDate: StartDate,
                    EndDate: EndDate,
                    Data: result
                });

            StartDate = new Date(EndDate.getTime());
            //EndDate.addDays(GroupInterval);
            EndDate.setDate(EndDate.getDate() + parseInt(GroupInterval));

            if (EndDate >= FinishDate)
                i += 1;
        }

        //group sliced data to single markers
        var resultData = [];
        for (var j = 0; j < slicedData.length; j++) {
            var x;
            var realX;
            var title = '';
            var text = '';
            var pressId;

            for (var c = 0; c < slicedData[j].Data.length; c++) {
                x = slicedData[j].Data[0].x;
                realX = slicedData[j].Data[0].realX;
                title =  slicedData[j].Data[0].title;
                if (type.toLowerCase() == "dividends") {
                    text = text + '<B>' + Highcharts.dateFormat(dateformatTooltip, Number(slicedData[j].Data[c].x)) + '</B><BR/>' + slicedData[j].Data[c].text;
                }
                else {
                    text = text + '<a target="_blank" href="' + slicedData[j].Data[c].pressId + '"><B>' + Highcharts.dateFormat(dateformatTooltip, Number(slicedData[j].Data[c].x)) + '</B><BR/>' + slicedData[j].Data[c].text + '</a>';
                }

                if (c < slicedData[j].Data.length - 1)
                    text = text + '<BR/><BR/>';

                pressId = slicedData[j].Data[0].pressId;
            }

            resultData.push({
                x: x,
                realX: realX,
                title: title,
                text: text,
                pressId: pressId,
                type: type
            });
        }
        //console.log(resultData);
        return resultData;
    }
}

function HighStockSetting_CommitChange() {
    if (objHighStockchart.renderer) {
        objHighStockchart.redraw();
    }
}
function TruncateIndicatorData(a) {
    if (a == null) {
        return null
    }
    var b = objHighStockchart.xAxis[0].getExtremes();
    var d = [];
    for (var c = 0; c < a.length; c++) {
        if (truncateHour(a[c].x) <= truncateHour(b.max) && truncateHour(a[c].x) >= truncateHour(b.min)) {
            d.push({
                x: a[c].x,
                realX: a[c].realX,
                title: a[c].title,
                text: a[c].text,
                pressId: a[c].pressId
            })
        }
    }
    return d;
}
function getAllDataIndicatorForWeeklyGroupingData(a) {
    //TODO:
    return a
}
function truncateHour(a) {
    return (parseInt(a / (24 * 3600 * 1000))) * (24 * 3600 * 1000)
}
function ChangeChartScale(type, sender) {
    if (typeof hs != 'undefined')
        hs.close();
    if (tickerSettings.currentTab == "today") {
        for (var i = 0; i < objHighStockchart.series.length; i++) {
            var extr = objHighStockchart.series[0].xAxis.getExtremes();
            var min = extr.min;
            var max = extr.max;
            if (objHighStockchart.series[i].name == "main") {
                var edata = PerformScaling("main", ChartData.Intraday.MainData, min, max, type, true);
                objHighStockchart.series[i].update({ data: edata }, false);
                objHighStockchart.yAxis[0].update({ title: { text: type != "indexed" ? chartCurrencylabel : chartCurrencylabel_percentage } });
            }
            else if (objHighStockchart.series[i].options.id.indexOf("_peer") > 0 || objHighStockchart.series[i].options.id.indexOf("_indices") > 0) {
                var typ = ((objHighStockchart.series[i].options.id.indexOf("_peer") > 0) ? "_peer" : (objHighStockchart.series[i].options.id.indexOf("_indices") > 0) ? "_indices" : "")
                var sym = objHighStockchart.series[i].options.id.substring(0, objHighStockchart.series[i].options.id.indexOf(typ));
                var edata = PerformScaling(sym, ChartData.getCacheComparisonByName(sym), min, max, type);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({ data: edata }, false);
                }
            }
        }
    }
    else {
        //TODO:
        for (var i = 0; i < objHighStockchart.series.length; i++) {
            if (typeof objHighStockchart.series[i].options.id == 'undefined')
                continue;

            var extr = objHighStockchart.series[0].xAxis.getExtremes();
            var min = extr.min;
            var max = extr.max;

            if (objHighStockchart.series[i].name == "main") {
                var edata = PerformScaling("main", ChartData.History.MainData, min, max, type, true);
                objHighStockchart.series[i].update({
                    data: edata, dataGrouping: {
                        enabled: getEnabledDataGrouping(),
                        units: getDataGrouping(),
                        forced: getEnabledDataGrouping(),
                        groupPixelWidth: 10,
                        approximation: 'open'
                    }
                }, false);

                if (LowerChartAnalyses_ShowVolume) {
                    edata = PerformScaling("volume", ChartData.History.VolumeData, min, max, type, true);
                    objHighStockchart.series[1].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
                else {
                    edata = PerformScaling("Daily Change", ChartData.History.DailyChangeData, min, max, type, true);
                    objHighStockchart.series[1].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
                objHighStockchart.yAxis[0].update({ title: { text: type != "indexed" ? chartCurrencylabel : chartCurrencylabel_percentage } });
            }
            else if (objHighStockchart.series[i].options.id.indexOf("_peer") > 0 || objHighStockchart.series[i].options.id.indexOf("_indices") > 0) {
                var typ = ((objHighStockchart.series[i].options.id.indexOf("_peer") > 0) ? "_peer" : (objHighStockchart.series[i].options.id.indexOf("_indices") > 0) ? "_indices" : "")
                var sym = objHighStockchart.series[i].options.id.substring(0, objHighStockchart.series[i].options.id.indexOf(typ));
                var edata = PerformScaling(sym, ChartData.getCacheComparisonByName(sym), min, max, type);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
            }
            else if (objHighStockchart.series[i].options.id.indexOf("momentum") >= 0) {
                var edata = PerformScaling("momentum", ChartData.Analysis.Momentum, min, max, type);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
            }
            else if (objHighStockchart.series[i].options.id.indexOf("totalreturn") >= 0) {
                var edata = PerformScaling("totalreturn", ChartData.Analysis.TotalReturn_DividendData, min, max, type);
                if (typeof edata != 'undefined') {
                    objHighStockchart.series[i].update({
                        data: edata, dataGrouping: {
                            enabled: getEnabledDataGrouping(),
                            units: getDataGrouping(),
                            forced: getEnabledDataGrouping(),
                            groupPixelWidth: 10,
                            approximation: 'open'
                        }
                    }, false);
                }
            }
        }
    }
    PlotClosePriceLine();
    HighStockSetting_PeriodHighLow();
    HighStockSetting_CommitChange();
}
function GetFirstPrice(Symbol) {
    var FirstPrice;
    if (typeof ChartData.History.FirstLastData != "undefined" && ChartData.History.FirstLastData.length > 0) {
        for (var index = 0, num = ChartData.History.FirstLastData.length; index < num; index++) {
            if (ChartData.History.FirstLastData[index][0] == Symbol) {
                FirstPrice = ChartData.History.FirstLastData[index][2];
                break;
            }
        }
    }
    return FirstPrice;
}
function PerformScaling(symbol, a, min, max, type, isMain) {
    var firstPrice, lastprice;
    var firsttime, lasttime;
    var e = [];
    firstPrice = 0;
    for (var i = 0; i < a.length; i++) {
        var price;
        if (a[i][0] < min || a[i][0] > max || a[i][1] == null)
            continue;

        if (e.length == 0) {
            if (symbol == 'volume' || symbol == 'Daily Change') {
                price = a[i][1];
            }
            else {
                if (symbol == "main") {
                    ChartData.History.FirstLastData = null;
                    ChartData.History.FirstLastData = [];
                    ChartData.History.MainFirstPrice = a[i][1];
                }
                if (type == "relative" && a[i][1] != 0) {
                    price = (a[i][1] / a[i][1]) * ChartData.History.MainFirstPrice;
                }
                else if (type == "indexed" && a[i][1] != 0) {
                    price = 100;
                }
                else {
                    price = a[i][1];
                }
            }
            firstPrice = a[i][1];
            firsttime = a[i][0];
        }
        else {
            if (symbol == 'volume' || symbol == 'Daily Change') {
                price = a[i][1];
            }
            else {
                if (type == "relative") {
                    price = (a[i][1] / firstPrice) * ChartData.History.MainFirstPrice;
                }
                else if (type == "indexed") {
                    price = ((a[i][1] * 100) / firstPrice);
                }
                else {
                    price = a[i][1];
                }
            }
            lastprice = a[i][1];
            lasttime = a[i][0];
        }
        if (typeof price != "undefined" && price != Infinity && price != -Infinity)
            e.push([a[i][0], price]);
    }
    if (e.length > 0) {
        ChartData.History.FirstLastData.push([symbol, firsttime, firstPrice, lasttime, lastprice]);
    }
    return e
}
function DailyChange_Data(a, g) {
    var e = a.slice();
    if (a.length == 0) {
        return e
    }
    g = parseInt(g);
    e[0] = a[0].slice();
    for (var d = g; d < a.length; d++) {
        e[d] = a[d].slice();
        var b = parseFloat(isNaN(a[d][1]) ? 0 : a[d][1]);
        var c = parseFloat(isNaN(a[d - g][1]) ? 0 : a[d - g][1]);
        if (c == 0) {
            e[d][1] = 0
        } else {
            e[d][1] = ((b / c) - 1) * 100
        }
    }
    return e
}
function AddTechnicalAnalysis(Option, color, period) {
    if (typeof (objHighStockchart) == 'undefined')
        return;

    var extr = objHighStockchart.series[0].xAxis.getExtremes();
    var min = extr.min;
    var max = extr.max;
    if (Option == 'movingaverage') {
        RemoveTechnicalAnalysis(Option);
        objHighStockchart.addSeries({
            name: Option, linkedTo: 'main', "color": color, showInLegend: true, type: 'trendline', id: Option, algorithm: 'SMA', periods: period, lineWidth: (typeof chartLineWidth != 'undefined') ? chartLineWidth : 1, states: { hover: { lineWidth: (typeof chartLineHoverWidth != 'undefined') ? chartLineHoverWidth : 1 } }, dataGrouping: {
                enabled: getEnabledDataGrouping(),
                units: getDataGrouping(),
                forced: getEnabledDataGrouping(),
                groupPixelWidth: 10,
                approximation: 'open'
            }
        }, false);
        HighStockSetting_CommitChange();
    }
    else if (Option == 'exponentialmovingaverage') {
        RemoveTechnicalAnalysis(Option);
        objHighStockchart.addSeries({
            name: Option, linkedTo: 'main', "color": color, showInLegend: true, type: 'trendline', id: Option, algorithm: 'EMA', periods: period, lineWidth: (typeof chartLineWidth != 'undefined') ? chartLineWidth : 1, states: { hover: { lineWidth: (typeof chartLineHoverWidth != 'undefined') ? chartLineHoverWidth : 1 } }, dataGrouping: {
                enabled: getEnabledDataGrouping(),
                units: getDataGrouping(),
                forced: getEnabledDataGrouping(),
                groupPixelWidth: 10,
                approximation: 'open'
            }
        }, false);
        HighStockSetting_CommitChange();
    }
    else if (Option == 'MACD') {
        RemoveTechnicalAnalysis(Option);
        objHighStockchart.addSeries({
            name: Option, linkedTo: 'main', "color": color, showInLegend: true, type: 'trendline', id: Option, algorithm: 'MACD', periods: period, lineWidth: (typeof chartLineWidth != 'undefined') ? chartLineWidth : 1, states: { hover: { lineWidth: (typeof chartLineHoverWidth != 'undefined') ? chartLineHoverWidth : 1 } }, dataGrouping: {
                enabled: getEnabledDataGrouping(),
                units: getDataGrouping(),
                forced: getEnabledDataGrouping(),
                groupPixelWidth: 10,
                approximation: 'open'
            }
        }, false);
        HighStockSetting_CommitChange();
    }
    else if (Option == 'momentum') {
        var momData;
        momData = DailyChange_Data(ChartData.History.MainData, period);
        ChartData.Analysis.Momentum = momData;
        ChartData.Analysis.MomentumPeriod = period;

        RemoveTechnicalAnalysis(Option);
        momData = PerformScaling(Option, momData, min, max, $j(".SelectedChartScale").val(), false);
        var momentum = {
            type: "line", id: 'momentum', linkedTo: 'main', name: Option, color: color, zIndex: 50, data: momData, yAxis: 0, dataGrouping: {
                enabled: getEnabledDataGrouping(),
                units: getDataGrouping(),
                forced: getEnabledDataGrouping(),
                groupPixelWidth: 10,
                approximation: 'open'
            }
        };
        ChartData.Analysis.show_momentum = true;
        objHighStockchart.addSeries(momentum, false);
        HighStockSetting_CommitChange();
    }
    else if (Option == 'totalreturn') {
        ChartData.Analysis.show_totalreturn = true;
        LoadDividendData(tickerSettings.ticker, min, max);
    }

}
function RemoveTechnicalAnalysis(Option) {
    if (typeof (objHighStockchart) == 'undefined')
        return;
    for (var i = objHighStockchart.series.length - 1; i >= 0 ; i--) {
        if (objHighStockchart.series[i].options.id == Option + '_indicator' || objHighStockchart.series[i].options.id == Option) {
            objHighStockchart.series[i].remove(true);
        }
    }
}
function RemoveTRCIndicator(Option) {
    ChartData.Analysis.show_totalreturn = false;
    if (typeof (objHighStockchart) == 'undefined')
        return;
    for (var i = objHighStockchart.series.length - 1; i >= 0 ; i--) {
        if (objHighStockchart.series[i].options.id == Option + '_indicator' || objHighStockchart.series[i].options.id == Option) {
            objHighStockchart.series[i].remove(true);
        }
    }
}
function GetAnalyseData(Option) {
    if ($j(".hdnSelectedShare").val() != "" && $j("input[name='" + $j(".hdnSelectedShare").val() + "']").val() != "") {
        var Symbol = $j("input[name='" + $j(".hdnSelectedShare").val() + "']").val();

        $j.each(objHighStockchart.series, function (count, curSeries) {
            if (curSeries.options.id.toLowerCase() == "volume") {
                curSeries.update({
                    data: Option.toLowerCase() == 'volume' ? GetVolumeChartData() : GetDailyChangeChartData(),
                    "name": Option.toLowerCase() == 'volume' ? "Volume" : "Daily Change"
                });
                //viyuta
                objHighStockchart.yAxis[1].update({
                    title: { text: Option.toLowerCase() == 'volume' ? ((typeof ShowVolumeLabel != "undefined" && ShowVolumeLabel == true) ? term_Volume : '') : '%' }
                });
            }
        });
    }
}
function TotalReturn_Data(divData, min, max) {
    var nextDiv = 0;
    for (var i = 0; i < divData.length; i++) {
        if (Number(min) > Number(divData[i].x)) {
            nextDiv++;
        }
    }
    var hisData = ChartData.History.MainData;
    var d = hisData.slice()
    var cDiv = 0;
    var shares = 1;
    
    for (var h = 0; h < hisData.length; h++) {
        d[h] = hisData[h].slice();
        if (hisData[h][0] < min) {
            d[h][1] = parseFloat(hisData[h][1]);
        }
        else {
            var NewIndex = 0;
            if (divData.length > 0 && nextDiv < divData.length && Number(divData[nextDiv].x) <= Number(hisData[h][0])) {
                var prevValue = hisData[0][1];
                if (h > 0 && Number(divData[nextDiv].x) == Number(hisData[h][0])) {
                    prevValue = hisData[h][1];
                }
                else if (h > 0 && Number(divData[nextDiv].x) < Number(hisData[h][0])) {
                    NewIndex = h;
                    while (NewIndex > 0 && Number(divData[nextDiv].x) < Number(hisData[NewIndex][0])) {
                        NewIndex--;
                        prevValue = hisData[NewIndex][1];
                    }
                }
                shares = shares + (shares * Number(divData[nextDiv].link)) / prevValue;
                nextDiv++;
            }
            var pr = parseFloat(shares * hisData[h][1]);
            if (!isNaN(parseFloat(pr))) {
                d[h][1] = pr;
            }
        }
    }
    return d;
}
function CreateTotalReturnSeries(symbol, trcData) {

    var conf = GetChartData(symbol);
    var objtrcData = {
        type: "line", id: 'totalreturn', name: 'totalreturn', color: AnalysisColor.TotalReturn, zIndex: 50, data: trcData, yAxis: 0
    };

    objHighStockchart.addSeries(objtrcData, false);
    HighStockSetting_CommitChange();
}
function UpdateChartData(sender) {
    var FromDate = $j("#from").datepicker('getDate');
    FromDate = Date.UTC(FromDate.getFullYear(), FromDate.getMonth(), FromDate.getDate());
    var ToDate = $j("#to").datepicker('getDate');
    ToDate = Date.UTC(ToDate.getFullYear(), ToDate.getMonth(), ToDate.getDate());
    ChangePeriod(FromDate, ToDate, sender);
    //viyuta
    //$j("." + $j(".hdnSelected").val()).parent().removeClass("selected");
    //$j(".custom").parents("li").addClass("selected");
    //$j(".hdnSelected").val("custom");
    //$j(".hdnFromDate").val(FromDate);
    //$j(".hdnToDate").val(ToDate);
    FromDate = Highcharts.dateFormat("%Y-%m-%d", FromDate);
    ToDate = Highcharts.dateFormat("%Y-%m-%d", ToDate);
    //UpdateConfig("SetTimezoneOption", "timeHorizons", "custom&FromDate=" + FromDate + "&ToDate=" + ToDate);
    if ($j(".hdnSelected").val().toLowerCase() == "custom")
        UpdateConfig("SetTimezoneOption", "timeHorizons", "custom&FromDate=" + FromDate + "&ToDate=" + ToDate);
    else
        UpdateConfig("SetTimezoneOption", "timeHorizons", $j(".hdnSelected").val() + "&FromDate=" + FromDate + "&ToDate=" + ToDate);
}

function CheckNoData() {
    var message = loadingMsg;
    if ($j(".hdnSelectedTab").val().toLowerCase() == 'history')
        message = historyMsg;
    if (parseInt(objHighStockchart.series[0].points.length) > 0)
        DataAvailable = true;
    else
        DataAvailable = false;

    if (typeof objHighStockchart != "undefined") {
        if (!DataAvailable) {
            //_tooltipEnable = false;
            objHighStockchart.showLoading(message);
        } else {
            //_tooltipEnable = true;
            objHighStockchart.hideLoading();
        }
    }
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}