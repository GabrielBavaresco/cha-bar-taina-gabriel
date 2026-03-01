function reservar(nomeItem) {
    const seuTelefone = "5516992635381"; 
    
    const mensagem = `Olá Taina e Gabriel! Gostaria de reservar o item: *${nomeItem}* da lista de vocês!`;
    const linkZap = `https://wa.me/${seuTelefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkZap, '_blank');
}

function confirmar(confirmar) {
    const seuTelefone = "5538999894082"; 
    
    const mensagem = `Olá Taina e Gabriel! Gostaria de confirmar minha presença!`;
    const linkZap = `https://wa.me/${seuTelefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkZap, '_blank');
}