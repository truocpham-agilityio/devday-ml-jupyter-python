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

### House Price Machine Learning Restful API

Setup virtualenvwrapper using python 3.6

```shell
    mkvirtualenv -p $(which python3.6) venv
```

OR

```shell
    mkvirtualenv -p $(pyenv root)/versions/3.6.0/bin/python3.6 venv
```

Activate environment

```shell
    source .activate
```

Install packages

```shell
    venv-install
```

Working with server

```shell
    cd house_price_ml
```

Run server

```shell
    runserver
```

### House Price Prediction WebApp

Open new tab in terminal and run commands

```shell
    cd webapp
    yarn install
    yarn start
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
