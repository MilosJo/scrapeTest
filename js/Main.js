$j = jQuery.noConflict();
var ShowLoadingScreen = false;
var Allhide = true;
var showDropdown = 1;
var historyMsg = 'No History Data';

//viyuta
var term_MovingAverageValidationMessage = 'Period must be an integer between 1 and 200.';
var term_MomentumValidationMessage = 'Period must be an integer between 1 and 200.';
var term_BrowserMessage = 'This tool is best viewed on Internet Explorer 9.x or higher, Mozilla Firefox 27.x or higher, Chrome 30.x or higher, Safari 6.x or higher, or equivalent browser software. If your browser is older, you may have trouble viewing many of our tools’ features properly. You can determine the version of your browser by choosing "Help" at the top of your browser window, then selecting "About" (your browser).';
var showBrowserMessage = false;
$j(document).ready(function () {
    if (showBrowserMessage) {
        //$j(".inline").colorbox({ inline: true, width: "50%", open: true });

        if (_term_BrowserMessage != "term_BrowserMessage")
            term_BrowserMessage = _term_BrowserMessage;

        //Display message if user is using IE7 OR IE8            
        //var x = readCookie('hasReadMessage');
        //if (x != 'true') {
            $j("#divBrowser").html(term_BrowserMessage);
            $j(".inline").colorbox({ inline: true, width: "50%", open: true });

            //createCookie('hasReadMessage', 'true', 7);
       // }
    }

    if ('ontouchstart' in document) {
        $j("body").removeClass("no-touch");
    }

    //ShowLoader();
    $j('.refreshButton, .refreshText').click(function () {
        location.reload(true);
        //window.location.href = window.location.href;
    });
    /*Code for responsive show hide control for dropdown*/
    smallScreen = false;
    function widthAssigner() {
        var viewportWidth = $j(window).width();
        if (viewportWidth <= 570 && !smallScreen) {
            smallScreen = true;
            $j(".tabMenu ul").css("display", "none");
            $j(".tabStockperfomance ul").css("display", "none");
            $j(".tabhistoricshareprice ul").css("display", "none");
            $j(".tabStockperfomanceClick").removeClass("hideforDesktop");
        }
        if (viewportWidth > 570 && smallScreen) {
            smallScreen = false;
            $j(".tabMenu ul").css("display", "block");
            $j(".tabStockperfomance ul").css("display", "block");
            $j(".tabhistoricshareprice ul").css("display", "block");
            $j(".tabStockperfomanceClick").addClass("hideforDesktop");
        }
    }

    $j(window).resize(function () {
        var viewportWidth = $j(window).width();
        var exchangeSelect = true;
        if (viewportWidth <= 570) {

        }
        if ($j(".hdnSelectedTab").val() != "performance" && typeof objHighStockchart != "undefined")
            objHighStockchart.setSize((typeof HighStockChartWidth != "undefined" && HighStockChartWidth != "") ? HighStockChartWidth : $j(window).width(), objHighStockchart.height, false);
        widthAssigner();
        SetShareSection();

        //viyuta : TODO: check whether to keep it opened in any case        
        $j("#from").datepicker("hide");
        $j("#to").datepicker("hide");
    });

    // Script for Exchange select
    $j(".exchangeSelect ul").each(function () {
        var title;
        var sharesinput = $j(".exchangeSelect ul li .shares");
        sharesinput.each(function (index) {
            if ($j(this).prop("checked")) {
                $j(this).parents("li").addClass("selected");
                $j(".hdnSelectedExc").val($j(this).val());
                $j(".hdnSelectedShare").val($j(this).parents("li").find("div input[checked='checked']").val());
                var Symbol = $j(this).parents("li").find("div input[checked='checked']").siblings("input[type='hidden'][class='ShareCode']").val();
                MainVolumeDivisor = $j(this).parents("li").find("div input[checked='checked']").siblings("input[type='hidden'][class='ShareVolumeDivisor']").val();
                MainChartTimeStamp = $j(this).parents("li").find("div input[checked='checked']").siblings("input[type='hidden'][class='ShareTimeStamp']").val();
                title = $j(this).parents("li").html();
                var ieversion = 8;
                var doReplace = false;
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
                    ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
                    doReplace = true;
                }
                if (ieversion <= 8 && doReplace == true)
                    title = title.replace(/name=/g, 'name=1');
                else
                    title = title.replace(/name="/g, 'name="1');
            }
        });
        $j(this).before('<div class="select currentexchange">' + title)
        ChangeSelectedExc();
        if ($j(".exchangeSelect ul li .shares").length == 1) {
            $j(".showMoreExchange").hide();
            $j(".exchangeSelect").addClass("noPointer");
            $j(".currentexchange").addClass("noPointer");
            $j(".exchangeListWrapper").addClass("noPointer");
            $j(".exchangeDetails").addClass("noPointer");
            $j(".currentexchange > a").addClass("noPointer");
        }
        $j(".eClick,div.currentexchange > a,.exchangeDetails").click(function (e1) {
            if ($j(".exchangeSelect ul li .shares").length != 1) {
                $j(".exchangeSelect ul").slideToggle("slow");
                $j(".eClick").toggleClass("show");
                $j(".eClick").toggleClass("expanded");
                e1.stopPropagation();
                $j('body').one("click", function (e) {
                    if ($j(e.target).parents().index($j('.exchangeSelect')) == -1) {
                        $j(".eClick").removeClass("expanded");
                        $j(".exchangeSelect ul").slideUp("slow");
                    }
                });
                $j(".exchangeSelect ul li").on("click", function (event) {
                    event.preventDefault();
                    $j(".exchangeSelect ul").slideUp("slow");
                    $j(".eClick").removeClass("show");
                    $j(".eClick").removeClass("expanded");
                });
            }
        });
    });

    $j("body").on("click", "div.currentexchange > a,.exchangeDetails", function (e1) {
        if ($j(".exchangeSelect ul li .shares").length != 1) {
            $j(".exchangeSelect ul").slideToggle("slow");
            $j(".eClick").toggleClass("show");
            $j(".eClick").toggleClass("expanded");
            e1.stopPropagation();
            $j('body').one("click", function (e) {
                if ($j(e.target).parents().index($j('.exchangeSelect')) == -1) {
                    $j(".eClick").removeClass("expanded");
                    $j(".exchangeSelect ul").slideUp("slow");
                }
            });
            $j(".exchangeSelect ul li").on("click", function (event) {
                event.preventDefault();
                $j(".exchangeSelect ul").slideUp("slow");
                $j(".eClick").removeClass("show");
                $j(".eClick").removeClass("expanded");
            });
        }
        else {

        }
    });

    $j(".showMoreExchange").click(function () {
        if ($j(".exchangeSelect ul li .shares").length != 1) {
            $j(".exchangeList").toggleClass("lightBg");
            $j(".exchangeListWrapper1").slideToggle("slow");
        }
    });

    $j(".exchangeBox").click(function () {
        if ($j(".exchangeSelect ul li .shares").length != 1) {
            $j(this).toggleClass("expanded");
            $j(".exchangeList").toggleClass("lightBg");
            $j(".exchangeListWrapper1").slideToggle("slow");
        }
    });

    $j('.advOptionWrapper .snapTableLink').off("click");
    $j('.advOptionWrapper .snapTableLink').on("click", function () {
        //alert('in adv');
        $j(this).children(".snapDropdown").toggleClass("show");
        $j(".snapTableLink > span").toggleClass("underline");
        $j(".showAdvOptions").slideToggle("slow");
    });

    $j(".chartControls > .control:eq(0)").addClass("active");
    $j(".control").on("click", function (event) {
        event.preventDefault();
        $j(".control").removeClass("active");
        $j(this).addClass("active");
    });

    $j(".control").mouseover(function () {
        $j(".control").removeClass("hovered");
        $j(this).addClass("hovered");
    });

    $j(".control").mouseout(function () {
        $j(".control").removeClass("hovered");
    });
});
var testFlag = 0;
function pageLoad(sender, args) {
    if (typeof hs != 'undefined')
        hs.close();
    //Start:set height of buyer-seller control
    var selB = $j("#seller-broker-container");
    var buyB = $j("#buyer-broker-container");
    if (typeof selB != "undefined" && typeof buyB != "undefined" && selB != null && buyB != null && selB.outerHeight() != "undefined" && buyB.outerHeight() != "undefined") {
        if (buyB.outerHeight() < selB.outerHeight()) {
            $j("#buyer-broker-container").css("height", selB.outerHeight());
        } else {
            $j("#seller-broker-container").css("height", buyB.outerHeight());
        }
    }
    //End: set height of buyer-seller control
    if (typeof $j('.chartBase') != "undefined")
        $j('.chartBase').height(LargeChartConfig ? chartHeight - Navigator - Margin : chartHeight);
    if ($j(".hdnSelectedTab").val() == "today")
        DrawTreadByBrokerChart();

    // Script for Tab change
    $j(".tabMenu ul").each(function () {
        var title = $j(".tabMenu ul li.selected a").text();
        $j(this).after('<span class="select hideforDesktop">' + title + '</span>')

        $j(".tabMenu .select, .arrowClick").click(function () {
            $j(".tabMenu ul").slideToggle("slow");
            $j(".arrowClick").toggleClass("show");
            $j(".tabMenu ul li").on("click", function (event) {
                $j(".tabMenu ul li").removeClass("selected");
                $j(this).addClass("selected");
                title = $j(this).text();
                $j(".tabMenu span.select").text(title)
                $j(".tabMenu ul").slideUp("slow");
                $j(".arrowClick").removeClass("show");
            });
        });

    });
    $j(".topTableWrapper .snapTableLink").unbind("click");
    $j('.ExchangeClick').off("click");
    $j('.ExchangeClick').on("click", function (e) {
        ChartData.emptyData();
        var newExc = $j(this).find(".shares").val();
        var Symbol = "";
        if ($j(".hdnSelectedExc").val() != newExc) {
            $j(this).find(".ShareTypeClick input").each(function (index) {
                if ($j(this).prop('checked')) {
                    $j(".hdnSelectedShare").val($j(this).val());
                    Symbol = $j(this).parent().find("input[type='hidden'][class='ShareCode']").val();
                    MainChartColor = $j(this).parent().find("input[type='hidden'][class='ShareColor']").val();
                    MainVolumeDivisor = $j(this).parent().find("input[type='hidden'][class='ShareVolumeDivisor']").val();
                    MainChartTimeStamp = $j(this).parent().find("input[type='hidden'][class='ShareTimeStamp']").val();
                    MainShareName = $j(this).parent().text();
                }
            });
            $j(this).find(".shares").prop('checked', 'checked');
            $j(".hdnSelectedExc").val(newExc);
            ChangeTopMenu($j(this));
            ChangeSelectedExc(function () {
                $j("#btnLoadExchange").click();
            });

        }
    });
    $j(".topTableWrapper .snapTableLink").click(function (e) {
        $j('#chartOpt1').removeClass('active');
        $j('#chartOpt2').removeClass('active');
        $j('#chartOpt3').removeClass('active');
        e.stopPropagation();
        if (!$j(".snapTableLink > span").hasClass("underline")) {
            $j(".snapTableLink > span").addClass("underline");
            $j(".snapTableLink .snapDropdown").addClass("show");
        }
        else {
            $j(".snapTableLink > span").removeClass("underline");
            $j(".snapTableLink .snapDropdown").removeClass("show");
        }
        $j(".snapTableDetails").slideToggle("slow");
    });
    $j('.ShareTypeClick').off("click");
    $j('.ShareTypeClick').on("click", function (e) {
        ChartData.emptyData();
        var newShareType = $j(this).find("input[type='radio']").val();
        if ($j(".hdnSelectedShare").val() != newShareType) {
            var newExc = $j(this).parent().parent().find(".shares").val();
            var Symbol = $j(this).find("input[type='hidden'][class='ShareCode']").val();
            MainChartColor = $j(this).find("input[type='hidden'][class='ShareColor']").val();
            MainVolumeDivisor = $j(this).find("input[type='hidden'][class='ShareVolumeDivisor']").val();
            MainChartTimeStamp = $j(this).find("input[type='hidden'][class='ShareTimeStamp']").val();
            MainShareName = $j(this).text();
            $j(this).find("input[type='radio']").prop('checked', 'checked');
            $j(".hdnSelectedShare").val(newShareType);
            if ($j(".hdnSelectedExc").val() == newExc) {
                ChangeSelectedExc(function () {
                });
                $j("#btnLoadShareType").click();
            }
        }
    });
    $j('.ShareTypeTabClick').off("click");
    $j('.ShareTypeTabClick').on("click", function (e) {
        ChartData.emptyData();
        var newShareType = $j(this).find("input[type='radio']").val();
        var Symbol = $j(this).find("input[type='hidden'][class='ShareCode']").val();
        MainVolumeDivisor = $j(this).find("input[type='hidden'][class='ShareVolumeDivisor']").val();
        MainChartTimeStamp = $j(this).find("input[type='hidden'][class='ShareTimeStamp']").val();
        if ($j(".hdnSelectedShare").val() != newShareType) {
            $j("input[value='" + newShareType + "']").prop("checked", "checked");
            $j(this).parent().find(".selected").prop("class", "ShareTypeTabClick");
            $j(this).prop("class", "selected");
            $j(".hdnSelectedShare").val(newShareType);
            $j("#btnLoadShareType").click();
        }
    });
    /*Chart option deopdown*/
    function DropDown(el) {
        this.chartOpt1 = el;
        this.placeholder = this.chartOpt1.children('span');
        this.opts = this.chartOpt1.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        if (testFlag == 0) {
            this.initEvents();
            testFlag++;
        }
    }

    DropDown.prototype = {
        initEvents: function () {
            var obj = this;
            $j(document).on('click', ".wrapper-dropdown-3", function (event) {
                var wantPostback = $j(this).hasClass("active");
                if (showDropdown == 1) {
                    $j(this).find(".dropdown").css('display', 'block');
                    showDropdown = 0;
                }
                else {
                    $j(this).find(".dropdown").css('display', 'none');
                    showDropdown = 1;
                }
                $j(this).toggleClass('active wrapper-dropdown-3up');
                if (wantPostback)
                    return true;
                return false;
            });
            $j(document).mouseup(function (e) {

                var container = $j(".wrapper-dropdown-3");

                if (!container.is(e.target) // if the target of the click isn't the container...
                 && container.has(e.target).length === 0) // ... nor a descendant of the container
                {
                    if (!$j(e.target).hasClass("myhtml")) { //Html document to avoid close on scrollbars
                        if ($j(container).hasClass('wrapper-dropdown-3up')) {
                            $j(container).removeClass('wrapper-dropdown-3up');
                            $j(container).removeClass('active');
                            if (showDropdown == 1) {
                                $j(this).find(".dropdown").css('display', 'none');
                                showDropdown = 0;
                            }
                            else {
                                $j(this).find(".dropdown").css('display', 'block');
                                showDropdown = 1;
                            }
                        }
                        else {
                            $j(this).find(".dropdown").css('display', 'none');
                            showDropdown = 1;
                        }
                        if ($j(".snapTableLink > span").hasClass("underline") && ($j(e.target).parents().index($j('.snapTableLink')) == -1) && ($j(e.target).parents().index($j('.snapTableDetails')) == -1) && !$j(e.target).hasClass("snapTableLink")) {
                            if ($j(e.target).html() != $j("html").html()) {
                                $j(".snapTableDetails").slideUp("slow");
                                $j(".snapTableLink .snapDropdown").removeClass("show");
                                $j(".snapTableLink > span").removeClass("underline");
                            }
                        }
                    }
                }
            });
            $j(document).on('click', ".wrapper-dropdown-3 li", function () {
                var opt = $j(this);
                showDropdown = 0;
                obj.val = opt.html();
                obj.index = opt.index();
                if ($j(".hdnSelectedTab").val() != "performance") {
                    if ($j(".SelectedChartScale").val() != $j(obj.val).find(".ChartScale").val()) {
                        $j(".SelectedChartScale").val($j(obj.val).find(".ChartScale").val());
                        $j("#chartOpt1 .chartopt1selected").html(obj.val);
                        ChangeChartScale($j(".SelectedChartScale").val());
                        UpdateConfig("SetChartScale", $j(".SelectedChartScale").val(), "");
                    }
                }
                if ($j(".hdnSelectedTab").val() == "performance")
                    obj.placeholder.html(obj.val);
            });
        },
        getValue: function () {
            return this.val;
        },
        getIndex: function () {
            return this.index;
        }
    }
    /*------------------------*/
    var chartOpt1 = new DropDown($j('#chartOpt1'));
    $j(document).click(function () {
        $j('#chartOpt1').removeClass('active');
        $j('#chartOpt2').removeClass('active');
        $j('#chartOpt3').removeClass('active');
    });
    $j("#chartOpt1").click(function () {
        $j('#chartOpt2').removeClass('active');
        $j('#chartOpt3').removeClass('active');
    });
    $j("#chartOpt2").click(function () {
        $j('#chartOpt1').removeClass('active');
        $j('#chartOpt3').removeClass('active');
    });
    //Date Picker
    $j(function () {
        $j("#from").datepicker({
            defaultDate: "+1w",
            //dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            //viyuta
            //showOn: "button",
            showOn: "both",
            buttonImage: "../images/events_active.png",
            buttonText: "",
            buttonImageOnly: true,
            beforeShow: function () {
                var objData = GetMainChartData();
                var dtMinDate;
                if (typeof objData != "undefined" && objData != null && objData.length > 0) {
                    dtMinDate = new Date(Number(GetMainChartData()[0][0]));
                }
                else {
                    dtMinDate = addDays(new Date(), -2);
                }
                var dateFormat = $j(this).datepicker('option', 'dateFormat');
                if (dateFormat.indexOf("MM") > -1)
                    dateFormat = dateFormat.replace(/M/g, "MM");
                else if (dateFormat.indexOf("M") > -1)
                    dateFormat = dateFormat.replace(/M/g, "MMM");
                dateFormat = dateFormat.replace(/m/g, "M");
                dateFormat = dateFormat.replace(/y/g, "yy");
                $j(this).datepicker("option", "minDate", dtMinDate);
                var ToDate = $j("#to").datepicker('getDate');
                $j(this).datepicker("option", "maxDate", addDays(new Date(ToDate), -1));
                $j(this).datepicker("option", "yearRange", '1970:' + new Date(ToDate).getFullYear());
            }
        });

        $j("#to").datepicker({
            defaultDate: "+1w",
            //dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            //viyuta
            //showOn: "button",
            showOn: "both",
            buttonImage: "../images/events_active.png",
            buttonText: "",
            buttonImageOnly: true,
            beforeShow: function (selectedDate) {
                var frmDate = $j("#from").datepicker('getDate');
                $j(this).datepicker("option", "minDate", addDays(new Date(frmDate), 1));

                var dtMaxDate = new Date(LastDataTime);
                var dateFormat = $j(this).datepicker('option', 'dateFormat');
                if (dateFormat.indexOf("MM") > -1)
                    dateFormat = dateFormat.replace(/M/g, "MM");
                else if (dateFormat.indexOf("M") > -1)
                    dateFormat = dateFormat.replace(/M/g, "MMM");
                dateFormat = dateFormat.replace(/m/g, "M");
                dateFormat = dateFormat.replace(/y/g, "yy");
                $j(this).datepicker("option", "maxDate", dtMaxDate);
                $j(this).datepicker("option", "yearRange", '1970:' + new Date(dtMaxDate).getFullYear());
                $j(this).datepicker("option", "maxDate", addDays((new Date), -1));
            }
        });
        //Added code by Rachit for Historic Share Price Control
        $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtFrom").datepicker({
            //defaultDate: "+1w",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            showOn: "both",
            buttonImage: "../images/events_active.png",
            buttonText: "",
            buttonImageOnly: true,
            regional: Culture,
            beforeShow: function (selectedDate) {
                if (typeof $j(".hdnPerformFirstDate") != "undefined" && $j(".hdnPerformFirstDate").length > 0) {
                    $j(this).datepicker("option", "minDate", $j(".hdnPerformFirstDate").val());
                }
                var ToDate = $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtTo").datepicker('getDate');
                $j(this).datepicker('option', 'maxDate', addDays(new Date(ToDate), -1));
                $j(this).datepicker("option", "yearRange", '1970:' + new Date(ToDate).getFullYear());
            }
        });

        $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtTo").datepicker({
            //defaultDate: "+1w",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            showOn: "both",
            buttonImage: "../images/events_active.png",
            buttonText: "",
            buttonImageOnly: true,
            regional: Culture,
            beforeShow: function (selectedDate) {
                var frmDateH = $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtFrom").datepicker('getDate');
                $j(this).datepicker("option", "minDate", addDays(new Date(frmDateH), 1));
                $j(this).datepicker("option", "maxDate", addDays((new Date), -1));
                $j(this).datepicker("option", "yearRange", '1970:' + (new Date()).getFullYear());
            }
        });

        var dtFromDate;
        var dtToDate;
        var Culture = _culture; // getParameterByName("culture");

        //if ($j(".hdnSelectedTab").val() == "history") {
        // if (LargeChartConfig == false) {
        dtFromDate = $j("#from").val();
        dtToDate = $j("#to").val();

        $j("#from").datepicker("option", $j.datepicker.regional[Culture]);
        $j("#to").datepicker("option", $j.datepicker.regional[Culture]);

        $j("#from").datepicker("setDate", dtFromDate);
        $j("#to").datepicker("setDate", dtToDate);
        //}
        //}
        // alert($j("#from").val());
        if ($j(".hdnSelectedTab").val() == "performance") {

            dtFromDate = $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtFrom").val();
            dtToDate = $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtTo").val();
            $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtFrom").datepicker("option", $j.datepicker.regional[Culture]);
            $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtTo").datepicker("option", $j.datepicker.regional[Culture]);

            $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtFrom").datepicker("setDate", dtFromDate);
            $j("#ucSPCTabBox_ucPerformance_ucHistoricSharePrice_txtTo").datepicker("setDate", dtToDate);
        }
        //End of added code by Rachit for Historic Share Price Control
    });
    // Script for Chart type change
    $j(".chartTypes ul").each(function () {
        var title1 = $j(".moreChartOptions ul li:first-child").text();
        $j(".moreChartOptions ul li:first-child").addClass("selected");
        $j(".moreChartArrow").after('<span class="chartSelected">' + title1 + '</span>')

        $j(".moreChartArrow, .chartSelected").click(function () {
            $j(".moreChartOptions").slideToggle("slow");
            $j(".moreChartArrow").toggleClass("show");
            $j(".moreChartOptions ul li").on("click", function (event) {
                //event.preventDefault();
                $j(".moreChartOptions ul li").removeClass("selected");
                $j(this).addClass("selected");
                title1 = $j(this).text();
                $j(".chartTypes span.chartSelected").text(title1)
                $j(".moreChartOptions").slideUp("slow");
                $j(".moreChartArrow").removeClass("show");
            });
        });
    });
    if ($j(".hdnSelectedTab").val() != "performance") {
        $j("#chartOpt1 ul li").each(function () {
            if ($j(this).find(".ChartScale").prop("checked")) {
                $j("#chartOpt1 .chartopt1selected").html($j(this).html());
                $j(".SelectedChartScale").val($j(this).find(".ChartScale").val());
            }
        });
        if (logoURL != '')
            $j("#container").attr('style', "background: url('" + logoURL + "') no-repeat center; float:left");
        LoadDefaultSelection();
    }
    else {
        //Added code by Rachit on 20 - March - 2014
        var viewportWidth = $j(window).width();
        if (viewportWidth <= 570) {
            $j(".tabStockperfomance ul").css("display", "none");
            $j(".tabhistoricshareprice ul").css("display", "none");
            $j(".tabStockperfomanceClick").removeClass("hideforDesktop");
        }
        else {
            $j(".tabStockperfomance ul").css("display", "block");
            $j(".tabhistoricshareprice ul").css("display", "block");
        }
        $j(".tabStockperfomance ul").each(function () {
            var title = $j(".tabStockperfomance ul li.selected a").text();
            $j(this).before('<span class="select hideforDesktop">' + title + '</span>')

            $j(".tabStockperfomance .select, .tabStockperfomanceClick").click(function () {
                $j(".tabStockperfomance ul").slideToggle("slow");
                $j(".tabStockperfomanceClick").toggleClass("show");
                $j(".tabStockperfomance ul li").on("click", function (event) {
                    $j(".tabStockperfomance ul li").removeClass("selected");
                    $j(this).addClass("selected");
                    title = $j(this).text();

                    $j(".tabStockperfomance span.select").text(title)
                    $j(".tabStockperfomance ul").slideUp("slow");
                    $j(".tabStockperfomanceClick").removeClass("show");
                });
            });
        });
        //End of added code by Rachit on 20 - March - 2014
        // Script for History Perfomance change
        $j(".tabhistoricshareprice ul").each(function () {
            var title = $j(".tabhistoricshareprice ul li.selected").text();
            //$j(".tabhistoricshareprice ul li:first-child").addClass("selected");
            $j(this).before('<span class="select hideforDesktop">' + title + '</span>')

            $j(".tabhistoricshareprice .select, .tabhistoricsharepriceClick").click(function () {
                $j(".tabhistoricshareprice ul").slideToggle("slow");
                $j(".tabhistoricsharepriceClick").toggleClass("show");
                $j(".tabhistoricshareprice ul li").on("click", function (event) {
                    $j(".tabhistoricshareprice ul li").removeClass("selected");
                    $j(this).addClass("selected");
                    title = $j(this).text();
                    $j(".tabhistoricshareprice span.select").text(title)
                    $j(".tabhistoricshareprice ul").slideUp("slow");
                    $j(".tabhistoricsharepriceClick").removeClass("show");
                });
            });
        });
    }
}

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}
function LoadLargeChart(URL, Height, Width) {
    if (Height == -1 && typeof screen != "undefined" && typeof screen.height != "undefined")
        Height = screen.height;
    if (Width == -1 && typeof screen != "undefined" && typeof screen.width != "undefined")
        Width = screen.width;
    window.open(URL, "", "'toolbar=no,resizable=1,scrollbars=yes,width=" + Width + ",height=" + Height + "'");
}
function LoadDefaultSelection() {
    CurrentSelectedTab = $j(".hdnSelectedTab").val();
    if ($j(".hdnSelectedTab").val() == "history") {
        if ($j(".AnalyseCheckBox") != null && $j(".AnalyseCheckBox").length > 0) {
            var AnalyseCheckBox = $j(".AnalyseCheckBox");
            AnalyseCheckBox.each(function () {
                if ($j(this).prop("checked") == true) {
                    $j(this).parents("div .shareItem").addClass("checked");
                    if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                        $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                        LowerChartAnalyses_Color = $j(this).parents("div .shareItem").find(".ShareColor").val();
                        LowerChartAnalyses_ShowVolume = true;
                    }
                    if ($j(this).val().toLowerCase() == "change") {
                        LowerChartAnalyses_ShowVolume = false;
                    }
                }
                else {
                    $j(this).removeProp("checked");
                    $j(this).parents("div .shareItem").removeClass("checked");
                    $j(this).parents("div .shareItem").find(".shareItemButton").removeAttr("style");
                }
            });
        }

    }
    else {
        $j('input:radio[name="AnalysesGroup"]:first').prop('checked', true);
        $j(".shareSection .shareItem .AnalyseCheckBox").parents('.shareSection').css("display", "none");
        LowerChartAnalyses_ShowVolume = true;
    }
    var Symbol;
    if (LargeChartConfig == false) {
        if ($j(".hdnSelectedShare").val() != "" && $j("input[name='" + $j(".hdnSelectedShare").val() + "']").val() != "") {
            Symbol = $j("input[name='" + $j(".hdnSelectedShare").val() + "']").val();
        }
    }
    else {
        var ShareTypeCheckBox = $j("input[class = 'ShareTypeCheckBox'][name='" + $j(".hdnSelectedShare").val() + "']");
        Symbol = ShareTypeCheckBox.val();
        ShareTypeCheckBox.prop("checked", "checked");
        ShareTypeCheckBox.parents("div .shareItem").addClass("checked");
        ShareTypeCheckBox.parents("div .shareItem").addClass("Main");
        ShareTypeCheckBox.parents("div .shareItemLabel").addClass("MainShare");
        if (ShareTypeCheckBox.parents("div .shareItem").find(".ShareColor") != null && ShareTypeCheckBox.parents("div .shareItem").find(".ShareColor").val() != "") {
            ShareTypeCheckBox.parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + ShareTypeCheckBox.parents("div .shareItem").find(".ShareColor").val() + " !important");
        }
        MainChartTimeStamp = $j(".hdnTimeStamp").val();

    }
    setConfig();

    if (_historyMsg != "historyMsg")
        historyMsg = _historyMsg;
    //viyuta
    if (_term_MovingAverageValidationMessage != "term_MovingAverageValidationMessage")
        term_MovingAverageValidationMessage = _term_MovingAverageValidationMessage;
    if (_term_MomentumValidationMessage != "term_MomentumValidationMessage")
        term_MomentumValidationMessage = _term_MomentumValidationMessage;

    LoadChart();
    var ShareTypeCheckBox = $j(".ShareTypeCheckBox");
    var doRefresh = false;
    if (ShareTypeCheckBox != null && ShareTypeCheckBox.length > 0) {
        var MainShareType = $j(".hdnSelectedShare").val();
        ShareTypeCheckBox.each(function () {
            if ($j(this).prop("name") != MainShareType && $j(this).prop("checked") == true) {
                $j(this).parents("div .shareItem").addClass("checked");
                if (LargeChartConfig == false)
                    $j(this).parents("div .shareItem").removeClass("Main");
                $j(this).parents("div .shareItemLabel").removeClass("MainShare");
                if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                    $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                    doRefresh = true;
                    LoadShareTypeData($j(this).val());
                }
            }
            else if ($j(this).prop("name") != MainShareType) {
                $j(this).removeProp("checked");
                $j(this).parents("div .shareItem").removeClass("checked");
                if (LargeChartConfig == false)
                    $j(this).parents("div .shareItem").removeClass("Main");
                $j(this).parents("div .shareItemLabel").removeClass("MainShare");
                $j(this).parents("div .shareItem").find(".shareItemButton").removeAttr("style");
            }
            else if ($j(this).prop("name") == MainShareType) {
                $j(this).prop("checked", "checked");
                $j(this).parents("div .shareItem").addClass("checked");
                $j(this).parents("div .shareItem").addClass("Main");
                $j(this).parents("div .shareItemLabel").addClass("MainShare");
                if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                    $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                }
            }
        });
    }
    if ($j(".PeerCheckBox") != null && $j(".PeerCheckBox").length > 0) {
        var PeerCheckBox = $j(".PeerCheckBox");
        PeerCheckBox.each(function () {
            var UseIntraday = $j(this).parents("div .shareItem").find(".ShareUseIntraday").val();
            if ($j(this).prop("checked") == true && ((UseIntraday == "True" && $j(".hdnSelectedTab").val() == "today") || $j(".hdnSelectedTab").val() == "history")) {
                $j(this).parents("div .shareItem").addClass("checked");
                if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                    $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                    doRefresh = true;
                    LoadPeerData($j(this).val());
                }
            }
            else if (UseIntraday != "True" && $j(".hdnSelectedTab").val() == "today") {
                $j(this).parents("div .shareItem").attr("style", "display:none");
            }
            else {
                $j(this).removeProp("checked");
                $j(this).parents("div .shareItem").removeClass("checked");
                $j(this).parents("div .shareItem").find(".shareItemButton").removeAttr("style");
            }
        });
    }
    Allhide = true;
    if ($j(".IndiceCheckBox") != null && $j(".IndiceCheckBox").length > 0) {
        var IndiceCheckBox = $j(".IndiceCheckBox");
        IndiceCheckBox.each(function () {
            var UseIntraday = $j(this).parents("div .shareItem").find(".ShareUseIntraday").val();
            if ($j(this).prop("checked") == true && ((UseIntraday == "True" && $j(".hdnSelectedTab").val() == "today") || $j(".hdnSelectedTab").val() == "history")) {
                $j(this).parents("div .shareItem").addClass("checked");
                if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                    $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                    doRefresh = true;
                    LoadIndicesData($j(this).val());
                    Allhide = false;
                }
            }
            else if (UseIntraday != "True" && $j(".hdnSelectedTab").val() == "today") {
                $j(this).parents("div .shareItem").attr("style", "display:none");
            }
            else {
                $j(this).removeProp("checked");
                $j(this).parents("div .shareItem").removeClass("checked");
                $j(this).parents("div .shareItem").find(".shareItemButton").removeAttr("style");
                Allhide = false;
            }
        });
    }
    if (doRefresh) {
        HighStockSetting_CommitChange();
    }
    if ($j(".hdnSelectedTab").val() == "history") {

        if ($j(".TechnicalAnalysisCheckBox") != null && $j(".TechnicalAnalysisCheckBox").length > 0) {
            var TechnicalAnalysisCheckBox = $j(".TechnicalAnalysisCheckBox");
            TechnicalAnalysisCheckBox.each(function () {
                if ($j(this).prop("checked") == true) {
                    if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                        if ($j(this).val() == 'momentum' && MomentumPeriod != "" && MomentumPeriod > 0) {
                            AnalysisColor.Momentum = $j(this).parents("div .shareItem").find(".ShareColor").val();
                            $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                            AddTechnicalAnalysis($j(this).val(), $j(this).parents("div .shareItem").find(".ShareColor").val(), MomentumPeriod);
                            $j(this).parents("div .shareItem").addClass("checked");
                        }
                        else if ($j(this).val() == 'movingaverage' && MovingAverage != "" && MovingAverage > 0) {
                            AnalysisColor.MovingAverage = $j(this).parents("div .shareItem").find(".ShareColor").val();
                            $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                            AddTechnicalAnalysis($j(this).val(), $j(this).parents("div .shareItem").find(".ShareColor").val(), MovingAverage);
                            $j(this).parents("div .shareItem").addClass("checked");
                        }
                        else if ($j(this).parents("div .shareItem").find(".period") != null && $j(this).parents("div .shareItem").find(".period").val() != "") {
                            if ($j(this).val() == 'movingaverage')
                                AnalysisColor.MovingAverage = $j(this).parents("div .shareItem").find(".ShareColor").val();
                            else if ($j(this).val() == 'momentum')
                                AnalysisColor.Momentum = $j(this).parents("div .shareItem").find(".ShareColor").val();
                            $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                            AddTechnicalAnalysis($j(this).val(), $j(this).parents("div .shareItem").find(".ShareColor").val(), $j(this).parents("div .shareItem").find(".period").val());
                            $j(this).parents("div .shareItem").addClass("checked");
                        }
                    }
                }
                else {
                    RemoveTechnicalAnalysis($j(this).val(), $j(this).parents("div .shareItem").find(".ShareColor").val());
                    $j(this).removeProp("checked");
                    $j(this).parents("div .shareItem").removeClass("checked");
                    $j(this).parents("div .shareItem").find(".shareItemButton").removeAttr("style");
                }
            });
        }

        if ($j(".ShareholderYieldCheckBox") != null && $j(".ShareholderYieldCheckBox").length > 0) {
            var ShareholderYieldCheckBox = $j(".ShareholderYieldCheckBox");
            ShareholderYieldCheckBox.each(function () {
                if ($j(this).prop("checked") == true) {

                    if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                        $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
                        AnalysisColor.TotalReturn = $j(this).parents("div .shareItem").find(".ShareColor").val();
                        AddTechnicalAnalysis($j(this).val(), $j(this).parents("div .shareItem").find(".ShareColor").val());
                        $j(this).parents("div .shareItem").addClass("checked");
                    }
                }
                else {
                    RemoveTRCIndicator($j(this).val(), $j(this).parents("div .shareItem").find(".ShareColor").val());
                    $j(this).removeProp("checked");
                    $j(this).parents("div .shareItem").removeClass("checked");
                    $j(this).parents("div .shareItem").find(".shareItemButton").removeAttr("style");
                }
            });
        }
    }
    else {
        $j(".shareSection .shareItem .TechnicalAnalysisCheckBox").parents('.shareSection').css("display", "none");
        $j(".shareSection .shareItem .ShareholderYieldCheckBox").parents('.shareSection').css("display", "none");

    }
    var MarkerCheckBox = $j(".MarkerCheckBox");
    if (MarkerCheckBox != null && MarkerCheckBox.length > 0) {
        MarkerCheckBox.each(function (mindex) {
            if ($j(MarkerCheckBox[mindex]).prop("checked") == true) {
                //edp and edpr marker in share holder yield
                if (typeof $j(MarkerCheckBox[mindex]).parents("div .markerItem") != "undefined" && $j(MarkerCheckBox[mindex]).parents("div .markerItem").length > 0)
                    $j(MarkerCheckBox[mindex]).parents("div .markerItem").toggleClass("checked");
                if (ShareTypeCheckBox != null && ShareTypeCheckBox.length > 0) {
                    ShareTypeCheckBox.each(function (sindex) {
                        if ($j(ShareTypeCheckBox[sindex]).prop("checked") == true) {
                            GetMarkerData($j(ShareTypeCheckBox[sindex]).val(), $j(MarkerCheckBox[mindex]).val());
                        }
                    });
                }
            }
        });
        //ArrangeMarkers();
    }
    SetShareSection();
}

function SetShareSection() {
    if (typeof SetClientSection == 'function') {
        SetClientSection();
    }
    else {
        if (Allhide) {
            if ($j(".IndiceCheckBox") != null && $j(".IndiceCheckBox").length > 0) {
                var IndiceCheckBox = $j(".IndiceCheckBox");
                $j(IndiceCheckBox[0]).parents("div .shareSection").attr("style", "display:none");
                if ($j(window).width() > 570) {
                    $j(".ShareDiv").attr("style", "width:50%");
                    $j(".PeerDiv").attr("style", "width:50%");
                }
            }
        }
    }
}

function SelectMainShareType() {
    var MainShareType = $j(".hdnSelectedShare").val();
    var ShareTypeCheckBox = $j(".shareItem .shareItemLabel input[class='ShareTypeCheckBox']");
    ShareTypeCheckBox.each(function () {
        if ($j(this).prop("name") == MainShareType) {
            $j(this).prop("checked", "checked");
            $j(this).parents("div .shareItem").addClass("checked");
            $j(this).parents("div .shareItem").addClass("Main");
            $j(this).parents("div .shareItemLabel").addClass("MainShare");
            if ($j(this).parents("div .shareItem").find(".ShareColor") != null && $j(this).parents("div .shareItem").find(".ShareColor").val() != "") {
                $j(this).parents("div .shareItem").find(".shareItemButton").attr("style", "background:" + $j(this).parents("div .shareItem").find(".ShareColor").val() + " !important");
            }
        }
        else {
            $j(this).removeProp("checked");
            $j(this).parents("div .shareItem").removeClass("checked");
            $j(this).parents("div .shareItem").removeClass("Main");
            $j(this).parents("div .shareItemLabel").removeClass("MainShare");
            $j(this).parents("div .shareItem").find(".shareItemButton").removeProp("style");
        }
    });
}

$j(function () {
    $j(document).on("click", ".shareSection .shareItem:not('.Main')", function () {
        //ShowLoader();
        var doRefresh = false;
        if ($j(this).find(".AnalyseCheckBox").length > 0 && $j.trim($j(this).find(".AnalyseCheckBox").val()) != "") {
            if ($j(this).hasClass("checked")) {
                return;
            }
        }
        if (!$j(this).hasClass("checked")) {
            var Symbol = "";
            if ($j(this).find(".ShareColor") != null && $j(this).find(".ShareColor").val() != "")
                $j(this).find(".shareItemButton").attr("style", "background:" + $j(this).find(".ShareColor").val() + " !important");
            if ($j(this).find(".ShareTypeCheckBox").length > 0 && $j.trim($j(this).find(".ShareTypeCheckBox").val()) != "") {
                $j(this).find(".ShareTypeCheckBox").prop("checked", "checked");
                doRefresh = true;
                LoadShareTypeData($j(this).find(".ShareTypeCheckBox").val());
                UpdateConfig("SetPeer", $j(this).find(".ShareTypeCheckBox").prop("name"), true);
            }
            else if ($j(this).find(".PeerCheckBox").length > 0 && $j.trim($j(this).find(".PeerCheckBox").val()) != "") {
                $j(this).find(".PeerCheckBox").prop("checked", "checked");
                doRefresh = true;
                LoadPeerData($j(this).find(".PeerCheckBox").val());
                UpdateConfig("SetPeer", $j(this).find(".PeerCheckBox").prop("name"), true);
            }
            else if ($j(this).find(".IndiceCheckBox").length > 0 && $j.trim($j(this).find(".IndiceCheckBox").val()) != "") {
                $j(this).find(".IndiceCheckBox").prop("checked", "checked");
                doRefresh = true;
                LoadIndicesData($j(this).find(".IndiceCheckBox").val());
                UpdateConfig("SetPeer", $j(this).find(".IndiceCheckBox").prop("name"), true);
            }
            else if ($j(this).find(".AnalyseCheckBox").length > 0 && $j.trim($j(this).find(".AnalyseCheckBox").val()) != "") {
                doRefresh = true;
                $j(this).parents(".shareSection").find('.shareItem').removeClass("checked");
                $j(this).parents(".shareSection").find('.shareItemButton').removeAttr("style");
                $j(this).find(".shareItemButton").attr("style", "background:" + $j(this).find(".ShareColor").val() + " !important");
                LowerChartAnalyses_Color = $j(this).find(".ShareColor").val();
                //Remove unselected option value
                if ($j(this).find(".AnalyseCheckBox").val().toLowerCase() == "volume")
                    UpdateConfig("SetPeer", "change", false);
                else
                    UpdateConfig("SetPeer", "volume", false);

                $j(this).find('input:radio').prop('checked', "checked");
                if ($j(this).find('input:radio').val().toLowerCase() == "volume")
                    LowerChartAnalyses_ShowVolume = true;
                else
                    LowerChartAnalyses_ShowVolume = false;
                GetAnalyseData($j(this).find(".AnalyseCheckBox").val());
                //Add selected option value
                UpdateConfig("SetPeer", $j(this).find(".AnalyseCheckBox").val(), true);
                //HideLoader();
            }
            else if ($j(this).find(".TechnicalAnalysisCheckBox").length > 0 && $j.trim($j(this).find(".TechnicalAnalysisCheckBox").val()) != "") {
                doRefresh = true;
                var obj = $j(this);
                //HideLoader();
                if (obj.find(".TechnicalAnalysisCheckBox").val() == 'totalreturn') {
                    AnalysisColor.TotalReturn = obj.find(".ShareColor").val();
                    AddTechnicalAnalysis(obj.find(".TechnicalAnalysisCheckBox").val(), obj.find(".ShareColor").val(), 0);
                    UpdateConfig("SetPeer", obj.find(".TechnicalAnalysisCheckBox").prop("name"), true);
                    $j(obj).toggleClass("checked");

                }
                else {
                    //jPrompt(term_period, obj.find(".period").val(), (jQuery(this).find(".TechnicalAnalysisCheckBox").val() == "movingaverage") ? term_MovingAveragePeriod : term_Momentum_Period, function (r) {
                    //viyuta
                    //var message = (jQuery(this).find(".TechnicalAnalysisCheckBox").val() == "movingaverage") ? ((typeof term_MovingAverageValidationMessage == 'undefined') ? "Please enter value within range 1 to 99." : term_MovingAverageValidationMessage) : ((typeof term_MomentumValidationMessage == 'undefined') ? "Please enter value within range 1 to 99." : term_MomentumValidationMessage);
                    var message = ($j(this).find(".TechnicalAnalysisCheckBox").val() == "movingaverage") ? term_MovingAverageValidationMessage : term_MomentumValidationMessage;
                    var maxLimit = ($j(this).find(".TechnicalAnalysisCheckBox").val() == "movingaverage") ? ((typeof MovingAverageMaxLimit == 'undefined') ? "200" : MovingAverageMaxLimit) : ((typeof MomentumMaxLimit == 'undefined') ? "200" : MomentumMaxLimit);
                    var value = obj.find(".period").val() + ':' + message + ':' + maxLimit;
                    jPrompt(term_period, value, ($j(this).find(".TechnicalAnalysisCheckBox").val() == "movingaverage") ? term_MovingAveragePeriod : term_Momentum_Period, function (r) {
                        if (r) {
                            if (obj.find(".TechnicalAnalysisCheckBox").val() == 'momentum') {
                                AnalysisColor.Momentum = obj.find(".ShareColor").val();
                                MomentumPeriod = r;
                            }
                            if (obj.find(".TechnicalAnalysisCheckBox").val() == 'movingaverage') {
                                AnalysisColor.MovingAverage = obj.find(".ShareColor").val();
                                MovingAverage = r;
                            }
                            //ShowLoader();

                            AddTechnicalAnalysis(obj.find(".TechnicalAnalysisCheckBox").val(), obj.find(".ShareColor").val(), r);
                            UpdateConfig("SetAnalysis", obj.find(".TechnicalAnalysisCheckBox").prop("name") + "&period=" + r, true);
                            $j(this).toggleClass("checked");
                        }
                        else {
                            obj.removeClass("checked");
                            obj.find(".shareItemButton").removeAttr("style");
                        }
                    });
                }
                //HideLoader();
            }
            else if ($j(this).find(".ShareholderYieldCheckBox").length > 0 && $j.trim($j(this).find(".ShareholderYieldCheckBox").val()) != "") {
                AnalysisColor.TotalReturn = $j(this).find(".ShareColor").val();
                doRefresh = true;
                AddTechnicalAnalysis($j(this).find(".ShareholderYieldCheckBox").val(), $j(this).find(".ShareColor").val(), 0);
                UpdateConfig("SetPeer", $j(this).find(".ShareholderYieldCheckBox").prop("name"), true);
            }
        } else {

            if ($j.trim($j(this).find(".AnalyseCheckBox").val()) == "") {
                $j(this).find(".shareItemButton").removeAttr("style");
            }

            if ($j(this).find(".ShareTypeCheckBox").length > 0 && $j.trim($j(this).find(".ShareTypeCheckBox").val()) != "") {
                RemoveShareData($j(this).find(".ShareTypeCheckBox").val() + '_peer');
                doRefresh = true;
                $j(this).find(".ShareTypeCheckBox").removeProp("checked");
                UpdateConfig("SetPeer", $j(this).find(".ShareTypeCheckBox").prop("name"), false);
            }
            else if ($j(this).find(".PeerCheckBox").length > 0 && $j.trim($j(this).find(".PeerCheckBox").val()) != "") {
                $j(this).find(".PeerCheckBox").removeProp("checked");
                RemoveShareData($j(this).find(".PeerCheckBox").val() + '_peer');
                doRefresh = true;
                UpdateConfig("SetPeer", $j(this).find(".PeerCheckBox").prop("name"), false);
            }
            else if ($j(this).find(".IndiceCheckBox").length > 0 && $j.trim($j(this).find(".IndiceCheckBox").val()) != "") {
                $j(this).find(".IndiceCheckBox").removeProp("checked");
                RemoveShareData($j(this).find(".IndiceCheckBox").val() + '_indices');
                doRefresh = true;
                UpdateConfig("SetPeer", $j(this).find(".IndiceCheckBox").prop("name"), false);
            }
            else if ($j(this).find(".TechnicalAnalysisCheckBox").length > 0 && $j.trim($j(this).find(".TechnicalAnalysisCheckBox").val()) != "") {
                $j(this).find(".TechnicalAnalysisCheckBox").removeProp("checked");
                RemoveShareData($j(this).find(".TechnicalAnalysisCheckBox").val());
                doRefresh = true;
                UpdateConfig("SetPeer", $j(this).find(".TechnicalAnalysisCheckBox").prop("name"), false);
            }
            else if ($j(this).find(".ShareholderYieldCheckBox").length > 0 && $j.trim($j(this).find(".ShareholderYieldCheckBox").val()) != "") {
                $j(this).find(".ShareholderYieldCheckBox").removeProp("checked");
                RemoveTRCIndicator($j(this).find(".ShareholderYieldCheckBox").val());
                doRefresh = true;
                UpdateConfig("SetPeer", $j(this).find(".ShareholderYieldCheckBox").prop("name"), false);
            }
        }
        if (doRefresh == true) {
            HighStockSetting_CommitChange();
        }
        $j(this).toggleClass("checked");
    });
});

function ValidateInt(inputtxt) {
    var numbers = /^[1-9]/;
    if (inputtxt.match(numbers)) {
        return true;
    }
    else {
        return false;
    }
}

/*
//Without sessionID
function UpdateConfig(MethodName, Name, Value) {
    var URL = window.location.href;
    URL = (URL.indexOf("#") > -1) ? URL.replace("#", "") : URL;
    var QueryString = "";
    if (URL != "" && URL.indexOf("?") > -1) {
        var res = URL.split('?');
        URL = res[0];
        QueryString = res[1];
    }
    var subUrl = URL.toLowerCase().split('clients');

    URL = subUrl[0] + "Clients/UpdateConfig.aspx?appPath=/Clients" + subUrl[1];
    $j.ajax({
        type: "POST",
        url: URL + "&" + QueryString + "&methodname=" + MethodName + "&key=" + Name + "&value=" + Value,
        data: '{}',
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            if (data == "Session Expired") {
                //window.location.reload(true) the browser will skip the cache and reload the page from the server. window.location.reload(false) will do the opposite.The default is false
                //window.location.reload(true);
            }
        },
        failure: function (response) {

        }, beforeSend: setHeader
    });
    ////$j.unblockUI();
}
*/

//With SessionID in Querystring
function UpdateConfig(MethodName, Name, Value) {
    CheckNoData();

    var URL = window.location.href;
    URL = (URL.indexOf("#") > -1) ? URL.replace("#", "") : URL;
    var QueryString = "";
    if (URL != "" && URL.indexOf("?") > -1) {
        var res = URL.split('?');
        URL = res[0];
        QueryString = res[1];
    }
    var subUrl = URL.split('/(S(');
    URL = subUrl[0] + "/UpdateConfig.aspx?appPath=/Clients/(S(" + subUrl[1];
    $j.ajax({
        type: "POST",
        url: URL + "&" + QueryString + "&methodname=" + MethodName + "&key=" + Name + "&value=" + Value,
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            alert(data);
        },
        failure: function (response) {
        }
    });
}

function ChangeTopMenu(selectedli) {
    $j(".exchangeSelect ul li").removeClass("selected");
    selectedli.addClass("selected");
    title = selectedli.html();
    var ieversion = 8;
    var doReplace = false;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
        ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
        doReplace = true;
    }
    if (ieversion <= 8 && doReplace == true)
        title = title.replace(/name=/g, 'name=1');
    else
        title = title.replace(/name="/g, 'name="1');
    $j(".exchangeSelect div.select").html(title)

}

function ChangeSelectedExc(callback) {
    callback = typeof callback !== 'undefined' ? callback : function () { };
    var shareinputs = $j("div .currentexchange input[class='sharetype']");
    var SelectedShare = $j(".hdnSelectedShare").val();
    shareinputs.each(function (index) {
        if ($j(this).val() == SelectedShare) {
            $j(this).parent().prop("class", "selected");
        }
        else {
            $j(this).parent().prop("class", "ShareTypeTabClick");
        }
    });
    $j(".eClick").removeClass("show");
    $j(".eClick").removeClass("expanded");
    $j(".exchangeSelect ul").slideUp({ duration: 0, done: callback });
}

function setHeader(xhr) {
    //xhr.setRequestHeader('Authorization', 'Basic faskd52352rwfsdfs');
    //xhr.setRequestHeader('User-Agent', 'SM7');
    xhr.setRequestHeader('X-PartnerKey', _keypart);
}

function SetDate(from, to) {
    var dateFormat = $j("#from").datepicker('option', 'dateFormat');
    if (dateFormat.indexOf("MM") > -1)
        dateFormat = dateFormat.replace(/M/g, "MM");
    else if (dateFormat.indexOf("M") > -1)
        dateFormat = dateFormat.replace(/M/g, "MMM");
    dateFormat = dateFormat.replace(/m/g, "M");
    dateFormat = dateFormat.replace(/y/g, "yy");
    var dtMinDate = new Date(from);
    var dtMaxDate = new Date(to);
    $j("#from").datepicker("option", $j.datepicker.regional[_culture]);
    $j("#to").datepicker("option", $j.datepicker.regional[_culture]);

    $j("#from").datepicker("setDate", dtMinDate);
    $j("#to").datepicker("setDate", dtMaxDate);
}

function CalculateHighForHistory(xValue, MainDataArray) {
    var High = 0;
    $j.each(MainDataArray, function (key) {
        if (xValue == MainDataArray[key][0]) {
            High = MainDataArray[key][3];
            return false;
        }
    });
    return High;
}

function CalculateLowForHistory(xValue, MainDataArray) {
    var Low = 0;
    $j.each(MainDataArray, function (key) {
        if (xValue == MainDataArray[key][0]) {
            Low = MainDataArray[key][4];
            return false;
        }
    });
    return Low;
}

function GetChartData(Symbol) {
    var cData = { "ShareName": Symbol, "ShareColor": MainChartColor };
    var ShareInp = $j("input[type='checkbox'][value='" + Symbol + "']");
    if (ShareInp != null && ShareInp.length > 0 && ShareInp.parent().text() != "")
        cData.ShareName = ShareInp.parent().text();
    if (ShareInp != null && ShareInp.length > 0 && ShareInp.siblings("input[type='hidden'][class='ShareColor']").val() != "") {
        cData.ShareColor = ShareInp.siblings("input[type='hidden'][class='ShareColor']").val();
    }
    if (Symbol == cData.ShareName && MainShareName != "")
        cData.ShareName = MainShareName;
    return cData;
}

function CheckSeletedState(Symbol) {
    var ShareInp = $j("input[type='checkbox'][value='" + Symbol + "']");
    return $j(ShareInp).prop("checked");
}

function GetMaxMinDataPoint(objData) {
    var cMaxMinData = { "MaxValue": -1, "MaxTime": "", "MinValue": -1, "MinTime": "" };
    var MaxTs = "";
    var MinTs = "";
    var maxVal = -Infinity;
    var minVal = Infinity;
    for (var index = 0, num = objData.length; index < num; index++) {
        if (objData[index].y != null && objData[index].y >= maxVal) {
            MaxTs = objData[index].x;
            maxVal = objData[index].y;
        }
        if (objData[index].y != null && objData[index].y <= minVal) {
            MinTs = objData[index].x;
            minVal = objData[index].y;
        }
    }
    cMaxMinData.MaxValue = maxVal;
    cMaxMinData.MinValue = minVal;
    cMaxMinData.MaxTime = MaxTs;
    cMaxMinData.MinTime = MinTs;
    return cMaxMinData;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search.toLowerCase());
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function WriteLog(msg) {
    //var d = new Date();
    //var txt = $j("#log").val() + d + msg;
    //$j("#log").val(txt);
}

function ShowLoader() {
    $j.unblockUI();
    $j.blockUI({ theme: false, message: "<img src='../Images/ajax-loader.gif' />", fadeIn: 0 });
    setTimeout($j.unblockUI, 2000);
}

function HideLoader() {
    $j.unblockUI();
}

function DrawTreadByBrokerChart() {

    var BuyerData = $j('#ucSPCTabBox_ucIntradayChartBox_ucTradesByBroker_hdnBuyerData').val();
    var SellerData = $j('#ucSPCTabBox_ucIntradayChartBox_ucTradesByBroker_hdnSellerData').val();

    var jsonbuyerdata;
    var jsonsellerdata;
    if (BuyerData != undefined && BuyerData.length > 0) {

        jsonbuyerdata = $j.parseJSON(BuyerData);

        if ($j('#BuyerChart').length > 0) {
            var Buyerchart = new Highcharts.Chart({
                chart: {
                    renderTo: 'BuyerChart',
                    type: 'pie',
                    backgroundColor: (typeof BuyerChartBackgroundColor !== 'undefined') ? BuyerChartBackgroundColor : ''
                },
                title: {
                    text: ''
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            distance: (typeof BuyerSellerChartdistance !== 'undefined') ? BuyerSellerChartdistance : 15,
                            enabled: true,
                            connectorWidth: (typeof BuyerSellerChartConnectorWidth !== 'undefined') ? BuyerSellerChartConnectorWidth : 0
                        }
                    }
                },
                tooltip: {


                    useHTML: true,
                    //If tooltip not render properly please check below class in main.css file
                    //.highcharts-tooltip > span {white-space:normal !important; left: -1px !important;top: -1px !important;}
                    formatter: function () {
                        return '<div class="TradeByBorkerChartToolTip" ><b>' + this.key + '</b> : <b>' + Highcharts.numberFormat(this.y, decimalPlace) + ' %</b></div>';
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Broker',
                    data: jsonbuyerdata,

                    size: '60%',
                    innerSize: (typeof BuyerSellerChartinnerSize !== 'undefined') ? BuyerSellerChartinnerSize : '40%',
                    showInLegend: false
                }],
                exporting: {
                    enabled: false
                }
            });
        }
    }

    if (SellerData != undefined && SellerData.length > 0) {

        jsonsellerdata = $j.parseJSON(SellerData);

        if ($j('#SellerChart').length > 0) {
            var SellerChart = new Highcharts.Chart({
                chart: {
                    renderTo: 'SellerChart',
                    type: 'pie',
                    backgroundColor: (typeof SellerChartBackgroundColor !== 'undefined') ? SellerChartBackgroundColor : ''
                },
                title: {
                    text: ''
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            distance: (typeof BuyerSellerChartdistance !== 'undefined') ? BuyerSellerChartdistance : 15,
                            enabled: true,
                            connectorWidth: (typeof BuyerSellerChartConnectorWidth !== 'undefined') ? BuyerSellerChartConnectorWidth : 0
                        }
                    }
                },
                tooltip: {


                    useHTML: true,
                    //If tooltip not render properly please check below class in main.css file
                    //.highcharts-tooltip > span {white-space:normal !important; left: -1px !important;top: -1px !important;}
                    formatter: function () {
                        return '<div class="TradeByBorkerChartToolTip" ><b>' + this.key + '</b> : <b>' + Highcharts.numberFormat(this.y, decimalPlace) + ' %</b></div>';
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Broker',
                    data: jsonsellerdata,

                    size: '60%',
                    innerSize: (typeof BuyerSellerChartinnerSize !== 'undefined') ? BuyerSellerChartinnerSize : '40%',
                    showInLegend: false
                }],
                exporting: {
                    enabled: false
                }
            });
        }
    }


    //viyuta
    if (BuyerData != undefined && BuyerData.length > 0 && SellerData != undefined && SellerData.length > 0) {
        if ($j.parseJSON(BuyerData).length == 0 && $j.parseJSON(SellerData).length == 0) {
            //$j('#ucSPCTabBox_ucIntradayChartBox_ucTradesByBroker_divTradesByBroker').css('display', 'none');
            $j('#BuyerChart').css('display', 'none');
            $j('#SellerChart').css('display', 'none');
            //$j('#ucSPCTabBox_ucIntradayChartBox_ucTradesByBroker_divTradesByBroker').append('<div>No data found</div>');
        }
    }
}
//End Chart JS