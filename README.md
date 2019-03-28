# DevDay 2019 - Python Machine Learning Environment with Jupyter Notebook

## Getting Started

### Prerequisite

- Python 3

### Jupyter Notebook

Installing Jupyter with pip

```shell
python -m pip install jupyter
```

Running Jupyter Notebook

```shell
jupyter notebook --notebook-dir=notebooks
```

### Django Rest Framework Machine Learning

Setup virtualenvwrapper using python 3.6

```shell
    mkvirtualenv -p $(which python3.6) devday
```

OR

```shell
    mkvirtualenv -p $(pyenv root)/versions/3.6.0/bin/python3.6 devday
```

Activate environment

```shell
    source .activate
```

Install packages

```shell
    drfml-install
```

Working with server

```shell
    cd drfml
```

Run server

```shell
    drfml-runserver
```

### Predict API

Open http://localhost:8000/app/predict/ and using POST method for sample data like

```json
[
  {
    "model_name": "model.pkl",
    "MSSubClass": 20,
    "LotFrontage": 80,
    "LotArea": 11622,
    "OverallQual": 5,
    "OverallCond": 6,
    "YearBuilt": 1961,
    "YearRemodAdd": 1961,
    "MasVnrArea": 0,
    "BsmtFinSF1": 468,
    "BsmtFinSF2": 144,
    "BsmtUnfSF": 270,
    "TotalBsmtSF": 882,
    "1stFlrSF": 896,
    "2ndFlrSF": 0,
    "LowQualFinSF": 0,
    "GrLivArea": 896,
    "BsmtFullBath": 0,
    "BsmtHalfBath": 0,
    "FullBath": 1,
    "HalfBath": 0,
    "BedroomAbvGr": 2,
    "KitchenAbvGr": 1,
    "TotRmsAbvGrd": 5,
    "Fireplaces": 0,
    "GarageYrBlt": 1961,
    "GarageCars": 1,
    "GarageArea": 730,
    "WoodDeckSF": 140,
    "OpenPorchSF": 0,
    "EnclosedPorch": 0,
    "3SsnPorch": 0,
    "ScreenPorch": 120,
    "PoolArea": 0,
    "MiscVal": 0,
    "MoSold": 6,
    "YrSold": 2010,
    "SaleCondition": 4
  }
]
```

## Author

- Thong Nguyen <thong.nguyenhuu@asnet.com.vn>
- Truoc Pham <truoc.phamkhac@asnet.com.vn>

## References

- [Python](https://www.python.org/ )
- [Jupyter](https://jupyter.org/)
- [What is the best programming language for Machine Learning?](https://towardsdatascience.com/what-is-the-best-programming-language-for-machine-learning-a745c156d6b7 )
- [Introduction to Machine Learning for Developers](https://blog.algorithmia.com/introduction-machine-learning-developers/ )
- [Machine Learning prerequisites and prework](https://developers.google.com/machine-learning/crash-course/prereqs-and-prework)
