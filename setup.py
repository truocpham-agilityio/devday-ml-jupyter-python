#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""The setup script."""

from setuptools import setup, find_packages

readme = "This is the package for Django REST Framework Machine Learning"

requirements = [
    'django>=2.1.6',
    'djangorestframework==3.8.2',
    'django-cors-headers',
    'sklearn',
    'pandas',
    'numpy',
    'seaborn',
    'matplotlib'
]

setup_requirements = []

test_requirements = []

dependency_links = []

setup(
    author="Truoc Pham",
    author_email='truoc.phamkhac@asnet.com.vn',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        "Programming Language :: Python :: 2",
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5'
    ],
    description='',
    entry_points={
        'console_scripts': [
            'house_price_ml=house_price_ml.cli:main'
        ],
    },
    install_requires=requirements,
    dependency_links=dependency_links,
    license='MIT license',
    include_package_data=True,
    keywords='house_price_ml',
    name='house_price_ml',
    packages=find_packages(
        include=['house_price_ml.*', 'house_price_ml']),
    package_data={},
    setup_requires=setup_requirements,
    test_suite='tests',
    tests_require=test_requirements,
    url='https://github.com/truocpham-agilityio/devday-ml-jupyter-python',
    version='1.0.0',
    zip_safe=False
)
