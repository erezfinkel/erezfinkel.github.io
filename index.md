---
layout: default
---
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Hebrew:wght@300;400;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; }

body {
  background: #f6f6f6;
  color: #333333;
  font-family: "Open Sans Hebrew", Arial, sans-serif;
  direction: rtl;
  text-align: right;
  margin: 0;
  padding: 0;
}

.lai-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}

.lai-page-title {
  font-size: 42px;
  font-weight: 700;
  color: #0A0A0A;
  text-align: center;
  margin-bottom: 40px;
}

/* -- Featured article row -- */
.lai-article {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s;
}
.lai-article:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }

.lai-article-img {
  width: 240px;
  min-width: 240px;
  height: 180px;
  object-fit: cover;
  flex-shrink: 0;
}

.lai-article-img-placeholder {
  width: 240px;
  min-width: 240px;
  height: 180px;
  background: linear-gradient(135deg, #e8f4fd 0%, #c8e6f5 100%);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.lai-article-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.lai-article-title {
  font-size: 22px;
  font-weight: 600;
  color: #0A0A0A;
  margin: 0 0 8px;
  line-height: 1.3;
}

.lai-article-meta {
  font-size: 13px;
  color: #ADADAD;
  margin-bottom: 13px;
}

.lai-article-excerpt {
  font-size: 14px;
  color: #333333;
  line-height: 1.7;
  margin: 0 0 16px;
  flex: 1;
}

.lai-read-more {
  font-size: 12px;
  font-weight: 600;
  color: #39E0CE;
  text-decoration: none;
}
.lai-read-more:hover { text-decoration: underline; }

/* -- Section label -- */
.lai-section-label {
  font-size: 13px;
  font-weight: 700;
  color: #ADADAD;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 40px 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
}

/* -- 3-column grid -- */
.lai-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 30px;
}

@media (max-width: 900px) {
  .lai-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 580px) {
  .lai-grid { grid-template-columns: 1fr; }
  .lai-article { flex-direction: column; }
  .lai-article-img, .lai-article-img-placeholder { width: 100%; min-width: unset; height: 180px; }
  .lai-page-title { font-size: 28px; }
}

/* -- Small card -- */
.lai-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
}
.lai-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }

.lai-card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.lai-card-img-placeholder {
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, #e8f4fd 0%, #c8e6f5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

.lai-card-body {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.lai-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #0A0A0A;
  margin: 0 0 8px;
  line-height: 1.35;
}

.lai-card-meta {
  font-size: 13px;
  color: #ADADAD;
}

/* -- Footer -- */
.lai-footer {
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
  color: #ADADAD;
  border-top: 1px solid #e0e0e0;
  padding-top: 24px;
}
a { color: #0070CF; }
</style>

<div class="lai-wrap">

<h1 class="lai-page-title">כתבות AI</h1>

{% for post in site.posts limit:1 %}
<a class="lai-article" href="{{ post.url }}">
  {% if post.image %}
  <img class="lai-article-img" src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
  {% else %}
  <div class="lai-article-img-placeholder">&#x1F916;</div>
  {% endif %}
  <div class="lai-article-body">
    <div class="lai-article-title">{{ post.title }}</div>
    <div class="lai-article-meta">{{ post.date | date: "%d/%m/%Y" }}</div>
    <p class="lai-article-excerpt">{{ post.content | strip_html | strip_newlines | truncate: 180 }}</p>
    <span class="lai-read-more">&#x05DC;&#x05D4;&#x05DE;&#x05E9;&#x05DA; &#x05E7;&#x05E8;&#x05D9;&#x05D0;&#x05D4; &raquo;</span>
  </div>
</a>
{% endfor %}

{% if site.posts.size > 1 %}
<div class="lai-section-label">&#x05E2;&#x05D5;&#x05D3; &#x05DB;&#x05EA;&#x05D1;&#x05D5;&#x05EA;</div>
<div class="lai-grid">
{% for post in site.posts offset:1 %}
  <a class="lai-card" href="{{ post.url }}">
    {% if post.image %}
    <img class="lai-card-img" src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
    {% else %}
    <div class="lai-card-img-placeholder">&#x1F916;</div>
    {% endif %}
    <div class="lai-card-body">
      <div class="lai-card-title">{{ post.title }}</div>
      <div class="lai-card-meta">{{ post.date | date: "%d/%m/%Y" }}</div>
    </div>
  </a>
{% endfor %}
</div>
{% endif %}

<div class="lai-footer">&#x05DE;&#x05EA;&#x05E2;&#x05D3;&#x05DB;&#x05DF; &#x05D1;&#x05D0;&#x05D5;&#x05E4;&#x05DF; &#x05E9;&#x05D5;&#x05D8;&#x05E3;</div>

</div>
