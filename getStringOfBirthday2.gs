function getStringOfBirthday2(birthday) {
  birthday = String(birthday);
  //birthday = birthday.substr(0, 4) + "年" + birthday.substr(4, 2) + "月" + birthday.substr(6, 2) + "日";
  birthday = birthday.substr(6, 2) + "-" + changeMonth(birthday.substr(4, 2)) + "-" + birthday.substr(0, 4);
  return birthday;
}
