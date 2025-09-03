// =================== MENU HAMBÚRGUER ===================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Fechar o menu ao clicar em um link (mobile)
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

// =================== VALIDAÇÃO FORMULÁRIO ===================
const form = document.getElementById("formContato");
const msgStatus = document.getElementById("msgStatus");

if (form && msgStatus) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      msgStatus.textContent = "⚠️ Todos os campos são obrigatórios.";
      msgStatus.style.color = "red";
      return;
    }

    // validação simples de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      msgStatus.textContent = "⚠️ Informe um e-mail válido.";
      msgStatus.style.color = "red";
      return;
    }

    msgStatus.textContent = "✅ Mensagem enviada com sucesso!";
    msgStatus.style.color = "green";
    form.reset();
  });
}

// =================== MODAL/LIGHTBOX PROJETOS ===================
const modal = document.createElement("div");
modal.id = "modal";
modal.style.cssText = `
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

modal.innerHTML = `
  <div id="modal-content" style="background:#fff; color:#000; padding:20px; border-radius:12px; max-width:500px; position:relative;">
    <span id="modal-close" style="position:absolute; top:10px; right:15px; font-size:22px; cursor:pointer;">&times;</span>
    <h2 id="modal-title"></h2>
    <p id="modal-text"></p>
  </div>
`;

document.body.appendChild(modal);

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const link = card.querySelector("a");
  if (!link) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const title = card.querySelector("h3")?.textContent || "";
    const text = card.querySelector("p")?.textContent || "";
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-text").textContent = text;
    modal.style.display = "flex";
  });
});

const modalClose = document.getElementById("modal-close");
if (modalClose) {
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// =================== BOTÃO VOLTAR AO TOPO ===================
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}