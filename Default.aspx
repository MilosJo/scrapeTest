

<!DOCTYPE html >
<html xmlns="http://www.w3.org/1999/xhtml">
<head><!-- PSPCEUC1WEB01--><title>
	Share Price Center
</title><meta http-equiv="Content-Type" content="text/html; charset=windows-1252"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><link href="css/css_2.css" rel="stylesheet" type="text/css"><link type="text/css" rel="stylesheet" href="css/Main.css"><link type="text/css" rel="stylesheet" href="css/jQuery.alert.css"><link href="css/highslide.css" rel="stylesheet">
    <script type="text/javascript" src="translations.aspx"></script> 
    <script type="text/javascript" lang="javascript" src="js/jquery-1.10.2.js"></script>
    <script type="text/javascript" lang="javascript" src="js/highstock.js"></script>
    
    <script type="text/javascript" lang="javascript" src="js/datepicker-culture.js"></script>
    <script type="text/javascript" lang="javascript" src="js/datepicker.js"></script>
    <script type="text/javascript" lang="javascript" src="js/highstock_config.js"></script>
     <script type="text/javascript" lang="javascript" src="js/touch-tooltip-fix.js"></script>
    <!--[if lt IE 8]>
    <script type="text/javascript" lang="javascript" src="../../../default/respond.src.js"></script>
    <![endif]-->
    <script type="text/javascript" lang="javascript" src="js/highslide-full.min.js"></script>
    <script type="text/javascript" lang="javascript" src="js/highslide.config.js"></script>
    <script type="text/javascript" lang="javascript" src="js/SharePriceCenterConfig.js"></script>    
    <script type="text/javascript" lang="javascript" src="js/chartlib.js"></script>
    <script type="text/javascript" lang="javascript" src="js/Main.js"></script>

		<meta http-equiv="imagetoolbar" content="no">
</head>
<body class="no-touch">
    
    <form name="form1" method="post" action="./Default.aspx?culture=en-GB" id="form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE1NjM0NzYyMDMPZBYEAgEPZBYCAggPFQFRLi4vLi4vLi4vZGVmYXVsdC90cmFuc2xhdGlvbnMuYXNweD9DbGllbnROYW1lPWRlZmF1bHQmbm9jYWNoZT1mYWxzZSZjdWx0dXJlPWVuLUdCZAIDD2QWBAIJD2QWAgIFDxYCHgtfIUl0ZW1Db3VudAIBFgICAQ9kFgRmDxUEBG1haW4DTFNFBG1haW4RY2hlY2tlZD0iY2hlY2tlZCJkAgUPFgIfAAIBFgICAQ9kFgJmDxUGDm1haW5TaGFyZVR5cGUxGlNwaXJlIEhlYWx0aGNhcmUgR3JvdXAgcGxjDW1haW5TaGFyZVR5cGUObWFpblNoYXJlVHlwZTERY2hlY2tlZD0iY2hlY2tlZCIILTM2MDAwMDBkAg0PZBYCZg9kFgICAQ9kFgQCAQ8WAh8AAgIWBAIBD2QWBGYPFQIFVG9kYXkOZmlyc3Qgc2VsZWN0ZWRkAgEPDxYEHgRUZXh0BQp0ZXJtX1RvZGF5Hg9Db21tYW5kQXJndW1lbnQFBXRvZGF5ZGQCAg9kFgRmDxUCB0hpc3RvcnkAZAIBDw8WBB8BBQx0ZXJtX0hpc3RvcnkfAgUHaGlzdG9yeWRkAgcPZBYIAgIPFgIeB1Zpc2libGVoZAIEDxYCHwACAxYGAgEPZBYGZg8VAghhYnNvbHV0ZRdpY29uLWNoYXJ0dHAxaWNvbi1sYXJnZWQCAQ8PFgIfAQUNdGVybV9hYnNvbHV0ZWRkAgIPFQIIYWJzb2x1dGUAZAICD2QWBmYPFQIIcmVsYXRpdmUXaWNvbi1jaGFydHRwMmljb24tbGFyZ2VkAgEPDxYCHwEFDXRlcm1fcmVsYXRpdmVkZAICDxUCCHJlbGF0aXZlEWNoZWNrZWQ9ImNoZWNrZWQiZAIDD2QWBmYPFQIHaW5kZXhlZBdpY29uLWNoYXJ0dHAzaWNvbi1sYXJnZWQCAQ8PFgIfAQUMdGVybV9pbmRleGVkZGQCAg8VAgdpbmRleGVkAGQCCg8WAh8DaBYCAgEPFgIfAGZkAhYPZBYCZg9kFgQCAQ9kFgwCCQ8WAh8AAgEWAgIBD2QWAmYPFQYaU3BpcmUgSGVhbHRoY2FyZSBHcm91cCBwbGMObWFpblNoYXJlVHlwZTEGU1BIRy5MAAcjOTJiNGFkA0dCWGQCDw8WAh8AZmQCFQ8WAh8AAgMWBgIBD2QWAmYPFQcPRlRTRSBIZWFsdGhjYXJlBkluZGV4MQouRlRBU1g0NTMwAAcjNjY2NjY2AAVGYWxzZWQCAg9kFgJmDxUHFUZUU0UgMzUwIC0gSGVhbHRoY2FyZQZJbmRleDIILk5NWDQ1MzAAByMzMzk5RkYABUZhbHNlZAIDD2QWAmYPFQcORlRTRSBBbGwgU2hhcmUGSW5kZXgzBS5GVEFTAAcjODg3Nzk5AAVGYWxzZWQCGw8WAh8AAgIWBAIBD2QWAmYPFQYIZGlzcGxheToGVm9sdW1lBnZvbHVtZRFjaGVja2VkPSJjaGVja2VkIgcjOTJiNGFkAGQCAg9kFgJmDxUGCGRpc3BsYXk6DERhaWx5IGNoYW5nZQZjaGFuZ2UAByM5MmI0YWQAZAIhDxYCHwACAhYEAgEPZBYCZg8VBwhkaXNwbGF5Og5Nb3ZpbmcgYXZlcmFnZQ1tb3ZpbmdhdmVyYWdlDW1vdmluZ2F2ZXJhZ2UAByM4ODg4ODgCMjBkAgIPZBYCZg8VBwhkaXNwbGF5OghNb21lbnR1bQhtb21lbnR1bQhtb21lbnR1bQAHIzAwMDAwMAIxNGQCJw8WAh8AAgEWAgIBD2QWAmYPFQYIZGlzcGxheToMVG90YWwgcmV0dXJuC3RvdGFscmV0dXJuC3RvdGFscmV0dXJuAAcjYWZhMTI5ZAIFDw8WAh4RZHNTZWxlY3RlZENvbXBhbnky6QYAAQAAAP////8BAAAAAAAAAAwCAAAARlFmeC5EYXRhQ2xhc3NlcywgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGwFAQAAACFRZnguRGF0YUNsYXNzZXMuQ29uZmlnLkRhdGFTb3VyY2UMAAAAA19JZAtfUmVnaXN0ZXJlZAVfQ29kZQVfVHlwZQtfQXR0cmlidXRlcwRfVXJsCV9MYW5ndWFnZQdfaGlkZGVuDl9tb3ZpbmdBdmVyYWdlAmlkCV9BZGRIb3VycwhfQ3VsdHVyZQEAAQQDAQEAAAEAAQElUWZ4LkRhdGFDbGFzc2VzLkNvbmZpZy5EYXRhU291cmNlVHlwZQIAAACTAVN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3RgMVtbUWZ4LkRhdGFDbGFzc2VzLkNvbmZpZy5Db25maWdBdHRyaWJ1dGUsIFFmeC5EYXRhQ2xhc3NlcywgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxdXQEICAIAAAAGAwAAAA5tYWluU2hhcmVUeXBlMQAGBAAAAAZTUEhHLkwF+////yVRZnguRGF0YUNsYXNzZXMuQ29uZmlnLkRhdGFTb3VyY2VUeXBlAQAAAAd2YWx1ZV9fAAgCAAAAAAAAAAkGAAAACgYHAAAAA2FueQABAAAACvHY//8KBAYAAACTAVN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3RgMVtbUWZ4LkRhdGFDbGFzc2VzLkNvbmZpZy5Db25maWdBdHRyaWJ1dGUsIFFmeC5EYXRhQ2xhc3NlcywgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxdXQMAAAAGX2l0ZW1zBV9zaXplCF92ZXJzaW9uBAAAKFFmeC5EYXRhQ2xhc3Nlcy5Db25maWcuQ29uZmlnQXR0cmlidXRlW10CAAAACAgJCAAAAAAAAAAAAAAABwgAAAAAAQAAAAAAAAAEJlFmeC5EYXRhQ2xhc3Nlcy5Db25maWcuQ29uZmlnQXR0cmlidXRlAgAAAAtkFgQCAg8PFgIfAQUDR0JYZGQCCg8WAh8AAgUWCmYPZBYQZg8VAQ90cmFkZURhdGEgZmlyc3RkAgMPDxYCHwEFFDcvMjkvMjAxOSA0OjM1OjI5IFBNZGQCBw8PFgIfAQUKMTE2LjQwMDAwMmRkAgoPFQEQLi4vaW1hZ2VzL3VwLnBuZ2QCCw8PFgIfAQUSMC4wMTgzNzI3MjA5MDk4ODYzZGQCDQ8PFgIfAQUIMi4xMDAwMDJkZAIODxUBEC4uL2ltYWdlcy91cC5wbmdkAhEPDxYCHwEFBDY4OTFkZAIBD2QWEGYPFQEPdHJhZGVEYXRhIGFsdGJnZAIDDw8WAh8BBRQ3LzI5LzIwMTkgNDoyOTo1NyBQTWRkAgcPDxYCHwEFCjExNi42OTk5OTdkZAIKDxUBEC4uL2ltYWdlcy91cC5wbmdkAgsPDxYCHwEFEjAuMDIwOTk3MzQ5MDgxMzY0OWRkAg0PDxYCHwEFCDIuMzk5OTk3ZGQCDg8VARAuLi9pbWFnZXMvdXAucG5nZAIRDw8WAh8BBQI4OWRkAgIPZBYQZg8VAQl0cmFkZURhdGFkAgMPDxYCHwEFFDcvMjkvMjAxOSA0OjIyOjU0IFBNZGQCBw8PFgIfAQUDMTE3ZGQCCg8VARAuLi9pbWFnZXMvdXAucG5nZAILDw8WAh8BBRIwLjAyMzYyMjA0NzI0NDA5NDRkZAINDw8WAh8BBQMyLjdkZAIODxUBEC4uL2ltYWdlcy91cC5wbmdkAhEPDxYCHwEFAzExMmRkAgMPZBYQZg8VAQ90cmFkZURhdGEgYWx0YmdkAgMPDxYCHwEFFDcvMjkvMjAxOSA0OjIwOjA0IFBNZGQCBw8PFgIfAQUKMTE3LjU5OTk5OGRkAgoPFQEQLi4vaW1hZ2VzL3VwLnBuZ2QCCw8PFgIfAQUSMC4wMjg4NzEzNzM1NzgzMDI4ZGQCDQ8PFgIfAQUIMy4yOTk5OThkZAIODxUBEC4uL2ltYWdlcy91cC5wbmdkAhEPDxYCHwEFAzU4N2RkAgQPZBYQZg8VAQl0cmFkZURhdGFkAgMPDxYCHwEFFDcvMjkvMjAxOSA0OjEwOjU0IFBNZGQCBw8PFgIfAQUDMTE3ZGQCCg8VARAuLi9pbWFnZXMvdXAucG5nZAILDw8WAh8BBRIwLjAyMzYyMjA0NzI0NDA5NDRkZAINDw8WAh8BBQMyLjdkZAIODxUBEC4uL2ltYWdlcy91cC5wbmdkAhEPDxYCHwEFBDI4MDZkZGTsuuV60iiLeYkzU29r9MqVgAqaPw==">


<script src="ScriptResource.axd" type="text/javascript"></script>
<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="CD186526">
<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAAuGSJUCbRz/P5Y7d/T9OCOTvzvI3QODOBBz344PzEH3tkoDWJTZRvCIW3Glg1Dv1x01Rv7Jetd64YUzbSI/iRTWercC/DTt0qTibk0Zqzf3jIzpJ7o7Ih7qK9oYckLze0zdyEhjWVGR/Q6TyGnd35jOblEHt+0W7uKvQLr89Nwy7RRXJ5yUsJAOyU1+FvIcp42G+oqQ9zf1h10o0JJ0CfEqMArJ+Fh5MKMbETjZllFMVyGLyykkD0n5JdEvGCNgF+B64M1S">
        
        
        <div class="mainWrapper">
            <!-- Exchagne starts here -->
            <div class="headingSection">
               
                <div class="headingRight">
                    <div class="refWrapper">
                        <span id="Label1" class="refreshText">Refresh</span>
                        <span class="refreshButton"></span>
                    </div>
                   
                    
<script type="text/javascript" src="js/SocialMedia.js"></script>
<input type="hidden" name="SocialMedia1$hdnUrlsource" id="SocialMedia1_hdnUrlsource" value="http://ir.tools.investis.com/clients/uk/spire_healthcare/SM7/Default.aspx?culture=en-GB">
<ul>
    

    

    <li class="facebook" style="display:"><a id="ancFacebook" onclick="javascript:SocialMedia('facebook','Share Price Center','');return false;"></a></li>
    <li class="twitter" style="display:"><a id="anctwitter" onclick="javascript:SocialMedia('twitter','Share Price Center','');return false;"></a></li>
    <li class="linkdin" style="display:"><a id="anclinkdin" onclick="javascript:SocialMedia('linkedin','Share Price Center','');return false;"></a></li>
    <li class="googleP" style="display:"><a id="ancgoogleP" onclick="javascript:SocialMedia('googlePlus','Share Price Center','');return false;"></a></li>
</ul>

                </div>
            </div>
            <!-- Exchagne ends here -->
            <!-- Snapshot box starts here -->
            <div class="snapshotWrapper">

                

<div class="exchangeListWrapper">
    <div class="exchangeSelect">
        <div class="exchangeDetails">
            <div id="ucExc_upShareType">
	
                    <span class="eClick showMoreExchange"></span>
                    <div class="timeStandard">
                        <span id="ucExc_Snapshot11" class="exchangeDate">BST</span><span id="ucExc_Snapshot1" class="exchangeTime">16:35</span>
                    </div>
                    <span id="ucExc_Snapshot2" class="exchangeDate">29/07/2019</span>
                
</div>
        </div>
        
        <div>
            
                    <ul class="forDesktop">
                
                    <li class="ExchangeClick" id="main">
                        <a href="#">LSE<input class="shares" style="display: none" type="radio" name="shares" id="btnShares" value="main" checked="checked"></a><input type="hidden" name="ucExc$rptExchangeList$ctl01$hdnKey" id="ucExc_rptExchangeList_ctl01_hdnKey" value="main">
                        
                        
                                <div>
                            
                                <span class="ShareTypeClick" id="mainShareType1">Paton Medical Group Group plc<input style="display: none" class="sharetype" type="radio" name="mainShareType" value="mainShareType1" checked="checked"><input class="ShareTimeStamp" type="hidden" value="-3600000"></span>
                            </div>
                        
                    </li>
                
                    </ul>
                
            
        </div>
    </div>
    <input type="hidden" class="hdnSelectedExc">
    <input type="hidden" class="hdnSelectedShare">
</div>


                <div id="upSnapshot">
	
                        <input type="submit" name="btnLoadExchange" value id="btnLoadExchange" style="display: none">
                        <input type="submit" name="btnLoadShareType" value id="btnLoadShareType" style="display: none">
                        
<div class="snapData">
    <div class="lastValueBox">
        <span id="snapShotBox_price" class="lastLabel">116.40</span><div class="changeData">
            <span id="snapShotBox_SnapshotDifference1"><span class="positive">+2.10</span></span>&nbsp;<span class="bropen">(</span><span id="snapShotBox_SnapshotDifference2"><span class="positive">+1.84 %</span></span><span class="bropen">)</span><br>
            <span id="snapShotBox_Instrument1">GBX</span>
        </div>
    </div>
    <div class="hide640 otherValueBox">
        <div class="otherValueBox-outer">
            <span id="snapShotBox_Label10" class="otherValueBox-lable">Volume</span>
            <span id="snapShotBox_Snapshot1" class="otherValueBox-data">111,438</span>
        </div>
        <div class="otherValueBox-outer"><span id="snapShotBox_Label1" class="otherValueBox-lable">Day high</span><span id="snapShotBox_Snapshot4" class="otherValueBox-data">117.60</span></div>
        <div class="otherValueBox-outer">
            <span id="snapShotBox_Label2" class="otherValueBox-lable">Market cap</span>
            <div class="otherValueBox-data">
                <span id="snapShotBox_marketcap1">466.86</span>
                <span id="snapShotBox_Instrument3">M</span>
                <span id="snapShotBox_Instrument2">GBP</span>
            </div>
        </div>
        <div class="otherValueBox-outer"><span id="snapShotBox_Label3" class="otherValueBox-lable">Day low</span><span id="snapShotBox_Snapshot5" class="otherValueBox-data">113.16</span></div>
    </div>
</div>

                        
<div class="dayChangeWrapper" style="display:">
    <span class="dayChangeLowLabel">L</span>
    <div class="dayChangeChart">
        <img src="images/white_arrow_down.png" alt="116.40" style="left:72%" class="dayChangeImgStatus">
        <div class="dayChangeLowValue" style="width:72%"></div>
        <div class="dayChangeHighValue" style="width:28%"></div>
    </div>
    <span class="dayChangeHighLabel">H</span><span id="SnapshotChartBox_lblDay" class="dayChangeLabel">Day</span>
</div>

                        <div class="topTableWrapper">
                            <div class="snapTableLink">
                                <span id="Label3" class="fl">Detailed share information</span>
                                <span class="snapDropdown"></span>
                            </div>
                            
<div class="snapTableDetails">
    <div class="shareDetails">
        <div>
            <span id="SnapShotDetailBox_Label3" class="fl">Symbol</span>
            
            <span class="fr"> SPI </span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label1" class="fl">ISIN</span>
            <span id="SnapShotDetailBox_Instrument1" class="fr">GB00BNLPYF73</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label13" class="fl">Currency</span>
            <span id="SnapShotDetailBox_Instrument5" class="fr">GBX</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label2" class="fl">Shares in issue</span>
            <span id="SnapShotDetailBox_Instrument2" class="fr">401081391</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label11" class="fl">Market cap</span>
            
            <span class="fr">
            <span id="SnapShotDetailBox_marketcap1">466.86</span>
            <span id="SnapShotDetailBox_Instrument3">M</span>
            <span id="SnapShotDetailBox_Instrument4">GBP</span>
        	</span>
        </div>
        
        <div>
            <span id="SnapShotDetailBox_Label12" class="fl">Current price</span>
            <span id="SnapShotDetailBox_price" class="fr">116.40</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label4" class="fl">Change</span>
            <span id="SnapShotDetailBox_SnapshotDifference1" class="fr"><span class="positive">+2.10</span></span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label14" class="fl">Change %</span>
            <span id="SnapShotDetailBox_SnapshotDifference2" class="fr"><span class="positive">+1.84 %</span></span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label5" class="fl">Day volume</span>
            <span id="SnapShotDetailBox_Snapshot1" class="fr">111,438</span>
        </div>
    </div>
    <div class="marketDetails">
        <div>
            <span id="SnapShotDetailBox_Label8" class="fl">Open</span>
            <span id="SnapShotDetailBox_Snapshot2" class="fr">115.60</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label15" class="fl">Last close</span>
            <span id="SnapShotDetailBox_Snapshot3" class="fr">116.40</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label16" class="fl">Last trade</span>
            <span id="SnapShotDetailBox_Snapshot8" class="fr">116.40</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label6" class="fl">Best bid</span>
            <span id="SnapShotDetailBox_Snapshot6" class="fr">116.30</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label7" class="fl">Best offer</span>
            <span id="SnapShotDetailBox_Snapshot7" class="fr">117.50</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label17" class="fl">Day high</span>
            <span id="SnapShotDetailBox_Snapshot9" class="fr">117.60</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label18" class="fl">Day low</span>
            <span id="SnapShotDetailBox_Snapshot10" class="fr">113.16</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label9" class="fl">52 week high</span>
            <span id="SnapShotDetailBox_Snapshot4" class="fr">251.40</span>
        </div>
        <div>
            <span id="SnapShotDetailBox_Label10" class="fl">52 week low</span>
            <span id="SnapShotDetailBox_Snapshot5" class="fr">96.15</span>
        </div>
        
    </div>
</div>

                            <!-- Snapshot box ends here -->
                        </div>
                    
</div>
            </div>
            <div class="Wrapper">
                <div id="upTab">
	
                        
<!-- Main chart Section -->
<!-- Tab Menu Section starts here -->
<div class="tabMenu">
    
            <ul class="forDesktop">
        
            <li id="Today" class="first selected">
                <a id="ucSPCTabBox_rptShareTypeList_ctl01_lbToday" href="javascript:__doPostBack(&#39;ucSPCTabBox$rptShareTypeList$ctl01$lbToday&#39;,&#39;&#39;)">Today</a>
            </li>
        
            <li id="History" class>
                <a id="ucSPCTabBox_rptShareTypeList_ctl02_lbToday" href="javascript:__doPostBack(&#39;ucSPCTabBox$rptShareTypeList$ctl02$lbToday&#39;,&#39;&#39;)">History</a>
            </li>
        </ul>
    
    <input name="ucSPCTabBox$hdnSelectedTab" type="hidden" id="ucSPCTabBox_hdnSelectedTab" class="hdnSelectedTab" value="today">
    <span class="arrowClick hideforDesktop"></span>
</div>

<!-- Tab Menu Section ends here -->
<!-- Main Chart Section starts here -->

<div class="daterange">
    
    <div class="chartOpt">
        <div class="chartOp-wrapper">
            <input type="hidden" class="SelectedChartScale">
            <div id="chartOpt1" class="wrapper-dropdown-3 icon-charttpS">
                <span class="chartopt1selected"></span>
                
                        <ul class="dropdown">
                    
                        <li id="absolute"><a href="javascript:void(0);"><i class="icon-charttp1icon-large"></i>
                            <span id="ucSPCTabBox_ucIntradayChartBox_rptchartScale_ctl01_Label10">Absolute</span>
                            <input type="radio" class="ChartScale" style="display: none" value="absolute"></a></li>
                    
                        <li id="relative"><a href="javascript:void(0);"><i class="icon-charttp2icon-large"></i>
                            <span id="ucSPCTabBox_ucIntradayChartBox_rptchartScale_ctl02_Label10">Relative</span>
                            <input type="radio" class="ChartScale" style="display: none" value="relative" checked="checked"></a></li>
                    
                        <li id="indexed"><a href="javascript:void(0);"><i class="icon-charttp3icon-large"></i>
                            <span id="ucSPCTabBox_ucIntradayChartBox_rptchartScale_ctl03_Label10">Indexed</span>
                            <input type="radio" class="ChartScale" style="display: none" value="indexed"></a></li>
                    
                        </ul>
                    
                
            </div>
            ​
        </div>
    </div>
</div>


<!-- Main chart Section -->
<div class="chartBase">
    <div id="container" style="width: 100%">
    </div>
</div>

<div class="chart-nav-container">
   <span id="ucSPCTabBox_ucIntradayChartBox_SMUtilityControl3" title="Large chart"><img src="images/icon-enlarge.png" onmouseover="javascript:this.src=&#39;../Images/icon-enlarge.png&#39;" onmouseout="javascript:this.src=&#39;../Images/icon-enlarge.png&#39;" onclick="LoadLargeChart(&#39;HighStockLarge.aspx?nocookie=1&amp;appPath=%2fclients%2fuk%2fspire_healthcare%2fsm7%2fdefault&amp;selRelPerfVs=&amp;culture=en-GB&amp;txtQFlifeFrameworkState=&amp;largechart=&#39;,-1,850); return false;"></span>
    &nbsp;&nbsp;
    <span id="ucSPCTabBox_ucIntradayChartBox_sm42" title="Color blind chart"><img src="images/icon-color-blind.png" onmouseover="javascript:this.src=&#39;../Images/icon-color-blind.png&#39;" onmouseout="javascript:this.src=&#39;../Images/icon-color-blind.png&#39;" onclick="LoadLargeChart(&#39;HighStockColorBlind.aspx?nocookie=1&amp;appPath=%2fclients%2fuk%2fspire_healthcare%2fsm7%2fdefault&amp;selRelPerfVs=&amp;culture=en-GB&amp;txtQFlifeFrameworkState=&amp;largechart=&#39;,-1,850); return false;"></span>
    &nbsp;&nbsp;
    <span id="ucSPCTabBox_ucIntradayChartBox_SMUtilityControl1" title="Download chart as PDF"><img src="images/pdf.png" onmouseover="javascript:this.src=&#39;../Images/pdf.png&#39;" onmouseout="javascript:this.src=&#39;../Images/pdf.png&#39;" onclick="location.href=&#39;../../../DownloadChart.aspx?Url=http://ir.tools.investis.com/clients/uk/spire_healthcare/SM7/HighStockLarge.aspx?nocookie=1&amp;appPath=%2fclients%2fuk%2fspire_healthcare%2fsm7%2fdefault&amp;selRelPerfVs=&amp;culture=en-GB&amp;txtQFlifeFrameworkState=&amp;largechart=&amp;PDF=1&amp;Height=-1&amp;Width=-1&#39;"></span>
    &nbsp;&nbsp;
    <span id="ucSPCTabBox_ucIntradayChartBox_SMUtilityControl7" title="Download chart as image"><img src="images/icon-png.png" class="ImageButton" onmouseover="javascript:this.src=&#39;../Images/icon-png.png&#39;" onmouseout="javascript:this.src=&#39;../Images/icon-png.png&#39;" onclick="location.href=&#39;../../../DownloadChart.aspx?Url=http://ir.tools.investis.com/clients/uk/spire_healthcare/SM7/HighStockLarge.aspx?nocookie=1&amp;appPath=%2fclients%2fuk%2fspire_healthcare%2fsm7%2fdefault&amp;selRelPerfVs=&amp;culture=en-GB&amp;txtQFlifeFrameworkState=&amp;largechart=&amp;ImageType=png&amp;Height=100&amp;Width=500&#39;"></span>
    &nbsp;&nbsp;
    <span id="ucSPCTabBox_ucIntradayChartBox_SMUtilityControl2" title="Download figures in Excel" display="none"></span>
    &nbsp;&nbsp;
</div>

<!-- Main Chart Section ends here -->
<!-- Comparative Data Section starts here -->
<div id="ucSPCTabBox_ucIntradayChartBox_upInstrument">
		
        
<div class="comparatorWrapper section">
    <div class="sectionHeading"><span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_Label10">Comparative data</span> <input type="submit" name="ucSPCTabBox$ucIntradayChartBox$ucInstrument$btnSaveInstrument" value id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_btnSaveInstrument" class="btnSaveInstrument" style="display: none"> </div>
    <div class="comparatorDetails">
        <div class="shareSection ShareDiv">
            <input type="hidden" name="ucSPCTabBox$ucIntradayChartBox$ucInstrument$hdnKey" id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_hdnKey" value="main">
            <span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_Label1" class="subHeading">Share</span>
            
                
                    <div class="shareItem"><span class="shareItemButton"></span><span class="shareItemLabel">Paton Medical Group Group plc<input style="display: none" class="ShareTypeCheckBox" type="checkbox" name="mainShareType1" value="SPHG.L"><input class="ShareColor" type="hidden" value="#92b4ad"><input class="ShareCurrency" type="hidden" value="GBX"></span></div>
                
            
        </div>
        <div class="shareSection PeerDiv">
           <span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_Label2" class="subHeading">Display peers</span>
            
                
            
        </div>
        <div class="shareSection IndicesDiv">
            <span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_Label3" class="subHeading">Trace indices</span>
            
                
                    <div class="shareItem"><span class="shareItemButton"></span><span class="shareItemLabel">FTSE Healthcare<input style="display: none" class="IndiceCheckBox" type="checkbox" name="Index1" value=".FTASX4530"><input class="ShareColor" type="hidden" value="#666666"><input class="ShareCurrency" type="hidden" value><input class="ShareUseIntraday" type="hidden" value="False"></span></div>
                
                    <div class="shareItem"><span class="shareItemButton"></span><span class="shareItemLabel">FTSE 350 - Healthcare<input style="display: none" class="IndiceCheckBox" type="checkbox" name="Index2" value=".NMX4530"><input class="ShareColor" type="hidden" value="#3399FF"><input class="ShareCurrency" type="hidden" value><input class="ShareUseIntraday" type="hidden" value="False"></span></div>
                
                    <div class="shareItem"><span class="shareItemButton"></span><span class="shareItemLabel">FTSE All Share<input style="display: none" class="IndiceCheckBox" type="checkbox" name="Index3" value=".FTAS"><input class="ShareColor" type="hidden" value="#887799"><input class="ShareCurrency" type="hidden" value><input class="ShareUseIntraday" type="hidden" value="False"></span></div>
                
            
        </div>
    </div>
    <div class="comparatorDetails">
        <div class="shareSection" id="lower-graph">
            <span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_lblLower" class="subHeading">Lower part of the graph</span>
            
                
                    <div class="shareItem" style="display:">
                        <span class="shareItemButton"></span>
                        <span class="shareItemLabel lower">
                            Volume
                            <input style="display: none" class="AnalyseCheckBox" type="radio" name="AnalysesGroup" value="volume" checked="checked">
                            <input class="ShareColor" type="hidden" value="#92b4ad">
                            <input class="ShareCurrency" type="hidden" value>
                        </span>
                    </div>
                
                    <div class="shareItem" style="display:">
                        <span class="shareItemButton"></span>
                        <span class="shareItemLabel lower">
                            Daily change
                            <input style="display: none" class="AnalyseCheckBox" type="radio" name="AnalysesGroup" value="change">
                            <input class="ShareColor" type="hidden" value="#92b4ad">
                            <input class="ShareCurrency" type="hidden" value>
                        </span>
                    </div>
                
            
        </div>
        <div class="shareSection">
            <span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_lblTechnicalAnalysis" class="subHeading">Technical analysis</span>
            
                
                    <div class="shareItem" style="display:">
                        <span class="shareItemButton"></span>
                        <span class="shareItemLabel">
                            Moving average
                            <input style="display: none" class="TechnicalAnalysisCheckBox" type="checkbox" name="movingaverage" value="movingaverage">
                            <input class="ShareColor" type="hidden" value="#888888">
                            <input class="period" type="hidden" value="20">
                        </span>
                    </div>
                
                    <div class="shareItem" style="display:">
                        <span class="shareItemButton"></span>
                        <span class="shareItemLabel">
                            Momentum
                            <input style="display: none" class="TechnicalAnalysisCheckBox" type="checkbox" name="momentum" value="momentum">
                            <input class="ShareColor" type="hidden" value="#000000">
                            <input class="period" type="hidden" value="14">
                        </span>
                    </div>
                
            
        </div>
        <div class="shareSection">
            <span id="ucSPCTabBox_ucIntradayChartBox_ucInstrument_lblShareholderYield" class="subHeading">Shareholder return</span>
            
                
                    <div class="shareItem" style="display:">
                        <span class="shareItemButton"></span>
                        <span class="shareItemLabel">
                            Total return
                            <input style="display: none" class="ShareholderYieldCheckBox" type="checkbox" name="totalreturn" value="totalreturn">
                            <input class="ShareColor" type="hidden" value="#afa129">
                        </span>
                    </div>
                
            
        </div>
    </div>
</div>

        

<div class="odWrapper section">
    <div class="sectionHeading">
        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_lblOrderDepth" class="left">Order depth</span><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_lblCurrency" class="right">GBX</span>
    </div>
    <div class="odHeaders">
        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_lblBid" class="subHeading left">Bid</span><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_lblAsk" class="subHeading right">Ask</span>
    </div>
    
            <div class="odData">
                <div class="bidWrapper">
                    <div class="odTime left">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_lblBidPrice">114.30</span></div>
                    <div class="odMap">
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_divBidVolume" style="left:89.8089171974522%;" class="odLabel right">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_lblBidVolume">400</span></div>
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_divBidChart" class="odChart " style="width:10.1910828025478%;"></div>
                        </div>
                    </div>
                </div>
                <div class="askWrapper">
                    <div class="odTime right hideforDesktop">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_lblAskPrice">115.30</span></div>
                    <div class="odMap">
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_divAskChart" style="width:0.0254777070063694%;" class="odChart "></div>
                        </div>
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_divAskVolume" style="right:99.9745222929936%;" class="odLabel left">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_lblAskVolume">1</span></div>
                    </div>
                    <div class="odTime right "><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl00_Label1">115.30</span></div>
                </div>

                
            </div>
        
            <div class="odData">
                <div class="bidWrapper">
                    <div class="odTime left">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_lblBidPrice">114.10</span></div>
                    <div class="odMap">
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_divBidVolume" style="left:61.7834394904459%;" class="odLabel right">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_lblBidVolume">1,500</span></div>
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_divBidChart" class="odChart " style="width:38.2165605095541%;"></div>
                        </div>
                    </div>
                </div>
                <div class="askWrapper">
                    <div class="odTime right hideforDesktop">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_lblAskPrice">115.40</span></div>
                    <div class="odMap">
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_divAskChart" style="width:5.19745222929936%;" class="odChart "></div>
                        </div>
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_divAskVolume" style="right:94.8025477707006%;" class="odLabel left">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_lblAskVolume">204</span></div>
                    </div>
                    <div class="odTime right "><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl01_Label1">115.40</span></div>
                </div>

                
            </div>
        
            <div class="odData">
                <div class="bidWrapper">
                    <div class="odTime left">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_lblBidPrice">113.60</span></div>
                    <div class="odMap">
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_divBidVolume" style="left:0%;" class="odLabel right">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_lblBidVolume">3,925</span></div>
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_divBidChart" class="odChart " style="width:100%;"></div>
                        </div>
                    </div>
                </div>
                <div class="askWrapper">
                    <div class="odTime right hideforDesktop">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_lblAskPrice">115.60</span></div>
                    <div class="odMap">
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_divAskChart" style="width:75.8726114649682%;" class="odChart "></div>
                        </div>
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_divAskVolume" style="right:24.1273885350318%;" class="odLabel left">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_lblAskVolume">2,978</span></div>
                    </div>
                    <div class="odTime right "><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl02_Label1">115.60</span></div>
                </div>

                
            </div>
        
            <div class="odData">
                <div class="bidWrapper">
                    <div class="odTime left">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_lblBidPrice">113.50</span></div>
                    <div class="odMap">
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_divBidVolume" style="left:61.7834394904459%;" class="odLabel right">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_lblBidVolume">1,500</span></div>
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_divBidChart" class="odChart " style="width:38.2165605095541%;"></div>
                        </div>
                    </div>
                </div>
                <div class="askWrapper">
                    <div class="odTime right hideforDesktop">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_lblAskPrice">115.70</span></div>
                    <div class="odMap">
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_divAskChart" style="width:38.2165605095541%;" class="odChart "></div>
                        </div>
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_divAskVolume" style="right:61.7834394904459%;" class="odLabel left">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_lblAskVolume">1,500</span></div>
                    </div>
                    <div class="odTime right "><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl03_Label1">115.70</span></div>
                </div>

                
            </div>
        
            <div class="odData">
                <div class="bidWrapper">
                    <div class="odTime left">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_lblBidPrice">113.30</span></div>
                    <div class="odMap">
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_divBidVolume" style="left:36.3057324840764%;" class="odLabel right">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_lblBidVolume">2,500</span></div>
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_divBidChart" class="odChart " style="width:63.6942675159236%;"></div>
                        </div>
                    </div>
                </div>
                <div class="askWrapper">
                    <div class="odTime right hideforDesktop">
                        <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_lblAskPrice">116.00</span></div>
                    <div class="odMap">
                        <div class="bidaskouter">
                            <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_divAskChart" style="width:57.656050955414%;" class="odChart "></div>
                        </div>
                        <div id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_divAskVolume" style="right:42.343949044586%;" class="odLabel left">
                            <span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_lblAskVolume">2,263</span></div>
                    </div>
                    <div class="odTime right "><span id="ucSPCTabBox_ucIntradayChartBox_ucOrderDepth_repOrderDepth_ctl04_Label1">116.00</span></div>
                </div>

                
            </div>
        

</div>


        

<div class="tradeWrapper section">
    <div class="sectionHeading">
        <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_lblTrades" class="left">Trades</span><span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_lblCurrency" class="right">GBX</span></div>
    <div class="tradeHeaders hide640">
        <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_lblTime" class="timeRow subHeading">Time</span><span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_lblLast" class="lastRow subHeading">Price</span><span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_lblChange" class="changeRow subHeading">Change</span><span class="changePerRow subHeading">&nbsp;</span> <span class="changeImgRow subHeading">&nbsp;</span>
        <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_lblVolume" class="volumeRow subHeading">Volume</span></div>
    
            <div class="tradeData first">
                <span class="timeRow left hideforDesktop">
                    <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblTime">Time</span></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblLastTime" class="timeRow right">16:35</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblLast" class="lastRow left hideforDesktop">Price</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblLastPrice" class="lastRow">116.40</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblChange" class="changeRowLabel left hideforDesktop">Change</span>
                <span class="changeImgRow hideforDesktop">
                    <img alt src="images/up.png"></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblChangeInPercentage" class="changeRow"><span class="positive">+1.84 %</span></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblChangeInAbsolute" class="changePerRow"><span class="positive">+2.10</span></span>
                <span class="changeImgRow hide640">
                    <img alt src="images/up.png"></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblVolume" class="volumeRow left hideforDesktop">Volume</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl00_lblVolumeValue" class="volumeRow">6,891</span>
            </div>
        
            <div class="tradeData altbg">
                <span class="timeRow left hideforDesktop">
                    <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblTime">Time</span></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblLastTime" class="timeRow right">16:29</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblLast" class="lastRow left hideforDesktop">Price</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblLastPrice" class="lastRow">116.70</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblChange" class="changeRowLabel left hideforDesktop">Change</span>
                <span class="changeImgRow hideforDesktop">
                    <img alt src="images/up.png"></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblChangeInPercentage" class="changeRow"><span class="positive">+2.10 %</span></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblChangeInAbsolute" class="changePerRow"><span class="positive">+2.40</span></span>
                <span class="changeImgRow hide640">
                    <img alt src="images/up.png"></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblVolume" class="volumeRow left hideforDesktop">Volume</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl01_lblVolumeValue" class="volumeRow">89</span>
            </div>
       
            <div class="tradeData">
                <span class="timeRow left hideforDesktop">
                    <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblTime">Time</span></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblLastTime" class="timeRow right">16:22</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblLast" class="lastRow left hideforDesktop">Price</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblLastPrice" class="lastRow">117.00</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblChange" class="changeRowLabel left hideforDesktop">Change</span>
                <span class="changeImgRow hideforDesktop">
                    <img alt src="images/up.png"></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblChangeInPercentage" class="changeRow"><span class="positive">+2.36 %</span></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblChangeInAbsolute" class="changePerRow"><span class="positive">+2.70</span></span>
                <span class="changeImgRow hide640">
                    <img alt src="images/up.png"></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblVolume" class="volumeRow left hideforDesktop">Volume</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl02_lblVolumeValue" class="volumeRow">112</span>
            </div>
        
            <div class="tradeData altbg">
                <span class="timeRow left hideforDesktop">
                    <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblTime">Time</span></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblLastTime" class="timeRow right">16:20</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblLast" class="lastRow left hideforDesktop">Price</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblLastPrice" class="lastRow">117.60</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblChange" class="changeRowLabel left hideforDesktop">Change</span>
                <span class="changeImgRow hideforDesktop">
                    <img alt src="images/up.png"></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblChangeInPercentage" class="changeRow"><span class="positive">+2.89 %</span></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblChangeInAbsolute" class="changePerRow"><span class="positive">+3.30</span></span>
                <span class="changeImgRow hide640">
                    <img alt src="images/up.png"></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblVolume" class="volumeRow left hideforDesktop">Volume</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl03_lblVolumeValue" class="volumeRow">587</span>
            </div>
       
            <div class="tradeData">
                <span class="timeRow left hideforDesktop">
                    <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblTime">Time</span></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblLastTime" class="timeRow right">16:10</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblLast" class="lastRow left hideforDesktop">Price</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblLastPrice" class="lastRow">117.00</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblChange" class="changeRowLabel left hideforDesktop">Change</span>
                <span class="changeImgRow hideforDesktop">
                    <img alt src="images/up.png"></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblChangeInPercentage" class="changeRow"><span class="positive">+2.36 %</span></span>
                
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblChangeInAbsolute" class="changePerRow"><span class="positive">+2.70</span></span>
                <span class="changeImgRow hide640">
                    <img alt src="images/up.png"></span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblVolume" class="volumeRow left hideforDesktop">Volume</span>
                <span id="ucSPCTabBox_ucIntradayChartBox_ucTrades_repTrades_ctl04_lblVolumeValue" class="volumeRow">2,806</span>
            </div>
        
</div>

       
    
	</div>


                    
</div>
                <div class="shareWrapper">
                    <!--<div class="shareLabel"><span id="Label4">Share this page</span></div>-->
                    
<script type="text/javascript" src="js/SocialMedia.js"></script>
<input type="hidden" name="ucSocialMedia$hdnUrlsource" id="ucSocialMedia_hdnUrlsource" value="http://ir.tools.investis.com/clients/uk/spire_healthcare/SM7/Default.aspx?culture=en-GB">
<ul>
    

    

    <li class="facebook" style="display:"><a id="ancFacebook" onclick="javascript:SocialMedia('facebook','Share Price Center','');return false;"></a></li>
    <li class="twitter" style="display:"><a id="anctwitter" onclick="javascript:SocialMedia('twitter','Share Price Center','');return false;"></a></li>
    <li class="linkdin" style="display:"><a id="anclinkdin" onclick="javascript:SocialMedia('linkedin','Share Price Center','');return false;"></a></li>
    <li class="googleP" style="display:"><a id="ancgoogleP" onclick="javascript:SocialMedia('googlePlus','Share Price Center','');return false;"></a></li>
</ul>

                </div>
                
<!-- Disclaimer Section ends here -->

<div class="disclaimerWrapper">
    
    <div id="MDADisclaimer">
        <span id="disclaimer_MDA_Logo">
            
            <a href="http://ir.tools.investis.com/clients/default/pages/ftse-disclaimer.aspx" title="FTSE Disclaimer" class="ftsedis" target="_blank" style="float: right; font-weight: normal; text-decoration: underline;">FTSE Disclaimer</a>
            
            <a target="_blank" title="investisdigital" href="htps://www.investisdigital.com/">
                <img border="0" alt="investisdigital" src="fonts/investis-digital.svg" height="18"></a>
        </span>
        <div id="disclaimer_MDA">
            <span id="disclaimer_MDA_Description">
                Copyright Investis Ltd. All rights reserved. Data and charts may be delayed by 15 minutes or more. Quotes are in local exchange time.                         By using this web page you agree to our terms of use and to the terms of our privacy statement.
            </span>
        </div>
    </div>
    
</div>

<!-- Disclaimer Section ends here -->

            </div>

            <div id="UpdateProgress1" style="display:none;">
	
                    <div style="position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; overflow: hidden; padding: 0; margin: 0; background-color: aliceblue; filter: alpha(opacity=50); opacity: 0.0; z-index: 100000;"></div>
                    <div style="position: fixed; top: 0%; left: 0%; height: 100%; width: 100%; z-index: 100001; background-color: transparent; border: 0px solid #000000; background-image: url('images/ajax-loader.gif'); background-repeat: no-repeat; background-position: center;"></div>
                
</div>
        </div>
        <script type="text/javascript" src="js/iframeResizer_child_1.js"></script>
    <input type="hidden" class="Hidden" id="txtQFlifeFrameworkState" name="txtQFlifeFrameworkState" value></form>
</body>
</html>


