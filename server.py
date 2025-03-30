import sqlite3

def add_to_cart(user_id, product_id, quantity):
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()

    # Use parameterized queries to prevent SQL injection
    cursor.execute(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
        (user_id, product_id, quantity)
    )

    connection.commit()
    connection.close()
