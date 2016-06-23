import mysql.connector


class DbConnection:
    products = list()

    def select_one(self, name):
        self.products = list()
        name_pattern = str(name).replace(" ", "-")
        connection = mysql.connector.connect(user='demo', password='demo',
                                             host='89.79.170.207',
                                             database='dieta', charset='utf8', use_unicode=False)
        cursor = connection.cursor()
        query = "SELECT * FROM dieta WHERE nazwa_produktu COLLATE UTF8_GENERAL_CI LIKE '%" + name_pattern + "%';"
        cursor.execute(query)

        for elem in cursor:
            count = cursor.rowcount
            self.parse_row(elem, count)

        cursor.close()
        connection.close()
        return self.products

    def select_all(self):
        self.products = list()
        connection = mysql.connector.connect(user='demo', password='demo',
                                             host='89.79.170.207',
                                             database='dieta', charset='utf8', use_unicode=False)
        cursor = connection.cursor()
        query = "SELECT * FROM dieta;"
        cursor.execute(query)

        for elem in cursor:
            count = cursor.rowcount
            self.parse_row(elem, count)

        cursor.close()
        connection.close()
        return self.products

    def parse_row(self, elem, count):
        name = str(elem[0]).decode('utf8').replace("-", " ")
        calories = elem[1].decode('utf8')
        carbohydrates = elem[2].decode('utf8')
        protein = elem[3].decode('utf8')
        fat = elem[4].decode('utf8').rstrip('\r')
        number = count

        self.products.append({"name": name,
                              "calories": calories,
                              "carbohydrates": carbohydrates,
                              "protein": protein,
                              "fat": fat,
                              "number": number})
