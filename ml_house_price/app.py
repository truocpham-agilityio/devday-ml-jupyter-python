import json

from flask import Flask, abort, jsonify, request, render_template
from sklearn.externals import joblib
import numpy as np
import pandas as pd

gbr = joblib.load('models/model_house_price.pkl')

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api',methods=['POST'])
def get_delay():
    result = request.form
    living_area = result['GrLivArea']
    frontage = result['LotFrontage']
    lot_area = result['LotArea']
    year_built = result['YearBuilt']
    fist_floor_square_feet = result['1stFlrSF']

    # Default value for user input
    user_input = {
        'GrLivArea': 0,
        'LotFrontage': 0,
        'LotArea': 0,
        'YearBuilt': 0,
        '1stFlrSF': 0
    }

    user_input['GrLivArea'] = float(living_area)
    user_input['LotFrontage'] = float(frontage)
    user_input['LotArea'] = float(lot_area)
    user_input['YearBuilt'] = float(year_built)
    user_input['1stFlrSF'] = float(fist_floor_square_feet)

    print(user_input)
    price_pred = np.expm1(gbr.predict(pd.DataFrame([user_input]))[0])
    # price_pred = gbr.predict(pd.DataFrame([user_input]))[0]

    print('price pred', price_pred)
    price_pred = round(price_pred, 2)
    return json.dumps({'price':price_pred})

if __name__ == '__main__':
    app.run(port=8080, debug=True)
