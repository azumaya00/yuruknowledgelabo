import Vue from 'vue'
import anime from 'animejs'
import VueScrollTo from 'vue-scrollto'
import _ from 'lodash'

// リンクのスクロール
Vue.use(VueScrollTo, {
  duration: 600,
  easing: 'ease-out'
})

// カスタムディレクティブ(v-scrollを作る)
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.component('top-header', {
  data: function () {
    return {
      menuIsActive: false
    }
  },
  computed: {},
  methods: {
    // ハンバーガーメニュー
    toggleMenu: function () {
      this.menuIsActive = !this.menuIsActive
    },
    // スクロールでヘッダー背景色変更
    changeHeaderBg: function (evt, el) {
      let elementSection = document.getElementById('works')
      let rectSection = elementSection.getBoundingClientRect()
      let distanceSection = window.pageYOffset + rectSection.top
      if (window.scrollY > distanceSection) {
        el.setAttribute('style', 'background: rgba(255,255,255,0.70)')
      } else {
        el.setAttribute('style', 'background: rgba(255,255,255,0.12)')
      }
    }
  },
  template: `        
  <div class="header" v-scroll="changeHeaderBg">
  <div class="header--logo">
  <h1><a href="index.php">RIE's Portfolio</a></h1>
</div>
<nav class="menu--header" v-bind:class="{'menu--header--active': menuIsActive}">
  <ul>
    <li><a href="#works" v-scroll-to="'#works'"  v-on:click="toggleMenu">Works</a></li>
    <li><a href="#service" v-scroll-to="'#service'"  v-on:click="toggleMenu">Service</a></li>
    <li><a href="#faq" v-scroll-to="'#faq'"  v-on:click="toggleMenu">FAQ</a></li>
    <li><a href="profile.php"  v-on:click="toggleMenu">Profile</a></li>
    <li><a href="#blog" v-scroll-to="'#blog'"  v-on:click="toggleMenu">Blog</a></li>
    <li><a href="#contact" v-scroll-to="'#contact'"  v-on:click="toggleMenu">Contact</a></li>
  </ul>
</nav>
<nav class="menu--header--sm">
<ul v-on:click="toggleMenu">
  <li>
    <span v-bind:class="{'menu--header--active': menuIsActive}"></span><br>
    <span v-bind:class="{'menu--header--active': menuIsActive}"></span><br>
    <span v-bind:class="{'menu--header--active': menuIsActive}"></span>
    <p>MENU</p>
  </li>
</ul>
</nav>
</div>`
})

Vue.component('c-header', {
  data: function () {
    return {
      menuIsActive: false
    }
  },
  computed: {},
  methods: {
    // ハンバーガーメニュー
    toggleMenu: function () {
      this.menuIsActive = !this.menuIsActive
    }
  },
  template: `        
  <div class="header header--common">
  <div class="header--logo">
  <h1><a href="index.php">RIE's Portfolio</a></h1>
</div>
<nav class="menu--header" v-bind:class="{'menu--header--active': menuIsActive}">
  <ul>
    <li><a href="index.php#" v-on:click="toggleMenu">Home</a></li>
    <li><a href="index.php#works" v-on:click="toggleMenu">Works</a></li>
    <li><a href="index.php#service" v-on:click="toggleMenu">Service</a></li>
    <li><a href="index.php#faq" v-on:click="toggleMenu">FAQ</a></li>
    <li><a href="profile.php" v-on:click="toggleMenu">Profile</a></li>
    <li><a href="index.php#blog" v-on:click="toggleMenu">Blog</a></li>
    <li><a href="index.php#contact" v-on:click="toggleMenu">Contact</a></li>
  </ul>
</nav>
<nav class="menu--header--sm">
<ul v-on:click="toggleMenu">
  <li>
    <span v-bind:class="{'menu--header--active': menuIsActive}"></span><br>
    <span v-bind:class="{'menu--header--active': menuIsActive}"></span><br>
    <span v-bind:class="{'menu--header--active': menuIsActive}"></span>
    <p>MENU</p>
  </li>
</ul>
</nav>
</div>`
})
Vue.component('c-footer', {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  template: `
  <div class="footer">
  <div class="container container--footer">
          <div class="footer--left">
            <div class="footer--icon">
            </div>
            <div class="footer--profile">
              <h6>Profile</h6>
              <p><span>RIE</span></p>
              <p>
                マレーシア・クアラルンプール在住
                11歳の息子と母子留学6年目の元医師<br>育児ブログを執筆する傍ら、「育児ブログに診断アプリを付けたい！」一心でプログラミングを始めた筈なのにすっかりハマってしまった・・
              </p>
              <div class="footer--profile--link">
                <a href="profile.php">詳しくはこちら▶</a>
              </div>
            </div>
          </div>
          <div class="footer--right">
            <div class="footer--sitemap">
              <h6>Sitemap</h6>
              <ul>
                <li><a href="#works">Works</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="https://blog.rie-k.com">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="policy.php">プライバシーポリシー</a></li>
              </ul>
            </div>
            <div class="footer--sns">
              <h6>Social link</h6>
              <a href="https://twitter.com/saika00" target="_blank" class="sns sns--twitter"><i class="fab fa-twitter-square"></i></a>
              <a href="https://www.linkedin.com/in/rie-k-41158242/" target="_blank" class="sns sns--linkedin"><i class="fab fa-linkedin"></i></a>
              <a href="https://github.com/azumaya00" target="_blank" class="sns sns--github"><i class="fab fa-github-square"></i></a>             
            </div>
          </div>
        </div>
        <p class="copyright">©Copyright2019 Yuruknowledge Labo.All Rights Reserved</p>
        <div id="footer-bg">
        <!-- SVGここから -->
        
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 1980 750" width="1980" height="750"><defs>
<clipPath id="_clipPath_87vBI4SQVgEde8nLxbT1sX4eKcjMnwIs"><rect width="1980" height="750"/>
</clipPath>
</defs>
<g clip-path="url(#_clipPath_87vBI4SQVgEde8nLxbT1sX4eKcjMnwIs)">
<g opacity="0.74">
<linearGradient id="_lgradient_4" x1="-0.002309883599531805" y1="0.0669185146093817" x2="-0.002265132957614784" y2="1.1383614983190333" gradientTransform="matrix(1980,0,0,719.001,0,30.999)" gradientUnits="userSpaceOnUse">
<stop offset="1.3043478260869565%" stop-opacity="1" style="stop-color:rgb(226,232,228)"/>
<stop offset="51.45777443242707%" stop-opacity="1" style="stop-color:rgb(100,163,175)"/>
<stop offset="100%" stop-opacity="1" style="stop-color:rgb(0,108,132)"/>
</linearGradient>
<path class="wave-below" d=" M 0 31.15 C 0 31.15 79 113.272 574 113.272 C 996.786 96.021 1107.09 27.37 1420 31.15 C 1732.91 34.93 1980 83.546 1980 83.546 L 1980 750 L 0 750 L 0 31.15 Z " fill="url(#_lgradient_4)"/>
</g>

<g opacity="0.54">
<linearGradient id="_lgradient_5" x1="0.000016148950318287186" y1="-0.0035736742918854904" x2="-0.003698109622874581" y2="0.8183714128417997" gradientTransform="matrix(1980,0,0,739,0,11)" gradientUnits="userSpaceOnUse">
<stop offset="0.43478260869564966%" stop-opacity="1" style="stop-color:rgb(110,181,192)"/>
<stop offset="21.611904324209227%" stop-opacity="1" style="stop-color:rgb(59,147,164)"/>
<stop offset="62.60869565217392%" stop-opacity="1" style="stop-color:rgb(0,108,132)"/>
</linearGradient>
<path class="wave-above" d=" M 0 11 C 0 11 147 125 297 137 C 517.988 154.679 666.661 46.676 928.4 38.826 C 1276.212 27.612 1319.051 113.272 1604.292 113.272 C 1889.533 113.272 1980 38.826 1980 38.826 L 1980 750 L 0 750 L 0 11 Z " fill="url(#_lgradient_5)"/>
</g>
</g>
</svg>
        <!-- SVGここまで -->
        </div>
  </div>`
})

Vue.component('btn-pagetop', {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  template: `     
   <div class="c-btn--pagetop">
  <a href="#" v-scroll-to="'#header'"><img src="dist/img/gototop.svg" alt=""/></a>
</div>`
})

const hero = {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  template: `      
  <section id="hero">
  <div class="container container--hero">
    <div class="hero--logo">
      <img src="dist/img/logo.png" alt="Yuruknowledge Labo" />
      <p>RIE’s Portfolio and Services <br>for your future</p>
    </div>
    <!-- メニューボタン -->
    <div class="hero--menu">
      <div class="c-btn--hero">
        <a href="#works" v-scroll-to="'#works'">
          <img src="dist/img/btn-works.svg" alt="" />
        </a>
        <div class="c-btn--hero--item">
          <a href="#works" v-scroll-to="'#works'">
            <p><span>Works</span></p>
            <p>作品を見る</p>
          </a>
        </div>
      </div>
      <div class="c-btn--hero">
        <a href="#service" v-scroll-to="'#service'">
          <img src="dist/img/btn-service.svg" alt="" />
        </a>
        <div class="c-btn--hero--item">
          <a href="#service" v-scroll-to="'#service'">
            <p><span>Service</span></p>
            <p>提供サービス</p>
          </a>
        </div>
      </div>
      <div class="c-btn--hero">
        <a href="#faq" v-scroll-to="'#faq'"> <img src="dist/img/btn-faq.svg" alt=""/></a>
        <div class="c-btn--hero--item">
          <a href="#faq" v-scroll-to="'#faq'">
            <p><span>FAQ</span></p>
            <p>依頼の前に</p>
          </a>
        </div>
      </div>
      <div class=" c-btn--hero">
        <a href="#contact" v-scroll-to="'#contact'">
          <img src="dist/img/btn-contact.svg" alt=""
        /></a>

        <div class="c-btn--hero--item">
          <a href="#contact" v-scroll-to="'#contact'">
            <p><span>Contact</span></p>
            <p>お問い合わせ</p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- container hero end -->
  <div id="hero-bg">
  <!-- SVG start -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="isolation:isolate"
    viewBox="0 0 1920 770"
    width="1920"
    height="770"
  >
    <defs>
      <clipPath id="_clipPath_mHha3z5hooEwLRAhM2yErWLmaqbNmQLX">
        <rect width="1920" height="770" />
      </clipPath>
    </defs>
    <g clip-path="url(#_clipPath_mHha3z5hooEwLRAhM2yErWLmaqbNmQLX)">
      <g opacity="0.2">
        <linearGradient
          id="_lgradient_0"
          x1="0.49775493738380083"
          y1="1.0247191990917275"
          x2="0.5932047115190724"
          y2="0.5595236886387406"
          gradientTransform="matrix(1966,0,0,1313.867,-23,-559.527)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stop-opacity="1"
            style="stop-color:rgb(109,180,191)"
          />
          <stop
            offset="98.26086956521739%"
            stop-opacity="1"
            style="stop-color:rgb(255,255,255)"
          />
        </linearGradient>
        <path class="wave-below" 
          d=" M -23 -554.908 L -23 732.264 Q 157.628 590.187 421.987 656.849 C 550.032 689.137 831.927 783.43 983.976 745.484 C 1126.73 709.858 1241.692 614.846 1551.718 688.908 Q 1723.266 729.89 1943 717.196 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z "
          fill="url(#_lgradient_0)"
        />
      </g>
      <g opacity="0.3">
        <linearGradient
          id="_lgradient_1"
          x1="0.6459290700529696"
          y1="0.9761315466195315"
          x2="0.5146784952881415"
          y2="0.040833870153390794"
          gradientTransform="matrix(1966,0,0,1329.527,-23,-559.527)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stop-opacity="1"
            style="stop-color:rgb(255,204,187)"
          />
          <stop
            offset="23.79475974705005%"
            stop-opacity="1"
            style="stop-color:rgb(226,232,228)"
          />
          <stop
            offset="100%"
            stop-opacity="1"
            style="stop-color:rgb(255,255,255)"
          />
        </linearGradient>
        <path  class="wave-above" 
          d=" M -23 -554.908 L -23 732.264 Q 342.163 609.412 606.12 677.593 C 860.988 743.427 1095.875 792.717 1312.486 732.264 C 1529.098 671.811 1599.146 651.991 1743.523 670.05 Q 1863.646 685.075 1943 770 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z "
          fill="url(#_lgradient_1)"
        />
      </g>
    </g>
  </svg>
  <!-- SVG end -->
    <img src="dist/img/hero-prof.png" alt="hero-prof">
  </div>
</section>`
}

let works = {
  data: function () {
    return {
      currentTab: 'per',
      currentId: 1,
      perActive: true,
      labActive: false,
      per: [
        {
          id: 1,
          title: 'Leaning style checker',
          img: 'dist/img/thumbnail-lsc.png',
          movie: 'dist/img/lsc.gif',
          lang: 'HTML5 / CSS3 / Vue.js',
          period: '14時間15分(4日間)',
          details:
            '24の簡単な質問に答えるだけで自分に適した学習スタイルを診断するアプリです。およそ10歳〜成人まで対象であり、かつ育児ブログに設置するため、柔らかい印象のデザインと軽快な動作を特徴としています。',
          website: 'https://learntypecheck.yuruknowledge.com/',
          making: 'https://blog.rie-k.com/2019/05/26/vue-js02/',
          github: 'https://github.com/azumaya00/learningstylechecker'
        }
      ],
      lab: [
        {
          id: 1,
          title: 'Teach Me!',
          img: 'dist/img/thumbnail-teachme.png',
          movie: 'dist/img/teachme.gif',
          lang: 'PHP / jQuery',
          period: '57時間(約1ヶ月)',
          details:
            '文字数2000文字、画像投稿が2枚まで可能な会員制掲示板です。子供が利用する事を想定しており、「覆水盆に返らず」を経験して貰うため一度投稿した記事は編集・削除が出来ない仕様にしてあります。',
          website: 'https://rie-k.com/works/teachme/index.php',
          making: 'https://blog.rie-k.com/2019/06/10/teachme/',
          github: 'https://github.com/azumaya00/teachme'
        },
        {
          id: 2,
          title: '架空の医局サイト',
          img: 'dist/img/thumbnail-ikyoku.png',
          movie: 'dist/img/ikyoku.gif',
          lang: 'HTML5 / CSS3 / jQuery',
          period: '9時間30分(3日間)',
          details:
            '最近のWebサイトに良く使われる動きをjQueryを用いて表現した実験用のランディングページです。10年前に医局のサイト制作担当だったこともあり「今ならこう作る」を表現しています。',
          website: 'https://rie-k.com/works/ikyoku/',
          making: 'https://blog.rie-k.com/2019/05/10/ikyoku/',
          github: ''
        }
      ]
    }
  },
  props: {
    height: Number
  },
  computed: {
    // フィルタした概要を表示
    filteredPers () {
      return this.searchItem(this.per, this.currentId)
    },
    filteredLabs () {
      return this.searchItem(this.lab, this.currentId)
    }
  },
  methods: {
    // current idと同じidの概要をフィルタ
    searchItem (list, key) {
      return list.filter(function (item) {
        return item.id === key
      })
    },
    // サムネイルhoverで概要のidを書き換える
    showAbstract (key) {
      this.currentId = key
    },
    // 一定量スクロールしたら要素が出てくる
    // mixinでこの処理を共通化出来ないか？
    handleScroll: function (evt, el) {
      // 基準となるセクション定義
      let elementSection = document.getElementById('works')
      let rectSection = elementSection.getBoundingClientRect()
      // 上端からセクションまでの高さ
      let distanceSection = window.pageYOffset + rectSection.top
      // セクション上部が表示画面の下3分の1に
      // 達したら要素を表示する
      if (window.scrollY > distanceSection - (this.height * 2) / 3) {
        el.setAttribute('style', 'opacity: 1; transform: translateY(0)')
      }
      return window.scrollY > distanceSection
    },
    // 現在のタブをクリックで切り替える
    changeCurrentTab: function (str) {
      this.currentTab = str
      this.perActive = !this.perActive
      this.labActive = !this.labActive
      this.currentId = 1
    }
  },
  template: `
  <section id="works">
  <div
    class="container container--works container--transition"
    v-scroll="handleScroll"
  >
    <div class="container--h2">
      <h2>Works</h2>
    </div>
    <!-- タブ部分 start -->
    <div class="c-tab__group">
      <div
        class="c-tab"
        v-bind:class="{'c-tab--active': perActive}"
        v-on:click="changeCurrentTab('per')"
      >
        <p><span>Performance</span></p>
        <p>制作実績</p>
      </div>
      <div
        class="c-tab"
        v-bind:class="{'c-tab--active': labActive}"
        v-on:click="changeCurrentTab('lab')"
      >
        <p><span>Laboratory</span></p>
        <p>デモ・試作品</p>
      </div>
    </div>
    <!-- タブ部分 end -->
    <div class="p-abstract--group">
    <!-- 制作実績 start -->
    <div v-if="currentTab === 'per'" class="p-abstract--wrapper">
      <transition name="abstract">
        <div
          class="p-abstract"
          v-for="(item,index) in filteredPers"
          v-bind:key="item.id"
        >
          <h3>{{ item.title }}</h3>
          <div class="c-abstract--body">
            <!-- デモ動画 -->
            <div class="c-abstract--movie">
              <img v-bind:src="item.movie" alt="demo movie" />
            </div>
            <!-- 概要 -->
            <div class="c-abstract--details">
              <div class="c-abstract--details--head">
                <div class="c-abstract--details--head--left">
                  <h5>使用言語</h5>
                  <p>{{ item.lang }}</p>
                </div>
                <div class="c-abstract--details--head--right">
                  <h5>制作時間</h5>
                  <p>{{ item.period }}</p>
                </div>
              </div>
              <div class="c-abstract--details--body">
                <h5>概要</h5>
                <p>
                  {{ item.details }}
                </p>
              </div>
            </div>
          </div>
          <!-- リンク用ボタン -->
          <div class="link__group--abstract">
            <a v-bind:href="item.website" class="c-btn c-btn--accent c-btn--abstract"
              >実物を見る</a
            >
            <a v-bind:href="item.making" class="c-btn c-btn--sub c-btn--abstract""
              >制作記録</a
            >
            <a v-bind:href="item.github" class="c-btn c-btn--main c-btn--abstract""
              ><i class="fab fa-github"></i>&nbsp;Github</a
            >
          </div>
        </div>
      </transition>
    </div>
    <!-- 制作実績 end -->
    <!-- 試作品 start -->
    <div v-else-if="currentTab === 'lab'" class="p-abstract--wrapper">
      <transition name="abstract">
        <div
          class="p-abstract"
          v-for="(item,index) in filteredLabs"
          v-bind:key="item.id"
        >
          <h3>{{ item.title }}</h3>
          <div class="c-abstract--body">
            <!-- デモ動画 -->
            <div class="c-abstract--movie">
              <img v-bind:src="item.movie" alt="demo movie" />
            </div>
            <!-- 概要 -->
            <div class="c-abstract--details">
              <div class="c-abstract--details--head">
                <div class="c-abstract--details--head--left">
                  <h5>使用言語</h5>
                  <p>{{ item.lang }}</p>
                </div>
                <div class="c-abstract--details--head--right">
                  <h5>制作時間</h5>
                  <p>{{ item.period }}</p>
                </div>
              </div>
              <div class="c-abstract--details--body">
                <h5>概要</h5>
                <p>
                  {{ item.details }}
                </p>
              </div>
            </div>
          </div>
          <!-- リンク用ボタン -->
          <div class="link__group--abstract">
            <a v-bind:href="item.website" class="c-btn c-btn--accent c-btn--abstract""
              >実物を見る</a
            >
            <a v-bind:href="item.making" class="c-btn c-btn--sub c-btn--abstract""
              >制作記録</a
            >
            <a v-bind:href="item.github" class="c-btn c-btn--main c-btn--abstract""
              ><i class="fab fa-github"></i>&nbsp;Github</a
            >
          </div>
        </div>
      </transition>
    </div>
    <!-- 試作品 end -->
    <!-- 作品リストー -->
    <div v-if="currentTab === 'per'">
      <ul class="p-slider__group--abstract">
        <li
          class="c-slider__item"
          v-for="item in per"
          v-bind:key="item.id"
          v-on:mouseover="showAbstract(item.id)"
          v-on:click="showAbstract(item.id)"
        >
          <img v-bind:src="item.img" />
        </li>
      </ul>
    </div>
    <div v-else-if="currentTab === 'lab'">
      <ul class="p-slider__group--abstract">
        <li
          class="c-slider__item"
          v-for="item in lab"
          v-bind:key="item.id"
          v-on:mouseover="showAbstract(item.id)"
          v-on:click="showAbstract(item.id)"
        >
          <img v-bind:src="item.img" />
        </li>
      </ul>
    </div>
  </div>
  <!-- abstract group end -->
  </div>
  <!-- container works end -->
</section>
  `
}

const service = {
  data: function () {
    return {}
  },
  props: {
    height: Number
  },
  computed: {},
  methods: {
    handleScroll: function (evt, el) {
      let elementSection = document.getElementById('service')
      let rectSection = elementSection.getBoundingClientRect()
      let distanceSection = window.pageYOffset + rectSection.top
      if (window.scrollY > distanceSection - (this.height * 2) / 3) {
        el.setAttribute('style', 'opacity: 1; transform: translateY(0)')
      }
      return window.scrollY > distanceSection
    }
  },
  template: `<section id="service">
  <div class="container container--service container--transition" v-scroll="handleScroll">
    <div class="container--h2">
      <h2>Service</h2>
    </div>
    <p class="caption caption--service">
      提供するものは<br />「自立による自由」を手に入れるための<br class="br--md"/>サポートです
    </p>
    <h3>Webサイト・Webアプリケーション制作</h3>
    <div class="details--service details--service--first">
      <p>
        個人・法人向けのホームページ及びWebアプリケーションを制作します。
      </p>
      <p>
        いくら見栄えが良くても「あなたのビジネスの助けとなる」サイトでなければただの予算の無駄遣いです。当ラボでは依頼人の目的及び予算に合わせて必要なデザイン・機能の提案を行います。(制作に必要な画像素材はあらかじめご準備下さい。)
      </p>
      <img src="dist/img/service01.svg" alt="" />
    </div>
    <h3>Wordpressによるブログ構築・設定</h3>
    <div class="details--service details--service--second">
      <p>
        ブログは「世界に発信する」ためのツールとしてとても有用です。またあなたの知識や情報が詰まったブログは今後あなたの人生を手助けしてくれる大切な資産となります。<br />
        とはいえ、無料ブログはメールアドレス一つで簡単に作れアクセスも稼ぎやすい一方で、規約変更やサービス終了のリスクを常にはらんでいるため、資産としては少々心もとないのが実情です。
      </p>
      <p>
        当ラボではご自分のドメイン(ブログのアドレス名)を取得し、Wordpressという世界的にも人気が高いシステムを使ったブログ構築をおすすめしています。あなたのご希望に合わせてドメインの取得、サーバのレンタルから実際に記事を投稿出来るところまでの設定を行います。またオリジナルのデザインが必要な場合は別途対応いたします。
      </p>
      <img src="dist/img/service02.svg" alt="" />
    </div>
    <h3>各種ライティング</h3>
    <div class="details--service details--service--third">
      <p>
      医療系のライティングに関しては医師免許保持者であることを最大限活かし、文献による根拠を基にした一般人にも分かりやすいコンテンツを提供いたします。
      </p>
      <p>
      また現在海外在住かつ国際バカロレア系インターナショナルスクールに通う子供を持つ親としての目線から、育児や教育・現地情報に関するコンテンツを制作します。
      </p>
      <p>
        その他、金融やサブカルチャー(ゲーム・ドール・占い・スピリチュアルなど)と言った幅広いジャンルに対応可能です。
      </p>
      <img src="dist/img/service03.svg" alt="" />
    </div>
    <h3>マレーシア親子留学相談</h3>
    <div class="details--service details--service--fourth">
      <p>
        マレーシアのインターナショナルスクールに母子留学6年の経験を活かし、留学に必要な情報提供やZoomによる無料相談(1家族様1回限り、30分)を承ります。
      </p>
      <p>
        こちらはあくまで「ご自身の力で留学を行うための情報提供」であり、実際の学校とのやり取りや引っ越し、ビザ取得に関する手続きは自力で行って頂くことを前提としております。人生の一大事を人任せにせず歩く気概のある方のみお申し込み下さい。
      </p>
      <img src="dist/img/service04.svg" alt="" />
    </div>
  </div>
  <!-- container service end -->
</section>`
}

const faq = {
  data: function () {
    return {
      faqList: [
        {
          id: 'q1',
          question: 'サービスの流れを教えて下さい',
          answer:
            '<p>サービスのお申し込み後、Zoomもしくはメールにてヒアリングを行い、見積もり及び予想される納期を提示します。問題が無ければ契約書を交わし、着手金を受領後作業に移らせて頂きます。</p>'
        },
        {
          id: 'q2',
          question: '費用は定額制ですか、それとも見積もり制ですか？',
          answer:
            '<p>見積もり制です。あなたの依頼に必要な作業量を予想し、その作業量に応じて費用を算出します。</p>'
        },
        {
          id: 'q3',
          question: '作業中の連絡手段は何が利用できますか？',
          answer:
            '<p>Slack, Chatwork, Zoom(ビデオ通話+チャット機能), メールが利用可能です。やり取りを明確に記録しお互いの認識にズレが生じるのを防ぐため、電話や音声通話のみの連絡はお断りしています。またSkypeは当地の回線では繋がりが良くないためおすすめしておりません。メッセンジャーアプリについてはWhatsappもしくはFacebook messengerのみ対応しております</p>'
        },
        {
          id: 'q4',
          question: '対面でのヒアリングは可能ですか？',
          answer:
            '<p>現在マレーシア在住のため、基本的に対面でのヒアリングは承っておりません。ご了承下さい。</p>'
        },
        {
          id: 'q5',
          question: 'サポートの時間について教えて下さい',
          answer:
            '<p>土日およびマレーシアの祝日を除く、日本時間の朝10時から17時まで対応しております。なお家庭の事情により7月中及び12月中旬から1月中旬にかけての期間はサービス依頼を受けておりませんが、お問い合わせには通常通り対応いたします。</p>'
        },
        {
          id: 'q6',
          question: '修正には応じて頂けますか？',
          answer:
            '<p>デザイン及び機能が決定し、実際の制作が始まった段階以降納品までの間で軽微な修正につきましては、2回(2つの機能もしくはデザイン)までは無料で対応いたします。3回目以降はその作業量に応じた追加費用が発生いたします。</p><p>なお修正が多岐に渡る場合納期に間に合わない可能性がございますので、あらかじめ日数には余裕をもってお申し込み下さい。</p>'
        },
        {
          id: 'q7',
          question: '依頼の際に必要なことはありますか？',
          answer:
            '<p>予算と納期、そして「そのサービスを依頼する目的」を必ず明確に教えて下さい。あなたの目的次第では当初予定していた機能を付けず費用を節約することができるかもしれませんし、最初から予算が決まっていればその中で最大限あなたの目的を果たせるよう、優先順位を付けることも可能だからです。</p>'
        },
        {
          id: 'q8',
          question: 'サービスをお願いする目的がはっきりしていないのですが・・',
          answer:
            '<p>その場合は最初の段階でお知らせ下さい。ヒアリングにて一緒に目的を明確にしていきましょう。初回ヒアリングでの費用は発生いたしませんので、まずはお気軽にご相談下さい。</p>'
        },
        {
          id: 'q9',
          question: '予算的に厳しいのですが、値下げ交渉は可能ですか？',
          answer:
            '<p>まずは「本当にコストをかけてまでサービスを依頼する必要があるのか、利益が出るのか？」を真剣に検討することをおすすめします。ホームページやブログというのは、見栄え良く作ればあなたのビジネスを上向けてくれる魔法の杖ではありません。あなたのビジネスにおける具体的な目的を達成するためのツールでしかないのです。</p><p>以上のことを踏まえた上で依頼される場合、当ラボの制作実績として掲載許可を頂けることを条件に割引価格を提示することは可能です。ただしそれ以外の値下げ交渉には一切応じられませんのでご了承下さい。</p>'
        },
        {
          id: 'q10',
          question: '急ぎでお願いする事は可能ですか？',
          answer:
            '<p>その時の仕事の状況次第となります。一度お問い合わせ下さい。</p>'
        },
        {
          id: 'q11',
          question: 'あなたに頼む利点は何でしょう？',
          answer:
            ' <p>当ラボは個人で運営しており、確かに大規模な制作会社に比べれば対応出来る規模はどうしても小さくなりがちですが、その分依頼に対して柔軟な対応が可能です。</p><p>また、当方は主にWebデベロッパーとしての技術をサービスとして提供していますが、それと同時に、これまでアフィリエイト事業やオフショアビジネスサポート業で培った「あなたのビジネスに本当に必要なものだけを提供する」視点で全てのサービスを展開しております。</p><p>例えば留学に関する相談を無料で受けているのは、費用を支払うことで日本人にありがちな「良きに計らえ」を防ぎ、今後の海外生活に必要な「人任せにせず自分で選び、動き、責任を取る」機会を奪ってしまわないためでもあります。</p><p>耳障りの良いセールストークは出来ませんし出来たとしてもしませんが、ありもしない夢を見せて余計なオプションを付け、あなたから時間とお金を奪うことは最もしてはならないことと位置づけております。</p>'
        },
        {
          id: 'q12',
          question: 'Web制作会社です。外注は可能ですか？',
          answer:
            '<p>制作会社様の外注も承っております。お気軽にお問い合わせ下さい。</p>'
        }
      ]
    }
  },
  props: {
    height: Number
  },
  computed: {},
  methods: {
    handleScroll: function (evt, el) {
      let elementSection = document.getElementById('faq')
      let rectSection = elementSection.getBoundingClientRect()
      let distanceSection = window.pageYOffset + rectSection.top
      if (window.scrollY > distanceSection - (this.height * 2) / 3) {
        el.setAttribute('style', 'opacity: 1; transform: translateY(0)')
      }
      return window.scrollY > distanceSection
    }
  },
  template: `<section id="faq">
  <div class="container container--faq container--transition" v-scroll="handleScroll">
    <div class="container--h2">
      <h2>FAQ</h2>
    </div>
    <p class="caption caption--faq">お問い合わせの前に必ずご一読下さい</p>
    <div class="p-accordion">
      <!-- accordion component start -->
      <div v-for="item in faqList" v-bind:key="item.id">
      <input type="checkbox" v-bind:id="item.id" class="c-accordion--tab"/>
      <label v-bind:for="item.id">{{item.question}}</label>
      <div class="c-accordion--content">
        <p v-html="item.answer"></p>
      </div>
      </div>
      <!-- accordion component end -->    
    </div>
  </div>
  <!-- container faq end -->
</section>`
}

const profile = {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  template: `        <section id="profile">
  <div class="container container--profile">
    <div class="container--h2">
      <h2>Profile</h2>
    </div>
    <div class="profile--head">
        <div class="profile--icon">
            <img src="dist/img/self.png" alt="">
        </div>
        <div class="profile--abstract">
            <p>
                <span>RIE K.</span>
            </p>
            <p>1979年生まれ、香川県出身。</p>
            <p>医師として4年間診療に従事した後、妊娠・出産を機に退職。</p>
            <p>その後は在宅での仕事に切り替え、アフィリエイト・外資系決済サービスのエージェント・外資系オフショアビジネス支援業の日本人担当を経験。</p>
            <p>現在は11歳の息子と共にマレーシア・クアラルンプールに母子留学中。</p>
        </div>
    </div>
    <h3>使用言語</h3>
    <div class="details--policy details--policy--first">
      <p><span>HTML5 / CSS3</span></p>
      <p>HTML自体は趣味で20年前から個人サイト制作を行っていた。</p>
      <p>本格的に学習し始めてからは1年。</p>
      <p>レスポンシブ対応のサイトが制作可能。CSSはSASS(SCSS)で記述</p>
      <p><span>JavaScript / jQuery / Vue.js</span></p>
      <p>使用経験は半年。</p>
      <p>フロントエンドの構築、小規模なWebアプリを制作可能。</p>
      <p><span>PHP</span></p>
      <p>使用経験は半年。</p>
      <p>これまでにフルスクラッチで掲示板サービスを制作。</p>
      <img src="dist/img/service01.svg" alt="" />
    </div>
    <h3>スキル</h3>
    <div class="details--policy details--policy--second">
      <p><span>Wordpress</span></p>
      <p>
        独自ドメイン、国内・海外レンタルサーバーにてwordpress設置経験あり。ブログおよび整体院サイトの制作を手がけたことがある。
      </p>
      <p><span>Photoshop / Illustrator </span></p>
      <p>どちらも趣味で20年前から使用。</p>
      <p>
        簡単なイラスト制作、フォトレタッチ、Webサイト用の素材作りが可能。
      </p>
      <p><span>翻訳(日→英、英→日) </span></p>
      <p>主に金融・医療系のサイト翻訳を行っている。(通訳は不可)</p>
      <p><span>ライティング</span></p>
      <p>
        1999年から個人サイトを運営、現在も育児ブログ(<a
          href="https://yuruknowledge.com/"
          >ゆるナレッジfromマレーシア</a
        >)にてマレーシア生活や母子留学に関する情報発信を行っている。「つい読みふけってしまう」「仕事中に読み出したら止まらなくなった時間返せ」と言われる中毒性が売り(?)である。
      </p>
      <img src="dist/img/service02.svg" alt="" />
    </div>
    <h3>その他</h3>
    <div class="details--policy details--policy--third">
      <p><span>趣味</span></p>
      <p>
        ボードゲーム(ドイツゲーム)・語学学習・中国占術(四柱推命・断易)
      </p>
      <p>
        イラスト(色鉛筆・デジタル)・ドール・瞑想・将棋・読書(思想・哲学書と実用書)
      </p>
      <p>とにかく好奇心旺盛、多趣味です</p>
      <p><span>特技</span></p>
      <p>
        検索能力がやたら高い・目標に対して実現可能なロードマップを立てるのが得意
      </p>
      <p>
        初期救急及び外傷に関しては海外でも困らない程度の知識があるので結構役立ってます。
      </p>
      <img src="dist/img/service03.svg" alt="" />
    </div>
    <h3>座右の銘</h3>
    <div class="details--policy details--policy--fourth">
            <p>苟日新、日日新、又日新 (大学)</p>
            <p><span></span></p>

            <p>上と下と越え行くこととそのただ中において</p>
            <p>そなたが明らかに理解しているどんなものであろうと</p>
            それに対する喜びと執着を除き去れ (スッタ・ニパータ)</p>
            <p><span></span></p>
            <p><span class="mypolicy">どなんぞなる(*´ω｀*)</span>（何とかなる、の東讃弁)</p>
            <img src="dist/img/service04.svg" alt="" />
    </div>
  </div>
  <!-- container profile end -->
</section>`
}

const policy = {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  template: ` <section id="policy">
  <div class="container container--policy">
    <div class="container--h2">
      <h2>Privacy policy</h2>
    </div>
    <div class="details--policy">
      <p>
        Yuruknowledge
        Labo（以下「当サイト」といいます）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
      </p>
    </div>
    <h3>個人情報の管理</h3>
    <div class="details--policy details--policy--first">
      <p>
        当サイトは、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
      </p>
      <img src="dist/img/service01.svg" alt="" />
    </div>
    <h3>個人情報の利用目的</h3>
    <div class="details--policy">
      <p>
        本サイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
      </p>
      <p>
        お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
      </p>
    </div>
    <h3>個人情報の第三者への開示・提供の禁止</h3>
    <div class="details--policy details--policy--second"><p>当サイトは、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
    <p><ul>
        <li>・お客さまの同意がある場合</li>
        <li>・お客さまが希望されるサービスを行なうために当サイトが業務を委託する業者に対して開示する場合</li>
        <li>・法令に基づき開示することが必要である場合</li>
    </ul>
</p>
<img src="dist/img/service02.svg" alt="" /></div>
<h3>アクセス解析について</h3>
    <div class="details--policy"><p>当サイトでは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用していますが、そのトラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
        <p>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページをご覧ください。</p></div>
    <h3>個人情報の安全対策</h3>
    <div class="details--policy"><p>当サイトは、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p></div>
    <h3>ご本人の照会</h3>
    <div class="details--policy details--policy--third"><p>お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
        <img src="dist/img/service03.svg" alt="" /></div>
    <h3>法令、規範の遵守と見直し</h3>
    <div class="details--policy"><p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p></div>
    <h3>免責事項</h3>
    <div class="details--policy"><p>本サイトの情報は、一部のサービスを除き、無料で提供されています。当サイトを利用したウェブサイトの閲覧や情報収集については、情報がユーザーの需要に適合するものか否か、情報の保存や複製その他ユーザーによる任意の利用方法により必要な法的権利を有しているか否か、著作権、秘密保持、名誉毀損、品位保持および輸出に関する法規その他法令上の義務に従うことなど、ユーザーご自身の責任において行っていただきますようお願いいたします。</p>
        <p>当サイトの御利用につき、何らかのトラブルや損失・損害等につきましては一切責任を問わないものとします。</p>
        <p>当サイトが紹介しているウェブサイトやアプリの合法性、正確性、道徳性、最新性、適切性、著作権の許諾や有無など、その内容については一切の保証を致しかねます。</p>
        <p>当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>
    </div>
    <h3>著作権</h3>
    <div class="details--policy details--policy--fourth"><p>本サイトに掲載されている全てのコンテンツは、当サイト管理人であるRIEが所有しています。書面による許可なく、個人的な目的以外で使用することは禁止されています。</p>
        <img src="dist/img/service04.svg" alt="" /></div>
    <h3>お問い合わせ</h3>
    <div class="details--policy"><p>当サイトの個人情報の取扱いに関するお問い合わせは<a href="index.php#contact">【お問い合わせフォーム】</a>よりご連絡ください。</p></div>
  </div>
  <!-- container policy end -->
</section>`
}

/*
Vue.component('test', {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  template: ``
})

*/

let app = new Vue({
  components: {
    hero: hero,
    works: works,
    service: service,
    faq: faq,
    profile: profile,
    policy: policy
  },
  data: {
    height: window.innerHeight
  },
  computed: {},
  methods: {
    // Blog要素を出すやつ
    handleScrollBlog: function (evt, el) {
      let elementSection = document.getElementById('blog')
      let rectSection = elementSection.getBoundingClientRect()
      let distanceSection = window.pageYOffset + rectSection.top
      if (window.scrollY > distanceSection - (this.height * 2) / 3) {
        el.setAttribute('style', 'opacity: 1; transform: translateY(0)')
      }
      return window.scrollY > distanceSection
    },

    // お問い合わせ用要素を出すやつ
    handleScrollContact: function (evt, el) {
      let elementSection = document.getElementById('contact')
      let rectSection = elementSection.getBoundingClientRect()
      let distanceSection = window.pageYOffset + rectSection.top
      if (window.scrollY > distanceSection - (this.height * 2) / 3) {
        el.setAttribute('style', 'opacity: 1; transform: translateY(0)')
      }
      return window.scrollY > distanceSection
    },
    // リサイズ時に高さを再取得
    handleResize: _.debounce(function () {
      this.height = window.innerHeight
    }, 200)
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
})

app.$mount('#app')

// hero波アニメーション

anime({
  targets: '#hero-bg .wave-below',
  d: [
    {
      // 最初の位置と2枚目の位置データを配列で並べる
      value: [
        ' M -23 -554.908 L -23 732.264 Q 157.628 590.187 421.987 656.849 C 550.032 689.137 831.927 783.43 983.976 745.484 C 1126.73 709.858 1241.692 614.846 1551.718 688.908 Q 1723.266 729.89 1943 717.196 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z ',
        ' M -23 -554.908 L -16 656.849 Q 142.366 738.945 294 757 C 594.101 792.733 595.031 657.801 827 630 C 1016.897 607.241 1090.265 712.414 1408 741 Q 1611.216 759.283 1934 662 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z '
      ]
    },
    {
      // 最後の位置(今回は最初の位置と同じ)のデータを入れる
      value:
        ' M -23 -554.908 L -23 732.264 Q 157.628 590.187 421.987 656.849 C 550.032 689.137 831.927 783.43 983.976 745.484 C 1126.73 709.858 1241.692 614.846 1551.718 688.908 Q 1723.266 729.89 1943 717.196 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z '
    }
  ],
  easing: 'easeInOutSine', // イージング
  duration: 20000, // アニメーション間隔
  loop: true // 無限ループ
})

anime({
  targets: '#hero-bg .wave-above',
  d: [
    {
      value: [
        ' M -23 -554.908 L -23 732.264 Q 342.163 609.412 606.12 677.593 C 860.988 743.427 1095.875 792.717 1312.486 732.264 C 1529.098 671.811 1599.146 651.991 1743.523 670.05 Q 1863.646 685.075 1943 770 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z ',
        ' M -23 -554.908 L -9 603 Q 190.85 736.716 463 757 C 802.218 782.283 873.137 664.846 1098 653 C 1316.747 641.476 1430.434 736.685 1656 748 Q 1842.887 757.375 1943 691 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z '
      ]
    },
    {
      value:
        ' M -23 -554.908 L -23 732.264 Q 342.163 609.412 606.12 677.593 C 860.988 743.427 1095.875 792.717 1312.486 732.264 C 1529.098 671.811 1599.146 651.991 1743.523 670.05 Q 1863.646 685.075 1943 770 L 1933.41 -554.908 Q 2.514 -564.145 -23 -554.908 Z '
    }
  ],
  easing: 'easeInOutSine',
  duration: 18000,
  loop: true
})

// フッター波アニメーション

anime({
  targets: '#footer-bg .wave-below',
  d: [
    {
      value: [
        ' M 0 31.15 C 0 31.15 79 113.272 574 113.272 C 996.786 96.021 1107.09 27.37 1420 31.15 C 1732.91 34.93 1980 83.546 1980 83.546 L 1980 750 L 0 750 L 0 31.15 Z ',
        ' M 0 169 C 0 169 411.507 34.583 690 37 C 969.341 43.728 1059.09 126.22 1372 130 C 1684.91 133.78 1980 26.96 1980 26.96 L 1980 750 L 0 750 L 0 169 Z '
      ]
    },
    {
      value:
        ' M 0 31.15 C 0 31.15 79 113.272 574 113.272 C 996.786 96.021 1107.09 27.37 1420 31.15 C 1732.91 34.93 1980 83.546 1980 83.546 L 1980 750 L 0 750 L 0 31.15 Z '
    }
  ],
  easing: 'easeInOutSine',
  duration: 20000,
  loop: true
})

anime({
  targets: '#footer-bg .wave-above',
  d: [
    {
      value: [
        ' M 0 11 C 0 11 147 125 297 137 C 517.988 154.679 666.661 46.676 928.4 38.826 C 1276.212 27.612 1319.051 113.272 1604.292 113.272 C 1889.533 113.272 1980 38.826 1980 38.826 L 1980 750 L 0 750 L 0 11 Z ',
        ' M 0 26.96 C 0 26.96 92 -1 242 11 C 462.988 28.679 572.261 144.85 834 137 C 1136.245 116.597 1266.759 55 1552 55 C 1837.241 55 1980 178 1980 178 L 1980 750 L 0 750 L 0 26.96 Z '
      ]
    },
    {
      value:
        ' M 0 11 C 0 11 147 125 297 137 C 517.988 154.679 666.661 46.676 928.4 38.826 C 1276.212 27.612 1319.051 113.272 1604.292 113.272 C 1889.533 113.272 1980 38.826 1980 38.826 L 1980 750 L 0 750 L 0 11 Z '
    }
  ],
  easing: 'easeInOutSine',
  duration: 18000,
  loop: true
})
