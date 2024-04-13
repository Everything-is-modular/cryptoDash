// state manager of App
import React from "react";
const cc = require('cryptocompare')
export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      ...this.savedSettings(),
    };
  }

  componentDidMount() {
    this.fetchCoins()
  }

  fetchCoins = async() => {
    let coinsListResponse = await cc.coinList()
    if(coinsListResponse && coinsListResponse.Response == 'Success') {
        let coinsList = coinsListResponse.Data
        this.setState({
            coinsList: coinsList,
        })
    }
  }

  setPage = (page) => {
    this.setState({
      page: page,
    });
  };
  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))
    if(!cryptoDashData) {
        return { page: 'settings',firstVisit: true}
    }
    return {}
  }
  confirmFavorites = () => {
    this.setState({
        page: 'dashboard',
        firstVisit: false,
    })
    localStorage.setItem('cryptoDash', JSON.stringify({
        test: 'hello'
    }))
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
        {/* passing children here so that the children can have access to the context */}
      </AppContext.Provider>
    );
  }
}
