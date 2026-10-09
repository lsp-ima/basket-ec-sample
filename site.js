/* サンプル用のダミー商品データと共通部品。本番は WooCommerce の商品データに置き換わる */
/* 'xx.jpg' は img/ の生成画像、それ以外は Unsplash の仮素材 */
var U = function (id, w) { return /\.jpg$/.test(id) ? 'img/' + id : 'https://images.unsplash.com/photo-' + id + '?w=' + (w || 800) + '&q=80'; };

var SZ = {
  shoes: ['24.0','24.5','25.0','25.5','26.0','26.5','27.0','27.5','28.0','29.0'],
  wshoes: ['22.5','23.0','23.5','24.0','24.5','25.0','25.5','26.0'],
  kshoes: ['19.0','20.0','21.0','22.0','22.5','23.0','23.5','24.0'],
  wear: ['S','M','L','XL','XXL'],
  wwear: ['XS','S','M','L','XL'],
  kwear: ['120','130','140','150','160'],
  socks: ['23-25','25-27','27-29'],
  ksocks: ['19-21','21-23','23-25'],
  sup: ['S','M','L','XL'],
  team: []
};

var CAT = {
  shoes: { en: 'Shoes', ja: 'バッシュ', img: 'hero.jpg' },
  wear: { en: 'Wear', ja: 'ウエア', img: 'wear_life.jpg' },
  supporter: { en: 'Supporter', ja: 'サポーター', img: 'sp1.jpg' },
  socks: { en: 'Socks', ja: 'ソックス', img: 'k1.jpg' },
  team: { en: 'Team Order', ja: 'チームオーダー', img: 'team.jpg' }
};
var GEN = {
  men: { en: 'Men', ja: 'メンズ', img: 'men.jpg', lead: '一般・大学・高校の選手向け' },
  women: { en: 'Women', ja: 'ウィメンズ', img: 'women.jpg', lead: '女性の足と体に合わせたモデル' },
  kids: { en: 'Kids', ja: 'キッズ・ジュニア', img: 'kids.jpg', lead: 'ミニバス・中学生の最初の一式に' }
};

/* g: men / women / kids / unisex(メンズとウィメンズの両方に出る) */
var P = [
  { id:'s1', cat:'shoes', g:'unisex', b:'ASICS', n:'バスケットボールシューズ ワイド', p:15400, t:'NEW', img:'s1.jpg', c:[['オレンジ×ブラック','#ff6a1a'],['ホワイト','#f2f2f2'],['ブラック','#111']], sz:'shoes', out:['25.0','27.5'], few:['26.5'], tags:['ガード向け','軽量','幅広 2E相当','ハイカット'], fit:'普段のスニーカーと同じサイズでOK。厚手ソックスなら +0.5cm。', w:66 },
  { id:'s2', cat:'shoes', g:'men', b:'UNDER ARMOUR', n:'バスケットボールシューズ ロー', p:13200, t:'残りわずか', img:'s2.jpg', c:[['ブラック×オレンジ','#111']], sz:'shoes', out:['24.0','28.0','29.0'], few:['27.0'], tags:['ガード向け','ローカット','グリップ重視'], fit:'やや細め。幅広の人は +0.5cm。', w:35 },
  { id:'s3', cat:'shoes', g:'kids', b:'ASICS', n:'ジュニア バスケットボールシューズ', p:8800, t:'NEW', img:'s3.jpg', c:[['マルチカラー','#e94'],['ホワイト','#f2f2f2']], sz:'kshoes', out:['19.0'], few:[], tags:['ミニバス','面ファスナー','軽量'], fit:'成長を見込んで +0.5cm がおすすめ。', w:55 },
  { id:'s4', cat:'shoes', g:'women', b:'UNDER ARMOUR', n:'ウィメンズ バスケットボールシューズ', p:12100, t:'', img:'s4.jpg', c:[['ティール×パープル','#2aa'],['ブラック','#111']], sz:'wshoes', out:['22.5'], few:['25.5'], tags:['女性の足型','ミッドカット','クッション'], fit:'女性の足型。普段と同じサイズでOK。', w:45 },
  { id:'s5', cat:'shoes', g:'unisex', b:'ASICS', n:'バスケットボールシューズ ハイ', p:16500, t:'', img:'s5.jpg', c:[['オレンジ','#ff6a1a'],['ホワイト×オレンジ','#f5e6d8']], sz:'shoes', out:[], few:['24.5'], tags:['センター・フォワード向け','ハイカット','足首の安定'], fit:'普段と同じサイズでOK。', w:60 },
  { id:'s6', cat:'shoes', g:'unisex', b:'UNDER ARMOUR', n:'バスケットボールシューズ エントリー', p:9900, t:'1万円以下', img:'s6.jpg', c:[['ホワイト×ブラック','#f2f2f2']], sz:'shoes', out:['29.0'], few:[], tags:['部活の最初の1足','1万円以下','ハイカット'], fit:'普段と同じサイズでOK。', w:50 },

  { id:'w1', cat:'wear', g:'men', b:'UNDER ARMOUR', n:'スウェット フーディー', p:9900, t:'NEW', img:'w1.jpg', c:[['ブラック','#111'],['グレー','#888']], sz:'wear', out:[], few:['XXL'], tags:['冬の練習・移動','裏起毛'], fit:'ゆったりめ。ジャストで着るなら1つ下。' },
  { id:'w2', cat:'wear', g:'men', b:'ASICS', n:'プラクティスシャツ', p:4400, t:'', img:'w2.jpg', c:[['ホワイト','#f2f2f2'],['ネイビー','#1d3a8a']], sz:'wear', out:[], few:[], tags:['練習着','速乾'], fit:'標準。' },
  { id:'w3', cat:'wear', g:'men', b:'UNDER ARMOUR', n:'プラクティスショーツ', p:5500, t:'', img:'w3.jpg', c:[['ブラック×レッド','#111']], sz:'wear', out:['S'], few:[], tags:['練習着','ひざ上丈'], fit:'標準。' },
  { id:'w4', cat:'wear', g:'women', b:'ASICS', n:'ウィメンズ プラクティスシャツ', p:4180, t:'NEW', img:'w4.jpg', c:[['イエロー','#f2c230'],['ブラック','#111']], sz:'wwear', out:[], few:['XS'], tags:['練習着','速乾','女性用カッティング'], fit:'標準。' },
  { id:'w5', cat:'wear', g:'women', b:'UNDER ARMOUR', n:'ウィメンズ プラクティスショーツ', p:4950, t:'', img:'w5.jpg', c:[['ブラック','#111']], sz:'wwear', out:[], few:[], tags:['練習着','ひざ上丈'], fit:'標準。' },
  { id:'w6', cat:'wear', g:'kids', b:'UNDER ARMOUR', n:'ジュニア スウェット フーディー', p:6600, t:'', img:'w6.jpg', c:[['ブラック','#111']], sz:'kwear', out:['120'], few:[], tags:['移動・防寒','ミニバス・中学'], fit:'成長を見込んで1つ上もおすすめ。' },
  { id:'w7', cat:'wear', g:'kids', b:'ASICS', n:'ジュニア 練習着 上下セット', p:6380, t:'セット', img:'w7.jpg', c:[['ホワイト×ブルー','#f2f2f2']], sz:'kwear', out:[], few:['160'], tags:['ミニバス','部活の最初の一式'], fit:'標準。' },
  { id:'w8', cat:'wear', g:'unisex', b:'UNDER ARMOUR', n:'ロングスリーブ Tシャツ', p:4950, t:'', img:'w8.jpg', c:[['ホワイト','#f2f2f2'],['ブラック','#111'],['グレー','#888']], sz:'wear', out:[], few:[], tags:['練習着','普段着にも'], fit:'標準。' },

  { id:'sp1', cat:'supporter', g:'unisex', b:'ASICS', n:'足首サポーター', p:3300, t:'人気', img:'sp1.jpg', c:[['ブラック','#111']], sz:'sup', out:[], few:['XL'], tags:['ねんざ予防','左右兼用'], fit:'足首の一番細い所の周囲で選ぶ。' },
  { id:'sp2', cat:'supporter', g:'unisex', b:'UNDER ARMOUR', n:'ひざサポーター', p:3850, t:'', img:'sp2.jpg', c:[['ブラック','#111']], sz:'sup', out:['S'], few:[], tags:['ひざの保護','パッド付き'], fit:'ひざのお皿の上5cmの周囲で選ぶ。' },
  { id:'sp3', cat:'supporter', g:'unisex', b:'ASICS', n:'リストサポーター(2個入)', p:1320, t:'', img:'sp3.jpg', c:[['ベージュ','#e8d2b8']], sz:'sup', out:[], few:[], tags:['手首の保護','汗止め'], fit:'手首の周囲で選ぶ。' },
  { id:'sp4', cat:'supporter', g:'kids', b:'ASICS', n:'ジュニア 足首サポーター', p:2640, t:'', img:'sp1.jpg', c:[['ブラック','#111']], sz:'sup', out:[], few:[], tags:['ミニバス','ねんざ予防'], fit:'足首の一番細い所の周囲で選ぶ。' },

  { id:'k1', cat:'socks', g:'unisex', b:'UNDER ARMOUR', n:'厚手バスケットソックス', p:1650, t:'', img:'k1.jpg', c:[['ブラック','#111'],['ホワイト','#f2f2f2']], sz:'socks', out:[], few:[], tags:['クッション','つま先・かかと補強'], fit:'靴のサイズで選ぶ。' },
  { id:'k2', cat:'socks', g:'unisex', b:'ASICS', n:'5本指 バスケットソックス', p:1980, t:'NEW', img:'k2.jpg', c:[['ブラック','#111']], sz:'socks', out:['27-29'], few:[], tags:['踏ん張り','すべり止め'], fit:'靴のサイズで選ぶ。' },
  { id:'k3', cat:'socks', g:'women', b:'UNDER ARMOUR', n:'ウィメンズ ショートソックス 3足組', p:2200, t:'', img:'k3.jpg', c:[['ボーダー','#333']], sz:'socks', out:[], few:[], tags:['3足組','練習用'], fit:'靴のサイズで選ぶ。' },
  { id:'k4', cat:'socks', g:'kids', b:'ASICS', n:'ジュニア バスケットソックス 2足組', p:1430, t:'', img:'k4.jpg', c:[['ホワイト','#f2f2f2']], sz:'ksocks', out:[], few:[], tags:['2足組','ミニバス'], fit:'靴のサイズで選ぶ。' },

  { id:'t1', cat:'team', g:'unisex', b:'TEAM ORDER', n:'チームユニフォーム(上下・番号入り)', p:7700, t:'見積無料', img:'t1.jpg', c:[], sz:'team', tags:['10着から','番号・名前入れ'], fit:'' },
  { id:'t2', cat:'team', g:'unisex', b:'TEAM ORDER', n:'ビブス 10枚セット(番号入り)', p:8800, t:'見積無料', img:'t2.jpg', c:[], sz:'team', tags:['10枚セット','2色リバーシブル可'], fit:'' }
];

var yen = function (n) { return '¥' + n.toLocaleString('ja-JP'); };
var byId = function (id) { for (var i = 0; i < P.length; i++) if (P[i].id === id) return P[i]; return null; };
var inGender = function (x, g) { return x.g === g || (x.g === 'unisex' && g !== 'kids'); };

function card(x) {
  var tag = x.t ? '<span class="badge' + (x.t === '残りわずか' ? ' hot' : '') + '">' + x.t + '</span>' : '';
  var sw = (x.c || []).map(function (c) { return '<i style="background:' + c[1] + '"></i>'; }).join('');
  return '<a class="p rv" href="product.html?id=' + x.id + '"><div class="pi"><img loading="lazy" src="' + U(x.img) + '" alt="">' + tag + '<span class="fav">♡</span></div>' +
    '<p class="pb">' + x.b + '</p><p class="pn">' + x.n + '</p><p class="pp">' + yen(x.p) + (x.cat === 'team' ? '〜<small>/1着</small>' : '') + '</p><div class="sw">' + sw + '</div></a>';
}

/* 共通ヘッダー・フッター */
function chrome() {
  var h = document.getElementById('hd');
  if (h) h.outerHTML =
    '<div class="ann">¥8,800以上で送料無料(仮) ・ 15時までのご注文は当日発送(仮) ・ サイズ交換無料(仮)</div>' +
    '<header><div class="hd"><span class="menu" onclick="document.body.classList.toggle(\'nav-open\')">☰</span>' +
    '<nav><a href="list.html?g=men">MEN</a><a href="list.html?g=women">WOMEN</a><a href="list.html?g=kids">KIDS</a><a href="list.html?new=1">NEW</a><a href="list.html?c=shoes">SHOES</a><a href="list.html?c=wear">WEAR</a><a href="list.html?c=supporter">SUPPORTER</a><a href="list.html?c=team" style="color:var(--ac)">TEAM ORDER</a></nav>' +
    '<a class="logo" href="index.html">STORE<i>.</i></a><div class="ic"><span>検索</span><span class="t">ログイン</span><span id="cc">カート 0</span></div></div></header>';
  var f = document.getElementById('ft');
  if (f) f.outerHTML = '<footer><div class="fl">STORE.</div><div class="fi"><span>運営:アサヒスポーツ</span><span>特定商取引法に基づく表記 ・ プライバシーポリシー ・ お問い合わせ</span></div></footer>' +
    '<div class="note" onclick="this.remove()" style="cursor:pointer">サイトイメージ(サンプル):画像はAI生成。商品名・価格・在庫・条件はすべて仮です ×</div>';
}

/* スクロールで下からふわっと出す(1種類だけ) */
function reveal() {
  var els = document.querySelectorAll('.rv:not(.in)');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
}
