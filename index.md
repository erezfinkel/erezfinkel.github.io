---
layout: default
---
<style>
.bw, .bw * { box-sizing: border-box; }
.bw { direction: rtl; text-align: right; font-family: 'Heebo', sans-serif; max-width: 860px; margin: 0 auto; padding: 8px 20px 60px; color: #d0d0d0; }
.bw a { text-decoration: none !important; color: inherit; }
/* ── Section label ── */
.bw-label { font-family: 'JetBrains Mono', monospace; font-size: 0.66em; letter-spacing: 3px; text-transform: uppercase; color: #444; margin-bottom: 18px; display: flex; align-items: center; gap: 16px; justify-content: flex-end; }
.bw-label::before { content: ''; flex: 1; height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08)); }
/* ── Featured card ── */
.bw-featured { display: block; position: relative; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.09); border-radius: 18px; padding: 36px 40px 32px; margin-bottom: 14px; overflow: hidden; transition: border-color 0.3s, background 0.3s; }
.bw-featured::after { content: ''; position: absolute; top: 0; right: 0; left: 0; height: 2px; background: linear-gradient(to left, #22d3a0 0%, transparent 55%); }
.bw-featured:hover { border-color: rgba(34,211,160,0.28); background: rgba(255,255,255,0.046); }
.bw-featured-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.63em; letter-spacing: 1.5px; text-transform: uppercase; color: #22d3a0; background: rgba(34,211,160,0.08); border: 1px solid rgba(34,211,160,0.18); border-radius: 20px; padding: 3px 11px; margin-bottom: 16px; }
.bw-featured-date { font-family: 'JetBrains Mono', monospace; font-size: 0.68em; color: #444; margin-bottom: 12px; }
.bw-featured h2 { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; color: #f0f0f0; margin: 0 0 14px; line-height: 1.22; letter-spacing: -0.5px; transition: color 0.2s; }
.bw-featured:hover h2 { color: #ffffff; }
.bw-featured-excerpt { color: #777; font-size: 0.95em; line-height: 1.75; margin: 0 0 24px; font-weight: 300; }
.bw-read-more { display: inline-flex; align-items: center; gap: 8px; color: #22d3a0; font-size: 0.86em; font-weight: 600; transition: gap 0.25s; }
.bw-featured:hover .bw-read-more { gap: 14px; }
/* ── Grid ── */
.bw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
@media (max-width: 580px) { .bw-grid { grid-template-columns: 1fr; } .bw-featured { padding: 26px 22px; } }
.bw-card { display: block; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 13px; padding: 24px 26px; position: relative; overflow: hidden; transition: border-color 0.25s, background 0.25s, transform 0.25s; }
.bw-card::after { content: ''; position: absolute; bottom: 0; right: 0; left: 0; height: 1px; background: linear-gradient(to left, #22d3a0, transparent); opacity: 0; transition: opacity 0.3s; }
.bw-card:hover { border-color: rgba(34,211,160,0.18); background: rgba(255,255,255,0.042); transform: translateY(-4px); }
.bw-card:hover::after { opacity: 1; }
.bw-card-date { font-family: 'JetBrains Mono', monospace; font-size: 0.65em; color: #444; margin-bottom: 9px; }
.bw-card h3 { font-size: 1em; font-weight: 700; color: #d5d5d5; margin: 0 0 9px; line-height: 1.38; transition: color 0.2s; }
.bw-card:hover h3 { color: #ffffff; }
.bw-card-excerpt { font-size: 0.83em; color: #555; line-height: 1.65; margin: 0; font-weight: 300; }
/* ── Footer dot ── */
.bw-foot { margin-top: 48px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: flex-end; gap: 10px; }
.bw-foot span { font-family: 'JetBrains Mono', monospace; font-size: 0.66em; color: #383838; letter-spacing: 1px; }
.bw-dot { width: 7px; height: 7px; border-radius: 50%; background: #22d3a0; box-shadow: 0 0 8px rgba(34,211,160,0.5); animation: bwpulse 2.4s ease-in-out infinite; }
@keyframes bwpulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.3; transform:scale(0.7); } }
@media (prefers-reduced-motion: reduce) { .bw-featured, .bw-card, .bw-read-more { transition: none !important; } @keyframes bwpulse { 0%,100% { opacity:1; } } }
</style>

<div class="bw">
  <div class="bw-label">כתבות אחרונות</div>

    {% for post in site.posts limit:1 %}
      <a class="bw-featured" href="{{ post.url }}">
          <div class="bw-featured-tag">כתבה מומלצת</div>
              <div class="bw-featured-date">{{ post.date | date: "%d.%m.%Y" }}</div>
                  <h2>{{ post.title }}</h2>
                      <p class="bw-featured-excerpt">{{ post.content | strip_html | strip_newlines | truncate: 160 }}</p>
                          <span class="bw-read-more">לקריאה המלאה ←</span>
                            </a>
                              {% endfor %}

                                {% if site.posts.size > 1 %}
                                  <div class="bw-label">עוד כתבות</div>
                                    <div class="bw-grid">
                                        {% for post in site.posts offset:1 %}
                                            <a class="bw-card" href="{{ post.url }}">
                                                  <div class="bw-card-date">{{ post.date | date: "%d.%m.%Y" }}</div>
                                                        <h3>{{ post.title }}</h3>
                                                              <p class="bw-card-excerpt">{{ post.content | strip_html | strip_newlines | truncate: 100 }}</p>
                                                                  </a>
                                                                      {% endfor %}
                                                                        </div>
                                                                          {% endif %}

                                                                            <div class="bw-foot">
                                                                                <span>מתעדכן באופן שוטף</span>
                                                                                    <div class="bw-dot"></div>
                                                                                      </div>
                                                                                      </div>
