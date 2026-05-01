<style>
  body { direction: rtl; text-align: right; }
  .container { max-width: 800px; margin: 0 auto; }
</style>

# ברוכים הבאים לבלוג ה-AI שלי!

כאן אני מפרסם כתבות על הכלים הכי חמים בעולם הבינה המלאכותית.

---

## 📝 הכתבות האחרונות:

<ul>
  {% for post in site.posts %}
    <li style="margin-bottom: 10px;">
      <a href="{{ post.url }}" style="font-size: 1.2em; text-decoration: none;">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
