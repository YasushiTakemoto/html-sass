# html-sass


## 初めにやること

Dreamweaverでサイトの設定をする。

ローカルサイトフォルダをちゃんと指定する。

## サイトの構成について
	
### TOPページ
index.html

### works一覧ページ
works/works-archive.html

### works個別ページ
works/works-single01.html

***

### img・CSS・JS・SCSSなど
common/

### imgはちゃんとフォルダ分けすること
common/home
common/works

***

### scssここは指定する場所を小分けにしています。

#### baseとなるリセットのcssです。
scss/base/normalize.scss

#### componentsはheaerやfooterなどの共通パーツです。
scss/components/footer.scss  
scss/components/globalnavi.scss  
scss/components/header.scss  
scss/components/sidebar.scss  

#### globalはlayoutやtypographyなどの共通パーツです。
scss/global/layout.scss  
scss/global/typography.scss  
scss/global/utility.scss  

#### pagesはhomeやworksなどのページ専用です。
scss/pages/home.scss  
scss/pages/news.scss  
scss/pages/works.scss  
scss/pages/contact.scss  

#### vendorsはjsに関わるパーツ用です。

***

### jsを入れる場所です。

js/

***

### 参考のドキュメント

[Bootstrap3日本語リファレンス](http://bootstrap3.cyberlab.info/)  
[Bootstrap4 Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)  
[Sass Documentation](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)  
[Sass（SCSS）は難しくないよ！私なりの使い方をご紹介！](https://www.tam-tam.co.jp/tipsnote/html_css/post5189.html)  









 
 