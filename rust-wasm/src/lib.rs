mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen] 
pub fn say_hello(user: &str) -> String {
    return format!("Hello {}!", user);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rust-wasm!");
}
