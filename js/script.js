const players = [
    { name: "Vinícius Júnior", position: "Atacante", img: "https://picsum.photos/id/64/400/340", desc: "Explosão de velocidade e drible. O novo rei do Real Madrid." },
    { name: "Neymar Jr", position: "Atacante", img: "https://picsum.photos/id/1005/400/340", desc: "O mago do drible. Criatividade e talento sem limites." },
    { name: "Rodrygo", position: "Atacante", img: "https://picsum.photos/id/201/400/340", desc: "Jovem craque com faro de gol e versatilidade." },
    { name: "Alisson Becker", position: "Goleiro", img: "https://picsum.photos/id/237/400/340", desc: "Muralha brasileira. Reflexos e segurança impressionantes." }
];

function createPlayers() {
    const grid = document.getElementById('players-grid');
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="\( {player.img}" alt=" \){player.name}">
            <div class="player-info">
                <h3>${player.name}</h3>
                <p>${player.position}</p>
            </div>
        `;
        card.onclick = () => showModal(player);
        grid.appendChild(card);
    });
}

function showModal(player) {
    document.getElementById('modal-img').src = player.img;
    document.getElementById('modal-name').textContent = player.name;
    document.getElementById('modal-desc').textContent = player.desc;
    document.getElementById('modal').style.display = 'flex';
}

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', createPlayers);
