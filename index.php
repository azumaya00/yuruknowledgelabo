<?php
//共通関数読み込み
require('function.php');

//デバッグ開始
debug('「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「');
debug('TOPページ');
debug('「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「');
debugLogStart();

//POST送信されていたとき
if (!empty($_POST)) {
  debug('POST送信があります');
  debug('POST情報: ' . print_r($_POST, true));
  //変数定義
  $email = $_POST['email'];
  $client = sanitize($_POST['client']);
  $company = sanitize($_POST['company']);
  $title = sanitize($_POST['title']);
  $details = sanitize($_POST['details']);

  //バリデーション
  //未入力
  validRequired($email, 'email');
  validRequired($client, 'client');
  validRequired($title, 'title');
  validRequired($details, 'details');

  if (empty($err_msg)) {
    debug('未入力チェックOK');
    //メール形式
    validEmail($email, 'email');
    //最大文字数
    validMaxLen($email, 'email', 255);
    validMaxLen($client, 'client', 20);
    validMaxLen($company, 'company', 20);
    validMaxLen($title, 'title', 20);
    validMaxLen($details, 'details', 1000);

    if (empty($err_msg)) {
      debug('バリデーションOK');
      //メール送信準備
      //送信用
      $from = $email;
      $to = 'rie@rie-k.com';
      $subject = '問い合わせがありました';
      $titleClient = $title;
      $subjectClient = 'お問い合わせありがとうございました';
      $comment = <<<EOD
Yuruknowledge Labo へ問い合わせがありました。

お名前: {$client}
会社名: {$company}
件名: {$titleClient}
内容: {$details}
EOD;
      $commentClient = <<<EOD
{$client} 様

Yuruknowledge Laboへお問い合わせありがとうございました。
2営業日以内にご連絡差し上げますので、しばらくお待ち下さいませ。

(お問い合わせ内容)
{$details}

***********************
Yuknowledge Labo
RIE
rie@rie-k.com
***********************
EOD;

      //こちらへメール送信
      sendMail($from, $to, $subject, $comment);
      //控えメール送信
      sendMail($to, $from, $subjectClient, $commentClient);
      debug('メール送信しました');

      //thanksページへ飛ぶ
      header("location:thanks.php");
    }
  }
}

debug('画面表示処理終了<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
?>

<?php
//Blog読み込み用
require_once('blog/wp-load.php');
//headのページ名表示用
$siteTitle = 'HOME';
require('head.php'); ?>

<?php require('header-top.php'); ?>


<main>
  <hero></hero>
  <works v-bind:height="height"></works>
  <service v-bind:height="height"></service>

  <!-- Blog start -->
  <section id="blog">
    <div class="container container--blog container--transition" v-scroll="handleScrollBlog">
      <div class="container--h2">
        <h2>Blog</h2>
      </div>
      <div class="p-panel__group--blog">

        <?php
        //変数定義
        $blogList = array(
          'numberposts' => 6, //新着6記事
          'post_type' => 'post' //投稿のみ
        );
        $blogPosts = get_posts($blogList);
        if (!empty($blogPosts)) : ?>
          <?php foreach ($blogPosts as $post) : ?>
            <?php setup_postdata($post); ?>

            <div class="p-panel--blog">
              <?php if (has_post_thumbnail()) {
                //サムネイルがあるときはそれを背景に指定
                echo '<div class="c-panel__head--blog" style="background-image:url(' . get_the_post_thumbnail_url($post->ID, 'medium') . ')">';
              } else {
                //サムネイルが無いときは用意した画像を背景に指定
                echo '<div class="c-panel__head--blog" style="background-image:url(dist/img/noimage-eyecatch.jpg)">';
              } ?>

            </div>
            <div class=" c-panel__body--blog">
              <a href="<?php the_permalink(); ?>" target="_blank">
                <h3><?php the_title(); ?></h3>
                <p><?php echo mb_substr(get_the_excerpt(), 0, 120); ?></p>
              </a>
            </div>
          </div>


        <?php endforeach; ?>
      <?php endif; ?>
      <!-- panel end -->

    </div>
    <!-- panel group end -->
    <p class="more--blog">
      <a href="https://blog.rie-k.com/" target="_blank">もっと見る&nbsp;▶</a>
    </p>
    </div>
    <!-- container blog end -->
  </section>
  <!-- Blog end -->

  <faq v-bind:height="height"></faq>

  <!-- お問い合わせフォーム start -->
  <section id="contact">
    <div class="container container--contact container--transition" v-scroll="handleScrollContact">
      <div class="container--h2">
        <h2>Contact</h2>
      </div>
      <p class="caption caption--form">
        通常、48時間以内に返信いたします。<br />
        (土・日・マレーシアの祝日を除く)
      </p>
      <!-- form start -->
      <div class="p-form__container p-form__container--contact">
        <form action="" method="POST" class="c-form c-form--contact">
          <label>
            Eメールアドレス<span class="required">必須</span><span class="err"><?php echo getErrMsg('email') ?></span>
            <input type="email" name="email" placeholder="Eメールアドレス" required />
          </label>
          <label>
            お名前<span class="required">必須</span><span class="err"><?php echo getErrMsg('client') ?></span>
            <input type="text" name="client" placeholder="お名前" maxlength="20" required />
          </label>
          <label>
            会社名<span class="err"><?php echo getErrMsg('company') ?></span>
            <input type="text" name="company" placeholder="会社名" maxlength="20" />
          </label>
          <label>
            件名<span class="required">必須</span><span class="err"><?php echo getErrMsg('title') ?></span>
            <input type="text" name="title" placeholder="件名" required maxlength="20" />
          </label>
          <label>
            内容(1000文字以内)<span class="required">必須</span><span class="err"><?php echo getErrMsg('details') ?></span>
            <textarea name="details" cols="30" rows="10" required maxlength="1000"></textarea>
          </label>
          <input type="submit" class="c-btn c-btn--main c-btn--submit" value="送信" />
        </form>
      </div>
      <!-- form end -->
    </div>
    <!-- container contact end -->
  </section>
  <!-- お問い合わせフォーム end -->

</main>

<?php require('footer.php'); ?>