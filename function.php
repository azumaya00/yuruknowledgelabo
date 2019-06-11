<?php
//=====================================
//ログ
//=======================================
ini_set('log_errors', 'on');
ini_set('error_log', 'php.log');

//=====================================
//デバッグ
//=======================================
//デバッグフラグ、実装時にはfalseにする
$debug_flg = true;
//デバッグ関数
function debug($str)
{
    global $debug_flg;
    if (!empty($debug_flg)) {
        error_log('デバッグ: ' . $str);
    }
}


//=====================================
//デバッグログ開始
//=======================================
function debugLogStart()
{
    debug('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>画面表示処理開始');
    debug('現在日時タイムスタンプ: ' . time());
}

//=====================================
//定数
//=======================================
//エラーメッセージ用定数
define('MSG01', 'エラーが発生しました。しばらく時間をおいてからやり直して下さい。');
define('MSG02', '入力必須です');
define('MSG03', 'Eメールの形式で入力して下さい');
define('MSG04', '6文字以上で入力して下さい');
define('MSG05', '文字以内で入力して下さい');
define('MSG06', '半角英数字で入力して下さい');


//=====================================
//グローバル変数
//=======================================
//エラーメッセージ用配列
$err_msg = array();

//=====================================
//バリデーション
//=======================================
//未入力チェック
function validRequired($str, $key)
{
    if ($str === '') {
        global $err_msg;
        $err_msg[$key] = MSG02;
    }
}


//Email形式
function validEmail($str, $key)
{
    if (!preg_match("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
", $str)) {
        global $err_msg;
        $err_msg[$key] = MSG03;
    }
}

//最小文字数
function validMinLen($str, $key, $min = 6)
{
    if (mb_strlen($str) < $min) {
        global $err_msg;
        $err_msg[$key] = MSG04;
    }
}

//最大文字数
function validMaxLen($str, $key, $max)
{
    if (mb_strlen($str) > $max) {
        global $err_msg;
        $err_msg[$key] = $max . MSG05;
    }
}

//半角英数字
function validHalf($str, $key)
{
    if (!preg_match("/^[a-zA-Z0-9]+$/", $str)) {
        global $err_msg;
        $err_msg[$key] = MSG06;
    }
}

//エラーメッセージ表示
function getErrMsg($key)
{
    global $err_msg;
    if (!empty($err_msg[$key])) {
        return $err_msg[$key];
    }
}

//=====================================
//メール送信
//=======================================
function sendMail($from, $to, $subject, $comment)
{
    if (!empty($to) && !empty($subject) && !empty($comment)) {
        //文字化け対策
        mb_language("Japanese");
        mb_internal_encoding("UTF-8");

        //メール送信
        $result = mb_send_mail($to, $subject, $comment, "From: " . $from);
        //送信結果判定
        if ($result) {
            debug('メールを送信しました');
        } else {
            debug('メールの送信に失敗しました');
        }
    }
}


//=====================================
//その他
//=======================================

//サニタイズ
function sanitize($str)
{
    return htmlspecialchars($str, ENT_QUOTES);
}
