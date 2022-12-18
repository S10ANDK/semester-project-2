(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && a(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(n) {
    const s = {};
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const s = c(n);
    fetch(n.href, s);
  }
})();
const de = 'https://nf-api.onrender.com',
  ie = '/api/v1',
  re = '/auction',
  E = `${de}${ie}${re}`,
  Oe = `${de}${ie}${re}/listings?sort=created&sortOrder=desc`,
  _e = `${de}${ie}${re}/listings?sort=created&sortOrder=asc`;
function C(e) {
  return `<div class="error_message">${e}</div>`;
}
async function he(e) {
  const t = 'POST',
    c = localStorage.getItem('accessToken'),
    a = E + '/listings',
    n = await fetch(a, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${c}`,
      },
      method: t,
      body: JSON.stringify(e),
    }),
    s = document.querySelector('#createItemContainer'),
    o = document.querySelector('#createItemForm');
  if (n.ok) {
    (o.style.display = 'none'), o.classList.remove('d-flex');
    const d = document.createElement('p'),
      l = document.createTextNode('Success!');
    d.appendChild(l),
      s.appendChild(d),
      s.classList.add('text-center', 'mw-600', 'mx-auto', 'pt-3', 'fade-in');
    const r = document.createElement('img');
    r.setAttribute('src', '/assets/success_icon.png'),
      r.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3'),
      s.appendChild(r),
      setTimeout(function () {
        window.location.href = '/';
      }, 2e3);
  } else
    console.log('An error has occured'),
      console.log(n.status),
      (o.style.display = 'none'),
      o.classList.remove('d-flex'),
      s.classList.add('fade-in'),
      (s.innerHTML = C(
        'An error has occured. Please refresh the page and try again.'
      ));
  return await n.json();
}
async function He() {
  const e = document.querySelector('#createItemForm');
  e &&
    e.addEventListener('submit', (t) => {
      t.preventDefault();
      const c = e.deadline.value;
      let a = e.tags.value.split(',', '8'),
        n = e.media.value.split(',', '8');
      const s = e.title.value,
        o = e.description.value,
        d = a,
        l = n,
        r = c;
      n[0] === ''
        ? he({ title: s, description: o, tags: d, endsAt: r })
        : he({ title: s, description: o, tags: d, media: l, endsAt: r });
    });
}
const Ue = '/listings',
  je = 'delete';
async function Le(e) {
  const t = localStorage.getItem('accessToken'),
    c = `${E}${Ue}/${e}`,
    a = await fetch(c, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${t}`,
      },
      method: je,
    }),
    n = document.querySelector('#updateItemContainer'),
    s = document.querySelector('#updateItemForm');
  if (a.ok) {
    (s.style.display = 'none'), s.classList.remove('d-flex');
    const o = document.createElement('p'),
      d = document.createTextNode('Listing has successfully been deleted!');
    o.appendChild(d),
      n.appendChild(o),
      n.classList.add('text-center', 'mw-600', 'mx-auto', 'pt-3', 'fade-in');
    const l = document.createElement('img');
    l.setAttribute('src', '/assets/success_icon.png'),
      l.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3'),
      n.appendChild(l),
      setTimeout(function () {
        window.location.href = '/';
      }, 3e3);
  } else
    console.log('An error has occured'),
      console.log(a.status),
      (s.style.display = 'none'),
      s.classList.remove('d-flex'),
      n.classList.add('fade-in'),
      (n.innerHTML = C('An error has occured. Could not delete your Listing.'));
  return await a.json();
}
const Re = '/listings';
async function le(e) {
  return await (
    await fetch(e, { headers: { 'Content-Type': 'application/json' } })
  ).json();
}
async function Ce() {
  const e = document.location.search,
    c = new URLSearchParams(e).get('id'),
    a = `${E}${Re}/${c}?_seller=true&_bids=true`;
  return await (
    await fetch(a, { headers: { 'Content-Type': 'application/json' } })
  ).json();
}
const Fe = '/listings',
  De = 'put';
async function ye(e) {
  const t = localStorage.getItem('accessToken'),
    c = `${E}${Fe}/${e.id}`,
    a = await fetch(c, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${t}`,
      },
      method: De,
      body: JSON.stringify(e),
    }),
    n = document.querySelector('#updateItemContainer'),
    s = document.querySelector('#updateItemForm'),
    o = e.id;
  if (a.ok) {
    (s.style.display = 'none'), s.classList.remove('d-flex');
    const d = document.createElement('p'),
      l = document.createTextNode('Success!');
    d.appendChild(l),
      n.appendChild(d),
      n.classList.add('text-center', 'mw-600', 'mx-auto', 'pt-3', 'fade-in');
    const r = document.createElement('img');
    r.setAttribute('src', '/assets/success_icon.png'),
      r.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3'),
      n.appendChild(r),
      setTimeout(function () {
        window.location.href = '/html/item-specific/?id=' + o;
      }, 2e3);
  } else
    console.log('An error has occured'),
      console.log(a.status),
      (s.style.display = 'none'),
      s.classList.remove('d-flex'),
      n.classList.add('fade-in'),
      (n.innerHTML = C(
        'An error has occured. Please refresh the page and try again.'
      ));
  return await a.json();
}
async function Ge(e) {
  const t = 'POST',
    c = localStorage.getItem('accessToken'),
    a = '/listings',
    n = '/bids',
    o = new URL(location.href).searchParams.get('id'),
    d = `${E}${a}/${o}${n}`,
    l = await fetch(d, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${c}`,
      },
      method: t,
      body: JSON.stringify(e),
    });
  if (l.ok) {
    const r = document.querySelector('#biddingForm');
    r.classList.add('fade-in'), (r.innerHTML = '');
    const p = document.createElement('p'),
      L = 'Bid successfully submitted';
    p.append(L);
    const g = document.createElement('img');
    g.setAttribute('src', '/assets/success_icon.png'),
      g.classList.add('success_icon-small', 'text-center', 'mx-auto'),
      r.appendChild(p),
      r.appendChild(g),
      setTimeout(function () {
        document.location.reload();
      }, 2500);
  } else {
    console.log('An error has occured'), console.log(l.status);
    const r = document.querySelector('#biddingForm');
    r.classList.add('fade-in', 'pb-3'),
      (r.innerHTML = C('Your bid might be too low. Please try again.')),
      setTimeout(function () {
        location.reload();
      }, 3e3);
  }
  return await l.json();
}
async function ze() {
  const e = document.querySelector('#updateItemForm'),
    c = new URL(location.href).searchParams.get('id');
  if (e) {
    const a = e.querySelector('#updateButton');
    a.disabled = !0;
    const n = await Ce();
    (e.title.value = n.title),
      (e.description.value = n.description),
      (e.tags.value = n.tags),
      (e.media.value = n.media),
      (a.disabled = !1),
      e.addEventListener('submit', (s) => {
        s.preventDefault();
        let o = e.tags.value.split(',', '8'),
          d = e.media.value.split(',', '8');
        const l = e.title.value,
          r = e.description.value,
          p = o,
          L = d;
        if (d[0] === '') {
          const g = { title: l, description: r, tags: p };
          (g.id = c), ye(g);
        } else ye({ title: l, description: r, tags: p, media: L });
      });
  }
}
const Ve = '/auth/register',
  Ye = 'POST',
  N = document.querySelector('#formContainer'),
  _ = document.querySelector('#formRegister');
async function Je(e) {
  const t = E + Ve,
    c = JSON.stringify(e),
    a = await fetch(t, {
      headers: { 'Content-Type': 'application/json' },
      method: Ye,
      body: c,
    }),
    n = a.status;
  if (n === 201) {
    (_.style.display = 'none'), _.classList.remove('d-flex');
    const s = document.createElement('p'),
      o = document.createTextNode(
        'Congratulations! You have successfully created a user profile. You will be redirected to the login page shortly.'
      );
    s.appendChild(o),
      N.appendChild(s),
      N.classList.add('text-center', 'mw-600', 'mx-auto', 'pt-3', 'fade-in');
    const d = document.createElement('img');
    d.setAttribute('src', '/assets/success_icon.png'),
      d.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3'),
      N.appendChild(d),
      setTimeout(function () {
        window.location.href = '/html/login';
      }, 5e3);
  } else
    n === 400
      ? (console.log('An error has occured'),
        (_.style.display = 'none'),
        _.classList.remove('d-flex'),
        N.classList.add('fade-in'),
        (N.innerHTML = C(
          'A user with the same email address and/or username is already registered. Please try again with different credentials. Refresh the page to start over.'
        )))
      : (console.log('An error has occured'),
        console.log(a.status),
        (_.style.display = 'none'),
        _.classList.remove('d-flex'),
        N.classList.add('fade-in'),
        (N.innerHTML = C(
          'An error has occured. Please try again after a few minutes by refreshing the page.'
        )));
  return a.json();
}
function Ke() {
  const e = document.querySelector('#formRegister');
  e &&
    e.addEventListener('submit', (t) => {
      t.preventDefault();
      const c = e.name.value,
        a = e.email.value,
        n = e.password.value,
        s = e.avatar.value;
      Je({ name: c, email: a, password: n, avatar: s });
    });
}
const We = '/auth/login',
  Qe = 'POST',
  V = document.querySelector('#formContainer'),
  Y = document.querySelector('#formLogin');
async function Xe(e) {
  const t = E + We,
    c = JSON.stringify(e),
    a = await fetch(t, {
      headers: { 'Content-Type': 'application/json' },
      method: Qe,
      body: c,
    }),
    n = a.status;
  console.log(n),
    n === 200 || n === 201 || n === 202 || n === 203 || n === 204
      ? setTimeout(function () {
          window.location.href = '/';
        }, 500)
      : n === 401
      ? (console.log('An error has occured'),
        console.log(a.status),
        (Y.style.display = 'none'),
        Y.classList.remove('d-flex'),
        V.classList.add('fade-in'),
        (V.innerHTML = C(
          "The E-mail address and/or password doesn't match any account. Please try again or sign up for an account"
        )))
      : (console.log('An error has occured'),
        console.log(a.status),
        (Y.style.display = 'none'),
        Y.classList.remove('d-flex'),
        V.classList.add('fade-in'),
        (V.innerHTML = C(
          'An error has occured. Please refresh the page and try again.'
        )));
  const s = a.json();
  s.then((o) => {
    const d = o.accessToken;
    localStorage.setItem('accessToken', d);
  }),
    s.then((o) => {
      const d = o.name;
      localStorage.setItem('name', d);
    }),
    s.then((o) => {
      const d = o.email;
      localStorage.setItem('email', d);
    }),
    s.then((o) => {
      const d = o.avatar;
      localStorage.setItem('avatar', d);
    }),
    s.then((o) => {
      const d = o.credits;
      localStorage.setItem('credits', d);
    });
}
function Ze() {
  const e = document.querySelector('#formLogin');
  e &&
    e.addEventListener('submit', (t) => {
      t.preventDefault();
      const c = e.email.value,
        a = e.password.value;
      Xe({ email: c, password: a });
    });
}
async function et() {
  document.querySelector('#deleteButton').addEventListener('click', () => {
    tt();
  });
}
async function tt() {
  const t = new URL(location.href).searchParams.get('id'),
    c = await Le(t);
  Le(c);
}
function nt(e) {
  const t = document.createElement('a'),
    c = e.id;
  (t.href = '/html/item-specific/?id=' + c),
    t.classList.add(
      'item',
      'text-decoration-none',
      'row',
      'w-100',
      'mw-290',
      'h-600',
      'mx-auto',
      'my-4',
      'border',
      'border-2',
      'rounded-3',
      'p-3'
    );
  const a = document.createElement('p');
  a.classList.add('createdDate', 'col');
  const n = document.createTextNode(new Date(e.created).toGMTString());
  a.appendChild(n), t.appendChild(a);
  const s = document.createElement('img');
  s.classList.add('text-center', 'cardImg'),
    e.media[0] === void 0
      ? ((s.src = '/assets/image_placeholder.png'),
        (s.alt = 'image placeholder'),
        t.append(s))
      : ((s.src = e.media[0]),
        (s.alt = `Image from ${e.title}`),
        (s.onerror = function () {
          s.src = '/assets/image_placeholder.png';
        }),
        t.append(s));
  const o = document.createElement('h2');
  o.classList.add('col', 'd-flex', 'itemHeading', 'mt-4');
  const d = document.createTextNode(e.title);
  if ((o.appendChild(d), t.appendChild(o), e.description)) {
    const h = document.createElement('div');
    h.classList.add('overflow-hidden', 'my-2', 'descriptionSmall');
    const b = document.createTextNode(e.description);
    h.appendChild(b), t.appendChild(h);
  } else {
    const h = document.createElement('div');
    h.classList.add(
      'overflow-hidden',
      'my-2',
      'descriptionSmall',
      'fst-italic'
    );
    const b = document.createTextNode('No description provided..');
    h.appendChild(b), t.appendChild(h);
  }
  const l = document.createElement('p');
  l.classList.add('endsAtHeader', 'd-flex', 'col-8');
  const r = document.createTextNode('Ending at:');
  l.appendChild(r), t.appendChild(l);
  const p = document.createElement('p');
  p.classList.add('endingDate', 'col-8');
  const L = document.createTextNode(`${new Date(e.endsAt).toGMTString()}`);
  p.appendChild(L), t.appendChild(p);
  const g = document.createElement('p');
  if ((g.classList.add('col', 'bidsAmount', 'text-end'), e._count.bids === 1)) {
    const h = document.createTextNode(`${e._count.bids} bid`);
    g.appendChild(h), t.appendChild(g);
  } else {
    const h = document.createTextNode(`${e._count.bids} bids`);
    g.appendChild(h), t.appendChild(g);
  }
  const v = document.createElement('a');
  v.classList.add('btn', 'btn-primary', 'btn-outline-success', 'viewBtn');
  const U = e.id;
  v.href = '/html/item-specific/?id=' + U;
  const A = document.createElement('p');
  return (A.innerText = 'View Item'), v.appendChild(A), t.appendChild(v), t;
}
function st(e) {
  const t = document.createElement('div');
  t.setAttribute('id', 'specificItemsRendered'),
    t.classList.add(
      'px-lg-0',
      'row',
      'g-0',
      'overflow-hidden',
      'py-5',
      'pt-4',
      'mx-3',
      'mx-sm-5'
    );
  const c = document.createElement('div');
  c.classList.add(
    'col-12',
    'col-lg-5',
    'ms-lg-4',
    'mx-auto',
    'contentContainer'
  );
  const a = document.createElement('div');
  a.classList.add('row', 'g-0'), c.appendChild(a);
  const n = document.createElement('div');
  n.classList.add(
    'col-12',
    'col-lg-6',
    'mt-3',
    'ms-lg-5',
    'ps-lg-4',
    'mx-auto',
    'contentContainer'
  );
  const s = document.createElement('div');
  s.classList.add('row', 'g-0'), n.appendChild(s);
  const o = document.createElement('div');
  o.classList.add(
    'col-12',
    'col-lg-12',
    'ms-lg-4',
    'contentContainer',
    'mx-auto'
  );
  const d = document.createElement('div');
  d.classList.add('row', 'g-0'), o.appendChild(d);
  const l = document.createElement('img');
  if ((l.classList.add('text-center', 'cardImg'), e.media[0] === void 0))
    (l.src = '/assets/image_placeholder.png'),
      (l.alt = 'image placeholder'),
      l.classList.add('galleryImages', 'mx-auto'),
      a.append(l);
  else {
    const i = document.createElement('div');
    i.setAttribute('id', 'imageGallery'),
      i.setAttribute('data-bs-ride', 'carousel'),
      i.setAttribute('data-carousel', ''),
      i.classList.add(
        'carousel',
        'slide',
        'rounded-4',
        'col-12',
        'mx-auto',
        'mx-lg-0'
      );
    const u = document.createElement('div');
    u.classList.add('carousel-inner'), i.appendChild(u);
    const S = document.createElement('div');
    S.classList.add('carousel-item', 'active');
    const f = document.createElement('img');
    f.classList.add('galleryImages'),
      (f.src = e.media[0]),
      f.classList.add('d-block', 'w-100', 'rounded-4'),
      S.appendChild(f),
      u.appendChild(S),
      (f.onerror = function () {
        (f.src = '/assets/image_placeholder.png'),
          f.classList.add('galleryImages', 'placeholderImg');
      });
    for (let w = 1; w < e.media.length; w++) {
      const D = document.createElement('div');
      D.classList.add('carousel-item');
      const y = document.createElement('img');
      y.classList.add('galleryImages', 'rounded-4'),
        (y.src = e.media[w]),
        (y.alt = `Image from ${e.title}`),
        (y.onerror = function () {
          (y.src = '/assets/image_placeholder.png'),
            y.classList.add('galleryImages', 'placeholderImg');
        }),
        y.classList.add('d-block', 'w-100'),
        D.appendChild(y),
        u.appendChild(D);
    }
    const m = document.createElement('button');
    m.classList.add('carousel-control-prev'),
      m.setAttribute('type', 'button'),
      m.setAttribute('data-bs-target', '#imageGallery'),
      m.setAttribute('data-bs-slide', 'prev');
    const O = document.createElement('span');
    O.classList.add('carousel-control-prev-icon'),
      O.setAttribute('aria-hidden', 'true');
    const x = document.createElement('span');
    x.classList.add('visually-hidden'),
      (x.innerText = 'Previous'),
      m.appendChild(O),
      m.appendChild(x);
    const T = document.createElement('button');
    T.classList.add('carousel-control-next'),
      T.setAttribute('type', 'button'),
      T.setAttribute('data-bs-target', '#imageGallery'),
      T.setAttribute('data-bs-slide', 'next');
    const F = document.createElement('span');
    F.classList.add('carousel-control-next-icon'),
      F.setAttribute('aria-hidden', 'true');
    const $ = document.createElement('span');
    $.classList.add('visually-hidden'),
      ($.innerText = 'Next'),
      T.appendChild(F),
      T.appendChild($),
      i.appendChild(m),
      i.appendChild(T),
      a.append(i);
  }
  const r = document.createElement('div');
  if (
    (r.classList.add('col-12', 'pt-2', 'py-lg-3', 'd-inline', 'tags'),
    e.tags.length === 0)
  ) {
    const i = document.createElement('p');
    (i.innerText = 'No tags..'),
      i.classList.add('fst-italic', 'my-0', 'my-lg-2'),
      r.appendChild(i),
      a.appendChild(r);
  } else {
    const i = document.createElement('p');
    i.classList.add('d-inline');
    const u = e.tags[0];
    i.append(u), r.appendChild(i);
    for (let S = 1; S < e.tags.length; S++) {
      const f = document.createElement('p');
      f.classList.add('d-inline');
      const m = `, ${e.tags[S]}`;
      f.append(m), r.appendChild(f);
    }
    a.appendChild(r);
  }
  const p = localStorage.getItem('name');
  if (e.seller.name === p) {
    const i = e.id,
      u = document.createElement('a');
    u.classList.add(
      'btn',
      'btn-info',
      'btn-outline-info',
      'mb-5',
      'mt-2',
      'updateListingButton'
    ),
      (u.href = '/html/list-item/update/?id=' + i),
      (u.innerText = 'Update listing'),
      a.appendChild(u);
  }
  t.appendChild(c);
  const L = document.createElement('p');
  L.setAttribute('id', 'sellerName'), L.classList.add('col-12', 'col-lg-12');
  const g = `Listed by ${e.seller.name}`;
  L.append(g), s.appendChild(L);
  const v = document.createElement('h1');
  v.classList.add('col-12', 'col-lg-12', 'mt-2', 'me-lg-3');
  const U = document.createTextNode(e.title);
  v.appendChild(U), s.appendChild(v);
  const A = document.querySelector('#listingHeadTitle');
  A.innerHTML = '';
  const h = e.title;
  A.append(h);
  const b = document.createElement('div');
  b.classList.add('col-12', 'col-lg-12');
  const B = document.createElement('div');
  B.classList.add('d-flex');
  const J = document.createElement('p');
  J.classList.add('mb-1');
  const ve = 'Created:';
  J.append(ve);
  const K = document.createElement('p');
  K.classList.add('itemSpecificDates', 'ps-2', 'col', 'd-inline', 'mb-0');
  const Te = document.createTextNode(new Date(e.created).toGMTString());
  K.appendChild(Te), B.appendChild(J), B.appendChild(K), b.appendChild(B);
  const G = document.createElement('div');
  G.classList.add('d-flex');
  const me = document.createElement('p'),
    xe = 'Updated:';
  me.append(xe);
  const W = document.createElement('p');
  W.classList.add('itemSpecificDates', 'ps-2', 'col', 'mb-5');
  const Ee = document.createTextNode(new Date(e.updated).toGMTString());
  W.appendChild(Ee), G.appendChild(me), G.appendChild(W), b.appendChild(G);
  const Q = document.createElement('p');
  Q.classList.add('mb-1');
  const Ae = 'Ending at:';
  Q.append(Ae);
  const X = document.createElement('p');
  X.classList.add('endsAtDate', 'col', 'fw-bold', 'mb-5');
  const Se = document.createTextNode(new Date(e.endsAt).toGMTString());
  X.appendChild(Se), b.appendChild(Q), b.appendChild(X), s.appendChild(b);
  const pe = e.bids.reverse(),
    j = document.createElement('div');
  j.classList.add(
    'col-12',
    'col-lg-12',
    'row',
    'align-items-center',
    'px-0',
    'pb-3'
  );
  const Z = document.createElement('h2');
  Z.classList.add('col-4');
  const we = 'Highest bid:';
  Z.append(we);
  const z = document.createElement('p');
  if (
    (z.classList.add('col-8', 'highestBidAmount', 'text-center', 'rounded-3'),
    j.appendChild(Z),
    j.appendChild(z),
    e.bids.length === 0)
  ) {
    const i = '0';
    z.append(i), s.appendChild(j);
  } else {
    const i = pe[0].amount;
    z.append(i), s.appendChild(j);
  }
  const q = document.createElement('div');
  e.seller.name === p
    ? q.classList.add('d-none')
    : q.classList.add('col-12', 'col-lg-12', 'text-lg-start', 'pt-3', 'pb-5');
  const P = document.createElement('button');
  P.classList.add(
    'btn',
    'btn-success',
    'btn-outline-success',
    'bid-button',
    'py-2'
  ),
    P.setAttribute('type', 'button'),
    P.setAttribute('data-bs-toggle', 'modal'),
    P.setAttribute('data-bs-target', '#bidModal');
  const Ie = 'Make a bid';
  P.append(Ie);
  const ee = e.endsAt;
  let te = ee;
  te = te.split('-')[0];
  let ne = ee;
  ne = ne.split('-')[1];
  let se = ee;
  se = se.split('T')[0];
  let $e = se.substring(8);
  const Ne = te + ne + $e;
  let ke = parseInt(Ne);
  const oe = new Date();
  let Be = oe.getDate(),
    qe = oe.getMonth() + 1,
    Pe = `${oe.getFullYear()}${qe}${Be}`;
  const Me = parseInt(Pe);
  if (ke <= Me) {
    q.classList.add('d-none');
    const i = document.createElement('p');
    i.classList.add('fst-italic', 'mb-4');
    const u = 'Listing has expired...';
    i.append(u), s.appendChild(i);
  }
  if (localStorage.getItem('name') === null) {
    q.classList.add('d-none');
    const i = document.createElement('p');
    i.classList.add('mb-5', 'col-lg-12');
    const u =
      'In order to bid on listed items you must be logged in. Please log in, or register for a new account.';
    i.append(u), s.appendChild(i);
  }
  q.appendChild(P), s.appendChild(q);
  const R = document.createElement('div');
  R.classList.add('col-12', 'col-lg-12', 'pb-4');
  const ge = document.createElement('h2');
  (ge.innerText = 'Description:'), R.appendChild(ge);
  const M = document.createElement('p');
  if ((M.classList.add('pt-2', 'me-lg-3'), e.description)) {
    const i = e.description;
    M.append(i), R.appendChild(M);
  } else {
    const i = 'No description provided..';
    M.append(i), M.classList.add('fst-italic'), R.appendChild(M);
  }
  if ((s.appendChild(R), t.appendChild(n), e.bids.length === 0)) {
    const i = document.createElement('p');
    i.classList.add('fst-italic');
    const u = 'No current bids ...';
    i.append(u), d.appendChild(i);
  } else {
    const i = document.createElement('div');
    i.classList.add('col-12', 'col-lg-5', 'row');
    const u = document.createElement('h2');
    u.classList.add('py-3', 'col');
    const S = 'Bids made:';
    u.append(S), i.appendChild(u);
    const f = document.createElement('p');
    if (
      (f.classList.add(
        'col',
        'bidsAmount',
        'bidsAmountSpecific',
        'py-3',
        'mb-0',
        'text-end'
      ),
      e._count.bids === 1)
    ) {
      const m = document.createTextNode(`${e._count.bids} bid`);
      f.appendChild(m), i.appendChild(f);
    } else {
      const m = document.createTextNode(`${e._count.bids} bids`);
      f.appendChild(m), i.appendChild(f);
    }
    if ((d.appendChild(i), e.bids)) {
      for (let m = 0; m < pe.length; m++) {
        const O = document.createElement('div'),
          x = document.createElement('div');
        x.classList.add(
          'py-3',
          'col',
          'col-lg-5',
          'border',
          'border-primary',
          'rounded-2',
          'my-3'
        );
        const T = document.createElement('p');
        T.classList.add('createdDate', 'px-3', 'ps-lg-4', 'mb-2');
        const F = document.createTextNode(
          new Date(e.bids[m].created).toGMTString()
        );
        T.append(F), x.appendChild(T);
        const $ = document.createElement('div');
        $.classList.add('row');
        const w = document.createElement('p'),
          D = e.bids[m].bidderName;
        w.append(D),
          w.classList.add('col-8', 'col-lg-8', 'ms-3', 'ms-lg-4', 'mb-1'),
          x.append(w);
        const y = document.createElement('p');
        y.classList.add('col-3', 'col-lg-3', 'text-center', 'mb-1');
        const fe = e.bids[m].amount;
        y.append(fe),
          x.appendChild(y),
          $.appendChild(w),
          $.appendChild(y),
          x.appendChild($),
          O.appendChild(x),
          d.appendChild(O);
      }
      o.appendChild(d);
    }
  }
  return t.appendChild(o), t;
}
function ot(e, t) {
  t.append(st(e));
}
function ue(e, t) {
  t.append(...e.map(nt));
}
function at(e) {
  const t = document.createElement('div');
  t.classList.add('mw-1000', 'mx-auto');
  const c = document.querySelector('#upperDiv');
  c.classList.add('d-flex', 'justify-content-between');
  const a = document.createElement('h1');
  a.setAttribute('id', 'profileHeader'),
    a.classList.add('mt-3', 'mb-4', 'mb-lg-5', 'ms-4', 'text-start', 'col-7');
  const s = `Welcome, ${document.createTextNode(e.name).nodeValue}!`;
  a.append(s), c.appendChild(a), t.appendChild(c);
  const o = document.createElement('div');
  o.classList.add(
    'py-5',
    'mw-800',
    'mx-auto',
    'border',
    'border-2',
    'rounded-3'
  ),
    o.setAttribute('id', 'profileInfoContainer');
  const d = document.createElement('img');
  d.classList.add('rounded-3', 'avatar');
  const l = document.createTextNode(e.avatar);
  if (
    typeof l.nodeValue == 'string' &&
    l.nodeValue.includes('.jpg', '.jpeg', '.png', '.webP', '.svg', '.gif')
  )
    (d.src = l.nodeValue), o.appendChild(d), t.appendChild(o);
  else if (
    typeof l.nodeValue == 'string' &&
    !l.nodeValue.includes('.jpg', '.jpeg', '.png', '.webP', '.svg', '.gif')
  ) {
    const b = '.jpg',
      B = `${l.nodeValue}${b}`;
    (d.src = B), o.appendChild(d), t.appendChild(o);
  } else
    (d.src = '/assets/avatar-stock.png'), o.appendChild(d), t.appendChild(o);
  const r = document.createElement('a');
  r.classList.add('editAvatarLink', 'd-block', 'pt-2', 'mx-auto'),
    (r.href = '/html/profile/update/');
  const p = document.createTextNode('Edit avatar');
  r.append(p), o.appendChild(r), t.appendChild(o);
  const L = document.createElement('p');
  L.classList.add('my-4');
  const g = document.createTextNode(e.email);
  L.append(g), o.appendChild(L), t.appendChild(o);
  const v = document.createElement('p'),
    U = document.createTextNode('Credits:');
  v.append(U), o.appendChild(v), t.appendChild(o);
  const A = document.createElement('p');
  A.classList.add('creditsDisplayed', 'p-2', 'mx-auto', 'rounded-3');
  const h = document.createTextNode(e.credits);
  return A.append(h), o.appendChild(A), t.appendChild(o), t;
}
function ct(e, t) {
  t.append(at(e));
}
const be = document.querySelector('#topButton'),
  dt = '/listings';
async function it() {
  const e = document.querySelector('#listingsContainer'),
    t = `${E}${dt}`;
  try {
    const c = await le(t);
    (e.innerHTML = ''), ue(c, e), (be.style.display = 'block');
  } catch {
    console.log('An error has occured'),
      (e.innerHTML = C('An error has occured')),
      e.classList.add('text-center');
  }
}
async function rt() {
  const e = document.querySelector('#pageContainerItemSpecific'),
    t = document.querySelector('#itemContainer');
  try {
    const c = await Ce();
    (t.innerHTML = ''), ot(c, t), (be.style.display = 'block');
  } catch {
    console.log('An error has occured'),
      (e.innerHTML = ''),
      (e.innerHTML = C('An error has occured')),
      e.classList.add('text-center');
  }
}
const lt = document.querySelector('#filterNewestButton'),
  ut = document.querySelector('#filterOldestButton');
async function mt() {
  const e = document.querySelector('#filterNewestButton'),
    t = document.querySelector('#filterOldestButton'),
    c = Oe;
  try {
    const a = await le(c),
      n = document.querySelector('#listingsContainer');
    (n.innerHTML = ''),
      ue(a, n),
      e.classList.add('btn-warning', 'btn-outline-warning'),
      e.classList.remove('btn-info', 'btn-outline-info'),
      t.classList.add('btn-info', 'btn-outline-info'),
      t.classList.remove('btn-success', 'btn-outline-success');
  } catch {
    console.log('An error has occured');
  }
}
async function pt() {
  lt.addEventListener('click', mt);
}
async function gt() {
  const e = document.querySelector('#filterOldestButton'),
    t = document.querySelector('#filterNewestButton'),
    c = _e;
  try {
    const a = await le(c),
      n = document.querySelector('#listingsContainer');
    (n.innerHTML = ''),
      ue(a, n),
      e.classList.add('btn-warning', 'btn-outline-warning'),
      e.classList.remove('btn-info', 'btn-outline-info'),
      t.classList.add('btn-info', 'btn-outline-info'),
      t.classList.remove('btn-success', 'btn-outline-success');
  } catch {
    console.log('An error has occured');
  }
}
async function ft() {
  ut.addEventListener('click', gt);
}
const ce = document.querySelector('#searchField');
async function ht() {
  const e = ce.value.toLowerCase();
  document.querySelectorAll('.item').forEach((c) => {
    c.textContent.toLocaleLowerCase().includes(e.toLowerCase())
      ? (c.style.display = '')
      : (c.style.display = 'none');
  });
}
ce && ce.addEventListener('keyup', ht);
async function Lt(e) {
  const t = localStorage.getItem('accessToken');
  return await (
    await fetch(e, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${t}`,
      },
    })
  ).json();
}
const yt = '/profiles/',
  Ct = '/media',
  bt = 'PUT',
  vt = localStorage.getItem('name'),
  k = document.querySelector('#avatarFormContainer'),
  H = document.querySelector('#formUpdateAvatar');
async function Tt(e) {
  const t = E + yt + vt + Ct,
    c = JSON.stringify(e),
    a = localStorage.getItem('accessToken'),
    n = await fetch(t, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${a}`,
      },
      method: bt,
      body: c,
    }),
    s = n.status;
  if (s === 200 || s === 201 || s === 204) {
    (H.style.display = 'none'), H.classList.remove('d-flex');
    const o = document.createElement('p'),
      d = document.createTextNode('Success!');
    o.appendChild(d),
      k.appendChild(o),
      k.classList.add('text-center', 'mw-600', 'mx-auto', 'pt-3', 'fade-in');
    const l = document.createElement('img');
    l.setAttribute('src', '/assets/success_icon.png'),
      l.classList.add('success_icon', 'text-center', 'mx-auto', 'pt-3'),
      k.appendChild(l),
      setTimeout(function () {
        window.location.href = '/html/profile/details';
      }, 2e3);
  } else
    s === 400
      ? (console.log('An error has occured'),
        console.log(n.status),
        (H.style.display = 'none'),
        H.classList.remove('d-flex'),
        k.classList.add('fade-in'),
        (k.innerHTML = C(
          'Your chosen image cannot be accessed publicly. Please choose a different image from a different source.'
        )))
      : (console.log('An error has occured'),
        console.log(n.status),
        (H.style.display = 'none'),
        H.classList.remove('d-flex'),
        k.classList.add('fade-in'),
        (k.innerHTML = C(
          'An error has occured. Please refresh the page and try again.'
        )));
  return n.json();
}
const xt = '/profiles/',
  ae = document.querySelector('#profileContainer');
async function Et() {
  const e = localStorage.getItem('name'),
    t = `${E}${xt}${e}?_listings=true`;
  try {
    const c = await Lt(t);
    (ae.innerHTML = ''), ct(c, ae);
  } catch {
    console.log('An error has occured'),
      (ae.innerHTML = C('An error has occured'));
  }
}
function At() {
  const e = document.querySelector('#formUpdateAvatar');
  e &&
    e.addEventListener('submit', (t) => {
      t.preventDefault();
      const a = { avatar: e.avatar.value };
      Tt(a);
    });
}
async function St() {
  const e = document.querySelector('#biddingForm'),
    t = document.querySelector('#bidButton');
  e &&
    t.addEventListener('click', (c) => {
      c.preventDefault();
      const a = e.amount.value,
        s = { amount: parseInt(a) };
      Ge(s);
    });
}
const wt = document.querySelector('#topButton');
window.onscroll = function () {
  wt.addEventListener('click', () => {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
  });
};
async function It() {
  document.querySelector('#logOutButton').addEventListener('click', () => {
    localStorage.removeItem('accessToken'),
      localStorage.removeItem('name'),
      localStorage.removeItem('email'),
      localStorage.removeItem('avatar'),
      localStorage.removeItem('credits'),
      (window.location.href = '/');
  });
}
function $t() {
  const e = document.querySelector('#avatarContainer'),
    t = document.querySelector('#avatarLink'),
    c = document.querySelector('#listItemLinkContainer'),
    a = document.querySelector('#viewProfileLinkContainer'),
    n = document.querySelector('#signedInAsContainer'),
    s = document.querySelector('#loginLinkContainer'),
    o = document.querySelector('#registerLinkContainer'),
    d = document.createElement('img');
  d.classList.add('profile_image-small', 'rounded-2'),
    (d.src = '/assets/avatar-stock.png'),
    t.append(d);
  const l = localStorage.getItem('name'),
    r = document.createElement('p');
  r.classList.add('signedInAsText'),
    r.append(`Signed in as: ${l}`),
    n.append(r),
    localStorage.getItem('name') === null
      ? (s.classList.remove('d-none'),
        s.classList.add('d-block'),
        o.classList.remove('d-none'),
        o.classList.add('d-block'),
        n.classList.add('d-none'),
        a.classList.remove('d-block'),
        a.classList.add('d-none'),
        c.classList.add('d-none'),
        e.classList.remove('d-lg-inline'),
        e.classList.add('d-none'),
        n.classList.remove('d-block'),
        n.classList.add('d-none'))
      : (n.classList.remove('d-none'),
        n.classList.add('d-block'),
        s.classList.remove('d-block'),
        s.classList.add('d-none'),
        o.classList.remove('d-block'),
        o.classList.add('d-none'),
        c.classList.remove('d-none'),
        c.classList.add('d-block'),
        e.classList.remove('d-lg-none'),
        e.classList.add('d-lg-inline'),
        a.classList.remove('d-none'),
        a.classList.add('d-block'));
}
const I = location.pathname;
I === '/index.html' || I === '/'
  ? (it(), pt(), ft())
  : I === '/html/item-specific/'
  ? (St(), rt())
  : I === '/html/register/'
  ? Ke()
  : I === '/html/login/'
  ? Ze()
  : I === '/html/profile/details/'
  ? (Et(), It())
  : I === '/html/profile/update/'
  ? At()
  : I === '/html/list-item/create/'
  ? He()
  : I === '/html/list-item/update/' && (ze(), et());
$t();
