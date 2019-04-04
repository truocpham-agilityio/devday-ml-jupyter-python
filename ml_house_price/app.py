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
    result=request.form
    living_area = result['GrLivArea']
    frontage = result['LotFrontage']
    lot_area = result['LotArea']
    year_built = result['YearBuilt']

    # Default value for user input
    user_input = {
        "MSSubClass": 0,
        "LotFrontage": 0,
        "LotArea": 0,
        "OverallQual": 0,
        "OverallCond": 0,
        "YearBuilt": 0,
        "YearRemodAdd": 0,
        "MasVnrArea": 0,
        "BsmtFinSF1": 0,
        "BsmtFinSF2": 0,
        "BsmtUnfSF": 0,
        "TotalBsmtSF": 0,
        "1stFlrSF": 0,
        "2ndFlrSF": 0,
        "LowQualFinSF": 0,
        "GrLivArea": 0,
        "BsmtFullBath": 0,
        "BsmtHalfBath": 0,
        "FullBath": 0,
        "HalfBath": 0,
        "BedroomAbvGr": 0,
        "KitchenAbvGr": 0,
        "TotRmsAbvGrd": 0,
        "Fireplaces": 0,
        "GarageYrBlt": 0,
        "GarageCars": 0,
        "GarageArea": 0,
        "WoodDeckSF": 0,
        "OpenPorchSF": 0,
        "EnclosedPorch": 0,
        "3SsnPorch": 0,
        "ScreenPorch": 0,
        "PoolArea": 0,
        "MiscVal": 0,
        "MoSold": 0,
        "YrSold": 0,
        "SaleCondition": 0
    }

    user_input['GrLivArea'] = float(living_area)
    user_input['LotFrontage'] = float(frontage)
    user_input['LotArea'] = float(lot_area)
    user_input['YearBuilt'] = float(year_built)

    print(user_input)
    price_pred = gbr.predict(pd.DataFrame([user_input]))[0]

    print('price pred', price_pred)
    price_pred = round(price_pred, 2)
    return json.dumps({'price':price_pred})

if __name__ == '__main__':
    app.run(port=8080, debug=True)
