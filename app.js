{
  "success": true,
  "status": 302,
  "statusText": "Found",
  "text": "Redirecting...\n",
  "headers": {
    "cache-control": "no-store, max-age=0",
    "content-type": "text/plain",
    "date": "Mon, 21 Sep 2026 09:21:44 GMT",
    "location": "https://vercel.com/sso-api?url=https%3A%2F%2Factresstcg-37ikrk5t3-ine5.vercel.app%2Fapp.js%3F_vercel_share%3D89Hq4fepTsr7U8c2KcvNLVQQl8MRqS74&nonce=de59412496ba856b8ac1a870ac4861d62d81e2cd594c9aada80c53a4fe1eb363",
    "server": "Vercel",
    "set-cookie": "_vercel_sso_nonce=56a0ec450920f5229d953e3314d54984225cb055fe25f703; Max-Age=3600; Path=/; Secure; HttpOnly; SameSite=Lax",
    "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
    "transfer-encoding": "chunked",
    "x-frame-options": "DENY",
    "x-robots-tag": "noindex",
    "x-vercel-id": "syd1:iad1::rrcvh-1789982504787-40c9e87ffd07"
  }
function feedbackPage(fromPack=false){const request=++pageRequest;if(!session)return;document.getElementById('main').innerHTML='<section class="hero"><h1>Feedback</h1><p>'+(fromPack?'Tell us what you think to unlock 3 bonus cards.':'Send a message directly to the admin.')+'</p></section><form class="form" onsubmit="event.preventDefault();sendFeedback()"><textarea class="input" id="feedbackMessage" maxlength="2000" rows="7" placeholder="Write your feedback..." required></textarea><button class="btn primary">Send feedback</button></form><div id="feedbackMsg"></div>'}
}