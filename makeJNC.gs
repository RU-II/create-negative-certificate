function makeJNC(value) {

  //var templateFileUrl = 'https://docs.google.com/presentation/d/1apEcpGqY9o4IUCSICQGCBj1mbljgoTtPa-o9B4QQ56o/edit#slide=id.p';//テンプレート用プレゼンテーションのURL

  var templateFileId = '1apEcpGqY9o4IUCSICQGCBj1mbljgoTtPa-o9B4QQ56o';//テンプレートファイルのid
  /*
  var templateFile = SlidesApp.openById(templateFileId);//templateFileを開く
  var templateFileName = templateFile.getName();//templateFileの名前を取得
  Logger.log(templateFileName);
  var newFileName = templateFileName;//newFileNameにtemplateFileNameを代入
  */
  var newFileName = "{名前} 様　陰性証明書　発行日　検査日時";
  var folderId = '1KcIwycQLQkunOI-2Xy2JBCJIjlQpVed_';//newFileを保存するフォルダーのid
  //var folderId = '1GaahjJiuXmOxUlQWijLfP_ZN1GWtK2Fy';//テスト用フォルダーid

  var nameCol = 2;     //名前の列番号 1スタート
  var birthdayCol = 24;//生年月日の列番号
  var addressCol = 23; //住所の列番号
  var samplingDateCol = 5;     //来院日の列番号
  var inspectionDateCol = 13;   //検査終了時刻の列番号
  var planCol = 7;     //プランの列番号

  var name = value[nameCol - 1];
  Logger.log(name);
  var birthday = getStringOfBirthday(value[birthdayCol - 1]);
  Logger.log(birthday);
  var address = value[addressCol - 1];
  Logger.log(address);
  var samplingDate = getStringFromDate(new Date(value[samplingDateCol - 1]));
  Logger.log(samplingDate);

  //value[planCol - 1] = "最速プラン(詳細はお尋ねください)";//全て最速プランに変更

  if (value[planCol - 1] == "最速プラン(詳細はお尋ねください)") {

    if (value[inspectionDateCol - 1] == "") {
      var inspectionDate = "00月00日　 00時00分";
    } else {
      var inspectionDate = getStringFromDate(new Date(value[inspectionDateCol - 1]));
      newFileName = "{名前} 様　陰性証明書";
    }
    Logger.log(inspectionDate);

    var issueDate = getStringFromDate(new Date());
    issueDate = issueDate.substr(0, 6);
    Logger.log(issueDate);

    newFileName = replaceInBrace(newFileName, "名前", name);

  } else {
    var issueDate = "00月00日";
    Logger.log(issueDate);
    var inspectionDate = "00月00日　 00時00分";
    Logger.log(inspectionDate);
    newFileName = replaceInBrace(newFileName, "名前", name);
  }
  Logger.log(newFileName);

  /*
    if (value[inspectionDateCol - 1] == "") {
        var inspectionDate = "00月00日　 00時00分";
        newFileName = "{名前} 様　陰性証明書　検査時間";
    } else {
      var inspectionDate = getStringFromDate(new Date(value[inspectionDateCol - 1]));
      newFileName = "{名前} 様　陰性証明書";
    }
    Logger.log(inspectionDate);
    
  */

  newFile = copyTemplate(templateFileId, newFileName, folderId);//teplateFileをコピーしてnewFileNameで保存

  /*
    var id = "ge412e0f1d2_0_10";
    //newFileにおいてidのシェイプの文字列をpatternからreplacementに変更
    replaceShapeString(newFile, id, "名前", name);
    replaceShapeString(newFile, id, "生年月日", birthday);
    replaceShapeString(newFile, id, "住所", address);
    replaceShapeString(newFile, id, "来院日", date);
  */
  var id1 = "ge5b0260de6_0_0";
  replaceShapeString(newFile, id1, "発行日", issueDate);

  var id2 = "ge594a5b622_1_0";
  replaceShapeString(newFile, id2, "名前", name);
  replaceShapeString(newFile, id2, "生年月日", birthday);
  replaceShapeString(newFile, id2, "住所", address);

  var id3 = "ge309c31322_0_0";
  replaceShapeString(newFile, id3, "来院日", samplingDate);

  var id4 = "ge5b0260de6_0_2";
  replaceShapeString(newFile, id4, "検査時間", inspectionDate);

}
















