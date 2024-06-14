const AddProductForm = () => {
  const styles = {
    form: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
    },
    formGroup: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#3B82F6",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
    },
  };
  return (
    <form style={styles.form}>
      <h2>Add Product</h2>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>
          Product Name
        </label>
        <input type="text" id="name" name="name" style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="image" style={styles.label}>
          Image URL
        </label>
        <input type="text" id="image" name="image" style={styles.input} />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="price" style={styles.label}>
          Price
        </label>
        <input type="number" id="price" name="price" style={styles.input} />
      </div>
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
