function showDetails(productName) {
    const modal = document.getElementById('product-modal');
    const title = document.getElementById('product-title');
    const description = document.getElementById('product-description');

    let details = {
        "Color Fishes": "We have a variety of colorful fish that will make your aquarium look stunning.",
        "Fish Foods": "High-quality fish food that ensures a healthy and long life for your fish.",
        "Fish Tanks": "Durable and beautiful tanks in different sizes to match your needs."
    };

    title.innerText = productName;
    description.innerText = details[productName];

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('product-modal').style.display = "none";
}