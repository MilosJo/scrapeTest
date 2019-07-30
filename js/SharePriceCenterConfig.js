/**
*	Site-specific configuration settings for Highslide JS
*/
{
hs.graphicsDir = '../';
hs.outlineType = 'rounded-white';
hs.wrapperClassName = 'draggable-header';
hs.captionEval = 'this.a.title';
hs.showCredits = false;
hs.marginTop = 20;
hs.marginRight = 20;
hs.marginBottom = 20;
hs.marginLeft = 20;
hs.expandCursor = null;
hs.restoreCursor = null;
}
/********* Main Configuration *********/

var ShortUrl = '';
GetUrl();

var IsLoadChart = true;
var dataName = new Array();
var dataValue = new Array();
var DividendDataName = new Array();
var DividendDataValue = new Array();
var TotalReturnActualData = new Array();
var MomentumActualData = new Array();
var CloseName = new Array();
var CloseValue = new Array();
var PrimaryPoints = new Array();
var PrimaryOriginal = new Array();
var MarkerName = new Array();
var MarkerValue = new Array();
var MainFirstPoint = 1;
var FirstDataTime;
var LastDataTime;
var chart;
var MainChartTimeStamp;
var CurrentSelectedTab = "Today";
var HighValue;
var LowValue;
var NoData = false;
var DataAvailable = true;
var MomentumPeriod = 0;
var MovingAverage = 0;
var MainChartColor = "#FF0000";
var MainShareName = "";
var MainVolumeDivisor = "";
var LowerChartAnalyses_ShowVolume = true;
var LowerChartAnalyses_Color = "";
var cHighLowData = { "MaxValue": -1, "MaxIndex": "", "MinValue": -1, "MinIndex": "" };
var VolumeDivisor = '1';
var chartType = 'line';
var _chartScale = 'Relative';
var volumeChartcolor = '#DB0000';
var secondaryShareValue = '';

// chart configuration section
var ShowClosePriceLine = true;
var ClosePriceIntraOnly = false;
var ClosePriceLineColor = "#669900";
var UseTimezoneForIntraday = false;
var HighLowFlag = true;
var HighLowFlagIntraOnly = false;
var chartWidth = 700;
var chartHeight = 455;
var upperChartHeight = 250;
var lowerChartHeight = 100;
var Margin = 25;
var Navigator = 40;
var logoURL = ShortUrl + 'uk/spire_healthcare/Images/logo.gif';
var currencyColor = '#515151';
var xaxisgridlinecolor = '#d3d3d3';
var yaxisgridlinecolor = '#d3d3d3';
var backgroundColor = '';
var plotBackgroundColor = '';
var gridLinewidth = 0;
var yaxisdecimalPlace = '2';
var decimalPlace = 2;
var _marginLeft = 68;
var _marginTop = 25;
var _marginRight = 50;
var _marginBottom = null;
var _plotBorderColor = '#d3d3d3';
var _plotBorderWidth = 0;
var _shadow = false;
var _marker = true;
var _chart_title_style = { color: '#515151', font: '0px Arial, Helvetica, sans-serif' };
var _xaxis_title_style = { color: '#515151', font: '10px Arial, Helvetica, sans-serif' };
var _xaxis_label_style = { color: '#515151', font: '10px Arial,Helvetica,sans-serif' };
var _yaxis_label_style = { color: '#515151', font: 'bold 9px Arial,Helvetica,sans-serif' };
var _yaxis_title_style = { color: currencyColor, font: ' bold 12px Arial, Helvetica, sans-serif' };
var _y2axis_label_style = { color: '#515151', font: ' bold 10px Arial, Helvetica, sans-serif' };
var _y2axis_title_style = { color: '#515151', font: ' bold 10px Arial, Helvetica, sans-serif' };
var _xAxislinecolor = '#d3d3d3';
var _yAxislinecolor = '#d3d3d3';
var _staggerLines = 0;
var _minYAxis = 4;
var _minXAxis = 0;
var _minYAxisVol = 3;
var _tooltipEnable = true;
var _markerEnable = true;
var _markerHoverEnable = false;
var _lineHoverEnable = true;
var _step = 0;
var loadingMsg = 'No Data';
var isLoading = true;

//Buyer Seller Chart Property
var BuyerChartBackgroundColor = ''; // To transparent chart background color set - 'rgba(255, 255, 255, 0.1)';
var SellerChartBackgroundColor = '';
var BuyerSellerChartdistance = 15;
var BuyerSellerChartConnectorWidth = 1;
var BuyerSellerChartinnerSize = '40%';

var term_ClosePriceLine = 'CloseLine';
var term_Volume = 'Volume';
var term_DailyChange = 'Daily change';
var term_TotalReturn = 'Total Return';
var term_MovingAveragePeriod = "Moving Average";
var term_PressRelease = "Press Releases";
var term_Dividend = "Dividend";
var term_Notification = "Notification";
var term_RNS = "RNS";
var term_Calendars = "Calendars";
var term_Reports = "Reports";
var term_High = "High";
var term_Low = "Low";
var term_Momentum_Period = "Momentum Period";
var term_period = "Period";
var chartCurrencylabel = 'Price';
var dateformatTooltip = '%d %m %Y';
var dateformatTooltipIntraday = '%H:%M';
var dateformatAxis = '%H:%M';
var dateformatAxisYearly = '%m/%Y';
var dateformatAxisMonth = '%d/%m/%Y';
var term_decimalPoint;
var term_thousandsSep;
var term_weekDays;
var term_fullmonthName;
var term_monthName;
var term_TooltipTitle = "";
var term_Date = "Date";
var term_Ok = "Ok";
var term_Cancel = "Cancel";

var LargeChartConfig = false;
var IntradayURL = ShortUrl + "IntradayDataForChart.ashx";
var CloseLineURL = ShortUrl + "CloselineDataForChart.ashx";
var HistoryURL = ShortUrl + "HistoryDataForChart.ashx";
var MarkerURL = ShortUrl + "MarkersData.aspx";
var HighFlagURL = ShortUrl + "default/Images/icons/mHigh.png";
var LowFlagURL = ShortUrl + "default/Images/icons/mLow.png";
var DividendURL = ShortUrl + "DividendDataForChart.ashx";
var DividnedDataURL = ShortUrl + "DividendData.aspx";
var ReleasesURL = ShortUrl + "default/Images/icons/mPR.png";
var CalendarURL = ShortUrl + "default/Images/icons/mCalendar.png";
var RNSURL = ShortUrl + "default/Images/icons/mRNS.png";
var DividendsURL = ShortUrl + "default/Images/icons/mDividend.png";
var ReportsURL = ShortUrl + "default/Images/icons/mReport.png";
var MultiMarkersURL = ShortUrl + "default/Images/icons/mMultiple.png";

function setConfig() {
    if (_term_ClosePriceLine != "term_ClosePriceLine")
        term_ClosePriceLine = _term_ClosePriceLine;
    if (_term_Volume != "term_Volume")
        term_Volume = _term_Volume;
    if (_term_DailyChange != "term_dailychange")
        term_DailyChange = _term_DailyChange;
    if (_term_TotalReturn != "term_TotalReturn")
        term_TotalReturn = _term_TotalReturn;
    if (_term_MovingAveragePeriod != "sm6_moving_avg_period")
        term_MovingAveragePeriod = _term_MovingAveragePeriod;
    if (_term_Momentum_Period != "term_momentum_period")
        term_Momentum_Period = _term_Momentum_Period;
    if (_term_period != "term_period")
        term_period = _term_period;
    if (_chartCurrencylabel != "term_yaxislabelText")
        chartCurrencylabel = _chartCurrencylabel;
    if (_dateformatTooltip != "term_dateformat_highchart")
        dateformatTooltip = _dateformatTooltip;
    if (_dateformatTooltipIntraday != "term_intradayformattooltip_highchart")
        dateformatTooltipIntraday = _dateformatTooltipIntraday;
    if (_dateformatAxis != "term_intradayformat_highchart")
        dateformatAxis = _dateformatAxis;
    if (_dateformatAxisYearly != "term_highchartlabel_yearly")
        dateformatAxisYearly = _dateformatAxisYearly;
    if (_dateformatAxisMonth != "term_highchartlabel_monthly")
        dateformatAxisMonth = _dateformatAxisMonth;
    if (_loadingMsg != "loadingMsg")
        loadingMsg = _loadingMsg;
    if (_term_PressRelease != "term_PressReleases")
        term_PressRelease = _term_PressRelease;
    if (_term_Dividend != "term_Dividend")
        term_Dividend = _term_Dividend;
    if (_term_Notification != "term_Notification")
        term_Notification = _term_Notification;
    if (_term_RNS != "term_RNS")
        term_RNS = _term_RNS;
    if (_term_Calendars != "term_Calendars")
        term_Calendars = _term_Calendars;
    if (_term_Reports != "term_Reports")
        term_Reports = _term_Reports;
    if (_term_High != "term_High")
        term_High = _term_High;
    if (_term_Low != "term_Low")
        term_Low = _term_Low;
    if (_term_TooltipTitle != "term_TooltipTitle")
        term_TooltipTitle = _term_TooltipTitle;
    if (_term_Date != "Date")
        term_Date = _term_Date;
}
function GetUrl() {
    ShortUrl = window.location.href.toLowerCase().substr(0, window.location.href.toLowerCase().indexOf("clients")) + "Clients/";
}

function SetClientSection() {
    var SelectedTab = $j(".hdnSelectedTab").val();
    if ($j(window).width() > 570) {
        if (SelectedTab == "today") {
            $j(".ShareDiv").attr("style", "width:100% !important");
            $j(".IndicesDiv").attr("style", "display:none");
        }
        else if (SelectedTab == "history") {
            //$j(".ShareDiv").attr("style", "width:50%");
            //$j(".PeerDiv").attr("style", "width:50%");
        }
    }
}