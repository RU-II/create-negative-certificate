//日付から文字列に変換する関数(英文　陰性証明書用)
function getStringFromDate2(date) {
  date = String(date);
  date = date.substr(16,2)+":"+date.substr(19,2)+", "+date.substr(8,2) +"-"+ date.substr(4,3)+".";
  return date
}
