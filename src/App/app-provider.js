// state manager of App
import React from "react";
import { CRYPTO_API_KEY } from "../config/config";
import { pull, includes } from 'lodash'
const cc = require("cryptocompare");
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC"],
      prices:[],
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins,
      ...this.savedSettings(),
    };
  }

  componentDidMount() {
    cc.setApiKey(CRYPTO_API_KEY);
    this.fetchCoins();
    this.fetchPrices()
  }

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({
        favorites: favorites,
      });
    }
  };

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    // favorites = favorites.filter(keyText => keyText != key);
    this.setState({
      favorites: pull(favorites, key),
    });
  };

  isInFavorites = (key) => includes(this.state.favorites, key)
  

  fetchCoins = async () => {
    let coinsListResponse = await cc.coinList();
    if (coinsListResponse && coinsListResponse.Response == "Success") {
      let coinsList = coinsListResponse.Data;
      this.setState({
        coinsList: coinsList,
      });
    }
  };

  setPage = (page) => {
    this.setState({
      page: page,
    });
  };
  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    } else {
      const {favorites} = cryptoDashData
      return {favorites, firstVisit:false}
    }
    return {};
  };
  confirmFavorites = () => {
    this.setState({
      page: "dashboard",
      firstVisit: false,
    }, () => {
      this.fetchPrices()
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: this.state.favorites,
      })
    );
  };

  fetchPrices = async() => {
    if(this.state.firstVisit) {
      return
    }
    this.setState({
      prices: []
    })
    let prices = await this.prices()
    prices = prices.filter(price => Object.keys(price).length)
    this.setState({
      prices: prices,
    }) 
  }

  prices = async() => {
    let returnData = []
    for(let i = 0; i < this.state.favorites.length; i++) {
      try{
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
        returnData.push(priceData)
      } catch(err) {
        console.error('Fetch Price error:',err)
      }
    }
    return returnData
  }

  setFilteredCoins = filteredCoins => {
    this.setState({
      filteredCoins: filteredCoins,
    })
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

/* Pushing APIs to GitHub is not advisable. Anyone can find your keys and use them to make API requests. By using an untracked .env file, you prevent this from happening.
However, you should never store sensitive secrets in a .env file in your frontend code because anyone can see it when they inspect your code. Instead, fetch the data on the server side or use Next.js to mask private variables. */
