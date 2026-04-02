import React, { useState, useEffect } from "react";

export default function ProductPage() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: ""
  });

  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(oldData);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let updated;

    if (editIndex !== null) {
      updated = [...products];
      updated[editIndex] = product;
      setEditIndex(null);
    } else {
      updated = [...products, product];
    }

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));

    setProduct({ name: "", price: "", image: "", category: "" });
  }

  function Delete(i) {
    let data = products.filter((_, index) => index !== i);
    setProducts(data);
    localStorage.setItem("products", JSON.stringify(data));
  }

  function Edit(i) {
    setProduct(products[i]);
    setEditIndex(i);
  }

  return (
    <div className="container-fluid py-5" style={{
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      minHeight: "100vh"
    }}>

      {/* FORM */}
      <div className="col-md-6 mx-auto">
        <div className="card p-4 shadow-lg border-0 rounded-4">
          <h2 className="text-center mb-4 fw-bold text-primary">
            {editIndex !== null ? "Edit Product" : "Add Product"}
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="form-control mb-3 rounded-pill shadow-sm"
              value={product.name}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-control mb-3 rounded-pill shadow-sm"
              value={product.price}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="form-control mb-3 rounded-pill shadow-sm"
              value={product.image}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              className="form-control mb-3 rounded-pill shadow-sm"
              value={product.category}
              onChange={handleChange}
            />

            <button className="btn btn-primary w-100 rounded-pill fw-bold">
              {editIndex !== null ? "Update Product" : "Save Product"}
            </button>
          </form>
        </div>
      </div>

      {/* SEARCH & SORT */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between flex-wrap gap-2">

          <input
            type="text"
            placeholder="🔍 Search product..."
            className="form-control w-50 rounded-pill shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select w-25 rounded-pill shadow-sm"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>

        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="container mt-4">
        <div className="row">

          {products
            .filter(item =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => {
              if (sort === "low") return a.price - b.price;
              if (sort === "high") return b.price - a.price;
              return 0;
            })
            .map((item, i) => (

              <div className="col-md-3 mb-4" key={i}>
                <div className="card border-0 shadow-lg rounded-4 h-100 product-card">

                  <img
                    src={item.image}
                    alt=""
                    className="p-3"
                    style={{ height: "180px", objectFit: "contain" }}
                  />

                  <div className="card-body text-center">

                    <h5 className="fw-bold">{item.name}</h5>

                    <span className="badge bg-success fs-6 px-3 py-2 mb-2">
                      ₹ {item.price}
                    </span>

                    <p className="text-muted">{item.category}</p>

                    <div className="d-flex justify-content-center gap-2">

                      <button
                        className="btn btn-danger btn-sm rounded-pill px-3"
                        onClick={() => Delete(i)}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-warning btn-sm rounded-pill px-3"
                        onClick={() => Edit(i)}
                      >
                        Edit
                      </button>

                    </div>

                  </div>
                </div>
              </div>

            ))}

        </div>
      </div>

      {/* EXTRA CSS */}
      <style>
        {`
          .product-card {
            transition: all 0.3s ease;
          }

          .product-card:hover {
            transform: translateY(-10px) scale(1.03);
          }
        `}
      </style>

    </div>
  );
}