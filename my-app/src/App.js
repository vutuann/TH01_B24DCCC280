import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from 'react'; 
import './App.css';
// Bài 1
function TextCounter() {
  const [text, setText] = useState('');
  const maxLength = 100;
  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      if (newText.length < text.length) return;
      setText(newText);
    }
  };
  return (
    <div className="component">
      <h2>Bộ đếm ký tự</h2>
      <input
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        maxLength={maxLength}
      />
      {text.length === maxLength ? (
        <p className="error">Đã đạt tối đa {maxLength} ký tự!</p>
      ) : (
        <p>Số ký tự: {text.length}</p>
      )}
    </div>
  );
}
// Bài 2
function TrafficLight() {
  const [currentLight, setCurrentLight] = useState('red');

  function handleChangeLight() {
    if (currentLight === 'red') {
      setCurrentLight('green');
    } else if (currentLight === 'green') {
      setCurrentLight('yellow');
    } else {
      setCurrentLight('red');
    }
  }
  return (
    <div className="component">
      <h2>Đèn giao thông</h2>
      <div className="traffic-light">
        <div className={`light ${currentLight === 'red' ? 'red' : ''}`}></div>
        <div className={`light ${currentLight === 'yellow' ? 'yellow' : ''}`}></div>
        <div className={`light ${currentLight === 'green' ? 'green' : ''}`}></div>
      </div>
      <button onClick={handleChangeLight}>Chuyển đèn</button>
    </div>
  );
}
// Bài 3
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  function handleAddTodo() {
    if (inputValue.trim()) {
      const newTodos = todos.slice();
      newTodos.push(inputValue);
      setTodos(newTodos);
      setInputValue('');
    }
  }
  function handleDeleteTodo(index) {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  }
  return (
    <div className="component">
      <h2>Danh sách công việc</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index.toString()}>
            {todo} {}
            <button onClick={() => handleDeleteTodo(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// Bài 4
function ProductItem(props) {
  const id = props.id;
  const name = props.name;
  const price = props.price;
  const onAdd = props.onAdd;
  return (
    <div className="product-item">
      <p>Sản phẩm: {name}</p>
      <p>Giá: {price}đ</p>
      <button onClick={() => onAdd({ id: id, name: name, price: price })}>Thêm vào giỏ</button>
    </div>
  );
}
function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A', price: 1000 },
    { id: 2, name: 'Sản phẩm B', price: 2000 },
    { id: 3, name: 'Sản phẩm C', price: 3000 },
  ]);
  const [cart, setCart] = useState([]);
  function handleAddToCart(product) {
    const newCart = cart.slice();
    newCart.push(product);
    setCart(newCart);
  }
  const totalItems = cart.length;

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
  }
  return (
    <div className="component">
     
      <h1 className="cart-total">Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ</h1>
      {products.map((product) => (
        <ProductItem 
          key={product.id} 
          id={product.id} 
          name={product.name} 
          price={product.price} 
          onAdd={handleAddToCart} 
        />
      ))}
    </div>
  );
}
// Bài 5: Form Đăng ký
const FormRegister = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitForm, setSubmitForm] = useState(null)

    function check() {
        if (name === "" || email === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin")
        } else {
            setSubmitForm({
                name: name,
                email: email,
                password: password,
            })
        }
    }
    return ( 
        <div className="form-register">
            <h1>Form Đăng ký</h1>
            <div className="input-row">
                <input type="text" placeholder="Tên" onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="input-row">
                <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="input-row">
                <input type="password" placeholder="Mật khẩu" onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <button onClick={check}>Đăng ký</button>
            {submitForm && (
                <div>
                    <h3>Thông tin đã nhập:</h3>
                    <p>Tên: {submitForm.name}</p>
                    <p>Email: {submitForm.email}</p>
                    <p>Mật khẩu: {submitForm.password}</p>
                </div>
            )}
        </div>
     );
}
function NavButtons() {
  const navigate = useNavigate();
  const buttonStyle = { border: "2px solid #12100fff", borderRadius: "8px", padding: "10px 24px", background: "#fff", cursor: "pointer", marginRight: "10px", fontSize: "16px" };
  return (
    <div className="nav-buttons">
      <button style={buttonStyle} onClick={() => navigate("/")}>Bài 1</button>
      <button style={buttonStyle} onClick={() => navigate("/bai2")}>Bài 2</button>
      <button style={buttonStyle} onClick={() => navigate("/bai3")}>Bài 3</button>
      <button style={buttonStyle} onClick={() => navigate("/bai4")}>Bài 4</button>
      <button style={buttonStyle} onClick={() => navigate("/bai5")}>Bài 5</button>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <NavButtons />
      <Routes>
        <Route path="/" element={<TextCounter />} />
        <Route path="/bai2" element={<TrafficLight />} />
        <Route path="/bai3" element={<TodoList />} />
        <Route path="/bai4" element={<ShoppingCart />} />
        <Route path="/bai5" element={<FormRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
