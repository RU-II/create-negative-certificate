function makeENC(value) {
  //var templateFileUrl = 'https://docs.google.com/presentation/d/1yV6E8n7d_GUk6qKATrSiBHzXPWgX46_xNDpGokAKKFM/edit#slide=id.p';//テンプレート用プレゼンテーションのURL

  var templateFileId = '1yV6E8n7d_GUk6qKATrSiBHzXPWgX46_xNDpGokAKKFM';//テンプレートファイルのid

  //var templateFile = SlidesApp.openById(templateFileId);//templateFileを開く
  //var templateFileName = templateFile.getName();//templateFileの名前を取得
  //Logger.log(templateFileName);
  //var newFileName = templateFileName;//newFileNameにtemplateFileを代入

  var newFileName = "{name} 様　英文陰性証明書　発行日　検査日時";
  
  var folderId = '1KcIwycQLQkunOI-2Xy2JBCJIjlQpVed_';//newFileを保存するフォルダーのid
  //var folderId = '1GaahjJiuXmOxUlQWijLfP_ZN1GWtK2Fy';//テスト用フォルダーid

  var nameCol = 2;
  var passportNameCol = 40;
  var genderCol = 21;
  var passportNoCol = 39;
  var birthdayCol = 41;
  var nationalityCol = 42;
  var samplingDateCol = 5;
  var inspectionDateCol = 13;   //検査終了時刻の列番号
  var planCol = 7;     //プランの列番号

  var name = value[nameCol - 1];
  Logger.log(name);
  var passportName = value[passportNameCol - 1];
  Logger.log(passportName);
  var gender = value[genderCol - 1];
  if (gender == "男性") gender = "Male";
  if (gender == "女性") gender = "Female";
  Logger.log(gender);
  var passportNo = value[passportNoCol - 1];
  Logger.log(passportNo);
  var birthday = getStringOfBirthday2(value[birthdayCol - 1]);
  Logger.log(birthday);
  var nationality = value[nationalityCol - 1]
  Logger.log(nationality);
  var samplingDate = getStringFromDate2(value[samplingDateCol - 1]) + "-2021 (UTC+9)";
  Logger.log(String(samplingDate));

  //value[planCol - 1] = "最速プラン(詳細はお尋ねください)";//全て最速プランに変更

  if (value[planCol - 1] == "最速プラン(詳細はお尋ねください)") {
    var issueDate = getStringFromDate2(new Date());
    issueDate = issueDate.substr(7, 7) + "-2021";
    Logger.log(issueDate);
    Logger.log(value[inspectionDateCol - 1]);
    if (value[inspectionDateCol - 1] == "") {
      var inspectionDate = "〇:〇, 〇-〇-2021";
    } else {
      var inspectionDate = getStringFromDate2(new Date(value[inspectionDateCol - 1])) + "-2021";
      newFileName = "{name}様　英文陰性証明書";
    }
    Logger.log(inspectionDate);

    newFileName = replaceInBrace(newFileName, "name", name);

  } else {

    var issueDate = "〇-〇-2021";
    Logger.log(issueDate);
    var inspectionDate = "〇:〇, 〇-〇-2021";
    Logger.log(inspectionDate);
    newFileName = replaceInBrace(newFileName, "name", name);

  }
  Logger.log(newFileName);

  newFile = copyTemplate(templateFileId, newFileName, folderId);//teplateFileをコピーしてnewFileNameで保存

  var id0 = "gee76954c15_5_1";
  replaceShapeString(newFile, id0, "issueDate", issueDate);

  var id1 = "gee76954c15_5_0";
  replaceShapeString(newFile, id1, "passportName", passportName);
  replaceShapeString(newFile, id1, "birthday", birthday);
  replaceShapeString(newFile, id1, "passportNo", passportNo);
  replaceShapeString(newFile, id1, "samplingDate", samplingDate);
  replaceShapeString(newFile, id1, "inspectionDate", inspectionDate);

  var id2 = "gee76954c15_5_2";
  replaceShapeString(newFile, id2, "gender", gender);
  replaceShapeString(newFile, id2, "nationality", nationality);
}