from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from json import dumps
from momo_api import momo_api

app = Flask(__name__)
# api = Api(app)

# payment_post_args = reqparse.RequestParser()
# payment_post_args.add_argument("amount", type=str, help="The amount of money of the order")

@app.route('/momo', methods=['GET'])
def momo():
    amount = request.args.get('amount')
    res = momo_api(amount).payment_gen()['payUrl']
    return res

# class Momo(Resource):
#     def post(self, amount):
#         return momo_api(amount).payment_gen()['payUrl']

# api.add_resource(Momo, '/momo_payment/<int:amount>')

if __name__ == '__main__':
    app.debug = True
    app.run()
