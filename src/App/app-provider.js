// state manager of App
import React from "react";
import { pull, includes } from 'lodash'
import moment from 'moment'
const cc = require("cryptocompare");

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10

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
      setCurrentFavorite: this.setCurrentFavorite,
      ...this.savedSettings(),
    };
  }

  componentDidMount() {
    cc.setApiKey(process.env.CRYPTO_API_KEY);
    this.fetchCoins();
    this.fetchPrices()
    this.fetchHistorical()
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

  setCurrentFavorite = sym => {
    this.setState({
      currentFavorite: sym,
      historical: null,
    },() => {
      this.fetchHistorical()
    })
    localStorage.setItem('cryptoDash', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoDash')),
      currentFavorite: sym,
    }))
  }

  savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    } else {
      const {favorites, currentFavorite} = cryptoDashData
      return {favorites, firstVisit:false, currentFavorite}
    }
    return {};
  };
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0]
    this.setState({
      page: "dashboard",
      firstVisit: false,
      currentFavorite: currentFavorite,
    }, () => {
      this.fetchPrices()
      this.fetchHistorical()
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite: currentFavorite,
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

  fetchHistorical = async() => {
    if(this.state.firstVisit) {
      return
    }
    let results = await this.historical()
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => {
          return [
            moment().subtract({months: TIME_UNITS - index}).valueOf(), //x
            ticker['USD']
          ]
        })
      }
    ]
    this.setState({
      historical: historical,
    })
    console.log('results =>', results)
  }

  historical = () => {
    let promises = []
    for(let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite, ['USD'], moment().subtract({months: units}).toDate()
          // subtract is a moment function which is used to decrease by amount
        )
      )
    }
    return Promise.all(promises)
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
