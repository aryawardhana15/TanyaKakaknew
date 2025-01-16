// Simpan keranjang sebagai array
let cart = [];

// Ambil elemen produk dan tombol
const productElements = document.querySelectorAll(".product");
const cartElement = document.getElementById("cart");

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  // Kosongkan elemen keranjang
  cartElement.innerHTML = "";

  if (cart.length === 0) {
    cartElement.innerHTML = "<p>Keranjang kosong</p>";
    return;
  }

  // Tampilkan isi keranjang
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.textContent = `${item.name} - Rp${item.price} x ${item.quantity}`;
    cartElement.appendChild(cartItem);
  });
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(product) {
  // Cari produk di keranjang
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // Jika sudah ada, tambahkan jumlahnya
    existingProduct.quantity += 1;
  } else {
    // Jika belum ada, tambahkan produk baru
    cart.push({ ...product, quantity: 1 });
  }

  // Perbarui tampilan keranjang
  updateCart();
}

// Tambahkan event listener ke setiap tombol
productElements.forEach((productElement) => {
  const button = productElement.querySelector(".add-to-cart");

  button.addEventListener("click", () => {
    // Ambil data produk dari atribut data
    const product = {
      id: productElement.getAttribute("data-id"),
      name: productElement.getAttribute("data-name"),
      price: productElement.getAttribute("data-price"),
    };

    // Tambahkan produk ke keranjang
    addToCart(product);
  });
});
