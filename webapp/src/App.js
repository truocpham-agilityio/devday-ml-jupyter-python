import React, { Component } from 'react';
import './App.css';

import { Form, Col, Button } from 'react-bootstrap'

class App extends Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isLoading: false,
      isSuccess: false,
      pricePredict: ''
    }

    // Init sample house info
    this.houseInfo = {
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
      "FirstFlrSF": 896,
      "SecondFlrSF": 0,
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
      "ThirdSsnPorch": 0,
      "ScreenPorch": 120,
      "PoolArea": 0,
      "MiscVal": 0,
      "MoSold": 6,
      "YrSold": 2010,
      "SaleCondition": 4
    }
  }

  getRefGrLivArea = (ref) => {
    this.houseInfo.GrLivArea = ref
  }

  getRefLotArea = (ref) => {
    this.lotAreaRef = ref
  }

  getRefLotFrontage = (ref) => {
    this.lotFrontageRef = ref
  }

  getRefBedroomAbvGr = (ref) => {
    this.bedroomAbvGrRef = ref
  }

  getRefKitchenAbvGr = (ref) => {
    this.kitchenAbvGrRef = ref
  }

  getRefFullBath = (ref) => {
    this.fullBathRef = ref
  }

  getRefHalfBath = (ref) => {
    this.halfBathRef = ref
  }

  getRefTotRmsAbvGrd = () => {
    this.totRmsAbvGrdRef = this.bedroomAbvGrRef + this.kitchenAbvGrRef + this.fullBathRef + this.halfBathRef
  }

  getRefOverallCond = (ref) => {
    this.overallCondRef = ref
  }

  getRefOverallQual = (ref) => {
    this.overallQualRef = ref
  }

  getRefYearBuilt = (ref) => {
    this.yearBuiltRef = ref
    this.yearRemodAddRef = ref
    this.garageYrBltRef = ref
  }

  getRefSaleCondition = (ref) => {
    this.saleConditionRef = ref
  }

  getRefBsmtFinSF1 = (ref) => {
    this.bsmtFinSF1Ref = ref
  }

  getRefBsmtFinSF2 = (ref) => {
    this.bsmtFinSF2Ref = ref
  }

  getRefPoolArea = (ref) => {
    this.poolAreaRef = ref
  }

  getRefBsmtUnfSF = (ref) => {
    this.bsmtUnfSFRef = ref
  }

  getRefTotalBsmtSF = () => {
    this.totalBsmtSfRef = this.bsmtFinSF1 + this.bsmtFinSF2 + this.bsmtUnfSFRef
  }

  getRef1stFlrSF = (ref) => {
    this.firstFlrSFRef = ref
  }

  getRef2ndFlrSF = (ref) => {
    this.secondFlrSFRef = ref
  }

  getRefPoolArea = (ref) => {
    this.poolAreaRef = ref
  }

  getRefLowQualFinSF = (ref) => {
    this.lowQualFinSFRef = ref
  }

  getRefWoodDeckSF = (ref) => {
    this.woodDeskSFRef = ref
  }

  getRefOpenPorchSF = (ref) => {
    this.openPorchSFRef = ref
  }

  getRefGarageArea = (ref) => {
    this.garageAreaRef = ref
  }

  getRefGarageCars = (ref) => {
    this.garageCarsRef = ref
  }

  getRefMSSubClass = (ref) => {
    this.msSubClassRef = ref
  }

  getRefScreenPorch = (ref) => {
    this.screenPorchRef = ref
  }

  getRefYrSold = (ref) => {
    this.yearSoldRef = ref
  }

  getRefMoSold = (ref) => {
    this.monthSoldRef = ref
  }

  handleSubmit = () => {
    const self = this;

    const jsonData = {
      "model_name": "model.pkl",
      "MSSubClass": self.houseInfo.MSSubClass.value || self.houseInfo.MSSubClass,
      "LotFrontage": self.houseInfo.LotFrontage.value || self.houseInfo.LotFrontage,
      "LotArea": self.houseInfo.LotArea.value || self.houseInfo.LotArea,
      "OverallQual": self.houseInfo.OverallQual.value || self.houseInfo.OverallQual,
      "OverallCond": self.houseInfo.OverallCond.value || self.houseInfo.OverallCond,
      "YearBuilt": self.houseInfo.YearBuilt.value || self.houseInfo.YearBuilt,
      "YearRemodAdd": self.houseInfo.YearRemodAdd.value || self.houseInfo.YearRemodAdd,
      "MasVnrArea": self.houseInfo.MasVnrArea.value || self.houseInfo.MasVnrArea,
      "BsmtFinSF1": self.houseInfo.BsmtFinSF1.value || self.houseInfo.BsmtFinSF1,
      "BsmtFinSF2": self.houseInfo.BsmtFinSF2.value || self.houseInfo.BsmtFinSF2,
      "BsmtUnfSF": self.houseInfo.BsmtUnfSF.value || self.houseInfo.BsmtUnfSF,
      "TotalBsmtSF": self.houseInfo.TotalBsmtSF.value || self.houseInfo.TotalBsmtSF,
      "1stFlrSF": self.houseInfo.FirstFlrSF.value || self.houseInfo.FirstFlrSF,
      "2ndFlrSF": self.houseInfo.SecondFlrSF.value || self.houseInfo.SecondFlrSF,
      "LowQualFinSF": self.houseInfo.LowQualFinSF.value || self.houseInfo.LowQualFinSF,
      "GrLivArea": self.houseInfo.GrLivArea.value || self.houseInfo.GrLivArea,
      "BsmtFullBath": self.houseInfo.BsmtFullBath.value || self.houseInfo.BsmtFullBath,
      "BsmtHalfBath": self.houseInfo.BsmtHalfBath.value || self.houseInfo.BsmtHalfBath,
      "FullBath": self.houseInfo.FullBath.value || self.houseInfo.FullBath,
      "HalfBath": self.houseInfo.HalfBath.value || self.houseInfo.HalfBath,
      "BedroomAbvGr": self.houseInfo.BedroomAbvGr.value || self.houseInfo.BedroomAbvGr,
      "KitchenAbvGr": self.houseInfo.KitchenAbvGr.value || self.houseInfo.KitchenAbvGr,
      "TotRmsAbvGrd": self.houseInfo.TotRmsAbvGrd.value || self.houseInfo.TotRmsAbvGrd,
      "Fireplaces": self.houseInfo.Fireplaces.value || self.houseInfo.Fireplaces,
      "GarageYrBlt": self.houseInfo.GarageYrBlt.value || self.houseInfo.GarageYrBlt,
      "GarageCars": self.houseInfo.GarageCars.value || self.houseInfo.GarageCars,
      "GarageArea": self.houseInfo.GarageArea.value || self.houseInfo.GarageArea,
      "WoodDeckSF": self.houseInfo.WoodDeckSF.value || self.houseInfo.WoodDeckSF,
      "OpenPorchSF": self.houseInfo.OpenPorchSF.value || self.houseInfo.OpenPorchSF,
      "EnclosedPorch": self.houseInfo.EnclosedPorch.value || self.houseInfo.EnclosedPorch,
      "3SsnPorch": self.houseInfo.ThirdSsnPorch.value || self.houseInfo.ThirdSsnPorch,
      "ScreenPorch": self.houseInfo.ScreenPorch.value || self.houseInfo.ScreenPorch,
      "PoolArea": self.houseInfo.PoolArea.value || self.houseInfo.PoolArea,
      "MiscVal": self.houseInfo.MiscVal.value || self.houseInfo.MiscVal,
      "MoSold": self.houseInfo.MoSold.value || self.houseInfo.MoSold,
      "YrSold": self.houseInfo.YrSold.value || self.houseInfo.YrSold,
      "SaleCondition": self.houseInfo.SaleCondition.value || self.houseInfo.SaleCondition
    }

    self.setState({ isLoading: true }, () => {
      fetch('http://localhost:8000/api/predict/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([jsonData])
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        const pricePredict = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data);

        self.setState({ isSuccess: true });
        self.setState({ pricePredict });

        self.setState({ isLoading: false });
      });
    });

  }

  render() {
    const isLoading = this.state.isLoading;

    return (
      <div className="App">
        <div className="App-container">
          <h4>House Information</h4>
          <hr />
          <Form>

            <Form.Group controlId="formGridGrLivArea">
              <Form.Label>Living Area</Form.Label>
              <Form.Control placeholder="Ground living area square feet" defaultValue={this.houseInfo.GrLivArea} ref={this.getRefGrLivArea} />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridLotArea">
                <Form.Label>Lot Area</Form.Label>
                <Form.Control placeholder="Lot size in square feet" defaultValue={this.houseInfo.LotArea} ref={this.getRefLotArea} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLotFrontage">
                <Form.Label>Lot Frontage</Form.Label>
                <Form.Control placeholder="Linear feet of street connected to property" defaultValue={this.houseInfo.LotFrontage} ref={this.getRefLotFrontage} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridBedroomAbvGr">
                <Form.Label>Number of beedroom</Form.Label>
                <Form.Control placeholder="Number of beedroom" defaultValue={this.houseInfo.BedroomAbvGr} ref={this.getRefBedroomAbvGr} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridKitchenAbvGr">
                <Form.Label>Kitchen</Form.Label>
                <Form.Control placeholder="Number of kitchen" defaultValue={this.houseInfo.KitchenAbvGr} ref={this.getRefKitchenAbvGr} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFullBath">
                <Form.Label>Full Bathroom</Form.Label>
                <Form.Control placeholder="Number of full bathroom" defaultValue={this.houseInfo.FullBath} ref={this.getRefFullBath} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHalfBath">
                <Form.Label>Half Bathroom</Form.Label>
                <Form.Control placeholder="Number of half bathroom" defaultValue={this.houseInfo.HalfBath} ref={this.getRefHalfBath} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridOverallCond">
                <Form.Label>Overall Condition Rate</Form.Label>
                <Form.Control as="select" defaultValue={this.houseInfo.OverallCond} ref={this.getRefOverallCond}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridOverallQual">
                <Form.Label>Overall Quality Rate</Form.Label>
                <Form.Control as="select" defaultValue={this.houseInfo.OverallQual} ref={this.getRefOverallQual}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridYearBuilt">
                <Form.Label>Year Built</Form.Label>
                <Form.Control placeholder="Original construction date by year built" defaultValue={this.houseInfo.YearBuilt} ref={this.getRefYearBuilt} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSaleCondition">
                <Form.Label>Sale Condition</Form.Label>
                <Form.Control as="select" defaultValue={this.houseInfo.SaleCondition} ref={this.getRefSaleCondition}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridBsmtFinSF1">
                <Form.Label>Type 1 finished square feet</Form.Label>
                <Form.Control placeholder="Input square feet" defaultValue={this.houseInfo.BsmtFinSF1} ref={this.getRefBsmtFinSF1} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBsmtFinSF2">
                <Form.Label>Type 2 finished square feet</Form.Label>
                <Form.Control placeholder="Input square feet" defaultValue={this.houseInfo.BsmtFinSF2} ref={this.getRefBsmtFinSF2} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBsmtUnfSF">
                <Form.Label>Unfinished square feet of basement area</Form.Label>
                <Form.Control placeholder="Input square feet" defaultValue={this.houseInfo.BsmtUnfSF} ref={this.getRefBsmtUnfSF} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGrid1stFlrSF">
                <Form.Label>First floor square feet</Form.Label>
                <Form.Control placeholder="Input first floor square feet" defaultValue={this.houseInfo.FirstFlrSF} ref={this.getRef1stFlrSF} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGrid2ndFlrSF">
                <Form.Label>Second floor square feet</Form.Label>
                <Form.Control placeholder="Input second floor square feet" defaultValue={this.houseInfo.SecondFlrSF} ref={this.getRef2ndFlrSF} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPoolArea">
                <Form.Label>Pool area square feet</Form.Label>
                <Form.Control placeholder="Input pool area square feet" defaultValue={this.houseInfo.PoolArea} ref={this.getRefPoolArea} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridLowQualFinSF">
                <Form.Label>Low quality finished square feet</Form.Label>
                <Form.Control placeholder="Input low quality finished square feet" defaultValue={this.houseInfo.LowQualFinSF} ref={this.getRefLowQualFinSF} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWoodDeckSF">
                <Form.Label>Wood deck square feet</Form.Label>
                <Form.Control placeholder="Input wood deck area in square feet" defaultValue={this.houseInfo.WoodDeckSF} ref={this.getRefWoodDeckSF} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridOpenPorchSF">
                <Form.Label>Open porch square feet</Form.Label>
                <Form.Control placeholder="Input area open porch in square feet" defaultValue={this.houseInfo.OpenPorchSF} ref={this.getRefOpenPorchSF} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridGarageArea">
                <Form.Label>Garage Area</Form.Label>
                <Form.Control placeholder="Garage area square feet" defaultValue={this.houseInfo.GarageArea} ref={this.getRefGarageArea} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGarageCars">
                <Form.Label>Garage Cars</Form.Label>
                <Form.Control placeholder="Number of car in garage" defaultValue={this.houseInfo.GarageCars} ref={this.getRefGarageCars} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridMSSubClass">
                <Form.Label>Building class</Form.Label>
                <Form.Control placeholder="E.g. 20" defaultValue={this.houseInfo.MSSubClass} ref={this.getRefMSSubClass} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridScreenPorch">
                <Form.Label>Screen Porch</Form.Label>
                <Form.Control placeholder="E.g. 120" defaultValue={this.houseInfo.ScreenPorch} ref={this.getRefScreenPorch} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridYrSold">
                <Form.Label>Year Sell</Form.Label>
                <Form.Control placeholder="E.g. 2010" defaultValue={this.houseInfo.YrSold} ref={this.getRefYrSold} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMoSold">
                <Form.Label>Month Sell</Form.Label>
                <Form.Control placeholder="E.g. 6" defaultValue={this.houseInfo.MoSold} ref={this.getRefMoSold} />
              </Form.Group>
            </Form.Row>

            <Button
              variant="primary"
              disabled={isLoading}
              onClick={!isLoading ? this.handleSubmit : null}
            >
              {isLoading ? 'Predicting...' : 'Submit'}
            </Button>

          </Form>

          <hr />

          {this.state.isSuccess && <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">House Sale Prediction</h4>
            <p className="house-price-prediction">{this.state.pricePredict}</p>
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
