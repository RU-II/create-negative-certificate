function cfmIdStrings() {
  var url1 = 'https://docs.google.com/presentation/d/1hQxAzOeBeZLnL5NnBKxuIKm3Jb_bXhza_allMwflUm8/edit#slide=id.p';//日本語陰性証明書のテンプレートのURL
  var url2 = 'https://docs.google.com/presentation/d/1yV6E8n7d_GUk6qKATrSiBHzXPWgX46_xNDpGokAKKFM/edit#slide=id.p';//英文陰性証明書のテンプレートのURL
  var presentation = SlidesApp.openByUrl(url2);
  var slide = presentation.getSlides()[0];//スライド番号 0スタート
  var shapes = slide.getShapes();//スライド内のシェイプ取得
  for (var i = 0; i < shapes.length; i++) {//シェイプのidと文字列を出力
    Logger.log('[%s]: %s', shapes[i].getObjectId(), shapes[i].getText().asString());
  }
}