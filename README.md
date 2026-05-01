<style>
  body {
    direction: rtl;
    text-align: right;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  .blog-header {
    border-bottom: 2px solid #00ff00;
    padding-bottom: 16px;
    margin-bottom: 32px;
  }

  .blog-header p {
    color: #aaa;
    font-size: 1.05em;
    margin-top: 6px;
  }

  .posts-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;
  }

  .post-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid #333;
    border-right: 4px solid #00ff00;
    border-radius: 8px;
    padding: 20px 22px;
    transition: all 0.25s ease;
    text-decoration: none !important;
    display: block;
  }

  .post-card:hover {
    background: rgba(0, 255, 0, 0.07);
    border-color: #00ff00;
    transform: translateX(-4px);
    box-shadow: 4px 0 16px rgba(0, 255, 0, 0.15);
  }

  .post-card h3 {
    margin: 0 0 8px 0;
    font-size: 1.15em;
    color: #00ff00;
  }

  .post-card .post-meta {
    font-size: 0.82em;
    color: #888;
    margin-bottom: 6px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
  }

  .post-card .post-excerpt {
    font-size: 0.93em;
    color: #ccc;
    line-height: 1.6;
    margin: 0;
  }

  .section-title {
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #666;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
  }

  .section-title::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #333;
  }
</style>

<div class="blog-header">
  <h1>⚡ בלוג ה-AI של ארז</h1>
  <p>כל מה שחם, חדש ומשנה את חוקי המשחק בעולם הבינה המלאכותית</p>
</div>

<div class="section-title">הכתבות האחרונות</div>

<div class="posts-grid">
  {% for post in site.posts %}
    <a class="post-card" href="{{ post.url }}">
      <div class="post-meta">
        <span>📅 {{ post.date | date: "%d.%m.%Y" }}</span>
      </div>
      <h3>{{ post.title }}</h3>
      {% if post.excerpt %}
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      {% endif %}
    </a>
  {% endfor %}
</div>
