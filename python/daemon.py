#!/usr/bin/python
from DbConnection import *
import web
import json

urls = (
    '/', 'all',
    '/search', 'search',
    '/all', 'all'
)

app = web.application(urls, globals())
if __name__ == "__main__":
    app.run()

class all:
    def GET(self):
        web.header('Access-Control-Allow-Origin', '*')
        web.header('Access-Control-Allow-Credentials', 'true')
        db = DbConnection()
        result = db.select_all()
        return json.dumps(result)


class search:
    def GET(self):
        web.header('Access-Control-Allow-Origin', '*')
        web.header('Access-Control-Allow-Credentials', 'true')
        i = web.input(product=None)
        print "printing web.input: " + i.product
        db = DbConnection()
        result = db.select_one(i.product)
        return json.dumps(result)
