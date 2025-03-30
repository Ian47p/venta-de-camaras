from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    return connection

@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    data = request.json
    user_id = data.get('user_id')
    product_id = data.get('product_id')
    quantity = data.get('quantity')

    if not user_id or not product_id or not quantity:
        return jsonify({'error': 'Invalid input'}), 400

    connection = get_db_connection()
    cursor = connection.cursor()

    # Secure parameterized query
    cursor.execute(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
        (user_id, product_id, quantity)
    )
    connection.commit()
    connection.close()

    return jsonify({'message': 'Item added to cart'}), 200

if __name__ == '__main__':
    app.run(debug=True)
