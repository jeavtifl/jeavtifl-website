const products=[
 {name:'SHIFT 01',desc:'轻量防滑厨房鞋',price:'¥699',type:'light',tag:'畅销款',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',bg:'orange-bg'},
 {name:'CORE 02',desc:'全天缓震工作鞋',price:'¥759',type:'light',tag:'新品',image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85',bg:'cream-bg'},
 {name:'FORCE 03',desc:'强力抓地专业鞋',price:'¥829',type:'pro',tag:'专业款',image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85',bg:'dark-bg'},
 {name:'FLOW 04',desc:'易穿脱厨房鞋',price:'¥639',type:'slipon',tag:'一脚蹬',image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=85',bg:'cream-bg'},
 {name:'GUARD 05',desc:'强化鞋头专业鞋',price:'¥899',type:'pro',tag:'限定色',image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85',bg:'orange-bg'},
 {name:'EASY 06',desc:'耐油易洁一脚蹬',price:'¥659',type:'slipon',tag:'经典款',image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=85',bg:'dark-bg'}
];
const catalog=document.querySelector('#catalog');
function renderProducts(filter='all'){
 if(!catalog)return;const list=filter==='all'?products:products.filter(p=>p.type===filter);
 catalog.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image ${p.bg}"><span class="tag">${p.tag}</span><img src="${p.image}" alt="JEAVTIFL ${p.name} ${p.desc}"></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.desc}</p></div><strong>${p.price}</strong></div><button class="add-cart" data-product="${p.name}" aria-label="添加 ${p.name} 到购物袋">＋</button></article>`).join('');
}
renderProducts();
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filters .active')?.classList.remove('active');btn.classList.add('active');renderProducts(btn.dataset.filter)}));
let count=Number(localStorage.getItem('jeavtifl-cart')||0);const updateCount=()=>document.querySelectorAll('.cart-count').forEach(el=>el.textContent=count);updateCount();
document.addEventListener('click',e=>{const add=e.target.closest('.add-cart');if(add){count++;localStorage.setItem('jeavtifl-cart',count);updateCount();showToast(`${add.dataset.product} 已加入购物袋`)}const faq=e.target.closest('.accordion button');if(faq)faq.parentElement.classList.toggle('open')});
const toast=document.querySelector('.toast');function showToast(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.site-header').classList.toggle('menu-open'));
document.querySelector('.announcement button')?.addEventListener('click',e=>e.currentTarget.parentElement.remove());
const panel=document.querySelector('.search-panel');document.querySelector('.search-toggle')?.addEventListener('click',()=>panel.classList.add('open'));document.querySelector('.search-close')?.addEventListener('click',()=>panel.classList.remove('open'));
document.querySelector('.newsletter-form')?.addEventListener('submit',e=>{e.preventDefault();showToast('订阅成功，欢迎加入 JEAVTIFL！');e.target.reset()});
document.querySelector('.contact-form')?.addEventListener('submit',e=>{e.preventDefault();showToast('留言已发送，我们会尽快回复。');e.target.reset()});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
