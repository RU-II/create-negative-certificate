
function main() {
  var check = Browser.msgBox("陰性証明書を作成しますか？", "シート内にあるすべての方の陰性証明書を作成します。\\n作成終了後、データはシートから削除されます。\\n作成後、正しく入力されているか確認してください。", Browser.Buttons.OK_CANCEL);
  if (check == 'cancel') {
    Browser.msgBox("キャンセルされました");
  }
  if (check == 'ok') {
    var ss = SpreadsheetApp.getActiveSpreadsheet();//スプレッドシート取得
    var sheet = ss.getSheetByName('作成用');//シート「作成用」取得
    var values = sheet.getDataRange().getValues();//シート「作成用」の値を取得
    //var lastRow = sheet.getLastRow();//シート'問診票'の最終行を取得
    //var lastRow = values.length;
    //Logger.log(lastRow);

    var ncCol = 15;
    var patientNumCol = 1;
    var i = 1;
    values.forEach(function (value) {
      if (i > 1) {
        if (value[ncCol - 1] == "陰性証明書(6,000円)") {
          makeJNC(value);
        } else if (value[ncCol - 1] == "海外渡航用陰性証明書(10,000円)") {
          makeENC(value);
        } else {
          Browser.msgBox("検体番号：" + value[patientNumCol - 1] + " の陰性証明書を作成できませんでした。\\n「陰性証明書の購入」が「陰性証明書(6,000円)」または「海外渡航用陰性証明書(10,000円)」となっているか確認してください。");
        }
        sheet.deleteRow(2);
      }
      i++;
    });
  }
}
