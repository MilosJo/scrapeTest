var intraday, chartColor, term_exchangeName, term_decimalPoint, term_decimalPlace, term_thousandsSep, term_monthName, term_weekDays, dateformatlable;

dateformatlable = { second: term_HighStock_Format_Second, minute: term_HighStock_Format_Minute, hour: term_HighStock_Format_Hour, day: term_HighStock_Format_Day, week: term_HighStock_Format_Week, month: term_HighStock_Format_Month, year: term_HighStock_Format_Year };
//viyuta
function ConvertToJSON(term) {
    try {
        return JSON.parse(term);
    } catch (e) {
        return term;
    }
}

if (term_decimalPoint == "term_decimalPoint")
    term_decimalPoint = ".";

if (term_thousandsSep == "term_thousandsSep")
    term_thousandsSep = ",";
else
    term_thousandsSep = term_thousandsSep.replace('#SPACE#', ' ');

if (term_monthName == "term_monthName")
    term_monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
else
    term_monthName = ConvertToJSON(term_monthName);

if (term_weekDays == "term_weekDays")
    term_weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
else
    term_weekDays = ConvertToJSON(term_weekDays);

if (term_fullmonthName == "term_fullmonthName")
    term_fullmonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
else
    term_fullmonthName = ConvertToJSON(term_fullmonthName);