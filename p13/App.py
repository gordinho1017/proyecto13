from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configuración de la base de datos
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'proyecto11'

mysql = MySQL(app)

# Ruta GET para obtener todos los administradores
@app.route('/administradorq', methods=['GET'])
def get_administradoresq():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM administrador")
    administradores = cur.fetchall()
    cur.close()
    return jsonify(administradores)

# Ruta POST para agregar un nuevo administrador
@app.route('/admin', methods=['POST'])
def add_administrador():
    data = request.json
    nombre = data['nombre']
    contraseña = data['contraseña']
    id_admin = data['id_admin']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO administrador (nombre, contraseña, id_admin) VALUES (%s, %s, %s)", (nombre, contraseña, id_admin))
    mysql.connection.commit()
    cur.close()
    return 'Nuevo administrador agregado', 201

# Ruta PUT para actualizar los datos de un administrador específico
@app.route('/ad/<id>', methods=['PUT'])
def update_administrador(id):
    data = request.json
    nombre = data['nombre']
    contraseña = data['contraseña']
    cur = mysql.connection.cursor()
    cur.execute("UPDATE administrador SET nombre = %s, contraseña = %s WHERE id_admin = %s", (nombre, contraseña, id))
    mysql.connection.commit()
    cur.close()
    return 'Administrador actualizado', 200

# Ruta DELETE para eliminar un administrador específico
@app.route('/admini/<id>', methods=['DELETE'])
def delete_administrador(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM administrador WHERE id_admin = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return 'Administrador eliminado', 200

if __name__ == '__main__':
    app.run(debug=True)

    #admin cancha 
    
@app.route('/admin_ca', methods=['GET'])
def get_admin_cancha():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM administrador")
    administradores = cur.fetchall()
    cur.close()
    return jsonify(administradores)

@app.route('/admin', methods=['POST'])
def add_admin_cancha():
    data = request.json
    nombre = data['nombre']
    contraseña = data['contraseña']
    id_admin = data['id_admin']
    telefono = data['telefono']
    email = data['email']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO administrador (nombre, contraseña, id_admin) VALUES (%s, %s, %s)", (nombre, contraseña, id_admin))
    mysql.connection.commit()
    cur.close()
    return 'Nuevo administrador agregado', 201

@app.route('/ad/<id>', methods=['PUT'])
def update_admin_cancha(id):
    data = request.json
    nombre = data['nombre']
    contraseña = data['contraseña']
    cur = mysql.connection.cursor()
    cur.execute("UPDATE administrador SET nombre = %s, contraseña = %s WHERE id_admin = %s", (nombre, contraseña, id))
    mysql.connection.commit()
    cur.close()
    return 'Administrador actualizado', 200

@app.route('/admini/<id>', methods=['DELETE'])
def delete_adin_cancha(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM administrador WHERE id_admin = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return 'Administrador eliminado', 200

if __name__ == '__main__':
    app.run(debug=True)

