import React, { useState } from "react";


const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  addBtn: {
    background: "#667eea",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  editBtn: {
    marginRight: "5px",
    background: "#facc15",
    border: "none",
    padding: "5px 8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
export default function Todo() {
  const [text, settext] = useState("");
  const [data, setdata] = useState([]);
  const [editindex, seteditindex] = useState(null);

  function handlechange(e) {
    settext(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();

    if (editindex != null) {
      const updatedList = [...data];
      updatedList[editindex] = text;
      setdata(updatedList);
      seteditindex(null);
    } else {
      setdata([...data, text]);
    }
    settext("");
  }

  function Delete(id) {
    let ans = data.filter((el, i) => i !== id);
    setdata(ans);
  }

  function Edit(id) {
    settext(data[id]);
    seteditindex(id);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>✨ Todo App</h2>

        <form onSubmit={handlesubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter task..."
            value={text}
            onChange={handlechange}
            style={styles.input}
          />
          <button style={styles.addBtn}>
            {editindex !== null ? "Update" : "Add"}
          </button>
        </form>

        <ul style={styles.list}>
          {data.map((el, i) => (
            <li key={i} style={styles.item}>
              <span>{el}</span>

              <div>
                <button style={styles.editBtn} onClick={() => Edit(i)}>
                  ✏️
                </button>
                <button style={styles.deleteBtn} onClick={() => Delete(i)}>
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

